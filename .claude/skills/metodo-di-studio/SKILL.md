---
name: metodo-di-studio
description: Il metodo di studio personale dell'utente, nato dall'app con cui ha superato l'OFA di Inglese del Politecnico di Milano. Le sue parti migliori sono tre: un algoritmo di ripasso che misura davvero quanto sa, un modo preciso di organizzare e mostrare le informazioni, e una gamification "vera" basata su quanto ne sa (padronanza %, accuratezza, profilo per argomento) invece di livelli, XP o streak. Il metodo va adattato a qualsiasi esame. Usa questa skill ogni volta che l'utente deve preparare un esame o un test, qualunque sia il formato — esami universitari di ingegneria (Analisi, Fisica, Geometria, Informatica…), TOLC, test d'ingresso, OFA, orali, certificazioni — e anche quando chiede un piano di studio, di essere interrogato in chat, esercizi, flashcard, statistiche sui progressi, simulazioni d'esame o un'app/sito per studiare. Usala anche se non nomina il "metodo": basta che si parli di studiare o prepararsi per una prova.
---

# Il mio metodo di studio

Questa skill descrive **come studia l'utente e cosa funziona con lui**. Viene dall'app *OFA Polimi Prep* (repo `raffaele-ando/OfaEnglish`), che ha modificato molte volte finché non gli ha funzionato perfettamente; ha superato l'OFA di Inglese studiando solo da lì.

L'utente è stato esplicito su quali sono le parti migliori, cioè quelle su cui ha lavorato di più:
1. **l'algoritmo**, cioè come si scelgono le domande e come si misura se una cosa è davvero imparata;
2. **come sono strutturate e mostrate le informazioni**: cosa vede, dove e quando;
3. **la gamification vera**: la motivazione viene dal vedere **quanto ne sa** (padronanza, accuratezza, argomenti forti e deboli), **non** da livelli immaginari, XP o streak.

L'OFA era un quiz a risposta multipla. Un esame di Analisi, un orale di Fisica o un esame di programmazione sono un'altra cosa. **I tre pilastri restano, la forma cambia**: ogni volta chiediti "come si misura *quanto ne so* in questo esame, e come glielo mostro?".

---

## 1. Profilo dello studente

- **L'attenzione cala con la monotonia e la costanza è difficile.** Nel codice l'utente ha descritto la modalità principale come pensata per *"ADHD & Low Conscientiousness"*. Da qui: poco attrito, sessioni brevi, varietà, un riscontro immediato.
- **Lo motivano i dati veri su di sé.** Vuole vedere quanto sa, dove sbaglia, se sta migliorando. Gli piacciono le spiegazioni con il perché e le basi scientifiche (SM-2, interleaving).
- **Studia soprattutto dal telefono**, in tema scuro e con i dati sincronizzati.
- **Lingua**: italiano. Tono diretto e concreto.

## 2. Pilastro 1: l'algoritmo (misurare davvero quanto sa)

L'idea centrale: **una cosa è imparata solo se la ricorda bene, non se ci azzecca.** Ogni elemento di studio (domanda, esercizio-tipo, definizione, dimostrazione) ha uno **stato** che si aggiorna a ogni tentativo:

- risposte giuste, sbagliate e **omesse** (contate a parte);
- **voto di qualità da 0 a 5** dell'ultimo richiamo, calcolato da **segnali oggettivi** e non solo dall'autovalutazione:
  - quanto tempo ha impiegato rispetto al tempo atteso;
  - se ha cambiato risposta, partendo da quella giusta o da una sbagliata;
  - quanto ha esitato prima di confermare;
  - quanti tentativi o aiuti gli sono serviti;
  - e infine la **sicurezza dichiarata**: *Indovino* toglie 2 punti, *Incerto* 0,6, *Sicuro* niente;
- **SM-2**: con un voto di almeno 3 l'intervallo di ripasso cresce (1 giorno → 6 giorni → intervallo × facilità); sotto 3 si riparte da zero. Si tengono anche la **facilità** attuale e quella **precedente**, per mostrare la tendenza;
- **velocità personale**: il tempo atteso si adatta a lui con una media mobile esponenziale.

**Scelta di cosa studiare (modalità Smart, quella predefinita):** punteggio = *urgenza di ripasso* + *debolezza* (tasso di errore, bassa facilità) + *un po' di casualità* per mescolare gli argomenti. Si prendono i primi 10 elementi. Esistono anche Standard (solo SM-2), Weakness (solo errori), Blitz (tempo stretto) e Active Recall (produrre la risposta senza opzioni).

Formule, soglie e come adattarle a esercizi, domande aperte e chat sono in **`references/algoritmo.md`**. Il codice collaudato è in `assets/codice-ofa/spacedRepetition.ts`.

## 3. Pilastro 2: come strutturare e mostrare le informazioni

**La struttura dei dati viene prima di tutto.** Ogni elemento è etichettato con **categoria** (tipo di prova: es. Grammatica / Traduzione), **argomento**, **livello o difficoltà** e appartenenza al **nucleo**. Tutte le viste nascono da queste etichette più lo stato dell'algoritmo. Senza etichette buone non esistono radar, filtri né modalità Weakness.

**Ogni informazione compare nel momento in cui serve:**

| Momento | Cosa si mostra |
|---|---|
| **Apertura** | Un solo pulsante per iniziare (Smart). Subito sotto: **% padronanza** e **accuratezza** del materiale scelto (nucleo o tutto) |
| **Durante la domanda** | Numero della domanda, barra di avanzamento, timer. Niente altro che distragga |
| **Subito dopo la risposta** | Giusto/sbagliato, **spiegazione** (perché è giusta e perché la trappola è sbagliata), **categoria, argomento e livello**. Se è sbagliata: *Riprova* finché non è giusta |
| **Fine sessione** | "X su N **al primo tentativo**": conta solo il richiamo vero |
| **Simulazione** | Durante: nessun feedback. Alla fine: punteggio rispetto alla soglia, tempo impiegato, risultato per categoria, **omesse** separate, revisione domanda per domanda con argomento e spiegazione |
| **Statistiche** | Numeri di sintesi → profilo per argomento → per livello → andamento nel tempo → dettaglio per elemento ordinato **dai peggiori** |

Tutti i dettagli (definizioni delle metriche, colori semaforo, dettaglio per elemento, come tradurre le viste per esercizi e orali) sono in **`references/informazioni-e-statistiche.md`**.

## 4. Pilastro 3: la gamification vera (quanto ne so)

La motivazione viene da **numeri che misurano l'apprendimento reale** e che si muovono solo se sta imparando davvero:

- **% di padronanza (Domande Imparate)**: elementi imparati sul totale, dove "imparato" vuol dire che l'ultimo richiamo è stato buono (voto ≥ 3). Se poi sbaglia, l'elemento torna "da imparare": il numero è onesto.
- **Accuratezza**: giuste sul totale dei tentativi, globale, per argomento e per elemento, con colori semaforo (oltre 70% verde, 40–70% giallo, sotto 40% rosso).
- **Profilo per argomento (radar)** e barre **imparate / da imparare** per argomento e per livello: si vede a colpo d'occhio dove è forte e dove no.
- **Confidenza per elemento** (dalla facilità SM-2, da 0 a 100%) con **freccia di tendenza** ↑ ↓ – rispetto al tentativo precedente.
- **Simulazioni**: esami superati, **pass rate**, **record**, distanza dalla soglia di sicurezza. È la misura di prontezza.
- **Tempo e attività**: domande al giorno e minuti studiati. È un dato informativo, non una quota.

**Cosa non lo motiva (non costruirci sopra niente):** livelli e XP immaginari (anche con i 50 XP regalati all'inizio), serie di giorni consecutivi, obiettivi giornalieri fissi o sfide a fasi. Nell'app sono stati provati, tolti dal menu e relegati in fondo alle statistiche; l'utente ha detto chiaramente che non sono quello che funziona con lui. Suoni, coriandoli e vibrazione possono restare come **reazione immediata** a una risposta giusta o a un esame superato, ma non sono una metrica e non devono sostituire i numeri veri.

## 5. Principi della sessione

- **Si parte con un tocco solo**: un pulsante che avvia subito la modalità Smart. Ogni scelta prima di cominciare è attrito.
- **Sessioni brevi e con un tempo**: circa 10 domande, 30 s a domanda (Blitz 10 s). Per esercizi lunghi: un esercizio-tipo o un blocco di 20–25 minuti.
- **Dopo un errore si riprova finché non è giusta**, con l'opzione sbagliata disattivata.
- **Richiamo attivo**: produrre la risposta invece di riconoscerla; il suggerimento dice solo l'**argomento**, gli aiuti arrivano a scalini.
- **Argomenti mescolati** e dritti sui punti deboli.
- **Prima il nucleo** (il materiale più vicino all'esame vero, per l'OFA le prime 60 domande), poi il resto a blocchi per argomento.
- **Simulazione più severa del vero**: formato e tempo reali, soglia più alta (25/30 invece di 24/30), nessun feedback, navigazione libera tra le domande.

## 6. Come lavorare quando arriva un esame nuovo

1. **Ricostruisci l'esame vero**: tipo di prova, durata, punteggio e penalità, soglia, data, materiali (i **temi d'esame passati** sono la fonte più preziosa). Se non lo sai, chiedi o cerca. Non inventare il formato di un esame universitario.
2. **Scegli l'adattamento**: leggi **`references/adattamento-per-esame.md`** (risposta multipla, TOLC con penalità, esercizi di ingegneria, teoria e orali, programmazione, memorizzazione, piano di studio).
3. **Definisci la struttura delle informazioni**: quali sono gli elementi, con quali etichette (categoria, argomento, livello, nucleo) e come si calcola "imparato" per questo esame.
4. **Scegli cosa produrre**, partendo dalla cosa più piccola che permette di iniziare oggi: interrogazione in chat (§7), piano di studio, materiale (domande, esercizi con aiuti, flashcard), oppure un'app (leggi **`references/app-blueprint.md`** e riusa `assets/codice-ofa/`). Se non è chiaro, proponi una sola opzione consigliata e parti.
5. **Costruisci prima il nucleo**, poi il resto a blocchi per argomento.
6. **Controlla la qualità**: **`references/banco-domande.md`**, più `node scripts/audit_bank.cjs <file>` per i banchi a risposta multipla.

## 7. Modalità tutor in chat

In chat non si possono misurare i tempi, ma l'algoritmo e la gamification vera si applicano lo stesso:
- **Parti subito** con la prima domanda: una o due righe di contesto, niente menu.
- **Blocchi da circa 10**, con contatore "3/10". **Una domanda alla volta.**
- **Chiedi la sicurezza (I / In / S).** Voto approssimato: giusta + S = 5; giusta + In ≈ 4, oppure 3 se era lenta o incompleta; giusta + I = sotto 3, cioè da ripassare; con un aiuto circa 3; sbagliata = 0.
- **Dopo ogni risposta**: giusto o sbagliato, spiegazione breve, **argomento**. Se è sbagliata: secondo tentativo o una variante vicina prima di andare avanti.
- **Tieni lo stato di ogni elemento** e **riproponi** più avanti, in forma diversa, quelli con voto sotto 3.
- **Mostra quanto ne sa, non punti**: alla fine del blocco dai un riepilogo con "X/10 al primo tentativo", accuratezza per argomento, cosa è ora *imparato* e cosa resta *da imparare*, e la tendenza rispetto alla sessione precedente se la conosci. Esempio: `Cinematica 4/5 ✅ · Dinamica 2/5 ⚠️ → da ripassare: attrito, piano inclinato`.
- Se puoi salvare file o memoria, **tieni un registro dei progressi** (elemento, argomento, voto, data) per ripartire dai punti deboli.

## 8. Cose da ricordare sempre

- I tre pilastri: **algoritmo onesto**, **informazioni strutturate e mostrate al momento giusto**, **gamification basata su quanto ne sa**.
- Il metodo si adatta, non si copia: per ogni esame ridefinisci gli elementi, le etichette e cosa vuol dire "imparato".
- Niente livelli, XP, streak o quote giornalieri come motore della motivazione.
- Ciò che è giusto per caso torna indietro. Il formato reale va ricostruito con esattezza e la simulazione va resa più severa.
