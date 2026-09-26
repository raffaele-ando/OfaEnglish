---
name: copy-interfaccia
description: "Come scrivere e correggere i testi delle interfacce dell'utente (app, siti, artifact) in un italiano corretto, preciso e normale, senza tono aziendale e senza finto colloquiale. Spiega il ragionamento di chi fa UX writing di mestiere: leggere la schermata e la situazione di chi la usa, decidere se un testo serve, scegliere la parola che la lingua usa già, dosare il tono sul peso reale dell'evento, rileggere l'intera schermata. Contiene casi reali prima e dopo, corretti dall'utente, con il perché. Usala ogni volta che scrivi, rivedi o traduci anche un solo testo visibile: pulsanti, titoli, etichette, errori, conferme, stati vuoti, notifiche, toast, feedback di quiz, onboarding, pagamenti. Usala anche quando costruisci un'interfaccia e i testi sono una parte minore del lavoro, e sempre quando l'utente dice che un testo è brutto, strano, finto o «da AI»."
---

# Testi dell'interfaccia

Questa skill serve a scrivere i testi che compaiono nelle interfacce dell'utente: le parole sui pulsanti, i titoli, le etichette, i messaggi che compaiono dopo un'azione, gli avvisi, gli stati vuoti, i riscontri dei quiz. L'utente scrive in italiano e vuole un italiano corretto e preciso, fatto con le parole che la lingua usa normalmente per quelle cose.

Nelle sue app i testi scritti da Claude sono stati riscritti centinaia di volte, e quasi mai per una singola parola sbagliata. Il problema era il modo di scrivere, che cadeva in uno di due difetti opposti: un registro da azienda, pieno di gergo, di spiegazioni e di incoraggiamenti, oppure un registro finto colloquiale, pieno di modi di dire, di frasi spezzate e di un software che parla come una persona. Quando l'utente correggeva il primo difetto, Claude tendeva a cadere nel secondo, e viceversa.

La skill non contiene frasi da riutilizzare. Un laureato in design della comunicazione sa scrivere un pulsante perché capisce che cosa quel pulsante deve fare, non perché ricorda un elenco di pulsanti riusciti. Qui si prova a trasmettere quel ragionamento. I casi reali in `references/casi-reali.md` servono a vedere il ragionamento applicato; se una frase di quei casi finisce copiata in un'altra schermata, il ragionamento non è stato capito.

## Che cosa si intende per italiano normale

Il testo giusto è quello che scriverebbe una persona che fa questo lavoro in un'azienda seria, per un prodotto usato da persone qualunque. Non suona come un opuscolo e non suona come un messaggio a un amico. Chi lo legge non se ne accorge, perché ogni parola è quella che si aspettava.

Le schermate che l'utente ha apprezzato, in una prova di rebranding della sua app per l'OFA, mostrano bene questo registro. Un titolo chiede «Sei pronto per l'esame?», il testo sotto dice «Scopri la tua probabilità di superarlo.» e il pulsante dice «Calcola la tua previsione». Più avanti una schermata dice «Inserisci la tua email istituzionale per salvare i risultati e sbloccare tutti i contenuti.» e, sotto il campo, «I tuoi dati sono sicuri e utilizzati solo per il servizio.» Dopo il pagamento compare «Tutto pronto!» seguito da «Hai ora accesso al CRAM Pass Pro.» Sono frasi complete e grammaticalmente regolari, con i verbi che ogni app italiana usa per quelle azioni (scoprire, calcolare, inserire, salvare, procedere al pagamento). Non contengono immagini, battute o confidenze. Il punto esclamativo compare solo quando è successo qualcosa di concreto: il pagamento è andato a buon fine, il quiz è finito.

Le stringhe che l'utente ha detto di detestare mostrano l'errore opposto. «Butta giù» al posto di «annota», «Ferme da un po'» al posto di un nome per le attività inattive, «Un posto per le cose da fare» al posto del nome della lista, «Il server ha detto:» davanti a un messaggio di errore, «Non ci sono riuscito» scritto in prima persona da un'app, «13 su 20 le sapevi» al posto di un punteggio. Nessuna di queste frasi contiene un errore di grammatica. Sono sbagliate perché usano il registro di una conversazione tra amici in un posto dove serve il nome preciso di una cosa.

## Leggere la schermata prima di scrivere

Il testo si decide solo dopo aver capito la situazione in cui verrà letto. Conviene rispondere, anche solo mentalmente, a queste domande.

La prima riguarda la persona. Che cosa sta facendo in questo momento, che cosa ha appena fatto e che cosa potrà fare subito dopo? Vede questa schermata una volta sola, come un onboarding, o venti volte al giorno, come la lista delle attività di oggi? Arriva qui dopo un errore, dopo un successo o nel mezzo di un compito? Una persona che ha appena sbagliato una risposta non ha bisogno di essere consolata; ha bisogno di sapere com'è andata e di andare avanti. Una persona che apre la stessa schermata molte volte al giorno smette di leggere le frasi lunghe dopo la seconda volta, e ogni frase in più diventa rumore.

La seconda riguarda l'elemento. Ogni tipo di elemento ha un compito diverso, e il compito decide la forma del testo.
- Un'etichetta o un titolo dà il nome a una cosa. Per questo è un nome, non una frase e non una domanda: una sezione che contiene il registro degli errori si chiama «Registro tecnico», non «Cosa sta succedendo».
- Un pulsante dice che cosa succede quando lo si preme. Di solito è un verbo all'imperativo, seguito dall'oggetto quando senza oggetto l'azione sarebbe ambigua o pericolosa.
- Un messaggio dopo un'azione dice che cosa è successo. Spesso basta un participio che descrive il nuovo stato, come «Salvato.» o «Rimandata.».
- Un avviso di conferma fa una domanda precisa, dice la conseguenza che non si vede e offre pulsanti che nominano le due scelte.
- Uno stato vuoto dice che non c'è niente e, se serve, che cosa si può fare per riempirlo.
- Un messaggio di errore dice che cosa non ha funzionato e che cosa può fare la persona. Un codice numerico da solo non dice niente a chi non ha scritto il programma.

La terza riguarda quello che la schermata dice già. Numeri, colori, icone, la posizione di un elemento e il pulsante che gli sta accanto comunicano quanto le parole. Se il contatore mostra che resta un'azione, una riga che dice «Ultima di oggi» ripete un'informazione già visibile e in più sembra un commento. Se un pulsante dice «Fatto», una frase sopra che invita a completare l'azione è superflua. Il testo deve aggiungere quello che la schermata da sola non dice.

## Quando è meglio non scrivere niente

Molte delle correzioni dell'utente sono state cancellazioni. Sono sparite le istruzioni mostrate ogni giorno su gesti che si scoprono al primo uso, le spiegazioni sul funzionamento dell'app messe in testa alle sezioni, i contatori che contavano zero elementi, i pulsanti ripetuti su ogni riga quando toccare la riga faceva già la stessa cosa, le promesse di premio scritte sul pulsante prima ancora di premerlo.

Prima di aggiungere un testo conviene quindi chiedersi che cosa perderebbe la persona se quel testo non ci fosse. Se la risposta è niente, il testo non va scritto. Se la risposta è un'informazione che non si può indovinare guardando lo schermo, come la conseguenza di una cancellazione o il significato di un valore su un grafico, il testo resta, nella forma più breve che la comunica.

Non scrivere non vuol dire lasciare vuoto. Una schermata vuota o un trattino al posto di un dato fanno pensare che l'app non funzioni; in quei casi una riga che dice che cosa manca è necessaria. La domanda giusta non è quante parole togliere, ma quali parole servono a quella persona in quel momento.

## Togliere il superfluo, non l'informazione

Tagliare le parole inutili non significa ridurre ogni testo al minimo possibile. In una prova alla cieca l'utente ha preferito testi più completi a versioni troppo scarne, perché le versioni scarne avevano perso qualcosa che serviva.

Un pulsante d'azione dice che cosa fa e, quando non è ovvio, su che cosa agisce o dove porta. «Annota» da solo lascia la domanda «annota che cosa?», mentre «Annota un pensiero» o «Aggiungi una nota» rispondono. «Salta le domande» dice che cosa si evita ma non dove si arriva; «Salta e vai alla demo» dice entrambe le cose. Un messaggio che chiude un'azione può indicare il passo successivo quando la persona deve davvero scegliere che cosa fare dopo, come alla fine di un timer: «Timer finito. Minuti registrati. Continua o fai una pausa.» è stato preferito alla versione che toglieva l'ultima frase.

Prima di togliere una parola conviene quindi chiedersi se porta un'informazione che la persona non ha altrove. Se la porta, resta. Si tolgono i commenti, le spiegazioni ovvie, i permessi e le rassicurazioni vuote, non l'oggetto di un verbo, la destinazione di un pulsante o la conseguenza di un'azione.

## Il testo deve dire il vero

Un testo che descrive male quello che fa l'app è sbagliato anche se è scritto bene. Prima di scrivere un messaggio conviene verificare che cosa succede davvero dopo. Se chiudendo una richiesta sul sonno l'app domani chiederà gli orari della notte nuova, il messaggio non può dire «Richiesta rimandata a domani», perché non viene rimandata la stessa richiesta. Se un'importazione ha caricato solo una parte degli elementi, il titolo non può dire che l'importazione è completa. Quando il comportamento non è chiaro, va chiesto o letto nel codice prima di scrivere.

## Stati vuoti e traguardi raggiunti

Quando una lista si svuota perché la persona ha finito tutto, la prima domanda è se quell'elemento debba restare visibile. Una sezione come «Da sistemare» che resta sullo schermo senza niente dentro occupa spazio e non serve: spesso la scelta giusta è farla sparire.

Se invece lo stato vuoto deve restare, bisogna distinguere perché è vuoto. Una lista vuota perché la persona non ha ancora iniziato ha bisogno di dire come si comincia. Una lista vuota perché la persona ha completato tutto è un traguardo, e merita un riscontro positivo che lo riconosca, breve e legato al fatto, come in un'app per studiare quando si finisce una sessione. In quel momento non si scrivono istruzioni d'uso: una frase come «Premi C per annotare un pensiero: lo ritrovi qui» spiega un meccanismo proprio quando la persona ha appena finito, e «lo ritrovi qui» è una rassicurazione che nessuno ha chiesto.

## Scegliere la parola che la lingua usa già

Per quasi ogni cosa che compare in un'interfaccia esiste già una parola, e le persone la conoscono. Le operazioni si chiamano salvare, annullare, eliminare, modificare, accedere, procedere al pagamento. Una lista di cose da fare si chiama lista o elenco, oppure ha il nome che l'app le ha dato. Un'attività che nessuno tocca da settimane è inattiva. Il lavoro di chi scrive testi è trovare quella parola, non inventarne una più simpatica.

Gli errori in questo campo sono di tre tipi.

Il primo è il gergo, cioè le parole di un ambiente specialistico o gli anglicismi per cui esiste un termine italiano comune: «backlog», «MIT», «demo», «pass rate», «vs». Chi usa l'app non è tenuto a conoscerli, e l'italiano ha già «da fare», «priorità», «di esempio», «esami superati», «rispetto a».

Il secondo è la perifrasi generica, cioè un giro di parole vago usato al posto del nome: «un posto per le cose da fare», «dargli un posto nella giornata» al posto di «dargli un orario», «una cosa in più». Suona gentile, ma costringe la persona a indovinare di che cosa si parla, e dà all'interfaccia un tono infantile.

Il terzo è l'imprecisione: una parola che si avvicina al significato senza coglierlo. Un timer che conta alla rovescia i minuti rimasti mostra «restano», non «nel blocco». Un pulsante che sposta un'attività in un giorno qualsiasi, anche nel passato, non può dire «Rimanda». «Bassa evidenza» detto di una pratica ragionevole ma non ancora misurata fa pensare che sia falsa, e il termine corretto è «euristica». Il simbolo «′» dopo un numero non si legge come «minuti», quindi si scrive «min».

Per scegliere la parola conviene fare tre verifiche. Una persona che parla italiano userebbe questa parola per questa cosa anche fuori dall'app? Il dizionario le dà proprio questo significato? Le app che la persona usa ogni giorno, come la banca, la posta o le impostazioni del telefono, chiamano questa cosa nello stesso modo?

Una volta scelto il nome, lo si usa sempre. Se la schermata si chiama «Oggi», il pulsante che ci porta dice «Oggi», e la sezione non ha un secondo nome nel sottotitolo e un terzo nella guida. Nell'app per l'OFA la stessa percentuale è stata chiamata prima «Accuratezza», poi «Precisione», poi di nuovo «Accuratezza»: ogni cambio obbliga chi la usa a chiedersi se si tratta di un dato diverso.

## Come deve essere costruita una frase

Quando il testo è una frase, è una frase completa e regolare, con soggetto, verbo e complementi al loro posto. I frammenti telegrafici come «Prima 41. 8 nuove imparate, 1 che sapevi e oggi no» obbligano a ricostruire il senso, e sembrano appunti presi di fretta.

Quando il testo è un'etichetta, è un nome o un sintagma nominale, senza punto di domanda e senza verbo di commento. Una sezione non si chiama «Come fai a saperlo» ma «Evidenza».

Il registro parlato si riconosce da alcuni tratti precisi, che nell'italiano scritto di un'interfaccia non vanno usati. Uno è la dislocazione, cioè il complemento anticipato e ripreso da un pronome, come in «13 su 20 le sapevi» o «le altre 19 le hai giuste». Un altro sono i pronomi attaccati al verbo dove non servono, come in «Tienila in cima» al posto di «Tieni in cima». Altri ancora sono le particelle di confidenza come «pure» o «dai», i permessi come «se ti va», i dimostrativi da conversazione come in «Questa non si può più annullare», e le espressioni come «la volta scorsa» al posto di «l'ultima volta» o di un riferimento preciso.

Il software non è una persona e non parla di sé. Un'app non dice «Ti avviso quando finisce il timer», «Non ci sono riuscito», «Mostro le cose importanti» o «L'ho contattato», e non riferisce che cosa «ha detto» un server. Descrive lo stato: che cosa è stato salvato, che cosa non è riuscito, perché, e che cosa si può fare. Allo stesso modo il codice non ha sentimenti né opinioni: un servizio non «ha problemi suoi» e un registro non «dice com'è andata». C'è una sola eccezione, ed è di convenzione: l'utente ha apprezzato il titolo «Verifichiamo il tuo livello», dove la prima persona plurale è la forma esortativa con cui molte app italiane presentano un'attività da fare insieme. È diverso da un'app che racconta le proprie azioni o i propri fallimenti come farebbe un personaggio.

Anche la voce della persona va usata con cautela. Un pulsante che dice «Mi funziona» mette in bocca all'utente una frase in prima persona; un'etichetta come «Funziona» ottiene lo stesso effetto senza fingere un dialogo.

Le app dell'utente si rivolgono alla persona con il tu. Le maiuscole seguono la grammatica italiana, con la maiuscola solo all'inizio della frase o del titolo.

## Dosare il tono sul peso dell'evento

Il tono di un testo deve corrispondere a quanto conta davvero quello che è appena successo. Per decidere conviene chiedersi che cosa ha fatto la persona e quanto le è costato.

Un errore in un quiz è un evento frequente e senza drammi. Il riscontro è neutro e secco: nell'app per l'OFA il titolo è passato da «Risposta errata.» a «Errata.». Non servono consolazioni, perché una consolazione dopo ogni errore diventa rumore e tratta la persona come un bambino. Quello che può servire è la correzione: dopo «Risposta sbagliata» mostrare subito la risposta giusta dà alla persona un'informazione utile invece di un incoraggiamento. Se si mostri o no dipende da come funziona il quiz, per esempio se prevede un secondo tentativo.

Un risultato conquistato con uno sforzo reale merita invece una gratificazione, breve e legata al fatto. Nella stessa app, quando la serie arriva a tre o più risposte corrette di fila, il titolo diventa per esempio «Fantastico! 🔥 5 di fila!»: l'entusiasmo è giustificato dal numero, e il numero dice esattamente che cosa si sta festeggiando. Alla fine di una sessione compare «Sessione completata!», e nella prova di rebranding «Quiz completato!» è seguito da «Il tuo obiettivo è a portata di mano.». Questa gratificazione è voluta, soprattutto in un'app per studiare, perché premia uno sforzo che c'è stato davvero.

Tra questi due estremi c'è la maggior parte degli eventi di un'interfaccia: salvare, spostare, spuntare una casella, chiudere un pannello. Qui il tono è neutro, e il testo dice lo stato e niente altro. «Fatta. Continua così.» dopo aver spuntato un'abitudine è sproporzionato: la spunta non è costata fatica, e il commento, ripetuto ogni giorno, diventa una frase fatta.

Le rassicurazioni seguono la stessa logica. Sono utili quando rispondono a un dubbio reale in quel preciso punto, e quando sono un fatto, non un sentimento. Sotto il campo in cui si inserisce l'email, «I tuoi dati sono sicuri e utilizzati solo per il servizio.» risponde alla domanda che la persona si sta facendo. Prima di ripristinare un backup, dire che i dati attuali vengono salvati come nuovo backup informa su una conseguenza. Frasi come «va bene così», «bastano pochi minuti» o «niente pagelle» non informano su niente, e l'utente le ha tolte ogni volta che le ha trovate.

Anche il tipo di prodotto conta. Una schermata che presenta un servizio a pagamento può promettere un risultato, come «Scopri la tua probabilità di superarlo.». Uno strumento che la persona apre venti volte al giorno per lavorare non deve promettere né commentare: deve far vedere le cose e far fare le azioni.

## I due modi di sbagliare e l'oscillazione tra i due

Il primo modo di sbagliare è il registro aziendale. Si riconosce dal gergo, dalle spiegazioni di cose ovvie, dagli incoraggiamenti non richiesti, dai permessi («puoi», «se vuoi»), dalle frasi lunghe che spiegano il perché di una funzione e dal software che si presenta al plurale («Ti mostriamo», «Ti proponiamo»). Nella storia di LifeMax è il registro della prima grande riscrittura dei testi: gli slogan del prototipo, come «Una cosa alla volta. Il resto aspetta.», diventarono spiegazioni come «Ti mostriamo una sola azione per volta, così puoi concentrarti su quella.».

Il secondo modo di sbagliare è il finto colloquiale. Si riconosce dai modi di dire («butta giù», «tirale in Oggi prima che diventino una corsa»), dalle frasi spezzate, dalle particelle di confidenza, dal software che parla in prima persona e dalle perifrasi infantili. Nella storia di LifeMax è arrivato come reazione al primo: per avvicinare i testi al parlato, la nota sulle abitudini, che diceva che spuntarle «non toglie spazio alle tue tre azioni», diventò «non rubano posto alle tre azioni di oggi», e «Salvato nell'inbox. Puoi tornare a ciò che stavi facendo.» diventò «Salvato. Torna pure a quello che stavi facendo.».

Le versioni che l'utente ha poi tenuto non stanno a metà strada tra i due registri. Stanno fuori da entrambi: il messaggio dopo il salvataggio è diventato «Salvato.», e il sottotitolo che spiegava la schermata Oggi è stato tolto. Il testo giusto non è un compromesso tra formale e informale, ma la formulazione più precisa, scritta nell'italiano normale.

Per questo, quando l'utente dice che un testo è brutto, non bisogna spostarsi sul registro opposto. Bisogna capire quale difetto preciso ha quel testo e correggere quello. Se il difetto è il gergo, si cerca la parola comune, non un modo di dire. Se il difetto è una spiegazione superflua, la si toglie, senza sostituirla con una battuta. Se il difetto è una frase troppo rigida, la si rende più semplice, non più confidenziale. Un esempio dalla storia recente: l'utente ha detestato «vs ultima» e ha rifiutato anche «rispetto alla volta scorsa: +11%». La seconda versione toglie l'anglicismo, ma aggiunge un'espressione parlata e lascia la struttura spezzata, con i due punti al posto di un verbo.

## Rileggere prima di consegnare

Un testo va controllato insieme a tutti gli altri testi della stessa schermata, perché molti difetti si vedono solo così: due nomi per la stessa cosa, un pulsante che contraddice la frase sopra, un'informazione ripetuta tre volte. La procedura completa è in `references/revisione.md` e conviene seguirla ogni volta che si consegna una schermata, anche piccola.

I casi raccolti nei riferimenti servono a capire il ragionamento, non a fornire frasi. Riusarne le parole in un contesto diverso produce testi che suonano copiati, e in una prova è successo proprio questo. Inoltre il gusto dell'utente si è evoluto: alcune versioni che aveva tenuto in passato oggi non le sceglierebbe. Un caso storico mostra una direzione, non una risposta definitiva.

Se un testo resta incerto, va detto all'utente invece di presentarlo come giusto. Il giudizio sul copy delle sue app spetta a lui, e un dubbio dichiarato gli fa risparmiare tempo più di una proposta sicura che poi deve riscrivere.

## Materiale di riferimento

- `references/casi-reali.md` raccoglie una selezione di coppie prima e dopo prese dalla storia delle app dell'utente, raggruppate per il ragionamento che mostrano, con alcune traiettorie complete in cui lo stesso testo passa da un difetto all'altro prima di arrivare alla versione tenuta. Contiene anche le stringhe che l'utente ha detto di detestare, con il motivo per cui non funzionano, e quelle che ha apprezzato, con quello che fanno bene. Va letto quando si scrivono testi per una schermata nuova, quando l'utente contesta un testo e quando non è chiaro quale dei due difetti si stia commettendo.
- `references/revisione.md` descrive una procedura pratica per rileggere tutti i testi di una schermata prima di consegnarla.
