# Verifiche oggettive

Tutto il resto della skill è giudizio: dipende dal contesto. Queste invece valgono **sempre**, qualunque design tu scelga, perché non riguardano il gusto ma se una persona riesce a usare l'interfaccia e se i numeri dicono la verità. Non sono in tensione con nessun criterio: una scelta che le viola non è «un'alternativa», è un difetto.

## Indice
1. Come usare gli script · 2. Accessibilità · 3. Onestà dei dati · 4. Che cosa gli script non vedono

---

## 1. Come usare gli script

Gli script sono in `scripts/` di questa skill. Richiedono solo Node.

```bash
S=.claude/skills/giudizio-di-design/scripts

# Testi e HTML: problemi oggettivi (lang, zoom, pulsanti senza nome) + segnali con domande
node $S/segnali_copy.cjs src index.html
node $S/segnali_copy.cjs src --solo conteggi,sinonimi     # solo alcune famiglie
node $S/segnali_copy.cjs src --lingua en                  # interfaccia in un'altra lingua
node $S/segnali_copy.cjs testi.txt                        # una stringa per riga (bozze di copy)
node $S/segnali_copy.cjs src --json                       # per elaborare i risultati
node $S/segnali_copy.cjs src index.html --ci              # exit 1 se ci sono problemi oggettivi

# Contrasto WCAG
node $S/contrasto.cjs "#FFFFFF" "#1CB0F6"                 # testo: minimo 4,5:1
node $S/contrasto.cjs "#fff:#1078C0" "#4B4B4B:#fff"       # più coppie testo:sfondo
node $S/contrasto.cjs --grafica "#2F8500:#E5E7EB"         # barre, icone, focus, bordi: minimo 3:1
node $S/contrasto.cjs --suggerisci "#58CC02" --su "#FFFFFF" --min 4.5   # tonalità più vicina che passa
node $S/contrasto.cjs --palette palette.json              # tutte le coppie di un file (exit 1 se una fallisce)
```

**Come leggere `segnali_copy`.** Il report ha due parti.
- *Problemi oggettivi*: correggili.
- *Segnali → domande da porsi*: non sono errori. Ogni riga è un punto in cui chiedersi se la scelta è voluta e adatta a questo contesto. Un termine inglese può essere il termine tecnico dell'utente; un «!» doppio può celebrare un evento che lo merita; un conteggio scritto a mano può essere la regola fissa di un esame. Se la scelta è voluta, lasciala e metti `copy-ok` in un commento sulla riga, così la prossima volta non riappare. Se non sai rispondere alla domanda, è lì che c'è lavoro di design.

Famiglie di segnali: conteggi scritti a mano, lingue mescolate, possibili sinonimi, nomi delle metriche, punteggi e contatori, frasi che spingono, tono ed enfasi, formule vuote, il perché al posto del che cosa, convenzione delle maiuscole, testi lunghi, dialoghi nativi.

Sull'app OFA (`src` + `index.html`) trova: `lang="en"` con interfaccia italiana, zoom bloccato, 10 pulsanti solo icona senza nome, 18 conteggi scritti a mano, circa 30 termini inglesi, sinonimi (frasi/domande, Record/Miglior punteggio, Simulazione/Mock Exam, Confidenza/Sicuro), «FAILED», «XP» e «Liv.», convenzioni di maiuscole miste.

## 2. Accessibilità

Per ognuna, il perché: serve a spiegare la correzione, non a recitare una norma.

- **Contrasto del testo.** Almeno 4,5:1; 3:1 per testo grande (≥ 24 px, o ≥ 18,66 px in grassetto). In tutti i temi. *Perché:* sotto quella soglia chi vede meno, o legge al sole, non legge. Attenzione al testo bianco su colori vivi (giallo, verde chiaro, azzurro): quasi sempre fallisce.
- **Contrasto della grafica: 3:1** (WCAG 1.4.11). Riempimento di barre e anelli contro la traccia e contro la superficie, icone che portano significato, anello di focus, bordi dei campi, serie di un grafico contro quelle accanto. *Perché:* una barra che non si distingue dalla sua traccia non comunica, anche se il numero è scritto accanto. Non servono 3:1 per bordi di pulsanti che hanno già un testo e per decorazioni.
- **Mai solo colore.** Giusto/sbagliato con icona e testo, stato con un'etichetta, timer con i secondi scritti. *Perché:* circa un uomo su dodici distingue male rosso e verde; e su uno schermo in bianco e nero il colore sparisce.
- **Aree di tocco almeno 44 × 44 px** (24 px è il minimo assoluto WCAG 2.2, con spazio attorno). *Perché:* dita, movimento, tremori.
- **Zoom libero.** Niente `maximum-scale=1` né `user-scalable=no`; il layout regge al 200% e a 320 px di larghezza senza scroll orizzontale. *Perché:* chi vede poco ingrandisce; bloccarlo annulla ogni scelta sulla leggibilità.
- **Lingua dichiarata.** `<html lang>` uguale alla lingua dell'interfaccia; `lang` diverso sugli elementi in un'altra lingua. *Perché:* la sintesi vocale sceglie la pronuncia da lì.
- **Nomi accessibili.** Ogni pulsante solo icona ha un `aria-label`; icone decorative `aria-hidden`; campi con etichetta vera; interruttori con `aria-pressed`, gruppi di opzioni con ruolo e stato; barre con `role="progressbar"` e valori. *Perché:* altrimenti un lettore di schermo dice solo «pulsante».
- **Focus visibile e ordine logico** da tastiera; conferme in un `<dialog>` vero.
- **Annunci.** Il riscontro dopo un'azione in una regione `aria-live="polite"`; un timer non annunciato ogni secondo.
- **Movimento ridotto.** Con `prefers-reduced-motion` niente coriandoli, rimbalzi, spostamenti ampi; niente lampeggi oltre 3 volte al secondo. *Perché:* vestibolare, epilessia, sovrastimolazione.
- **Suono e vibrazione** disattivabili, separatamente. *Perché:* contesti silenziosi e persone sovrastimolate.
- **Azioni irreversibili** protette da una conferma e da un'enfasi almeno pari alla loro gravità; i dati dell'utente non si perdono con un tocco sbagliato.

## 3. Onestà dei dati

Qui il criterio 1 dell'utente smette di essere una questione di equilibrio e diventa un obbligo, perché un numero falso rompe la fiducia in tutti gli altri.

- **I conteggi vengono dai dati.** Totali, soglie, durate: da `array.length` o da una costante unica, mai scritti a mano in un'etichetta. *Perché:* alla prossima aggiunta l'etichetta mente (nell'OFA «(606)» e «/30» sono in più di sei file).
- **Il nome dice che cosa è contato**, e la stessa etichetta mostra lo stesso numero in ogni schermata (stesso perimetro, stesso filtro).
- **Un dato mancante non è uno zero.** «Mai vista», «—», «non ancora abbastanza dati» sono diversi da 0%.
- **La metrica fa ciò che dice.** Verifica con un caso limite: se l'utente sbaglia tutto, sale? Se salta le domande difficili, migliora? Se apre soltanto l'app, conta? Se una risposta è dichiarata «a caso», finisce tra le imparate?
- **Il perimetro è sempre dichiarato** quando i numeri sono calcolati su un sottoinsieme.
- **I grafici hanno una forma valida per i dati che ci sono**: niente radar con due assi, niente mappa di 28 giorni con tre giorni di dati, assi che partono da zero quando si confrontano grandezze.
- **La telemetria nascosta è dichiarata** se misura la persona (tempi, esitazioni).

## 4. Che cosa gli script non vedono

- Contrasti di colori definiti a runtime, in immagini o in grafici generati: controllali uno per uno con `contrasto.cjs`.
- Testo troppo piccolo, aree di tocco, layout a 320 px, zoom al 200%: vanno guardati (o misurati con gli strumenti del browser).
- Ordine del focus, annunci `aria-live`, movimento ridotto: vanno provati.
- Tutto ciò che riguarda il giudizio: se la parola è quella giusta, se il riscontro è proporzionato, se l'informazione arriva al momento giusto. Per quello, SKILL.md.
