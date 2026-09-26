# Riferimenti di qualità

Tre immagini in `assets/riferimenti-qualita/` che l'utente considera **buone**: il concept di un rifacimento dell'app OFA, generato come immagini. Aprile (con lo strumento di lettura delle immagini) prima di progettare un'interfaccia che l'utente vedrà.

> **Sono l'asticella della cura, non un modello di stile né di contenuto.** Dicono quanto deve essere rifinita una schermata: gerarchia, spazio, punto focale, stati, coerenza. Non dicono che l'interfaccia debba essere bianca e rossa, per telefono, con illustrazioni 3D. E il contenuto è in buona parte un imbuto di vendita che contraddice i criteri dell'utente (vedi «Che cosa NON prendere»). Un cruscotto scuro e denso per un analista può raggiungere la stessa asticella con un aspetto opposto.

## Indice
1. Le immagini · 2. Che cosa le rende buone · 3. Che cosa NON prendere · 4. Come usarle

---

## 1. Le immagini

**`1.jpg`: sei schermate, dalla domanda iniziale all'acquisto.**
Apertura con un titolo enorme allineato a sinistra su due righe, la parola chiave nel colore d'accento, un sottotitolo grigio di due righe e poi quasi solo spazio vuoto fino al pulsante in basso. Risultato: un semicerchio a gauge con una manopola, «82%» gigante nel colore d'accento, un'etichetta di due righe sotto, poi una card tinta con una piccola illustrazione e una cifra grande. Scelta del piano: tre card impilate, quella consigliata con bordo e fondo tinti dell'accento, un badge, una freccia piena; le altre neutre. Elenco dei vantaggi: tre righe, ciascuna con un'icona dentro un cerchio pastello. Pagamento: righe selezionabili con radio, la scelta con bordo d'accento e radio pieno. Chiusura: un trofeo illustrato con piccoli raggi, titolo, una riga, pulsante.

**`2.jpg`: quattordici schermate numerate, lo stesso flusso più lungo.**
Aggiunge l'onboarding con un'illustrazione (libri e bandiera), domande con opzioni a riga e radio, la schermata di una domanda del quiz con «Domanda 3 di 10», un campo email con un'illustrazione a busta, un elenco con piccole icone rosse, chiusure con bersaglio o documento con spunta e coriandoli.

**`3.jpg`: quattordici schermate, variante con prodotto vero e proprio.**
Aggiunge la Home («Ciao, Raffaele», una card con un anello «62%» e l'obiettivo accanto, un grande pulsante-card «Continua a studiare» con icona play e sottotitolo con l'argomento), una classifica con controllo segmentato e la propria riga evidenziata, un profilo a righe con freccia, la barra di navigazione in basso con la voce attiva nell'accento, un indicatore di passi a tre cerchi, la prima schermata con due pulsanti impilati (principale pieno, secondario a contorno).

## 2. Che cosa le rende buone

Ogni punto ha il perché: è quello che devi trasferire, anche in un aspetto diverso.

- **Un punto focale per schermata.** Un titolo enorme, *oppure* un gauge, *oppure* un trofeo, *oppure* l'opzione consigliata. Mai due elementi che competono. *Perché:* l'occhio sa dove atterrare e la schermata si capisce in un secondo.
- **Gerarchia fatta con dimensione, peso e spazio, non con scatole.** Titolo grande e nero in grassetto, sottotitolo corto, più piccolo e grigio, poi il contenuto. Le card compaiono solo dove c'è una scelta da fare. *Perché:* ogni bordo in più è rumore che l'occhio deve scavalcare.
- **Pochi elementi.** Da tre a sei blocchi per schermata. Quando il contenuto è tanto, il flusso si divide in più schermate invece di comprimerle. *Perché:* ogni schermata fa una cosa.
- **Spazio vuoto generoso e voluto.** La prima schermata di `1.jpg` è per metà vuota, e sembra sicura di sé, non incompleta. Margini laterali ampi (circa 24 px su 375), molto spazio tra gruppi, poco dentro i gruppi.
- **Un solo colore d'accento, usato con coerenza.** Pulsante principale, parola chiave del titolo, elemento eroe, stato selezionato, barra di avanzamento, voce attiva della navigazione. Tutto il resto è neutro. *Perché:* l'accento diventa un segnale («qui si agisce, questo è scelto, questo conta») invece di una decorazione.
- **Elementi visivi veri quando portano significato.** Il gauge *è* il risultato; il trofeo *è* «hai finito»; la busta *è* «inserisci l'email». Le illustrazioni condividono uno stile e una tavolozza (accento, un grigio-azzurro pallido, bianco). Le icone stanno in cerchi tinti, tutte della stessa famiglia.
- **Stati che sembrano finiti.** La scelta cambia su più canali insieme: bordo d'accento, fondo tinto, radio pieno o spunta. Le opzioni non scelte sono calme ma chiaramente cliccabili.
- **Struttura ripetuta e prevedibile.** Barra di avanzamento segmentata in alto, freccia indietro sempre nello stesso punto, pulsante principale sempre in basso, stessa altezza, stesso raggio, stessa freccia. *Perché:* chi usa il flusso smette di cercare e segue.
- **Testi corti e convenzionali.** Titoli di due-cinque parole, sottotitoli di una-due righe, pulsanti con un verbo. Nessuna spiegazione di come funziona il sistema.
- **Numeri trattati come grafica.** «82%», «30€», «14,99 €» sono grandi, pesanti, con l'unità più piccola o allineata con cura.
- **Rifinitura invisibile.** Raggi coerenti (card e pulsanti della stessa famiglia), ombre appena percettibili, allineamenti netti, nessuna parola orfana nei titoli.

## 3. Che cosa NON prendere

**Il contenuto e le strategie.** Buona parte del flusso è un imbuto di vendita con schemi manipolativi, contrari al criterio 1 e a `metodo-di-studio`:
- «82% di probabilità di fallire» ricavato da 10 domande in 3 minuti: un numero che non misura ciò che dice, messo nel posto più visibile per spaventare;
- «Rischi di perdere 30€», elenchi di conseguenze: avversione alla perdita usata come leva;
- tre piani con quello di mezzo «Più scelto» (esca di prezzo), accesso sbloccato invitando tre amici, email chiesta prima del risultato, classifica.
Se il compito è diverso da un imbuto commerciale, niente di tutto questo c'entra; se è un imbuto, valgono comunque i criteri dell'utente.

**I difetti visivi.**
- Il rosso è insieme marchio, pulsante principale e «pericolo/fallire»: un colore con due significati (C24). Se l'accento è rosso, l'errore ha bisogno di un altro segnale; spesso conviene un accento non rosso.
- Testi secondari nelle card probabilmente sotto i 12 px e grigi su tinta chiara: nel codice vanno verificati con `scripts/contrasto.cjs` e portati ad almeno 13-14 px.
- Sottotitoli di riempimento («Ecco la tua previsione per l'esame»), lingue mescolate: per i testi vale `copy-interfaccia`.
- Le illustrazioni sono rese 3D generate da un modello d'immagine: nel codice non si ottengono. Si traduce la *funzione* (un'immagine che dice il significato della schermata) in un'illustrazione piatta in SVG fatta di poche forme, con due-tre toni dell'accento e un neutro (`esecuzione-visiva.md` §6).

**L'aspetto come default.** Bianco, rosso, telefono, card arrotondate: è la direzione visiva scelta *per quel* concept. La tua va scelta dal contesto (`esecuzione-visiva.md` §1).

## 4. Come usarle

1. **Prima di progettare**, guarda le immagini per ricalibrare l'occhio sul livello di cura richiesto.
2. **Nel confronto finale** (SKILL.md, «Confronto con il default»), chiediti: *se la mia schermata fosse messa in fila accanto a queste, stonerebbe per cura?* Non per colore o per stile: per gerarchia, spazio, stati, coerenza. Se stona, rivedi prima di consegnare.
3. **Non citarle all'utente come modello da imitare** e non riprodurne i contenuti: sono il suo metro di giudizio, non il suo brief.
