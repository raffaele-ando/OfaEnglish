---
name: design-e-copy
description: "Il gusto di design e la voce dei testi dell'utente, collaudati nella sua app OFA Polimi Prep (stile Duolingo, mobile-first): pulsanti 3D premibili, un colore per significato, un'azione principale per schermata, testo grande, feedback che festeggia i successi e resta neutro sugli errori, tema scuro completo, accessibilità (contrasto verificato, aree di tocco, niente solo-colore), e testi in italiano brevi, letterali, con il tu, maiuscola solo iniziale, un termine per concetto. Usa questa skill ogni volta che l'utente chiede di progettare, costruire, rifare o sistemare un'interfaccia, un'app, un sito, una pagina, un componente, una dashboard o un artifact (soprattutto strumenti di studio, ma anche qualsiasi altra UI), oppure di scrivere o rivedere testi dell'interfaccia: etichette dei pulsanti, messaggi di errore, stati vuoti, microcopy, titoli, notifiche. Usala anche se non dice «design» o «copy» e anche per piccole modifiche visive o di testo."
---

# Design e copy

Questa skill descrive **come l'utente vuole che siano fatte le interfacce e come devono parlare**. Viene dall'app *OFA Polimi Prep* (`/home/user/OfaEnglish`, repo `raffaele-ando/OfaEnglish`), un'app di studio in stile Duolingo che ha rifatto molte volte finché non gli ha funzionato perfettamente.

**Non è una copia dell'app.** Tieni i principi e le ricette collaudate; correggi i suoi difetti noti: contrasto insufficiente, italiano e inglese mescolati, maiuscole e sinonimi incoerenti, accessibilità mancante. Dove l'app e questa skill non coincidono, vale la skill.

**Skill sorella**: `metodo-di-studio` dice *cosa* mostrare in uno strumento di studio (gamification vera = quanto sai, non XP/livelli/serie di giorni; feedback che cresce con le giuste di fila nella sessione; si comincia con poco; un tocco per iniziare). Questa dice *come* mostrarlo e *con quali parole*. Se costruisci uno strumento di studio, usale entrambe e non ripetere qui le regole del metodo.

---

## Principi di design

Ognuno ha un perché, preso dalla storia dell'app. Sono criteri di giudizio, non regole meccaniche: se un caso nuovo li mette in tensione, scegli ciò che serve all'utente e spiega la scelta.

1. **Tattile, da toccare.** Ciò che si tocca è un blocco con bordo inferiore di 4 px più scuro che affonda alla pressione; un'opzione eliminata resta «premuta». Pulsanti 3D, coriandoli, suoni e vibrazione sono stati aggiunti e rifiniti, mai tolti: per lui l'interfaccia deve rispondere al dito. Corollario: **solo ciò che si tocca ha il bordo 3D** (nell'app anche le tile di sola lettura lo avevano e sembravano pulsanti).

2. **Un colore = un significato, sempre.** Blu agire/selezionato, verde giusto/imparato, rosso sbagliato/debole, giallo serie/record/incerto, viola accuratezza/pratica. Stato = tinta pallida + bordo vivo + testo scuro della stessa tinta. Quando l'hover blu è diventato grigio, il blu ha smesso di voler dire due cose.

3. **Contrasto verificato, non a occhio.** Il colore vivo stile Duolingo resta per barre, bordi, icone e coriandoli; il testo bianco va su un tono più scuro della stessa tinta, e sul giallo il testo è scuro. Nell'app il bianco su giallo era 1,55:1, su verde 2,09:1, su blu 2,44:1. La palette consigliata passa WCAG AA in chiaro e in scuro: `references/sistema-visivo.md`, verificabile con `scripts/contrasto.cjs`.

4. **Mai solo colore.** Giusto/sbagliato ha anche ✓/✗ e testo; il semaforo ha il numero; il timer rosso ha i secondi scritti.

5. **Mobile prima di tutto, una schermata, un'azione principale.** `100dvh` senza scroll di pagina: intestazione fissa, contenuto che scorre, barra azioni in basso. Una sola CTA grande all'altezza del pollice, il resto come tile secondarie o testo. Su desktop la stessa app in una cornice centrata. La home è diventata «un pulsante grande + due tile» (`c332a90`) perché ogni scelta prima di iniziare è attrito.

6. **Testo grande e pesante invece di far stare tutto.** Nunito Sans 700–900, domanda da `text-xl` a `text-3xl`, opzioni da `text-base` a `text-lg`, aree di tocco ≥ 44 px, testo mai sotto i 12 px. Il tentativo di stringere tutto a 9-10 px (`5c9cab7`) è stato annullato lo stesso giorno (`72b0a14`).

7. **I numeri veri davanti, mostrati con l'ambito.** In home ciò che misura quanto sa (Imparate %, Accuratezza %) con una barra; conteggi e ambito sempre visibili («Primo corpus · 60»), calcolati dai dati e mai scritti a mano. Cosa mostrare esattamente: `metodo-di-studio` §3-4.

8. **Premio che cresce, errore che non punisce.** Festa proporzionata a quanto va bene adesso (coriandoli e accordo che salgono con la serie nella sessione); per l'errore un suono basso morbido, «Errata.», e subito la strada per riprovare. Aiuti a scalini, mai un vicolo cieco («Troppo difficile? Usa le opzioni multiple»).

9. **Tema scuro gemello e movimento rispettoso.** Il tema scuro copre tutto, grafici e schermate di servizio compresi (nell'app i grafici restavano bianchi). Con `prefers-reduced-motion` niente rimbalzi, lampeggi né coriandoli (l'app lo rispettava solo per due coriandoli su quattro). Suono e vibrazione si possono spegnere.

10. **Pochi ingredienti, sempre gli stessi.** Scala di raggi fissa (32 cornice / 24 card / 20 pulsanti / 16 chip / 14 badge / pillole piene), quasi niente ombre (la profondità viene dal bordo), icone lucide dal tratto pesante, un'icona colorata accanto a un'etichetta tenue. I token sostituiscono i colori scritti a mano.

## Principi del copy

1. **Italiano, con il tu, imperativo diretto.** «Inizia», «Riprova», «Tocca le parole». L'inglese resta solo nei contenuti che sono inglesi per natura. **Una schermata, una lingua**: la simulazione tutta in inglese era la parte peggiore dell'app.
2. **Più corto possibile.** Etichette di 1-2 parole, descrizioni di 2-5, titoli di feedback di 1-3. Ogni revisione dell'app ha solo accorciato: «Risposta errata.» → «Errata.», «Riprova, puoi farcela!» → «Riprova!».
3. **Festa sui successi, fatti asciutti sugli errori.** Esclamativo ed emoji (🔥) solo per un successo vero; sugli errori una parola neutra e l'azione. Niente colpa, niente «peccato», niente tifo né prediche: li ha cancellati tutti.
4. **Nomi letterali, uno per concetto.** «Domande imparate», «Accuratezza», «Mai vista». «Maestria» e «Precisione» sono stati provati e tolti lo stesso giorno. Niente sinonimi per variare (frasi/domande, simulazione/mock exam, record/miglior punteggio).
5. **Maiuscola solo iniziale**, sempre; il maiuscolo dei pulsanti si fa con CSS, non nel sorgente.
6. **Sempre qualcosa da fare.** Errori e stati vuoti dicono il prossimo passo; i dettagli tecnici stanno in «Dettagli», mai in un `alert()`.
7. **Numeri all'italiana e dai dati.** «4,38», «72%», «30 s», «22 su 30», plurali corretti; mai «(606)» scritto a mano.
8. **Autovalutazione onesta nella voce dello studente**: «Indovino / Incerto / Sicuro».

Glossario completo usa/non usare, frasi pronte per ogni momento e traduzioni degli avanzi inglesi: `references/copy.md`.

---

## Come lavorare

### Quando progetti qualcosa di nuovo
1. **Capisci l'azione principale** di ogni schermata: cosa deve poter fare con un tocco? Tutto il resto è secondario. Per uno strumento di studio leggi anche `metodo-di-studio` (cosa mostrare e quando).
2. **Parti dai token** (`references/sistema-visivo.md` §3): copia le variabili CSS o il blocco `@theme` di Tailwind v4, con il tema scuro già incluso. Se sei in un artifact, carica prima anche la skill `artifact-design` e rispettane il contratto; questa skill decide lo stile.
3. **Componi con le ricette** di `references/componenti.md` (CTA eroe, triade di sicurezza, barra azioni con feedback, card opzione, tile, barre, selettore a segmenti, stati vuoti, conferme). Adatta, non incollare alla cieca.
4. **Scrivi i testi con `references/copy.md`**: glossario prima, frasi pronte poi. Scegli i termini del progetto una volta (es. «domanda», «simulazione») e usali ovunque. Se l'utente ha già un suo termine (per esempio «flashcard»), usa il suo, sempre quello: il glossario vale quando non c'è una scelta dell'utente.
5. **Per i grafici** carica la skill `dataviz`, poi applica §11 di `sistema-visivo.md`.
6. **Verifica** prima di consegnare: `node scripts/controlla_copy.cjs <cartella>`, `node scripts/contrasto.cjs` per ogni colore nuovo, e la checklist.

### Quando rivedi un'interfaccia o dei testi esistenti
1. Esegui gli script sul progetto:
   ```bash
   node <skill>/scripts/controlla_copy.cjs src index.html     # inglese, glossario, sinonimi, maiuscole, conteggi, zoom, lang, aria-label, alert
   node <skill>/scripts/contrasto.cjs "#FFFFFF:#1CB0F6" …     # coppie testo:sfondo trovate nel codice
   ```
2. Passa `references/checklist-accessibilita-e-revisione.md` per ciò che gli script non vedono.
3. Riporta **per gravità** (blocca l'uso → confonde → rifinitura), con file:riga, il testo attuale e la proposta esatta. Per i testi dai sempre la stringa sostitutiva, non solo il problema.
4. Se modifichi, cambia il minimo necessario per ogni problema e mantieni lo stile esistente del progetto dove non contrasta con questi principi.

### Quando scrivi solo testi (un messaggio, un'etichetta)
Rispondi con la stringa pronta (e al massimo un'alternativa), rispettando glossario, lunghezza, maiuscole e tono. Se il contesto non chiarisce il termine giusto, scegli quello del glossario.

---

## Riferimenti

| File | Quando leggerlo |
|---|---|
| `references/sistema-visivo.md` | palette con ruoli e coppie accessibili verificate, variabili CSS e Tailwind, tipografia, raggi, pulsante premibile, layout, tema scuro, movimento, icone, grafici, stati |
| `references/componenti.md` | ricette di componenti con codice |
| `references/copy.md` | voce, lunghezza, punteggiatura, maiuscole, numeri, glossario usa/non usare, frasi pronte, avanzi inglesi → italiano, parole da evitare |
| `references/checklist-accessibilita-e-revisione.md` | revisione prima della consegna o su richiesta |
| `assets/palette.json` | tutte le coppie colore consigliate, verificabili con `contrasto.cjs --palette` |
| `scripts/controlla_copy.cjs` | controllo automatico dei testi e di alcuni punti di accessibilità (`--help`) |
| `scripts/contrasto.cjs` | rapporto di contrasto WCAG, controllo palette, suggerimento della tonalità giusta (`--help`) |
