---
name: metodo-di-studio
description: Il metodo di studio personale dell'utente, ricavato dall'app con cui ha superato l'OFA di Inglese del Politecnico di Milano (sessioni brevi, partenza con un tocco, ripetizione dilazionata "onesta", feedback immediato, simulazioni più severe dell'esame vero) e adattato a qualsiasi esame. Usa questa skill ogni volta che l'utente deve preparare un esame o un test, qualunque sia il formato — esami universitari di ingegneria (Analisi, Fisica, Geometria, Informatica…), TOLC, test d'ingresso, OFA, esami orali o di teoria, certificazioni — e anche quando chiede un piano di studio, di essere interrogato in chat, flashcard, esercizi, simulazioni d'esame o un'app/sito per studiare. Usala anche se non nomina il "metodo": basta che si parli di studiare o prepararsi per una prova.
---

# Il mio metodo di studio

Questa skill descrive **come studia l'utente e cosa funziona con lui**, non un formato da copiare. È stata ricavata dall'app *OFA Polimi Prep* (repo `raffaele-ando/OfaEnglish`), che l'utente ha modificato molte volte finché non ha funzionato perfettamente per lui e con cui ha superato l'OFA di Inglese studiando solo da lì.

L'OFA era un test a risposta multipla di lingua: 30 domande in 15 minuti. Un esame di Analisi, un orale di Fisica o un esame di programmazione sono tutt'altra cosa. Il tuo lavoro è **tenere i principi e cambiare la forma**: ogni volta chiediti "che aspetto ha questo principio *per questo* esame?".

---

## 1. Profilo dello studente

- **L'attenzione cala con la monotonia e la costanza è difficile.** Nel codice dell'app l'utente ha descritto la modalità principale come pensata per *"ADHD & Low Conscientiousness"*. Da qui vengono quasi tutte le scelte: attrito minimo, sessioni brevi, varietà, gratificazione immediata.
- **Studia soprattutto dal telefono**, nei ritagli di tempo. Molte modifiche sono servite solo a far funzionare bene il layout su mobile. Vuole il tema scuro e i dati sincronizzati tra i dispositivi.
- **Gli piace capire il perché e vedere i dati.** Ha voluto statistiche dettagliate: radar per argomento, calendario delle ultime 4 settimane, tempo studiato, errori ordinati per frequenza, velocità di risposta. Nei commenti del codice cita spesso l'approccio scientifico (SM-2, interleaving, *goal gradient*).
- **Lingua**: italiano. Parlagli in italiano, in modo diretto e concreto.

## 2. Cosa funziona con lui (e perché)

Ogni principio ha una ragione. Quando adatti il metodo a un esame nuovo, mantieni la ragione anche se la forma cambia.

1. **Si parte con un tocco solo.** Il pulsante principale "Inizia Sessione" avvia subito una sessione mista, senza dover scegliere niente. *Perché:* ogni decisione prima di cominciare è un'occasione per non cominciare. Le modalità personalizzate esistono, ma stanno un livello più sotto.
2. **Sessioni brevi e con un tempo.** 10 domande per sessione, 30 secondi a domanda, e una modalità *Blitz* da 10 secondi. *Perché:* un traguardo vicino e un po' di urgenza tengono accesa l'attenzione. Per esercizi lunghi la sessione è "un esercizio-tipo" o un blocco di 20–25 minuti, non 10 esercizi interi.
3. **Il feedback arriva subito e si sente.** Dopo ogni risposta: giusto o sbagliato, la spiegazione, e l'argomento e la categoria della domanda. Poi suoni che salgono con la serie di risposte giuste, coriandoli e vibrazione. *Perché:* la ricompensa immediata tiene agganciati, e sapere l'argomento aiuta a capire *dove* si sta sbagliando.
4. **Dopo un errore si riprova finché non è giusta.** L'opzione sbagliata viene disattivata e si ritenta. *Perché:* ogni domanda si chiude con la versione giusta in testa, non con quella sbagliata.
5. **Ripetizione dilazionata, ma onesta.** È SM-2, con un voto da 0 a 5 che **non decide solo lui**: lo calcola il tempo di risposta rispetto a quello atteso, se ha cambiato opzione, quanto ha esitato. Poi ci sono i pulsanti **Indovino / Incerto / Sicuro**. *Perché:* una risposta giusta ma tirata a caso non è "imparata" e deve tornare presto.
6. **Varietà: argomenti mescolati e un po' di casualità.** La modalità Smart combina ripetizione dilazionata, punti deboli e rumore casuale. *Perché:* la novità tiene alto l'interesse, e mescolare gli argomenti allena a riconoscere il tipo di problema, che è esattamente quello che serve all'esame.
7. **Richiamo attivo.** La modalità *Active Recall* nasconde le opzioni: la risposta va ricostruita. Il suggerimento dice solo l'**argomento**, mai la soluzione. *Perché:* produrre una risposta fissa la memoria molto più che riconoscerla.
8. **Si va dritti sui punti deboli.** C'è una modalità *Weakness*, le statistiche sono ordinate per tasso di errore e il radar mostra gli argomenti più deboli. *Perché:* il tempo è poco e va speso dove si perdono punti.
9. **Prima il nucleo, poi l'ampiezza.** Il "Primo Corpus" (le prime 60 domande, le più vicine all'esame vero) si studia per primo; il resto (606 domande) si aggiunge per argomento. *Perché:* conviene arrivare subito alla soglia con il materiale che rende di più.
10. **La simulazione è più severa dell'esame vero.** Stesso formato, stesso tempo, nessun feedback, navigazione libera tra le domande, ma soglia **25/30 invece di 24/30**. Le domande lasciate in bianco si contano a parte. *Perché:* se passi la simulazione, all'esame hai margine. Per ogni esame va ricostruito **esattamente** il formato reale (punteggio, penalità, tempo, soglia) e poi reso un po' più duro.
11. **I progressi che vede sono veri.** Percentuale di padronanza, accuratezza, giorni consecutivi, calendario e tempo studiato. *Perché:* vuole vedere numeri che misurano l'apprendimento vero (vedi §3).
12. **Tutto viene misurato.** Tempi, cambi di risposta, domande omesse, storico degli esami. *Perché:* lui rilegge i dati per capire come migliorare, e l'algoritmo li usa per scegliere cosa riproporre.

## 3. Cosa è stato provato e tolto

Dalla storia delle modifiche all'app. Prima di reintrodurre una di queste cose, chiediti se serve davvero.

- **XP e livelli, con 50 XP regalati all'inizio** (*endowed progress*): aggiunti, poi **rimossi**.
- **Obiettivo giornaliero fisso** (5 domande al giorno), poi sostituito da **traguardi a fasi senza fine**: **rimossi entrambi**. Al loro posto sono rimasti padronanza e accuratezza vere.
- In sintesi: la **gamification finta**, cioè punti, quote e ricompense che non misurano l'apprendimento, non ha retto. È rimasta la **gratificazione legata a qualcosa di vero**: la serie di risposte giuste nella sessione, i giorni consecutivi, i coriandoli per un esame superato.
- **Un sistema di ripasso troppo grezzo** (le caselle di Leitner, citate nei commenti come sistema precedente) e **la sola autovalutazione** sono stati superati dal voto automatico calcolato su tempo e comportamento.

## 4. Come lavorare quando arriva un esame nuovo

### Passo 1: capire l'esame vero (non supporre che sia come l'OFA)
Ricostruisci il formato con precisione. Se non lo sai, chiedilo o cercalo (bando, pagina del corso, regolamento del docente):
- tipo di prova: risposta multipla, esercizi scritti, domande aperte, orale, codice, oppure un mix;
- durata, numero di quesiti, punteggio e **penalità**, soglia per passare, eventuali parziali o compitini;
- data dell'esame, quindi quanti giorni restano;
- materiale disponibile: **temi d'esame passati** (la fonte più preziosa, perché diventano il "nucleo"), slide, appunti, eserciziari, programma del corso.

Chiedi all'utente di caricare i materiali che ha. Non inventare il formato di un esame universitario specifico: se non lo trovi, dillo e chiedi.

### Passo 2: scegliere l'adattamento giusto
Leggi **`references/adattamento-per-esame.md`**. Lì trovi, per ogni tipo di esame, come diventano concretamente i 12 principi: test a risposta multipla, TOLC con penalità, esami di ingegneria a esercizi, teoria e orali, programmazione, materie mnemoniche.

### Passo 3: scegliere cosa produrre
Parti dalla cosa più piccola che gli permette di **cominciare a studiare oggi**, poi amplia. Le forme possibili:
- **Interrogazione in chat** (§5): la più rapida, non serve costruire niente.
- **Piano di studio** fino alla data dell'esame: nucleo prima, blocchi brevi, simulazioni a intervalli, ripassi dilazionati.
- **Materiale di studio**: banco di domande, esercizi con aiuti progressivi, flashcard, schede dei metodi.
- **App o sito** come quello dell'OFA ma adattato: leggi **`references/app-blueprint.md`** e riusa il codice già collaudato in `assets/codice-ofa/`.

Se non è chiaro cosa vuole, proponi una sola opzione consigliata e parti. Troppe scelte sono proprio l'attrito da evitare (principio 1).

### Passo 4: costruire prima il nucleo
Individua il 20% del materiale che dà l'80% dei punti: gli esercizi-tipo che tornano più spesso nei temi passati, le domande ricorrenti all'orale, gli argomenti con più peso. Si comincia da quello, il resto si aggiunge a blocchi per argomento.

### Passo 5: controllare la qualità
Le domande e gli esercizi devono essere giusti e non ambigui. Segui **`references/banco-domande.md`**. Se il materiale è un banco di domande a risposta multipla in JSON o TS, lancia `node scripts/audit_bank.cjs <file>` per i controlli automatici (duplicati, sbilanciamento della posizione della risposta giusta, indizi dalla lunghezza, metadati mancanti). Poi rileggi domanda per domanda.

## 5. Modalità tutor in chat

Quando lo interroghi direttamente in chat, applica gli stessi principi:
- **Parti subito** con la prima domanda. Un paio di righe di contesto al massimo, niente menu di opzioni.
- **Blocchi da circa 10 domande o esercizi brevi**, con un contatore ("3/10"). Alla fine, un riepilogo di una riga ("7/10 al primo colpo; da ripassare: integrali per parti").
- **Una domanda alla volta**, aspettando la sua risposta. Invitalo a scrivere anche **I / In / S** (Indovino / Incerto / Sicuro): se una risposta è giusta ma con "I", conta come da ripassare.
- **Dopo ogni risposta**: giusto o sbagliato, spiegazione breve (il perché, e perché l'alternativa tipica è sbagliata), argomento. Se è sbagliata, dagli un secondo tentativo o una variante vicina **prima** di andare avanti (principio 4).
- **Tieni una lista delle domande sbagliate e di quelle incerte** e riproponile più avanti nella stessa sessione, in forma leggermente diversa.
- **Mescola gli argomenti** dentro il blocco, dando più spazio ai punti deboli emersi.
- **Aiuti a scalini** negli esercizi: argomento → metodo → primo passaggio → soluzione. Mai la soluzione al primo aiuto.
- **Tono**: energico e breve, con un po' di entusiasmo sulle serie di risposte giuste ("4 di fila 🔥"), senza prediche.
- Se ha la memoria o un file di progressi, aggiorna i punti deboli alla fine della sessione.

## 6. Cose da ricordare sempre

- **Il metodo si adatta, non si copia.** Un esercizio di Analisi non diventa una domanda a risposta multipla solo perché l'OFA era così. Si trasforma in *riconoscere il tipo di esercizio*, *passaggi con aiuti*, *varianti numeriche*, *simulazione del tema*.
- **Formato e soglia dell'esame reale si ricostruiscono con esattezza**, poi la simulazione si fa un po' più severa.
- **Meno attrito possibile, sessioni brevi, ricompensa immediata e vera.**
- **Tutto ciò che è giusto per caso torna indietro.**
- **Prima il nucleo, poi l'ampiezza.**
