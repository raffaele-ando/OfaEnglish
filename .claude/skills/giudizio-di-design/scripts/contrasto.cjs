#!/usr/bin/env node
/*
 * contrasto.cjs — rapporto di contrasto WCAG 2.x tra colori hex.
 *
 * Uso:
 *   node contrasto.cjs "#FFFFFF" "#1CB0F6"            un confronto
 *   node contrasto.cjs "#fff:#1CB0F6" "#4B4B4B:#fff"  più coppie testo:sfondo
 *   node contrasto.cjs --grafica "#2F8500:#E5E7EB"    coppia grafica (min 3 invece di 4.5)
 *   node contrasto.cjs --palette palette.json   controlla tutte le coppie di un file JSON
 *        (formato: { "colori": {nome: hex}, "coppie": {gruppo: [{testo, sfondo, tipo, uso}]} })
 *   node contrasto.cjs --suggerisci "#58CC02" --su "#FFFFFF" [--min 4.5]
 *        trova la tonalità più vicina (stessa tinta, più scura o più chiara)
 *        che raggiunge il contrasto minimo contro lo sfondo dato
 *
 * Soglie: testo normale 4.5, testo grande (>= 24px, o >= 18.66px bold) 3,
 * componenti UI e grafici (bordi di input, barre, icone significative) 3.
 * Nel file palette ogni coppia ha "testo" e "sfondo" (per la grafica anche "colore" e
 * "adiacente") e la soglia si decide così: "min" esplicito, altrimenti "tipo": "grafica"
 * (barra/traccia, anelli, icone con significato, anello di focus, bordi di input) = 3,
 * "tipo": "testo-grande" = 3, altrimenti 4.5.
 * Exit code 1 se almeno una coppia non passa (utile in CI).
 */
const fs = require('fs');
const path = require('path');

function parseHex(h) {
  let s = String(h).trim().replace(/^#/, '');
  if (s.length === 3) s = s.split('').map(c => c + c).join('');
  if (!/^[0-9a-fA-F]{6}$/.test(s)) throw new Error(`Colore non valido: ${h}`);
  return [0, 2, 4].map(i => parseInt(s.slice(i, i + 2), 16));
}
function lum(rgb) {
  const [r, g, b] = rgb.map(v => {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}
function ratio(a, b) {
  const la = lum(parseHex(a)), lb = lum(parseHex(b));
  const [hi, lo] = la > lb ? [la, lb] : [lb, la];
  return (hi + 0.05) / (lo + 0.05);
}
function verdict(r, min) {
  const ok = r >= min;
  const lvl = r >= 7 ? 'AAA' : r >= 4.5 ? 'AA' : r >= 3 ? 'AA grande/UI' : 'NO';
  return { ok, lvl };
}
// HSL helpers per --suggerisci
function rgbToHsl([r, g, b]) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0; const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    h = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
    h /= 6;
  }
  return [h, s, l];
}
function hslToHex(h, s, l) {
  const f = (p, q, t) => {
    if (t < 0) t += 1; if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };
  let r, g, b;
  if (s === 0) r = g = b = l;
  else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s, p = 2 * l - q;
    r = f(p, q, h + 1 / 3); g = f(p, q, h); b = f(p, q, h - 1 / 3);
  }
  return '#' + [r, g, b].map(v => Math.round(v * 255).toString(16).padStart(2, '0')).join('').toUpperCase();
}
function suggest(color, bg, min) {
  const [h, s, l] = rgbToHsl(parseHex(color));
  const out = {};
  for (const dir of [-1, 1]) {
    for (let step = 0; step <= 100; step++) {
      const nl = l + dir * step / 100;
      if (nl < 0 || nl > 1) break;
      const c = hslToHex(h, s, nl);
      if (ratio(c, bg) >= min) { out[dir < 0 ? 'piu_scuro' : 'piu_chiaro'] = c; break; }
    }
  }
  return out;
}

function row(fg, bg, min, label) {
  const r = ratio(fg, bg);
  const v = verdict(r, min);
  const mark = v.ok ? 'OK  ' : 'FAIL';
  console.log(`${mark} ${r.toFixed(2).padStart(5)}:1  (min ${min})  ${fg.toUpperCase()} su ${bg.toUpperCase()}  [${v.lvl}]${label ? '  ' + label : ''}`);
  return v.ok;
}

const args = process.argv.slice(2);
if (!args.length || args.includes('-h') || args.includes('--help')) {
  console.log(fs.readFileSync(__filename, 'utf8').split('*/')[0]);
  process.exit(0);
}
let allOk = true;
const minIdx = args.indexOf('--min');
const minArg = minIdx >= 0 ? parseFloat(args[minIdx + 1]) : null;

if (args[0] === '--palette') {
  if (!args[1]) { console.error('Indica il file: --palette percorso/palette.json'); process.exit(2); }
  const file = path.resolve(args[1]);
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const colors = data.colori || {};
  const res = c => (colors[c] ? colors[c] : c);
  let tot = 0, ko = 0;
  for (const group of Object.keys(data.coppie || {})) {
    console.log(`\n== ${group} ==`);
    for (const p of data.coppie[group]) {
      const fg = p.testo || p.colore, bg = p.sfondo || p.adiacente;
      const min = p.min || (p.tipo === 'grafica' || p.tipo === 'testo-grande' ? 3 : 4.5);
      const ok = row(res(fg), res(bg), min, `${p.tipo === 'grafica' ? '[grafica] ' : ''}${p.uso || ''} (${fg} / ${bg})`);
      tot++; if (!ok) ko++;
      allOk = ok && allOk;
    }
  }
  console.log(`\n${tot} coppie, ${ko} FAIL`);
} else if (args[0] === '--suggerisci') {
  const color = args[1];
  const suIdx = args.indexOf('--su');
  const bg = suIdx >= 0 ? args[suIdx + 1] : '#FFFFFF';
  const min = minArg || (args.includes('--grafica') ? 3 : 4.5);
  const s = suggest(color, bg, min);
  console.log(`Per ${color} su ${bg} (min ${min}):`);
  for (const [k, v] of Object.entries(s)) console.log(`  ${k}: ${v}  -> ${ratio(v, bg).toFixed(2)}:1`);
  if (!Object.keys(s).length) console.log('  nessuna tonalità della stessa tinta raggiunge la soglia');
} else {
  const pairs = [];
  const plain = args.filter((a, i) => !a.startsWith('--') && args[i - 1] !== '--min');
  if (plain.length === 2 && !plain[0].includes(':')) pairs.push(plain);
  else for (const a of plain) pairs.push(a.split(':'));
  const def = minArg || (args.includes('--grafica') ? 3 : 4.5);
  for (const [fg, bg] of pairs) allOk = row(fg, bg, def) && allOk;
}
process.exit(allOk ? 0 : 1);
