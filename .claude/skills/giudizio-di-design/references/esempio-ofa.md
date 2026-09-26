# Esempio risolto: l'app OFA

> **Non è un modello da copiare.** È ciò che il metodo ha prodotto per *una* persona, *un* obiettivo e *un* dispositivo. Serve a vedere come le ragioni diventano forma, e a capire che cosa cambierebbe con ragioni diverse. Se stai progettando qualcos'altro e il risultato ti somiglia, chiediti quale di queste ragioni vale anche lì.

## Il contesto che l'ha prodotto

- **Chi.** Una persona sola, che è anche lo sviluppatore. Descrive il proprio profilo nel codice: attenzione discontinua, poca costanza. Lo motivano i dati veri su di sé, non punti e livelli.
- **Obiettivo.** Superare un test d'inglese a risposta multipla con una soglia (25 su 30 in 15 minuti).
- **Dispositivo e situazione.** Soprattutto il telefono, a sessioni brevi, spesso di passaggio.
- **I momenti che contano.** (1) Aprire l'app e cominciare senza decidere niente. (2) Il riscontro subito dopo una risposta. (3) Vedere che il numero «imparate» si muove davvero.
- **Vincoli.** Banco di domande che cresce a blocchi (fino a 606); un test vero con regole precise; dati da non perdere mai.

## Che cosa ne è uscito, e perché lì andava bene

| Scelta | Forma concreta | Perché in QUEL contesto |
|---|---|---|
| Struttura | Cornice alta quanto lo schermo: intestazione fissa, centro che scorre, barra d'azione fissa in basso. Su desktop lo stesso «telefono» incorniciato | uso con il pollice, sessioni brevi; l'azione deve essere sempre nello stesso punto. Il desktop era secondario |
| Home | Un pulsante dominante «Inizia sessione» con sottotitolo che dice cosa succederà e su quante domande; due tile uguali «Imparate %» e «Accuratezza %»; il resto in tile secondarie | decidere come studiare era attrito per quel profilo; l'algoritmo era affidabile; i due numeri misurano l'obiettivo |
| Perimetro | Selettore «Tutte / Primo corpus (60)» che ricalcola le metriche | con 606 domande la barra non si muoveva più |
| Sessione | Domanda grande, opzioni a card, tre pulsanti Indovino / Incerto / Sicuro che inviano e dichiarano la sicurezza | un tocco raccoglie due dati; la sicurezza serve all'algoritmo |
| Riscontro | Suono che sale con le giuste di fila, coriandoli a tre intensità, vibrazioni distinte; errore con una parola, un suono morbido e «Riprova» | attenzione discontinua: rinforzo immediato legato alla prestazione vera; l'errore è frequente e non deve pesare |
| Informazione | Spiegazione e categoria dopo la risposta giusta; statistiche in una schermata a parte; dettaglio per frase un livello più giù, peggiori prima | mostrare prima sarebbe un indizio; l'utente vuole tutti i dati ma non mentre risponde |
| Colore | Tinte vive e sature, ciascuna con un solo significato (blu agire/selezionato, verde giusto/imparato, rosso sbagliato, giallo serie/incerto, viola accuratezza) | lettura dello stato prima del testo, a colpo d'occhio sul telefono; il tono giocoso aiuta a tornare |
| Forma | Pulsanti «premibili» con bordo inferiore spesso che si abbassa al tocco, raggi grandi | su touch ciò che si preme deve sembrare premibile e rispondere |
| Carattere | Sans arrotondato ma leggibile a peso alto (cambiato in 23 minuti quando il primo era troppo tondo) | corpi piccoli su telefono, pesi alti per i numeri |
| Parole | Italiano, «tu», brevi, letterali («Imparate», «Accuratezza», «Filtro mirato»); festa sui successi, fatti asciutti sugli errori («Errata.») | l'utente pensa in quei termini; ogni revisione ha accorciato, mai allungato |
| Modalità esame | Nessun riscontro, timer complessivo, soglia vera, revisione dopo | prepararsi alle regole vere |

## Che cosa non andava nemmeno lì

Le contraddizioni aperte (`casi.md` §9) mostrano dove l'app tradisce le proprie ragioni: contrasti bassi e zoom bloccato, lingue mescolate nell'esame, perimetro incoerente tra le schermate, conteggi scritti a mano, riscontro non regolabile. Anche il risultato «giusto» va rivisto con i criteri.

## Che cosa cambierebbe in altri contesti

Gli esempi mostrano il ragionamento, non una ricetta né un elenco di categorie da cui scegliere: parti comunque dall'analisi della richiesta (SKILL.md §1). E dove un contesto chiede meno colore o meno festa, non chiede meno cura: gerarchia netta, un punto focale e stati rifiniti servono ovunque (`esecuzione-visiva.md`).

**Dashboard da desktop per un docente che segue una classe.**
Il momento che conta non è «iniziare», ma «capire chi è in difficoltà e su che cosa». Un pulsante eroe non ha senso: servono confronto e densità (tabella o matrice studenti × argomenti, ordinabile, con i peggiori in evidenza), testo più piccolo ma denso, filtri combinabili invece di una tendina. Niente coriandoli: è uno strumento di lavoro. Le parole diventano quelle del docente («padronanza», «argomento», «insufficiente» possono essere letterali per lui). Criterio 1 resta centrale, con un vincolo nuovo: i dati di ciascuno studente non devono diventare una classifica pubblica.

**Una pagina da leggere (spiegazione lunga, guida, articolo).**
Il momento che conta è la lettura continua. Colori saturi e pulsanti 3D distraggono; servono una colonna di misura comoda, un carattere da lettura a peso normale, gerarchia per titoli, pochissimi elementi interattivi. Il riscontro sensoriale sparisce. Il «perché» non è più riempitivo: è il contenuto.

**Un'app per un gruppo (studio insieme, squadra).**
Il riscontro può diventare sociale, e con esso i rischi: confronti che scoraggiano chi è indietro, numeri che si possono gonfiare per figurare. Le domande del criterio 1 diventano più severe («si può salire in classifica senza imparare?»). Può servire più di un'azione principale (studiare da solo, sfidare, vedere il gruppo) e un'attenzione nuova a chi vede i dati di chi.

**Uno strumento professionale calmo e serio (gestionale, sanità, finanza).**
Errori costosi: l'errore va reso evidente e spiegato, non neutralizzato; le azioni irreversibili chiedono conferma; niente festa, tono sobrio, colori desaturati con il colore riservato agli stati. Il «perimetro piccolo» sopravvive in un'altra forma («le tue 5 pratiche aperte» invece di «tutte le 3000»), e sopravvive l'idea di un'azione principale per schermata.

**Un'app per costruire un'abitudine (benessere, lingua da mantenere).**
Qui la serie di giorni, che nell'OFA era rumore, misura proprio l'obiettivo: può stare in alto, purché conti l'attività vera e non l'apertura. Un obiettivo piccolo che si chiude ogni giorno può essere giusto, perché il problema è cominciare.

**Stesso studente, ma un esame di Analisi o un orale.**
Risposte aperte: la banca di parole non regge, serve autovalutazione dopo la soluzione o risposta numerica; il tempo misura il calcolo, non il ricordo; gli argomenti hanno prerequisiti, quindi mescolare solo ciò che è sbloccato. Per il *che cosa* vedi `metodo-di-studio`.

## Se l'utente chiede esplicitamente «come l'app OFA»

Allora lo stile è un requisito, non una scelta da giustificare: la vecchia skill `design-e-copy` contiene token, componenti e frasi dell'app (con i contrasti corretti). Anche in quel caso, applica il processo alle decisioni che lo stile non copre: che cosa mostrare, quando, con quali parole per *quel* contenuto.
