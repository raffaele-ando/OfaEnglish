# Casi: decisioni reali e quando andrebbero prese diversamente

Trentatré decisioni ricostruite dalla storia dell'app OFA (`/home/user/OfaEnglish`, `git log -p`) e dai commenti nel codice, anche quelli rimossi. I messaggi di commit sono generici (probabilmente generati): il *perché* si ricava da che cosa è stato tolto, in quanto tempo, e dai commenti. Quando un motivo è un'inferenza è scritto «probabilmente».

Ogni caso: **situazione → opzioni → scelta → criterio → quando diverso**. L'ultima voce è la più importante: dice quando la stessa logica porta a un risultato opposto. Il numero del criterio rimanda a `criteri-e-tensioni.md`.

## Indice
1. Metriche e onestà · 2. Azione principale e controllo · 3. Che cosa mostrare e quando · 4. Leggibilità e dispositivo · 5. Riscontro e interazione · 6. Parole · 7. Dati e aiuto · 8. Teorie nei commenti · 9. Contraddizioni aperte (esercizi di autocritica)

---

## 1. Metriche e onestà

**C01 · Da XP/livello/obiettivo giornaliero a «Imparate %» e «Accuratezza %»** (`dcbd2b8` → `e91b79d` → `40c65dd` → `792dbe1`) — crit. 1, 2, 5
- *Situazione.* L'utente aggiunge XP con 50 punti regalati («Endowed Progress»), livelli, un obiettivo di 5 con una casella regalata, barre che pulsano oltre l'80%. Restano in cima alla Home per un mese. Al ritorno dopo la pausa, la prima modifica è spostarli.
- *Opzioni.* Blocchi grandi con microcopy; due tile compatte; obiettivo infinito; metrica reale piccola sotto gli XP; metrica reale nelle tile in alto.
- *Scelta.* Due tile di pari peso con le metriche reali. XP e sfida **spostati** in fondo alle Statistiche, non cancellati. Tolti i testi motivazionali e la pulsazione.
- *Criterio.* Nel posto più visibile va ciò che misura l'obiettivo reale (quanto sai), non l'impegno o un punteggio inventato.
- *Quando diverso.* Se non esiste ancora una misura di competenza affidabile, un indicatore d'impegno *onesto* può stare in alto. Se l'obiettivo è un'abitudine (benessere, mantenere una lingua) la serie di giorni misura proprio quello. Con molti utenti, si testa invece di decidere sul proprio caso.

**C02 · Che cosa conta come «imparato»** (`b7740f2`, `c332a90`, `da2ea76`, `40c65dd`) — crit. 1
- *Situazione.* Due misure opposte: «Mastered» (4 ripetizioni riuscite: ferma a zero per giorni) e «copertura» (domande viste: sale anche sbagliando).
- *Scelta.* Imparata = ultima risposta con voto ≥ 3. Le viste ma sbagliate non contano.
- *Criterio.* Onesta (non sale con gli errori) **e** reattiva (si muove dal primo giorno): tra le soglie oneste, la più bassa.
- *Quando diverso.* Con poste alte e tendenza a illudersi, una soglia severa (ripassi a giorni di distanza) accanto a un numero reattivo. Con materiale piccolo la soglia severa è sostenibile. Con utenti esperti, mostrarle entrambe.

**C21 · «Primo Corpus»: un denominatore piccolo per una barra che si muove** (`0a7163d`) — crit. 1, 5, 8
- *Situazione.* Banco cresciuto a 606 domande: ogni domanda vale lo 0,16% e la barra non si muove più.
- *Scelta.* Selettore «Tutte (606) / Primo Corpus (60)»; le metriche si ricalcolano sul perimetro attivo, che è sempre scritto.
- *Criterio.* Se il progresso non si percepisce, si cambia il denominatore in modo dichiarato, mai la definizione. Il perimetro deve essere sempre visibile.
- *Quando diverso.* Se il nucleo non rappresenta l'esame, «60 su 60» dà falsa prontezza: sceglierlo per frequenza o mostrare anche il totale. Si generalizza: «le tue 5 pratiche aperte» invece di «tutte le 3000».

**C18 · Le domande saltate contano come errori** (`d256bd5`) — crit. 1, 9
- *Scelta.* Nuovo stato «omessa»: conta nel tasso d'errore ma ha una pillola sua, distinta dalle sbagliate.
- *Criterio.* Evitare non deve migliorare le statistiche. Cause diverse → contate insieme, mostrate separate.
- *Quando diverso.* In un esame con penalità per l'errore, saltare è una strategia corretta: va distinta e magari premiata. Il criterio vero è «rispecchia le regole dell'esame».

**C16 · Il voto continuo dalla telemetria** (`2bb4c40`, `c17ecd5`) — crit. 1, 8
- *Situazione.* Due risposte giuste non valgono uguale: una immediata, una trovata per esclusione.
- *Scelta.* Tempo atteso personale (lunghezza del testo × fattore di lettura adattivo), traiettoria dei clic, esitazione; tempi winsorizzati perché una distrazione non falsi la stima. In interfaccia si vede quasi niente: una freccia di tendenza, una pillola.
- *Criterio.* Distinguere il sapere dal sembrare di sapere. Complessità nel motore, semplicità nell'interfaccia.
- *Quando diverso.* Con lettori di schermo o difficoltà motorie la latenza misura l'accesso, non il sapere. Per problemi lunghi misura il calcolo. Se l'utente non vuole essere osservato, la telemetria va dichiarata.

**C10 · Obiettivo giornaliero: fisso → infinito → retrocesso** (`dcbd2b8`, `553cc99`, `792dbe1`) — crit. 8, 1
- *Situazione.* L'obiettivo di 5 si chiudeva subito e poi diceva «Completato!» per ore.
- *Scelta.* Prima soglie infinite, poi via dalla Home.
- *Criterio.* Un obiettivo non deve esaurirsi; e più in profondità, il volume non era la cosa da ottimizzare.
- *Quando diverso.* Se il problema è *iniziare*, un obiettivo piccolo che si chiude è perfetto. Se lo scopo è la regolarità, il volume è il comportamento voluto.

**C32 · Tempo di studio contato solo con lo schermo visibile** (`74a1a94`) — crit. 1
- *Scelta.* Blocchi di 10 s solo se la pagina è visibile; sta nelle Statistiche come informazione, non come obiettivo.
- *Quando diverso.* Se il tempo diventasse un obiettivo o un confronto, andrebbe contato solo nelle sessioni e con una soglia d'inattività.

**C33 · La serie di giorni: rimasta, mai sviluppata** — crit. 1 (per omissione)
- *Situazione.* Una fiamma con un numero, senza etichetta, che conta le aperture dell'app.
- *Criterio rivelato.* Ciò che non motiva non si toglie per forza, ma non ci si investe. È un «non decidere» che lascia un residuo.
- *Quando diverso.* In un'app per abitudini la serie è centrale e deve contare l'attività vera, non l'apertura.

## 2. Azione principale e controllo

**C04 · Un solo pulsante principale, e decide l'algoritmo** (`c332a90`) — crit. 2
- *Situazione.* Due pulsanti di pari peso (Learn / Exam) più un sottomenu di 5 modalità: ogni volta bisognava decidere come studiare, e per un profilo con poca costanza quella decisione è attrito.
- *Scelta.* «Inizia sessione» dominante con sottotitolo che dice che cosa succederà (poi con il conteggio); modalità manuali in tile secondarie.
- *Criterio.* Un'azione ovvia per schermata; il default lo sceglie il sistema; il controllo retrocede, non sparisce.
- *Quando diverso.* Esperti con piani propri → 2-3 percorsi di pari peso. Algoritmo non affidabile → delegargli la scelta è una promessa falsa. Fase che cambia (settimana prima dell'esame) → l'azione principale cambia con il contesto.

**C05 · Modalità «Smart» e il profilo dichiarato nel codice** (`c332a90`) — crit. 8, 2
- *Scelta.* Punteggio = priorità di ripasso + debolezza + un po' di casualità per mescolare gli argomenti. Commento: «Academic approach for ADHD & Low Conscientiousness… randomness (interleaving) to keep dopamine and engagement high».
- *Criterio.* Servire la persona reale, non lo studente ideale: la noia fa smettere.
- *Quando diverso.* Studente disciplinato con poco tempo → ordine deterministico per urgenza. Materiale con prerequisiti → mescolare solo ciò che è sbloccato. A ridosso dell'esame → consolidare invece di proporre il nuovo.

**C13 · Aiuto a scalini, mai un vicolo cieco** (`af4a56f`) — crit. 2, 7
- *Scelta.* Provare da soli → vedere l'argomento → passare alla scelta multipla. L'uscita è scritta come domanda e soluzione, piccola e grigia: disponibile ma non invitante.
- *Quando diverso.* In esame niente aiuti. Se l'uscita diventa la norma, l'esercizio è calibrato male: abbassare la difficoltà di partenza o proporre l'aiuto.

**C22 · Da «Category Master» a «Filtro Mirato»** (`bb2058c`) — crit. 4, 2
- *Situazione.* Il filtro passa da una dimensione a tre.
- *Scelta.* Una tendina sola con gruppi, e un nome che descrive la funzione.
- *Criterio.* Più potenza senza più controlli; il nome segue la funzione.
- *Quando diverso.* Se servono combinazioni (livello **e** argomento), servono filtri combinabili. Su desktop con molte opzioni, chip più rapide di una tendina.

**C30 · Installabile come app** (`9d14bc9`) — crit. 2
- *Criterio.* Ridurre l'attrito per iniziare. *Quando diverso.* Per un uso occasionale da desktop non serve.

## 3. Che cosa mostrare e quando

**C11 · Il grafico di attività: sei posizioni in due giorni** (`76bfbe5` … `74a1a94`) — crit. 6
- *Situazione.* Il bisogno di vedere la costanza c'era, ma in Home rubava spazio all'azione; una mappa di 28 giorni con 3 giorni di dati è quasi vuota.
- *Scelta.* Barre su 7 giorni con due serie, nelle Statistiche, chiamate «Costanza» (il valore) e non «Attività» (l'oggetto).
- *Criterio.* Sposta ciò che non serve all'azione successiva; la forma segue la quantità di dati disponibile oggi.
- *Quando diverso.* Con mesi di storico la mappa lunga diventa la forma migliore. Se la costanza è *il* problema, merita la Home.

**C14 · Spiegazione e categoria dopo la risposta giusta** (scaffold, `70dafa0`) — crit. 6
- *Criterio.* Il momento conta quanto il contenuto: prima della risposta la categoria è un indizio che falsa la misura, dopo rinforza.
- *Quando diverso.* Nel primo apprendimento l'argomento prima aiuta a costruire lo schema. Dopo 2-3 errori sulla stessa domanda, insistere senza spiegare diventa frustrazione.

**C17 · Dettaglio per singolo elemento, in una schermata separata** (`68f0458`, `4ce76c7`) — crit. 6, 1
- *Scelta.* Riepiloghi in dashboard; lista completa a richiesta, ordinata con i peggiori in cima; «Mai vista» invece di 0%.
- *Criterio.* Tutto, ma a strati; in cima ciò su cui si può agire; un dato mancante non è uno zero.
- *Quando diverso.* Per chi si agita vedendo gli errori, partire dai progressi. Con decine di migliaia di elementi, aggregare prima.

**C19 · Il radar solo quando ha senso, alimentato dalla pratica** (`a0fb74f`) — crit. 6, 1
- *Scelta.* Radar dagli argomenti di tutte le risposte (non solo dagli esami, che sono rari), mostrato solo con almeno 3 assi; lo stato vuoto dice che cosa fare.
- *Criterio.* Un grafico appare quando la sua forma è valida e si riempie con l'uso normale.
- *Quando diverso.* Oltre 8-10 argomenti il radar è illeggibile: barre ordinate.

**C20 · Barre impilate «Imparate / Da imparare»** (`ccb753e`) — crit. 6
- *Criterio.* Mostrare quanto resta accanto a quanto è fatto.
- *Quando diverso.* Se gli argomenti pesano nell'esame in modo diverso dal loro numero nel banco, normalizzare per peso d'esame.

## 4. Leggibilità e dispositivo

**C06 · Stare in uno schermo: rimpicciolire, poi tagliare, poi ingrandire** (`5c9cab7`, `e91b79d`, `72b0a14`) — crit. 3
- *Situazione.* Obiettivo «niente scroll» su telefono. Primo tentativo: testo fino a 7 px e spiegazione troncata a due righe. Annullato in 15 minuti.
- *Scelta.* Testo più grande; intestazione e barra d'azione fisse; il centro scorre.
- *Criterio.* Il vincolo «una schermata» vale per la struttura (azione sempre raggiungibile), non per il contenuto.
- *Quando diverso.* Dashboard per analisti: la densità è il servizio. Se due cose devono restare visibili insieme (timer e domanda), si taglia l'accessorio, non il corpo del testo.

**C25 · Il carattere scelto per leggibilità, cambiato in 23 minuti** (`4dfa530` → `6ea4e84`) — crit. 3
- *Criterio.* A pesi alti e corpi piccoli conta la distinzione tra lettere; la personalità arriva già da altro.
- *Quando diverso.* Nei titoli grandi o in un marchio la personalità può valere di più; per testi lunghi, un carattere da lettura a pesi normali.

**C26 · Telefono a tutto schermo, desktop come dispositivo incorniciato** (`5c9cab7` … `4dfa530`) — crit. 3, 2
- *Criterio.* Si progetta per il dispositivo reale (qui il telefono); altrove la stessa esperienza, incorniciata.
- *Quando diverso.* Se il desktop è l'uso principale (statistiche, preparazione di materiale) la cornice spreca spazio: layout largo.

## 5. Riscontro e interazione

**C08 · L'errore: neutro, breve, con un passo successivo** (`e91b79d`, `6ea4e84`) — crit. 5
- *Situazione.* «Risposta errata. Riprova, puoi farcela!» a ogni errore: probabilmente paternalistico, rumore dal decimo in poi.
- *Scelta.* Una parola, un pulsante per riprovare, un suono basso e morbido («instructive, not discouraging»).
- *Criterio.* L'errore è un'informazione, non un giudizio né un'occasione per fare il tifo.
- *Quando diverso.* Bambini o principianti fragili: un incoraggiamento dopo errori *di fila*. Ambiti critici: l'errore va reso evidente e spiegato. In esame: nessun riscontro.

**C23 · Riscontro multisensoriale proporzionato a come sta andando adesso** (`6ea4e84`) — crit. 5
- *Scelta.* Suono che sale di tono con le giuste di fila, coriandoli a tre intensità, vibrazioni distinte, pulsante per silenziare. L'errore azzera la serie senza punire.
- *Criterio.* Ricompensa immediata, che cresce con la prestazione vera e dura una sessione. Il testo resta sobrio, la festa passa per i sensi.
- *Quando diverso.* In biblioteca: muto di default. Con utenti sovrastimolati: intensità regolabile e movimento ridotto. In uno strumento di lavoro, la festa a ogni azione svaluta il compito.

**C24 · Un colore, un significato** (`4dfa530`) — crit. 5
- *Situazione.* L'hover aveva lo stesso colore della selezione.
- *Scelta.* Hover neutro; ciò che si preme sembra premibile e reagisce.
- *Quando diverso.* Su desktop denso l'hover colorato aiuta a orientarsi. Con più di 5 significati, il colore non basta: forma e icona.

**C12 · Dall'autodisciplina al recupero verificato** (`af4a56f`) — crit. 7
- *Situazione.* «Rivela opzioni» con sotto «Pensa alla risposta prima di rivelare…»: probabilmente l'utente premeva subito.
- *Scelta.* Banca di parole con distrattori plausibili presi dalle opzioni sbagliate della domanda stessa.
- *Criterio.* Se un comportamento conta, l'interfaccia lo rende necessario e misurabile.
- *Quando diverso.* Risposte lunghe o aperte: autovalutazione dopo la soluzione, accettando la fiducia; oppure risposta numerica verificabile.

**C15 · La sicurezza dichiarata con lo stesso tocco dell'invio** (scaffold, `2bb4c40`) — crit. 7
- *Scelta.* Tre pulsanti (Indovino / Incerto / Sicuro) che inviano e dichiarano insieme. «Indovino» in prima persona: tirare a indovinare diventa dichiarabile, non una colpa.
- *Quando diverso.* Se premono sempre lo stesso per abitudine, il segnale non vale: chiederlo ogni tanto o ricavarlo dalla telemetria. In esame non si chiede.

**C31 · La simulazione: realismo prima del riscontro** (scaffold, `d256bd5`) — crit. 9
- *Criterio.* Regole dell'esame vero (tempo, soglia, niente riscontro, domande diverse tra loro); revisione dopo, solo su ciò che non è andato.
- *Quando diverso.* Se l'esame vero ha un altro formato, le costanti *sono* il design. Con ansia da esame, una versione con timer nascosto è un gradino intermedio.

## 6. Parole

**C03 · Letterale batte elegante** (`da2ea76`, `40c65dd`, `4dfa530` → `6ea4e84`) — crit. 4
- *Situazione.* «Syllabus coperto» → «Maestria» → «Domande imparate» → «Maestria / Precisione» → di nuovo «Domande imparate / Accuratezza», **23 minuti** dopo.
- *Criterio.* Il nome dice l'oggetto contato, nelle parole di chi legge.
- *Quando diverso.* Per un pubblico tecnico il termine tecnico è letterale. Se due misure vanno distinte, un nome univoco batte uno semplice ma ambiguo. Test: chi legge sa che cosa viene contato senza spiegazione?

**C07 · Da «perché funziona» a «che cosa fa»** (`5c9cab7`, `e91b79d`) — crit. 4, 3
- *Esempi.* «Nasconde le opzioni: forza il cervello a recuperare l'informazione da zero.» → «Nasconde le opzioni.»; «Timer aggressivo (10s) per costruire automaticità e fluidità.» → «Timer aggressivo (10s).»
- *Criterio.* Il meccanismo, non la promessa. Se non sta, si tagliano parole, non il corpo del testo.
- *Quando diverso.* Un utente nuovo che non conosce il metodo ha bisogno di una riga di beneficio per scegliere, o di sostituire il gergo con il risultato («Ripassa quando stai per dimenticare»). In onboarding e landing il perché *è* il contenuto.

**C09 · Via la microcopy da coach** (`dcbd2b8` → `e91b79d`, 20 minuti) — crit. 4, 5
- *Tolte.* «Ci sei quasi!», «Hai 1 punto bonus di benvenuto!», «Completato! Ottimo lavoro!», «Continua ad esercitarti!».
- *Test.* Se cancello la frase, si perde un'informazione o un'azione?
- *Quando diverso.* Chi ha bisogno di calore o un marchio caldo possono volerne un po', legata a eventi veri. Un messaggio che riduce davvero l'abbandono porta informazione («mancano 2 domande a chiudere la sessione»).

**C27 · Italiano per l'interfaccia, inglese per il contenuto (a metà)** (`6ea4e84`, `c332a90`) — crit. 4
- *Situazione.* Tradotte le schermate più usate; l'esame è rimasto in inglese.
- *Criterio.* L'interfaccia parla la lingua di chi la usa; contenuto e termini consolidati restano nella loro.
- *Quando diverso.* In un'app per una lingua ad alto livello, l'interfaccia nella lingua da imparare è esercizio. Per un pubblico internazionale serve la localizzazione.

**C28 (parole) · Messaggi d'errore che nominano la causa e il rimedio** (`2d3aed1`) — «Se stai usando Brave, disattiva gli "Scudi" per questo sito…» invece di un generico «errore».

## 7. Dati e aiuto

**C28 · Aiuto solo dove serve e strumenti di diagnosi** (`5c9cab7`, `6a061a9`, `646912e`) — crit. 10
- *Scelta.* Il suggerimento sul login appare solo nel contesto in cui il problema si verifica (dentro un'anteprima); una schermata di diagnosi per capire perché qualcosa non va.
- *Quando diverso.* Per utenti non tecnici, la diagnosi va nascosta dietro un gesto o un'opzione. Qui è visibile perché utente e sviluppatore coincidono.

**C29 · I dati dell'utente sono la ricompensa: non perderli mai** (scaffold, `68f0458`, `f314d3c`) — crit. 10, 1
- *Criterio.* Se la motivazione viene dai propri dati, perderli è perdere la ricompensa: salvataggio locale, cloud, esportazione; unione campo per campo; anche il messaggio di crash rassicura sui dati.
- *Quando diverso.* Per un quiz usa e getta il cloud è un costo senza beneficio. Con dati sensibili l'esportazione in chiaro va ripensata.

## 8. Teorie nei commenti: che cosa è sopravvissuto e perché

| Teoria nel codice | Esito | Perché |
|---|---|---|
| «Endowed Progress: 50 XP head start», «1 free progress step… just for opening the app» | tolta dalla Home | manipola la percezione del progresso; premia l'apertura, non lo studio |
| «Goal Gradient: make the bar pulse when near the next level» | tolta | dettaglio al servizio di una metrica caduta |
| «Academic approach for ADHD & Low Conscientiousness… interleaving» | tenuta | adatta il sistema alla persona reale |
| «Winsorize… so long distractions don't skew…», «EMA» | tenuta e raffinata | fa misurare meglio |
| «Second-guessing recovery» contro «Elimination / Guessing» | tenuta | distingue il come della risposta |
| «Addictive… Duolingo-style chime», «Vibrant confetti» | tenuta | rinforzo immediato legato alla prestazione vera |
| «Soft, gentle thud… instructive, not discouraging» | tenuta | l'errore è informazione |
| «simplistic normalization for UI» | tenuta | autocritica: il motore è preciso, la vista semplifica di proposito |
| «Minimum 10 to keep bar sizes reasonable when low» | rimossa col grafico | attenzione a come appaiono i dati quando sono pochi |

Regola che ne esce: una teoria nominata giustifica un tentativo; il verdetto viene dall'uso. Sopravvivono le teorie che misurano meglio o adattano meglio; cadono quelle che servono a far *sembrare* il progresso.

## 9. Contraddizioni aperte (esercizi di autocritica)

Il codice attuale viola i criteri dell'utente dove non sono stati applicati di proposito: zone poco usate, aggiunte sotto pressione, residui. Servono come esercizio: «applica il criterio e trova dove l'app non lo rispetta». Il rimedio indicato è quello coerente con i criteri, non l'unico possibile.

| # | Contraddizione | Criterio violato | Rimedio coerente |
|---|---|---|---|
| F1 | Un «Indovino» giusto e veloce vale 5 − 2 = 3 e conta come imparata (prima la penalità era 2,5 proprio per evitarlo) | 1 | penalità > 2 o non contare «Indovino» tra le imparate |
| F2 | Dopo l'errore la risposta giusta è già colorata, poi «Riprova!»: il nuovo tentativo è una copia, e viene festeggiato e contato due volte nell'attività | 7, 1, 5 | non mostrare la giusta prima del nuovo tentativo, oppure premiare meno e non contarlo |
| F3 | Serie di giorni aggiornata all'apertura; minuti contati anche fermi sul menu; la simulazione aggiunge sempre 30 | 1 | contare solo l'attività vera |
| F4 | Esame in inglese, «Next» e «Riprova» sullo stesso pulsante, «frasi»/«domande», «Confidenza» per due concetti diversi | 4 | una lingua per schermata, un termine per concetto |
| F5 | Il perimetro scelto vale in Home ma non nelle Statistiche: stessa etichetta, due numeri | 1 | il perimetro vale ovunque, sempre dichiarato |
| F6 | Tile di sola lettura con il bordo dei pulsanti; lo stesso numero mostrato due volte | 5, 6 | premibile solo ciò che si preme; un numero, un posto |
| F7 | Diagnostica e messaggi tecnici in Home | 2 | accettabile per utente-sviluppatore; per altri, nascosti |
| F8 | Residui: XP ancora calcolati, un grafico non importato ma aggiornato, icone importate e inutilizzate | processo «sposta» | dopo lo spostamento, decidere |
| F9 | Conteggi scritti a mano in più file anche se esistono le costanti | 1, 8 | ogni numero dai dati |
| F10 | Zoom bloccato e contrasti bassi (bianco su giallo 1,55:1) in un'app che ha messo la leggibilità al primo posto | 3 | estendere il criterio a zoom e contrasto |
| F11 | Suono attivo di default, vibrazione legata all'audio, movimento ridotto rispettato solo in parte | 5 | intensità regolabile, canali separati |
| F12 | La consegna dell'esame è un testo piccolo senza conferma; l'uscita perde tutto senza chiedere | 2 | l'azione irreversibile è la più protetta |
| F13 | «FAILED» rosso, maiuscolo, gigante: l'unico testo duro in un'app neutra sugli errori | 5 | esito con il punteggio e il passo successivo |
| F14 | Grafici con colori chiari fissi nel tema scuro | coerenza | ogni superficie dal tema |
