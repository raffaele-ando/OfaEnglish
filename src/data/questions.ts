import { Question } from '../types';

export const questions: Question[] = [
  {
    id: "q1",
    prompt: "Choose the correct translation for 'Sei mai stato in Brasile?'",
    options: [
      "Are you ever been to Brazil?",
      "Have you ever been to Brazil?",
      "Did you ever went to Brazil?",
      "Have you never been to Brazil?"
    ],
    correctIndex: 1,
    explanation: "We use Present Perfect ('Have you ever been') for life experiences.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "Present Perfect"
  },
  {
    id: "q2",
    prompt: "Choose the correct question: '_____ a table in this room?'",
    options: [
      "Is it",
      "There is",
      "Is there",
      "Are there"
    ],
    correctIndex: 2,
    explanation: "'Is there' is the correct question form of 'there is' for singular nouns.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "There is / There are"
  },
  {
    id: "q3",
    prompt: "Which sentence is correct?",
    options: [
      "Did you meet Mr. Smith's wife?",
      "Did you met Mr. Smith's wife?",
      "Have you meet Mr. Smith's wife?",
      "Did you meet the Mr. Smith wife?"
    ],
    correctIndex: 0,
    explanation: "After 'did', we use the base form of the verb ('meet', not 'met').",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Past Simple"
  },
  {
    id: "q4",
    prompt: "Translate 'Lunedì è il giorno peggiore della settimana.'",
    options: [
      "Monday is the badder day of the week.",
      "Monday is the worst day of the week.",
      "Monday is the worse day of the week.",
      "Monday is the baddest day of the week."
    ],
    correctIndex: 1,
    explanation: "The superlative of 'bad' is 'worst'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Comparatives and Superlatives"
  },
  {
    id: "q5",
    prompt: "Translate 'Sono stato in Africa nel 2009.'",
    options: [
      "I have been to Africa in 2009.",
      "I went to Africa in 2009.",
      "I was in Africa on 2009.",
      "I go to Africa in 2009."
    ],
    correctIndex: 1,
    explanation: "With a finished time in the past ('in 2009'), we use the Past Simple ('went').",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Past Simple"
  },
  {
    id: "q6",
    prompt: "Which sentence correctly compares the two cities?",
    options: [
      "New York is more modern that London.",
      "New York is modener than London.",
      "New York is more modern than London.",
      "New York is the most modern than London."
    ],
    correctIndex: 2,
    explanation: "We use 'more + adjective + than' for comparatives with long adjectives.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Comparatives and Superlatives"
  },
  {
    id: "q7",
    prompt: "Complete the sentence: '_____ did you meet Mr. Smith?' - 'At the station.'",
    options: [
      "When",
      "How",
      "Where",
      "Who"
    ],
    correctIndex: 2,
    explanation: "'Where' is used to ask about a place.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Past Simple"
  },
  {
    id: "q8",
    prompt: "Translate 'Quante persone ci sono alla festa?'",
    options: [
      "How much people are at the party?",
      "How many peoples are at the party?",
      "How many people are at the party?",
      "How many people is in the party?"
    ],
    correctIndex: 2,
    explanation: "'People' is plural and countable, so we use 'How many are'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Quantifiers"
  },
  {
    id: "q9",
    prompt: "Translate 'Il treno partirà tra 2 minuti.'",
    options: [
      "The train leaves between 2 minutes.",
      "The train will leave in 2 minutes.",
      "The train going to leave on 2 minutes.",
      "The train part in 2 minutes."
    ],
    correctIndex: 1,
    explanation: "We use 'in' for future time limits ('in 2 minutes'). 'Will leave' expresses a future fact.",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "Prepositions of Time"
  },
  {
    id: "q10",
    prompt: "Translate 'Ti posso offrire qualcosa da bere?'",
    options: [
      "Can I offer you anything for drink?",
      "Can I offer you something to drink?",
      "Can I offer you somewhat to drink?",
      "Do I can offer you something to drink?"
    ],
    correctIndex: 1,
    explanation: "In offers, we normally use 'something', not 'anything'. The infinitive is 'to drink'.",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "Prepositions of Time"
  },
  {
    id: "q11",
    prompt: "Translate 'Francesco lavora per Google.'",
    options: [
      "Francesco work to Google.",
      "Francesco works for Google.",
      "Francesco is working by Google.",
      "Francesco working for Google."
    ],
    correctIndex: 1,
    explanation: "Third person singular in Present Simple requires an 's' ('works'). 'Work for' is the correct preposition.",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "Prepositions of Time"
  },
  {
    id: "q12",
    prompt: "Choose the correct sentence to describe a current action.",
    options: [
      "Look! It's rain.",
      "Look! It's raining.",
      "Look! It rains.",
      "Look! It raining."
    ],
    correctIndex: 1,
    explanation: "Present Continuous ('is raining') is used for actions happening right now.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Present Continuous"
  },
  {
    id: "q13",
    prompt: "Choose the correct question:",
    options: [
      "Is there any milk in the fridge?",
      "Are there some milk in the fridge?",
      "Is there some milk in the fridge?",
      "Is there any milks in the fridge?"
    ],
    correctIndex: 0,
    explanation: "'Milk' is uncountable (use 'is there'). 'Any' is used in questions.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "There is / There are"
  },
  {
    id: "q14",
    prompt: "Translate 'Da quanto tempo studi l'inglese?'",
    options: [
      "How much time do you study English?",
      "Since when you study English?",
      "How long have you studied English?",
      "How long are you studying English?"
    ],
    correctIndex: 2,
    explanation: "We use Present Perfect ('have you studied') with 'How long' for actions starting in the past and continuing now.",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "Present Perfect"
  },
  {
    id: "q15",
    prompt: "Translate 'Francesco riesce a parlare bene inglese.'",
    options: [
      "Francesco can to speak English well.",
      "Francesco can speaks English well.",
      "Francesco is able speak English good.",
      "Francesco can speak English well."
    ],
    correctIndex: 3,
    explanation: "Modal verb 'can' is followed by the base form without 'to' ('can speak').",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "Prepositions of Time"
  },
  {
    id: "q16",
    prompt: "Translate 'Con chi è andata?'",
    options: [
      "With who she went?",
      "Who did she go with?",
      "Who did she went with?",
      "Who she went with?"
    ],
    correctIndex: 1,
    explanation: "In WH- questions, the auxiliary 'did' is followed by the base verb 'go'. The preposition 'with' goes at the end.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Past Simple"
  },
  {
    id: "q17",
    prompt: "Choose the grammatically correct sentence:",
    options: [
      "She gone to the cinema yesterday.",
      "She has went to the cinema yesterday.",
      "She went to the cinema yesterday.",
      "She goes to the cinema yesterday."
    ],
    correctIndex: 2,
    explanation: "'Yesterday' requires the Past Simple ('went').",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Past Simple"
  },
  {
    id: "q18",
    prompt: "Complete the sentence: 'There are many people living in Italy who _____ from abroad.'",
    options: [
      "coming",
      "comes",
      "are coming",
      "come"
    ],
    correctIndex: 3,
    explanation: "'People' is plural, so the relative clause verb is plural ('come').",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "General"
  },
  {
    id: "q19",
    prompt: "Complete the sentence: 'I _____ my husband in 1996.'",
    options: [
      "meet",
      "have met",
      "met",
      "was meeting"
    ],
    correctIndex: 2,
    explanation: "A specific time in the past ('in 1996') requires the Past Simple ('met').",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Past Simple"
  },
  {
    id: "q20",
    prompt: "Complete the sentence: 'This plate is dirty, can I have a clean _____?'",
    options: [
      "plate",
      "one",
      "ones",
      "it"
    ],
    correctIndex: 1,
    explanation: "We use the pronoun 'one' to avoid repeating a singular countable noun.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "General"
  },
  {
    id: "q21",
    prompt: "Complete the sentence: 'By the year 2080, people could _____ on Mars.'",
    options: [
      "to live",
      "be living",
      "living",
      "are living"
    ],
    correctIndex: 1,
    explanation: "'Could' is a modal and is followed by the bare infinitive ('be'). 'Could be living' implies an ongoing action in the future.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "General"
  },
  {
    id: "q22",
    prompt: "Complete the sentence: 'How many companies have you worked for _____ you left school?'",
    options: [
      "from",
      "since",
      "for",
      "after"
    ],
    correctIndex: 1,
    explanation: "'Since' is used with Present Perfect to indicate a starting point in time.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "Present Perfect"
  },
  {
    id: "q23",
    prompt: "Complete the sentence: 'What time _____ your plane take off?'",
    options: [
      "do",
      "is",
      "does",
      "has"
    ],
    correctIndex: 2,
    explanation: "For scheduled future events, we use Present Simple. 'Plane' is 'it', so we use 'does'.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "Prepositions of Time"
  },
  {
    id: "q24",
    prompt: "Which question is correct?",
    options: [
      "Can I offer you anything to drink?",
      "Can I to offer you anything to drink?",
      "Do I can offer you anything to drink?",
      "Can I offer you anything for drinking?"
    ],
    correctIndex: 0,
    explanation: "Modal 'can' is followed by a bare infinitive ('offer'). The object complement is a full infinitive ('to drink').",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "Prepositions of Time"
  },
  {
    id: "q25",
    prompt: "Combine the sentences correctly: 'I saw Tom this morning. He was waiting at the bus stop.'",
    options: [
      "I saw Tom this morning while he waited at the bus stop.",
      "I saw Tom this morning while he was waiting at the bus stop.",
      "I saw Tom this morning during he was waiting at the bus stop.",
      "I saw Tom this morning waiting to the bus stop."
    ],
    correctIndex: 1,
    explanation: "'While' is followed by a continuous tense (Past Continuous) to show an ongoing background action.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "General"
  },
  {
    id: "q26",
    prompt: "Complete the sentence: 'James can speak English very _____.'",
    options: [
      "good",
      "better",
      "best",
      "well"
    ],
    correctIndex: 3,
    explanation: "'Well' is the adverb form of 'good' and modifies the verb 'speak'.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "Prepositions of Time"
  },
  {
    id: "q27",
    prompt: "Complete the sentence: 'The children want _____ to play with them.'",
    options: [
      "I",
      "that I",
      "me",
      "my"
    ],
    correctIndex: 2,
    explanation: "After 'want', we use an object pronoun ('me') + to-infinitive.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "General"
  },
  {
    id: "q28",
    prompt: "Complete the sentence: 'Is she going with _____?'",
    options: [
      "friend",
      "the friends",
      "friends",
      "a friends"
    ],
    correctIndex: 2,
    explanation: "'Friends' is a plural countable noun. Used generally here without an article.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "General"
  },
  {
    id: "q29",
    prompt: "Complete the sentence: 'I _____ a new pair of shoes yesterday.'",
    options: [
      "buy",
      "buyed",
      "bought",
      "have bought"
    ],
    correctIndex: 2,
    explanation: "'Yesterday' indicates Past Simple. The past of 'buy' is 'bought'.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Past Simple"
  },
  {
    id: "q30",
    prompt: "Complete the sentence: 'What time does the train leave tomorrow? It _____ at 9.'",
    options: [
      "leave",
      "is leaving",
      "leaving",
      "leaves"
    ],
    correctIndex: 3,
    explanation: "For a scheduled timetable in the future, we use the Present Simple ('leaves').",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "Prepositions of Time"
  },
  {
    id: "q31",
    prompt: "Choose the correct negative sentence:",
    options: [
      "There isn't no milk in the fridge.",
      "There isn't any milk in the fridge.",
      "There is any milk in the fridge.",
      "There aren't any milk in the fridge."
    ],
    correctIndex: 1,
    explanation: "We use 'any' in negative sentences. 'Milk' is uncountable, so we use 'isn't'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "There is / There are"
  },
  {
    id: "q32",
    prompt: "Complete the sentence: 'How long _____ you studied English?'",
    options: [
      "did",
      "do",
      "are",
      "have"
    ],
    correctIndex: 3,
    explanation: "Present Perfect uses the auxiliary 'have' + past participle ('studied').",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "Present Perfect"
  },
  {
    id: "q33",
    prompt: "Complete the sentence: 'Look! It _____.'",
    options: [
      "is raining",
      "rains",
      "rain",
      "rained"
    ],
    correctIndex: 0,
    explanation: "'Look!' implies an action happening right now (Present Continuous).",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Present Continuous"
  },
  {
    id: "q34",
    prompt: "Complete the sentence: 'How many people _____ to the party?'",
    options: [
      "did come",
      "comes",
      "came",
      "were coming"
    ],
    correctIndex: 2,
    explanation: "When the question word ('How many people') is the subject, we don't use 'did'. We just use the past verb ('came').",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Past Simple"
  },
  {
    id: "q35",
    prompt: "Translate 'Lunedì è il giorno peggiore della settimana.'",
    options: [
      "Monday is the worse day of the week.",
      "Monday is the worst day of the week.",
      "Monday is worst day of the week.",
      "Monday is the bad day of the week."
    ],
    correctIndex: 1,
    explanation: "The superlative form is 'the worst'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Comparatives and Superlatives"
  },
  {
    id: "q36",
    prompt: "Translate 'Steven lavora per Microsoft.'",
    options: [
      "Steven works for Microsoft.",
      "Steven work to Microsoft.",
      "Steven works to Microsoft.",
      "Steven is working for Microsoft."
    ],
    correctIndex: 0,
    explanation: "Present Simple third person requires 'works'. The preposition is 'for'.",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "Prepositions of Time"
  },
  {
    id: "q37",
    prompt: "Complete the sentence: 'When _____ you meet Mr. Brown?'",
    options: [
      "have",
      "did",
      "were",
      "do"
    ],
    correctIndex: 1,
    explanation: "'When' asks for a specific past time, so we use Past Simple auxiliary 'did'.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Past Simple"
  },
  {
    id: "q38",
    prompt: "Complete the sentence: 'John, where do you come _____?'",
    options: [
      "to",
      "by",
      "from",
      "of"
    ],
    correctIndex: 2,
    explanation: "The phrase to ask about origins is 'Where do you come from?'",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Questions and Origins"
  },
  {
    id: "q39",
    prompt: "Complete the sentence: 'Tom is away. He has been away _____ Monday.'",
    options: [
      "for",
      "since",
      "from",
      "until"
    ],
    correctIndex: 1,
    explanation: "'Since' is used with a specific point in time (Monday) to show when an action started.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "Present Perfect"
  },
  {
    id: "q40",
    prompt: "Translate 'Non mi è piaciuto il cibo inglese.'",
    options: [
      "I haven't liked English food.",
      "I wasn't like English food.",
      "I didn't like English food.",
      "I don't liked English food."
    ],
    correctIndex: 2,
    explanation: "Past Simple negative uses 'didn't' + base verb ('like').",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Past Simple"
  },
  {
    id: "q41",
    prompt: "Complete the sentence: 'Hurry, the bus _____ in 2 minutes.'",
    options: [
      "leaves",
      "left",
      "is leave",
      "leaving"
    ],
    correctIndex: 0,
    explanation: "We use Present Simple ('leaves') for timetabled future events.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "Prepositions of Time"
  },
  {
    id: "q42",
    prompt: "Complete the sentence: 'She's the most beautiful girl I've _____ seen.'",
    options: [
      "never",
      "always",
      "ever",
      "just"
    ],
    correctIndex: 2,
    explanation: "'Ever' is used with Present Perfect to mean 'at any time in my life'.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "Present Perfect"
  },
  {
    id: "q43",
    prompt: "Complete the sentence: 'I _____ to Africa in 2001.'",
    options: [
      "have gone",
      "was going",
      "went",
      "go"
    ],
    correctIndex: 2,
    explanation: "Past Simple ('went') is required for a specific finished past time ('in 2001').",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Past Simple"
  },
  {
    id: "q44",
    prompt: "Translate 'Hai conosciuto la moglie del signor Smith?'",
    options: [
      "Did you met Mr. Smith's wife?",
      "Have you met Mr. Smith's wife?",
      "Do you meet Mr. Smith's wife?",
      "Have you meet Mr. Smith's wife?"
    ],
    correctIndex: 1,
    explanation: "Present Perfect ('Have you met') is used for life experiences when the time is not specified.",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "Present Perfect"
  },
  {
    id: "q45",
    prompt: "Translate 'Sei mai stato in Brasile?'",
    options: [
      "Have you ever been to Brazil?",
      "Did you ever go to Brazil?",
      "Have you never been in Brazil?",
      "Are you ever been to Brazil?"
    ],
    correctIndex: 0,
    explanation: "'Have you ever been to' is the standard way to ask about travel experiences.",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "Present Perfect"
  },
  {
    id: "q46",
    prompt: "Translate 'Non mi piace il trucco di Sara.'",
    options: [
      "I don't like Sara makeup.",
      "I don't like Sara's makeup.",
      "I'm not like Sara's makeup.",
      "I don't like the makeup of Sara."
    ],
    correctIndex: 1,
    explanation: "We use the possessive 's (Sara's) to show belonging.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Possessive S"
  },
  {
    id: "q47",
    prompt: "Complete the sentence: '_____ is a table in the room.'",
    options: [
      "There",
      "It",
      "This",
      "Here"
    ],
    correctIndex: 0,
    explanation: "We use 'There is' to express existence.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "There is / There are"
  },
  {
    id: "q48",
    prompt: "Complete the sentence: 'He _____ his homework right now.'",
    options: [
      "doing",
      "does",
      "is doing",
      "do"
    ],
    correctIndex: 2,
    explanation: "'Right now' indicates Present Continuous ('is doing').",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Present Continuous"
  },
  {
    id: "q49",
    prompt: "Choose the correct sentence:",
    options: [
      "If it rains, we will stay home.",
      "If it will rain, we stay home.",
      "If it rains, we stay home.",
      "If it rain, we will stay home."
    ],
    correctIndex: 0,
    explanation: "First Conditional structure: If + Present Simple, will + base verb.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "First Conditional"
  },
  {
    id: "q50",
    prompt: "Complete the sentence: 'I _____ playing tennis since I was a child.'",
    options: [
      "am",
      "have been",
      "was",
      "had been"
    ],
    correctIndex: 1,
    explanation: "'Since' + a point in the past requires the Present Perfect Continuous ('have been playing').",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "Present Perfect"
  },
  {
    id: "q51",
    prompt: "Complete the sentence: 'How many people _____ to the party?'",
    options: [
      "came",
      "come",
      "comes",
      "coming"
    ],
    correctIndex: 0,
    explanation: "Referring to a past event ('the party' implies it already happened), so Past Simple ('came') is appropriate.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Past Simple"
  },
  {
    id: "q52",
    prompt: "Choose the correct sentence for comparing two cities:",
    options: [
      "New York is more much modern than London.",
      "New York is much more modern than London.",
      "New York is most modern than London.",
      "New York is much moderner than London."
    ],
    correctIndex: 1,
    explanation: "To emphasize a comparative, we use 'much' before the comparative form ('much more modern').",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Comparatives and Superlatives"
  },
  {
    id: "q53",
    prompt: "Complete the sentence: 'Tom is away. He _____ away since Monday.'",
    options: [
      "was",
      "is",
      "has been",
      "had been"
    ],
    correctIndex: 2,
    explanation: "'Since Monday' requires Present Perfect ('has been') to connect the past to the present.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "Present Perfect"
  },
  {
    id: "q54",
    prompt: "Complete the sentence: 'Hurry! The bus _____ in 2 minutes.'",
    options: [
      "leaves",
      "leaving",
      "is leave",
      "left"
    ],
    correctIndex: 0,
    explanation: "Present Simple ('leaves') is used for scheduled events like bus or train timetables.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "Prepositions of Time"
  },
  {
    id: "q55",
    prompt: "Complete the sentence: 'Have you ever _____ to Brasil?'",
    options: [
      "been",
      "gone",
      "go",
      "went"
    ],
    correctIndex: 0,
    explanation: "We use 'been to' to mean 'visited and returned'.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "Present Perfect"
  },
  {
    id: "q56",
    prompt: "Complete the sentence: 'Is she _____ with friends?'",
    options: [
      "gone",
      "go",
      "going",
      "goes"
    ],
    correctIndex: 2,
    explanation: "The auxiliary 'Is' indicates Present Continuous, which requires the -ing form ('going').",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Present Continuous"
  }
,
  {
    id: "q57",
    prompt: "Translate 'Hai mai mangiato sushi?'",
    options: [
      "Have you ever eaten sushi?",
      "Did you ever eat sushi?",
      "Are you ever eat sushi?",
      "Have you never eat sushi?"
    ],
    correctIndex: 0,
    explanation: "We use Present Perfect ('Have you ever eaten') for life experiences.",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "Present Perfect"
  },
  {
    id: "q58",
    prompt: "Complete the sentence: 'She _____ just finished her homework.'",
    options: [
      "has",
      "have",
      "did",
      "is"
    ],
    correctIndex: 0,
    explanation: "'Just' is often used with Present Perfect, and 'She' takes 'has'.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "Present Perfect"
  },
  {
    id: "q59",
    prompt: "Translate 'Non abbiamo ancora visto quel film.'",
    options: [
      "We haven't seen that movie yet.",
      "We didn't see that movie yet.",
      "We don't see that movie yet.",
      "We haven't saw that movie yet."
    ],
    correctIndex: 0,
    explanation: "Present perfect negative with 'yet' for something expected to happen.",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "Present Perfect"
  },
  {
    id: "q60",
    prompt: "Complete the sentence: '_____ you ever flown in a helicopter?'",
    options: [
      "Have",
      "Did",
      "Do",
      "Are"
    ],
    correctIndex: 0,
    explanation: "Present Perfect is used for asking about life experiences.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "Present Perfect"
  },
  {
    id: "q61",
    prompt: "Translate 'Lui ha vissuto qui per dieci anni.'",
    options: [
      "He has lived here for ten years.",
      "He is living here since ten years.",
      "He lived here since ten years.",
      "He have lived here for ten years."
    ],
    correctIndex: 0,
    explanation: "Present Perfect for a state that started in the past and continues to the present.",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "Present Perfect"
  },
  {
    id: "q62",
    prompt: "Translate 'Ci sono molte macchine per strada oggi.'",
    options: [
      "There are many cars on the street today.",
      "They are many cars on the street today.",
      "There is many cars on the street today.",
      "There have many cars on the street today."
    ],
    correctIndex: 0,
    explanation: "We use 'There are' for plural existence.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "There is / There are"
  },
  {
    id: "q63",
    prompt: "Complete the sentence: '_____ any milk in the fridge?'",
    options: [
      "Is there",
      "Are there",
      "There is",
      "There are"
    ],
    correctIndex: 0,
    explanation: "'Milk' is uncountable, so we use 'Is there'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "There is / There are"
  },
  {
    id: "q64",
    prompt: "Translate 'Non c\'è nessun problema.'",
    options: [
      "There is no problem.",
      "There isn't no problem.",
      "There are no problem.",
      "It isn't a problem."
    ],
    correctIndex: 0,
    explanation: "Singular negative existence.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "There is / There are"
  },
  {
    id: "q65",
    prompt: "Complete the sentence: '_____ some apples on the table.'",
    options: [
      "There are",
      "There is",
      "They are",
      "It is"
    ],
    correctIndex: 0,
    explanation: "Plural affirmative existence.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "There is / There are"
  },
  {
    id: "q66",
    prompt: "Translate 'C\'è un cane nel giardino?'",
    options: [
      "Is there a dog in the garden?",
      "Are there a dog in the garden?",
      "There is a dog in the garden?",
      "Does there a dog in the garden?"
    ],
    correctIndex: 0,
    explanation: "Question form for singular existence.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "There is / There are"
  },
  {
    id: "q67",
    prompt: "Complete the sentence: 'I _____ to the cinema yesterday.'",
    options: [
      "went",
      "go",
      "was going",
      "have gone"
    ],
    correctIndex: 0,
    explanation: "Past simple for a finished action at a specific time in the past.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Past Simple"
  },
  {
    id: "q68",
    prompt: "Translate 'Non hanno studiato per l\'esame.'",
    options: [
      "They didn't study for the exam.",
      "They don't studied for the exam.",
      "They wasn't study for the exam.",
      "They haven't study for the exam."
    ],
    correctIndex: 0,
    explanation: "Past simple negative uses 'didn't' + base verb.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Past Simple"
  },
  {
    id: "q69",
    prompt: "Complete the sentence: '_____ you see the football match last night?'",
    options: [
      "Did",
      "Do",
      "Have",
      "Were"
    ],
    correctIndex: 0,
    explanation: "Past simple question uses auxiliary 'did'.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Past Simple"
  },
  {
    id: "q70",
    prompt: "Translate 'Lei ha comprato un nuovo telefono la settimana scorsa.'",
    options: [
      "She bought a new phone last week.",
      "She buys a new phone last week.",
      "She did buy a new phone last week.",
      "She have bought a new phone last week."
    ],
    correctIndex: 0,
    explanation: "Irregular past simple of 'buy' is 'bought'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Past Simple"
  },
  {
    id: "q71",
    prompt: "Complete the sentence: 'We _____ very tired after the trip.'",
    options: [
      "were",
      "was",
      "did be",
      "have been"
    ],
    correctIndex: 0,
    explanation: "Past simple of 'to be' for 'we' is 'were'.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Past Simple"
  },
  {
    id: "q72",
    prompt: "Translate 'Quando sei arrivato?'",
    options: [
      "When did you arrive?",
      "When you arrived?",
      "When do you arrive?",
      "When have you arrived?"
    ],
    correctIndex: 0,
    explanation: "Question word + did + subject + base verb.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Past Simple"
  },
  {
    id: "q73",
    prompt: "Complete the sentence: 'Please be quiet, I _____.'",
    options: [
      "am working",
      "work",
      "working",
      "am work"
    ],
    correctIndex: 0,
    explanation: "Action happening right now requires present continuous.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Present Continuous"
  },
  {
    id: "q74",
    prompt: "Translate 'Cosa stanno facendo?'",
    options: [
      "What are they doing?",
      "What do they do?",
      "What they are doing?",
      "What are they do?"
    ],
    correctIndex: 0,
    explanation: "Present continuous question format.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Present Continuous"
  },
  {
    id: "q75",
    prompt: "Complete the sentence: 'She _____ to music at the moment.'",
    options: [
      "is listening",
      "listens",
      "listening",
      "listen"
    ],
    correctIndex: 0,
    explanation: "'At the moment' indicates an ongoing action.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Present Continuous"
  },
  {
    id: "q76",
    prompt: "Translate 'Non sto leggendo un libro, sto guardando la TV.'",
    options: [
      "I'm not reading a book, I'm watching TV.",
      "I don't read a book, I watch TV.",
      "I'm not read a book, I'm watch TV.",
      "I not reading a book, I watching TV."
    ],
    correctIndex: 0,
    explanation: "Present continuous for current contrasting actions.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Present Continuous"
  },
  {
    id: "q77",
    prompt: "Complete the sentence: '_____ it raining outside?'",
    options: [
      "Is",
      "Does",
      "Are",
      "Do"
    ],
    correctIndex: 0,
    explanation: "Auxiliary 'to be' is used for present continuous questions.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Present Continuous"
  },
  {
    id: "q78",
    prompt: "Complete the sentence: 'If you study hard, you _____ the exam.'",
    options: [
      "will pass",
      "pass",
      "would pass",
      "passed"
    ],
    correctIndex: 0,
    explanation: "First conditional: If + present simple, will + base verb.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "First Conditional"
  },
  {
    id: "q79",
    prompt: "Translate 'Se piove, non andremo in spiaggia.'",
    options: [
      "If it rains, we won't go to the beach.",
      "If it will rain, we don't go to the beach.",
      "If it rain, we won't go to the beach.",
      "If it rains, we didn't go to the beach."
    ],
    correctIndex: 0,
    explanation: "First conditional structure.",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "First Conditional"
  },
  {
    id: "q80",
    prompt: "Complete the sentence: 'I will call you if I _____ any news.'",
    options: [
      "hear",
      "will hear",
      "heard",
      "hearing"
    ],
    correctIndex: 0,
    explanation: "The 'if' clause uses the present simple.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "First Conditional"
  },
  {
    id: "q81",
    prompt: "Translate 'Cosa farai se perdi il treno?'",
    options: [
      "What will you do if you miss the train?",
      "What do you do if you will miss the train?",
      "What would you do if you miss the train?",
      "What will you do if you missed the train?"
    ],
    correctIndex: 0,
    explanation: "First conditional question.",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "First Conditional"
  },
  {
    id: "q82",
    prompt: "Complete the sentence: 'If she _____ invite me, I won't go to the party.'",
    options: [
      "doesn't",
      "don't",
      "won't",
      "didn't"
    ],
    correctIndex: 0,
    explanation: "Negative present simple in the 'if' clause.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "First Conditional"
  },
  {
    id: "q83",
    prompt: "Translate 'Se non ti sbrighi, faremo tardi.'",
    options: [
      "If you don't hurry, we will be late.",
      "If you won't hurry, we are late.",
      "If you aren't hurry, we will be late.",
      "If you don't hurry, we would be late."
    ],
    correctIndex: 0,
    explanation: "First conditional with negative condition.",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "First Conditional"
  },
  {
    id: "q84",
    prompt: "Complete the sentence: 'Russia is the _____ country in the world.'",
    options: [
      "largest",
      "larger",
      "most large",
      "more large"
    ],
    correctIndex: 0,
    explanation: "Superlative of short adjectives adds -est.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Comparatives and Superlatives"
  },
  {
    id: "q85",
    prompt: "Translate 'L\'inglese è più facile del cinese.'",
    options: [
      "English is easier than Chinese.",
      "English is more easy than Chinese.",
      "English is easiest than Chinese.",
      "English is much easy than Chinese."
    ],
    correctIndex: 0,
    explanation: "Comparative for 'easy' is 'easier', followed by 'than'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Comparatives and Superlatives"
  },
  {
    id: "q86",
    prompt: "Complete the sentence: 'This book is _____ interesting than the last one.'",
    options: [
      "more",
      "most",
      "much",
      "very"
    ],
    correctIndex: 0,
    explanation: "Long adjectives use 'more' for comparative.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Comparatives and Superlatives"
  },
  {
    id: "q87",
    prompt: "Translate 'È il film peggiore che abbia mai visto.'",
    options: [
      "It's the worst movie I've ever seen.",
      "It's the worse movie I've ever seen.",
      "It's the baddest movie I've ever seen.",
      "It's the most bad movie I've ever seen."
    ],
    correctIndex: 0,
    explanation: "Superlative of 'bad' is 'worst'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Comparatives and Superlatives"
  },
  {
    id: "q88",
    prompt: "Complete the sentence: 'My brother is much _____ than me.'",
    options: [
      "taller",
      "tall",
      "tallest",
      "more tall"
    ],
    correctIndex: 0,
    explanation: "Comparative of 'tall' is 'taller'. 'Much' emphasizes it.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Comparatives and Superlatives"
  },
  {
    id: "q89",
    prompt: "Translate 'Questa è la città più costosa d\'Europa.'",
    options: [
      "This is the most expensive city in Europe.",
      "This is the more expensive city in Europe.",
      "This is the expensivest city in Europe.",
      "This is most expensive city in Europe."
    ],
    correctIndex: 0,
    explanation: "Superlative of long adjectives uses 'the most'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Comparatives and Superlatives"
  },
  {
    id: "q90",
    prompt: "Complete the sentence: 'I have been studying English _____ three years.'",
    options: [
      "for",
      "since",
      "from",
      "during"
    ],
    correctIndex: 0,
    explanation: "'For' is used for a duration or period of time.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "Prepositions of Time"
  },
  {
    id: "q91",
    prompt: "Translate 'Lavora in quella banca dal 2015.'",
    options: [
      "He has worked in that bank since 2015.",
      "He works in that bank from 2015.",
      "He worked in that bank since 2015.",
      "He has worked in that bank for 2015."
    ],
    correctIndex: 0,
    explanation: "'Since' refers to the starting point of an action.",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "Prepositions of Time"
  },
  {
    id: "q92",
    prompt: "Complete the sentence: 'She hasn\'t eaten anything _____ yesterday morning.'",
    options: [
      "since",
      "for",
      "from",
      "until"
    ],
    correctIndex: 0,
    explanation: "'Yesterday morning' is a specific point in time, so we use 'since'.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "Prepositions of Time"
  },
  {
    id: "q93",
    prompt: "Translate 'Stiamo aspettando da due ore.'",
    options: [
      "We have been waiting for two hours.",
      "We are waiting since two hours.",
      "We have been waiting since two hours.",
      "We wait for two hours."
    ],
    correctIndex: 0,
    explanation: "Duration (two hours) requires 'for'.",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "Prepositions of Time"
  },
  {
    id: "q94",
    prompt: "Complete the sentence: 'I haven\'t seen him _____ a long time.'",
    options: [
      "for",
      "since",
      "during",
      "in"
    ],
    correctIndex: 0,
    explanation: "'A long time' is a period, so we use 'for'.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "Prepositions of Time"
  },
  {
    id: "q95",
    prompt: "Complete the sentence: 'He usually _____ up at 7 AM.'",
    options: [
      "wakes",
      "wake",
      "is waking",
      "waked"
    ],
    correctIndex: 0,
    explanation: "Routines require Present Simple, third person adds -s.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Present Simple"
  },
  {
    id: "q96",
    prompt: "Translate 'I miei genitori non vivono a Londra.'",
    options: [
      "My parents don't live in London.",
      "My parents doesn't live in London.",
      "My parents aren't live in London.",
      "My parents not live in London."
    ],
    correctIndex: 0,
    explanation: "Plural subject negative uses 'don't'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Present Simple"
  },
  {
    id: "q97",
    prompt: "Complete the sentence: '_____ she like chocolate?'",
    options: [
      "Does",
      "Do",
      "Is",
      "Has"
    ],
    correctIndex: 0,
    explanation: "Question auxiliary for third person singular is 'Does'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Present Simple"
  },
  {
    id: "q98",
    prompt: "Translate 'Il treno parte alle 8 in punto.'",
    options: [
      "The train leaves at 8 o'clock.",
      "The train is leaving at 8 o'clock.",
      "The train leave at 8 o'clock.",
      "The train left at 8 o'clock."
    ],
    correctIndex: 0,
    explanation: "Scheduled events use Present Simple.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Present Simple"
  },
  {
    id: "q99",
    prompt: "Complete the sentence: 'Water _____ at 100 degrees Celsius.'",
    options: [
      "boils",
      "boil",
      "is boiling",
      "boiled"
    ],
    correctIndex: 0,
    explanation: "General facts use Present Simple.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Present Simple"
  },
  {
    id: "q100",
    prompt: "Complete the sentence: 'This is my _____ car.' (The car belongs to my friend)",
    options: [
      "friend's",
      "friends'",
      "friend",
      "friends"
    ],
    correctIndex: 0,
    explanation: "Singular possessive adds 's.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Possessive S"
  },
  {
    id: "q101",
    prompt: "Translate 'Dov\'è il computer di Marco?'",
    options: [
      "Where is Marco's computer?",
      "Where is the computer of Marco?",
      "Where is Marcos' computer?",
      "Where is Marco computer?"
    ],
    correctIndex: 0,
    explanation: "Possessive 's is preferred for people.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Possessive S"
  },
  {
    id: "q102",
    prompt: "Complete the sentence: 'Those are my _____ toys.' (The toys belong to my dogs)",
    options: [
      "dogs'",
      "dog's",
      "dogs",
      "dog"
    ],
    correctIndex: 0,
    explanation: "Regular plural nouns just add an apostrophe after the 's'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Possessive S"
  },
  {
    id: "q103",
    prompt: "Translate 'La borsa di Sarah è rossa.'",
    options: [
      "Sarah's bag is red.",
      "The bag of Sarah is red.",
      "Sarahs bag is red.",
      "Sarah' bag is red."
    ],
    correctIndex: 0,
    explanation: "Possessive 's shows ownership.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Possessive S"
  },
  {
    id: "q104",
    prompt: "Complete the sentence: 'We went to the _____ house yesterday.' (The house belongs to my parents)",
    options: [
      "parents'",
      "parent's",
      "parents",
      "parent"
    ],
    correctIndex: 0,
    explanation: "Plural noun ending in 's' gets an apostrophe at the end.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Possessive S"
  },
  {
    id: "q105",
    prompt: "Complete the sentence: 'How _____ milk is left?'",
    options: [
      "much",
      "many",
      "a lot of",
      "any"
    ],
    correctIndex: 0,
    explanation: "'Milk' is uncountable, so we use 'much'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Quantifiers"
  },
  {
    id: "q106",
    prompt: "Translate 'Non ho molti amici.'",
    options: [
      "I don't have many friends.",
      "I don't have much friends.",
      "I don't have a lot friends.",
      "I haven't many friends."
    ],
    correctIndex: 0,
    explanation: "'Friends' is countable, so we use 'many' in negative sentences.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Quantifiers"
  },
  {
    id: "q107",
    prompt: "Complete the sentence: 'There are _____ people at the concert.'",
    options: [
      "a lot of",
      "much",
      "a lot",
      "many of"
    ],
    correctIndex: 0,
    explanation: "We use 'a lot of' for large quantities in affirmative sentences.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Quantifiers"
  },
  {
    id: "q108",
    prompt: "Translate 'Quanto zucchero vuoi nel caffè?'",
    options: [
      "How much sugar do you want in your coffee?",
      "How many sugar do you want in your coffee?",
      "How much of sugar do you want in your coffee?",
      "What much sugar do you want in your coffee?"
    ],
    correctIndex: 0,
    explanation: "Sugar is uncountable, so 'How much'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Quantifiers"
  },
  {
    id: "q109",
    prompt: "Complete the sentence: 'She has _____ free time these days.'",
    options: [
      "not much",
      "not many",
      "no many",
      "none"
    ],
    correctIndex: 0,
    explanation: "'Time' is uncountable.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Quantifiers"
  },
  {
    id: "q110",
    prompt: "Translate 'Ci sono troppe macchine in questa città.'",
    options: [
      "There are too many cars in this city.",
      "There is too much cars in this city.",
      "There are too much cars in this city.",
      "There are very many cars in this city."
    ],
    correctIndex: 0,
    explanation: "'Cars' is countable, so 'too many'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Quantifiers"
  },
  {
    id: "q111",
    prompt: "Complete the sentence: 'Where _____ you born?'",
    options: [
      "were",
      "was",
      "are",
      "did"
    ],
    correctIndex: 0,
    explanation: "Past of 'to be' for 'you' is 'were'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Questions and Origins"
  },
  {
    id: "q112",
    prompt: "Translate 'Da dove viene tuo fratello?'",
    options: [
      "Where does your brother come from?",
      "Where do your brother come from?",
      "Where is your brother come from?",
      "Where does your brother comes from?"
    ],
    correctIndex: 0,
    explanation: "Third person singular uses 'does' auxiliary.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Questions and Origins"
  },
  {
    id: "q113",
    prompt: "Complete the sentence: '_____ country are you from?'",
    options: [
      "Which",
      "What",
      "Where",
      "How"
    ],
    correctIndex: 0,
    explanation: "'Which' is used for a limited choice, 'What' is sometimes used, but 'Which country' is common. Actually, 'Which' is standard.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Questions and Origins"
  },
  {
    id: "q114",
    prompt: "Translate 'Loro sono spagnoli?'",
    options: [
      "Are they Spanish?",
      "Are they Spain?",
      "Do they Spanish?",
      "Is they Spanish?"
    ],
    correctIndex: 0,
    explanation: "Simple 'to be' question.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Questions and Origins"
  },
  {
    id: "q115",
    prompt: "Complete the sentence: '_____ is the capital of Italy?'",
    options: [
      "What",
      "Where",
      "Which",
      "Who"
    ],
    correctIndex: 0,
    explanation: "'What' asks for specific information.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Questions and Origins"
  },
  {
    id: "q116",
    prompt: "Translate 'Di dov\'è Maria?'",
    options: [
      "Where is Maria from?",
      "Where does Maria from?",
      "From where is Maria?",
      "Where Maria is from?"
    ],
    correctIndex: 0,
    explanation: "Standard phrasing for asking origins.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Questions and Origins"
  }
,
  {
    id: "q117",
    prompt: "Translate 'Questo è il libro più lungo che abbia mai letto.'",
    options: [
      "This is the longest book I have ever read.",
      "This is the most long book I have ever read.",
      "This is the longer book I have ever read.",
      "This is longest book I have ever read."
    ],
    correctIndex: 0,
    explanation: "Superlative of short adjectives takes -est.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Comparatives and Superlatives"
  },
  {
    id: "q118",
    prompt: "Complete: 'My car is _____ than yours.'",
    options: [
      "faster",
      "more fast",
      "fastest",
      "the fastest"
    ],
    correctIndex: 0,
    explanation: "Comparative of fast is faster.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Comparatives and Superlatives"
  },
  {
    id: "q119",
    prompt: "Translate 'Oggi è molto più caldo di ieri.'",
    options: [
      "Today is much hotter than yesterday.",
      "Today is much more hot than yesterday.",
      "Today is very hotter than yesterday.",
      "Today is hotter that yesterday."
    ],
    correctIndex: 0,
    explanation: "'much' emphasizes the comparative 'hotter'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Comparatives and Superlatives"
  },
  {
    id: "q120",
    prompt: "Complete: 'She is the _____ student in the class.'",
    options: [
      "best",
      "better",
      "most good",
      "goodest"
    ],
    correctIndex: 0,
    explanation: "Irregular superlative of good is best.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Comparatives and Superlatives"
  },
  {
    id: "q121",
    prompt: "Translate 'Sua sorella è meno socievole di lui.'",
    options: [
      "His sister is less outgoing than him.",
      "His sister is least outgoing than him.",
      "His sister is not outgoing than him.",
      "His sister is minor outgoing than him."
    ],
    correctIndex: 0,
    explanation: "Less + adjective + than is used for inferior comparatives.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Comparatives and Superlatives"
  },
  {
    id: "q122",
    prompt: "Complete: 'This exercise is _____ difficult than the previous one.'",
    options: [
      "more",
      "much",
      "most",
      "very"
    ],
    correctIndex: 0,
    explanation: "Long adjectives use 'more' for comparative.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Comparatives and Superlatives"
  },
  {
    id: "q123",
    prompt: "Translate 'Questo è il posto meno costoso in città.'",
    options: [
      "This is the least expensive place in town.",
      "This is the less expensive place in town.",
      "This is the not expensive place in town.",
      "This is the most cheap place in town."
    ],
    correctIndex: 0,
    explanation: "Superlative of inferiority is 'the least'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Comparatives and Superlatives"
  },
  {
    id: "q124",
    prompt: "Complete: 'He is _____ taller than his brother.'",
    options: [
      "slightly",
      "a little of",
      "few",
      "small"
    ],
    correctIndex: 0,
    explanation: "You can modify comparatives with words like slightly, much, a lot.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Comparatives and Superlatives"
  },
  {
    id: "q125",
    prompt: "Complete: 'If I have time, I _____ you.'",
    options: [
      "will help",
      "help",
      "would help",
      "helped"
    ],
    correctIndex: 0,
    explanation: "First conditional: if + present, will + base verb.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "First Conditional"
  },
  {
    id: "q126",
    prompt: "Translate 'Se lei studierà, passerà il test.'",
    options: [
      "If she studies, she will pass the test.",
      "If she will study, she will pass the test.",
      "If she study, she will pass the test.",
      "If she studied, she will pass the test."
    ],
    correctIndex: 0,
    explanation: "Present simple in the if clause, will in the main clause.",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "First Conditional"
  },
  {
    id: "q127",
    prompt: "Complete: 'We won\'t go to the park if it _____.'",
    options: [
      "rains",
      "will rain",
      "rain",
      "raining"
    ],
    correctIndex: 0,
    explanation: "If clause uses present simple.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "First Conditional"
  },
  {
    id: "q128",
    prompt: "Translate 'Cosa dirai se lui ti chiamerà?'",
    options: [
      "What will you say if he calls you?",
      "What do you say if he will call you?",
      "What will you say if he will call you?",
      "What would you say if he calls you?"
    ],
    correctIndex: 0,
    explanation: "Question form: Wh- word + will + subject + verb + if + present simple.",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "First Conditional"
  },
  {
    id: "q129",
    prompt: "Complete: 'If they don\'t hurry, they _____ the bus.'",
    options: [
      "will miss",
      "miss",
      "would miss",
      "missed"
    ],
    correctIndex: 0,
    explanation: "Main clause uses will.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "First Conditional"
  },
  {
    id: "q130",
    prompt: "Translate 'Se non mi aiuti, non finirò il progetto.'",
    options: [
      "If you don't help me, I won't finish the project.",
      "If you won't help me, I don't finish the project.",
      "If you not help me, I won't finish the project.",
      "If you didn't help me, I won't finish the project."
    ],
    correctIndex: 0,
    explanation: "Negative present simple in if clause, won't in main clause.",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "First Conditional"
  },
  {
    id: "q131",
    prompt: "Complete: 'If she _____ the job, she will move to London.'",
    options: [
      "gets",
      "get",
      "will get",
      "got"
    ],
    correctIndex: 0,
    explanation: "Third person singular needs 's' in present simple.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "First Conditional"
  },
  {
    id: "q132",
    prompt: "Translate 'Gli parlerò se lo vedo.'",
    options: [
      "I will talk to him if I see him.",
      "I talk to him if I will see him.",
      "I will talk to him if I will see him.",
      "I would talk to him if I see him."
    ],
    correctIndex: 0,
    explanation: "Will in main clause, present in if clause.",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "First Conditional"
  },
  {
    id: "q133",
    prompt: "Complete: 'Unless you _____, you won\'t succeed.'",
    options: [
      "try",
      "will try",
      "don't try",
      "tried"
    ],
    correctIndex: 0,
    explanation: "Unless means 'if not', so it's followed by an affirmative verb.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "First Conditional"
  },
  {
    id: "q134",
    prompt: "Translate 'A meno che non piova, andremo a fare una passeggiata.'",
    options: [
      "Unless it rains, we will go for a walk.",
      "Unless it doesn't rain, we will go for a walk.",
      "If it unless rains, we will go for a walk.",
      "Unless it will rain, we will go for a walk."
    ],
    correctIndex: 0,
    explanation: "Unless is followed by affirmative present simple.",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "First Conditional"
  },
  {
    id: "q135",
    prompt: "Complete: 'I will buy that car if it _____ too expensive.'",
    options: [
      "isn't",
      "won't be",
      "doesn't be",
      "aren't"
    ],
    correctIndex: 0,
    explanation: "Verb 'to be' in present simple negative for third person singular.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "First Conditional"
  },
  {
    id: "q136",
    prompt: "Complete: 'I usually go to bed _____ 11 PM.'",
    options: [
      "at",
      "in",
      "on",
      "by"
    ],
    correctIndex: 0,
    explanation: "Use 'at' for specific times.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "General"
  },
  {
    id: "q137",
    prompt: "Translate 'Non mi piace il caffè.'",
    options: [
      "I don't like coffee.",
      "I'm not like coffee.",
      "I doesn't like coffee.",
      "I not like coffee."
    ],
    correctIndex: 0,
    explanation: "Present simple negative for I/you/we/they uses 'don't'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "General"
  },
  {
    id: "q138",
    prompt: "Complete: 'They _____ to Paris next weekend.'",
    options: [
      "are going",
      "go",
      "went",
      "have gone"
    ],
    correctIndex: 0,
    explanation: "Present continuous can be used for arranged future plans.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "General"
  },
  {
    id: "q139",
    prompt: "Translate 'Posso aiutarti?'",
    options: [
      "Can I help you?",
      "Do I can help you?",
      "Am I help you?",
      "May I helping you?"
    ],
    correctIndex: 0,
    explanation: "Modal verbs like 'can' don't use 'do' in questions.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "General"
  },
  {
    id: "q140",
    prompt: "Complete: 'She is interested _____ learning Spanish.'",
    options: [
      "in",
      "on",
      "at",
      "about"
    ],
    correctIndex: 0,
    explanation: "The adjective 'interested' is followed by the preposition 'in'.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "General"
  },
  {
    id: "q141",
    prompt: "Translate 'Dobbiamo andare ora.'",
    options: [
      "We must go now.",
      "We have go now.",
      "We are must go now.",
      "We need going now."
    ],
    correctIndex: 0,
    explanation: "'Must' is followed by the base form of the verb.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "General"
  },
  {
    id: "q142",
    prompt: "Complete: 'I look forward _____ from you soon.'",
    options: [
      "to hearing",
      "to hear",
      "hearing",
      "hear"
    ],
    correctIndex: 0,
    explanation: "'Look forward to' is followed by the -ing form (gerund).",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "General"
  },
  {
    id: "q143",
    prompt: "Translate 'Ero molto stanco ieri sera.'",
    options: [
      "I was very tired last night.",
      "I am very tired last night.",
      "I had very tired last night.",
      "I were very tired last night."
    ],
    correctIndex: 0,
    explanation: "Past simple of 'to be' for 'I' is 'was'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "General"
  },
  {
    id: "q144",
    prompt: "Complete: 'This is the book _____ I borrowed from the library.'",
    options: [
      "which",
      "who",
      "where",
      "what"
    ],
    correctIndex: 0,
    explanation: "Relative pronoun 'which' or 'that' is used for things.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "General"
  },
  {
    id: "q145",
    prompt: "Translate 'Lei sa nuotare molto bene.'",
    options: [
      "She can swim very well.",
      "She can swims very well.",
      "She knows swim very well.",
      "She knows to swim very well."
    ],
    correctIndex: 0,
    explanation: "Ability is expressed with 'can' + base verb.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "General"
  },
  {
    id: "q146",
    prompt: "Complete: 'You _____ smoke in the hospital.'",
    options: [
      "mustn't",
      "don't have to",
      "needn't",
      "aren't"
    ],
    correctIndex: 0,
    explanation: "'Mustn't' expresses prohibition.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "General"
  },
  {
    id: "q147",
    prompt: "Translate 'Non ho abbastanza soldi.'",
    options: [
      "I don't have enough money.",
      "I have not enough money.",
      "I don't have money enough.",
      "I haven't enough money."
    ],
    correctIndex: 0,
    explanation: "Present simple negative uses 'don't have', 'enough' comes before nouns.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "General"
  },
  {
    id: "q148",
    prompt: "Complete: 'That is _____ jacket.' (The jacket belongs to Tom)",
    options: [
      "Tom's",
      "Toms'",
      "Tom",
      "Toms"
    ],
    correctIndex: 0,
    explanation: "Add 's to singular names.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Possessive S"
  },
  {
    id: "q149",
    prompt: "Translate 'La casa dei miei nonni è grande.'",
    options: [
      "My grandparents' house is big.",
      "My grandparent's house is big.",
      "The house of my grandparents is big.",
      "My grandparents house is big."
    ],
    correctIndex: 0,
    explanation: "Plural nouns ending in -s just take an apostrophe.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Possessive S"
  },
  {
    id: "q150",
    prompt: "Complete: 'I love _____ new song.' (The song of the band)",
    options: [
      "the band's",
      "the bands'",
      "the band",
      "the bands"
    ],
    correctIndex: 0,
    explanation: "Singular noun 'band' takes 's.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Possessive S"
  },
  {
    id: "q151",
    prompt: "Translate 'I giocattoli dei bambini sono sparsi ovunque.'",
    options: [
      "The children's toys are everywhere.",
      "The childrens' toys are everywhere.",
      "The children toys are everywhere.",
      "The toys of children are everywhere."
    ],
    correctIndex: 0,
    explanation: "Irregular plurals not ending in -s take 's.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Possessive S"
  },
  {
    id: "q152",
    prompt: "Complete: 'This is _____ desk.' (The desk belongs to the boss)",
    options: [
      "the boss's",
      "the boss'",
      "the boss",
      "the bosses"
    ],
    correctIndex: 0,
    explanation: "Singular nouns ending in -s usually take 's.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Possessive S"
  },
  {
    id: "q153",
    prompt: "Translate 'La macchina di James è blu.'",
    options: [
      "James's car is blue.",
      "James car is blue.",
      "The car of James is blue.",
      "Jame's car is blue."
    ],
    correctIndex: 0,
    explanation: "Names ending in -s can take 's or just an apostrophe. 'James's' is common.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Possessive S"
  },
  {
    id: "q154",
    prompt: "Complete: 'I went to the _____.' (The shop of the baker)",
    options: [
      "baker's",
      "bakers'",
      "baker",
      "bakers"
    ],
    correctIndex: 0,
    explanation: "Possessive form is often used alone for shops/businesses.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Possessive S"
  },
  {
    id: "q155",
    prompt: "Translate 'È il compleanno di mia madre.'",
    options: [
      "It's my mother's birthday.",
      "It's the birthday of my mother.",
      "It's my mothers birthday.",
      "It's my mother birthday."
    ],
    correctIndex: 0,
    explanation: "Possessive 's for people.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Possessive S"
  },
  {
    id: "q156",
    prompt: "Complete: 'We are meeting at _____.' (The house of Paul)",
    options: [
      "Paul's",
      "Pauls'",
      "Paul",
      "Pauls"
    ],
    correctIndex: 0,
    explanation: "Possessive form is often used alone for people's houses.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Possessive S"
  },
  {
    id: "q157",
    prompt: "Translate 'Le scarpe da donna sono al secondo piano.'",
    options: [
      "Women's shoes are on the second floor.",
      "Womens' shoes are on the second floor.",
      "Woman's shoes are on the second floor.",
      "Women shoes are on the second floor."
    ],
    correctIndex: 0,
    explanation: "Irregular plural 'women' takes 's.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Possessive S"
  },
  {
    id: "q158",
    prompt: "Complete: 'The _____ room is down the hall.' (The room for teachers)",
    options: [
      "teachers'",
      "teacher's",
      "teachers",
      "teacher"
    ],
    correctIndex: 0,
    explanation: "Plural 'teachers' takes an apostrophe after the s.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Possessive S"
  },
  {
    id: "q159",
    prompt: "Translate 'Hai visto le chiavi di Anna?'",
    options: [
      "Have you seen Anna's keys?",
      "Have you seen the keys of Anna?",
      "Have you seen Annas keys?",
      "Have you seen Anna keys?"
    ],
    correctIndex: 0,
    explanation: "Singular name takes 's.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Possessive S"
  }
,
  {
    id: "q160",
    prompt: "Complete: 'I have known him _____ 2010.'",
    options: [
      "since",
      "for",
      "from",
      "in"
    ],
    correctIndex: 0,
    explanation: "'Since' indicates a specific starting point in the past.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "Prepositions of Time"
  },
  {
    id: "q161",
    prompt: "Translate 'Lavorano qui da molti anni.'",
    options: [
      "They have worked here for many years.",
      "They work here since many years.",
      "They have worked here since many years.",
      "They work here for many years."
    ],
    correctIndex: 0,
    explanation: "'For' is used for a duration.",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "Prepositions of Time"
  },
  {
    id: "q162",
    prompt: "Complete: 'They _____ tennis right now.'",
    options: [
      "are playing",
      "play",
      "playing",
      "is playing"
    ],
    correctIndex: 0,
    explanation: "Actions happening now use present continuous.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Present Continuous"
  },
  {
    id: "q163",
    prompt: "Translate 'Perché stai piangendo?'",
    options: [
      "Why are you crying?",
      "Why do you cry?",
      "Why you are crying?",
      "Why you cry?"
    ],
    correctIndex: 0,
    explanation: "Question word + are + subject + verb-ing.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Present Continuous"
  },
  {
    id: "q164",
    prompt: "Complete: 'I _____ to the doctor tomorrow afternoon.'",
    options: [
      "am going",
      "go",
      "went",
      "going"
    ],
    correctIndex: 0,
    explanation: "Present continuous is used for arranged future plans.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Present Continuous"
  },
  {
    id: "q165",
    prompt: "Translate 'Il sole sta splendendo.'",
    options: [
      "The sun is shining.",
      "The sun shines.",
      "The sun shining.",
      "The sun are shining."
    ],
    correctIndex: 0,
    explanation: "Action happening now.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Present Continuous"
  },
  {
    id: "q166",
    prompt: "Complete: 'Look! The bus _____.'",
    options: [
      "is coming",
      "comes",
      "coming",
      "come"
    ],
    correctIndex: 0,
    explanation: "'Look!' indicates an action happening at the moment.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Present Continuous"
  },
  {
    id: "q167",
    prompt: "Translate 'Non stiamo usando il computer adesso.'",
    options: [
      "We aren't using the computer right now.",
      "We don't use the computer right now.",
      "We not using the computer right now.",
      "We isn't using the computer right now."
    ],
    correctIndex: 0,
    explanation: "Negative present continuous.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Present Continuous"
  },
  {
    id: "q168",
    prompt: "Complete: '_____ he watching TV?'",
    options: [
      "Is",
      "Does",
      "Are",
      "Do"
    ],
    correctIndex: 0,
    explanation: "Auxiliary 'to be' for third person singular is 'is'.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Present Continuous"
  },
  {
    id: "q169",
    prompt: "Translate 'Sto cercando le mie chiavi.'",
    options: [
      "I am looking for my keys.",
      "I look for my keys.",
      "I am searching my keys.",
      "I looking for my keys."
    ],
    correctIndex: 0,
    explanation: "'Look for' means 'cercare', present continuous for current action.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Present Continuous"
  },
  {
    id: "q170",
    prompt: "Complete: 'The kids _____ sleeping in their room.'",
    options: [
      "are",
      "is",
      "do",
      "does"
    ],
    correctIndex: 0,
    explanation: "Plural subject 'kids' takes 'are'.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Present Continuous"
  },
  {
    id: "q171",
    prompt: "Complete: 'I have _____ finished my dinner.'",
    options: [
      "already",
      "yet",
      "ever",
      "since"
    ],
    correctIndex: 0,
    explanation: "'Already' is used in affirmative sentences for completed actions.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "Present Perfect"
  },
  {
    id: "q172",
    prompt: "Translate 'È la prima volta che guido una macchina.'",
    options: [
      "It's the first time I have driven a car.",
      "It's the first time I drive a car.",
      "It's the first time I drove a car.",
      "It's the first time I am driving a car."
    ],
    correctIndex: 0,
    explanation: "'First time' expressions use the present perfect.",
    category: "Traduzione",
    level: "B1",
    grammarTopic: "Present Perfect"
  },
  {
    id: "q173",
    prompt: "Complete: 'She _____ coffee every morning.'",
    options: [
      "drinks",
      "drink",
      "is drinking",
      "drank"
    ],
    correctIndex: 0,
    explanation: "Habits use present simple. Third person adds -s.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Present Simple"
  },
  {
    id: "q174",
    prompt: "Translate 'Io lavoro in un ospedale.'",
    options: [
      "I work in a hospital.",
      "I am working in a hospital.",
      "I works in a hospital.",
      "I work to a hospital."
    ],
    correctIndex: 0,
    explanation: "Permanent situations use present simple.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Present Simple"
  },
  {
    id: "q175",
    prompt: "Complete: 'They _____ play tennis on Sundays.'",
    options: [
      "don't",
      "doesn't",
      "aren't",
      "isn't"
    ],
    correctIndex: 0,
    explanation: "Plural negative present simple uses 'don't'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Present Simple"
  },
  {
    id: "q176",
    prompt: "Translate 'Lui non capisce la domanda.'",
    options: [
      "He doesn't understand the question.",
      "He don't understand the question.",
      "He isn't understand the question.",
      "He not understands the question."
    ],
    correctIndex: 0,
    explanation: "Third person singular negative uses 'doesn't'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Present Simple"
  },
  {
    id: "q177",
    prompt: "Complete: '_____ you speak English?'",
    options: [
      "Do",
      "Are",
      "Does",
      "Is"
    ],
    correctIndex: 0,
    explanation: "Question auxiliary for 'you' in present simple is 'do'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Present Simple"
  },
  {
    id: "q178",
    prompt: "Translate 'Cosa significa questa parola?'",
    options: [
      "What does this word mean?",
      "What means this word?",
      "What do this word mean?",
      "What is meaning this word?"
    ],
    correctIndex: 0,
    explanation: "Question uses 'does' for third person singular ('this word').",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Present Simple"
  },
  {
    id: "q179",
    prompt: "Complete: 'The sun _____ in the east.'",
    options: [
      "rises",
      "rise",
      "is rising",
      "rose"
    ],
    correctIndex: 0,
    explanation: "Universal facts use present simple.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Present Simple"
  },
  {
    id: "q180",
    prompt: "Translate 'Quante volte vai in palestra?'",
    options: [
      "How often do you go to the gym?",
      "How often you go to the gym?",
      "How much time do you go to the gym?",
      "How many times you go to the gym?"
    ],
    correctIndex: 0,
    explanation: "'How often' asks about frequency.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Present Simple"
  },
  {
    id: "q181",
    prompt: "Complete: 'My brother never _____ his room.'",
    options: [
      "cleans",
      "clean",
      "is cleaning",
      "cleaned"
    ],
    correctIndex: 0,
    explanation: "Adverbs of frequency are used with present simple.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Present Simple"
  },
  {
    id: "q182",
    prompt: "Translate 'Lei ha due gatti e un cane.'",
    options: [
      "She has two cats and a dog.",
      "She have two cats and a dog.",
      "She is having two cats and a dog.",
      "She got two cats and a dog."
    ],
    correctIndex: 0,
    explanation: "Third person singular of 'have' is 'has'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Present Simple"
  },
  {
    id: "q183",
    prompt: "Complete: 'We _____ like spicy food.'",
    options: [
      "don't",
      "doesn't",
      "not",
      "aren't"
    ],
    correctIndex: 0,
    explanation: "Negative present simple for 'we'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Present Simple"
  },
  {
    id: "q184",
    prompt: "Translate 'Il film inizia alle 20:30.'",
    options: [
      "The movie starts at 8:30 PM.",
      "The movie is starting at 8:30 PM.",
      "The movie start at 8:30 PM.",
      "The movie will starting at 8:30 PM."
    ],
    correctIndex: 0,
    explanation: "Timetables use present simple.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Present Simple"
  },
  {
    id: "q185",
    prompt: "Complete: 'Does he _____ in London?'",
    options: [
      "live",
      "lives",
      "living",
      "lived"
    ],
    correctIndex: 0,
    explanation: "After 'does', use the base form of the verb.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Present Simple"
  },
  {
    id: "q186",
    prompt: "Complete: 'I have _____ money in my pocket.'",
    options: [
      "some",
      "any",
      "many",
      "few"
    ],
    correctIndex: 0,
    explanation: "Affirmative uncountable noun uses 'some'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Quantifiers"
  },
  {
    id: "q187",
    prompt: "Translate 'Non ci sono mele.'",
    options: [
      "There aren't any apples.",
      "There aren't some apples.",
      "There aren't no apples.",
      "There are any apples."
    ],
    correctIndex: 0,
    explanation: "Negative countable uses 'any'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Quantifiers"
  },
  {
    id: "q188",
    prompt: "Complete: 'Do you have _____ questions?'",
    options: [
      "any",
      "some",
      "much",
      "little"
    ],
    correctIndex: 0,
    explanation: "Questions generally use 'any'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Quantifiers"
  },
  {
    id: "q189",
    prompt: "Translate 'Vorresti del tè?'",
    options: [
      "Would you like some tea?",
      "Would you like any tea?",
      "Do you like some tea?",
      "Would you like much tea?"
    ],
    correctIndex: 0,
    explanation: "Offers use 'some', not 'any'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Quantifiers"
  },
  {
    id: "q190",
    prompt: "Complete: 'There are only a _____ students in the class.'",
    options: [
      "few",
      "little",
      "much",
      "many"
    ],
    correctIndex: 0,
    explanation: "'Students' is countable, so 'a few'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Quantifiers"
  },
  {
    id: "q191",
    prompt: "Translate 'Ho pochissimo tempo.'",
    options: [
      "I have very little time.",
      "I have very few time.",
      "I have much little time.",
      "I have very small time."
    ],
    correctIndex: 0,
    explanation: "'Time' is uncountable, so 'little'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Quantifiers"
  },
  {
    id: "q192",
    prompt: "Complete: 'She reads a _____ of books.'",
    options: [
      "lot",
      "many",
      "much",
      "some"
    ],
    correctIndex: 0,
    explanation: "The phrase is 'a lot of'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Quantifiers"
  },
  {
    id: "q193",
    prompt: "Translate 'Abbiamo mangiato troppa pizza.'",
    options: [
      "We ate too much pizza.",
      "We ate too many pizza.",
      "We ate very much pizza.",
      "We ate a lot pizza."
    ],
    correctIndex: 0,
    explanation: "'Pizza' in general is uncountable, so 'too much'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Quantifiers"
  },
  {
    id: "q194",
    prompt: "Complete: 'How _____ apples do you want?'",
    options: [
      "many",
      "much",
      "some",
      "any"
    ],
    correctIndex: 0,
    explanation: "'Apples' is countable, so 'How many'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Quantifiers"
  },
  {
    id: "q195",
    prompt: "Translate 'Non abbiamo comprato niente.'",
    options: [
      "We didn't buy anything.",
      "We bought anything.",
      "We didn't buy nothing.",
      "We didn't buy some."
    ],
    correctIndex: 0,
    explanation: "Negative sentence requires 'anything'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Quantifiers"
  },
  {
    id: "q196",
    prompt: "Complete: 'Is there _____ good on TV?'",
    options: [
      "anything",
      "something",
      "nothing",
      "everything"
    ],
    correctIndex: 0,
    explanation: "Questions generally use 'anything'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Quantifiers"
  }
,
  {
    id: "q197",
    prompt: "Complete: '_____ is that man?'",
    options: [
      "Who",
      "What",
      "Which",
      "Where"
    ],
    correctIndex: 0,
    explanation: "Asking for a person's identity requires 'Who'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Questions and Origins"
  },
  {
    id: "q198",
    prompt: "Translate 'Perché sei in ritardo?'",
    options: [
      "Why are you late?",
      "Because are you late?",
      "Why you are late?",
      "Why do you late?"
    ],
    correctIndex: 0,
    explanation: "Asking for a reason requires 'Why'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Questions and Origins"
  },
  {
    id: "q199",
    prompt: "Complete: '_____ old are you?'",
    options: [
      "How",
      "What",
      "Who",
      "Which"
    ],
    correctIndex: 0,
    explanation: "Asking about age uses 'How old'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Questions and Origins"
  },
  {
    id: "q200",
    prompt: "Translate 'Quando è il tuo compleanno?'",
    options: [
      "When is your birthday?",
      "Where is your birthday?",
      "What is your birthday?",
      "How is your birthday?"
    ],
    correctIndex: 0,
    explanation: "Asking for time/date requires 'When'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Questions and Origins"
  },
  {
    id: "q201",
    prompt: "Complete: '_____ do you live?'",
    options: [
      "Where",
      "What",
      "How",
      "When"
    ],
    correctIndex: 0,
    explanation: "Asking for a place requires 'Where'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Questions and Origins"
  },
  {
    id: "q202",
    prompt: "Translate 'Come vai al lavoro?'",
    options: [
      "How do you go to work?",
      "What do you go to work?",
      "Where do you go to work?",
      "Why do you go to work?"
    ],
    correctIndex: 0,
    explanation: "Asking for method/manner requires 'How'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Questions and Origins"
  },
  {
    id: "q203",
    prompt: "Complete: '_____ is your favorite color?'",
    options: [
      "What",
      "Which",
      "Who",
      "How"
    ],
    correctIndex: 0,
    explanation: "Asking for general preference uses 'What'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Questions and Origins"
  },
  {
    id: "q204",
    prompt: "Translate 'Di chi è questa borsa?'",
    options: [
      "Whose bag is this?",
      "Who bag is this?",
      "Which bag is this?",
      "What bag is this?"
    ],
    correctIndex: 0,
    explanation: "Asking for possession requires 'Whose'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Questions and Origins"
  },
  {
    id: "q205",
    prompt: "Complete: '_____ time does the movie start?'",
    options: [
      "What",
      "Which",
      "When",
      "How"
    ],
    correctIndex: 0,
    explanation: "Asking for a specific time uses 'What time'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Questions and Origins"
  },
  {
    id: "q206",
    prompt: "Translate 'Quanto costa questo libro?'",
    options: [
      "How much does this book cost?",
      "How many does this book cost?",
      "How price is this book?",
      "What cost this book?"
    ],
    correctIndex: 0,
    explanation: "Asking for price uses 'How much'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Questions and Origins"
  },
  {
    id: "q207",
    prompt: "Complete: '_____ languages do you speak?'",
    options: [
      "How many",
      "How much",
      "What",
      "Which"
    ],
    correctIndex: 0,
    explanation: "'Languages' is countable, so 'How many'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Questions and Origins"
  },
  {
    id: "q208",
    prompt: "Complete: '_____ a big tree in the garden.'",
    options: [
      "There is",
      "There are",
      "It is",
      "They are"
    ],
    correctIndex: 0,
    explanation: "Singular noun 'tree' requires 'There is'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "There is / There are"
  },
  {
    id: "q209",
    prompt: "Translate 'Ci sono tre sedie nella stanza.'",
    options: [
      "There are three chairs in the room.",
      "They are three chairs in the room.",
      "There is three chairs in the room.",
      "Have three chairs in the room."
    ],
    correctIndex: 0,
    explanation: "Plural noun 'chairs' requires 'There are'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "There is / There are"
  },
  {
    id: "q210",
    prompt: "Complete: '_____ any messages for me?'",
    options: [
      "Are there",
      "Is there",
      "Do there",
      "Have there"
    ],
    correctIndex: 0,
    explanation: "Question form for plural 'messages' is 'Are there'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "There is / There are"
  },
  {
    id: "q211",
    prompt: "Translate 'C\'è un buon ristorante qui vicino?'",
    options: [
      "Is there a good restaurant near here?",
      "Are there a good restaurant near here?",
      "There is a good restaurant near here?",
      "Does there a good restaurant near here?"
    ],
    correctIndex: 0,
    explanation: "Question form for singular noun.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "There is / There are"
  },
  {
    id: "q212",
    prompt: "Complete: 'There _____ a lot of people at the party.'",
    options: [
      "were",
      "was",
      "are been",
      "is"
    ],
    correctIndex: 0,
    explanation: "'People' is plural, so 'were' for past.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "There is / There are"
  },
  {
    id: "q213",
    prompt: "Translate 'Non c\'era nessuno in casa.'",
    options: [
      "There was nobody at home.",
      "There wasn't nobody at home.",
      "There were nobody at home.",
      "It was nobody at home."
    ],
    correctIndex: 0,
    explanation: "Past singular existence with negative pronoun.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "There is / There are"
  },
  {
    id: "q214",
    prompt: "Complete: '_____ going to be a storm tomorrow.'",
    options: [
      "There is",
      "It is",
      "There are",
      "They are"
    ],
    correctIndex: 0,
    explanation: "Future existence 'There is going to be'.",
    category: "Grammatica",
    level: "B1",
    grammarTopic: "There is / There are"
  },
  {
    id: "q215",
    prompt: "Translate 'Ci sono dei biscotti nella scatola?'",
    options: [
      "Are there any biscuits in the box?",
      "Is there any biscuits in the box?",
      "Are there some biscuits in the box?",
      "Do there any biscuits in the box?"
    ],
    correctIndex: 0,
    explanation: "Question plural existence with 'any'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "There is / There are"
  },
  {
    id: "q216",
    prompt: "Complete: '_____ a mistake in this exercise.'",
    options: [
      "There is",
      "There are",
      "It is",
      "This is"
    ],
    correctIndex: 0,
    explanation: "Singular existence 'mistake'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "There is / There are"
  }
];
