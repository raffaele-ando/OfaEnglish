#!/usr/bin/env node
/*
 * controlla_copy.cjs — revisione automatica dei testi e di alcuni punti di accessibilità
 * di un'interfaccia in italiano (skill design-e-copy).
 *
 * Uso:
 *   node controlla_copy.cjs [percorsi...] [--ext .tsx,.jsx,.html,.ts] [--max 20] [--json] [--solo inglese,glossario,...]
 *   (senza percorsi: la cartella corrente)
 *
 * Controlli:
 *   inglese     parole inglesi tipiche dell'interfaccia in stringhe mostrate all'utente
 *   glossario   parole della colonna «non usare» di references/copy.md (+ tifo, colpa, burocratese)
 *   sinonimi    due termini per lo stesso concetto nello stesso progetto (frasi/domande…)
 *   maiuscole   Title Case italiano o MAIUSCOLO scritto nel sorgente
 *   conteggi    numeri scritti a mano nei testi: "(606)", "(su 60)", "/30", "25/30", "(10s)"
 *   html        <html lang> diverso da "it", zoom bloccato (user-scalable=no, maximum-scale=1)
 *   aria        <button> con sola icona senza aria-label (euristico)
 *   alert       alert()/confirm() nativi al posto di un dialogo
 *
 * Esclusi per default: node_modules, dist, build, .git, coverage, e i file di contenuti
 * (cartelle/file con nome data, content, questions, fixtures, locales/en, *.test.*, *.d.ts).
 * Per ignorare una riga di proposito aggiungi il commento: copy-ok
 * Exit code: 0 sempre (è un report), salvo errori di lettura.
 */
const fs = require('fs');
const path = require('path');

// ---------- argomenti ----------
const argv = process.argv.slice(2);
if (argv.includes('-h') || argv.includes('--help')) {
  console.log(fs.readFileSync(__filename, 'utf8').split('*/')[0]);
  process.exit(0);
}
function opt(name, def) {
  const i = argv.indexOf(name);
  return i >= 0 ? argv[i + 1] : def;
}
const EXT = opt('--ext', '.tsx,.jsx,.html,.ts,.js,.vue,.svelte').split(',').map(s => s.trim());
const MAX = parseInt(opt('--max', '20'), 10);
const JSON_OUT = argv.includes('--json');
const SOLO = opt('--solo', '') ? opt('--solo', '').split(',') : null;
const valued = new Set(['--ext', '--max', '--solo']);
const targets = argv.filter((a, i) => !a.startsWith('--') && !valued.has(argv[i - 1]));
if (!targets.length) targets.push('.');

const SKIP_DIR = /^(node_modules|dist|build|\.git|coverage|\.next|out|vendor)$/;
const SKIP_CONTENT = /(^|[\/\\])(data|content|contents|questions?|fixtures|mocks?|seed)([\/\\.]|$)|locales?[\/\\]en|\.test\.|\.spec\.|\.d\.ts$|\.min\.js$/i;

function walk(p, out) {
  let st;
  try { st = fs.statSync(p); } catch { console.error(`Non trovo: ${p}`); return; }
  if (st.isDirectory()) {
    for (const f of fs.readdirSync(p)) if (!SKIP_DIR.test(f)) walk(path.join(p, f), out);
  } else if (EXT.includes(path.extname(p)) && (!SKIP_CONTENT.test(p) || targets.includes(p))) out.push(p);
}
const files = [];
targets.forEach(t => walk(t, files));

// ---------- dizionari ----------
// parole inglesi tipiche dell'interfaccia → proposta italiana (da references/copy.md §9)
const EN = [
  ['Mock Exam', 'Simulazione d\'esame'], ['Start Exam', 'Inizia'], ['Sign in', 'Accedi'], ['Sign out', 'Esci'],
  ['Log in', 'Accedi'], ['Log out', 'Esci'], ['Logout', 'Esci'], ['Login', 'Accedi'], ['Sign up', 'Registrati'],
  ['Submit', 'Consegna / Conferma'], ['Next', 'Continua'], ['Back', 'Indietro'], ['Previous', 'Precedente'],
  ['Cancel', 'Annulla'], ['Start', 'Inizia'], ['Continue', 'Continua'], ['Retry', 'Riprova'], ['Try again', 'Riprova'],
  ['Review', 'Da rivedere / Rivedi'], ['Stats', 'Statistiche'], ['Statistics', 'Statistiche'], ['Settings', 'Impostazioni'],
  ['Score', 'Punteggio'], ['Best score', 'Miglior punteggio'], ['Passed', 'Superata'], ['Failed', 'Non superata'],
  ['Question', 'Domanda'], ['Questions', 'domande'], ['Answer', 'Risposta'], ['Your Answer', 'La tua risposta'],
  ['No answer', 'Omessa'], ['Correct', 'Giusta / Risposta giusta'], ['Incorrect', 'Errata'], ['Wrong', 'Errata'],
  ['Time taken', 'Tempo'], ['Return to Menu', 'Torna al menu'], ['Perfect score', 'N su N!'], ['Nothing to review', 'Niente da rivedere'],
  ['Import', 'Importa'], ['Export', 'Esporta'], ['Upload', 'Carica'], ['Download', 'Scarica'],
  ['Save', 'Salva'], ['Delete', 'Elimina'], ['Edit', 'Modifica'], ['Close', 'Chiudi'], ['Done', 'Fatto'],
  ['Loading', 'Caricamento…'], ['Error', 'Errore'], ['Success', '(frase concreta)'], ['Search', 'Cerca'],
  ['Share', 'Condividi'], ['Show', 'Mostra'], ['Hide', 'Nascondi'], ['Skip', 'Salta'], ['Finish', 'Fine / Consegna'],
  ['Complete', 'Completata'], ['Completed', 'Completata'], ['Required', 'Obbligatorio'], ['Welcome', 'Benvenuto'],
  ['Hint', 'Suggerimento'], ['Synced', 'Sincronizzato'], ['Skill Profile', 'Profilo per argomento'], ['Mastery', 'Imparate'],
  ['Pass Rate', 'Simulazioni superate'], ['Weakness', 'Punti deboli'], ['Active Recall', 'Richiamo attivo'], ['Streak', '(N di fila)'], ['Level', 'Livello'],
  ['Consistency', 'Costanza'], ['Last', 'Ultimi'], ['Days', 'giorni'], ['minutes', 'minuti'], ['seconds', 'secondi'],
  ['time limit', 'minuti di tempo'], ['Multiple choice', 'a risposta multipla'], ['required to pass', 'per superarla'],
  ['immediate feedback', 'correzione solo alla fine'], ['Debug', 'Diagnostica'], ['Info', 'Informazioni'],
  ['Profile', 'Profilo'], ['Help', 'Aiuto'], ['Home', 'Home (ok) / Inizio'], ['Dashboard', 'Statistiche'],
];
const EN_RE = EN.map(([w, it]) => [new RegExp(`(^|[^A-Za-zÀ-ÿ])${w.replace(/ /g, '\\s+')}(?![A-Za-zÀ-ÿ])`, w === w.toLowerCase() ? 'i' : ''), w, it]);
// parole brevi da non segnalare mai (italiane o prestiti accettati)
const EN_OK = /^(Home|Info)$/;

// glossario «non usare» → proposta
const GLOSSARIO = [
  [/\bMaestria\b/i, 'Imparate / Domande imparate'], [/\bMaster(y|ed)\b/i, 'Imparate'], [/\bSyllabus\b/i, 'Imparate'],
  [/\bCopertura\b/i, 'Imparate (la copertura cresce anche sbagliando)'], [/\bPrecisione\b/i, 'Accuratezza'],
  [/\bXP\b/, 'niente XP (gamification finta)'], [/\bLiv\.\s*\{?\d*/, 'niente livelli XP'], [/\bSfida quotidiana\b/i, 'niente sfide quotidiane'],
  [/\bObiettivo giornaliero\b/i, 'niente quote giornaliere'], [/\bstreak\b/i, '«N di fila» (solo dentro la sessione)'], [/\bcombo\b/i, '«N di fila»'],
  [/\bCustom\b/, 'Altre modalità'], [/\bTutto il Database\b/i, 'Tutte le domande'], [/\bPrimo Corpus Iniziale\b/i, 'Primo corpus'],
  [/\bRecord\b/, 'Miglior punteggio'], [/\bPuoi farcela\b/i, 'togli (tifo)'], [/\bCi sei quasi\b/i, 'togli (tifo)'],
  [/\bContinua ad esercitarti\b/i, 'togli (predica)'], [/\bOttimo lavoro\b/i, 'togli o usa solo per un successo vero'],
  [/\bNon mollare\b/i, 'togli (tifo)'], [/\bPeccato\b/i, '«Errata.» (niente dramma)'], [/\bOps\b/i, 'frase neutra'],
  [/\bPurtroppo\b/i, 'frase neutra'], [/\bHai sbagliato\b/i, '«Errata.»'], [/\bSbagliato!/i, '«Errata.»'], [/\bRisposta errata\b/i, '«Errata.»'],
  [/\bSi prega\b/i, 'imperativo con il tu'], [/\bGentile utente\b/i, 'togli'], [/\bSiamo spiacenti\b/i, 'togli, di\' cosa fare'],
  [/\bcon successo\b/i, 'frase concreta («Progressi importati.»)'], [/\bSi è verificato un errore\b/i, 'cosa è successo + cosa fare'],
  [/\bclicca(re|ndo)?\b/i, '«tocca» o un verbo neutro (scegli, apri)'], [/\bsemplicemente\b/i, 'togli (condiscendente)'],
  [/!{2,}/, 'un solo punto esclamativo'], [/\.\.\./, 'il carattere «…»'], [/\bFirebase\b/, 'gergo tecnico: spostalo nei «Dettagli»'],
];

// sinonimi: gruppi di termini che non devono convivere nello stesso progetto
const SINONIMI = [
  { nome: 'elemento di studio', gruppi: { 'frase/frasi': /\bfras[ei]\b/i, 'domanda/domande': /\bdomand[ae]\b/i } },
  { nome: 'miglior punteggio', gruppi: { 'Record': /\bRecord\b/, 'Miglior punteggio': /\bMiglior punteggio\b/i } },
  { nome: 'simulazione', gruppi: { 'Simulazione': /\bSimulazion[ei]\b/i, 'Mock/Exam': /\bMock\b|\bExam\b/ } },
  { nome: 'non risposte', gruppi: { 'omesse': /\bomess[ae]\b/i, 'saltate': /\bsaltat[ae]\b/i, 'No answer': /\bNo answer\b/i } },
  { nome: 'imparate', gruppi: { 'Imparate': /\bimparat[ae]\b/i, 'Maestria/Mastery': /\bMaestria\b|\bMastery\b/i } },
  { nome: 'continuare', gruppi: { 'Continua': /\bContinua\b/, 'Next/Avanti': /\bNext\b|\bAvanti\b/ } },
];

// parole con maiuscola ammessa dentro una frase (nomi propri, sigle)
const PROPRI = new Set(['OFA', 'Polimi', 'Politecnico', 'Milano', 'Google', 'Firebase', 'Brave', 'Apple', 'TOLC', 'PDF', 'Italia', 'Adblocker', 'Chrome', 'Safari']);

// ---------- estrazione dei testi ----------
function blankComments(src, ext) {
  const keep = m => m.replace(/[^\n]/g, ' ');
  if (ext === '.html' || ext === '.vue' || ext === '.svelte') src = src.replace(/<!--[\s\S]*?-->/g, keep);
  src = src.replace(/\{\s*\/\*[\s\S]*?\*\/\s*\}/g, keep).replace(/\/\*[\s\S]*?\*\//g, keep);
  src = src.replace(/(^|[^:'"`\\])(\/\/.*)$/gm, (m, a, b) => a + keep(b));
  return src;
}
function lineOf(src, idx) { let n = 1; for (let i = 0; i < idx; i++) if (src.charCodeAt(i) === 10) n++; return n; }

const CODEY = /[;=]|=>|&&|\|\||\?:|\.\.\.[A-Za-z_$]|^\s*,|\b(return|const|let|var|function|import|export|class|extends|interface|type|if|for|while)\b|^\s*[)\]}]/;
function looksLikeClassList(s) {
  const t = s.trim().split(/\s+/);
  const classy = t.filter(w => /^[!a-z0-9@:\[\]\/\.\-_#%()&>*,=']+$/.test(w) && /[-:\[\/]/.test(w)).length;
  return classy >= Math.max(1, t.length * 0.5);
}
function isUiString(s, ctx) {
  const t = s.trim();
  if (!t || !/[A-Za-zÀ-ÿ]/.test(t) || t.length > 400) return false;
  if (/^(https?:|mailto:|data:|\.{0,2}\/|#[0-9a-f]{3,8}\b|@\/)/i.test(t)) return false;
  if (/^[\w.\-]+\.(tsx?|jsx?|css|json|svg|png|jpe?g|webp|html)$/i.test(t)) return false;
  if (looksLikeClassList(t)) return false;
  if (/^[a-z][\w\-]*$/.test(t)) return false;                      // chiavi, identificatori, 'dark', 'initial'
  if (/^[A-Z0-9_]+$/.test(t) && t.length > 1 && !/^[A-Z]{3,}$/.test(t)) return false; // COSTANTI_CON_UNDERSCORE
  if (/^[\w\-]+(\.[\w\-]+)+$/.test(t)) return false;                 // a.b.c
  if (/\b(console\.\w+|new Error|throw|require|import|addEventListener|getItem|setItem|removeItem|querySelector|createElement|getElementById|matchMedia)\s*\(\s*$/.test(ctx)) return false;
  if (/\b(className|class|key|id|href|src|type|rel|role|as|method|target|stroke\w*|fill|d|viewBox|xmlns|lang|charset|content|dataKey|variant)\s*=\s*\{?\s*$/.test(ctx)) return false;
  if (/(case|===?|!==?)\s*$/.test(ctx)) return false;
  return true;
}

function extract(src, ext) {
  const out = []; // {text, idx, kind}
  const jsxLike = ext !== '.ts' && ext !== '.js';
  let rest = src;
  if (jsxLike) {
    // testo JSX/HTML: >testo<  >testo{  }testo<
    const re = /(>|\})([^<>{}]+)(?=<|\{)/g;
    let m;
    while ((m = re.exec(src))) {
      const text = m[2];
      const next = src[m.index + m[0].length];
      if (m[1] === '}' && next === '{') continue;
      if (!/[A-Za-zÀ-ÿ0-9]/.test(text) || CODEY.test(text)) continue;
      // pezzi di codice presi per testo: confronti e ternari (x > 0 ? `…` : '-')
      if (text.includes('`') || /\?\s*[`'"<(]/.test(text) || (next === '{' && /\?\s*$/.test(text)) || /^\s*[\d.]+\s*(\?|\)|&|\|)/.test(text)) continue;
      if (/^\s*\/?\d*\s*$/.test(text) && !/\/\d/.test(text)) continue;
      if (/^\s*(\)|\?|:)/.test(text)) continue;
      const start = m.index + m[1].length;
      out.push({ text: text.replace(/\s+/g, ' ').trim(), idx: start + (text.length - text.trimStart().length), kind: 'jsx' });
      rest = rest.slice(0, start) + text.replace(/[^\n]/g, ' ') + rest.slice(start + text.length);
    }
    // attributi testuali espliciti
    const attr = /\b(title|placeholder|aria-label|alt|label)\s*=\s*"([^"]*)"/g;
    while ((m = attr.exec(rest))) out.push({ text: m[2], idx: m.index + m[0].indexOf('"') + 1, kind: 'attr:' + m[1] });
    rest = rest.replace(attr, x => x.replace(/[^\n]/g, ' '));
  }
  // stringhe letterali '…' "…" (su una riga) e template `…` (parti statiche)
  const str = /(["'])((?:\\.|(?!\1)[^\\\n])*)\1|`((?:\\.|[^\\`])*)`/g;
  let m;
  while ((m = str.exec(rest))) {
    const raw = m[2] !== undefined ? m[2] : m[3];
    const ctx = rest.slice(Math.max(0, m.index - 60), m.index);
    const parts = m[3] !== undefined ? raw.split(/\$\{[^}]*\}/) : [raw];
    const text = parts.join(' {…} ').replace(/\s+/g, ' ').trim();
    if (isUiString(parts.join(' '), ctx)) out.push({ text, idx: m.index + 1, kind: 'str' });
  }
  return out;
}

// <button …>…</button> con attributi che possono contenere => e {…}
function findButtons(src) {
  const out = [];
  const re = /<button\b/g;
  let m;
  while ((m = re.exec(src))) {
    let i = m.index + 7, depth = 0, q = null;
    for (; i < src.length; i++) {
      const c = src[i];
      if (q) { if (c === q && src[i - 1] !== '\\') q = null; continue; }
      if (c === '"' || c === "'" || c === '`') q = c;
      else if (c === '{') depth++;
      else if (c === '}') depth--;
      else if (c === '>' && depth === 0) break;
    }
    const attrs = src.slice(m.index + 7, i);
    if (attrs.trimEnd().endsWith('/')) continue;
    const close = src.indexOf('</button>', i);
    if (close < 0) continue;
    out.push({ attrs, inner: src.slice(i + 1, close), index: m.index });
  }
  return out;
}

// ---------- controlli ----------
const findings = [];
const add = (cat, file, line, text, msg) => findings.push({ cat, file, line, text, msg });
const synonymHits = SINONIMI.map(() => ({}));

function titleCaseIssue(t) {
  const clean = t.replace(/\{…\}/g, ' ').replace(/[«»"()]/g, ' ');
  if (/^[^a-zà-ÿ]*$/.test(clean) && /[A-ZÀ-Ý]{4,}/.test(clean)) {
    const caps = clean.match(/\b[A-ZÀ-Ý]{4,}\b/g) || [];
    const bad = caps.filter(w => !PROPRI.has(w));
    if (bad.length) return `MAIUSCOLO nel sorgente («${bad.join(' ')}»): scrivi in minuscolo e usa CSS uppercase`;
  }
  const sentences = clean.split(/[.!?:·•—–]\s+|\n/);
  for (const s of sentences) {
    const words = s.trim().split(/\s+/).filter(w => /^[A-Za-zÀ-ÿ']+$/.test(w));
    if (words.length < 2) continue;
    const later = words.slice(1).filter(w => w.length > 2 || /^[A-ZÀ-Ý]/.test(w));
    if (PROPRI.has(words[0]) || /^[A-Z]{2,}$/.test(words[0])) continue;   // nome di prodotto: "OFA Polimi Prep"
    const capped = later.filter(w => /^[A-ZÀ-Ý][a-zà-ÿ']/.test(w) && !PROPRI.has(w));
    const need = words.length >= 4 ? 2 : 1;                               // in una frase lunga una maiuscola è di solito un nome proprio
    if (capped.length >= need && capped.length >= Math.ceil(later.length / 2)) return `Title Case: «${s.trim()}» → maiuscola solo iniziale`;
  }
  return null;
}

for (const file of files) {
  const src0 = fs.readFileSync(file, 'utf8');
  const ext = path.extname(file);
  const lines0 = src0.split('\n');
  const okLine = n => /copy-ok/.test(lines0[n - 1] || '');
  const src = blankComments(src0, ext);

  // html
  if (ext === '.html' || /<html[\s>]/.test(src)) {
    const h = src.match(/<html\b[^>]*>/i);
    if (h) {
      const lang = (h[0].match(/lang\s*=\s*["']([^"']*)["']/i) || [])[1];
      const ln = lineOf(src, h.index);
      if (!lang) add('html', file, ln, h[0], 'manca lang: usa <html lang="it">');
      else if (!/^it\b/i.test(lang)) add('html', file, ln, h[0], `lang="${lang}" con interfaccia italiana: usa lang="it"`);
    }
    const vp = /<meta[^>]+name=["']viewport["'][^>]*>/i.exec(src);
    if (vp && /user-scalable\s*=\s*(no|0)|maximum-scale\s*=\s*1(\.0)?\b/i.test(vp[0]))
      add('html', file, lineOf(src, vp.index), vp[0].slice(0, 120), 'zoom bloccato: togli maximum-scale e user-scalable=no');
  }

  // alert / confirm
  const al = /(^|[^.\w])(window\.)?(alert|confirm)\s*\(/g;
  let m;
  while ((m = al.exec(src))) {
    const ln = lineOf(src, m.index);
    if (!okLine(ln)) add('alert', file, ln, lines0[ln - 1].trim().slice(0, 100), `${m[3]}() nativo: usa un <dialog> o un avviso nella pagina`);
  }

  // pulsanti con sola icona
  if (ext !== '.ts') {
    for (const b of findButtons(src)) {
      const { attrs, inner, index } = b;
      if (/aria-label(ledby)?\s*=/.test(attrs) || /\{\s*\.\.\./.test(attrs)) continue;
      const hasIcon = /<([A-Z]\w*|svg|img|i)\b/.test(inner);
      if (!hasIcon) continue;
      // espressioni {…}: se contenevano tag sono icone, altrimenti possono essere testo ({count})
      const TAG = '\u0001';
      let text = inner.replace(/<(?:[^>{}]|\{[^{}]*\})*>/g, TAG);
      const exprs = text.match(/\{[^{}]*\}/g) || [];
      const textExpr = exprs.some(e => (!e.includes(TAG) && !/^\{\s*\/\*/.test(e)) ||
        /\u0001[^\u0001{}()?:]*[A-Za-zÀ-ÿ0-9]/.test(e) || /['"`][^'"`]*[A-Za-zÀ-ÿ][^'"`]*['"`]/.test(e));
      text = text.split(TAG).join(' ');
      text = text.replace(/\{[^{}]*\}/g, ' ');
      if (/[A-Za-zÀ-ÿ0-9]/.test(text) || textExpr) continue;
      const ln = lineOf(src, index);
      if (okLine(ln)) continue;
      const icon = (inner.match(/<([A-Z]\w*)/) || [, 'icona'])[1];
      const hasTitle = /\btitle\s*=/.test(attrs);
      add('aria', file, ln, `<button> con <${icon}>`, hasTitle ? 'solo title: aggiungi aria-label in italiano e area ≥ 44 px' : 'pulsante solo icona senza nome: aggiungi aria-label in italiano');
    }
  }

  // testi
  for (const { text, idx, kind } of extract(src, ext)) {
    const ln = lineOf(src, idx);
    if (okLine(ln)) continue;
    const short = text.length > 90 ? text.slice(0, 87) + '…' : text;
    let english = false;
    for (const [re, w, it] of EN_RE) {
      if (EN_OK.test(w)) continue;
      if (re.test(text)) { add('inglese', file, ln, short, `«${w}» → ${it}`); english = true; break; }
    }
    for (const [re, it] of GLOSSARIO) {
      const g = text.match(re);
      if (g) add('glossario', file, ln, short, `«${g[0].trim()}» → ${it}`);
    }
    if (!english && kind !== 'attr:alt') {
      const tc = titleCaseIssue(text);
      if (tc) add('maiuscole', file, ln, short, tc);
    }
    const cnt = text.match(/\((?:su\s+)?\d+[^)]*\)|\b\d+\s*\/\s*\d+\b|(^|\s)\/\s*\d{2,}\b/);
    if (cnt) add('conteggi', file, ln, short, `«${cnt[0].trim()}» scritto a mano: calcolalo dai dati o da una costante`);
    SINONIMI.forEach((s, i) => {
      for (const [k, re] of Object.entries(s.gruppi)) if (re.test(text)) (synonymHits[i][k] ||= []).push(`${file}:${ln}`);
    });
  }
}

SINONIMI.forEach((s, i) => {
  const used = Object.entries(synonymHits[i]);
  if (used.length > 1) {
    const desc = used.map(([k, v]) => `${k} ×${v.length} (es. ${v[0]})`).join(' · ');
    add('sinonimi', '(progetto)', 0, s.nome, `più termini per lo stesso concetto: ${desc}. Scegline uno (copy.md §7)`);
  }
});

// ---------- report ----------
const ORDER = ['html', 'aria', 'inglese', 'glossario', 'sinonimi', 'maiuscole', 'conteggi', 'alert'];
const TITLES = {
  html: 'HTML e zoom', aria: 'Pulsanti solo icona senza nome', inglese: 'Inglese in interfaccia italiana',
  glossario: 'Parole da non usare (copy.md §7, §10)', sinonimi: 'Sinonimi per lo stesso concetto',
  maiuscole: 'Maiuscole (sentence case)', conteggi: 'Conteggi scritti a mano', alert: 'alert()/confirm() nativi',
};
const shown = findings.filter(f => !SOLO || SOLO.includes(f.cat));
if (JSON_OUT) { console.log(JSON.stringify(shown, null, 2)); process.exit(0); }

console.log(`controlla_copy: ${files.length} file analizzati, ${shown.length} segnalazioni`);
const counts = ORDER.map(c => `${c} ${shown.filter(f => f.cat === c).length}`).join(' · ');
console.log(counts + '\n');
for (const cat of ORDER) {
  const list = shown.filter(f => f.cat === cat);
  if (!list.length) continue;
  console.log(`## ${TITLES[cat]} (${list.length})`);
  for (const f of list.slice(0, MAX)) {
    const where = f.line ? `${path.relative(process.cwd(), f.file) || f.file}:${f.line}` : f.file;
    console.log(`  ${where}  "${f.text}"\n      → ${f.msg}`);
  }
  if (list.length > MAX) console.log(`  … e altre ${list.length - MAX} (usa --max ${list.length} o --solo ${cat})`);
  console.log('');
}
if (!shown.length) console.log('Nessun problema trovato.');
