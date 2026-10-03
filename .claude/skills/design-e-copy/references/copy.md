# Copy dell'interfaccia

Come scrivere i testi di un'interfaccia per l'utente: voce, regole di forma, glossario, feedback per interazione. Viene dai testi di *OFA Polimi Prep* (i migliori tenuti, gli avanzi inglesi e le incoerenze corretti). Per controllare un progetto: `node scripts/controlla_copy.cjs <cartella>`.

## Indice
1. Cosa dice la storia dell'app · 2. Voce e tono · 3. Lunghezza · 4. Punteggiatura, esclamazioni, emoji · 5. Maiuscole · 6. Numeri · 7. Un termine per concetto · 8. Feedback per tipo di interazione · 9. Da evitare · 10. Messaggi di errore

---

## 1. Cosa dice la storia dell'app

Ogni revisione dei testi li ha **accorciati**, mai allungati:
- `e91b79d`: «Risposta errata.» → **«Errata.»**; «Riprova, puoi farcela!» → **«Riprova!»**; tolti «Ci sei quasi!», «Hai 1 punto bonus di benvenuto!», «Completato! Ottimo lavoro!», «…Continua ad esercitarti!»; nomi e descrizioni delle modalità ridotti a 2-4 parole.
- `6ea4e84`: «Maestria» e «Precisione» provati e **tolti lo stesso giorno**, tornati a **«Domande imparate»** e **«Accuratezza»**: nomi letterali, non eleganti. Nello stesso commit «Session Complete! / Continue» tradotti in italiano.
- `bb2058c`: «Category Master» → **«Filtro mirato»**: nome descrittivo in italiano.
- XP, livello e «Sfida quotidiana» sono spariti dalla home (`792dbe1`), con tutti i loro incoraggiamenti.

Il gusto che ne viene fuori: **testi brevi, letterali, in italiano; festa vera sui successi, fatti asciutti sugli errori; niente prediche né tifo.** L'unica parte mai sistemata è la simulazione, rimasta tutta in inglese: qui sotto trovi la versione corretta.

Due forme dell'app qui sono corrette di proposito: «Fantastico! 🔥 3 di fila!» aveva due esclamativi (ora «Fantastico, 3 di fila! 🔥», §4) mentre «Errata.» resta: è una scelta dell'utente, ottenuta accorciando «Risposta errata.» (§8).

## 2. Voce e tono

- **Italiano, "tu", imperativo diretto**: «Inizia», «Riprova», «Tocca le parole», «Focalizzati sugli errori». Mai «Lei», «voi», e l'app non dice «noi» («Stiamo caricando…» → «Caricamento…»).
- **L'inglese resta solo nei contenuti** che sono inglesi per natura (le domande di un esame d'inglese, i nomi degli argomenti di grammatica come *Present perfect*, un termine tecnico senza equivalente usato dall'utente). L'interfaccia intorno è tutta italiana: una schermata, una lingua.
- **Tono per momento.** Il successo è festoso e cresce con la serie. L'errore dell'utente è neutro, breve e operativo, senza colpa, e dipende dall'interazione (§8). I dati hanno nomi semplici e niente aggettivi. L'aiuto è una domanda seguita dalla soluzione. Il guasto rassicura e dice che cosa fare. Per scegliere le parole di ciascun momento vale `copy-interfaccia`, non un elenco di frasi.

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

- **Punto esclamativo solo per un successo vero, al massimo uno per messaggio** (e per blocco di feedback: titolo e riga sotto contano insieme): «Ottimo!», «Sessione completata!», «Fantastico, 4 di fila! 🔥» e non «Fantastico! 🔥 4 di fila!». Due esclamativi urlano e il secondo toglie forza al primo. Mai sugli errori, mai «!!». `controlla_copy.cjs` segnala più di un «!» nella stessa stringa.
- Frasi complete con il punto; **etichette e frammenti senza punto** («Focalizzati sugli errori», non «…errori.»). Il titolo di feedback negativo è l'eccezione voluta: «Errata.», «Tempo scaduto.» (il punto lo rende piatto, di proposito).
- Puntini: il carattere **«…»**, non tre punti. Solo per azioni in corso («Caricamento…») e segnaposto («Tocca le parole per formare la frase…»).
- Separatore tra dati: « · » («Grammatica · B1 · Present perfect»). Due punti per etichetta + valore («La tua risposta: …»).
- **Emoji**: solo 🔥 per la serie di giuste dentro la sessione, in fondo al messaggio dopo l'esclamativo (e ✅ ⚠️ nelle risposte in chat, come in `metodo-di-studio` §9). Mai in titoli, pulsanti, errori, né per i giorni di studio. Nell'interfaccia preferisci un'icona; l'emoji serve dove un'icona non entra (dentro `<option>`).
- Virgolette italiane « » nei testi; apostrofo tipografico ’ se il font lo rende bene.

## 5. Maiuscole

**Scelta: maiuscola solo all'inizio (sentence case), sempre.** Titoli, pulsanti, etichette, voci di menu: «Inizia sessione», «Domande imparate», «Errori comuni», «Simulazione d'esame». Maiuscole interne solo per nomi propri e sigle (OFA, Polimi, Google, A1-B2).

Perché: il *Title Case* («Sessione Completata!», «Vedi Dettaglio Frasi») è un'abitudine inglese che in italiano sembra una traduzione; l'app lo mescolava con il sentence case («Esami completati», «Peggiori prima»).

Il maiuscolo spaziato si fa **solo con CSS** (`uppercase`) e **solo per etichette brevi, fino a 2 parole** («Imparate», «Altre modalità»): nel sorgente la stringa resta «Inizia», non «INIZIA» (lo screen reader legge il sorgente, e alcuni leggono il maiuscolo lettera per lettera). Le etichette dei pulsanti grandi restano in maiuscola iniziale, così stanno su una riga anche a 320 px (`sistema-visivo.md` §4).

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

## 7. Un termine per concetto

Ogni concetto ha un solo nome, sempre lo stesso in tutta l'app. Nell'app OFA lo stesso concetto era chiamato in quattro modi (simulazione, esame, mock exam, prova) e l'elemento di studio alternava «domanda», «frase» e «question»: ogni cambio di nome fa pensare che sia una cosa diversa. Si sceglie il nome una volta e si aggiorna ovunque, controllando con `scripts/controlla_copy.cjs`.

Come si sceglie:
- Il nome è quello che il dizionario e le altre app italiane usano per quella cosa; il nome inglese si scarta se esiste l'italiano.
- Il nome dice ciò che è, non ciò che suona bene. Nella storia dell'app «Maestria» e «Precisione» sono stati provati e tolti lo stesso giorno, e «Category Master» è diventato un nome descrittivo.
- Un dato che non misura la conoscenza non si chiama come se la misurasse. «Copertura» cresce anche sbagliando, quindi non va usata per dire quanto si sa.
- Due misure diverse hanno due nomi diversi (nell'app: l'esito del primo tentativo e la forza del ricordo non si chiamano allo stesso modo), e uno stesso numero non si mostra due volte con due etichette.
- Se l'utente ha già un suo termine, vale il suo.

**Gamification finta**: XP, punti, livello, badge, trofei, sfida quotidiana, obiettivo giornaliero, serie di giorni consecutivi. Non usarli a meno che l'utente li chieda: la motivazione viene da quanto sa (`metodo-di-studio` §4). La serie di giuste di fila *dentro la sessione* è un feedback, non un contatore di giorni.

## 8. Feedback per tipo di interazione

La risposta sbagliata non ha un testo solo: dipende da che cosa può fare dopo la persona.
- **Quiz con secondo tentativo**: un titolo breve e piatto, senza colpa, e un pulsante che dice che cosa fare. L'opzione scelta resta disattivata; la spiegazione arriva quando trova la giusta. Il titolo deve spingere verso l'opzione giusta, non chiudere con un verdetto.
- **Risposta costruita con le parole o scritta**: il titolo dice se la risposta è del tutto o in parte sbagliata, e può offrire un aiuto a scalino verso una forma più semplice.
- **Tempo scaduto**: lo dice e permette di riprovare.
- **Flashcard e richiamo autovalutato**: nessun verdetto. Dopo aver mostrato la risposta giudica lo studente, con la scala di sicurezza o con «ripeti più tardi» e «continua».
- **Quiz senza secondo tentativo**: mostra subito la risposta giusta e la spiegazione.
- **Simulazione ed esame**: nessun feedback fino alla consegna; le giuste e le sbagliate si vedono nella revisione finale.

«Errata.» resta la forma scelta dall'utente per i quiz con Riprova: nasce accorciando «Risposta errata.» e il pulsante dice già che cosa fare. Una forma che indica l'opzione toccata è un'alternativa quando il quiz fa riprovare.

Altri momenti seguono le stesse regole di `copy-interfaccia`: le conferme hanno per titolo una domanda breve, per corpo la conseguenza e per pulsanti i verbi precisi (mai «Sì», «No» o «OK»); gli stati vuoti dicono che cosa fare per riempirli; le simulazioni dicono quante domande, quanto tempo, la soglia e che la correzione è solo alla fine; i conteggi si calcolano dai dati.

## 9. Da evitare

- **Tifo e prediche**, che l'utente ha cancellato: gli incoraggiamenti non richiesti, i bonus di benvenuto, i «ricorda che…».
- **Colpa e dramma**: il «hai sbagliato» riferito alla persona, le esclamazioni sugli errori, il rosso gigante in maiuscolo per un fallimento.
- **Burocratese e servilismo**: «si prega di», «gentile utente», «siamo spiacenti», «si è verificato un errore» da solo, «operazione completata con successo».
- **Condiscendenza**: «semplicemente», «basta», «facile».
- **Gergo tecnico mostrato all'utente**: nomi dei servizi, domini, token, messaggi grezzi, codici HTTP. Vanno in un «Dettagli» richiudibile.
- **Anglicismi con un equivalente italiano** (submit, next, back, cancel, start, review, stats, settings, score, login, mock, pass rate, skill, custom, weakness, synced).
- **«Clicca»** in un'app pensata per il telefono: «tocca», o un verbo neutro.
- **Sinonimi per varietà**: in un'interfaccia la ripetizione è una qualità.
- **Maiuscolo nel sorgente** e Title Case.
- **Numeri scritti a mano** nelle stringhe.

## 10. Messaggi di errore

Un messaggio di errore dice che cosa è successo, senza colpa, e che cosa fare adesso, in una o due frasi. Descrive lo stato e non fa parlare il software in prima persona. I dettagli tecnici vanno in un «Dettagli» richiudibile, mai in un `alert()`. Il messaggio non attribuisce alla persona un'azione che non ha fatto: se l'errore viene dal servizio, non parla di «tuoi tentativi». Una rassicurazione ci sta solo quando è un fatto verificabile (i progressi sono davvero salvati).
