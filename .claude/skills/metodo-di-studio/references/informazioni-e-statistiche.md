# Struttura e presentazione delle informazioni

Secondo e terzo pilastro: **cosa mostrare, dove, quando e come**. Qui sotto c'è la struttura esatta dell'app OFA, poi come tradurla per altri tipi di esame. La regola di fondo: ogni numero mostrato deve dire all'utente **quanto sa davvero** o **dove deve lavorare**.

Indice: 1. Etichette · 2. Menu · 3. Sessione · 4. Simulazione · 5. Statistiche · 6. Dettaglio per elemento · 7. Stile visivo dei dati · 8. Da non mostrare · 9. Adattamenti

---

## 1. Etichette: le fondamenta
Ogni elemento ha:
- **categoria**, cioè il tipo di prova (OFA: *Grammatica* / *Traduzione*);
- **argomento** (OFA: 31 argomenti grammaticali);
- **livello o difficoltà** (OFA: A1 / A2 / B1);
- **nucleo** sì o no (OFA: le prime 60 domande, il "Primo Corpus").

Da queste quattro etichette, più lo stato dell'algoritmo, nascono tutte le viste. Scegli etichette che corrispondano a **come l'esame vero divide la materia**, così che il radar e i filtri dicano cose utili ("mi mancano le serie", non "mi manca il capitolo 7").

## 2. Menu (apertura)
- In alto: nome dell'app, audio on/off, tema chiaro/scuro, login.
- **Scelta del materiale**: *Tutto (N)* oppure *Nucleo (N)*, con i numeri calcolati dai dati.
- Due indicatori grandi, calcolati **sul materiale scelto**:
  - **Padronanza %**, con una barra (elementi imparati sul totale);
  - **Accuratezza %** (giuste sul totale dei tentativi).
- Il pulsante principale **"Inizia Sessione"** (Smart). Sotto: *Modalità Custom*, *Simulazione Esame*, *Statistiche*. In fondo: export e import.

## 3. Sessione
- **Intestazione**: chiudi (X) · barra di avanzamento · timer (rosso negli ultimi 5 s).
- **Corpo**: "Domanda N", etichetta *Nucleo* se lo è, testo della domanda, opzioni (oppure le parole da riordinare in Active Recall, con il pulsante "Mostra suggerimento" che rivela solo *Argomento (Livello)*).
- **Conferma** con tre pulsanti: **Indovino / Incerto / Sicuro**. La scelta pesa sul voto.
- **Dopo la conferma**: pannello verde o rosso con la risposta giusta, la **spiegazione** e **categoria • argomento**. Se è sbagliata compare *Riprova*: l'opzione sbagliata resta disattivata e si ritenta.
- **Fine**: "Sessione completata! Hai risposto a X su N correttamente al primo tentativo."

## 4. Simulazione
- **Schermata iniziale** con le regole reali: numero di domande, tempo, soglia, "nessun feedback".
- **Durante**: timer globale, navigazione libera avanti e indietro, griglia delle domande.
- **Risultato**: SUPERATO o NON SUPERATO, **punteggio/totale**, tempo impiegato, poi la revisione di ogni domanda: la tua risposta e quella giusta, **Categoria • Argomento**, spiegazione. Le **omesse** sono segnate a parte.
- Si salva uno storico per ogni esame: data, punteggio, superato sì o no, tempo, risultati per categoria, dettaglio delle risposte.

## 5. Statistiche (dal generale al particolare)
1. **Riquadri di sintesi**: *Domande Imparate* (padronanza %), *Accuratezza*, *Esami completati*, *Esami superati* e *Pass Rate*, *Record* (miglior punteggio).
2. **Skill Profile (radar)**: accuratezza per argomento. Se i dati sono pochi: "Rispondi a più domande su diversi argomenti per vedere il tuo Skill Profile".
3. **Barre impilate per livello**: *Imparate* e *Da imparare*.
4. **Barre per argomento**: *Imparate* e *Da imparare*, ordinate per numero di elementi.
5. **Attività**: domande e minuti al giorno (ultimi 7 giorni oppure calendario di 4 settimane da lunedì a domenica). È un dato informativo, non un obiettivo.
6. **Errori più frequenti** (i 5 peggiori per tasso di errore).
7. Pulsante **"Dettaglio Frasi"** che apre il dettaglio per elemento.

## 6. Dettaglio per elemento
- **Filtri**: tutte le categorie, solo il nucleo, oppure una singola categoria. Ordinamento **"Peggiori prima" / "Migliori prima"** per confidenza. Contatore degli elementi filtrati.
- **Per ogni elemento**:
  - testo;
  - categoria • livello • argomento;
  - etichette con il numero di **giuste**, **sbagliate**, **omesse**;
  - telemetria: **cambi** di risposta, **tempo** dell'ultima risposta;
  - a destra, **Accuratezza %** colorata a semaforo;
  - barra di **Confidenza %** con la freccia di **tendenza** ↑ ↓ – (in un progetto nuovo normalizzala su un intervallo più largo, vedi `algoritmo.md` §8, altrimenti è quasi sempre al 100%);
  - "Mai visto" se non è ancora stato proposto.

## 7. Stile visivo dei dati
- Colori a **semaforo** coerenti ovunque: verde `#58CC02` oltre il 70%, giallo `#FFC800` tra il 40 e il 70%, rosso `#FF4B4B` sotto il 40%. Azzurro `#1CB0F6` per la confidenza e le azioni principali.
- Numeri grandi e in grassetto, etichette piccole in maiuscolo con spaziatura larga, riquadri con angoli arrotondati.
- Ogni grafico ha uno stato vuoto che spiega cosa fare per riempirlo.

## 8. Da non mostrare come motivazione
XP, livelli, "Fase N" delle sfide quotidiane, obiettivi giornalieri fissi, serie di giorni consecutivi. Nell'app OFA sono rimasti solo in fondo alle statistiche, come residuo: in un progetto nuovo **non vanno messi**. Se serve qualcosa che dia la sensazione di avanzare, usa la **padronanza che cresce** e la **distanza dalla soglia** delle simulazioni.

## 9. Adattamenti per altri esami
| Esame | Elemento | Etichette | Cosa vuol dire "imparato" | Viste in più |
|---|---|---|---|---|
| Risposta multipla (OFA, lingue) | domanda | categoria · argomento · livello · nucleo | ultimo voto ≥ 3 | — |
| TOLC con penalità | quesito | sezione · argomento · difficoltà | voto ≥ 3 entro il tempo per quesito | **punteggio netto**, saltate e sbagliate separate, tempo medio per quesito rispetto a quello disponibile |
| Esercizi di ingegneria | esercizio-tipo (con varianti) | argomento · metodo · frequenza nei temi passati | risolto con voto ≥ 3 in una variante nuova | **aiuti usati**, **errori per tipo** (concetto / metodo / calcolo / distrazione), copertura del nucleo dei temi |
| Teoria e orali | domanda aperta / dimostrazione | argomento · tipo (definizione, teorema, dimostrazione) | almeno l'80% dei punti chiave con sicurezza In o S | **punti chiave mancanti** più frequenti |
| Programmazione | esercizio di codice | argomento · tipo (output, bug, scrittura) | test superati con al massimo 1 aiuto | errori per tipo (sintassi, logica, complessità) |
| Memorizzazione | flashcard | argomento | voto ≥ 3 | elementi in scadenza oggi |

In chat, la versione ridotta del pannello statistiche a fine blocco è:
`Blocco: 7/10 al primo tentativo · Padronanza argomento X: 60% → 75% ↑ · Da ripassare: …`
