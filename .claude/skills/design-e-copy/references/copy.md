# Copy dell'interfaccia

Come scrivere i testi di un'interfaccia per l'utente: voce, regole, glossario, frasi pronte. Viene dai testi di *OFA Polimi Prep* (i migliori tenuti, gli avanzi inglesi e le incoerenze corretti). Per controllare un progetto: `node scripts/controlla_copy.cjs <cartella>`.

## Indice
1. Cosa dice la storia dell'app · 2. Voce e tono · 3. Lunghezza · 4. Punteggiatura, esclamazioni, emoji · 5. Maiuscole · 6. Numeri · 7. Glossario usa / non usare · 8. Frasi pronte per i momenti comuni · 9. Avanzi inglesi dell'app → italiano · 10. Da evitare · 11. Formula per i messaggi di errore

---

## 1. Cosa dice la storia dell'app

Ogni revisione dei testi li ha **accorciati**, mai allungati:
- `e91b79d`: «Risposta errata.» → **«Errata.»**; «Riprova, puoi farcela!» → **«Riprova!»**; tolti «Ci sei quasi!», «Hai 1 punto bonus di benvenuto!», «Completato! Ottimo lavoro!», «…Continua ad esercitarti!»; nomi e descrizioni delle modalità ridotti a 2-4 parole.
- `6ea4e84`: «Maestria» e «Precisione» provati e **tolti lo stesso giorno**, tornati a **«Domande imparate»** e **«Accuratezza»**: nomi letterali, non eleganti. Nello stesso commit «Session Complete! / Continue» tradotti in italiano.
- `bb2058c`: «Category Master» → **«Filtro mirato»**: nome descrittivo in italiano.
- XP, livello e «Sfida quotidiana» sono spariti dalla home (`792dbe1`), con tutti i loro incoraggiamenti.

Il gusto che ne viene fuori: **testi brevi, letterali, in italiano; festa vera sui successi, fatti asciutti sugli errori; niente prediche né tifo.** L'unica parte mai sistemata è la simulazione, rimasta tutta in inglese: qui sotto trovi la versione corretta.

## 2. Voce e tono

- **Italiano, "tu", imperativo diretto**: «Inizia», «Riprova», «Tocca le parole», «Focalizzati sugli errori». Mai «Lei», «voi», e l'app non dice «noi» («Stiamo caricando…» → «Caricamento…»).
- **L'inglese resta solo nei contenuti** che sono inglesi per natura (le domande di un esame d'inglese, i nomi degli argomenti di grammatica come *Present perfect*, un termine tecnico senza equivalente usato dall'utente). L'interfaccia intorno è tutta italiana: una schermata, una lingua.
- **Tono per momento**:

| Momento | Tono | Esempio |
|---|---|---|
| Successo | festoso e crescente | «Ottimo!» → «Fantastico! 🔥 3 di fila!» |
| Errore dell'utente | neutro, breve, operativo; mai colpa | «Errata.» + pulsante «Riprova» |
| Dati | nomi semplici, niente aggettivi | «Esami completati», «Miglior punteggio», «Mai vista» |
| Aiuto | domanda + soluzione | «Troppo difficile? Usa le opzioni multiple» |
| Guasto | rassicurante + cosa fare | «I tuoi progressi sono al sicuro. Ricarica l'app.» |

- **Onestà**: l'autovalutazione è nella voce dello studente e non vergogna nessuno: **Indovino / Incerto / Sicuro**. Tienila così.
- Il feedback che cresce con la serie dentro la sessione è parte del metodo: regole in `metodo-di-studio` §5.

## 3. Lunghezza

| Elemento | Misura |
|---|---|
| Etichetta, voce di menu, titolo di tile | 1-2 parole |
| Pulsante | 1-2 parole, verbo all'imperativo («Inizia», «Consegna», «Esporta progressi») |
| Descrizione sotto un titolo | 2-5 parole |
| Titolo di feedback | 1-3 parole |
| Frase d'aiuto o di errore | una idea, ≤ 15 parole; al massimo due frasi |
| Messaggio tecnico lungo | non in faccia all'utente: una riga + «Dettagli» richiudibile |

Test: se togli una parola e il senso resta, toglila.

## 4. Punteggiatura, esclamazioni, emoji

- **Punto esclamativo solo per un successo vero**, uno per messaggio: «Ottimo!», «Sessione completata!», «10 su 10 al primo tentativo!». Mai sugli errori, mai «!!».
- Frasi complete con il punto; **etichette e frammenti senza punto** («Focalizzati sugli errori», non «…errori.»). Il titolo di feedback negativo è l'eccezione voluta: «Errata.» (il punto lo rende piatto, di proposito).
- Puntini: il carattere **«…»**, non tre punti. Solo per azioni in corso («Caricamento…») e segnaposto («Tocca le parole per formare la frase…»).
- Separatore tra dati: « · » («Grammatica · B1 · Present perfect»). Due punti per etichetta + valore («La tua risposta: …»).
- **Emoji**: solo 🔥 per la serie di giuste dentro la sessione (e ✅ ⚠️ nelle risposte in chat, come in `metodo-di-studio` §9). Mai in titoli, pulsanti, errori. Nell'interfaccia preferisci un'icona; l'emoji serve dove un'icona non entra (dentro `<option>`).
- Virgolette italiane « » nei testi; apostrofo tipografico ’ se il font lo rende bene.

## 5. Maiuscole

**Scelta: maiuscola solo all'inizio (sentence case), sempre.** Titoli, pulsanti, etichette, voci di menu: «Inizia sessione», «Domande imparate», «Errori comuni», «Simulazione d'esame». Maiuscole interne solo per nomi propri e sigle (OFA, Polimi, Google, A1-B2).

Perché: il *Title Case* («Sessione Completata!», «Vedi Dettaglio Frasi») è un'abitudine inglese che in italiano sembra una traduzione; l'app lo mescolava con il sentence case («Esami completati», «Peggiori prima»).

Il maiuscolo spaziato di pulsanti ed etichette si fa **solo con CSS** (`uppercase`): nel sorgente la stringa resta «Inizia», non «INIZIA» (lo screen reader legge il sorgente, e alcuni leggono il maiuscolo lettera per lettera).

## 6. Numeri

- **Decimali con la virgola**: «4,38», «2,5 s». Usa `Intl.NumberFormat('it-IT')`.
- **Percentuale attaccata**: «72%» (scelta per compattezza, come nell'app). Intervalli con il trattino lungo: «40–70%».
- **Migliaia col punto** da 10.000 in su («10.000»; `Intl` in italiano non raggruppa 4 cifre: «1000» va bene).
- **Unità con lo spazio**: «30 s», «15 min», «10 domande». Timer come orologio: «4:05», con `tabular-nums`.
- **Punteggi**: «22/30» nei dati compatti, «22 su 30» nelle frasi.
- **Serie**: «3 di fila» (non «3x», non «streak 3»).
- **Plurali sempre corretti**: «1 giusta / 2 giuste», «1 cambio / 2 cambi», «1 minuto».
- **Mai conteggi scritti a mano** nelle stringhe («(606)», «/30», «25/30»): calcolali dai dati (`domande.length`, `PUNTEGGIO_MINIMO`). Nell'app il «(606)» era copiato in più di 10 punti e il Primo corpus in 6.

```ts
const n = new Intl.NumberFormat('it-IT', { maximumFractionDigits: 1 });
const plurale = (k: number, uno: string, molti: string) => `${k} ${k === 1 ? uno : molti}`;
plurale(3, 'giusta', 'giuste');      // "3 giuste"
`${n.format(72.4)}%`;                // "72,4%"
```

## 7. Glossario: usa / non usare

**Una parola per concetto, sempre la stessa in tutta l'app** (niente «frasi» in un posto e «domande» in un altro). Se il progetto richiede un termine diverso, sceglilo una volta e aggiornalo ovunque.

| Concetto | Usa | Non usare | Perché |
|---|---|---|---|
| Elemento di studio | **domanda** (o l'unità dell'esame: esercizio, definizione) | frase, quesito, item, question, alternati tra loro | l'app mischiava frasi/domande/questions |
| Elementi imparati | **Imparate**, **Domande imparate** (in % con barra) | Maestria, Mastery, Mastered, Syllabus coperto, Copertura, Padronanza come etichetta | tutti provati e scartati; «copertura» cresce anche sbagliando |
| Non ancora imparate | **Da imparare** | Da studiare, Mancanti | |
| Esito del primo tentativo | **Accuratezza** | Precisione, Accuracy, Tasso di successo | Precisione provata e tolta (`6ea4e84`) |
| Forza del ricordo di una domanda | **Confidenza** (+ freccia di tendenza) | Sicurezza, Padronanza | non va confusa con l'autovalutazione |
| Autovalutazione alla conferma | **Indovino / Incerto / Sicuro** | Basso/Medio/Alto, Facile/Difficile | parole dello studente, invariate dal primo giorno |
| Blocco di domande | **sessione** | lezione, round, livello, partita | |
| Giuste di fila nella sessione | **N di fila** + 🔥 | streak, combo, serie di giorni | è un feedback, non un contatore di giorni |
| Esame di prova | **simulazione**, «Simulazione d'esame» | Mock exam, esame, test, prova (per lo stesso concetto) | l'app ne usava quattro |
| Esito simulazione | **Superata / Non superata** | PASSED/FAILED, Promosso/Bocciato, Fallito | |
| Quota superate | **Simulazioni superate** (%) | Pass rate, Tasso di promozione | |
| Punteggio massimo | **Miglior punteggio** (una volta sola) | Record + Miglior punteggio insieme, Best score, Punteggio max | l'app mostrava lo stesso numero due volte |
| Profilo per argomento | **Profilo per argomento** | Skill profile, Radar, Mastery | |
| Non risposte | **omesse** | saltate, non date, vuote (alternati) | |
| Argomento / categoria / livello | **argomento**, **categoria**, **livello** (tre livelli fissi) | tema, sezione, topic | |
| Errori ricorrenti | **Errori comuni** | Errori frequenti, Weakness | |
| Attività nei giorni | **Costanza (ultimi 7 giorni)** | Consistency, Attività | |
| Aiuto | **Suggerimento** | Hint, Aiutino, Indizio | |
| Insieme piccolo iniziale | un nome e basta (es. **Primo corpus**) | Primo corpus iniziale, Nucleo, Base, alternati | |
| Tutto il materiale | **Tutte le domande** | Tutto il database, Tutte le frasi | |
| Modalità | **Standard, Punti deboli, Blitz, Richiamo attivo, Filtro mirato** | Weakness, Active Recall (se esiste l'italiano), Category Master, Modalità Custom | Blitz resta: breve e già italiano |
| Continuare | **Continua** | Next, Avanti (sullo stesso pulsante) | |
| Consegnare la simulazione | **Consegna** | Submit, Invia, Termina | |
| Accesso | **Accedi / Esci** | Sign in, Login, Logout, Log out | |
| Stato cloud | **Sincronizzato** | Synced | |
| Import/export | **Importa progressi / Esporta progressi** | Import, Export, Backup | |
| Statistiche | **Statistiche** | Stats, Analytics, Dashboard | |
| Impostazioni | **Impostazioni** | Settings, Preferenze | |

**Gamification finta**: XP, punti, livello, «Liv.», badge, trofei, sfida quotidiana, obiettivo giornaliero, serie di giorni consecutivi. **Non usarli** a meno che l'utente li chieda esplicitamente: la motivazione viene da quanto sa (vedi `metodo-di-studio` §4).

## 8. Frasi pronte per i momenti comuni

Le parti tra `{}` vengono dai dati. Le varianti sono in ordine di preferenza.

**Inizio**
- CTA: «Inizia» / «Inizia sessione» · sottotitolo con l'ambito: «Tutte le domande · {n}» o «Primo corpus · {n}»
- Mode card: «Punti deboli» — «Focalizzati sugli errori» · «Blitz» — «{s} s a domanda» · «Richiamo attivo» — «Senza opzioni» · «Filtro mirato» — «Scegli argomento o livello»
- Intestazione domanda: «Domanda {i}» · contatore «{i}/{n}»

**Risposta giusta**
- «Ottimo!» (1ª e 2ª di fila) → «Fantastico! 🔥 {k} di fila!» (dalla 3ª)
- Sotto: «{categoria} · {argomento}» e la spiegazione
- Pulsante: «Continua»
- Giusta dopo un Riprova: «Giusta.» + spiegazione (piccolo premio, serie che riparte da 1)

**Risposta sbagliata**
- Titolo «Errata.» · pulsante «Riprova» (l'opzione scelta resta disattivata). Niente seconda riga «Riprova!»: il pulsante lo dice già.
- Tempo scaduto: «Tempo scaduto.» · «Riprova»

**Aiuti**
- «Mostra suggerimento» → «Argomento: {argomento} ({livello})»
- «Troppo difficile? Usa le opzioni multiple» (la migliore dell'app: tienila)
- Segnaposto richiamo: «Tocca le parole per formare la frase…»

**Fine sessione**
- «Sessione completata!» · «Giuste al primo tentativo: {x} su {n}» · «Continua»
- Tutte giuste: «{n} su {n} al primo tentativo!»

**Simulazione: introduzione**
- Titolo «Simulazione d'esame»
- Regole: «{n} domande a risposta multipla» · «{min} minuti» · «Per superarla: almeno {soglia}/{n}» · «Correzione solo alla fine»
- Pulsanti «Inizia» · «Annulla»

**Simulazione: durante**
- «Domanda {i}» · «{date}/{n} risposte» · pulsante «Consegna»
- Frecce: `aria-label` «Domanda precedente» / «Domanda successiva»; pallini: «Vai alla domanda {i}, risposta data / senza risposta»
- Conferma di consegna: «Consegnare adesso?» · «Hai risposto a {date} domande su {n}.» · «Consegna» / «Torna alle domande»

**Simulazione: esito**
- «Superata!» (verde) / «Non superata» (neutro, senza punto esclamativo) · «{p}/{n}» · «Tempo: {m}:{ss}»
- Non superata, cosa fare: «Ti mancano {soglia − p} punti. Ripassa gli errori qui sotto.»
- Revisione: titolo «Da rivedere» · «La tua risposta: …» / «Omessa» · «Risposta giusta: …»
- Nessun errore: «{n} su {n}! Niente da rivedere.»
- Pulsante «Torna al menu»

**Statistiche e stati vuoti** (sempre con cosa fare)
- Profilo con meno di 3 argomenti: «Rispondi a domande di almeno 3 argomenti per vedere il profilo.»
- Nessun errore registrato: «Ancora nessun errore. Qui vedrai quelli che si ripetono.»
- Nessuna simulazione: «Nessuna simulazione. Fanne una per vedere il punteggio.» (e il valore mancante è «—», non «-»)
- Domanda mai affrontata: «Mai vista»
- Ordinamento: «Peggiori prima» / «Migliori prima»

**Salvataggio, sync, dati**
- «Sincronizzato» · «Sincronizzazione…» · «Offline: salvo sul telefono e sincronizzo appena torna la rete.»
- Accesso: «Accedi con Google» · «Esci»
- Esportazione: «Progressi esportati.» · Importazione: «Progressi importati.»
- Import fallito: «Questo file non contiene progressi validi. Scegli il file .json esportato dall'app.»

**Conferme** (titolo = domanda breve, corpo = conseguenza, pulsanti = verbi precisi, mai «Sì/No/OK»)
- «Uscire dalla sessione?» · «Le risposte date finora restano salvate.» · «Esci» / «Continua»
- «Uscire dalla simulazione?» · «Non verrà conteggiata.» · «Esci» / «Torna alle domande»
- «Azzerare i progressi?» · «Perderai domande imparate e statistiche. Non si può annullare.» · «Azzera» (rosso) / «Annulla»

**Guasti**
- «Qualcosa è andato storto» · «I tuoi progressi sono al sicuro. Ricarica l'app per continuare.» · «Ricarica l'app»
- Accesso bloccato dal browser: «Il browser ha bloccato l'accesso. Disattiva il blocco annunci per questo sito e riprova.» + «Dettagli» con il messaggio tecnico
- Anteprima in iframe: «Per accedere, apri l'app in una nuova scheda.»

## 9. Avanzi inglesi e forme da correggere nell'app → italiano

| Nell'app | Usa |
|---|---|
| Mock Exam | Simulazione d'esame |
| 30 Multiple choice questions · 15 Minutes time limit · 25/30 required to pass · No immediate feedback | {n} domande a risposta multipla · {min} minuti · Per superarla: almeno {soglia}/{n} · Correzione solo alla fine |
| Start Exam · Cancel | Inizia · Annulla |
| Submit | Consegna (con conferma: è irreversibile) |
| Question N | Domanda N (stesso colore di «Domanda N» nelle sessioni) |
| PASSED / FAILED | Superata! / Non superata |
| Time taken: 12m 05s | Tempo: 12:05 |
| Return to Menu | Torna al menu |
| Review Incorrect Answers | Da rivedere |
| Your Answer: · No answer · Correct: | La tua risposta: · Omessa · Risposta giusta: |
| Perfect score! Nothing to review. | 30 su 30! Niente da rivedere. |
| Next | Continua |
| Stats · Import · Export | Statistiche · Importa · Esporta |
| Sign in · Logout | Accedi · Esci |
| Synced come {nome} | Sincronizzato · {nome} |
| Pass Rate · Record · Skill Profile · Mastery | Simulazioni superate · Miglior punteggio · Profilo per argomento · Imparate |
| Weakness · Active Recall · Modalità Custom | Punti deboli · Richiamo attivo · Altre modalità |
| Spaced repetition classica. | Ripasso a intervalli |
| Debug Firebase (nella home) | Diagnostica, dentro Impostazioni |
| Hai risposto a {x} su {y} correttamente al primo tentativo. | Giuste al primo tentativo: {x} su {y} |
| Sessione Completata! · Inizia Sessione · Mostra Suggerimento · Vedi Dettaglio Frasi · Ricarica App · INIZIA | Sessione completata! · Inizia sessione · Mostra suggerimento · Dettaglio domande · Ricarica l'app · Inizia |
| Tutte le frasi (606) · Tutto il Database (606 frasi) · Primo Corpus Iniziale | Tutte le domande · {n} · Primo corpus · {n} |
| Dati importati con successo! | Progressi importati. |
| Non ci sono ancora dati sufficienti. | Ancora nessun errore. Qui vedrai quelli che si ripetono. |

## 10. Da evitare

- **Tifo e prediche** (l'utente li ha cancellati): «Puoi farcela!», «Ci sei quasi!», «Continua ad esercitarti!», «Non mollare!», «Ottimo lavoro!» per cose banali, «Hai 1 punto bonus!», «Ricorda che…».
- **Colpa e dramma**: «Hai sbagliato», «Sbagliato!», «Peccato», «Ops!», «Purtroppo», «Hai inserito un file non valido» (→ «Questo file non è valido»), rosso gigante in maiuscolo per un fallimento.
- **Burocratese e servilismo**: «Si prega di», «Gentile utente», «Siamo spiacenti», «Si è verificato un errore» da solo, «Operazione completata con successo».
- **Condiscendenza**: «semplicemente», «basta», «facile!».
- **Gergo tecnico all'utente**: Firebase, dominio, token, `error.message` grezzo, codici HTTP (vanno nei «Dettagli»).
- **Anglicismi con un equivalente italiano**: Submit, Next, Back, Cancel, Start, Review, Stats, Settings, Score, Login/Logout, Sign in, Mock, Pass rate, Skill, Mastery, Custom, Weakness, Synced, Feedback (in un'etichetta), Quiz (se basta «domande»).
- **«Clicca»** in un'app pensata per il telefono: «tocca», o un verbo neutro («scegli», «apri»).
- **Sinonimi per varietà**: in un'interfaccia la ripetizione è una qualità.
- **Maiuscolo nel sorgente** e *Title Case*.
- **Numeri scritti a mano** nelle stringhe.

## 11. Formula per i messaggi di errore

**Cosa è successo (senza colpa) + cosa fare adesso**, in una o due frasi. I dettagli tecnici vanno in un «Dettagli» richiudibile, mai in un `alert()`.

| Invece di | Scrivi |
|---|---|
| Errore nell'importazione dei dati. Assicurati che il file sia valido. | Questo file non contiene progressi validi. Scegli il file .json esportato dall'app. |
| Errore di login: {message}. Assicurati di aver aggiunto il dominio in Firebase. | Accesso non riuscito. Riprova tra poco. [Dettagli] |
| Si è verificato un problema imprevisto. Puoi riavviare l'applicazione in sicurezza. | I tuoi progressi sono al sicuro. Ricarica l'app per continuare. |
