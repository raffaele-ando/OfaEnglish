# Sistema visivo

Token, ricette e regole visive. Vengono dall'app *OFA Polimi Prep*, con i difetti corretti (contrasto, stati senza colore, movimento ridotto, tema scuro dei grafici). Tutte le coppie testo/sfondo consigliate qui sono in `assets/palette.json` e passano la verifica:

```bash
node scripts/contrasto.cjs --palette assets/palette.json     # tutte le coppie OK (exit 0)
node scripts/contrasto.cjs "#FFFFFF" "#1CB0F6"               # una coppia qualsiasi
node scripts/contrasto.cjs --suggerisci "#58CC02" --su "#FFFFFF" --min 4.5   # trova la tonalità giusta
```

Soglie WCAG: **4,5:1** testo normale · **3:1** testo grande (≥ 24 px, o ≥ 18,66 px in grassetto), bordi di controlli, icone che portano significato, serie di grafici.

## Indice
1. Palette e ruoli · 2. Abbinamenti accessibili · 3. Variabili CSS e Tailwind · 4. Tipografia · 5. Raggi · 6. Il pulsante «premibile» · 7. Spaziature e layout · 8. Tema scuro · 9. Movimento · 10. Icone · 11. Grafici · 12. Stati

---

## 1. Palette e ruoli

Un colore = un significato, sempre lo stesso in tutta l'interfaccia. Così l'utente legge lo stato prima ancora del testo (nell'app il blu è diventato «solo selezionato» quando l'hover blu è stato tolto, `4dfa530`).

| Tinta | Significato | Esempi |
|---|---|---|
| **Blu** | agire, primario, selezionato (non ancora giudicato), progresso neutro | CTA, opzione scelta, barra della simulazione |
| **Verde** | giusto, imparato, successo, «Sicuro» | opzione giusta, % Imparate, Continua dopo una giusta |
| **Rosso** | sbagliato, errore, punto debole, «Indovino», azione distruttiva | opzione sbagliata, timer in scadenza, Errori comuni |
| **Giallo** | serie in corso (fiamma), record, «Incerto» | 🔥 N di fila, miglior punteggio |
| **Viola** | accuratezza, pratica libera | % Accuratezza, pillola «Domanda N» |

Ogni tinta ha **cinque tonalità con compiti diversi**. È la correzione principale rispetto all'app, che usava il colore vivo anche per il testo bianco sopra (bianco su `#FFC800` = 1,55:1, su `#58CC02` = 2,09:1, su `#1CB0F6` = 2,44:1).

| Tonalità | A cosa serve | Blu | Verde | Rosso | Viola | Giallo |
|---|---|---|---|---|---|---|
| `vivo` | barre con il numero accanto, bordi di stato, icone, coriandoli, testo **nel tema scuro** | `#1CB0F6` | `#58CC02` | `#FF4B4B` | `#CE82FF` | `#FFC800` |
| `pieno` | fondo dei pulsanti con testo bianco | `#1078C0` | `#2F8500` | `#DC2626` | `#9B3FE0` | — (giallo vivo + testo scuro `#3D2E00`) |
| `bordo3d` | bordo inferiore di 4 px del pulsante premibile | `#0B5E96` | `#236300` | `#A91B1B` | `#7426B0` | `#E5B400` |
| `testo` | testo colorato su bianco **e** sulla sua tinta (tema chiaro) | `#0B6FA8` | `#2B7A00` | `#C81E1E` | `#8A2BD6` | `#8F6200` |
| `tinta` | sfondo pallido di stato (chiaro) | `#DDF4FF` | `#D7FFB8` | `#FFE5E5` | `#F5E5FF` | `#FFF4E5` |

**Neutri (chiaro → scuro)**

| Ruolo | Chiaro | Scuro |
|---|---|---|
| pagina (dietro la cornice) | `#F7F9FB` | `#111B21` |
| superficie (cornice dell'app) | `#FFFFFF` | `#1E293B` |
| card (dentro la cornice) | `#FFFFFF` | `#0F172A` (più scura: effetto «incassato») |
| superficie alternativa (binario del selettore) | `#F3F4F6` | `#0F172A` |
| bordo | `#E5E7EB` | `#334155` |
| bordo forte / hover | `#D1D5DB` | `#475569` |
| testo | `#4B4B4B` | `#E2E8F0` |
| testo forte (titoli, domanda) | `#3C3C3C` | `#F8FAFC` |
| testo tenue (etichette, descrizioni) | `#6B7280` su bianco (**non** `#9CA3AF`, che fa 2,54:1); `#4B5563` su superfici grigie | `#94A3B8` |

## 2. Abbinamenti accessibili (verificati)

| Uso | Coppia | Rapporto |
|---|---|---|
| Corpo | `#4B4B4B` su bianco | 8,72 |
| Etichette tenui | `#6B7280` su bianco / su `#F7F9FB` | 4,83 / 4,58 |
| Etichette tenui su superfici grigie (`#F3F4F6`, `gray-100`, riquadri, chip) | `#4B5563` (**non** `#6B7280`, che fa 4,39:1) | 6,87 |
| CTA e primario | bianco su `#1078C0` | 4,70 |
| Sottotitolo nella CTA | bianco su pillola `bg-black/15` (≈ `#0B5E96`) | 6,87 |
| Verde (Sicuro, Continua) | bianco su `#2F8500` | 4,69 |
| Rosso (Riprova, Indovino) | bianco su `#DC2626` | 4,83 |
| Viola (pillola) | bianco su `#9B3FE0` | 5,02 |
| **Giallo** (Incerto, pillole) | **`#3D2E00` su `#FFC800`** (mai bianco) | 8,50 |
| Opzione selezionata | `#0B6FA8` su `#DDF4FF` | 4,79 |
| Opzione giusta / barra giusta | `#2B7A00` su `#D7FFB8` | 4,86 |
| Opzione sbagliata / card errore | `#C81E1E` su `#FFE5E5` | 4,81 |
| Numeri gialli (record) | `#8F6200` su bianco | 5,36 |
| Scuro: corpo / etichette | `#E2E8F0` / `#94A3B8` su `#1E293B` | 11,87 / 5,71 |
| Scuro: colori vivi come testo | `#1CB0F6` · `#58CC02` · `#CE82FF` · `#FFC800` su `#1E293B` | 5,98 · 7,00 · 5,75 · 9,41 |
| Scuro: rosso come testo | `#FF6B6B` su `#1E293B` (il `#FF4B4B` fa 4,43) | 5,27 |
| Scuro: stati su tinta | `#E0F2FE`/`#0C4A6E` · `#86EFAC`/`#14532D` · `#FECACA`/`#7F1D1D` | 8,24 · 6,49 · 6,93 |

Regole pratiche:
- **Il colore vivo non porta testo bianco.** Per un pulsante usa il `pieno`; per il giallo usa testo scuro.
- **Una barra vivace è ammessa solo se il suo numero è scritto accanto** (la barra verde su binario grigio fa 1,69:1: l'informazione vera è nel «72%»). Senza numero, usa il `pieno`.
- **Nel tema scuro i colori vivi diventano il testo colorato** (tutti passano tranne il rosso, che diventa `#FF6B6B`). I pulsanti restano uguali nei due temi.
- Se aggiungi un colore, verificalo con `contrasto.cjs` e aggiungilo a `palette.json`.

## 3. Variabili CSS e Tailwind

**Tailwind v4** (come l'app): i token in `@theme` generano classi come `bg-blu-pieno`, `text-testo-tenue`; ridefinendoli sotto `.dark` il tema scuro è automatico e non servono più `dark:` ripetuti su ogni elemento (nell'app ogni classe era duplicata a mano, ed è così che grafici e schermata Debug sono rimasti chiari).

```css
@import "tailwindcss";
@custom-variant dark (&:where(.dark, .dark *));

@theme {
  --font-sans: "Nunito Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  /* neutri che cambiano col tema */
  --color-pagina: #F7F9FB;  --color-superficie: #FFFFFF;  --color-card: #FFFFFF;
  --color-superficie-alt: #F3F4F6;  --color-bordo: #E5E7EB;  --color-bordo-forte: #D1D5DB;
  --color-testo: #4B4B4B;  --color-testo-forte: #3C3C3C;  --color-testo-tenue: #6B7280;  --color-testo-tenue-su-grigio: #4B5563;
  /* tinte fisse */
  --color-blu-vivo: #1CB0F6;  --color-blu-pieno: #1078C0;  --color-blu-bordo3d: #0B5E96;
  --color-verde-vivo: #58CC02; --color-verde-pieno: #2F8500; --color-verde-bordo3d: #236300;
  --color-rosso-vivo: #FF4B4B; --color-rosso-pieno: #DC2626; --color-rosso-bordo3d: #A91B1B;
  --color-viola-vivo: #CE82FF; --color-viola-pieno: #9B3FE0; --color-viola-bordo3d: #7426B0;
  --color-giallo-vivo: #FFC800; --color-giallo-bordo3d: #E5B400; --color-su-giallo: #3D2E00;
  /* testo colorato e tinte: cambiano col tema */
  --color-blu-testo: #0B6FA8;   --color-blu-tinta: #DDF4FF;   --color-blu-tinta-testo: #0B6FA8;
  --color-verde-testo: #2B7A00; --color-verde-tinta: #D7FFB8; --color-verde-tinta-testo: #2B7A00;
  --color-rosso-testo: #C81E1E; --color-rosso-tinta: #FFE5E5; --color-rosso-tinta-testo: #C81E1E;
  --color-viola-testo: #8A2BD6; --color-viola-tinta: #F5E5FF; --color-viola-tinta-testo: #8A2BD6;
  --color-giallo-testo: #8F6200; --color-giallo-tinta: #FFF4E5; --color-giallo-tinta-testo: #8F6200;
  /* raggi */
  --radius-cornice: 32px; --radius-card: 24px; --radius-pulsante: 20px; --radius-chip: 16px; --radius-badge: 14px;
}

.dark {
  --color-pagina: #111B21;  --color-superficie: #1E293B;  --color-card: #0F172A;
  --color-superficie-alt: #0F172A;  --color-bordo: #334155;  --color-bordo-forte: #475569;
  --color-testo: #E2E8F0;  --color-testo-forte: #F8FAFC;  --color-testo-tenue: #94A3B8;
  --color-blu-testo: #1CB0F6;  --color-verde-testo: #58CC02;  --color-rosso-testo: #FF6B6B;
  --color-viola-testo: #CE82FF; --color-giallo-testo: #FFC800;
  --color-blu-tinta: #0C4A6E;   --color-blu-tinta-testo: #E0F2FE;
  --color-verde-tinta: #14532D; --color-verde-tinta-testo: #86EFAC;
  --color-rosso-tinta: #7F1D1D; --color-rosso-tinta-testo: #FECACA;
  --color-viola-tinta: #3B0764; --color-viola-tinta-testo: #E9D5FF;
  --color-giallo-tinta: #422006; --color-giallo-tinta-testo: #FDE68A;
}
```

**CSS semplice** (artifact o pagina senza build): stessi nomi senza il prefisso `color-` (`--blu-pieno`, `--testo-tenue`…) su `:root`, ridefiniti in `@media (prefers-color-scheme: dark)` protetto da `:root:not([data-theme="light"])` e di nuovo in `:root[data-theme="dark"]`, e `body { background: var(--pagina); color: var(--testo); }`.

## 4. Tipografia

- **Font**: Nunito Sans (arrotondato, leggibile; l'app è passata da Nunito a Nunito Sans «per la leggibilità», `6ea4e84`). Dichiaralo una volta sola (nell'app era doppio). Pesi: **900** per titoli, pulsanti, numeri, etichette; **700** per testo corrente e opzioni; **600** per spiegazioni lunghe (oltre 2-3 righe il 700 stanca).
- **Scala** (mobile → `sm:`):

| Ruolo | Classi |
|---|---|
| Punteggio gigante | `text-5xl sm:text-6xl font-black leading-none` |
| Titolo di intro / fine | `text-2xl sm:text-3xl font-black` |
| Titolo di schermata | `text-xl sm:text-2xl font-black tracking-tight` |
| Testo della domanda | `text-xl sm:text-3xl font-black leading-tight text-testo-forte` |
| Etichetta della CTA | `text-2xl sm:text-3xl font-black uppercase tracking-widest` |
| Opzione | `text-base sm:text-lg font-bold leading-snug` |
| Titolo del feedback | `text-xl sm:text-2xl font-black` |
| Numero nelle tile | `text-2xl sm:text-3xl font-black` |
| Corpo / spiegazione | `text-sm sm:text-base font-semibold` |
| Etichetta | `text-xs sm:text-sm font-black uppercase tracking-wider text-testo-tenue` |

- **Minimo 12 px** (`text-xs`) per qualsiasi testo che serve leggere. L'app ha provato a stringere tutto fino a 9-10 px per stare in uno schermo (`5c9cab7`) e lo ha annullato lo stesso giorno (`72b0a14`): il testo grande vince sul far stare tutto.
- **Maiuscolo con spaziatura** solo per etichette e pulsanti brevi (≤ 3 parole), sempre via CSS (`uppercase`) e mai scritto in maiuscolo nel sorgente: gli screen reader leggono il sorgente, e il sorgente resta in maiuscola iniziale (vedi `copy.md`). Mai per frasi.
- Numeri che cambiano (timer, contatori): `tabular-nums` così non ballano; niente `font-mono`.

## 5. Raggi

Dal fuori al dentro, ogni livello più piccolo del contenitore (scala fissata in `4dfa530`):

`cornice 32 (solo sm:, a tutto schermo su mobile) → card 24 → pulsanti 20 → chip e riquadri icona 16 → badge lettera 14 → controlli piccoli 12 → pillole e barre full`.

Quasi niente ombre (`shadow-sm` al massimo): la profondità la dà il bordo inferiore.

## 6. Il pulsante «premibile»

La firma visiva: blocco con bordo di 2 px e **bordo inferiore di 4 px** più scuro, che alla pressione affonda. È stata aggiunta e rifinita, mai tolta.

```html
<!-- primario -->
<button class="w-full min-h-12 rounded-pulsante bg-blu-pieno border-b-4 border-blu-bordo3d
  text-white font-black uppercase tracking-widest py-4 px-6
  hover:brightness-95 active:border-b-0 active:translate-y-1
  focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-blu-pieno dark:focus-visible:outline-blu-vivo
  disabled:bg-bordo disabled:border-bordo-forte disabled:text-testo-tenue disabled:active:translate-y-0 disabled:cursor-not-allowed
  transition-[transform,border-width,filter] duration-150 motion-reduce:transition-none">Inizia</button>

<!-- secondario (bianco) -->
<button class="… bg-card border-2 border-bordo border-b-4 text-testo hover:bg-superficie-alt">Annulla</button>

<!-- giallo: testo scuro -->
<button class="… bg-giallo-vivo border-b-4 border-giallo-bordo3d text-su-giallo">Incerto</button>
```

L'hover **scurisce** (`brightness-95`), non schiarisce: schiarire il fondo abbasserebbe il contrasto del testo bianco sotto 4,5:1.

Varianti: verde `bg-verde-pieno border-verde-bordo3d`, rosso `bg-rosso-pieno border-rosso-bordo3d`, viola `bg-viola-pieno border-viola-bordo3d`. Sulle card grandi usa `active:translate-y-1 active:border-b-0`; su opzioni e barra azioni `active:translate-y-[2px] active:border-b-2`.

**Solo ciò che si tocca ha il bordo 3D.** Le tile di sola lettura hanno bordo uniforme di 2 px (nell'app anche le tile statistiche avevano `border-b-4` e sembravano pulsanti). Un'opzione già usata o eliminata resta «premuta»: `border-b-2 translate-y-[2px] opacity-50`.

## 7. Spaziature e layout

- **Mobile prima di tutto, una schermata senza scroll di pagina**: radice `h-[100dvh] overflow-hidden`; su `sm:` la pagina può scorrere con `sm:p-6`.
- **Cornice su desktop**: `max-w-3xl mx-auto sm:h-[800px] sm:my-auto`, e ogni schermata `bg-superficie sm:rounded-cornice sm:border-2 sm:border-bordo`: su desktop l'app è un «telefono» centrato, su mobile è a tutto schermo.
- **Scheletro di ogni schermata**: intestazione fissa (`shrink-0 border-b-2`) → contenuto che scorre (`flex-1 overflow-y-auto`) → barra azioni fissa (`shrink-0 border-t-2 p-4`, con `pb-[max(1rem,env(safe-area-inset-bottom))]`).
- **Azione principale all'altezza del pollice**: in fondo (`mt-auto`) o nella barra azioni.
- Spaziature: schermata `p-4 sm:p-6`, contenuto `p-4 sm:p-8`, card `p-4 sm:p-5`, CTA eroe `p-6 sm:p-8`; griglie `gap-3 sm:gap-4`. Opzioni `grid-cols-1 sm:grid-cols-2`, `min-h-[72px]`.
- Pulsante unico nelle schermate di esito: `max-w-sm mx-auto`; testo lungo: `max-w-2xl`.
- **Aree di tocco ≥ 44 × 44 px** anche per le icone (`p-2.5` attorno a un'icona da 24). Nell'app X, icone dell'intestazione e pallini della simulazione erano 6-26 px.

## 8. Tema scuro

Gemello completo, non un ripensamento:
- Script anti-lampo nell'`<head>` che legge la preferenza salvata o `prefers-color-scheme`; interruttore sole/luna con `aria-label`.
- Cornice `#1E293B`, card più scure `#0F172A`, bordi `#334155`.
- Transizione di colore breve (`transition-colors duration-300`) sulle superfici.
- **Grafici, tooltip, schermate di servizio e `manifest`/`theme-color` inclusi** (nell'app erano rimasti chiari). Con i token di §3 basta usare `var(--color-…)` anche nei grafici.
- `<meta name="theme-color">` doppio con `media="(prefers-color-scheme: dark)"`.

## 9. Movimento

Il movimento premia e orienta; non decora.
- Pressione: 150 ms. Barre: larghezza animata 500-700 ms `ease-out`. Feedback: entra dal basso (`opacity 0→1, y 10→0`). Fine sessione: cerchio con spunta che scala da 0,8 a 1.
- Urgenza: timer rosso negli ultimi 5 s (e il numero resta scritto). La fiamma della serie rimbalza dalla seconda giusta di fila.
- Il feedback **cresce con la serie dentro la sessione** (coriandoli mini → burst → cannon, accordo che sale): meccanica e valori sono in `metodo-di-studio` §5.
- **`prefers-reduced-motion`: rispettalo ovunque**, non solo per due coriandoli su quattro come nell'app. Con movimento ridotto: niente rimbalzi, lampeggi, coriandoli e spostamenti; restano colore, testo e suono.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration: .01ms !important; animation-iteration-count: 1 !important;
    transition-duration: .01ms !important; scroll-behavior: auto !important; }
}
```
```ts
const ridotto = matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!ridotto) confetti({ ...opzioni, disableForReducedMotion: true });
```
- Suono e vibrazione: un interruttore visibile; separa suono e vibrazione se possibile. Il suono al tocco su ogni pulsante può stancare: tienilo leggero.

## 10. Icone

- `lucide-react` (o lucide via CDN), tratto pesante: `strokeWidth={2.5}` per l'intestazione, `3` per X, frecce e spunta. 20-24 px nelle intestazioni, 28 nelle tile.
- **Un'icona colorata + un'etichetta tenue**: il colore dell'icona è quello della metrica o modalità.
- Pulsante solo icona = sempre `aria-label` (in italiano) e area 44 px. Icona decorativa accanto a un testo = `aria-hidden="true"`.
- Emoji solo dove un'icona non si può mettere (dentro `<option>`) o nei messaggi di successo (🔥): vedi `copy.md`.

## 11. Grafici

Prima di disegnare un grafico carica la skill `dataviz`. In più, per restare coerente:
- Card del grafico: `bg-card border-2 border-bordo rounded-2xl p-4 sm:p-6`, titolo come etichetta con icona colorata.
- Assi senza linee, tick 12 px `fill: var(--color-testo-tenue)` in grassetto, griglia tratteggiata in una sola direzione `var(--color-bordo)`.
- Barre con angoli arrotondati (`radius [4,4,0,0]`), impilate «Imparate» (colore) + «Da imparare» (`var(--color-bordo)`).
- Tooltip con i token: `background: var(--color-card)`, `border: 2px solid var(--color-bordo)`, `color: var(--color-testo)`, raggio 12. Mai colori fissi chiari.
- Radar del profilo per argomento solo con almeno 3 argomenti; altrimenti uno stato vuoto che dice cosa fare.
- Giorni con `toLocaleDateString('it-IT', { weekday: 'short' })`.
- Una serie che non ha etichetta numerica usa il `pieno`, non il `vivo`.

## 12. Stati

| Stato | Ricetta | Mai solo colore |
|---|---|---|
| **Inattivo** (opzione) | `bg-card border-2 border-bordo border-b-4`, hover grigio (`hover:bg-superficie-alt hover:border-bordo-forte`) | — |
| **Selezionato** | `bg-blu-tinta border-blu-vivo text-blu-tinta-testo`, `aria-pressed="true"` / `aria-checked` | badge lettera pieno blu |
| **Giusto** | `bg-verde-tinta border-verde-vivo text-verde-tinta-testo` | icona ✓ (lucide `Check`) nel badge |
| **Sbagliato** | `bg-rosso-tinta border-rosso-vivo text-rosso-tinta-testo` | icona ✗ (lucide `X`) nel badge |
| **Eliminato / già usato** | `opacity-50 border-b-2 translate-y-[2px]`, `disabled` | resta «premuto» |
| **Disabilitato** | `bg-bordo border-bordo-forte text-testo-tenue cursor-not-allowed`, niente affondamento | testo invariato |
| **Vuoto** | card centrata, icona tenue, una frase che dice **cosa fare** per riempirla | — |
| **Caricamento** | scheletro con le forme finali (`animate-pulse`, spento con movimento ridotto), mai schermata bianca (`return null` nell'app) | testo «Caricamento…» per screen reader |
| **Focus** | `focus-visible:outline-3 outline-offset-2 outline-blu-pieno` (scuro: `blu-vivo`) | sempre visibile da tastiera |

Il feedback testuale dopo la risposta va in una regione `aria-live="polite"`.
