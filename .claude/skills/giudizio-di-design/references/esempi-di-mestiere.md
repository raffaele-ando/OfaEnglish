# Esempi di mestiere

Tre prodotti dell'utente, o che l'utente ha giudicato buoni, di **tre generi diversi**. Sono qui per una ragione sola: far vedere che gli stessi principi (`esecuzione-visiva.md` §1) producono aspetti opposti quando cambia il genere. **Nessuno dei tre è un modello da imitare**, e nessuno è l'asticella a cui ogni design deve somigliare. Da un esempio si prende il ragionamento, non l'aspetto.

## Indice
1. Come si legge un esempio · 2. Flusso di acquisto su telefono (immagini) · 3. LifeMax, utility quotidiana · 4. OFA, app di studio · 5. Stessi principi, risultati opposti

---

## 1. Come si legge un esempio

Per ogni scelta visiva chiediti: *che problema risolve, per chi, in quale genere?* Se sai rispondere, hai imparato qualcosa che puoi applicare altrove in un'altra forma. Se ti resta solo «era rosso, con card arrotondate e un trofeo», hai imparato uno stile, ed è proprio ciò che questa skill vuole evitare.

## 2. Flusso di acquisto su telefono (immagini)

`assets/esempio-funnel-mobile/1.jpg`, `2.jpg`, `3.jpg`: il concept di un rifacimento dell'app OFA come flusso a passi (verifica del livello, risultato, scelta del piano, pagamento), generato come immagini da un modello. L'utente lo ha trovato ben fatto **sul piano della cura visiva**. Aprile con lo strumento di lettura delle immagini se il compito è di questo genere o se vuoi vedere un esempio di esecuzione rifinita; non occorre guardarle per ogni progetto.

**Genere:** flusso a passi, uso una tantum, consumer, telefono.

**Il mestiere che mostra, e il perché:**
- *Un punto focale per schermata*: un titolo enorme, oppure un gauge con «82%», oppure un trofeo, oppure l'opzione consigliata. L'occhio sa dove atterrare.
- *Gerarchia con dimensione, peso e spazio*: titolo grande in grassetto, sottotitolo corto e attenuato, poi il contenuto. Le card compaiono solo dove c'è una scelta.
- *Poco per schermata, molte schermate*: il flusso si allunga invece di comprimere.
- *Spazio vuoto voluto*: la prima schermata di `1.jpg` è per metà vuota e sembra sicura, non incompleta.
- *Un accento solo*, sempre con lo stesso compito: pulsante, parola chiave, elemento eroe, selezione, avanzamento.
- *Immagini che dicono il significato del momento*: trofeo = hai finito, busta = email, gauge = risultato. Tutte nello stesso stile e con la stessa tavolozza.
- *Stati netti*: la scelta cambia bordo, fondo e segno insieme.
- *Struttura ripetuta*: barra dei passi in alto, indietro nello stesso punto, pulsante sempre in basso uguale.

**Che cosa non prendere:**
- *Il contenuto*: è un imbuto di vendita con schemi manipolativi, contrari al criterio 1 e a `metodo-di-studio` («82% di probabilità di fallire» da 10 domande, «rischi di perdere 30€», un piano «più scelto» come esca, accesso sbloccato invitando tre amici, email prima del risultato).
- *I difetti*: il rosso è insieme marchio, azione e «fallire» (un colore con due significati, C24); testi secondari minuscoli e grigi su tinta chiara; sottotitoli di riempimento; illustrazioni 3D che nel codice non si ottengono (se ne traduce la funzione, `esecuzione-visiva.md` §8).
- *L'aspetto come default*: bianco, rosso, card arrotondate e illustrazioni sono le scelte di *quel* genere. In un'utility sarebbero rumore; in un portfolio, anonimato.

## 3. LifeMax, utility quotidiana

Fonte: `/home/user/raffaele-ando/lifemax/DESIGN.md` e `COMPONENTI.md`, se disponibili. Un'app per organizzare la giornata, aperta venti volte al giorno, spesso di corsa, da una persona con attenzione discontinua.

**Genere:** utility quotidiana. «Una superficie da usare, non da guardare.» Gerarchia dichiarata: colpo d'occhio → sempre uguale → abitudini del telefono → e solo dopo, bella.

**Il mestiere che mostra, e il perché:**
- *L'identità nasce togliendo i segni generici.* L'utente l'ha definita «troppo AI slop»; sono stati tolti il gradiente viola-blu, il kit di schede identiche con la stessa ombra, le etichette in maiuscoletto spaziato sopra ogni titolo, le lavate di gradiente, l'alone sotto il logo.
- *L'accento è inchiostro* (un blu-petrolio quasi nero, piatto). Perché: le otto aree della vita occupano già tutta la ruota dei colori; qualunque accento colorato sembrerebbe una nona area. Su uno strumento i colori appartengono ai dati.
- *L'espressione si spende in un posto solo*: le cifre grandi (timer, numeri, titoli di schermata) in un graziato di sistema, zero byte scaricati. Le cifre dentro gli elenchi restano nel sans, «se no non è più un accento, è un tema».
- *Una scheda non galleggia*: la separa un filo, non un'ombra. L'ombra resta solo dove dice qualcosa (questo sta sopra quello).
- *Sistema misurato*: quattro pesi tipografici (erano tredici dichiarati, due visibili), raggi tutti da token, un solo pulsante pieno per schermata («se ce ne sono due, non ce n'è nessuno»), `text-wrap: pretty` e `balance`, misura della prosa verificata sui caratteri reali.
- *Movimento per significato*: durate scelte in base a che cosa fa il movimento (cambio pagina 250 ms, pannello che entra 400 e esce 350: chi apre ci mette più di chi chiude); tolto un effetto che portava l'app a 18,7 fps senza che si vedesse.

**Che cosa non prendere:** la sobrietà come regola generale. È giusta per un'utility; in un flusso di acquisto o in un portfolio sarebbe una rinuncia.

## 4. OFA, app di studio

Vedi `esempio-ofa.md`. **Genere:** app motivazionale di studio. Colori vivi con un significato ciascuno, pulsanti premibili, riscontro con suono, vibrazione e coriandoli crescenti, testo asciutto. Il design è ricco dove serve a tornare (il riscontro) e asciutto dove serve a capire (le parole, i numeri).

## 5. Stessi principi, risultati opposti

| Principio | Flusso di acquisto | LifeMax (utility) | OFA (studio) |
|---|---|---|---|
| Punto focale | un grande elemento per schermata (titolo, gauge, trofeo) | il dato stesso (il tempo, il numero) in un carattere diverso | l'azione per cominciare; poi il numero che misura quanto sai |
| Accento | vivo, di marca, su azione e selezione | inchiostro: il colore appartiene ai dati | un colore per ciascun significato |
| Separare | card solo per le scelte, ombra morbida | un filo; l'ombra solo se dice «sopra» | pulsanti con spessore, solo ciò che si preme |
| Espressione | alta, nelle illustrazioni e nei titoli | un posto solo: le cifre | nel riscontro: suono, tatto, movimento |
| Movimento | transizioni tra passi | rapido, misurato, per significato | festa proporzionata alla prestazione |
| Rischio evitato | confusione tra passi | rumore e vie di fuga | gamification finta |

Il filo comune non è un aspetto: è che ogni scelta ha una ragione nel genere e nella persona. È questo che si trasferisce.
