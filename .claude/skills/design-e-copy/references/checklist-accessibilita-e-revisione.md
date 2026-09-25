# Checklist: accessibilità e revisione

Da passare prima di consegnare un'interfaccia nuova o quando l'utente chiede di rivedere una UI o i suoi testi. Parti dagli script, poi controlla a mano quello che non vedono.

```bash
node scripts/controlla_copy.cjs src index.html        # testi, glossario, maiuscole, zoom, lang, aria-label
node scripts/contrasto.cjs --palette assets/palette.json   # la palette consigliata
node scripts/contrasto.cjs "#testo:#sfondo" …          # ogni colore nuovo introdotto
```

Riporta i problemi in ordine di gravità (blocca l'uso → confonde → rifinitura), ognuno con file:riga e la correzione proposta.

## 1. Contrasto e colore
- [ ] Testo normale ≥ 4,5:1, testo grande (≥ 24 px o ≥ 18,66 px bold) ≥ 3:1, in **entrambi i temi**.
- [ ] Nessun testo bianco su colore vivo (`#1CB0F6`, `#58CC02`, `#FFC800`, `#CE82FF`): usa i toni `pieno`, o testo scuro sul giallo.
- [ ] Etichette tenui `#6B7280` su bianco, `#4B5563` su superfici grigie (`#F3F4F6`), `#94A3B8` in scuro; mai `gray-400`.
- [ ] Bordi di input, icone che portano significato, serie di grafici senza etichetta ≥ 3:1.
- [ ] **Mai solo colore**: giusto/sbagliato con icona ✓/✗ e testo; semaforo con il numero; timer rosso con i secondi scritti; navigatore della simulazione con stato nell'`aria-label`.
- [ ] Ogni colore nuovo è verificato con `contrasto.cjs` (e aggiunto a `palette.json` se diventa un token).

## 2. Tocco e layout
- [ ] Aree di tocco ≥ 44 × 44 px (icone con `size-11`, pallini dentro pulsanti grandi, link «Esci» come pulsante vero).
- [ ] Una sola azione principale per schermata, in basso all'altezza del pollice.
- [ ] Funziona a 360 px di larghezza senza scroll orizzontale; `100dvh` e `safe-area-inset-bottom` rispettati.
- [ ] Il bordo 3D solo su ciò che si tocca; le tile di sola lettura sono piatte.
- [ ] Testo minimo 12 px; niente compressione per «far stare tutto».

## 3. HTML e tecnologie assistive
- [ ] `<html lang="it">` (l'app aveva `lang="en"` con un'interfaccia italiana: pronuncia sbagliata). Contenuti in un'altra lingua con `lang="en"` sull'elemento (le domande d'inglese).
- [ ] Viewport **senza** `maximum-scale=1` né `user-scalable=no`: lo zoom resta possibile.
- [ ] Ogni pulsante solo icona ha `aria-label` in italiano; icone decorative `aria-hidden`.
- [ ] Interruttori con `aria-pressed`; gruppi di opzioni con `role="radiogroup"`/`radio` + `aria-checked`.
- [ ] Barre con `role="progressbar"` e `aria-valuenow/min/max` + etichetta.
- [ ] Feedback dopo la risposta in `aria-live="polite"`; timer **non** annunciato a ogni secondo.
- [ ] Focus visibile (`focus-visible:outline`) su tutto; ordine di tabulazione logico; `<dialog>` per le conferme.
- [ ] Titoli in ordine (`h1` per schermata); maiuscolo solo via CSS.

## 4. Movimento, suono, vibrazione
- [ ] `prefers-reduced-motion` rispettato ovunque: coriandoli (tutti i tipi), rimbalzi, lampeggi, transizioni di spostamento.
- [ ] Interruttore del suono visibile; vibrazione disattivabile (meglio separata dal suono).
- [ ] Nessun lampeggio più di 3 volte al secondo.

## 5. Tema scuro completo
- [ ] Ogni superficie, bordo e testo viene dai token; nessun colore chiaro fisso.
- [ ] **Grafici**: griglia, tick, tooltip, serie «Da imparare» con i token (nell'app erano bianchi su sfondo scuro).
- [ ] Schermate secondarie (errore, diagnostica, dialoghi) incluse.
- [ ] `theme-color` e `manifest` con variante scura; script anti-lampo nell'`<head>`.

## 6. Stati
- [ ] Caricamento con scheletro (non schermata vuota); stati vuoti con cosa fare; errori con cosa fare.
- [ ] Disabilitato riconoscibile (grigio, niente affondamento) e spiegato se non è ovvio perché.
- [ ] Azioni irreversibili (consegna, uscita dalla simulazione, azzeramento) con conferma e pulsante pieno.
- [ ] I dati sui progressi non si possono perdere per un tocco sbagliato.

## 7. Testi (vedi `copy.md`)
- [ ] **Una lingua per schermata**: italiano nell'interfaccia, inglese solo nei contenuti.
- [ ] **Maiuscola solo iniziale** ovunque; niente *Title Case* né maiuscolo nel sorgente.
- [ ] **Un termine per concetto** (glossario §7): niente domande/frasi, simulazione/esame/mock, record/miglior punteggio.
- [ ] Nessuna parola della colonna «non usare»; nessun XP/livello/serie di giorni se non richiesti.
- [ ] **Nessun conteggio scritto a mano** («(606)», «/30», «25/30», «10s»): tutto dai dati o dalle costanti.
- [ ] Numeri all'italiana (virgola decimale, «72%», «30 s») e plurali corretti.
- [ ] Esclamativi solo sui successi; errori brevi, senza colpa, con il prossimo passo.
- [ ] Ogni testo passa il test «posso togliere una parola?».
- [ ] Nessun `alert()`; nessun messaggio tecnico grezzo davanti all'utente.

## 8. Coerenza con il metodo
- [ ] Un tocco per iniziare; in home i numeri veri (Imparate %, Accuratezza %), non punti o livelli (`metodo-di-studio` §4, §7).
- [ ] L'ambito scelto (nucleo o tutto) vale in tutte le schermate, statistiche comprese (nell'app le statistiche lo ignoravano).
- [ ] Feedback che cresce con la serie dentro la sessione e si azzera senza drammi (`metodo-di-studio` §5).
