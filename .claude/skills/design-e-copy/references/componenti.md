# Componenti

Ricette pronte in React + Tailwind v4, con i token di `sistema-visivo.md` §3 (`bg-blu-pieno`, `text-testo-tenue`…): il tema scuro arriva dai token, senza `dark:` duplicati. Per HTML semplice traduci le classi in CSS con le stesse variabili. I testi seguono `copy.md`.

Ogni ricetta dice **quando usarla** e **cosa corregge** rispetto all'app.

## Indice
1. Cornice e scheletro · 2. Intestazioni · 3. Pulsante icona · 4. CTA eroe · 5. Tile secondarie · 6. Triade di sicurezza · 7. Barra azioni con feedback · 8. Card opzione · 9. Pillole · 10. Tile statistiche · 11. Barre di avanzamento · 12. Selettore a segmenti · 13. Card modalità · 14. Banca di parole · 15. Card di revisione · 16. Schermata di esito · 17. Stato vuoto · 18. Conferma · 19. Lista di regole

---

## 1. Cornice e scheletro

Una schermata = intestazione fissa, contenuto che scorre, barra azioni fissa. Su desktop, un «telefono» centrato.

```tsx
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-[100dvh] w-full overflow-hidden sm:overflow-auto sm:p-6 bg-pagina text-testo font-sans">
      <div className="w-full max-w-3xl mx-auto h-full sm:h-[800px] sm:my-auto">{children}</div>
    </div>
  );
}

export function Schermata({ header, children, azioni }: { header: React.ReactNode; children: React.ReactNode; azioni?: React.ReactNode }) {
  return (
    <div className="flex flex-col h-full bg-superficie sm:rounded-cornice sm:border-2 sm:border-bordo overflow-hidden transition-colors duration-300">
      <header className="shrink-0 border-b-2 border-bordo px-4 h-14 flex items-center gap-3">{header}</header>
      <main className="flex-1 overflow-y-auto p-4 sm:p-8">{children}</main>
      {azioni && <div className="shrink-0 border-t-2 border-bordo p-4 pb-[max(1rem,env(safe-area-inset-bottom))]">{azioni}</div>}
    </div>
  );
}
```

`index.html`: `<html lang="it">`, viewport **senza** `maximum-scale`/`user-scalable=no` (l'app bloccava lo zoom).

## 2. Intestazioni

- **Schermata normale**: titolo a sinistra (`text-xl sm:text-2xl font-black tracking-tight text-testo-forte`, `<h1>`), azioni icona a destra; nelle sottoschermate freccia indietro prima del titolo.
- **Sessione**: X per uscire · barra di avanzamento `flex-1` · 🔥 serie (dalla 2ª giusta) · timer.

```tsx
<header className="shrink-0 border-b-2 border-bordo px-2 h-14 flex items-center gap-2">
  <PulsanteIcona label="Esci dalla sessione" onClick={chiediUscita}><X strokeWidth={3} /></PulsanteIcona>
  <BarraAvanzamento valore={fatte} max={totale} label="Avanzamento della sessione" colore="verde" sottile />
  {serie > 1 && (
    <span className="flex items-center gap-1 font-black text-giallo-testo motion-safe:animate-bounce" aria-label={`${serie} di fila`}>
      <Flame className="fill-giallo-vivo text-giallo-vivo" size={20} aria-hidden /> {serie}
    </span>
  )}
  <span className={`font-black tabular-nums w-12 text-right ${restano <= 5 ? 'text-rosso-testo motion-safe:animate-pulse' : 'text-testo-tenue'}`}
        aria-live="off">{restano} s</span>
</header>
```

## 3. Pulsante icona

Corregge: nell'app le icone erano 18-24 px senza area di tocco e senza nome.

```tsx
export function PulsanteIcona({ label, children, ...p }: { label: string } & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button aria-label={label} title={label} {...p}
      className="inline-flex items-center justify-center size-11 rounded-xl text-testo-tenue hover:bg-superficie-alt
                 focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blu-pieno">
      {children}
    </button>
  );
}
```
Interruttori (suono, tema): `aria-pressed={attivo}` e un'etichetta che dice l'azione («Disattiva suoni» / «Attiva suoni», «Tema scuro»).

## 4. CTA eroe

**Una per schermata**, in fondo all'altezza del pollice, due righe: azione + ambito. Un tocco e si parte (`metodo-di-studio` §7).

```tsx
<button onClick={inizia}
  className="mt-auto w-full rounded-pulsante bg-blu-pieno border-b-4 border-blu-bordo3d text-white p-6 sm:p-8
             flex flex-col items-center gap-2 hover:brightness-95 active:border-b-0 active:translate-y-1
             focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blu-pieno transition-all duration-200 motion-reduce:transition-none">
  <span className="text-2xl sm:text-3xl font-black uppercase tracking-widest">Inizia</span>
  <span className="text-xs sm:text-sm font-bold uppercase tracking-widest bg-black/15 px-4 py-1.5 rounded-full">
    {ambito.nome} · {ambito.domande.length}
  </span>
</button>
```
Corregge: bianco su `#1CB0F6` (2,44:1) → su `#1078C0` (4,70:1); sottotitolo bianco invece di `#DDF4FF` (2,15:1); conteggio dai dati invece di «(606)».

## 5. Tile secondarie

Azioni secondarie sotto la CTA: blocchi bianchi 3D, icona colorata sopra, etichetta tenue.

```tsx
<div className="grid grid-cols-2 gap-3 sm:gap-4">
  <button className="bg-card border-2 border-bordo border-b-4 rounded-pulsante p-4 min-h-24 flex flex-col items-center justify-center gap-2
                     text-testo-tenue hover:bg-superficie-alt active:border-b-2 active:translate-y-[2px] transition-all duration-150">
    <BookOpen className="size-7 text-viola-testo" aria-hidden />
    <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-center">Altre modalità</span>
  </button>
  {/* Simulazione d'esame: GraduationCap text-giallo-testo */}
</div>
```
Una **barra di navigazione in basso** (Statistiche · Importa · Esporta) usa lo stesso schema con icona 24 + etichetta `text-xs`, ogni voce alta almeno 44 px.

## 6. Triade di sicurezza

I tre pulsanti **sono** la conferma: rispondere e dichiarare la sicurezza costa un tocco solo. Semaforo rosso/giallo/verde come in `metodo-di-studio` §5. Disabilitati finché non si sceglie un'opzione.

```tsx
const base = 'flex-1 min-h-12 rounded-pulsante border-b-4 font-black uppercase text-sm py-4 px-4 transition-all duration-150 ' +
  'active:border-b-0 active:translate-y-[2px] disabled:bg-bordo disabled:border-bordo-forte disabled:text-testo-tenue disabled:active:translate-y-0';
<div className="flex gap-2" role="group" aria-label="Conferma con la tua sicurezza">
  <button disabled={!scelta} onClick={() => conferma('bassa')} className={`${base} bg-rosso-pieno border-rosso-bordo3d text-white`}>Indovino</button>
  <button disabled={!scelta} onClick={() => conferma('media')} className={`${base} bg-giallo-vivo border-giallo-bordo3d text-su-giallo`}>Incerto</button>
  <button disabled={!scelta} onClick={() => conferma('alta')}  className={`${base} bg-verde-pieno border-verde-bordo3d text-white`}>Sicuro</button>
</div>
```
Corregge: «Incerto» bianco su giallo era 1,55:1, ora 8,50:1.

## 7. Barra azioni con feedback

Neutra mentre si risponde; dopo la conferma **tutta la barra** prende il colore dell'esito e mostra titolo, argomento, spiegazione e un solo pulsante.

```tsx
const giusta = esito === 'giusta';
<div className={`shrink-0 border-t-2 p-4 transition-colors ${
  !esito ? 'bg-superficie border-bordo' : giusta ? 'bg-verde-tinta border-verde-vivo' : 'bg-rosso-tinta border-rosso-vivo'}`}>
  <div className="flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
    <div aria-live="polite" className="min-h-0">
      {esito && (
        <motion.div initial={ridotto ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                    className={giusta ? 'text-verde-tinta-testo' : 'text-rosso-tinta-testo'}>
          <p className="text-xl sm:text-2xl font-black flex items-center gap-2">
            {giusta ? <Check aria-hidden strokeWidth={3} /> : <X aria-hidden strokeWidth={3} />}
            {giusta ? (serie > 2 ? `Fantastico! 🔥 ${serie} di fila!` : 'Ottimo!') : 'Errata.'}
          </p>
          {giusta && <p className="text-xs font-black mt-1">{d.categoria} · {d.argomento}</p>}
          {giusta && <p className="text-sm font-semibold text-testo mt-1">{d.spiegazione}</p>}
        </motion.div>
      )}
    </div>
    {!esito ? <TriadeSicurezza /> : (
      <button onClick={giusta ? prossima : riprova}
        className={`w-full sm:w-auto min-h-12 rounded-pulsante border-b-4 text-white font-black uppercase py-4 px-8 flex items-center justify-center gap-2
          active:border-b-0 active:translate-y-[2px] ${giusta ? 'bg-verde-pieno border-verde-bordo3d' : 'bg-rosso-pieno border-rosso-bordo3d'}`}>
        {giusta ? <>Continua <ArrowRight size={20} strokeWidth={3} aria-hidden /></> : <>Riprova <RotateCcw size={20} strokeWidth={3} aria-hidden /></>}
      </button>
    )}
  </div>
</div>
```
Corregge: «Next» / «Riprova» in due lingue sullo stesso pulsante; esito solo a colori (ora icona ✓/✗); nessun `aria-live`.

## 8. Card opzione

Stati in `sistema-visivo.md` §12. Lettera A-D nel badge; dopo la conferma il badge diventa ✓ o ✗, così l'esito non è affidato al solo colore.

```tsx
type Stato = 'inattiva' | 'scelta' | 'giusta' | 'sbagliata' | 'spenta';
const stile: Record<Stato, string> = {
  inattiva:  'bg-card border-bordo text-testo hover:bg-superficie-alt hover:border-bordo-forte',
  scelta:    'bg-blu-tinta border-blu-vivo text-blu-tinta-testo',
  giusta:    'bg-verde-tinta border-verde-vivo text-verde-tinta-testo',
  sbagliata: 'bg-rosso-tinta border-rosso-vivo text-rosso-tinta-testo',
  spenta:    'bg-card border-bordo text-testo opacity-50 border-b-2 translate-y-[2px]',
};
<button role="radio" aria-checked={stato === 'scelta'} disabled={stato === 'spenta'} onClick={scegli}
  className={`w-full min-h-[72px] rounded-card border-2 border-b-4 p-4 flex items-center gap-4 text-left transition-all duration-150
              active:border-b-2 active:translate-y-[2px] ${stile[stato]}`}>
  <span className="size-10 shrink-0 rounded-badge border-2 border-current/30 bg-card grid place-items-center font-black">
    {stato === 'giusta' ? <Check strokeWidth={3} aria-label="giusta" /> : stato === 'sbagliata' ? <X strokeWidth={3} aria-label="sbagliata" /> : lettera}
  </span>
  <span className="text-base sm:text-lg font-bold leading-snug">{testo}</span>
</button>
```
Contenitore: `<div role="radiogroup" aria-label="Risposte" className="grid grid-cols-1 sm:grid-cols-2 gap-3">`. Hover **grigio**: il blu significa solo «scelta».

## 9. Pillole

```tsx
// pillola piena (numero della domanda): stesso colore in sessione e simulazione
<span className="px-4 py-1.5 rounded-full bg-viola-pieno text-white text-xs sm:text-sm font-black uppercase tracking-widest">Domanda {i}</span>

// pillola di contesto (ambito attivo)
<span className="px-3 py-1 rounded-full border border-verde-vivo bg-verde-tinta text-verde-tinta-testo text-xs font-black">{ambito.nome} · {ambito.n}</span>

// pillole dati: colorate solo se > 0, sempre con icona
<span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-lg border ${
  k > 0 ? 'bg-verde-tinta border-verde-vivo text-verde-tinta-testo' : 'bg-card border-bordo text-testo-tenue'}`}>
  <Check size={12} strokeWidth={3} aria-hidden /> {plurale(k, 'giusta', 'giuste')}
</span>
```
Corregge: «Question N» gialla in simulazione vs «Domanda N» viola in sessione; pillole con Tailwind fuori palette (`blue-500`, `amber-*`).

## 10. Tile statistiche

- **Home** (i due numeri che contano: Imparate e Accuratezza, `metodo-di-studio` §4): etichetta tenue + numero colorato + barra spessa dello stesso colore. **Senza bordo 3D**: non si tocca.

```tsx
<div className="bg-card rounded-card border-2 border-bordo p-4 sm:p-5 flex flex-col gap-3">
  <div className="flex justify-between items-baseline">
    <span id="lbl-imp" className="text-xs sm:text-sm font-black uppercase tracking-wider text-testo-tenue">Imparate</span>
    <span className="text-xl font-black text-verde-testo tabular-nums">{pct}%</span>
  </div>
  <BarraAvanzamento valore={pct} max={100} labelledBy="lbl-imp" colore="verde" />
</div>
```
- **Pagina statistiche**: tile tinta (sfondo `tinta`, bordo `vivo`, icona, numero grande `text-2xl sm:text-3xl`, etichetta minuscola), tutto con i toni `tinta-testo`.
- **Righe dati**: etichetta tenue a sinistra, valore `font-black text-testo` a destra, separatore `border-b border-bordo`.
- Un numero compare **una volta** per schermata (l'app mostrava «Record» e «Miglior punteggio» uguali).

## 11. Barre di avanzamento

```tsx
export function BarraAvanzamento({ valore, max, colore = 'blu', label, labelledBy, sottile }: {...}) {
  const pct = Math.round((valore / max) * 100);
  const fill = { blu: 'bg-blu-vivo', verde: 'bg-verde-vivo', viola: 'bg-viola-vivo' }[colore];
  return (
    <div role="progressbar" aria-valuenow={valore} aria-valuemin={0} aria-valuemax={max}
         aria-label={label} aria-labelledby={labelledBy}
         className={`flex-1 rounded-full overflow-hidden bg-bordo ${sottile ? 'h-3' : 'h-3 sm:h-4'}`}>
      <div className={`h-full rounded-full ${fill} transition-[width] duration-700 ease-out motion-reduce:transition-none`} style={{ width: `${pct}%` }} />
    </div>
  );
}
```
Il colore vivo va bene perché **il numero è scritto accanto** (o nell'intestazione). Navigatore della simulazione: pallini da 12 px dentro pulsanti da 44 px, risposta data = pieno + spunta minuscola, corrente = anello, `aria-label` con lo stato.

## 12. Selettore a segmenti

Per scegliere l'ambito (es. Primo corpus / Tutte le domande) una volta per tutte le schermate. Un solo componente, non duplicato.

```tsx
<div role="radiogroup" aria-label="Domande da studiare" className="flex p-1.5 gap-1 rounded-2xl border-2 border-bordo bg-superficie-alt">
  {ambiti.map(a => (
    <button key={a.id} role="radio" aria-checked={a.id === attivo} onClick={() => setAttivo(a.id)}
      className={`flex-1 min-h-11 rounded-xl flex items-center justify-center gap-2 text-sm font-black transition-colors ${
        a.id === attivo ? 'bg-card shadow-xs ' + a.coloreTesto : 'text-testo'}`}>
      <a.Icona size={18} aria-hidden /> {a.nome} <span className="tabular-nums opacity-80">{a.domande.length}</span>
    </button>
  ))}
</div>
```

## 13. Card modalità

Icona in un quadrato tinto al 10%, titolo di 1-2 parole, descrizione di 2-5 parole.

```tsx
<button className="bg-card border-2 border-bordo border-b-4 rounded-card p-4 sm:p-5 flex items-center gap-4 text-left
                   hover:bg-superficie-alt active:border-b-2 active:translate-y-[2px] transition-all">
  <span className="size-12 rounded-chip bg-rosso-vivo/10 grid place-items-center"><Target className="text-rosso-testo" aria-hidden /></span>
  <span>
    <span className="block font-black text-base sm:text-lg text-testo-forte">Punti deboli</span>
    <span className="block text-xs sm:text-sm font-bold text-testo-tenue">Focalizzati sugli errori</span>
  </span>
</button>
```

## 14. Banca di parole (richiamo attivo)

Riga di risposta sottolineata + parole come chip 3D. La parola usata lascia uno spazio fantasma (il gruppo non si riordina). Sotto, aiuti a scalini: «Mostra suggerimento» → «Troppo difficile? Usa le opzioni multiple» (mai un vicolo cieco, `metodo-di-studio` §7).

```tsx
<div className="min-h-16 border-b-4 border-bordo-forte rounded-t-2xl p-3 flex flex-wrap gap-2" aria-label="La tua risposta">
  {scelte.length ? scelte.map((w, i) => <Chip key={i} onClick={() => togli(i)}>{w}</Chip>)
                 : <span className="text-testo-tenue font-bold">Tocca le parole per formare la frase…</span>}
</div>
<div className="flex flex-wrap gap-2 justify-center mt-6">
  {pool.map((w, i) => usata[i]
    ? <span key={i} aria-hidden className="px-4 py-2 rounded-chip bg-superficie-alt border-2 border-bordo text-transparent select-none">{w}</span>
    : <Chip key={i} onClick={() => aggiungi(i)}>{w}</Chip>)}
</div>
// Chip: bg-card border-2 border-bordo border-b-4 rounded-chip px-4 py-2 min-h-11 font-bold active:border-b-2 active:translate-y-[2px]
```

## 15. Card di revisione

Per errori nelle statistiche e revisione della simulazione (solo sbagliate e omesse).

```tsx
<article className="rounded-card border-2 border-rosso-vivo bg-rosso-tinta p-4 sm:p-5 flex flex-col gap-2 text-testo">
  <p className="text-xs font-black text-rosso-tinta-testo">{d.categoria} · {d.argomento}</p>
  <p className="font-bold text-testo-forte">{d.testo}</p>
  <p className="text-sm font-semibold">La tua risposta:{' '}
    {risposta ? <del className="text-rosso-tinta-testo font-bold">{risposta}</del> : <span className="font-bold">Omessa</span>}</p>
  <p className="text-sm font-semibold">Risposta giusta: <span className="font-bold text-verde-testo">{d.giusta}</span></p>
  <p className="text-sm font-semibold bg-card/70 rounded-xl p-3">{d.spiegazione}</p>
</article>
```
Sulla tinta rossa le etichette usano `text-testo`, non `text-testo-tenue` (che lì scende a 4,05:1 in chiaro e 3,91:1 in scuro). Il verde della risposta giusta passa in entrambi i temi (4,53 e 4,80). Ogni combinazione nuova va verificata con `contrasto.cjs`.

## 16. Schermata di esito

Cerchio con spunta che scala (fine sessione) oppure verdetto + punteggio gigante (simulazione), una frase, **un** pulsante `max-w-sm`.

```tsx
<section className="flex flex-col items-center text-center gap-4 py-8">
  <p className={`text-lg font-black uppercase tracking-widest ${superata ? 'text-verde-testo' : 'text-testo'}`}>
    {superata ? 'Superata!' : 'Non superata'}
  </p>
  <p className="text-5xl sm:text-6xl font-black leading-none tabular-nums text-testo-forte">{punti}/{n}</p>
  <p className="text-sm font-bold text-testo-tenue">Tempo: {mm}:{ss}</p>
  {!superata && <p className="font-semibold">Ti mancano {soglia - punti} punti. Ripassa gli errori qui sotto.</p>}
  <button className="w-full max-w-sm …primario">Torna al menu</button>
</section>
```
Corregge: «FAILED» rosso gigante in inglese → «Non superata» neutro con il prossimo passo.

## 17. Stato vuoto

Icona tenue + una frase che dice cosa fare. Mai solo «Nessun dato».

```tsx
<div className="rounded-card border-2 border-bordo bg-card p-6 flex flex-col items-center text-center gap-3">
  <BarChart2 className="size-8 text-testo-tenue" aria-hidden />
  <p className="font-bold text-testo-tenue max-w-xs">Rispondi a domande di almeno 3 argomenti per vedere il profilo.</p>
</div>
```

## 18. Conferma

Per azioni irreversibili (consegna, uscita dalla simulazione, azzeramento). Usa `<dialog>` nativo (focus e Esc gratis), mai `alert()`/`confirm()`.

```tsx
<dialog ref={ref} aria-labelledby="t" className="rounded-card border-2 border-bordo bg-superficie text-testo p-6 max-w-sm w-[calc(100%-2rem)] backdrop:bg-black/40">
  <h2 id="t" className="text-xl font-black text-testo-forte">Consegnare adesso?</h2>
  <p className="mt-2 font-semibold">Hai risposto a {date} domande su {n}.</p>
  <div className="mt-6 flex flex-col gap-2">
    <button className="…primario">Consegna</button>
    <button className="…secondario" onClick={() => ref.current?.close()}>Torna alle domande</button>
  </div>
</dialog>
```
L'azione principale è un pulsante pieno, non un link colorato come «Submit» nell'app.

## 19. Lista di regole

Riquadro `bg-superficie-alt rounded-2xl p-4` con righe `flex gap-3`, ognuna preceduta da un pallino colorato `size-2.5 rounded-full` (blu, giallo, verde, viola). Testo `font-bold`, valori calcolati dalle costanti («{n} domande a risposta multipla»).
