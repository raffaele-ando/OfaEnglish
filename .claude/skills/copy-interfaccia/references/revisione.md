# Rileggere tutti i testi di una schermata

Questa procedura serve a controllare i testi di una schermata intera prima di consegnarla. Va seguita anche quando la modifica è piccola, perché molti difetti compaiono solo guardando i testi insieme: due nomi per la stessa cosa, una frase che contraddice il pulsante accanto, la stessa informazione scritta in tre punti.

## 1. Fare l'inventario

Si comincia elencando tutti i testi che la persona può vedere o sentire, non solo quelli in primo piano. Oltre ai titoli e ai pulsanti ci sono i segnaposto dei campi, le etichette per i lettori di schermo (`aria-label`), i suggerimenti che compaiono al passaggio del mouse, i messaggi temporanei dopo un'azione, gli avvisi di conferma, e i testi dei vari stati della schermata: vuota, in caricamento, con un errore, dopo un successo, al primo uso. Se un testo compare solo in certe condizioni, conviene scriverle accanto, perché il testo va giudicato nella situazione in cui si legge.

## 2. Per ogni testo, chiedersi se serve

Per ogni voce dell'inventario si risponde a due domande. Che cosa deve fare questo testo, cioè dare un nome, indicare un'azione, dire che cosa è successo, avvertire di una conseguenza? E che cosa perderebbe la persona se il testo non ci fosse?

Un testo si toglie quando ripete un'informazione che la schermata mostra già con un numero, un'icona, un colore o un altro testo; quando spiega il funzionamento dell'app invece del contenuto della schermata; quando insegna un gesto che si scopre al primo tentativo e resta visibile per sempre; quando commenta lo stato invece di descriverlo.

Un testo resta quando dice una cosa che non si può indovinare guardando lo schermo, come la conseguenza di un'azione irreversibile, il significato di un valore o il motivo di un errore. Resta anche quando la sua assenza farebbe sembrare l'app rotta, come succede con una schermata vuota o con un trattino al posto di un dato.

## 3. Controllare le parole

Per ogni parola che nomina una cosa o un'azione ci si chiede se è la parola che una persona userebbe per quella cosa anche fuori dall'app, e se le app di uso comune la chiamano nello stesso modo.

Vanno cercati in particolare gli anglicismi e le sigle per cui esiste un termine italiano comune, le parole del gergo tecnico o di un settore specialistico, le perifrasi generiche al posto di un nome («un posto per», «una cosa in più»), le parole approssimative che si avvicinano al significato senza coglierlo, e le abbreviazioni che non tutti riconoscono.

Poi si controlla la coerenza: la stessa cosa deve avere lo stesso nome in tutta la schermata e in tutta l'app. Se il pulsante porta a una schermata, deve usare il nome di quella schermata. Se una sezione ha già un titolo, il sottotitolo non le dà un secondo nome.

## 4. Controllare la costruzione

Si guarda la forma di ogni testo in rapporto al suo compito.
- Le etichette e i titoli sono nomi o sintagmi nominali, senza punto di domanda. L'eccezione è il titolo di una schermata di presentazione che rivolge davvero una domanda alla persona.
- I pulsanti hanno un verbo e, quando senza oggetto l'azione sarebbe ambigua o distruttiva, anche l'oggetto.
- I messaggi dopo un'azione dicono lo stato raggiunto, spesso con un participio.
- Le frasi sono complete e grammaticalmente regolari. Non ci sono frammenti senza verbo messi uno dopo l'altro.
- Non c'è la struttura «non è X, è Y» o «X, non Y», che trasforma un'informazione in una piccola lezione.

## 5. Controllare chi parla

Si rilegge ogni testo chiedendosi chi lo sta dicendo. La risposta deve essere nessuno: il testo descrive la situazione. Sono da correggere il software che parla in prima persona singolare o plurale di quello che fa o non riesce a fare, il server o il codice che «dice», «risponde» o «ha problemi», e i pulsanti che mettono in bocca all'utente una frase in prima persona. Resta accettabile la prima persona plurale esortativa nel titolo di un'attività, come si trova in molte app italiane, purché non diventi l'app che racconta di sé.

## 6. Controllare il registro

Si cercano i tratti del parlato che in un'interfaccia scritta non vanno usati: le dislocazioni, i pronomi attaccati al verbo dove non servono, particelle come «pure» o «dai», permessi come «se ti va» o «se vuoi», dimostrativi da conversazione, modi di dire e metafore.

Poi si cercano i tratti del registro aziendale: spiegazioni di cose ovvie, giustificazioni delle scelte di progetto, incoraggiamenti, rassicurazioni che non contengono un fatto, frasi lunghe dove basta un nome.

Un modo pratico per trovarli è cercare nel testo alcune parole che li accompagnano spesso: «puoi», «se vuoi», «pure», «per ora», «con calma», «va bene», «basta», «non preoccuparti», «ho », «abbiamo», «ti mostriamo», «ha detto», «vs», «!». Una di queste parole non è un errore di per sé, ma ognuna merita una seconda lettura della frase in cui compare.

## 7. Controllare il tono rispetto all'evento

Si elencano gli eventi della schermata (un errore, un salvataggio, una cancellazione, la fine di una sessione, un traguardo) e si confronta il tono di ciascun testo con il peso reale dell'evento. Gli errori ricevono un riscontro neutro e breve, senza consolazioni. Le operazioni ordinarie ricevono la descrizione dello stato, senza commenti. Una gratificazione compare solo dopo uno sforzo reale ed è legata al fatto che la giustifica, per esempio al numero di risposte corrette di fila. Se lo stesso incoraggiamento compare a ogni azione ripetuta, va tolto.

## 8. Controllare che il testo sia vero

Ogni testo deve corrispondere a quello che succede davvero. I numeri devono essere quelli reali, compresi i casi in cui l'operazione è riuscita solo in parte. Lo stato mostrato deve essere lo stato attuale. Un pulsante deve dire che cosa fa, non che cosa si spera che la persona faccia dopo. Le date e le durate devono essere espresse in modo che non si possano leggere in due modi.

## 9. Controllare testo e pulsanti insieme

Si guarda se i testi e i pulsanti puntano nella stessa direzione. Se una frase consiglia un passo, il pulsante principale deve essere quel passo. Se un avviso chiede conferma, il titolo deve essere la domanda, il testo deve dire la conseguenza che non si vede, e i pulsanti devono nominare le due scelte invece di dire «OK». Se un'azione si può annullare subito, di solito è meglio offrire l'annullamento che chiedere una conferma.

## 10. Leggere come chi usa l'app

Alla fine si rilegge la schermata immaginando la persona che la apre per fare una cosa precisa, magari di fretta e per la ventesima volta nella giornata. Ogni testo si capisce al primo sguardo? Qualche frase suona tradotta dall'inglese? Qualche frase suona come un opuscolo pubblicitario o come un messaggio a un amico? Una persona che fa questo lavoro per un'azienda seria la scriverebbe così?

## 11. Dopo una correzione dell'utente

Quando l'utente ha appena criticato un testo, si confronta la nuova versione con quella criticata. La domanda è se la nuova versione corregge il difetto preciso che l'utente ha indicato o se sostituisce un difetto con quello opposto. Se il testo criticato era troppo formale, la nuova versione non deve contenere modi di dire, frammenti o confidenze. Se era troppo colloquiale, la nuova versione non deve contenere spiegazioni, permessi o gergo. Se non si riesce a capire quale fosse il difetto, conviene chiederlo invece di tentare.

## 12. Dichiarare i dubbi

Se dopo questa revisione un testo resta incerto, lo si segnala all'utente dicendo qual è il dubbio, per esempio se una parola sia quella comune o se una frase serva davvero. Il giudizio finale sui testi delle sue app spetta a lui.
