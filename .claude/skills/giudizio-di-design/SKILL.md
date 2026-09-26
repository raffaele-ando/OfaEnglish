---
name: giudizio-di-design
description: "Il metodo dell'utente per DECIDERE il design: che cosa costruire, che cosa mostrare e quando, come far interagire, che riscontro dare, che cosa tagliare e con quali parole, ragionando dal contesto invece di riprodurre uno stile. Nasce dalla storia delle decisioni della sua app OFA (commit e commenti nel codice): inquadrare il problema, generare alternative davvero diverse, valutarle con i suoi criteri e le loro tensioni, scegliere dicendo perché, sottrarre e correggere. Usala ogni volta che l'utente chiede di progettare, costruire, rifare o migliorare un'interfaccia, un'app, un sito, una pagina, un componente, un flusso, un artifact o una dashboard, di scrivere o rivedere testi dell'interfaccia (pulsanti, errori, stati vuoti, titoli, notifiche), o di decidere quali funzioni o informazioni includere o togliere. Usala anche per piccole modifiche e anche se non dice «design»."
---

# Giudizio di design

Per l'utente il design non è la palette né il carattere. È **la scelta di che cosa fare e di come farlo**: quali informazioni mostrare e quando, quale azione mettere davanti, che riscontro dare, che cosa togliere, con quali parole. Questa skill insegna a fare quella scelta. Non descrive un aspetto da riprodurre.

## Perché esiste

Una skill di stile produce sempre la stessa interfaccia. Il giudizio invece produce interfacce diverse quando il contesto è diverso, e deve farlo. L'app OFA (`/home/user/OfaEnglish`) è **un risultato** di questo metodo: una persona sola, un obiettivo (superare un test d'inglese), un telefono, un profilo di attenzione preciso. Un altro contesto (un docente alla scrivania, un gruppo, uno strumento professionale, una pagina da leggere con calma) deve portare a un design diverso, ed è giusto così. Quando ti accorgi di ricopiare l'app, fermati e torna al processo.

I criteri vengono da 33 decisioni reali ricostruite dalla storia dei commit e dai commenti nel codice (`references/casi.md`). Sono domande con tensioni, non regole: ogni caso dice anche **quando la stessa logica porterebbe altrove**.

Skill sorella: `metodo-di-studio` dice *che cosa* conta in uno strumento di studio (misurare quanto sai, gamification sulla competenza vera, cominciare con poco). Se il compito riguarda lo studio, usale entrambe: questa non ripete il metodo.

## 1. Il processo di decisione

È il modo in cui l'utente ha deciso davvero, ricavato da ciò che ha aggiunto, tolto e rovesciato.

1. **Inquadra.** Chi lo userà (e quanti), per quale obiettivo reale, su quale dispositivo e in che situazione (in piedi sul tram, alla scrivania, in aula), e **il momento che conta**: l'istante in cui il design riesce o fallisce (nell'OFA: aprire l'app e sapere subito che cosa premere; ricevere il riscontro dopo una risposta). Se non lo sai, chiedilo o dichiara l'ipotesi.
2. **Leggi i segnali e i vincoli.** Che cosa esiste già (codice, commenti, storia dei commit, testi), che cosa l'utente ha già provato e tolto, quali dati sono disponibili oggi (pochi dati → forme semplici), quali regole esterne valgono (un esame vero, una norma, un marchio).
3. **Genera 2-3 alternative davvero diverse.** Diverse nella struttura o nella strategia: che cosa sta in primo piano, chi decide (utente o sistema), quanta informazione, in quale momento. Vedi il controllo «Stai ripetendo lo stesso design?» più sotto.
4. **Valutale con i criteri** (§2), rendendo esplicito che cosa ciascuna guadagna e che cosa sacrifica. Un'alternativa che non sacrifica niente di solito non è stata pensata fino in fondo.
5. **Scegli e di' perché**, in questo contesto.
6. **Decidi come capiresti di aver sbagliato**: un segnale osservabile. Per esempio: «il numero resta fermo per una settimana», «l'utente usa sempre l'uscita di emergenza», «il testo va a capo su 320 px», «premono sempre il pulsante verde».
7. **Costruisci la versione più piccola** che mette alla prova la scelta.
8. **Sottrai e correggi** guardando l'uso reale, non l'entusiasmo di averlo appena costruito.

**Abitudini dell'utente da usare come euristiche** (evidenza in `references/casi.md`):
- *Parti ricco, poi togli.* Molto del suo lavoro è stato ridurre: descrizioni, frasi da coach, tile, grafici.
- *Prova una teoria con nome, poi giudicala dai fatti.* Tienila se fa misurare meglio o adattare meglio alla persona (ripetizione spaziata, latenza, interleaving). Lasciala se serve a manipolare la percezione del progresso (punti regalati, barre che pulsano vicino al traguardo). Una teoria giustifica un tentativo, non una scelta definitiva.
- *Torna indietro subito se la leggibilità peggiora.* Due rovesci in meno di mezz'ora (testo compresso, nomi eleganti, un carattere troppo tondo). Le prove estetiche non hanno diritto all'inerzia.
- *Nel dubbio sposta, non cancellare.* Declassare è reversibile. Però prima o poi decidi: i residui diventano rumore.
- *Se il numero non si muove, cambia il perimetro, non la misura.* Un denominatore più piccolo e dichiarato, mai una definizione più generosa.
- *Sostituisci l'esortazione con un meccanismo.* Se un comportamento conta, rendilo parte del gesto invece di chiederlo per favore.
- *Chiama le cose con il loro nome e rinominale quando la funzione cambia.*
- *Rifinisci prima ciò che si usa di più.* E ricordati che le zone meno usate restano indietro.

## 2. I criteri, come domande in tensione

In ordine di peso nella storia. Ogni riga dice come si è risolta lì e quando dovrebbe risolversi diversamente. Matrice completa in `references/criteri-e-tensioni.md`.

1. **Il numero misura davvero ciò che conta?** (non sale sbagliando, non si inventa un dato) ↔ *si muove abbastanza presto da motivare?* Lì: soglia onesta ma bassa; se è ferma, perimetro più piccolo. Diverso: con poste alte e rischio di illudersi, soglia severa accanto a un numero reattivo; dove l'abitudine *è* l'obiettivo, contare l'abitudine è onesto.
2. **Qual è l'unica cosa da fare qui?** ↔ *l'utente ha bisogno di controllo?* Lì: un'azione dominante, il sistema decide, il resto retrocesso ma raggiungibile. Diverso: con utenti esperti che hanno piani propri, o quando il sistema non è ancora affidabile, 2-3 percorsi di pari peso; se la fase cambia (vicino all'esame), l'azione principale può cambiare con essa.
3. **Si legge senza sforzo sul dispositivo reale?** ↔ *deve stare tutto in vista?* Lì: struttura fissa, contenuto che scorre, si tagliano parole e non corpi. Diverso: un analista alla scrivania vuole densità; se due cose devono restare visibili insieme, si taglia l'accessorio.
4. **Il nome dice l'oggetto, nelle parole di chi legge?** ↔ *personalità, precisione tecnica.* Lì: letterale batte elegante. Diverso: per un pubblico tecnico il termine tecnico *è* la parola letterale; se due misure vanno distinte, un nome univoco batte uno semplice ma ambiguo.
5. **Il riscontro è immediato e proporzionato a ciò che è successo davvero?** ↔ *sobrietà, sovrastimolazione.* Lì: parole asciutte, festa nei canali non verbali, errore come informazione. Diverso: in ambito professionale o critico la festa svaluta il compito; con utenti fragili serve più calore dopo errori ripetuti; sempre un modo per spegnere.
6. **Che cosa mostrare, e quando?** ↔ *trasparenza totale.* Lì: sintesi dove si decide, dettaglio a richiesta, spiegazione dopo la risposta (prima sarebbe un indizio). Diverso: nel primo apprendimento mostrare l'argomento prima aiuta; con chi si agita vedendo gli errori, il dettaglio va su richiesta.
7. **Il comportamento voluto è reso necessario o solo chiesto?** ↔ *attrito.* Lì: verificare con il gesto che si fa comunque. Diverso: quando la verifica non regge (risposte aperte), accettare l'autovalutazione.
8. **Si adatta a questa persona e a questa fase?** ↔ *prevedibilità.* Lì: la complessità nel motore, l'interfaccia semplice.
9. **Rispetta le regole del contesto vero?** (un esame, una norma) ↔ *riscontro immediato.* Lì: modalità separate.
10. **I dati sono al sicuro e l'aiuto arriva dove serve?** ↔ *pulizia.* Lì: strumenti di diagnosi visibili perché utente e sviluppatore coincidono; per altri utenti andrebbero nascosti.

Tensioni ricorrenti e come l'utente le scioglie: *onestà contro motivazione* rendendo il progresso vero più visibile, mai gonfiandolo; *semplicità contro controllo* con la gerarchia, non con l'eliminazione; *sobrietà contro festa* per canale; *leggibilità contro stare in uno schermo* fissando la struttura e lasciando scorrere il contenuto.

## 3. Le parole sono design

Non esiste un glossario da applicare: le parole si scelgono con gli stessi criteri del resto. Per ogni testo:
- **È la parola più semplice per che cosa è o fa?** «Nasconde le opzioni» invece di «forza il cervello a recuperare…». Il meccanismo, non la promessa. (Ma se chi legge è nuovo e deve scegliere, il perché *è* informazione.)
- **La userebbe chi legge?** «Maestria» e «Precisione» sono durate 23 minuti: rilette, non si capiva che cosa contassero.
- **Un termine per concetto, un concetto per termine.** Se due parole indicano la stessa cosa, l'utente ne vede due; se una parola indica due cose, le confonde.
- **La lunghezza si guadagna il posto?** Test: se tolgo questa frase, si perde un'informazione o un'azione? Le frasi da coach («Ci sei quasi!») sono state tolte 20 minuti dopo averle scritte.
- **Il tono corrisponde al peso reale dell'evento?** Un errore frequente e innocuo non merita dramma né tifo; un esito serio non merita leggerezza; un successo vero può essere festeggiato.
- **Il nome regge se la funzione cresce?** «Category Master» è diventato «Filtro Mirato» quando ha cominciato a filtrare anche per livello.
- **Una lingua per schermata**, quella di chi usa; il contenuto resta nella sua.

Esempi e controesempi in `references/casi.md` (tema «Parole»).

## 4. Autocritica

Rivedi il tuo design come l'utente ha rivisto il suo: passa ogni schermata sotto i criteri, non sotto il ricordo di un'app. Domande che nella storia hanno fatto togliere qualcosa (servono a capire se *qui* è utile, non a vietarlo):
- Il progresso che mostro è guadagnato, o regalato?
- Se l'utente sbaglia tutto per una settimana, questo numero sale?
- Si può migliorare il proprio numero evitando le cose difficili?
- Aprendo senza pensarci, si sa che cosa premere? Chi dovrebbe decidere, l'utente o il sistema?
- Sto sacrificando la leggibilità per salvare una regola di layout?
- Questa informazione serve all'azione di questa schermata? La forma regge i dati che ho *oggi*?
- Mostrarlo adesso aiuta o dà un indizio che falsa la misura?
- Sto chiedendo per favore qualcosa che potrei rendere parte del gesto?
- Ogni colore, forma o bordo ha un solo significato? Ciò che sembra premibile lo è?
- L'azione irreversibile è protetta almeno quanto quelle banali?
- Dopo averlo raggiunto, questo obiettivo dice ancora qualcosa?

Anche l'app dell'utente viola i suoi criteri dove non sono stati applicati di proposito, ed è il modo migliore per allenarsi a vederli. Esempi reali: un «Indovino» veloce conta come imparato per un arrotondamento di penalità; il perimetro scelto vale in Home ma non in Statistiche, quindi la stessa etichetta mostra due numeri; «Confidenza» indica una misura interna e collide con la sicurezza dichiarata; i conteggi sono scritti a mano e mentiranno alla prossima domanda aggiunta; lo zoom è bloccato in un'app che ha messo la leggibilità al primo posto; il verdetto d'esame è l'unico testo duro in un'app neutra sugli errori. Elenco completo in `references/casi.md` (§Contraddizioni aperte).

Poi le verifiche che non dipendono dal gusto (`references/verifiche-oggettive.md`):
```bash
node scripts/segnali_copy.cjs src index.html   # problemi oggettivi + domande sui testi
node scripts/contrasto.cjs "#testo:#sfondo"    # testo 4,5:1; --grafica per barre/icone/focus 3:1
```

### Stai ripetendo lo stesso design?
- Le alternative differiscono solo per colore, raggio o carattere: **non sono alternative**. Cambia che cosa sta in primo piano, chi decide, quanta informazione, in che momento.
- Non sapresti dire quale elemento del contesto ha fatto vincere la scelta: l'hai presa per abitudine.
- Il risultato somiglia all'OFA (un pulsante eroe, tile con percentuali, pulsanti 3D, coriandoli) per un compito che non è studio su telefono: chiediti quale ragione di quel contesto vale anche qui.
- Hai scritto le stesse frasi dell'ultima volta: rileggile con le domande del §3.

## 5. Come presentare un design

Quando consegni un design o una modifica non banale, aggiungi in 2-5 righe le alternative considerate e perché quella scelta vince **in questo contesto**, più il segnale che ti farebbe cambiare idea. Per esempio: «Ho considerato (a) una home con tre percorsi di pari peso e (b) un'unica azione con il resto in un menu. Ho scelto (b) perché usa l'app di corsa dal telefono e l'algoritmo sa già cosa proporre; se vedo che apre sempre il menu, torno ad (a).» Rende visibile la varietà e la rende giustificata. Non serve un saggio.

## Riferimenti
- `references/casi.md`: i 33 casi (situazione → opzioni → scelta → criterio → quando diverso) per tema, più le contraddizioni aperte.
- `references/criteri-e-tensioni.md`: criteri completi, matrice delle tensioni, condizioni per risolverle altrimenti.
- `references/esempio-ofa.md`: l'app OFA come **un** esempio risolto, con le ragioni per cui andava bene lì e che cosa cambierebbe altrove. Non è un modello da copiare.
- `references/verifiche-oggettive.md`: accessibilità e onestà dei dati, e come usare gli script.
