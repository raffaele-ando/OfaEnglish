# Esecuzione visiva

Guida pratica al mestiere: come trasformare una struttura giusta in una schermata che si capisce in un secondo e sembra finita. Non è uno stile. Ogni sezione offre **scelte, con quando usarle**; la direzione la decide il contesto (SKILL.md §1). L'asticella della cura è in `riferimenti-qualita.md`.

Il principio sotto tutto: **l'occhio deve sapere dove atterrare, e tutto il resto deve farsi da parte.** Quasi ogni difetto visivo è una violazione di questo: troppe cose allo stesso volume.

## Indice
1. La direzione visiva · 2. La ricetta della gerarchia · 3. Spaziatura · 4. Tipografia · 5. Colore e accento · 6. L'elemento eroe · 7. Icone e illustrazioni senza dipendenze · 8. Stati · 9. Superfici, raggi, ombre · 10. L'onestà in forma visiva · 11. Checklist di rifinitura · 12. Rilevatore di slop · 13. Il confronto con il default

---

## 1. La direzione visiva

Dopo aver scelto la struttura, scegli l'aspetto. Una direzione è una posizione su pochi assi più un **elemento firma** (la cosa che si ricorda):

| Asse | da … | … a |
|---|---|---|
| densità | ariosa, pochi blocchi | compatta, molti valori |
| forma | morbida, raggi grandi | netta, raggi piccoli |
| profondità | piatta con spazio | a livelli con ombre · tattile (3D premibile) |
| voce tipografica | neutra | con personalità · editoriale (serif, corpi enormi) |
| energia del colore | neutri + un accento vivo | tinte ricche · quasi monocromo |
| luce | chiaro | scuro |

Proponi **due direzioni in una riga ciascuna**, scegli e di' perché in una riga. Alcune direzioni tipiche, con il loro contesto:
- **Ariosa con accento vivo** (come i riferimenti): flussi a passi, onboarding, app consumer su telefono. Firma: un titolo enorme o un gauge.
- **Tattile e giocosa** (come l'OFA): pratica ripetuta, rinforzo immediato. Firma: pulsanti premibili, riscontro animato.
- **Editoriale**: testi da leggere, pagine che spiegano un'idea. Firma: tipografia grande, colonna stretta, colore quasi assente.
- **Strumento preciso**: cruscotti, gestionali, analisi. Firma: numeri tabulari grandi, divisori sottili al posto delle card, accento solo su azione e stati.
- **Scura e concentrata**: uso serale, concentrazione, dati in tempo reale. Firma: superfici a livelli di luminosità, accento luminoso.

**Sobrio è una direzione, non un default.** Si sceglie quando il contesto lo chiede (errori costosi, lettura lunga) e anche allora ha un punto focale, una gerarchia forte e stati rifiniti. «Non copiare uno stile» vuol dire scegliere l'aspetto con una ragione, non rinunciare ad averne uno.

## 2. La ricetta della gerarchia

Tre livelli, non di più: **uno** elemento al livello 1 (il punto focale), **due o tre** al livello 2, tutto il resto al livello 3 (piccolo, grigio, o a un tocco di distanza).

Ricetta base per una schermata: **titolo + sottotitolo di una riga + elemento focale + un'azione principale.**

| Tipo di schermata | Livello 1 | Livello 2 | Livello 3 |
|---|---|---|---|
| Decisione, passo di un flusso | titolo 28-36 px, grassetto | sottotitolo di una riga; illustrazione o opzioni | nota piccola sotto il pulsante |
| Risultato | numero eroe 56-88 px (o anello, gauge) | etichetta che dice che cosa conta; azione successiva | contesto in una riga, dettaglio a un tocco |
| Scelta | le opzioni, righe alte ≥ 56 px con stato selezionato netto | titolo-domanda | aiuto o «salta» |
| Home, cruscotto su telefono | l'azione principale, grande | una-due metriche | tutto il resto in elenco o altrove |
| Cruscotto da scrivania | un numero focale per zona | tabella o grafico principale | filtri, legende, note |
| Stato vuoto | un'icona o piccola illustrazione | una riga che dice che cosa manca | un'azione |
| Lettura | titolo | colonna di testo (60-70 caratteri per riga) | metadati |

**Prova dello strabismo.** Sfoca la schermata (o immaginala al 20%): deve restare una forma dominante e due-tre secondarie. Se vedi una griglia uniforme di rettangoli, la gerarchia non c'è.

Leve della gerarchia, in ordine di efficacia: **dimensione → peso → spazio attorno → colore → posizione.** Bordi e scatole sono l'ultima risorsa, non la prima.

## 3. Spaziatura

Una scala sola, multipla di 4: **4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96**.

- **Vicinanza = parentela.** Lo spazio dentro un gruppo è al massimo la metà di quello tra gruppi (es. titolo→sottotitolo 8, sottotitolo→contenuto 32). Spazi tutti uguali (tutto a 16) cancellano i gruppi: è uno dei segni più comuni di interfaccia generata.
- **Margini laterali** su telefono 20-24 px; su desktop una colonna di 480-720 px per i flussi, larghezza piena solo per i cruscotti.
- **Aria in alto.** Il titolo di una schermata di flusso respira: 32-48 px sopra.
- **Separare con lo spazio prima che con le linee.** Un divisorio serve solo in elenchi lunghi e densi.
- Densità alta (strumenti): scala più corta (4-8-12-16-24), ma la regola dei gruppi resta.

```css
:root { --s1:4px; --s2:8px; --s3:12px; --s4:16px; --s5:24px; --s6:32px; --s7:48px; --s8:64px; }
```

## 4. Tipografia

**Scala.** Scegli un rapporto e resta lì:
- **1,2-1,25** per strumenti densi (12 · 14 · 16 · 18 · 20 · 24);
- **1,25-1,333** per app e flussi (13 · 16 · 20 · 24 · 32 · 40);
- **1,5 e oltre** quando un titolo o un numero è l'eroe (16 · 24 · 36 · 56 · 80).

Massimo **quattro-cinque dimensioni** e **due-tre pesi** per schermata. Il contrasto deve essere netto: un titolo di 32 px sopra un testo di 16 si legge come gerarchia, uno di 20 sopra 16 come errore.

**Dettagli che fanno la differenza.**
- Titoli: peso 700-800, `line-height: 1.1-1.2`, `letter-spacing: -0.01em` fino a `-0.03em` sopra i 28 px, `text-wrap: balance`.
- Sottotitoli: stessa famiglia, 15-17 px, colore attenuato (non più piccolo di 14), massimo due righe.
- Corpo: `line-height: 1.5`, `text-wrap: pretty`, massimo 70 caratteri per riga.
- Numeri: `font-variant-numeric: tabular-nums` dove si confrontano o cambiano; l'unità (%, €) più piccola o più leggera del numero, spazio non separabile prima di € (`14,99&nbsp;€`).
- Maiuscolo spaziato (`letter-spacing: .06em`) solo per etichette di una-due parole, e con parsimonia.

**Carattere** (Google Fonts o di sistema; al massimo due famiglie):
- *di sistema* (`system-ui`): strumenti, velocità, nessuna personalità da esprimere;
- *Inter, IBM Plex Sans*: neutro e denso, dati e strumenti;
- *Manrope, Plus Jakarta Sans, DM Sans*: prodotto amichevole e moderno;
- *Nunito, Nunito Sans*: arrotondato e giocoso (attenzione alla leggibilità a pesi alti, C25);
- *Fraunces, Newsreader, Source Serif*: titoli editoriali, pagine da leggere.

## 5. Colore e accento

**Prima i neutri, poi un accento.** Costruisci 5-6 neutri leggermente tinti verso la tinta dell'accento (un grigio puro sembra spento accanto a un colore vivo): testo, testo attenuato, bordo, superficie alternativa, superficie, pagina.

**Scegliere l'accento.** Dal marchio se esiste; altrimenti dal contesto (energia, calma, serietà). Evita il viola-indaco di default e i gradienti blu-viola: sono la firma delle interfacce generate. Evita di usare come accento un colore che ha già un significato di stato (rosso = errore, verde = giusto), oppure dai allo stato un secondo segnale (icona, testo).

**Dove va l'accento**, e quasi solo lì: pulsante principale, elemento focale, stato selezionato, avanzamento, voce attiva della navigazione, al massimo una parola chiave del titolo. Se compare su più di tre-quattro cose per schermata, smette di significare. Come ordine di grandezza, 5-10% della superficie.

```css
:root{
  --accento:#E5484D;                                  /* esempio: sceglilo dal contesto */
  --accento-tinta:color-mix(in srgb, var(--accento) 10%, white);
  --accento-forte:color-mix(in srgb, var(--accento) 85%, black); /* testo d'accento su chiaro */
  --testo:#16181D; --attenuato:#5E6470; --bordo:#E6E8EC; --sup-alt:#F5F6F8; --sup:#FFFFFF;
}
```

**Tema scuro:** superfici mai nere pure (per esempio `#101216`, `#171A20`, `#1E222A` per i livelli), l'elevazione si fa con superfici più chiare invece che con le ombre, l'accento un po' più chiaro. **Verifica sempre** i contrasti con `scripts/contrasto.cjs` (testo 4,5:1, grafica 3:1).

## 6. L'elemento eroe

Una schermata importante ha un elemento che si ricorda. Scegli quello che *è* il significato della schermata:

| Eroe | Quando |
|---|---|
| **Numero grande** | il risultato è una quantità; niente di più chiaro di «62%» a 72 px |
| **Anello** | una proporzione di un tutto (fatto su totale), con il numero dentro |
| **Gauge a semicerchio** | una posizione su una scala con un senso (da basso ad alto), con la manopola sul valore |
| **Titolo enorme** | schermate di apertura o di domanda, dove il contenuto è la domanda stessa |
| **Illustrazione** | un momento (inizio, fine, stato vuoto, errore) che un'immagine dice meglio delle parole |
| **Icona grande in un cerchio tinto** | come l'illustrazione, quando serve qualcosa di più sobrio |

**Anello** (SVG, nessuna dipendenza):
```html
<svg viewBox="0 0 120 120" width="160" height="160" role="img" aria-label="Imparate: 62%">
  <circle cx="60" cy="60" r="52" fill="none" stroke="var(--sup-alt)" stroke-width="12"/>
  <circle cx="60" cy="60" r="52" fill="none" stroke="var(--accento)" stroke-width="12"
          stroke-linecap="round" pathLength="100" stroke-dasharray="62 100"
          transform="rotate(-90 60 60)"/>
  <text x="60" y="60" text-anchor="middle" dominant-baseline="central"
        style="font:800 30px/1 inherit; font-variant-numeric:tabular-nums" fill="var(--testo)">62%</text>
</svg>
```
Con valore 0 non disegnare il secondo cerchio (il tratto arrotondato lascerebbe un puntino); senza dati mostra «—», non 0.

**Gauge a semicerchio** con manopola:
```html
<svg viewBox="0 0 200 116" width="240" role="img" aria-label="Accuratezza: 74%">
  <path d="M16 100 A84 84 0 0 1 184 100" fill="none" stroke="var(--sup-alt)" stroke-width="16" stroke-linecap="round"/>
  <path id="arco" d="M16 100 A84 84 0 0 1 184 100" fill="none" stroke="var(--accento)" stroke-width="16"
        stroke-linecap="round" pathLength="100" stroke-dasharray="74 100"/>
  <circle id="manopola" r="11" fill="var(--sup)" stroke="var(--accento)" stroke-width="6"/>
</svg>
<script>
  const v = 74, a = Math.PI * (1 - v / 100);            // 0% a sinistra, 100% a destra
  manopola.setAttribute('cx', 100 + 84 * Math.cos(a));
  manopola.setAttribute('cy', 100 - 84 * Math.sin(a));
</script>
```
Il numero va sotto o dentro l'arco, grande; l'etichetta sotto il numero dice che cosa è misurato.

**Numero grande:**
```css
.eroe-num{font:800 clamp(56px,18vw,88px)/1 var(--font); letter-spacing:-.03em; font-variant-numeric:tabular-nums}
.eroe-num small{font-size:.45em; font-weight:700; margin-left:.05em}   /* l'unità */
```

**Movimento** (facoltativo): l'arco che si riempie in 600-900 ms con `ease-out` dà vita all'eroe; con `prefers-reduced-motion` mostralo già pieno.

## 7. Icone e illustrazioni senza dipendenze

**Icone.** SVG inline su griglia 24, `fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"`, così prendono il colore del testo. Una sola famiglia: tutte a contorno o tutte piene, stesso spessore, stesse dimensioni (20 o 24 px accanto al testo). Tre strade:
- *disegnarle*: per forme semplici bastano pochi comandi (spunta `M5 12l5 5L20 7`, freccia `M9 6l6 6-6 6`, freccia a destra `M5 12h14M13 6l6 6-6 6`, più `M12 5v14M5 12h14`);
- *copiare i tracciati* di un set aperto (Lucide ISC, Heroicons MIT, Tabler MIT) dentro l'SVG, senza caricare librerie;
- *niente icona*: meglio nessuna che un'icona decorativa che non dice niente.

Evita le emoji come icone d'interfaccia: hanno stili diversi su ogni sistema e sono uno dei segni più riconoscibili delle interfacce generate.

**Icona in cerchio tinto** (per elenchi di vantaggi, stati vuoti, righe importanti):
```css
.bollino{width:44px;height:44px;border-radius:50%;display:grid;place-items:center;
         background:var(--accento-tinta);color:var(--accento-forte)}
```

**Illustrazioni piatte in SVG.** Poche forme semplici (rettangoli arrotondati, cerchi, un tracciato), **due-tre toni dell'accento più un neutro**, una forma morbida di sfondo tinta, un dettaglio d'accento che porta il significato. Esempio, «documento verificato»:
```html
<svg viewBox="0 0 160 120" width="200" aria-hidden="true">
  <ellipse cx="80" cy="64" rx="68" ry="50" fill="var(--accento-tinta)"/>
  <rect x="44" y="20" width="64" height="82" rx="10" fill="var(--sup)" stroke="var(--bordo)" stroke-width="2"/>
  <rect x="56" y="36" width="40" height="6" rx="3" fill="var(--bordo)"/>
  <rect x="56" y="50" width="28" height="6" rx="3" fill="var(--bordo)"/>
  <rect x="56" y="64" width="34" height="6" rx="3" fill="var(--bordo)"/>
  <circle cx="108" cy="90" r="18" fill="var(--accento)"/>
  <path d="M100 90l6 6 10-12" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
```
Tutte le illustrazioni di un'interfaccia condividono tavolozza, spessore dei tratti e raggi. Se non riesci a farla bene, usa l'icona grande in cerchio tinto: un'illustrazione goffa è peggio di nessuna.

## 8. Stati

Uno stato è finito quando **cambia su più di un canale** e non sposta il layout.

- **Selezionato:** bordo d'accento di 2 px + fondo `--accento-tinta` + segno (radio pieno, spunta). Il bordo esiste anche da non selezionato (2 px, colore neutro o trasparente), così la selezione non fa saltare il contenuto.
- **Premuto e hover:** leggero scurimento o `transform: translateY(1px)`; hover neutro se il colore d'accento significa già «selezionato» (C24).
- **Disabilitato:** opacità 0,4-0,5 e cursore normale; se non è chiaro perché, una riga lo dice vicino.
- **Focus:** anello visibile da tastiera (`:focus-visible`, 2-3 px, con distanza), mai tolto.
- **Vuoto:** icona o piccola illustrazione + una riga su che cosa manca + un'azione. Mai «Nessun dato disponibile» da solo.
- **Caricamento:** scheletri con la forma del contenuto che arriverà (blocchi grigi pulsanti piano), non uno spinner al centro di una schermata vuota.
- **Errore:** accanto a ciò che l'ha causato, con il rimedio.

```css
.opzione{border:2px solid var(--bordo);border-radius:14px;padding:16px;min-height:56px;background:var(--sup)}
.opzione[aria-checked="true"]{border-color:var(--accento);background:var(--accento-tinta)}
```

## 9. Superfici, raggi, ombre

- **Un metodo di separazione per livello.** Scegli fra spazio, fondo tinto, bordo sottile o ombra; non tutti insieme. Card solo dove un blocco è un oggetto (una scelta, un elemento di una lista, un riepilogo), non come contenitore di default di ogni cosa.
- **Raggi coerenti**, da una piccola scala (per esempio 8 · 12 · 16 · 24 · pieno). Raggio interno = raggio esterno − spaziatura interna. Pulsanti e card della stessa famiglia.
- **Ombre appena percettibili**, a due strati: `0 1px 2px rgb(0 0 0/.04), 0 4px 16px rgb(0 0 0/.06)`. Se l'ombra si nota come ombra, è troppa.
- **Pulsante principale** di 52-56 px, a tutta larghezza su telefono (meno i margini), fisso in basso con `padding-bottom: max(16px, env(safe-area-inset-bottom))`, sempre nello stesso punto nel flusso.
- **Barra di avanzamento** segmentata per flussi a passi (un segmento per passo), continua per quantità.

## 10. L'onestà in forma visiva

L'onestà sui dati (criterio 1) si esprime in **poche parole ben messe**, mai in paragrafi:
- **nell'etichetta**: «Imparate · primo corpus», «su 60»;
- **in un chip** che mostra il perimetro attivo e si tocca per cambiarlo;
- **in un'icona «i»** che apre una o due frasi;
- **in una nota piccola e attenuata** in fondo alla sezione, una riga;
- **nel dato stesso**: «—» e «dopo 3 sessioni» invece di 0%.

La spiegazione delle tue scelte di design (perché questa metrica, perché questa soglia) va **nel messaggio all'utente**, non nell'interfaccia. Se una schermata ha più di due righe che spiegano come funziona il sistema, stai scrivendo un documento, non un'interfaccia. Per le parole esatte, `copy-interfaccia`.

## 11. Checklist di rifinitura

- [ ] Un bordo sinistro comune per blocco; centrato solo in schermate corte e tutte centrate, mai misto.
- [ ] Bilanciamento ottico: icone centrate a occhio nei cerchi (il triangolo play va spostato di 1-2 px a destra), unità più piccole del numero, titoli bilanciati (`text-wrap: balance`), nessuna parola orfana.
- [ ] Raggi dalla scala, coerenti tra elementi affini.
- [ ] Ombre sottili o assenti; bordi tutti di 1 px (o 2 per gli stati) dello stesso colore.
- [ ] Numeri tabulari dove si confrontano; `14,99&nbsp;€`, `62&nbsp;%` o `62%` in modo coerente.
- [ ] Icone della stessa famiglia e dimensione, allineate alla linea del testo.
- [ ] Spazi dalla scala; dentro i gruppi meno che tra i gruppi.
- [ ] Tutti gli stati disegnati: selezionato, premuto, disabilitato, focus, vuoto, caricamento, errore.
- [ ] Niente salti di layout quando si seleziona o si carica.
- [ ] Testi lunghi troncati con criterio (ellissi, `line-clamp`) o, meglio, accorciati.
- [ ] Guardata a 320-375 px e in tema scuro; aree di tocco ≥ 44 px; contrasti verificati.

## 12. Rilevatore di slop

Segni visivi dell'interfaccia generica generata da un modello. Se ne trovi, toglili o sostituiscili:

- Tutto dentro **card uguali con bordo grigio**, stessa dimensione, in griglia, senza un elemento dominante.
- **Etichette grigie piccole** (spesso MAIUSCOLE) sopra ogni valore, in ogni card.
- **Paragrafi esplicativi** dentro l'interfaccia: come funziona la metrica, perché è onesta, note «Nota:».
- **Gradienti viola-indaco o blu-viola**, testo con gradiente, sfondi a macchie sfumate senza ragione.
- **Emoji come icone**, o icone decorative diverse in ogni card che non dicono niente.
- **Bordo sinistro colorato spesso** sulle card come unico segno di categoria.
- Testi quasi tutti della **stessa dimensione** (differenze di 2 px), o al contrario sei dimensioni senza sistema.
- **Spazi tutti uguali**, nessun raggruppamento.
- **Due o tre pulsanti di pari peso** dove serve un'azione.
- **Pillole e badge ovunque**, ciascuno di un colore.
- Titoli generici («Dashboard», «Panoramica», «Benvenuto!») con un sottotitolo che descrive l'interfaccia.
- Ombre grandi e pesanti, vetro smerigliato, bagliori.
- Uno **spinner** al centro del vuoto; uno stato vuoto senza azione.
- La combinazione di default mai scelta: Inter + grigi ardesia + indaco + `rounded-2xl` + `shadow-lg` su tutto.

## 13. Il confronto con il default

Obbligatorio prima di consegnare.

1. **Immagina concretamente** che cosa produrrebbe Claude senza questa skill per la stessa richiesta: layout, colori, elementi, testi. Non farne una caricatura: di solito è ordinato, colorato, con icone e card, e visivamente più vivace di un'esecuzione timida. Scrivilo per te in tre-quattro righe. Se puoi renderizzare (browser, screenshot), abbozza la schermata principale e guardala davvero.
2. **Confronta su tre assi:**
   - *gerarchia*: con la prova dello strabismo, che cosa si vede per primo? È la cosa giusta? Nel tuo design deve essere più netto;
   - *rifinitura*: la checklist del §11 e il rilevatore del §12;
   - *chiarezza*: in cinque secondi si capisce che schermata è e che cosa premere? Contali: elementi e parole devono essere meno o uguali, non di più.
3. **Il tuo deve vincere chiaramente su tutti e tre.** Un pareggio è una sconfitta: la skill deve aggiungere, non solo evitare errori. Anche l'accostamento ai riferimenti conta: messo in fila accanto a `assets/riferimenti-qualita/`, stonerebbe per cura?
4. **Se non vince, rivedi** con le mosse tipiche: ingrandisci il focale e rimpicciolisci il resto; togli un blocco; trasforma card in righe o in spazio; sostituisci un paragrafo con un'etichetta o un'icona «i»; metti un elemento visivo (anello, numero, illustrazione) dove c'è una frase; unifica raggi, icone e spazi; aumenta il salto tra i pesi.
