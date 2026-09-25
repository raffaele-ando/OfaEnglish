# Report completo: OFA Polimi Prep (OfaEnglish)

> Analisi di tutto il repository `raffaele-ando/OfaEnglish`: contenuti didattici, qualità delle domande, confronto con il test OFA reale, funzionalità dell'app e stato tecnico del codice.
> Data dell'analisi: 25 settembre 2026. Ultimo commit analizzato: `0a7163d` (9 settembre 2026).

---

## 0. In breve

| | |
|---|---|
| **Cos'è** | Una web app (PWA, React 19 + Vite + Firebase) per allenarsi all'**OFA di Inglese del Politecnico di Milano**, con un'interfaccia in stile Duolingo |
| **Database** | **606 domande** a scelta multipla con 4 opzioni: 375 di grammatica e 231 di traduzione dall'italiano all'inglese, su 31 argomenti grammaticali, livelli CEFR **A1 → B1** |
| **Simulatore** | 30 domande in 15 minuti, soglia **25/30**. Il test reale chiede **24/30**, quindi il simulatore è volutamente un po' più severo |
| **Correttezza** | **Nessuna risposta segnata come corretta è sbagliata** su 606. Ci sono 82 segnalazioni minori su 79 domande (13%), quasi tutte distrattori "troppo corretti" o metadati imprecisi |
| **Motore di studio** | Ripetizione dilazionata SM-2 con voto continuo (0–5) calcolato da tempo di risposta, cambi di opzione ed esitazione; 6 modalità di pratica |
| **Stato tecnico** | Typecheck e build **passano**. Ci sono alcuni problemi pratici (lockfile non allineato, file di lavoro rimasti in root, limite di 1 MB del documento Firestore) |
| **Perché ha funzionato** | Il banco copre in modo sistematico il sillabo A1–B1 che l'OFA misura e allena proprio le trappole tipiche di chi parla italiano. In più il simulatore è più difficile dell'esame vero |

---

## 1. Il sito: identità e storia

- **Nome**: *OFA Polimi Prep* (`metadata.json`, `manifest.json`). È nato come applet di **Google AI Studio**: lo si capisce dal nome del pacchetto `react-example`, da `.env.example` con `GEMINI_API_KEY` e dai commenti su `DISABLE_HMR` in `vite.config.ts`.
- **Stack**: React 19, TypeScript 5.8, Vite 6, Tailwind CSS 4, `motion` per le animazioni, `recharts` per i grafici, `lucide-react` per le icone, `canvas-confetti`, Firebase Auth (Google) e Firestore.
- **Storia**: 39 commit su 10 giorni di lavoro, dal 23 luglio al 9 settembre 2026, tutti di `raffaele-ando`. Il database di domande è cresciuto a tappe:

| Data | Commit | Domande |
|---|---|---|
| 23/07 | `b7740f2` progetto iniziale | 50 |
| 25/07 | `6a061a9` | 56 |
| 27/07 | `b21f33f` / `ccb753e` | 116 → 216 |
| 24/08 | `792dbe1` | 378 |
| 30/08 | `f314d3c` | **606** |
| 09/09 | `0a7163d` selezione del corpus ("Primo Corpus" = prime 60) | 606 |

Il codice sorgente vero e proprio sta in `src/`: 10 componenti, 5 moduli in `lib/`, un hook e `data/questions.ts`, che da solo occupa 9.103 righe.

---

## 2. Il test OFA reale e il simulatore dell'app a confronto

| Aspetto | **Test reale** (sezione Inglese del TOL Polimi) | **Simulatore dell'app** (`ExamMode.tsx`) |
|---|---|---|
| Numero di domande | 30 a scelta multipla | 30 a scelta multipla ✅ |
| Tempo | 15 minuti | 15 minuti ✅ |
| Soglia per evitare l'OFA | **almeno 24 risposte esatte su 30** | **25/30**, cioè un punto in più ✅ (margine di sicurezza) |
| Punteggio | +1 per risposta esatta, **−0,25 per risposta errata**, 0 per risposta omessa (vale per la graduatoria) | +1 per risposta esatta, nessuna penalità ⚠️ |
| Feedback | nessuno durante la prova | nessuno durante la prova ✅ |
| Navigazione | libera tra le domande | libera, avanti e indietro ✅ |
| Peso sul TOL | 1/3 | — |

**Cosa significa in pratica.** La soglia dell'OFA conta le risposte *esatte*, non il punteggio netto. Rispondere a caso quindi non abbassa il numero di risposte esatte. Anche per la graduatoria il valore atteso di una risposta tirata a caso su 4 opzioni resta leggermente positivo: 0,25 − 0,75 × 0,25 = +0,06. Il simulatore ignora la penalità, ma per l'OFA non cambia niente. Il suo vantaggio vero è la soglia a 25: se superi 25/30 nell'app, hai un punto di margine sul test reale.

**Nota per il 2026/27**: gli OFA sono stati aboliti per tutte le materie tranne l'Inglese. Quello di Inglese si recupera entro il primo anno, con una certificazione accettata dall'Ateneo, con un test presso enti convenzionati o con corsi di 40 ore.
Fonti: [Futura – Bando Polimi 2026/27](https://futura.study/blog/ingegneria/bando-ammissione-ingegneria-polimi-2026-27-tolc-i/), [Supermat – OFA Polimi 2026](https://supermat.it/test-ingegneria/ofa-polimi/).

---

## 3. Il database delle domande in numeri

### 3.1 Composizione

| Dimensione | Valori |
|---|---|
| Totale | **606** domande, ID da `q1` a `q606` senza buchi né duplicati, tutte con 4 opzioni |
| Categoria | **Grammatica 375 (62%)**, **Traduzione 231 (38%)** |
| Livello CEFR | **B1 286 (47%)**, A1 182 (30%), A2 138 (23%) |
| Formato del prompt | 361 completamenti ("Complete: '…_____…'"), 232 traduzioni ("Translate '…'"), 9 "scegli la frase corretta", 4 altri |
| Spiegazioni | presenti in tutte le domande, in media 48 caratteri (da 7 in su), quindi molto sintetiche |

| | A1 | A2 | B1 |
|---|---|---|---|
| Grammatica | 93 | 78 | 204 |
| Traduzione | 89 | 60 | 82 |

### 3.2 I 31 argomenti grammaticali

| # | Argomento | Domande | Livello prevalente | Nel "Primo Corpus" (60) |
|---|---|---|---|---|
| 1 | Gerunds vs Infinitives | 30 | B1 | 0 |
| 2 | Present Simple | 28 | A1 | 6 |
| 3 | Quantifiers (some/any/much/many…) | 27 | A1 | 2 |
| 4 | Relative Clauses | 25 | B1 | 1 |
| 5 | Question Tags | 25 | B1 | 0 |
| 6 | Comparatives and Superlatives | 23 | A2 | 4 |
| 7 | First Conditional | 23 | B1 | 1 |
| 8 | Modals of Obligation and Advice | 22 | A2 | 0 |
| 9 | Used to | 22 | B1 | 0 |
| 10 | Present Continuous | 21 | A2 | 4 |
| 11 | Object Pronouns | 20 | A1 | 2 |
| 12 | Past Simple | 19 | A2 | **12** |
| 13 | Modals of Deduction | 19 | B1 | 1 |
| 14 | Past Continuous | 19 | A2 | 1 |
| 15 | Adverbs of Manner | 19 | A2 | 1 |
| 16 | Present Perfect | 18 | B1 | **15** |
| 17 | There is / There are | 18 | A1 | 4 |
| 18 | Questions and Origins | 18 | A1 | 1 |
| 19 | Possessive 's | 18 | A1 | 1 |
| 20 | Possessives | 18 | A1 | 0 |
| 21 | Demonstratives | 18 | A1 | 0 |
| 22 | Prepositions of Place | 18 | A1 | 0 |
| 23 | Imperative | 18 | A1 | 0 |
| 24 | Future: going to | 18 | A2 | 0 |
| 25 | Second Conditional | 18 | B1 | 0 |
| 26 | Third Conditional | 18 | B1 | 0 |
| 27 | Passive Voice | 18 | B1 | 0 |
| 28 | Reported Speech | 18 | B1 | 0 |
| 29 | Past Perfect | 18 | B1 | 0 |
| 30 | Prepositions of Time | 9 | B1 | 1 |
| 31 | Modals of Ability and Permission | 3 | B1 | 3 |

**Come è costruito il file.** Le prime 60 domande sono il nucleo originale. Da `q61` a circa `q216` c'è una prima espansione sugli stessi temi. Da `q217` in poi ogni argomento ha il suo blocco di circa 18 domande (9 di grammatica e 9 di traduzione), in ordine di sillabo A1 → A2 → B1. La parte finale (`q559`–`q606`) aggiunge approfondimenti B1 con spiegazioni più lunghe e glosse in italiano.

### 3.3 Il "Primo Corpus" (le prime 60 domande)

È il nucleo da cui è partito tutto, e l'app permette di allenarsi solo su quello. Il profilo è molto netto:

- **Present Perfect (15) e Past Simple (12) da soli fanno il 45%.** È il contrasto *"Sei mai stato…?" / "Sono stato in Africa nel 2009"* che mette in difficoltà l'italiano, perché il passato prossimo si traduce a volte in un modo e a volte nell'altro.
- Poi vengono Present Simple (6), There is/are (4), comparativi (4), Present Continuous (4) e modali di abilità e permesso (3).
- Livello: B1 27, A2 26, A1 7. È **più difficile** della media del banco.
- Categoria: 43 di grammatica e 17 di traduzione.

Se il nucleo ricalca le domande dell'esame vero, come fa pensare il nome, il messaggio è chiaro: **i tempi verbali, soprattutto la coppia Present Perfect / Past Simple, sono il cuore dell'OFA.**

---

## 4. Perché studiare solo da qui è bastato

1. **Copre per intero il sillabo che l'OFA misura.** I 31 argomenti sono in pratica l'indice di un libro di grammatica A1–B1 (tipo *English File* o *Murphy Essential/Intermediate*). Nessun argomento importante per un test di questo livello resta fuori.
2. **I distrattori sono costruiti sugli errori tipici di chi parla italiano.** Ogni distrattore è un calco dall'italiano. Qualche esempio contato nel database (sempre come opzione sbagliata, mai come risposta giusta):

| Trappola (interferenza dall'italiano) | Occorrenze come distrattore |
|---|---|
| *If I **would/will**…* nella frase con "if" | 16 |
| *Do I **can**…* / *can **to*** / *must **to*** / *musts* | 7 |
| *-ly* forzato: *fastly, goodly* | 7 |
| *didn't **used** to* | 6 |
| *since/from ten years* (al posto di *for*) | 5 |
| *said **me*** / *told **to** me* | 5 |
| *peoples, informations, furnitures, advices* | 5 |
| *more easy / baddest / more bigger* | 4 |
| *enjoy **to**, avoid **to**, finish **to*** | 4 |
| *did you **met** / didn't **went*** | 3 |
| ***Are** you ever been…*, *I **am** born* | 3 |
| *the book **who*** / *the man **which*** | 3 |

3. **Le traduzioni sono il 38% del banco.** Obbligano a passare dall'italiano all'inglese, che è proprio il passaggio dove nascono gli errori.
4. **Il simulatore è più severo del vero**: soglia a 25 contro 24, stesso tempo, nessun feedback.
5. **Il motore di studio segue principi solidi** (§6): ripetizione dilazionata SM-2, *active recall* (la modalità che nasconde le opzioni), *interleaving* (la modalità "Smart" mescola gli argomenti) e un voto di sicurezza (*Indovino / Incerto / Sicuro*) che non premia le risposte azzeccate per caso.
6. **L'ordine delle opzioni viene rimescolato a ogni domanda** (`shuffleQuestion`, algoritmo Fisher-Yates). Nel file sorgente la risposta giusta è la **A nell'89% dei casi** (542 su 606), ma grazie al rimescolamento nell'app non si può imparare "la posizione": bisogna imparare davvero la regola.

### 4.1 Le regole da ricordare (ricavate dal banco)

| Argomento | Regola chiave | Trappola tipica |
|---|---|---|
| Present Perfect / Past Simple | Esperienza senza data → *Have you ever been…?*; data o momento concluso (*in 2009, yesterday, last week*) → Past Simple | *I have been to Africa in 2009* ❌ |
| for / since | *for* + durata (*for ten years*), *since* + punto d'inizio (*since 2015*), sempre con il Present Perfect | *I live here since ten years* ❌ |
| Past Simple | Dopo *did/didn't* va la forma base | *Did you met…?* ❌ |
| Present Simple | 3ª persona singolare con **-s**; negativa e domanda con *does* + forma base | *She don't like* / *Does he works* ❌ |
| Present Continuous | Azione in corso adesso; mai con verbi di stato (*think* come opinione, *know*, *like*) | *I am knowing* ❌ |
| There is / are | *Is there a…?* (singolare), *Are there any…?* (plurale) | *There is people* ❌ |
| Quantifiers | *much* con i non numerabili, *many* con i numerabili; *some* nelle affermative e nelle offerte, *any* nelle negative e nelle domande | *many informations* ❌ |
| Comparativi | *-er than* per gli aggettivi corti, *more … than* per quelli lunghi; irregolari *good/better/best*, *bad/worse/worst* | *more easy*, *baddest* ❌ |
| Avverbi | *well* (non *goodly*), *fast* e *hard* invariati (*hardly* significa "a malapena") | *He drives fastly* ❌ |
| Modali | *must/have to* + forma base, niente *to* dopo i modali, *mustn't* = divieto, *don't have to* = non serve | *You must to go* ❌ |
| Deduzione | *must be* = sono sicuro che sì, *can't be* = sono sicuro che no, *might be* = forse | *It mustn't be him* ❌ |
| Going to | Intenzione o previsione basata su un'evidenza (*Look out! He's going to fall*) | — |
| First Conditional | *If* + present, *will* + verbo | *If it will rain* ❌ |
| Second Conditional | *If* + past, *would* + verbo; *If I were you* | *If I would have* ❌ |
| Third Conditional | *If* + had + participio, *would have* + participio | *If I would have known* ❌ |
| Passive | *be* + participio passato (*was built*) | *was build* ❌ |
| Reported speech | Nei test fai il *backshift* (*is → was*, *will → would*); *say* (senza "me"), *tell someone* | *He said me* ❌ |
| Past Perfect | L'azione più vecchia di due azioni passate: *had* + participio | — |
| Used to | *used to* = abitudine passata; *didn't use to*; *be/get used to + -ing* = essere abituato | *didn't used to* ❌ |
| Gerundio / infinito | *enjoy, avoid, finish, mind, can't stand* + **-ing**; *want, decide, hope, plan* + **to**; *stop/remember/try* cambiano significato | *I enjoy to swim* ❌ |
| Relative clauses | *who* per le persone, *which* per le cose, *that* per entrambe; *where* per i luoghi; nelle frasi tra virgole niente *that* | *the book who* ❌ |
| Question tags | Frase positiva → tag negativo e viceversa, stesso ausiliare (*I'm right, aren't I?*) | *She didn't go, didn't she?* ❌ |
| Possessivi | *my/your/his/her* + nome, *mine/yours/hers* da soli; *'s* per le persone (*Mr Smith's wife*) | *the wife of Mr Smith*, *your's* ❌ |
| Preposizioni | *at* + ora, *on* + giorno, *in* + mese/anno; *in/on/at* per i luoghi; *between* (due) e *among* (più di due) | *on 2009* ❌ |

---

## 5. Qualità delle domande

Ho letto tutte le 606 domande (divise in 4 blocchi controllati in parallelo, voce per voce) e ho affiancato controlli automatici.

### 5.1 Risultato

- ✅ **Risposte segnate come corrette sbagliate: 0 su 606.** È il dato più importante: il banco non insegna niente di sbagliato.
- ✅ Nessun ID duplicato, nessun indice fuori intervallo, nessuna opzione ripetuta dentro la stessa domanda.
- ⚠️ **82 segnalazioni su 79 domande (13%)**, tutte di gravità bassa o media:

| Tipo | N. | Cosa significa |
|---|---|---|
| **AMBIGUOUS** | 44 | Un distrattore è anch'esso inglese accettabile: *did* enfatico, present continuous per un programma, *has to* per la deduzione, *older* invece di *elder*, forme britanniche come *I haven't enough money*… |
| **WRONG_METADATA** | 16 | Argomento o livello sbagliato: *as soon as / until / in case* classificati come "Conditional", *news/furniture/police* come "Quantifiers", present simple base segnato B1 |
| **BAD_EXPLANATION** | 9 | Spiegazione confusa o contraddittoria (per esempio q10 contro q24 su *something/anything*) |
| **TYPO** | 7 | *Brasil* (q55), barre rovesciate visibili *That\'s* / *didn\'t* (q392, q395), spiegazioni metà in italiano e metà in inglese |
| **BAD_TRANSLATION** | 6 | La risposta non traduce bene l'italiano (q61 "Ha vissuto qui per dieci anni", q283 "vicino a" reso con *next to*, q515 senza "un pacchetto al giorno") |
| **WRONG_KEY** | **0** | — |

### 5.2 Difetti ricorrenti

1. **Troppa rigidità.** Alcune regole sono presentate come assolute ("always", "only gerund"), mentre l'inglese reale le rende opzionali: il backshift nel discorso indiretto, il past perfect quando la sequenza è già chiara, *can't stand to*, *used not to*. Per il test va bene (si sceglie la forma "da manuale"), ma conviene saperlo.
2. **Deduzioni con indizi deboli** (q553–q555): *must be* viene giustificato da indizi che reggerebbero anche *might*.
3. **Quasi duplicati**: 6 coppie hanno lo stesso prompt (q1/q45, q4/q35, q13/q24, q34/q51, q41/q54, q146/q349), più 2 molto simili (q481/q493, q539/q576). Il simulatore ha un filtro di similarità (soglia 0,45) che evita di proporne due insieme.
4. **Spiegazioni troppo brevi** nella parte centrale ("Advice.", "Prohibition.", "If + Past Simple."). Dicono la regola, ma non perché le altre opzioni sono sbagliate.
5. **Nessun indizio dalla lunghezza.** La risposta giusta è l'opzione più lunga solo nel 18% dei casi e la più corta nel 12% (a caso sarebbe circa il 25%): non si può indovinare guardando la lunghezza.

L'elenco completo, domanda per domanda, è nell'**Appendice A**.

---

## 6. Funzionalità dell'app

### 6.1 Schermate

| Schermata | Cosa fa |
|---|---|
| **Menu** | Serie di giorni consecutivi, % di padronanza (domande con ripetizione > 0), accuratezza, scelta del corpus (606 o Primo Corpus da 60), login Google, export e import in JSON, tema chiaro/scuro, audio on/off, pagina di debug di Firebase |
| **Inizia Sessione (Smart)** | 10 domande scelte combinando SM-2, punti deboli e un po' di casualità per mescolare gli argomenti |
| **Modalità Custom** | *Standard* (SM-2 classico), *Weakness* (le domande con più errori), *Blitz* (10 secondi a domanda), *Active Recall* (le opzioni sono nascoste e la frase va ricostruita con le parole, con suggerimento sull'argomento), *Filtro Mirato* (per corpus, categoria, livello o argomento) |
| **Simulazione Esame** | 30 domande, 15 minuti, soglia 25, navigazione libera, riepilogo finale con le risposte |
| **Statistiche** | Esami completati e superati, punteggio migliore, pass rate, radar delle abilità per argomento, grafico per livello, attività giornaliera e tempo di studio, dettaglio di ogni frase con filtri e ordinamento |

### 6.2 Il motore di apprendimento (`src/lib/spacedRepetition.ts`)

- **SM-2 con voto continuo.** Il voto da 0 a 5 non lo sceglie lo studente: lo calcola l'app da:
  - **latenza relativa**, cioè il tempo effettivo diviso per il tempo atteso. Il tempo atteso dipende dalla lunghezza della domanda (parole e caratteri), da una velocità di lettura di 180 parole al minuto e da 1,2 secondi per decidere, ed è corretto da un **fattore di velocità personale** aggiornato con una media mobile esponenziale;
  - **traiettoria dei clic**: rispondere subito giusto vale 5, cambiare idea partendo dalla risposta giusta vale circa 3,1–3,6, arrivare alla giusta partendo da una sbagliata vale circa 2,5–3,1;
  - **esitazione prima di confermare** (oltre 4 secondi porta una penalità);
  - **sicurezza dichiarata**: *Indovino* toglie 2 punti, *Incerto* 0,6.
- Con un voto di almeno 3 l'intervallo cresce (1 giorno, poi 6, poi intervallo × facilità); sotto 3 si riparte da zero. La facilità ha un minimo di 1,3.
- In pratica una risposta giusta ma lenta o tirata a caso **non conta come imparata**, ed è il motivo per cui questo metodo funziona meglio di un quiz normale.

### 6.3 Dati e sincronizzazione

- Tutto viene salvato in `localStorage` (`ofa_polimi_app_state`). Con il login Google lo stato viene sincronizzato su Firestore (`users/{uid}`), con un'unione intelligente: lo storico degli esami deduplicato per data, per ogni domanda vince l'aggiornamento più recente, per l'attività giornaliera si tiene il massimo.
- Le regole di Firestore sono corrette: ogni utente può leggere e scrivere solo il proprio documento.
- È una PWA: manifest, icona SVG, `display: standalone`. Suoni generati con la Web Audio API, vibrazione con `navigator.vibrate`, coriandoli quando si fa una serie di risposte giuste o si supera un esame.

---

## 7. Stato tecnico del codice

| Verifica | Esito |
|---|---|
| `tsc --noEmit` | ✅ nessun errore |
| `vite build` | ✅ build riuscita, ma un unico bundle JS da **1,76 MB** (473 KB gzip) |
| `npm ci` | ❌ fallisce: `package-lock.json` non è allineato con `package.json`. In repo c'è anche un `bun.lock` |

### Problemi trovati (per priorità)

1. **Limite di 1 MiB del documento Firestore.** Ogni esame salva `questionLogs` con tutti i clic, circa **14 KB** a esame, e le statistiche di 606 domande pesano circa 144 KB. **Dopo una sessantina di simulazioni** la sincronizzazione cloud smette di funzionare **senza avvisare nessuno** (l'errore finisce solo in `console.error`). Soluzione: spostare lo storico in una sotto-collezione o togliere `clickEvents` dal cloud.
2. **Lockfile disallineato**: chi clona il progetto non può fare `npm ci`. Bisogna rigenerare `package-lock.json` e scegliere un solo package manager.
3. **Circa 30 file di lavoro in root** (`add_questions*.cjs`, `inspect_*.cjs/.txt`, `full_audit*.txt`, `part1.txt`, `initial_60.json`, che in realtà non è JSON valido ma un dump di testo, e altri), circa 700 KB in tutto. Andrebbero spostati in `scripts/` o eliminati.
4. **Due barre rovesciate letterali** nei prompt di q392 e q395 (`That\'s`, `didn\'t`) che si vedono sullo schermo.
5. **La simulazione non aggiorna davvero SM-2**: nelle risposte date in esame viene aggiornato solo `box`, mentre `interval` e `easiness` restano invariati. Inoltre `dailyActivity` aumenta sempre di 30, anche con domande lasciate in bianco.
6. **Effetto collaterale dentro un aggiornamento di stato**: quando scade il tempo, `handleFinish` viene chiamata dentro l'updater di `setTimeLeft`. In sviluppo, con `StrictMode`, l'esame può essere registrato due volte (in produzione no).
7. **Dipendenze non usate**: `@google/genai`, `express`, `dotenv` (residui di AI Studio). C'è anche `firebase-applet-config.json`, che punta a un altro progetto Firebase e non viene usato.
8. **La pagina di debug di Firebase** mostra la configurazione a chiunque. Per una web app Firebase non è un segreto (la chiave è pubblica per design e la protezione sono le regole), ma è un pulsante inutile per l'utente finale.
9. Dettagli minori: il nome del pacchetto è `react-example`; i conteggi "606" e "60" sono scritti a mano nell'interfaccia; per scegliere le domande dell'esame viene usato `sort(() => 0.5 - Math.random())`, un rimescolamento non uniforme (poco importante qui).

---

## 8. Raccomandazioni

**Per chi studia per l'OFA:**
1. Parti dal **Primo Corpus**: Present Perfect e Past Simple sono metà del nucleo.
2. Usa *Smart* ogni giorno, *Weakness* per rimediare e *Active Recall* sugli argomenti B1 (condizionali, discorso indiretto, gerundio/infinito).
3. Considerati pronto quando superi **stabilmente 25/30** nel simulatore: al test reale ne bastano 24.
4. Rispondi con sincerità *Indovino / Incerto / Sicuro*, perché l'algoritmo ti ripropone le domande azzeccate per caso.

**Per migliorare il progetto:**
1. Correggere le 82 segnalazioni dell'Appendice A, dando priorità ai 44 distrattori ambigui e alle 6 traduzioni imprecise.
2. Rimescolare le opzioni anche nel file sorgente (oggi la risposta giusta è la A nell'89% dei casi), così che eventuali export o riusi non ereditino lo sbilanciamento.
3. Allungare le spiegazioni della parte centrale, dicendo perché le altre opzioni sono sbagliate.
4. Aggiungere la penalità di −0,25 come opzione nel simulatore e mostrare anche il punteggio netto.
5. Risolvere il limite di Firestore, rigenerare il lockfile, pulire la root e dividere il bundle in più parti.

---

## Appendice A: tutte le segnalazioni, domanda per domanda

Legenda: **AMB** = ambigua, **TRAD** = traduzione imprecisa, **SPIEG** = spiegazione, **TYPO** = refuso, **META** = argomento o livello sbagliato. In nessun caso la risposta segnata come corretta è sbagliata.

### q1–q152 (29 segnalazioni)
| ID | Tipo | Problema | Correzione proposta |
|---|---|---|---|
| q10 | SPIEG | Dice che nelle offerte non si usa *anything*, ma q24 lo dà come risposta corretta; A è sbagliata per *for drink* | Spiegare che l'errore è *for drink* (serve *to drink*) |
| q11 | META | 3ª persona singolare del present simple segnata B1 | A1 |
| q13 | AMB | Anche *Is there some milk…?* è naturale | Distrattore *Is there a milk…?* |
| q20 | AMB + META | Anche *a clean plate* è corretta; il tema è *one/ones*, non i pronomi oggetto | Distrattore *a one*; topic "Pronouns (one/ones)" |
| q21 | META | *could be living* non è A2 e non è una deduzione | B1, "Modals of Possibility" |
| q25 | AMB | Anche *while he waited* è accettabile | Distrattore *while he waits* |
| q28 | META | Testa articoli e plurali, non i quantificatori | "Articles / Plural nouns" |
| q30 | AMB | Anche *It is leaving at 9* è naturale | Distrattore *will leaves* |
| q34 | AMB | *were coming* e *did come* (enfatico) sono grammaticali | *did came*, *comed* |
| q36 | AMB + META | Anche *is working for* traduce bene; il livello non è B1 | Distrattore *Steven working…*; A1 |
| q49 | AMB | *If it rains, we stay home* (zero conditional) è corretta | Distrattore *…we would stay* |
| q55 | TYPO | *Brasil* | *Brazil* |
| q61 | TRAD | "Ha vissuto qui per dieci anni" indica un periodo concluso | Prompt "Vive qui da dieci anni" |
| q70 | AMB | *She did buy…* (enfatico) è grammaticale | *She buyed…* |
| q94 | AMB | *in a long time* è americano standard | Distrattore *from* |
| q98 | AMB | *The train is leaving at 8* è accettabile | *The train leaving…* |
| q104 | TYPO | *the parents' house* non torna con l'indizio "my parents" | *my _____ house* |
| q106 | AMB | *I haven't many friends* è britannico corretto | *I don't have many friend* |
| q109 | AMB | *She has not much free time* è poco naturale: nessuna opzione è davvero buona | Riformulare con little/few |
| q113 | AMB + SPIEG | *What country* va bene quanto *Which*; la spiegazione si contraddice | Distrattore *Whose*; riscrivere la spiegazione |
| q136 | AMB | *by 11 PM* (= entro) è corretta | Distrattore *to* |
| q139 | META | *Can I help you?* è un'offerta o un permesso, non obbligo o consiglio | "Ability and Permission" |
| q140 | META | Testa *interested in*, non gerundio vs infinito | "Dependent Prepositions" |
| q145 | META | *can swim* è abilità | "Ability and Permission" |
| q147 | AMB | *I haven't enough money* è britannico corretto | *…enough of money* |
| q151 | TRAD | Manca la traduzione di "sparsi" | *…are scattered everywhere* |

### q153–q304 (13 segnalazioni)
| ID | Tipo | Problema | Correzione proposta |
|---|---|---|---|
| q203 | AMB | *Which is your favourite colour?* esiste in britannico | Distrattore *Whose* |
| q207 | AMB | *What/Which languages do you speak?* sono corrette | Distrattori sbagliati o indizio "(numero)" |
| q247 | TRAD | *I wait for them here* suona innaturale | *I'll wait / I'm waiting for them here* |
| q271 | AMB | *hiding in the bed* è plausibile | Distrattore *at/between* |
| q276 | AMB | *next to her two best friends* è corretta | Distrattore *among/above* |
| q278 | SPIEG | Definizione di *over* confusa | "*Over* = above/across" |
| q281 | AMB | *I am in the cinema* è accettabile | Distrattore *into* |
| q283 | TRAD | "vicino a" si traduce *near*, non *next to* | Chiave *near the bank* |
| q284 | TYPO | Spiegazione metà in italiano e metà in inglese | Una lingua sola |
| q286 | AMB | *put … into the wardrobe* è corretto | Distrattore *to the wardrobe* |
| q287 | AMB | *in the station* è possibile | Distrattore *into/by* |
| q292 | SPIEG | "Negative commands always start with Don't" non è vero | "usually" |
| q300 | SPIEG | È *listen* che vuole *to*, non "ascoltare" | Correggere il soggetto della regola |

### q305–q456 (17 segnalazioni)
| ID | Tipo | Problema | Correzione proposta |
|---|---|---|---|
| q306 | AMB | *No smoking in this room* è un divieto naturale | Distrattore *Smoke not…* |
| q316 | SPIEG | *have intention to* è un calco che non esiste | "Avere intenzione di" = *be going to* |
| q319 | TRAD | "Stiamo per" vuol dire *about to*; anche *We are buying* va bene | Prompt "Abbiamo intenzione di…"; nuovo distrattore |
| q324 | AMB | *I'm sure he will fall* è naturale | Togliere "Sono certo che" |
| q328 | META | Lo spazio testa *started to + forma base*, non il past continuous | Spostare lo spazio o cambiare topic |
| q338 | AMB | Anche le altre combinazioni con *while* sono corrette | Distrattori agrammaticali |
| q339 | AMB | *Did it rain hard…?* traduce bene | Aggiungere contesto |
| q347 | AMB | *Must I wear a suit?* è corretta (formale) | Distrattore *Do I must* |
| q349 | AMB | *You shouldn't smoke…* è accettabile senza un indizio di divieto | Aggiungere "It's against the rules" |
| q350 | AMB | *should wear glasses* ha senso; non si tratta di "obbligo esterno" | Nuovo distrattore; parlare di necessità |
| q357 | AMB | *Should I take off my shoes?* va bene | Distrattore *Do I must…* |
| q367 | AMB | *worked harder* è corretto | Distrattore *hardy* |
| q373 | TYPO | Virgola italiana in *Please, speak slowly* | *Please speak slowly* |
| q392 | TYPO | Barra rovesciata visibile: *That\'s* | *That's* |
| q395 | TYPO | Barra rovesciata visibile: *didn\'t* | *didn't* |
| q416 | AMB | *can't stand to wait* è accettato | Verbo solo con -ing (*can't help*) |
| q430 | AMB | *remembered locking* è corretto (con un altro significato) | Contesto univoco |

### q457–q606 (23 segnalazioni)
| ID | Tipo | Problema | Correzione proposta |
|---|---|---|---|
| q493 | AMB | *must* può restare invariato nel discorso indiretto | Distrattore *musts* |
| q501 | AMB | *finished* senza un'azione passata di riferimento è naturale | "By the time the manager called…" |
| q502 | SPIEG | Esempio in inglese goffo | "He had lunch first, so later he wasn't hungry" |
| q507 | AMB | *because she studied hard* è standard | Nuovo contesto |
| q515 | TRAD | Manca "un pacchetto al giorno" | *…smokes a pack a day* |
| q546 | AMB | *It has to be late* va bene per la deduzione | Distrattore *may to be* |
| q552 | AMB | *That has to be your new boss* va bene | *must to be* |
| q553 | AMB | Indizio debole: *might* è altrettanto valido | Rafforzare l'indizio |
| q554 | AMB | Indizio debole (*a ticket*) | *a cinema ticket…* |
| q555 | AMB | Luci spente può voler dire anche "sono usciti" | *It's 3 a.m.…* |
| q560 | SPIEG | Glossa italiana innaturale | "la prima volta che ho visto…" |
| q563 | SPIEG | *to test an experiment* non ha senso | "as an experiment" |
| q571 | META | *news was* non riguarda i quantificatori | "Countable/Uncountable" |
| q572 | META | *furniture is* | "Countable/Uncountable" |
| q574 | META | *police are* | "Collective nouns" |
| q583 | META | *as soon as* è una subordinata temporale | "Future Time Clauses" |
| q584 | META | *until* | "Future Time Clauses" |
| q586 | META | *in case* | "Future Time Clauses / In case" |
| q587 | META | *non appena* | "Future Time Clauses" |
| q597 | AMB | *older brother* è corretto, anzi più comune | Distrattore davvero sbagliato |
| q600 | AMB | *used not to* è corretto (britannico formale) | Distrattore *didn't used* |
| q601 | AMB | *Are you used to…?* rende il senso | *Have you used to…?* |
| q606 | TYPO | Spiegazione metà in inglese e metà in italiano | Una lingua sola |

---

## Appendice B: metodologia

- **Estrazione**: `src/data/questions.ts` convertito in JSON, con statistiche calcolate via script (distribuzioni, duplicati, similarità di Jaccard tra i prompt con la stessa funzione dell'app, bias di posizione e di lunghezza, conteggio dei distrattori-trappola con espressioni regolari).
- **Controllo linguistico**: le 606 domande sono state divise in 4 blocchi di circa 150, e ogni domanda è stata controllata una per una su chiave, ambiguità, traduzione, spiegazione, refusi e metadati.
- **Codice**: lettura di tutti i componenti e le librerie in `src/`, `npm install` (senza modificare il lockfile), `tsc --noEmit`, `vite build`, stima della dimensione del documento Firestore con un esame simulato.
- **Test reale**: confronto con fonti pubbliche aggiornate al bando 2026/27 (link al §2). La pagina ufficiale polimi.it non era raggiungibile durante l'analisi: per le regole definitive fa fede il bando ufficiale del Politecnico.
