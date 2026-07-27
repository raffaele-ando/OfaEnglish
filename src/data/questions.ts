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
];
