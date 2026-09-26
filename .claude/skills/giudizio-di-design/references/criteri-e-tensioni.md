# Criteri e tensioni

I criteri con cui l'utente ha deciso, in ordine di peso: quante volte compaiono nella storia, quanto spesso hanno vinto in un conflitto, se sono sopravvissuti fino alla versione attuale. Sono **domande**: la risposta dipende dal contesto. Ogni criterio ha una tensione, cioè un altro valore legittimo che tira dalla parte opposta. Il lavoro di design è decidere, qui, quale dei due cede e quanto.

## Indice
1. I dieci criteri · 2. Matrice delle tensioni · 3. Come si scioglie una tensione · 4. Che cosa del contesto sposta l'equilibrio · 5. Una scheda di valutazione

---

## 1. I dieci criteri

### 1. Il numero misura davvero ciò che conta?
- *Domande.* Se l'utente sbaglia tutto per una settimana, sale? Si può farlo salire evitando il difficile, o solo aprendo l'app? Un dato mancante viene mostrato come zero? L'etichetta resterà vera quando cambiano i dati?
- *Tensione.* **Reattività e motivazione**: una misura severa resta ferma e scoraggia.
- *Come si è risolta.* Soglia onesta ma bassa; se è ferma, perimetro più piccolo e dichiarato (C02, C21). Mai una definizione più generosa, mai punti regalati (C01).
- *Si risolve diversamente quando…* la posta è alta e c'è il rischio di illudersi (soglia severa accanto a una reattiva); non esiste ancora una misura di competenza (un indicatore d'impegno onesto è accettabile); l'abitudine è l'obiettivo stesso (contarla è onesto).
- *Casi.* C01, C02, C16, C18, C19, C21, C32, C33.

### 2. Qual è l'unica cosa da fare qui?
- *Domande.* Aprendo senza pensarci, si sa che cosa premere? Chi prende questa decisione meglio, l'utente o il sistema? L'azione più pesante è anche la più protetta?
- *Tensione.* **Controllo e trasparenza**: chi sa quello che vuole non vuole essere guidato.
- *Come si è risolta.* Un'azione dominante; il controllo retrocede (tile secondarie, sottomenu, filtro) ma resta raggiungibile (C04, C22).
- *Si risolve diversamente quando…* gli utenti sono esperti con piani propri; il sistema che dovrebbe decidere non è affidabile; ci sono due compiti davvero alternativi (allora l'azione principale cambia con la fase).
- *Casi.* C04, C05, C13, C22, C30.

### 3. Si legge senza sforzo sul dispositivo reale?
- *Domande.* Su quale dispositivo, a che distanza, in che luce? Sto rimpicciolendo o troncando il contenuto utile per salvare una regola di layout?
- *Tensione.* **Densità e «tutto in vista»**.
- *Come si è risolta.* Struttura fissa (intestazione, barra d'azione), contenuto che scorre; si tagliano parole, non corpi (C06, C07). Rovesci immediati quando la leggibilità calava (C03, C25).
- *Si risolve diversamente quando…* chi usa deve confrontare molti valori alla scrivania (densità alta, testo piccolo ma non sotto i 12 px); due elementi devono stare visibili insieme (si taglia l'accessorio).
- *Casi.* C06, C07, C25, C26.

### 4. Il nome dice l'oggetto, nelle parole di chi legge?
- *Domande.* Chi legge sa che cosa viene contato senza spiegazione? È la sua parola o la mia? Due parole per una cosa, o una parola per due cose? Il nome regge se la funzione cresce?
- *Tensione.* **Personalità e tono di marca**; **precisione tecnica**.
- *Come si è risolta.* Il letterale vince; la personalità passa a colori, suoni e movimento (C03, C22).
- *Si risolve diversamente quando…* il pubblico è tecnico e il termine tecnico è la sua parola; due misure vanno distinte con precisione; il marchio ha un tono che il pubblico riconosce e cerca (anche allora, i nomi delle funzioni restano chiari).
- *Casi.* C03, C07, C09, C11, C22, C27.

### 5. Il riscontro è immediato e proporzionato a ciò che è successo?
- *Domande.* Il tono corrisponde al peso reale dell'evento? L'errore è informazione o giudizio? La festa premia una prestazione vera? Si può spegnere?
- *Tensione.* **Sobrietà** e **sovrastimolazione**.
- *Come si è risolta.* Per canale: parole asciutte, festa nel suono e nel movimento, crescente con le giuste di fila, con un interruttore (C08, C09, C23).
- *Si risolve diversamente quando…* il contesto è professionale o critico (la festa svaluta il compito; l'errore va reso evidente); l'utente è fragile (un incoraggiamento dopo errori ripetuti); l'ambiente è silenzioso (muto di default).
- *Casi.* C08, C09, C23, C24.

### 6. Che cosa mostrare, e quando?
- *Domande.* Serve all'azione di questa schermata? La forma regge i dati di oggi? Mostrarlo adesso aiuta o dà un indizio? Il dettaglio c'è, a un passo?
- *Tensione.* **Trasparenza totale**: l'utente vuole i propri dati, tutti.
- *Come si è risolta.* Strati (sintesi → statistiche → dettaglio) e rinvii (spiegazione dopo la risposta). Niente è nascosto del tutto (C11, C14, C17).
- *Si risolve diversamente quando…* si è nel primo apprendimento (mostrare prima lo schema); vedere gli errori scoraggia (dettaglio su richiesta, partire dai progressi); i dati sono enormi (aggregare prima).
- *Casi.* C11, C14, C17, C19, C20.

### 7. Il comportamento voluto è reso necessario, o solo chiesto?
- *Domande.* Sto raccomandando qualcosa che potrei rendere parte del gesto? La verifica costa passaggi in più?
- *Tensione.* **Attrito**.
- *Come si è risolta.* Si verifica con il gesto che si fa comunque (banca di parole, sicurezza dichiarata con l'invio) (C12, C15).
- *Si risolve diversamente quando…* la risposta è aperta e non verificabile in automatico; l'utente è disciplinato e la fiducia è più rapida.

### 8. Si adatta a questa persona e a questa fase?
- *Domande.* Il sistema usa ciò che sa di chi lo usa (velocità, errori, fase)? Un obiettivo si esaurisce?
- *Tensione.* **Prevedibilità**: ciò che si adatta può sembrare arbitrario.
- *Come si è risolta.* Complessità nel motore, interfaccia semplice (C05, C16); obiettivi che non si esauriscono (C10).
- *Si risolve diversamente quando…* l'utente deve fidarsi di un calcolo che lo riguarda (serve spiegarlo); i dati sono pochi (regole semplici finché non bastano).

### 9. Rispetta le regole del contesto vero?
- *Domande.* Se questo simula o prepara a qualcosa (un esame, una procedura), ne copia le regole?
- *Tensione.* **Riscontro immediato**.
- *Come si è risolta.* Modalità separate: allenamento con riscontro, simulazione senza, revisione dopo (C31, C18).

### 10. I dati sono al sicuro, e l'aiuto arriva dove serve?
- *Domande.* Un tocco sbagliato può far perdere il lavoro? L'aiuto appare dove si verifica il problema, e dice causa e rimedio?
- *Tensione.* **Pulizia per l'utente finale**.
- *Come si è risolta.* Pragmatismo: diagnosi visibile perché utente e sviluppatore coincidono (C28, C29).

---

## 2. Matrice delle tensioni

Righe e colonne: criteri. Nelle celle: come l'utente ha sciolto il conflitto (→) e quando lo scioglimento va rovesciato (↺).

| | 2 Un'azione | 3 Leggibilità | 4 Nome letterale | 5 Riscontro | 6 Quando mostrare |
|---|---|---|---|---|---|
| **1 Misura onesta** | → la metrica vera sta vicino all'azione, non la sostituisce · ↺ se la metrica è ancora ferma, l'azione conta di più | → una barra onesta e grande batte tre numeri piccoli · ↺ un analista vuole tutti i numeri | → il nome dice che cosa è contato («imparate», non «maestria») · ↺ due misure simili richiedono nomi tecnici distinti | → la festa premia solo prestazioni vere · ↺ se tutto premia, niente informa | → «mai vista» invece di 0% · ↺ troppa verità subito può scoraggiare un principiante |
| **2 Un'azione** | | → azione fissa in basso, il resto scorre · ↺ quando l'azione non è unica, due pulsanti leggibili | → il sottotitolo dell'azione dice che cosa succederà · ↺ | → dopo la risposta, un solo pulsante per proseguire · ↺ | → il controllo retrocede, non sparisce · ↺ esperti: più percorsi in vista |
| **3 Leggibilità** | | | → si tagliano parole, non corpi · ↺ onboarding: servono più parole, e allora più spazio | → la festa non copre il testo · ↺ | → dettaglio in un'altra schermata invece di comprimerlo · ↺ |
| **4 Nome letterale** | | | | → parole asciutte, sensi festanti · ↺ marchio caldo: un po' di calore verbale su eventi veri | → il perché va dove si sceglie, non nell'etichetta · ↺ utenti nuovi: il perché è informazione |
| **5 Riscontro** | | | | | → in esame niente riscontro; revisione dopo · ↺ ansia da esame: un gradino intermedio |

Tensioni fuori tabella: **7 contro attrito** (verificare con il gesto già necessario); **8 contro prevedibilità** (adattare nel motore, spiegare quando riguarda la fiducia); **10 contro pulizia** (dipende da chi è l'utente).

## 3. Come si scioglie una tensione: le mosse dell'utente

Prima di sacrificare un criterio, cerca una mossa che li tenga entrambi:
- **Gerarchia invece di eliminazione.** Semplicità e controllo convivono se il controllo retrocede (C04).
- **Canale invece di compromesso.** Sobrietà e festa convivono se passano per canali diversi (C23).
- **Perimetro invece di definizione.** Onestà e reattività convivono se si restringe il denominatore dichiarandolo (C21).
- **Momento invece di rinuncia.** Trasparenza e misura pulita convivono se l'informazione arriva dopo (C14).
- **Struttura fissa, contenuto mobile.** Leggibilità e «tutto raggiungibile» convivono (C06).
- **Motore complesso, vista semplice.** Adattamento e prevedibilità convivono (C16).
- **Gesto che verifica.** Comportamento voluto e zero attrito convivono (C12, C15).

Se nessuna mossa funziona, scegli quale criterio cede e **scrivilo** nella presentazione del design (SKILL.md §5), con il segnale che ti farebbe tornare indietro.

## 4. Che cosa del contesto sposta l'equilibrio

| Se nel contesto… | allora di solito pesa di più… | e cede… |
|---|---|---|
| una persona sola, di cui conosci il profilo | 8 adattamento, 1 misura onesta su di lei | generalità, test su molti |
| molti utenti diversi | prove e misure sull'uso, default robusti | adattamento spinto al singolo |
| telefono, uso in movimento, pochi secondi | 2 un'azione, 3 leggibilità | 6 densità, trasparenza immediata |
| scrivania, analisi, confronto | 6 trasparenza, densità | 2 un'azione unica |
| lettura lunga, calma | 3 leggibilità del testo, ritmo | riscontro sensoriale |
| strumento professionale, errori costosi | 9 regole vere, 10 sicurezza, errore evidente | festa, tono leggero |
| gruppo o classe | chiarezza dei ruoli, privacy dei dati di ciascuno, confronto giusto | numeri personali in primo piano |
| principiante, fragile, a rischio abbandono | reattività della misura, calore dopo errori ripetuti | severità della misura |
| esperto, vuole la verità | misura severa, controllo, dettaglio | guida, semplificazione |
| obiettivo = abitudine | contare l'abitudine, farla vedere | la competenza come unico numero |
| vicino a una scadenza vera | 9 realismo, consolidare | novità, varietà |

## 5. Scheda di valutazione (da compilare per 2-3 alternative)

Per ciascuna alternativa, una riga per criterio rilevante (non tutti lo sono sempre):

```
Contesto: chi · obiettivo · dispositivo/situazione · momento che conta
Alternativa A: …           Alternativa B: …           Alternativa C: …
Crit. 1 misura:  + / − perché
Crit. 2 azione:  …
Crit. 3 lettura: …
…
Guadagna: …   Sacrifica: …
Scelta: … perché, in questo contesto, …
La cambierei se osservo: …
```

Non serve mostrarla all'utente per intero: ne bastano le conclusioni (SKILL.md §5).
