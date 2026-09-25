# Sistema visivo

Token, ricette e regole visive. Vengono dall'app *OFA Polimi Prep*, con i difetti corretti (contrasto del testo e della grafica, testo troppo piccolo, stati senza colore, movimento ridotto, tema scuro dei grafici). Tutte le coppie consigliate qui (testo e grafica) sono in `assets/palette.json` e passano la verifica:

```bash
node scripts/contrasto.cjs --palette assets/palette.json     # tutte le coppie OK (exit 0)
node scripts/contrasto.cjs "#FFFFFF" "#1CB0F6"               # una coppia di testo (min 4,5)
node scripts/contrasto.cjs --grafica "#2F8500:#E5E7EB"       # una coppia grafica (min 3)
node scripts/contrasto.cjs --suggerisci "#58CC02" --su "#FFFFFF" --min 4.5   # trova la tonalità giusta
```

Soglie WCAG: **4,5:1** testo normale · **3:1** testo grande (≥ 24 px, o ≥ 18,66 px in grassetto) · **3:1 per la grafica** (WCAG 1.4.11): il riempimento di barre e anelli contro la traccia e la superficie accanto, icone che portano significato, anello di focus, bordi di input, serie di grafici. Nel file palette le coppie grafiche hanno `"tipo": "grafica"`.

## Indice
1. Palette e ruoli · 2. Abbinamenti accessibili (testo e grafica) · 3. Token, font e tema scuro · 4. Tipografia · 5. Raggi · 6. Il pulsante «premibile» · 7. Spaziature e layout · 8. Tema scuro · 9. Movimento · 10. Icone · 11. Grafici · 12. Stati

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
| `vivo` | coriandoli, bordi di stato (rinforzo, non unico segnale), fondo del giallo; nel **tema scuro** testo, barre e icone | `#1CB0F6` | `#58CC02` | `#FF4B4B` | `#CE82FF` | `#FFC800` |
| `pieno` | fondo dei pulsanti con testo bianco; nel **tema chiaro** riempimento di barre e anelli | `#1078C0` | `#2F8500` | `#DC2626` | `#9B3FE0` | — (giallo vivo + testo scuro `#3D2E00`) |
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
| bordo (card, pulsanti con testo, traccia delle barre) | `#E5E7EB` | `#334155` |
| bordo forte / hover | `#D1D5DB` | `#475569` |
| bordo di input (campi, select, checkbox) | `#6B7280` | `#94A3B8` |
| anello di focus | `#1078C0` | `#1CB0F6` |
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

**Grafica (3:1, WCAG 1.4.11)**. Una barra, un anello o un'icona che dice qualcosa (quanto sai, giusto/sbagliato) deve vedersi anche per chi vede meno contrasto, non solo il numero accanto. Nell'app il verde vivo sulla traccia grigia faceva **1,69:1** (`#58CC02` su `#E5E7EB`) e il blu 1,97:1.

| Uso | Chiaro | Scuro |
|---|---|---|
| Riempimento barra/anello contro la traccia | `pieno` su `#E5E7EB`: blu 3,79 · verde 3,79 · viola 4,06 · rosso 3,90 | `vivo` su `#334155`: blu 4,24 · verde 4,96 · viola 4,07 · rosso `#FF6B6B` 3,73 |
| Riempimento contro la card (anelli, barre senza traccia) | `pieno` su bianco: 4,70 · 4,69 · 5,02 · 4,83 | `vivo` su `#0F172A`: 7,30 · 8,55 · 7,02 · 6,43 |
| Anello di focus | `#1078C0` su bianco / `#F7F9FB` / `#F3F4F6`: 4,70 / 4,45 / 4,27 | `#1CB0F6` su `#1E293B` / `#0F172A`: 5,98 / 7,30 |
| Bordo di input | `#6B7280` su bianco / `#F3F4F6`: 4,83 / 4,39 | `#94A3B8` su `#0F172A` / `#1E293B`: 6,96 / 5,71 |
| Icona che porta significato | tono `testo` (verde `#2B7A00` 5,40 su bianco, 4,86 sulla tinta) | tono `vivo` |
| Opzione selezionata | badge `pieno` blu sulla tinta: 4,13 | badge `vivo` sulla tinta: 3,87 |

Perché questa scelta e non un'altra: il verde vivo non arriva a 3:1 contro **nessuna** traccia chiara (servirebbe un grigio scuro come `#565F70`, pesante nel tema chiaro) e una traccia più scura come `#9CA3AF` peggiora le cose (1,22:1). Quindi nel chiaro la traccia resta leggera e il riempimento passa al `pieno`, che è lo stesso colore dei pulsanti: la barra resta «Duolingo» ma si legge. Nello scuro il vivo passa già. Il token `--color-*-barra` (§3) fa il cambio da solo. La traccia contro la card non deve arrivare a 3:1: la parte che porta il valore è il riempimento, e il numero resta sempre scritto accanto (serve a chi non distingue le lunghezze, non sostituisce il contrasto).

Cosa **non** serve a 3:1: il bordo `#E5E7EB` di card e pulsanti che hanno un testo (il testo identifica il controllo) e le decorazioni (coriandoli, fiamma accanto al numero). Il bordo vivo dell'opzione selezionata/giusta/sbagliata è un rinforzo: lo stato lo portano il badge pieno, l'icona ✓/✗ e l'`aria-checked`.

Regole pratiche:
- **Il colore vivo non porta testo bianco.** Per un pulsante usa il `pieno`; per il giallo usa testo scuro.
- **Nel chiaro la grafica che significa qualcosa usa `pieno` o `testo`, nello scuro il `vivo`.** Usa i token `*-barra` e `*-testo`, che cambiano col tema.
- **Nel tema scuro i colori vivi diventano il testo colorato** (tutti passano tranne il rosso, che diventa `#FF6B6B`). I pulsanti restano uguali nei due temi.
- Se aggiungi un colore, verificalo con `contrasto.cjs` (con `--grafica` per barre, icone e bordi) e aggiungilo a `palette.json`.

## 3. Token, font e tema scuro (un blocco solo)

Un solo blocco da copiare, uguale per Tailwind v4 e per CSS semplice. **Ogni colore è scritto una volta** con `light-dark(chiaro, scuro)`: il tema lo sceglie `color-scheme`, che segue il sistema oppure la scelta salvata. Così non esistono tre copie dei valori scuri (`.dark`, `[data-theme]`, `@media`) che prima o poi divergono: nell'app ogni classe era duplicata a mano con `dark:`, ed è così che grafici e schermata Debug sono rimasti chiari. Con questi token non serve la variante `dark:`.

```html
<!-- <head>: font (con fallback di sistema) e scelta salvata prima del primo disegno, niente lampo -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;700;900&display=swap">
<meta name="theme-color" content="#FFFFFF" media="(prefers-color-scheme: light)">
<meta name="theme-color" content="#1E293B" media="(prefers-color-scheme: dark)">
<script>try{const t=localStorage.getItem('tema');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t}catch{}</script>
```

```css
/* Tailwind v4: così com'è. CSS semplice: togli @import e scrivi :root al posto di @theme.
   Senza <link> puoi mettere in cima: @import url("https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;700;900&display=swap"); */
@import "tailwindcss";

:root { color-scheme: light dark; }                                   /* segue il sistema */
:root:is(.light, [data-theme="light"]) { color-scheme: light; }      /* scelta dell'utente */
:root:is(.dark,  [data-theme="dark"])  { color-scheme: dark; }

@theme {
  --font-sans: "Nunito Sans", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  /* neutri */
  --color-pagina: light-dark(#F7F9FB, #111B21);      --color-superficie: light-dark(#FFFFFF, #1E293B);
  --color-card: light-dark(#FFFFFF, #0F172A);        --color-superficie-alt: light-dark(#F3F4F6, #0F172A);
  --color-bordo: light-dark(#E5E7EB, #334155);       --color-bordo-forte: light-dark(#D1D5DB, #475569);
  --color-bordo-input: light-dark(#6B7280, #94A3B8); --color-focus: light-dark(#1078C0, #1CB0F6);
  --color-testo: light-dark(#4B4B4B, #E2E8F0);       --color-testo-forte: light-dark(#3C3C3C, #F8FAFC);
  --color-testo-tenue: light-dark(#6B7280, #94A3B8); --color-testo-tenue-su-grigio: light-dark(#4B5563, #94A3B8);
  /* tinte fisse (pulsanti, coriandoli): uguali nei due temi */
  --color-blu-vivo: #1CB0F6;   --color-blu-pieno: #1078C0;   --color-blu-bordo3d: #0B5E96;
  --color-verde-vivo: #58CC02; --color-verde-pieno: #2F8500; --color-verde-bordo3d: #236300;
  --color-rosso-vivo: #FF4B4B; --color-rosso-pieno: #DC2626; --color-rosso-bordo3d: #A91B1B;
  --color-viola-vivo: #CE82FF; --color-viola-pieno: #9B3FE0; --color-viola-bordo3d: #7426B0;
  --color-giallo-vivo: #FFC800; --color-giallo-bordo3d: #E5B400; --color-su-giallo: #3D2E00;
  /* barre e anelli (3:1): pieno nel chiaro, vivo nello scuro */
  --color-blu-barra: light-dark(#1078C0, #1CB0F6);   --color-verde-barra: light-dark(#2F8500, #58CC02);
  --color-viola-barra: light-dark(#9B3FE0, #CE82FF); --color-rosso-barra: light-dark(#DC2626, #FF6B6B);
  /* testo e icone colorati, stati su tinta */
  --color-blu-testo: light-dark(#0B6FA8, #1CB0F6);    --color-blu-tinta: light-dark(#DDF4FF, #0C4A6E);    --color-blu-tinta-testo: light-dark(#0B6FA8, #E0F2FE);
  --color-verde-testo: light-dark(#2B7A00, #58CC02);  --color-verde-tinta: light-dark(#D7FFB8, #14532D);  --color-verde-tinta-testo: light-dark(#2B7A00, #86EFAC);
  --color-rosso-testo: light-dark(#C81E1E, #FF6B6B);  --color-rosso-tinta: light-dark(#FFE5E5, #7F1D1D);  --color-rosso-tinta-testo: light-dark(#C81E1E, #FECACA);
  --color-viola-testo: light-dark(#8A2BD6, #CE82FF);  --color-viola-tinta: light-dark(#F5E5FF, #3B0764);  --color-viola-tinta-testo: light-dark(#8A2BD6, #E9D5FF);
  --color-giallo-testo: light-dark(#8F6200, #FFC800); --color-giallo-tinta: light-dark(#FFF4E5, #422006); --color-giallo-tinta-testo: light-dark(#8F6200, #FDE68A);
  /* raggi */
  --radius-cornice: 32px; --radius-card: 24px; --radius-pulsante: 20px; --radius-chip: 16px; --radius-badge: 14px;
}

body { background: var(--color-pagina); color: var(--color-testo); font-family: var(--font-sans); }
```

Note:
- **Interruttore del tema**: imposta `document.documentElement.dataset.theme = 'dark' | 'light'` e salvalo in `localStorage` (dentro `try`); per tornare al sistema togli l'attributo. `color-scheme` sistema anche barre di scorrimento e campi nativi.
- `light-dark()` funziona in tutti i browser attuali (dal 2024). Solo se devi supportare browser più vecchi scrivi i valori scuri in un blocco `:root:is(.dark,[data-theme="dark"])` e in un `@media (prefers-color-scheme: dark){ :root:not(.light,[data-theme="light"]) {…} }`.
- In SVG e grafici usa `var(--color-…)` negli attributi o nello stile: il browser risolve il tema. Per un `<canvas>` leggi il colore già risolto (`getComputedStyle(el).color` di un elemento che usa il token), non il valore della variabile.
- Il font: pesi 600/700/900 soltanto; `display=swap` mostra subito il fallback di sistema.

## 4. Tipografia

- **Font**: Nunito Sans (arrotondato, leggibile; l'app è passata da Nunito a Nunito Sans «per la leggibilità», `6ea4e84`). Dichiaralo una volta sola (nell'app era doppio). Pesi: **900** per titoli, pulsanti, numeri, etichette; **700** per testo corrente e opzioni; **600** per spiegazioni lunghe (oltre 2-3 righe il 700 stanca).
- **Scala** (mobile → `sm:`):

| Ruolo | Classi |
|---|---|
| Punteggio gigante | `text-5xl sm:text-6xl font-black leading-none` |
| Titolo di intro / fine | `text-2xl sm:text-3xl font-black` |
| Titolo di schermata | `text-xl sm:text-2xl font-black tracking-tight` |
| Testo della domanda | `text-xl sm:text-3xl font-black leading-tight text-testo-forte` |
| Etichetta della CTA | `text-xl sm:text-2xl font-black` in maiuscola iniziale; `uppercase tracking-wide` solo se è una parola corta («Inizia») |
| Opzione | `text-base sm:text-lg font-bold leading-snug` |
| Titolo del feedback | `text-xl sm:text-2xl font-black` |
| Numero nelle tile | `text-2xl sm:text-3xl font-black` |
| Corpo / spiegazione | `text-sm sm:text-base font-semibold` |
| Etichetta, descrizione, pillola, voce della barra in basso | `text-sm font-black text-testo-tenue` (+ `uppercase tracking-wide` solo se ≤ 2 parole) |
| Didascalia non essenziale | `text-xs font-bold text-testo-tenue` |

- **Minimo 14 px** (`text-sm`) per etichette e testo secondario: tutto ciò che serve per capire o decidere. **12 px** (`text-xs`) solo per didascalie di cui si può fare a meno (tick degli assi quando il valore è anche nel tooltip o scritto, nota di versione). Nell'app le etichette erano `text-xs` maiuscole con spaziatura larga: il maiuscolo toglie la forma delle parole e a 12 px rallenta la lettura, su telefono all'aperto ancora di più. L'app ha provato a stringere tutto fino a 9-10 px (`5c9cab7`) e lo ha annullato lo stesso giorno (`72b0a14`): il testo grande vince sul far stare tutto.
- **Maiuscolo solo via CSS e solo per etichette brevi** (≤ 2 parole): mai scritto in maiuscolo nel sorgente (gli screen reader leggono il sorgente, alcuni lettera per lettera) e mai per frasi. Spaziatura `tracking-wide`, non `tracking-widest`.
- **La CTA deve stare su una riga a 320 px.** Lì il testo ha circa 240 px (320 − 2 × 16 di margine − 2 × 24 di padding). In `text-2xl` maiuscolo con `tracking-widest` una lettera occupa ~20 px, quindi ci stanno ~12 caratteri: «INIZIA SESSIONE» va a capo. In maiuscola iniziale `text-xl` ne stanno ~20. Per questo la CTA è in maiuscola iniziale; il maiuscolo va bene solo per una parola corta.
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
  text-white text-lg font-black py-4 px-6
  hover:brightness-95 active:border-b-0 active:translate-y-1
  focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-focus
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
- **Desktop: una colonna centrata, non un finto telefono.** Contenuto in `mx-auto w-full max-w-[480px]` (flusso a una colonna, sessioni) fino a `max-w-3xl` (768 px: statistiche, dashboard, due colonne da `sm:`), con `px-4` di margine. Una pagina, un artifact o una dashboard scorrono normalmente (`min-h-dvh`). Solo un'**app shell** (sessione con barra azioni fissata in basso) usa `h-dvh` con la colonna alta quanto la finestra: mai un'altezza fissa come `sm:h-[800px]` dell'app, che su un portatile da 700 px taglia la barra azioni e su un monitor grande sembra un giocattolo. Su `sm:` la colonna può avere `sm:border-x-2 sm:border-bordo` o, per l'app shell, `sm:rounded-cornice sm:border-2 sm:my-6`.
- **Scheletro di ogni schermata**: intestazione fissa (`shrink-0 border-b-2`) → contenuto che scorre (`flex-1 overflow-y-auto`) → barra azioni fissa (`shrink-0 border-t-2 p-4`, con `pb-[max(1rem,env(safe-area-inset-bottom))]`).
- **Azione principale all'altezza del pollice**: in fondo (`mt-auto`) o nella barra azioni.
- Spaziature: schermata `p-4 sm:p-6`, contenuto `p-4 sm:p-8`, card `p-4 sm:p-5`, CTA eroe `p-6 sm:p-8`; griglie `gap-3 sm:gap-4`. Opzioni `grid-cols-1 sm:grid-cols-2`, `min-h-[72px]`.
- Pulsante unico nelle schermate di esito: `max-w-sm mx-auto`; testo lungo: `max-w-2xl`.
- **Aree di tocco ≥ 44 × 44 px** anche per le icone (`p-2.5` attorno a un'icona da 24). Nell'app X, icone dell'intestazione e pallini della simulazione erano 6-26 px.

## 8. Tema scuro

Gemello completo, non un ripensamento:
- Token, font e script anti-lampo sono nel blocco di §3; interruttore sole/luna con `aria-label`.
- Cornice `#1E293B`, card più scure `#0F172A`, bordi `#334155`.
- Transizione di colore breve (`transition-colors duration-300`) sulle superfici.
- **Grafici, tooltip, schermate di servizio e `manifest`/`theme-color` inclusi** (nell'app erano rimasti chiari). Con i token di §3 basta usare `var(--color-…)` anche nei grafici.
- `<meta name="theme-color">` doppio con `media` (è nel blocco di §3).

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
- **Un'icona colorata + un'etichetta tenue**: il colore dell'icona è quello della metrica o modalità, con il token `*-testo` (tono scuro nel chiaro, vivo nello scuro), così passa 3:1. Un'icona vivace nel chiaro (`#58CC02` su bianco 2,09:1) va bene solo se è decorativa.
- Fiamma della serie: `fill-giallo-vivo` + tratto `text-giallo-testo` (5,36:1 su bianco); il numero accanto resta scritto.
- Pulsante solo icona = sempre `aria-label` (in italiano) e area 44 px. Icona decorativa accanto a un testo = `aria-hidden="true"`.
- Emoji solo dove un'icona non si può mettere (dentro `<option>`) o nei messaggi di successo (🔥): vedi `copy.md`.

## 11. Grafici

Prima di disegnare un grafico carica la skill `dataviz`. In più, per restare coerente:
- Card del grafico: `bg-card border-2 border-bordo rounded-2xl p-4 sm:p-6`, titolo come etichetta con icona colorata.
- Assi senza linee, tick 12 px `fill: var(--color-testo-tenue)` in grassetto (didascalia: il valore è anche nel tooltip o scritto; se il tick è l'unico posto dove si legge, 14 px), griglia tratteggiata in una sola direzione `var(--color-bordo)`.
- Barre con angoli arrotondati (`radius [4,4,0,0]`), impilate «Imparate» (`var(--color-verde-barra)`) + «Da imparare» (`var(--color-bordo)`): 3,79:1 nel chiaro, 4,96:1 nello scuro.
- Tooltip con i token: `background: var(--color-card)`, `border: 2px solid var(--color-bordo)`, `color: var(--color-testo)`, raggio 12. Mai colori fissi chiari.
- Radar del profilo per argomento solo con almeno 3 argomenti; altrimenti uno stato vuoto che dice cosa fare.
- Giorni con `toLocaleDateString('it-IT', { weekday: 'short' })`.
- Serie, barre e anelli usano i token `*-barra` (pieno nel chiaro, vivo nello scuro), mai il vivo fisso.
- **Costanza (ultimi 7 giorni)**: un grafico informativo dell'attività (domande o minuti al giorno) va bene, perché dice quanto ha studiato. **Non** va bene trasformarlo in serie di giorni: niente contatore «N giorni di fila», niente fiamme sui giorni, niente giorni «persi» in rosso. La serie di giorni non lo motiva (`metodo-di-studio` §4) e conta anche le aperture a vuoto; 🔥 resta solo per le giuste di fila dentro la sessione (§5).

## 12. Stati

| Stato | Ricetta | Mai solo colore |
|---|---|---|
| **Inattivo** (opzione) | `bg-card border-2 border-bordo border-b-4`, hover grigio (`hover:bg-superficie-alt hover:border-bordo-forte`) | — |
| **Selezionato** | `bg-blu-tinta border-blu-vivo text-blu-tinta-testo`, `aria-pressed="true"` / `aria-checked` | badge pieno `bg-blu-barra text-card` (porta lo stato; il bordo vivo è solo rinforzo) |
| **Giusto** | `bg-verde-tinta border-verde-vivo text-verde-tinta-testo` | icona ✓ (lucide `Check`) nel badge |
| **Sbagliato** | `bg-rosso-tinta border-rosso-vivo text-rosso-tinta-testo` | icona ✗ (lucide `X`) nel badge |
| **Eliminato / già usato** | `opacity-50 border-b-2 translate-y-[2px]`, `disabled` | resta «premuto» |
| **Disabilitato** | `bg-bordo border-bordo-forte text-testo-tenue cursor-not-allowed`, niente affondamento | testo invariato |
| **Vuoto** | card centrata, icona tenue, una frase che dice **cosa fare** per riempirla | — |
| **Caricamento** | scheletro con le forme finali (`animate-pulse`, spento con movimento ridotto), mai schermata bianca (`return null` nell'app) | testo «Caricamento…» per screen reader |
| **Focus** | `focus-visible:outline-3 outline-offset-2 outline-focus` (blu pieno nel chiaro, vivo nello scuro, ≥ 4,27:1) | sempre visibile da tastiera |
| **Campo di testo / select** | `bg-card border-2 border-bordo-input rounded-xl` (il bordo grigio chiaro `bordo` qui non basta: 1,24:1) | etichetta visibile sopra |

Il feedback testuale dopo la risposta va in una regione `aria-live="polite"`.
