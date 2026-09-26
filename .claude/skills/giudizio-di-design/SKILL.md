---
name: giudizio-di-design
description: "Il metodo dell'utente per progettare interfacce: capire che cosa vuole davvero chi le userà, decidere che cosa costruire, che cosa mostrare e quando, come far interagire, che riscontro dare e che cosa tagliare, e poi dare a tutto questo una forma visiva curata e intenzionale (gerarchia, punto focale, spazio, tipografia, colore, stati rifiniti), ricavata dal contesto invece che da uno stile fisso. Nasce dalla storia delle decisioni della sua app OFA: inquadrare, generare alternative davvero diverse, valutarle con i suoi criteri, scegliere dicendo perché, eseguire con mestiere, confrontare il risultato con ciò che si farebbe senza metodo. Usala ogni volta che l'utente chiede di progettare, costruire, rifare o migliorare un'interfaccia, un'app, un sito, una pagina, un componente, un flusso, un artifact o una dashboard, o di decidere quali funzioni o informazioni includere o togliere. Usala anche per piccole modifiche e anche se non dice «design». Per i testi dell'interfaccia va usata insieme a copy-interfaccia."
---

# Giudizio di design

Per l'utente il design comincia dalla **scelta di che cosa fare e di come farlo**: quali informazioni mostrare e quando, quale azione mettere davanti, che riscontro dare, che cosa togliere. Ma non finisce lì. Una scelta giusta eseguita in modo piatto perde contro un'interfaccia generica ben rifinita, perché l'utente giudica ciò che vede. **La forma visiva fa parte del lavoro**, e va decisa con lo stesso giudizio.

## Perché esiste

Una skill di stile produce sempre la stessa interfaccia. Il giudizio produce interfacce diverse quando il contesto è diverso, e deve farlo. L'app OFA (`/home/user/OfaEnglish`) è **un risultato** di questo metodo: una persona sola, un obiettivo (superare un test d'inglese), un telefono, un profilo di attenzione preciso. Un altro contesto deve portare a un design diverso, nella struttura e nell'aspetto. Quando ti accorgi di ricopiare l'app, o qualunque esempio, fermati e torna al processo.

**Niente in questa skill è una verità assoluta.** Criteri, euristiche e ricette sono il punto di partenza di chi sa il mestiere; si rompono quando il contesto lo giustifica, dicendo che cosa si rompe e perché. Senza questo spazio non c'è creatività, solo ripetizione.

I criteri vengono da 33 decisioni reali ricostruite dalla storia dei commit e dai commenti nel codice (`references/casi.md`). Sono domande con tensioni, non regole: ogni caso dice anche **quando la stessa logica porterebbe altrove**.

Skill sorelle: `metodo-di-studio` dice *che cosa* conta in uno strumento di studio; `copy-interfaccia` dice come scrivere **tutti** i testi visibili. Usale quando il compito le tocca: questa non le ripete.

## 1. Il processo

È il modo in cui l'utente ha deciso davvero, più i passi che mancavano all'esecuzione.

1. **Inquadra e analizza la richiesta.** Chi lo userà (e quanti), per quale obiettivo reale, su quale dispositivo e in che situazione, e **il momento che conta**: l'istante in cui il design riesce o fallisce. Poi: che cosa deve *capire* chi guarda (e in quanto tempo), che cosa deve *sentire*, che cosa deve *fare*, che cosa la cosa deve *ottenere* per chi l'ha chiesta, che cosa la rende *distinta*. Se non lo sai, chiedilo o dichiara l'ipotesi. Da queste risposte nasce tutto il resto, aspetto compreso (`references/esecuzione-visiva.md` §1).
2. **Leggi i segnali e i vincoli.** Che cosa esiste già (codice, commenti, storia dei commit, testi, marchio), che cosa l'utente ha già provato e tolto, quali dati ci sono oggi (pochi dati → forme semplici), quali regole esterne valgono.
3. **Genera 2-3 alternative davvero diverse** nella struttura o nella strategia: che cosa sta in primo piano, chi decide (utente o sistema), quanta informazione, in quale momento.
4. **Valutale con i criteri** (§2): che cosa guadagna e che cosa sacrifica ciascuna. Un'alternativa che non sacrifica niente di solito non è stata pensata fino in fondo.
5. **Scegli e di' perché**, in questo contesto.
6. **Scegli la direzione visiva.** Due idee diverse nel concetto, non nei parametri (§3), una riga ciascuna; scegline una dicendo perché.
7. **Decidi come capiresti di aver sbagliato**: un segnale osservabile («il numero resta fermo per una settimana», «premono sempre l'uscita di emergenza», «il titolo va a capo su 320 px»).
8. **Costruisci la versione più piccola, eseguita con cura.** Piccola nel perimetro, non nella rifinitura: poche schermate, ma finite (§3).
9. **Confronto con il default** (obbligatorio). Prima di consegnare, immagina concretamente che cosa farebbe Claude senza questa skill per la stessa richiesta, e se puoi abbozzalo e guardalo. Il tuo deve essere **chiaramente migliore** per gerarchia, intenzione e adeguatezza a chi guarda e alla sua situazione. Un pareggio è una sconfitta: rivedi prima di consegnare (`references/esecuzione-visiva.md` §16).
10. **Sottrai e correggi** guardando l'uso reale, non l'entusiasmo di averlo appena costruito.

**Abitudini dell'utente da usare come euristiche** (evidenza in `references/casi.md`):
- *Parti ricco, poi togli.* Molto del suo lavoro è stato ridurre descrizioni, frasi da coach, metriche finte, tile, grafici. Si tolgono parole ed elementi, **non la cura visiva**: nell'OFA pulsanti premibili, colori con un significato, suoni e coriandoli sono stati aggiunti e rifiniti, mai tolti.
- *Prova una teoria con nome, poi giudicala dai fatti.* Tienila se fa misurare o adattare meglio; lasciala se serve a manipolare la percezione del progresso.
- *Torna indietro subito se la leggibilità peggiora.* Le prove estetiche non hanno diritto all'inerzia.
- *Nel dubbio sposta, non cancellare.* Però prima o poi decidi: i residui diventano rumore.
- *Se il numero non si muove, cambia il perimetro, non la misura.*
- *Sostituisci l'esortazione con un meccanismo.* Se un comportamento conta, rendilo parte del gesto.
- *Chiama le cose con il loro nome e rinominale quando la funzione cambia.*
- *Rifinisci prima ciò che si usa di più.*

## 2. I criteri, come domande in tensione

In ordine di peso nella storia. Ogni riga dice come si è risolta lì e quando dovrebbe risolversi diversamente. Matrice completa in `references/criteri-e-tensioni.md`.

1. **Il numero misura davvero ciò che conta?** (non sale sbagliando, non si inventa un dato) ↔ *si muove abbastanza presto da motivare?* Lì: soglia onesta ma bassa; se è ferma, perimetro più piccolo. Diverso: con poste alte e rischio di illudersi, soglia severa accanto a un numero reattivo; dove l'abitudine *è* l'obiettivo, contare l'abitudine è onesto.
2. **Qual è l'unica cosa da fare qui?** ↔ *l'utente ha bisogno di controllo?* Lì: un'azione dominante, il sistema decide, il resto retrocesso ma raggiungibile. Diverso: con utenti esperti o un sistema non ancora affidabile, 2-3 percorsi di pari peso; se la fase cambia, l'azione principale cambia con essa.
3. **Si legge senza sforzo sul dispositivo reale?** ↔ *deve stare tutto in vista?* Lì: struttura fissa, contenuto che scorre, si tagliano parole e non corpi. Diverso: chi analizza alla scrivania vuole densità; se due cose devono restare visibili insieme, si taglia l'accessorio.
4. **Il nome dice l'oggetto, nelle parole di chi legge?** ↔ *personalità, precisione tecnica.* Lì: letterale batte elegante. Diverso: per un pubblico tecnico il termine tecnico *è* la parola letterale.
5. **Il riscontro è immediato e proporzionato a ciò che è successo davvero?** ↔ *sobrietà, sovrastimolazione.* Lì: parole asciutte, festa nei canali non verbali, errore come informazione. Diverso: in ambito professionale o critico la festa svaluta il compito; con utenti fragili serve più calore dopo errori ripetuti; sempre un modo per spegnere.
6. **Che cosa mostrare, e quando?** ↔ *trasparenza totale.* Lì: sintesi dove si decide, dettaglio a richiesta, spiegazione dopo la risposta. Diverso: nel primo apprendimento mostrare l'argomento prima aiuta.
7. **Il comportamento voluto è reso necessario o solo chiesto?** ↔ *attrito.* Lì: verificare con il gesto che si fa comunque. Diverso: quando la verifica non regge, accettare l'autovalutazione.
8. **Si adatta a questa persona e a questa fase?** ↔ *prevedibilità.* Lì: la complessità nel motore, l'interfaccia semplice.
9. **Rispetta le regole del contesto vero?** ↔ *riscontro immediato.* Lì: modalità separate.
10. **I dati sono al sicuro e l'aiuto arriva dove serve?** ↔ *pulizia.*

Tensioni ricorrenti e come l'utente le scioglie: *onestà contro motivazione* rendendo il progresso vero più visibile, mai gonfiandolo; *onestà contro pulizia visiva* dicendo la verità in un'etichetta corta o in un'icona «i», mai in un paragrafo; *semplicità contro controllo* con la gerarchia, non con l'eliminazione; *sobrietà contro festa* per canale; *leggibilità contro stare in uno schermo* fissando la struttura e lasciando scorrere il contenuto.

## 3. Esecuzione visiva

I criteri decidono *che cosa* c'è in una schermata; l'esecuzione decide se si capisce in un secondo e se sembra finita. Qui c'era il buco: una struttura ragionevole, resa con blocchi uguali, testo grigio e spiegazioni, perde contro qualunque interfaccia ben rifinita. **«Non copiare uno stile» non vuol dire «sii sobrio»**: vuol dire scegliere l'aspetto con una ragione invece di riceverlo da un'abitudine. Sobrio è una scelta possibile, non il default.

**Ricava la forma dall'analisi, non da un repertorio.** Traduci le risposte del passo 1 in tre-quattro qualità (per esempio «immediata, stabile, discreta» o «memorabile, calda, personale») e chiediti con quali principi del mestiere si ottengono: gerarchia, contrasto, scala, ritmo, griglia, spazio negativo, tipografia, relazioni di colore, Gestalt, movimento come significato, equilibrio tra coerenza ed espressione (`references/esecuzione-visiva.md` §1-2). Nessuna tabella di tipi di prodotto: la stessa frase detta da un'altra persona in un'altra situazione porta altrove.

**Inventa la direzione.** Una direzione è un'idea (una metafora del contenuto, un materiale, il momento di chi guarda, un'attesa da tradire, un principio che comanda), non una palette. Due direzioni che differiscono solo per colore, raggio o carattere sono la stessa.

**Poi esegui con mestiere.** Sono euristiche forti, non leggi; ciascuna ha un perché:
- **Un punto focale per schermata** (o per zona, quando si confronta): l'occhio sa dove atterrare.
- **Gerarchia con dimensione, peso e spazio**, non con scatole e bordi ovunque: ogni bordo è rumore da scavalcare.
- **Meno elementi, spazio generoso, raggruppati per vicinanza**: il vuoto dà importanza e dice che cosa sta insieme.
- **Elementi visivi veri quando portano significato**: un anello, un numero grande, un'illustrazione che dice il momento, in SVG o CSS, fatti bene. Meglio nessuno che uno goffo o decorativo.
- **Un accento con un compito coerente**: se colora tutto, non segnala niente.
- **Stati che sembrano finiti**: selezionato, vuoto, caricamento, errore, focus, ciascuno disegnato.
- **Niente muri di testo esplicativo.** L'onestà sui dati sta in un'etichetta corta o in un'icona «i»; il perché delle tue scelte va nel messaggio all'utente, mai nell'interfaccia.
- **Niente «dashboard da AI»**: tutto in card uguali con bordo, etichette grigie sopra ogni numero, gradienti viola, emoji come icone. Sono segni di una scelta non fatta (`references/esecuzione-visiva.md` §15).

Guida pratica (scale di spazi e tipografia, colore, eroi in SVG, icone senza dipendenze, stati, movimento, rifinitura, confronto con il default): `references/esecuzione-visiva.md`. Un esempio di esecuzione curata, da leggere per il ragionamento e non da imitare: `references/esempio-immagini.md`.

## 4. Le parole

Le parole sono design e si scelgono con gli stessi criteri (soprattutto il 4: il nome dice l'oggetto, nelle parole di chi legge). **Per tutti i testi visibili usa la skill `copy-interfaccia`.** Dalla storia dell'OFA restano tre verifiche rapide: letterale batte elegante («Maestria» è durata 23 minuti, C03); il meccanismo, non la promessa (C07); se tolgo la frase si perde un'informazione o un'azione? Se no, via (C09).

## 5. Autocritica

Rivedi ogni schermata sotto i criteri, non sotto il ricordo di un'app. Domande che nella storia hanno fatto togliere qualcosa (servono a capire se *qui* è utile, non a vietarlo):
- Il progresso che mostro è guadagnato, o regalato? Se l'utente sbaglia tutto per una settimana, questo numero sale?
- Aprendo senza pensarci, si sa che cosa premere? Chi dovrebbe decidere, l'utente o il sistema?
- Questa informazione serve all'azione di questa schermata? La forma regge i dati che ho *oggi*?
- Sto chiedendo per favore qualcosa che potrei rendere parte del gesto?
- Ogni colore, forma o bordo ha un solo significato? Ciò che sembra premibile lo è?
- L'azione irreversibile è protetta almeno quanto quelle banali?

E sulla forma:
- Sfocando la schermata, che cosa si vede per primo? È ciò che l'analisi voleva?
- Sai dire in una riga l'idea della direzione visiva e dove spendi l'espressione?
- C'è un paragrafo che spiega il sistema? Diventa un'etichetta, un'icona «i», o sparisce.
- C'è qualcosa lì per default (card uguali, etichette grigie, gradiente, emoji)?
- **Confronto con il default:** è chiaramente più chiaro, più intenzionale e più adatto a chi guarda di ciò che Claude farebbe senza questa skill? Se no, rivedi.

L'app dell'utente stessa viola i suoi criteri dove non sono stati applicati di proposito: esercizio utile in `references/casi.md` (§Contraddizioni aperte). Poi le verifiche che non dipendono dal gusto (`references/verifiche-oggettive.md`):
```bash
node scripts/segnali_copy.cjs src index.html   # problemi oggettivi + domande sui testi
node scripts/contrasto.cjs "#testo:#sfondo"    # testo 4,5:1; --grafica per barre/icone/focus 3:1
```

### Stai ripetendo lo stesso design?
- Le alternative di struttura differiscono solo per colore, raggio o carattere: **non sono alternative**. Cambia che cosa sta in primo piano, chi decide, quanta informazione, in che momento. Lo stesso vale per le direzioni visive: cambia l'idea, non i parametri.
- Non sapresti dire quale elemento del contesto ha fatto vincere la scelta: l'hai presa per abitudine.
- Il risultato somiglia all'OFA o a un esempio visto: chiediti quale ragione di quel contesto vale anche qui. Allontanarsene vuol dire cambiare idea, non abbassare l'intensità.

## 6. Come presentare un design

Quando consegni un design o una modifica non banale, aggiungi **nel messaggio all'utente** (mai dentro l'interfaccia) 2-5 righe: le alternative considerate e perché quella scelta vince in questo contesto, la direzione visiva scelta e perché, le euristiche che hai rotto e perché, il segnale che ti farebbe cambiare idea. Per esempio: «Ho considerato (a) tre percorsi di pari peso e (b) un'unica azione con il resto in un menu. Ho scelto (b) perché usa l'app di corsa dal telefono e l'algoritmo sa già cosa proporre. Direzione: un solo numero enorme in un carattere graziato, tutto il resto attenuato, invece di un cruscotto a schede, perché deve capire in un secondo a che punto è. Se vedo che apre sempre il menu, torno ad (a).» Non serve un saggio.

## Riferimenti
- `references/esecuzione-visiva.md`: dall'analisi alla forma, i principi del mestiere, come inventare una direzione, gerarchia, spazio, tipografia, colore, eroi in SVG, icone, stati, movimento, onestà in forma visiva, rifinitura, segni di una scelta non fatta, confronto con il default.
- `references/esempio-immagini.md` e `assets/esempio-funnel-mobile/`: un esempio di esecuzione curata giudicato buono dall'utente; da leggere per il ragionamento, non per l'aspetto né per il contenuto.
- `references/casi.md`: i 33 casi (situazione → opzioni → scelta → criterio → quando diverso), più le contraddizioni aperte.
- `references/criteri-e-tensioni.md`: criteri completi, matrice delle tensioni, condizioni per risolverle altrimenti.
- `references/esempio-ofa.md`: l'app OFA come **un** esempio risolto, con le ragioni per cui andava bene lì. Non è un modello da copiare.
- `references/verifiche-oggettive.md`: accessibilità e onestà dei dati, e come usare gli script.
