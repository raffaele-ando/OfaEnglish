#!/usr/bin/env node
/*
 * segnali_copy.cjs — cerca SEGNALI nei testi di un'interfaccia e li trasforma in domande
 * (skill giudizio-di-design). Non dà verdetti sul gusto: indica dove vale la pena fermarsi
 * a pensare. Solo pochi controlli oggettivi (lingua dichiarata, zoom, pulsanti senza nome)
 * sono riportati come PROBLEMI.
 *
 * Uso:
 *   node segnali_copy.cjs [percorsi...] [--lingua it] [--ext .tsx,.jsx,.html] [--max 15] [--json]
 *                         [--solo lingua,conteggi,...] [--ci]
 *   node segnali_copy.cjs testi.txt      file di soli testi (.txt/.md/.csv): una stringa per riga
 *   (senza percorsi: la cartella corrente)
 *
 * PROBLEMI (oggettivi, valgono in ogni contesto):
 *   html        <html lang> assente o diverso dalla lingua dell'interfaccia (--lingua, default it);
 *               viewport che blocca lo zoom (user-scalable=no, maximum-scale=1)
 *   aria        <button> con sola icona e nessun nome accessibile (euristico)
 *
 * SEGNALI (domande da porsi, la risposta dipende dal contesto):
 *   conteggi    numeri scritti a mano nei testi ("(606)", "/30", "25/30", "(10s)")
 *   lingua      parole inglesi d'interfaccia in un'interfaccia italiana (solo con --lingua it)
 *   sinonimi    due termini che forse indicano lo stesso concetto nello stesso progetto
 *   nomi        nomi astratti/eleganti per una metrica (Maestria, Copertura, Mastery…)
 *   spinta      frasi che incoraggiano o commentano l'umore invece di informare
 *   tono        dramma o colpa sull'errore; esclamativi multipli
 *   burocrazia  formule impersonali o vuote («si prega», «con successo»…)
 *   beneficio   l'etichetta spiega il perché pedagogico/di marketing invece di cosa fa
 *   punteggi    XP, livelli, streak, record: indicatori che forse non misurano l'obiettivo
 *   maiuscole   convenzioni miste nello stesso progetto (Title Case e maiuscola iniziale)
 *   lunghezza   testi molto lunghi dentro pulsanti o etichette
 *   dialoghi    alert()/confirm() nativi
 *
 * Esclusi per default: node_modules, dist, build, .git, coverage, e i file di contenuti
 * (cartelle/file con nome data, content, questions, fixtures, locales/en, *.test.*, *.d.ts).
 * Per dichiarare una scelta consapevole su una riga aggiungi il commento: copy-ok
 * Exit code: 0 (è un report). Con --ci: 1 se ci sono PROBLEMI oggettivi.
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
const EXT = opt('--ext', '.tsx,.jsx,.html,.ts,.js,.vue,.svelte,.txt').split(',').map(s => s.trim());
const MAX = parseInt(opt('--max', '15'), 10);
const LINGUA = opt('--lingua', 'it').toLowerCase();
const JSON_OUT = argv.includes('--json');
const CI = argv.includes('--ci');
const SOLO = opt('--solo', '') ? opt('--solo', '').split(',') : null;
const valued = new Set(['--ext', '--max', '--solo', '--lingua']);
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

// ---------- segnali ----------
// Parole inglesi tipiche dell'interfaccia. Non sono errori: possono essere termini tecnici
// voluti o contenuto. Il suggerimento italiano è solo una possibilità da confrontare.
const EN = [
  ['Mock Exam', 'Simulazione'], ['Start Exam', 'Inizia'], ['Sign in', 'Accedi'], ['Sign out', 'Esci'],
  ['Log in', 'Accedi'], ['Log out', 'Esci'], ['Logout', 'Esci'], ['Login', 'Accedi'], ['Sign up', 'Registrati'],
  ['Submit', 'Consegna / Conferma'], ['Next', 'Continua / Avanti'], ['Back', 'Indietro'], ['Previous', 'Precedente'],
  ['Cancel', 'Annulla'], ['Start', 'Inizia'], ['Continue', 'Continua'], ['Retry', 'Riprova'], ['Try again', 'Riprova'],
  ['Review', 'Rivedi'], ['Stats', 'Statistiche'], ['Statistics', 'Statistiche'], ['Settings', 'Impostazioni'],
  ['Score', 'Punteggio'], ['Best score', 'Miglior punteggio'], ['Passed', 'Superata'], ['Failed', 'Non superata'],
  ['Question', 'Domanda'], ['Questions', 'domande'], ['Answer', 'Risposta'], ['Your Answer', 'La tua risposta'],
  ['No answer', 'Senza risposta'], ['Correct', 'Giusta'], ['Incorrect', 'Sbagliata'], ['Wrong', 'Sbagliata'],
  ['Time taken', 'Tempo'], ['Return to Menu', 'Torna al menu'], ['Nothing to review', 'Niente da rivedere'],
  ['Import', 'Importa'], ['Export', 'Esporta'], ['Upload', 'Carica'], ['Download', 'Scarica'],
  ['Save', 'Salva'], ['Delete', 'Elimina'], ['Edit', 'Modifica'], ['Close', 'Chiudi'], ['Done', 'Fatto'],
  ['Loading', 'Caricamento'], ['Error', 'Errore'], ['Success', '(dire che cosa è riuscito)'], ['Search', 'Cerca'],
  ['Share', 'Condividi'], ['Show', 'Mostra'], ['Hide', 'Nascondi'], ['Skip', 'Salta'], ['Finish', 'Fine'],
  ['Complete', 'Completata'], ['Completed', 'Completata'], ['Required', 'Obbligatorio'], ['Welcome', 'Benvenuto'],
  ['Hint', 'Suggerimento'], ['Synced', 'Sincronizzato'], ['Skill Profile', 'Profilo per argomento'],
  ['Pass Rate', 'Superate'], ['Level', 'Livello'], ['Consistency', 'Costanza'], ['Last', 'Ultimi'], ['Days', 'giorni'],
  ['minutes', 'minuti'], ['seconds', 'secondi'], ['time limit', 'tempo'], ['Multiple choice', 'a risposta multipla'],
  ['required to pass', 'per superarla'], ['immediate feedback', 'correzione alla fine'], ['Debug', 'Diagnostica'],
  ['Profile', 'Profilo'], ['Help', 'Aiuto'], ['Dashboard', 'Statistiche / Riepilogo'],
];
const EN_RE = EN.map(([w, it]) => [new RegExp(`(^|[^A-Za-zÀ-ÿ])${w.replace(/ /g, '\\s+')}(?![A-Za-zÀ-ÿ])`, w === w.toLowerCase() ? 'i' : ''), w, it]);

// Ogni famiglia: espressioni che la fanno scattare + la domanda da porsi.
const FAMIGLIE = {
  nomi: {
    re: [/\bMaestria\b/i, /\bMaster(y|ed)\b/i, /\bSyllabus\b/i, /\bCopertura\b/i, /\bPrecisione\b/i, /\bPadronanza\b/i, /\bProgresso\b/i, /\bPerformance\b/i, /\bIndice\b/i],
    q: w => `«${w}» nomina una metrica: chi legge sa che cosa viene contato senza spiegazione? È la parola che userebbe lui, o una più elegante? Se la metrica sale anche sbagliando, il problema è la misura, non il nome.`,
  },
  spinta: {
    re: [/\bpuoi farcela\b/i, /\bci sei quasi\b/i, /\bcontinua (ad|a) esercitarti\b/i, /\bottimo lavoro\b/i, /\bnon mollare\b/i, /\bforza\b!/i, /\bbravo\b|\bbrava\b/i, /\bcontinua così\b/i, /\bsei (un|una) (grande|campione|campionessa)\b/i, /\bgreat job\b|\bkeep (it )?up\b|\byou can do it\b|\balmost there\b/i],
    q: w => `«${w}»: se tolgo questa frase, l'utente perde un'informazione o un'azione? Sta commentando un evento vero (fine sessione, record) o spinge a vuoto? Ripetuta a ogni evento, diventa rumore?`,
  },
  tono: {
    re: [/\bpeccato\b/i, /\bops\b/i, /\bpurtroppo\b/i, /\bhai sbagliato\b/i, /\bsbagliato!/i, /\bFAILED\b/, /\bBOCCIATO\b/i, /!{2,}/, /![^!\n]{1,60}!/],
    q: w => w.includes('!')
      ? `«${w}»: più esclamativi nello stesso messaggio. L'evento pesa davvero così tanto? Se l'enfasi è ovunque, non distingue più niente; la festa può passare anche per un altro canale (suono, animazione) lasciando le parole asciutte.`
      : `«${w}»: il tono corrisponde al peso reale dell'evento? Un errore è un giudizio o un'informazione con un passo successivo? Un esito negativo ha bisogno di parole dure, o di sapere che cosa fare adesso?`,
  },
  burocrazia: {
    re: [/\bsi prega\b/i, /\bgentile utente\b/i, /\bsiamo spiacenti\b/i, /\bcon successo\b/i, /\bsi è verificato un errore\b/i, /\bsemplicemente\b/i, /\boperazione (completata|effettuata)\b/i, /\bprocedere\b/i],
    q: w => `«${w}»: è la parola più semplice per ciò che è successo o va fatto? Dice il fatto concreto (che cosa, e cosa fare ora) o una formula?`,
  },
  beneficio: {
    re: [/\bper (ottimizzare|massimizzare|migliorare|potenziare)\b/i, /\bforza il cervello\b/i, /\bil modo migliore\b/i, /\bscientificamente\b/i, /\brivoluzionari[oa]\b/i, /\bsupercharge\b|\bboost\b/i],
    q: w => `«${w}»: l'etichetta spiega il perché invece di dire che cosa fa. Questo utente ha bisogno del perché per scegliere (è nuovo, non conosce il metodo, è una landing) o gli basta il meccanismo?`,
  },
  punteggi: {
    re: [/\bXP\b/, /\bLiv\.\s*\{?\d*/, /\blivello\s+\{/i, /\bsfida quotidiana\b/i, /\bobiettivo giornaliero\b/i, /\bstreak\b/i, /\bcombo\b/i, /\bRecord\b/, /\bpunti bonus\b/i, /\bbadge\b/i],
    q: w => `«${w}»: questo numero si muove solo se l'obiettivo reale avanza (imparare, finire il lavoro, restare in salute)? Si può farlo salire senza progredire (aprendo l'app, evitando il difficile)? Se misura l'abitudine, l'abitudine è davvero l'obiettivo qui?`,
  },
};

// Gruppi di termini che forse indicano lo stesso concetto.
const SINONIMI = [
  { nome: 'elemento di studio', gruppi: { 'frase/frasi': /\bfras[ei]\b/i, 'domanda/domande': /\bdomand[ae]\b/i, 'esercizio/i': /\beserciz[io]\b/i } },
  { nome: 'miglior risultato', gruppi: { 'Record': /\bRecord\b/, 'Miglior punteggio': /\bMiglior punteggio\b/i, 'Best': /\bBest\b/ } },
  { nome: 'simulazione', gruppi: { 'Simulazione': /\bSimulazion[ei]\b/i, 'Mock/Exam': /\bMock\b|\bExam\b/, 'Prova': /\bProva d'esame\b/i } },
  { nome: 'non risposte', gruppi: { 'omesse': /\bomess[ae]\b/i, 'saltate': /\bsaltat[ae]\b/i, 'No answer': /\bNo answer\b/i } },
  { nome: 'imparate', gruppi: { 'Imparate': /\bimparat[ae]\b/i, 'Maestria/Mastery': /\bMaestria\b|\bMastery\b/i, 'Padronanza': /\bpadronanza\b/i } },
  { nome: 'andare avanti', gruppi: { 'Continua': /\bContinua\b/, 'Next': /\bNext\b/, 'Avanti': /\bAvanti\b/ } },
  { nome: 'sicurezza/confidenza', gruppi: { 'Confidenza': /\bConfidenza\b/i, 'Sicurezza/Sicuro': /\bSicurezza\b|\bSicuro\b/i } },
  { nome: 'accuratezza', gruppi: { 'Accuratezza': /\bAccuratezza\b/i, 'Precisione': /\bPrecisione\b/i } },
  { nome: 'uscire', gruppi: { 'Esci': /\bEsci\b/, 'Logout/Sign out': /\bLog ?out\b|\bSign out\b/i, 'Disconnetti': /\bDisconnetti\b/i } },
];

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
  if (/^[a-z][\w\-]*$/.test(t)) return false;
  if (/^[A-Z0-9_]+$/.test(t) && t.length > 1 && !/^[A-Z]{3,}$/.test(t)) return false;
  if (/^[\w\-]+(\.[\w\-]+)+$/.test(t)) return false;
  if (/\b(console\.\w+|new Error|throw|require|import|addEventListener|getItem|setItem|removeItem|querySelector|createElement|getElementById|matchMedia)\s*\(\s*$/.test(ctx)) return false;
  if (/\b(className|class|key|id|href|src|type|rel|role|as|method|target|stroke\w*|fill|d|viewBox|xmlns|lang|charset|content|dataKey|variant)\s*=\s*\{?\s*$/.test(ctx)) return false;
  if (/(case|===?|!==?)\s*$/.test(ctx)) return false;
  return true;
}

function extract(src, ext) {
  const out = [];
  if (ext === '.txt' || ext === '.md' || ext === '.csv') {
    let idx = 0;
    for (const line of src.split('\n')) {
      const t = line.replace(/^[-*]\s+/, '').trim();
      if (t && !t.startsWith('#')) out.push({ text: t, idx: idx + line.indexOf(t.charAt(0)), kind: 'riga' });
      idx += line.length + 1;
    }
    return out;
  }
  const jsxLike = ext !== '.ts' && ext !== '.js';
  let rest = src;
  let m;
  if (jsxLike) {
    const re = /(>|\})([^<>{}]+)(?=<|\{)/g;
    while ((m = re.exec(src))) {
      const text = m[2];
      const next = src[m.index + m[0].length];
      if (m[1] === '}' && next === '{') continue;
      if (!/[A-Za-zÀ-ÿ0-9]/.test(text) || CODEY.test(text)) continue;
      if (text.includes('`') || /\?\s*[`'"<(]/.test(text) || (next === '{' && /\?\s*$/.test(text)) || /^\s*[\d.]+\s*(\?|\)|&|\|)/.test(text)) continue;
      if (/^\s*\/?\d*\s*$/.test(text) && !/\/\d/.test(text)) continue;
      if (/^\s*(\)|\?|:)/.test(text)) continue;
      const start = m.index + m[1].length;
      out.push({ text: text.replace(/\s+/g, ' ').trim(), idx: start + (text.length - text.trimStart().length), kind: 'jsx' });
      rest = rest.slice(0, start) + text.replace(/[^\n]/g, ' ') + rest.slice(start + text.length);
    }
    const attr = /\b(title|placeholder|aria-label|alt|label)\s*=\s*"([^"]*)"/g;
    while ((m = attr.exec(rest))) out.push({ text: m[2], idx: m.index + m[0].indexOf('"') + 1, kind: 'attr:' + m[1] });
    rest = rest.replace(attr, x => x.replace(/[^\n]/g, ' '));
  }
  const str = /(["'])((?:\\.|(?!\1)[^\\\n])*)\1|`((?:\\.|[^\\`])*)`/g;
  while ((m = str.exec(rest))) {
    const raw = m[2] !== undefined ? m[2] : m[3];
    const ctx = rest.slice(Math.max(0, m.index - 60), m.index);
    const parts = m[3] !== undefined ? raw.split(/\$\{[^}]*\}/) : [raw];
    const text = parts.join(' {…} ').replace(/\s+/g, ' ').trim();
    if (isUiString(parts.join(' '), ctx)) out.push({ text, idx: m.index + 1, kind: 'str' });
  }
  return out;
}

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

// ---------- analisi ----------
const findings = [];
const add = (cat, file, line, text, msg) => findings.push({ cat, file, line, text, msg });
const synonymHits = SINONIMI.map(() => ({}));
const caseStats = { title: [], sentence: 0 };

function caseKind(t) {
  const clean = t.replace(/\{…\}/g, ' ').replace(/[«»"()]/g, ' ');
  if (/^[^a-zà-ÿ]*$/.test(clean) && /\b[A-ZÀ-Ý]{4,}\b/.test(clean)) {
    const caps = (clean.match(/\b[A-ZÀ-Ý]{4,}\b/g) || []).filter(w => !PROPRI.has(w));
    if (caps.length) return 'upper';
  }
  const words = clean.trim().split(/\s+/).filter(w => /^[A-Za-zÀ-ÿ']+$/.test(w));
  if (words.length < 2 || words.length > 8) return null;
  if (PROPRI.has(words[0]) || /^[A-Z]{2,}$/.test(words[0])) return null;
  const later = words.slice(1).filter(w => w.length > 2 || /^[A-ZÀ-Ý]/.test(w));
  if (!later.length) return null;
  const capped = later.filter(w => /^[A-ZÀ-Ý][a-zà-ÿ']/.test(w) && !PROPRI.has(w));
  if (capped.length >= Math.ceil(later.length / 2)) return 'title';
  if (capped.length === 0 && /^[A-ZÀ-Ý]/.test(words[0])) return 'sentence';
  return null;
}

for (const file of files) {
  const src0 = fs.readFileSync(file, 'utf8');
  const ext = path.extname(file);
  const lines0 = src0.split('\n');
  const okLine = n => /copy-ok/.test(lines0[n - 1] || '');
  const src = blankComments(src0, ext);

  // PROBLEMI: html
  if (ext === '.html' || /<html[\s>]/.test(src)) {
    const h = src.match(/<html\b[^>]*>/i);
    if (h) {
      const lang = (h[0].match(/lang\s*=\s*["']([^"']*)["']/i) || [])[1];
      const ln = lineOf(src, h.index);
      if (!lang) add('html', file, ln, h[0], `manca lang: i lettori di schermo non sanno come pronunciare il testo. Usa <html lang="${LINGUA}">.`);
      else if (!lang.toLowerCase().startsWith(LINGUA)) add('html', file, ln, h[0], `lang="${lang}" ma l'interfaccia è in "${LINGUA}": la sintesi vocale leggerà con la pronuncia sbagliata. (Se l'interfaccia è davvero in un'altra lingua, lancia con --lingua ${lang}.)`);
    }
    const vp = /<meta[^>]+name=["']viewport["'][^>]*>/i.exec(src);
    if (vp && /user-scalable\s*=\s*(no|0)|maximum-scale\s*=\s*1(\.0)?\b/i.test(vp[0]))
      add('html', file, lineOf(src, vp.index), vp[0].slice(0, 120), 'zoom bloccato: chi vede poco non può ingrandire. Togli maximum-scale e user-scalable=no.');
  }

  // SEGNALE: dialoghi nativi
  const al = /(^|[^.\w])(window\.)?(alert|confirm)\s*\(/g;
  let m;
  while ((m = al.exec(src))) {
    const ln = lineOf(src, m.index);
    if (!okLine(ln)) add('dialoghi', file, ln, lines0[ln - 1].trim().slice(0, 100), `${m[3]}() nativo: interrompe tutto e non si può formulare bene. L'evento è così grave da giustificarlo? Un avviso nella pagina o un dialogo con un'azione chiara servirebbe meglio?`);
  }

  // PROBLEMI: pulsanti con sola icona
  if (ext !== '.ts') {
    for (const b of findButtons(src)) {
      const { attrs, inner, index } = b;
      if (/aria-label(ledby)?\s*=/.test(attrs) || /\{\s*\.\.\./.test(attrs)) continue;
      if (!/<([A-Z]\w*|svg|img|i)\b/.test(inner)) continue;
      const TAG = '\u0001';
      let text = inner.replace(/<(?:[^>{}]|\{[^{}]*\})*>/g, TAG);
      const exprs = text.match(/\{[^{}]*\}/g) || [];
      const textExpr = exprs.some(e => (!e.includes(TAG) && !/^\{\s*\/\*/.test(e)) ||
        /\u0001[^\u0001{}()?:]*[A-Za-zÀ-ÿ0-9]/.test(e) || /['"`][^'"`]*[A-Za-zÀ-ÿ][^'"`]*['"`]/.test(e));
      text = text.split(TAG).join(' ').replace(/\{[^{}]*\}/g, ' ');
      if (/[A-Za-zÀ-ÿ0-9]/.test(text) || textExpr) continue;
      const ln = lineOf(src, index);
      if (okLine(ln)) continue;
      const icon = (inner.match(/<([A-Z]\w*)/) || [, 'icona'])[1];
      const hasTitle = /\btitle\s*=/.test(attrs);
      add('aria', file, ln, `<button> con <${icon}>`, hasTitle
        ? 'ha solo title: su touch e con lettori di schermo non basta. Aggiungi aria-label e verifica che l\'area di tocco sia almeno 44 px.'
        : 'pulsante solo icona senza nome accessibile: un lettore di schermo dice solo «pulsante». Aggiungi aria-label.');
    }
  }

  // SEGNALI sui testi
  for (const { text, idx, kind } of extract(src, ext)) {
    const ln = lineOf(src, idx);
    if (okLine(ln)) continue;
    const short = text.length > 90 ? text.slice(0, 87) + '…' : text;
    let english = false;
    if (LINGUA === 'it') {
      for (const [re, w, it] of EN_RE) {
        if (re.test(text)) {
          add('lingua', file, ln, short, `«${w}» in un'interfaccia italiana: è contenuto, un termine tecnico che l'utente usa davvero, o un residuo? Se è un residuo, «${it}» è una possibilità; controlla che la stessa schermata non mescoli le due lingue.`);
          english = true; break;
        }
      }
    }
    for (const [fam, { re, q }] of Object.entries(FAMIGLIE)) {
      for (const r of re) {
        const g = text.match(r);
        if (g) { add(fam, file, ln, short, q(g[0].trim())); break; }
      }
    }
    if (!english && kind !== 'attr:alt') {
      const k = caseKind(text);
      if (k === 'title' || k === 'upper') caseStats.title.push({ file, ln, short, k });
      else if (k === 'sentence') caseStats.sentence++;
    }
    const cnt = text.match(/\((?:su\s+)?\d+[^)]*\)|\b\d+\s*\/\s*\d+\b|(^|\s)\/\s*\d{2,}\b/);
    if (cnt) add('conteggi', file, ln, short, `«${cnt[0].trim()}» è scritto a mano: viene dai dati o da una costante? Se aggiungo o tolgo un elemento, l'etichetta resta vera? Un numero che mente rompe la fiducia in tutti gli altri.`);
    if ((kind === 'jsx' || kind.startsWith('attr')) && text.length > 140) {
      add('lunghezza', file, ln, short, `testo di ${text.length} caratteri: la lunghezza si guadagna il posto? Qui l'utente sta leggendo o sta agendo? Posso dire la stessa cosa con metà delle parole, o spostare il dettaglio dove si approfondisce?`);
    }
    SINONIMI.forEach((s, i) => {
      for (const [k, re] of Object.entries(s.gruppi)) if (re.test(text)) (synonymHits[i][k] ||= []).push(`${path.relative(process.cwd(), file) || file}:${ln}`);
    });
  }
}

SINONIMI.forEach((s, i) => {
  const used = Object.entries(synonymHits[i]);
  if (used.length > 1) {
    const desc = used.map(([k, v]) => `${k} ×${v.length} (es. ${v[0]})`).join(' · ');
    add('sinonimi', '(progetto)', 0, s.nome, `${desc}. Indicano lo stesso concetto? Se sì, l'utente penserà che siano due cose diverse: scegline uno (quello che userebbe lui). Se sono concetti diversi, rendili distinguibili anche nel nome.`);
  }
});

if (caseStats.title.length && caseStats.sentence) {
  const ex = caseStats.title.slice(0, 3).map(t => `«${t.short}» (${path.relative(process.cwd(), t.file) || t.file}:${t.ln})`).join(', ');
  add('maiuscole', '(progetto)', 0, `${caseStats.title.length} testi in Title Case/MAIUSCOLO, ${caseStats.sentence} con maiuscola solo iniziale`,
    `convenzioni miste, es. ${ex}. È una scelta (un livello di gerarchia preciso) o un residuo? In italiano la maiuscola solo iniziale è la norma; qualunque convenzione tu scelga, tienila una sola. Il MAIUSCOLO nel sorgente, se serve come stile, sta meglio nel CSS.`);
}

// ---------- report ----------
const PROBLEMI = ['html', 'aria'];
const ORDER = ['html', 'aria', 'conteggi', 'lingua', 'sinonimi', 'nomi', 'punteggi', 'spinta', 'tono', 'burocrazia', 'beneficio', 'maiuscole', 'lunghezza', 'dialoghi'];
const TITLES = {
  html: 'Lingua dichiarata e zoom', aria: 'Pulsanti senza nome accessibile',
  conteggi: 'Numeri scritti a mano', lingua: 'Lingue mescolate', sinonimi: 'Più termini per un concetto?',
  nomi: 'Nomi delle metriche', punteggi: 'Punteggi e contatori', spinta: 'Frasi che spingono invece di informare',
  tono: 'Tono ed enfasi', burocrazia: 'Formule vuote o impersonali', beneficio: 'Il perché al posto del che cosa',
  maiuscole: 'Convenzione delle maiuscole', lunghezza: 'Testi lunghi', dialoghi: 'Dialoghi nativi',
};
const shown = findings.filter(f => !SOLO || SOLO.includes(f.cat));
const nProb = shown.filter(f => PROBLEMI.includes(f.cat)).length;
if (JSON_OUT) {
  console.log(JSON.stringify(shown.map(f => ({ ...f, tipo: PROBLEMI.includes(f.cat) ? 'problema' : 'segnale' })), null, 2));
  process.exit(CI && nProb ? 1 : 0);
}

console.log(`segnali_copy: ${files.length} file, ${nProb} problemi oggettivi, ${shown.length - nProb} segnali da valutare`);
console.log('I segnali non sono errori: sono punti in cui chiedersi se la scelta è voluta e adatta a questo contesto.');
console.log('Se lo è, lasciala (e segnala la riga con il commento copy-ok).\n');
let section = null;
for (const cat of ORDER) {
  const list = shown.filter(f => f.cat === cat);
  if (!list.length) continue;
  const sec = PROBLEMI.includes(cat) ? 'PROBLEMI OGGETTIVI (valgono in ogni contesto)' : 'SEGNALI → DOMANDE DA PORSI';
  if (sec !== section) { console.log(`==== ${sec} ====\n`); section = sec; }
  console.log(`## ${TITLES[cat]} (${list.length})`);
  for (const f of list.slice(0, MAX)) {
    const where = f.line ? `${path.relative(process.cwd(), f.file) || f.file}:${f.line}` : f.file;
    console.log(`  ${where}  "${f.text}"\n      ? ${f.msg}`);
  }
  if (list.length > MAX) console.log(`  … e altre ${list.length - MAX} (usa --max ${list.length} o --solo ${cat})`);
  console.log('');
}
if (!shown.length) console.log('Nessun segnale trovato. Non vuol dire che i testi siano giusti: rileggili con le domande della skill.');
process.exit(CI && nProb ? 1 : 0);
