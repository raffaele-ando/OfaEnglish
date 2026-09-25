# Come costruire un'app di studio (schema preso dall'app OFA)

Leggi questo file quando l'utente vuole un'app o un sito per studiare. Il codice collaudato dell'app OFA è in `assets/codice-ofa/`: **riusalo e adattalo** invece di riscriverlo da zero. `spacedRepetition.ts` importa `../data/questions`, quindi aggiusta i percorsi e il tipo `Question` in base al nuovo esame.

Indice: 1. Stack · 2. Modello dei dati · 3. Schermate · 4. Algoritmi · 5. Stile grafico · 6. Dati e sincronizzazione · 7. Errori da non ripetere

---

## 1. Stack
React + TypeScript + Vite, Tailwind CSS 4, `motion` per le animazioni, `recharts` per radar e barre, `lucide-react` per le icone, `canvas-confetti`. Firebase Auth (Google) e Firestore per la sincronizzazione, opzionali. PWA con `manifest.json`, `display: standalone`.
Pensala **prima di tutto per il telefono**: `h-[100dvh]`, contenitore `max-w-3xl`, niente scroll orizzontale, pulsanti grandi.

## 2. Modello dei dati
Parti da `types.ts` dell'app OFA e generalizza la domanda con un campo `type` quando l'esame non è a sola risposta multipla:

```ts
type ItemType = 'mcq' | 'numeric' | 'steps' | 'open' | 'order' | 'flashcard';
interface Item {
  id: string;            // stabile: le statistiche dipendono dall'id
  type: ItemType;
  prompt: string;        // Markdown; per la matematica usa KaTeX
  options?: string[];    // mcq
  correctIndex?: number; // mcq
  answer?: number | string; tolerance?: number;         // numeric
  steps?: { text: string; hint?: string }[];            // steps / order
  keyPoints?: string[];  // open: la lista di punti chiave per l'autovalutazione
  hints?: string[];      // aiuti a scalini: argomento → metodo → primo passaggio → soluzione
  explanation: string;
  category: string; topic: string; level?: string;
  core?: boolean;        // fa parte del nucleo
  params?: Record<string, [number, number]>;            // varianti numeriche
}
```
Le statistiche per domanda sono quelle di `UserStats`: corrette, errate, omesse, ultima volta vista, ripetizioni, facilità, intervallo, qualità, tempi e cambi di opzione. Per gli esercizi aggiungi `hintsUsed` e `errorType` (`concetto | metodo | calcolo | distrazione`).

## 3. Schermate
| Schermata | Contenuto |
|---|---|
| **Menu** | Pulsante grande **"Inizia Sessione"** (Smart, parte subito). Sotto: Modalità Custom, Simulazione Esame, Statistiche. In alto: giorni consecutivi, % di padronanza, accuratezza, scelta tra nucleo e tutto il materiale, tema scuro, audio on/off, login |
| **Modalità Custom** | Standard (SM-2), Weakness, Blitz (10 s), Active Recall, Filtro mirato (nucleo / categoria / livello / argomento). Per gli esami a esercizi aggiungi "Riconosci il tipo" e "Esercizio guidato" |
| **Sessione** | 10 domande, barra di avanzamento, timer (30 s, oppure libero per gli esercizi lunghi), serie 🔥, pulsanti **Indovino / Incerto / Sicuro** come conferma, spiegazione con argomento, "Riprova" dopo un errore, riepilogo finale "X su N al primo tentativo" |
| **Simulazione** | Formato e tempo reali, soglia più alta di quella reale, nessun feedback, navigazione libera, riepilogo con le omesse; per i test con penalità, anche il punteggio netto |
| **Statistiche** | Esami superati e miglior punteggio, radar per argomento, barre per livello, calendario delle ultime 4 settimane (lunedì–domenica), tempo studiato, elenco delle domande ordinabile per tasso di errore |

## 4. Algoritmi (in `spacedRepetition.ts`)
- **Scelta delle domande nella modalità Smart**: punteggio = urgenza SM-2 (mai vista: 800–1000; da ripassare: 500 + giorni di ritardo × 10) + debolezza (tasso di errore × 400 + (5 − facilità) × 40) + un valore casuale tra 0 e 100. Si prendono le prime 10.
- **Voto continuo da 0 a 5** (`calculateContinuousQuality`):
  - risposta sbagliata = 0;
  - giusta senza cambi di opzione: 5 se il rapporto tra tempo effettivo e tempo atteso è ≤ 1, poi scende fino a 3 per le risposte lente;
  - giusta con cambi partendo dall'opzione giusta: 3,1–3,6; partendo da quella sbagliata: 2,5–3,1;
  - esitazione prima di confermare oltre 4 s: fino a −0,35;
  - più tentativi: sotto 3;
  - *Indovino* −2, *Incerto* −0,6.
- **Tempo atteso**: dipende dalla lunghezza del testo (lettura a 180 parole al minuto) più 1,2 s per decidere, moltiplicato per un fattore di velocità personale aggiornato con una media mobile esponenziale.
- **SM-2**: con voto ≥ 3 l'intervallo diventa 1 giorno, poi 6, poi intervallo × facilità; con voto < 3 si riparte da 0. La facilità si aggiorna con la formula SM-2 e non scende sotto 1,3.
- **Per gli esercizi a passaggi**: il voto parte da 5 e perde circa 1–1,5 punti per ogni aiuto usato, più una penalità per gli errori di metodo.

## 5. Stile grafico (tipo Duolingo)
- Font **Nunito Sans**, testi in grassetto molto marcato (`font-black`), angoli molto arrotondati (`rounded-[24px]`), pulsanti "a rilievo" (`border-b-4` che si schiaccia con `active:border-b-0 active:translate-y-1`).
- Colori: azzurro principale `#1CB0F6` (bordo `#1899D6`), verde giusto `#58CC02` (bordo `#46A302`), rosso sbagliato `#FF4B4B`, giallo serie `#FFC800`, viola `#CE82FF`, testo `#4B4B4B`, sfondo `#F7F9FB`. Tema scuro: `#111B21`, `#0F172A`, `#1E293B`, bordi `#334155`, testo `#F8FAFC`.
- Tema scuro con classe `.dark` salvata in `localStorage`, applicata in `index.html` prima che React si carichi (così non c'è il lampo bianco all'apertura).
- **Audio e vibrazione** (`audio.ts`): suoni generati con la Web Audio API, senza file audio; un accordo che sale di tono con la serie di risposte giuste; vibrazione breve; coriandoli `mini → burst → cannon` man mano che la serie cresce, e `celebration` a fine sessione o per un esame superato. Deve esserci sempre il pulsante per togliere l'audio.

## 6. Dati e sincronizzazione
- Salvataggio in `localStorage`, più export e import in JSON.
- Sincronizzazione Firestore in `users/{uid}`, con regole che permettono a ogni utente solo il proprio documento. Unione degli stati: storico deduplicato per data, per ogni domanda vince l'aggiornamento più recente, per le attività giornaliere si tiene il massimo.
- Tempo di studio contato a scatti di 10 s solo con la scheda visibile.

## 7. Errori da non ripetere (trovati nell'app OFA)
1. **Limite di 1 MiB del documento Firestore.** Lo storico degli esami con tutti i clic (circa 14 KB a esame) lo riempie dopo una sessantina di simulazioni e la sincronizzazione si ferma senza avvisare. Metti lo storico in una sotto-collezione e salva i dati dettagliati solo in locale. Mostra un errore visibile se la sincronizzazione fallisce.
2. Nel file delle domande la risposta giusta era quasi sempre la A: rimescola anche il sorgente, non solo la visualizzazione.
3. Tieni il lockfile allineato e usa un solo package manager: `npm ci` falliva.
4. Niente script e dump di lavoro nella cartella principale: mettili in `scripts/` e aggiungi a `.gitignore` i file generati.
5. Non chiamare funzioni con effetti collaterali dentro gli updater di `setState`: con StrictMode l'esame veniva registrato due volte in sviluppo.
6. Anche le risposte date nella simulazione devono aggiornare SM-2 (intervallo e facilità), non solo il contatore.
7. Niente conteggi scritti a mano nell'interfaccia ("606", "60"): calcolali dai dati.
8. Dividi il bundle in più parti (`import()` dinamico per statistiche e grafici): l'app OFA aveva un unico file da 1,7 MB.
9. Non lasciare nell'interfaccia pagine di debug o dipendenze inutili (per esempio `@google/genai` ed `express` residui di AI Studio).
