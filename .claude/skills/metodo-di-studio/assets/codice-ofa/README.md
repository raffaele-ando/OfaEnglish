# Codice collaudato dall'app OFA Polimi Prep

Copia fedele dei moduli centrali dell'app (repo `raffaele-ando/OfaEnglish`, cartella `src/`). Riusali come base quando costruisci una nuova app di studio.

| File | Contenuto |
|---|---|
| `types.ts` | Tipi: `Question`, `UserStats`, `ExamHistory`, telemetria, `AppState` |
| `spacedRepetition.ts` | Scelta delle domande (Standard, Weakness, Smart), tempo atteso, voto continuo da 0 a 5, aggiornamento SM-2 e della velocità personale |
| `utils.ts` | `shuffleQuestion` (Fisher-Yates) e `calculateSimilarity` (Jaccard, per evitare domande quasi uguali in simulazione) |
| `audio.ts` | Suoni con la Web Audio API, vibrazione, coriandoli, audio on/off |

Adattamenti necessari:
- `spacedRepetition.ts` importa `questions` e `getQuestionsByCorpus` da `../data/questions`: sostituiscili con il banco del nuovo esame.
- Il tipo `Question` ha `grammarTopic`: rinominalo in `topic` e generalizzalo con `type` per gli esami non a risposta multipla (vedi `references/app-blueprint.md`).
- `audio.ts` usa `canvas-confetti` (`npm i canvas-confetti @types/canvas-confetti`).
