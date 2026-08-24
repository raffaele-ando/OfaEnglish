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
,
  {
    id: "q217",
    prompt: "Complete: 'This is not my pen. It is _____.'",
    options: [
      "yours",
      "your",
      "you",
      "yours'"
    ],
    correctIndex: 0,
    explanation: "Pronoun 'yours' replaces 'your pen'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Possessives"
  },
  {
    id: "q218",
    prompt: "Complete: '_____ car is parked outside.'",
    options: [
      "Her",
      "Hers",
      "She",
      "Hers'"
    ],
    correctIndex: 0,
    explanation: "Adjective 'Her' describes the car.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Possessives"
  },
  {
    id: "q219",
    prompt: "Complete: 'That house is _____.' (of us)",
    options: [
      "ours",
      "our",
      "we",
      "us"
    ],
    correctIndex: 0,
    explanation: "Pronoun 'ours' replaces 'our house'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Possessives"
  },
  {
    id: "q220",
    prompt: "Complete: 'Is this book _____?' (of him)",
    options: [
      "his",
      "him",
      "he",
      "his'"
    ],
    correctIndex: 0,
    explanation: "Pronoun 'his' indicates possession by a male.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Possessives"
  },
  {
    id: "q221",
    prompt: "Complete: 'These are _____ shoes.'",
    options: [
      "my",
      "mine",
      "me",
      "I"
    ],
    correctIndex: 0,
    explanation: "Adjective 'my' modifies shoes.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Possessives"
  },
  {
    id: "q222",
    prompt: "Complete: 'The dog is wagging _____ tail.'",
    options: [
      "its",
      "it's",
      "it",
      "its'"
    ],
    correctIndex: 0,
    explanation: "'Its' is the possessive adjective for animals/things without an apostrophe.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Possessives"
  },
  {
    id: "q223",
    prompt: "Complete: 'Are those keys _____?' (of them)",
    options: [
      "theirs",
      "their",
      "them",
      "they"
    ],
    correctIndex: 0,
    explanation: "Pronoun 'theirs' replaces 'their keys'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Possessives"
  },
  {
    id: "q224",
    prompt: "Complete: 'I lost _____ keys yesterday.'",
    options: [
      "my",
      "mine",
      "me",
      "I"
    ],
    correctIndex: 0,
    explanation: "Possessive adjective 'my' comes before the noun.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Possessives"
  },
  {
    id: "q225",
    prompt: "Complete: 'This laptop is _____, not yours.'",
    options: [
      "mine",
      "my",
      "me",
      "I"
    ],
    correctIndex: 0,
    explanation: "Pronoun 'mine' replaces 'my laptop'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Possessives"
  },
  {
    id: "q226",
    prompt: "Translate 'Questo libro è mio.'",
    options: [
      "This book is mine.",
      "This book is my.",
      "This book is me.",
      "This book is I."
    ],
    correctIndex: 0,
    explanation: "'Mio' at the end of the sentence is the pronoun 'mine'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Possessives"
  },
  {
    id: "q227",
    prompt: "Translate 'La loro casa è molto grande.'",
    options: [
      "Their house is very big.",
      "Theirs house is very big.",
      "They house is very big.",
      "Them house is very big."
    ],
    correctIndex: 0,
    explanation: "'Loro' as an adjective before a noun is 'their'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Possessives"
  },
  {
    id: "q228",
    prompt: "Translate 'Quella è la tua giacca, non la sua (di lei).'",
    options: [
      "That is your jacket, not hers.",
      "That is your jacket, not her.",
      "That is yours jacket, not hers.",
      "That is your jacket, not she."
    ],
    correctIndex: 0,
    explanation: "'La sua' without the noun is the pronoun 'hers'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Possessives"
  },
  {
    id: "q229",
    prompt: "Translate 'I nostri amici stanno arrivando.'",
    options: [
      "Our friends are coming.",
      "Ours friends are coming.",
      "We friends are coming.",
      "Us friends are coming."
    ],
    correctIndex: 0,
    explanation: "'Nostri' before the noun is 'our'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Possessives"
  },
  {
    id: "q230",
    prompt: "Translate 'Questi soldi sono vostri?'",
    options: [
      "Is this money yours?",
      "Is this money your?",
      "Are these money yours?",
      "Is this money you?"
    ],
    correctIndex: 0,
    explanation: "Money is uncountable singular, 'vostri' as a pronoun is 'yours'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Possessives"
  },
  {
    id: "q231",
    prompt: "Translate 'Il suo (di lui) telefono è nuovo.'",
    options: [
      "His phone is new.",
      "Him phone is new.",
      "He phone is new.",
      "His' phone is new."
    ],
    correctIndex: 0,
    explanation: "'Suo' for a male is 'his'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Possessives"
  },
  {
    id: "q232",
    prompt: "Translate 'La mia macchina è rossa, la sua (di lui) è blu.'",
    options: [
      "My car is red, his is blue.",
      "My car is red, him is blue.",
      "Mine car is red, his is blue.",
      "My car is red, he is blue."
    ],
    correctIndex: 0,
    explanation: "'La sua' as a pronoun for a male is 'his'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Possessives"
  },
  {
    id: "q233",
    prompt: "Translate 'Ho dimenticato il mio ombrello.'",
    options: [
      "I forgot my umbrella.",
      "I forgot mine umbrella.",
      "I forgot me umbrella.",
      "I forgot I umbrella."
    ],
    correctIndex: 0,
    explanation: "'Il mio' before the noun is 'my'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Possessives"
  },
  {
    id: "q234",
    prompt: "Translate 'Quelle penne sono loro (di loro).'",
    options: [
      "Those pens are theirs.",
      "Those pens are their.",
      "Those pens are them.",
      "Those pens are they."
    ],
    correctIndex: 0,
    explanation: "'Loro' as a pronoun is 'theirs'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Possessives"
  },
  {
    id: "q235",
    prompt: "Complete: 'I call _____ every day.' (him/he/his/himself)",
    options: [
      "him",
      "he",
      "his",
      "himself"
    ],
    correctIndex: 0,
    explanation: "'Him' is the object pronoun for a male.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Object Pronouns"
  },
  {
    id: "q236",
    prompt: "Complete: 'She loves _____ very much.' (me/I/my/mine)",
    options: [
      "me",
      "I",
      "my",
      "mine"
    ],
    correctIndex: 0,
    explanation: "'Me' is the object pronoun for first person singular.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Object Pronouns"
  },
  {
    id: "q237",
    prompt: "Complete: 'Can you help _____ with this exercise?' (us/we/our/ours)",
    options: [
      "us",
      "we",
      "our",
      "ours"
    ],
    correctIndex: 0,
    explanation: "'Us' is the object pronoun for 'we'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Object Pronouns"
  },
  {
    id: "q238",
    prompt: "Complete: 'I don\'t know _____.' (them/they/their/theirs)",
    options: [
      "them",
      "they",
      "their",
      "theirs"
    ],
    correctIndex: 0,
    explanation: "'Them' is the object pronoun for 'they'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Object Pronouns"
  },
  {
    id: "q239",
    prompt: "Complete: 'Look at _____!' (her/she/hers/herself)",
    options: [
      "her",
      "she",
      "hers",
      "herself"
    ],
    correctIndex: 0,
    explanation: "'Her' is the object pronoun after the preposition 'at'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Object Pronouns"
  },
  {
    id: "q240",
    prompt: "Complete: 'He wants to speak to _____.' (you/your/yours/yourself)",
    options: [
      "you",
      "your",
      "yours",
      "yourself"
    ],
    correctIndex: 0,
    explanation: "'You' is the object pronoun.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Object Pronouns"
  },
  {
    id: "q241",
    prompt: "Complete: 'Give _____ to me.' (it/its/it\'s/itself)",
    options: [
      "it",
      "its",
      "it's",
      "itself"
    ],
    correctIndex: 0,
    explanation: "'It' is the object pronoun for things/animals.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Object Pronouns"
  },
  {
    id: "q242",
    prompt: "Complete: 'My parents are visiting _____.' (me/I/my/mine)",
    options: [
      "me",
      "I",
      "my",
      "mine"
    ],
    correctIndex: 0,
    explanation: "'Me' receives the action of visiting.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Object Pronouns"
  },
  {
    id: "q243",
    prompt: "Complete: 'Are you listening to _____?' (him/he/his/himself)",
    options: [
      "him",
      "he",
      "his",
      "himself"
    ],
    correctIndex: 0,
    explanation: "'Him' follows the preposition 'to'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Object Pronouns"
  },
  {
    id: "q244",
    prompt: "Translate 'Non lo capisco.' (di lui)",
    options: [
      "I don't understand him.",
      "I don't understand he.",
      "I don't understand his.",
      "I don't understand it."
    ],
    correctIndex: 0,
    explanation: "'Lo' referring to a man translates to 'him'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Object Pronouns"
  },
  {
    id: "q245",
    prompt: "Translate 'Puoi vederci?'",
    options: [
      "Can you see us?",
      "Can you see we?",
      "Can you see our?",
      "Can you see me?"
    ],
    correctIndex: 0,
    explanation: "'Ci' translates to the object pronoun 'us'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Object Pronouns"
  },
  {
    id: "q246",
    prompt: "Translate 'Le ho comprato un regalo.' (a lei)",
    options: [
      "I bought her a present.",
      "I bought she a present.",
      "I bought hers a present.",
      "I bought for her a present."
    ],
    correctIndex: 0,
    explanation: "'Le' (to her) is translated with the object pronoun 'her'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Object Pronouns"
  },
  {
    id: "q247",
    prompt: "Translate 'Li aspetto qui.'",
    options: [
      "I wait for them here.",
      "I wait for they here.",
      "I wait them here.",
      "I am waiting they here."
    ],
    correctIndex: 0,
    explanation: "'Li' (them) follows the preposition 'for' in English.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Object Pronouns"
  },
  {
    id: "q248",
    prompt: "Translate 'Dammi quel libro.'",
    options: [
      "Give me that book.",
      "Give I that book.",
      "Give my that book.",
      "Give to me that book."
    ],
    correctIndex: 0,
    explanation: "'Dammi' uses the object pronoun 'me'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Object Pronouns"
  },
  {
    id: "q249",
    prompt: "Translate 'Non ti credo.'",
    options: [
      "I don't believe you.",
      "I don't believe your.",
      "I don't believe to you.",
      "I not believe you."
    ],
    correctIndex: 0,
    explanation: "'Ti' is the object pronoun 'you'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Object Pronouns"
  },
  {
    id: "q250",
    prompt: "Translate 'Lo voglio adesso.' (un oggetto)",
    options: [
      "I want it now.",
      "I want him now.",
      "I want that now.",
      "I want this now."
    ],
    correctIndex: 0,
    explanation: "'Lo' for a thing is 'it'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Object Pronouns"
  },
  {
    id: "q251",
    prompt: "Translate 'Vieni con noi al cinema?'",
    options: [
      "Are you coming with us to the cinema?",
      "Are you coming with we to the cinema?",
      "Do you come with us to the cinema?",
      "Are you coming to us to the cinema?"
    ],
    correctIndex: 0,
    explanation: "'Con noi' uses the object pronoun 'us'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Object Pronouns"
  },
  {
    id: "q252",
    prompt: "Translate 'Non li conosco.'",
    options: [
      "I don't know them.",
      "I don't know they.",
      "I don't know their.",
      "I not know them."
    ],
    correctIndex: 0,
    explanation: "'Li' is the object pronoun 'them'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Object Pronouns"
  },
  {
    id: "q253",
    prompt: "Complete: '_____ is my friend, Paul.' (near)",
    options: [
      "This",
      "These",
      "Those",
      "That"
    ],
    correctIndex: 0,
    explanation: "'This' is used for a singular person/thing near the speaker.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Demonstratives"
  },
  {
    id: "q254",
    prompt: "Complete: 'Look at _____ birds in the sky.'",
    options: [
      "those",
      "that",
      "this",
      "these"
    ],
    correctIndex: 0,
    explanation: "'Those' is used for plural things far from the speaker.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Demonstratives"
  },
  {
    id: "q255",
    prompt: "Complete: 'Are _____ your shoes here?'",
    options: [
      "these",
      "this",
      "that",
      "those"
    ],
    correctIndex: 0,
    explanation: "'These' is used for plural things near the speaker.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Demonstratives"
  },
  {
    id: "q256",
    prompt: "Complete: '_____ building over there is a hospital.'",
    options: [
      "That",
      "This",
      "These",
      "Those"
    ],
    correctIndex: 0,
    explanation: "'That' is used for a singular thing far away.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Demonstratives"
  },
  {
    id: "q257",
    prompt: "Complete: '_____ days are the best of my life.'",
    options: [
      "These",
      "This",
      "That",
      "Those"
    ],
    correctIndex: 0,
    explanation: "'These' refers to plural days in the current time.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Demonstratives"
  },
  {
    id: "q258",
    prompt: "Complete: 'I don\'t like _____ kind of music.' (near/current)",
    options: [
      "this",
      "these",
      "those",
      "them"
    ],
    correctIndex: 0,
    explanation: "'This kind' is singular.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Demonstratives"
  },
  {
    id: "q259",
    prompt: "Complete: 'Did you buy _____ apples from the market?' (far/past)",
    options: [
      "those",
      "that",
      "this",
      "them"
    ],
    correctIndex: 0,
    explanation: "'Those apples' refers to plural items away or in the past.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Demonstratives"
  },
  {
    id: "q260",
    prompt: "Complete: '_____ is a very interesting book.' (holding it)",
    options: [
      "This",
      "These",
      "Those",
      "Them"
    ],
    correctIndex: 0,
    explanation: "'This' refers to a singular item being held.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Demonstratives"
  },
  {
    id: "q261",
    prompt: "Complete: 'Can you pass me _____ pen?' (far)",
    options: [
      "that",
      "those",
      "these",
      "this"
    ],
    correctIndex: 0,
    explanation: "'That' refers to a singular item out of reach.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Demonstratives"
  }
,
  {
    id: "q262",
    prompt: "Translate 'Questo è il mio gatto.'",
    options: [
      "This is my cat.",
      "That is my cat.",
      "These is my cat.",
      "Those is my cat."
    ],
    correctIndex: 0,
    explanation: "'Questo' is 'This'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Demonstratives"
  },
  {
    id: "q263",
    prompt: "Translate 'Quelli sono i miei libri.'",
    options: [
      "Those are my books.",
      "That are my books.",
      "These are my books.",
      "This are my books."
    ],
    correctIndex: 0,
    explanation: "'Quelli' (far plural) is 'Those'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Demonstratives"
  },
  {
    id: "q264",
    prompt: "Translate 'Questa pizza è buonissima.'",
    options: [
      "This pizza is very good.",
      "That pizza is very good.",
      "These pizza is very good.",
      "It pizza is very good."
    ],
    correctIndex: 0,
    explanation: "'Questa' is 'This'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Demonstratives"
  },
  {
    id: "q265",
    prompt: "Translate 'Queste ragazze sono italiane.'",
    options: [
      "These girls are Italian.",
      "This girls are Italian.",
      "Those girls are Italian.",
      "That girls are Italian."
    ],
    correctIndex: 0,
    explanation: "'Queste' (near plural) is 'These'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Demonstratives"
  },
  {
    id: "q266",
    prompt: "Translate 'Quell\'uomo è mio padre.'",
    options: [
      "That man is my father.",
      "This man is my father.",
      "Those man is my father.",
      "The man is my father."
    ],
    correctIndex: 0,
    explanation: "'Quell'' (far singular) is 'That'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Demonstratives"
  },
  {
    id: "q267",
    prompt: "Translate 'Cosa sono quelle cose?'",
    options: [
      "What are those things?",
      "What are these things?",
      "What is that things?",
      "What are that things?"
    ],
    correctIndex: 0,
    explanation: "'Quelle' (far plural) is 'those'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Demonstratives"
  },
  {
    id: "q268",
    prompt: "Translate 'Preferisco questo vestito.'",
    options: [
      "I prefer this dress.",
      "I prefer that dress.",
      "I prefer these dress.",
      "I prefer those dress."
    ],
    correctIndex: 0,
    explanation: "'Questo' is 'this'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Demonstratives"
  },
  {
    id: "q269",
    prompt: "Translate 'Conosci quelle persone?'",
    options: [
      "Do you know those people?",
      "Do you know these people?",
      "Do you know that people?",
      "Do you know this people?"
    ],
    correctIndex: 0,
    explanation: "'Quelle' (far plural) is 'those'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Demonstratives"
  },
  {
    id: "q270",
    prompt: "Translate 'Questi sono i miei appunti.'",
    options: [
      "These are my notes.",
      "This are my notes.",
      "Those are my notes.",
      "That are my notes."
    ],
    correctIndex: 0,
    explanation: "'Questi' (near plural) is 'These'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Demonstratives"
  },
  {
    id: "q271",
    prompt: "Complete: 'The cat is hiding _____ the bed.'",
    options: [
      "under",
      "in",
      "on",
      "at"
    ],
    correctIndex: 0,
    explanation: "'Under' means below or beneath.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Prepositions of Place"
  },
  {
    id: "q272",
    prompt: "Complete: 'She is waiting _____ the bus stop.'",
    options: [
      "at",
      "in",
      "on",
      "under"
    ],
    correctIndex: 0,
    explanation: "Use 'at' for a specific point or location.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Prepositions of Place"
  },
  {
    id: "q273",
    prompt: "Complete: 'The picture is hanging _____ the wall.'",
    options: [
      "on",
      "in",
      "at",
      "under"
    ],
    correctIndex: 0,
    explanation: "Use 'on' for surfaces.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Prepositions of Place"
  },
  {
    id: "q274",
    prompt: "Complete: 'He lives _____ London.'",
    options: [
      "in",
      "at",
      "on",
      "by"
    ],
    correctIndex: 0,
    explanation: "Use 'in' for cities, countries, and enclosed spaces.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Prepositions of Place"
  },
  {
    id: "q275",
    prompt: "Complete: 'The car is parked _____ the house.'",
    options: [
      "behind",
      "under",
      "in",
      "on"
    ],
    correctIndex: 0,
    explanation: "'Behind' means at the back of.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Prepositions of Place"
  },
  {
    id: "q276",
    prompt: "Complete: 'She sat _____ her two best friends.'",
    options: [
      "between",
      "next to",
      "under",
      "in"
    ],
    correctIndex: 0,
    explanation: "'Between' is used for a position separating two things or people.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Prepositions of Place"
  },
  {
    id: "q277",
    prompt: "Complete: 'The bank is _____ the post office.'",
    options: [
      "next to",
      "in",
      "on",
      "at"
    ],
    correctIndex: 0,
    explanation: "'Next to' means beside.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Prepositions of Place"
  },
  {
    id: "q278",
    prompt: "Complete: 'There is a bridge _____ the river.'",
    options: [
      "over",
      "under",
      "in",
      "at"
    ],
    correctIndex: 0,
    explanation: "'Over' means extending directly upwards from or across.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Prepositions of Place"
  },
  {
    id: "q279",
    prompt: "Complete: 'I left my keys _____ the table.'",
    options: [
      "on",
      "in",
      "at",
      "between"
    ],
    correctIndex: 0,
    explanation: "'On' is used for surfaces.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Prepositions of Place"
  },
  {
    id: "q280",
    prompt: "Translate 'Il cane è sotto il tavolo.'",
    options: [
      "The dog is under the table.",
      "The dog is on the table.",
      "The dog is at the table.",
      "The dog is in the table."
    ],
    correctIndex: 0,
    explanation: "'Sotto' translates to 'under'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Prepositions of Place"
  },
  {
    id: "q281",
    prompt: "Translate 'Sono al cinema.'",
    options: [
      "I am at the cinema.",
      "I am in the cinema.",
      "I am on the cinema.",
      "I am to the cinema."
    ],
    correctIndex: 0,
    explanation: "'At' is used for specific places like the cinema.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Prepositions of Place"
  },
  {
    id: "q282",
    prompt: "Translate 'C\'è un ragno sul soffitto.'",
    options: [
      "There is a spider on the ceiling.",
      "There is a spider at the ceiling.",
      "There is a spider in the ceiling.",
      "There is a spider under the ceiling."
    ],
    correctIndex: 0,
    explanation: "'Sul' for a surface like a ceiling is 'on'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Prepositions of Place"
  },
  {
    id: "q283",
    prompt: "Translate 'L\'ufficio è vicino alla banca.'",
    options: [
      "The office is next to the bank.",
      "The office is in the bank.",
      "The office is between the bank.",
      "The office is at the bank."
    ],
    correctIndex: 0,
    explanation: "'Vicino a' is 'next to' or 'near'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Prepositions of Place"
  },
  {
    id: "q284",
    prompt: "Translate 'Il bambino è tra i suoi genitori.'",
    options: [
      "The child is between his parents.",
      "The child is among his parents.",
      "The child is next to his parents.",
      "The child is in his parents."
    ],
    correctIndex: 0,
    explanation: "'Tra' due persone è 'between'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Prepositions of Place"
  },
  {
    id: "q285",
    prompt: "Translate 'Nasconditi dietro la porta.'",
    options: [
      "Hide behind the door.",
      "Hide under the door.",
      "Hide next to the door.",
      "Hide in the door."
    ],
    correctIndex: 0,
    explanation: "'Dietro' is 'behind'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Prepositions of Place"
  },
  {
    id: "q286",
    prompt: "Translate 'Metti i vestiti nell\'armadio.'",
    options: [
      "Put the clothes in the wardrobe.",
      "Put the clothes on the wardrobe.",
      "Put the clothes at the wardrobe.",
      "Put the clothes into the wardrobe."
    ],
    correctIndex: 0,
    explanation: "'Nel' meaning inside an enclosed space is 'in'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Prepositions of Place"
  },
  {
    id: "q287",
    prompt: "Translate 'Ho incontrato Marco alla stazione.'",
    options: [
      "I met Marco at the station.",
      "I met Marco in the station.",
      "I met Marco on the station.",
      "I met Marco to the station."
    ],
    correctIndex: 0,
    explanation: "'Alla' for a specific point is 'at'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Prepositions of Place"
  },
  {
    id: "q288",
    prompt: "Translate 'C\'è un giardino dietro la casa.'",
    options: [
      "There is a garden behind the house.",
      "There is a garden under the house.",
      "There is a garden in the house.",
      "There is a garden next to the house."
    ],
    correctIndex: 0,
    explanation: "'Dietro' is 'behind'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Prepositions of Place"
  },
  {
    id: "q289",
    prompt: "Complete: '_____ to me carefully.'",
    options: [
      "Listen",
      "Listening",
      "Listens",
      "To listen"
    ],
    correctIndex: 0,
    explanation: "Imperative uses the base form of the verb.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Imperative"
  },
  {
    id: "q290",
    prompt: "Complete: '_____ open the window. It\'s cold.'",
    options: [
      "Don't",
      "Not",
      "No",
      "Doesn't"
    ],
    correctIndex: 0,
    explanation: "Negative imperative uses 'Don't'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Imperative"
  },
  {
    id: "q291",
    prompt: "Complete: '_____ your vegetables!'",
    options: [
      "Eat",
      "Eating",
      "Eats",
      "To eat"
    ],
    correctIndex: 0,
    explanation: "Use base verb for direct commands.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Imperative"
  },
  {
    id: "q292",
    prompt: "Complete: '_____ be late for the meeting.'",
    options: [
      "Don't",
      "Not",
      "Doesn't",
      "No"
    ],
    correctIndex: 0,
    explanation: "Negative commands always start with 'Don't'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Imperative"
  },
  {
    id: "q293",
    prompt: "Complete: '_____ quiet, please.'",
    options: [
      "Be",
      "Are",
      "Is",
      "Am"
    ],
    correctIndex: 0,
    explanation: "Base form of 'to be' is used for commands.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Imperative"
  },
  {
    id: "q294",
    prompt: "Complete: '_____ touch that plate, it\'s hot.'",
    options: [
      "Don't",
      "No",
      "Not",
      "Doesn't"
    ],
    correctIndex: 0,
    explanation: "Negative command.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Imperative"
  },
  {
    id: "q295",
    prompt: "Complete: '_____ your homework before dinner.'",
    options: [
      "Do",
      "Does",
      "Doing",
      "Did"
    ],
    correctIndex: 0,
    explanation: "Base verb 'Do'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Imperative"
  },
  {
    id: "q296",
    prompt: "Complete: '_____ me the salt, please.'",
    options: [
      "Pass",
      "Passing",
      "Passes",
      "To pass"
    ],
    correctIndex: 0,
    explanation: "Base verb 'Pass'.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Imperative"
  },
  {
    id: "q297",
    prompt: "Complete: '_____ worry about it.'",
    options: [
      "Don't",
      "Not",
      "No",
      "Doesn't"
    ],
    correctIndex: 0,
    explanation: "Negative command.",
    category: "Grammatica",
    level: "A1",
    grammarTopic: "Imperative"
  },
  {
    id: "q298",
    prompt: "Translate 'Non toccare il mio telefono.'",
    options: [
      "Don't touch my phone.",
      "Not touch my phone.",
      "No touch my phone.",
      "Doesn't touch my phone."
    ],
    correctIndex: 0,
    explanation: "Negative imperative is formed with 'Don't'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Imperative"
  },
  {
    id: "q299",
    prompt: "Translate 'Fai attenzione!'",
    options: [
      "Pay attention!",
      "Do attention!",
      "Make attention!",
      "Attention you!"
    ],
    correctIndex: 0,
    explanation: "'Fare attenzione' is 'pay attention'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Imperative"
  },
  {
    id: "q300",
    prompt: "Translate 'Ascoltami quando parlo.'",
    options: [
      "Listen to me when I speak.",
      "Listen me when I speak.",
      "Hear me when I speak.",
      "Hear to me when I speak."
    ],
    correctIndex: 0,
    explanation: "'Ascoltare' requires 'to' before the object in English.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Imperative"
  },
  {
    id: "q301",
    prompt: "Translate 'Non dimenticare le chiavi.'",
    options: [
      "Don't forget your keys.",
      "Not forget your keys.",
      "No forget your keys.",
      "Don't missing your keys."
    ],
    correctIndex: 0,
    explanation: "Negative command with 'Don't'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Imperative"
  },
  {
    id: "q302",
    prompt: "Translate 'Chiudi la porta, per favore.'",
    options: [
      "Close the door, please.",
      "Closing the door, please.",
      "To close the door, please.",
      "You close the door, please."
    ],
    correctIndex: 0,
    explanation: "Base verb for command.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Imperative"
  },
  {
    id: "q303",
    prompt: "Translate 'Non parlare durante l\'esame.'",
    options: [
      "Don't speak during the exam.",
      "Not speak during the exam.",
      "Doesn't speak during the exam.",
      "Don't speaking during the exam."
    ],
    correctIndex: 0,
    explanation: "Negative command.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Imperative"
  },
  {
    id: "q304",
    prompt: "Translate 'Aspetta qui un momento.'",
    options: [
      "Wait here a moment.",
      "Waiting here a moment.",
      "Wait here a time.",
      "Stay here a moment."
    ],
    correctIndex: 0,
    explanation: "Base verb 'Wait'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Imperative"
  },
  {
    id: "q305",
    prompt: "Translate 'Scrivete i vostri nomi sul foglio.'",
    options: [
      "Write your names on the paper.",
      "Writing your names on the paper.",
      "You write your names on the paper.",
      "To write your names on the paper."
    ],
    correctIndex: 0,
    explanation: "Imperative is the same for singular and plural 'you'.",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Imperative"
  },
  {
    id: "q306",
    prompt: "Translate 'Non fumare in questa stanza.'",
    options: [
      "Don't smoke in this room.",
      "No smoking in this room.",
      "Not smoke in this room.",
      "Doesn't smoke in this room."
    ],
    correctIndex: 0,
    explanation: "'Don't smoke' is the imperative. ('No smoking' is a sign/rule but the direct translation uses 'Don't').",
    category: "Traduzione",
    level: "A1",
    grammarTopic: "Imperative"
  }
,
  {
    id: "q307",
    prompt: "Complete: 'I _____ to visit my grandparents this weekend.'",
    options: [
      "am going",
      "go",
      "going",
      "will going"
    ],
    correctIndex: 0,
    explanation: "We use 'am going to' for planned future intentions.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Future: going to"
  },
  {
    id: "q308",
    prompt: "Complete: 'Look at those dark clouds. It _____ rain.'",
    options: [
      "is going to",
      "will",
      "going to",
      "rains"
    ],
    correctIndex: 0,
    explanation: "'Going to' is used when there is present evidence for a future event.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Future: going to"
  },
  {
    id: "q309",
    prompt: "Complete: 'What _____ you going to do tonight?'",
    options: [
      "are",
      "do",
      "is",
      "will"
    ],
    correctIndex: 0,
    explanation: "Question form requires the verb 'to be' (are) before the subject.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Future: going to"
  },
  {
    id: "q310",
    prompt: "Complete: 'She _____ not going to buy a new car.'",
    options: [
      "is",
      "does",
      "has",
      "will"
    ],
    correctIndex: 0,
    explanation: "Negative form uses 'to be' + not + going to.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Future: going to"
  },
  {
    id: "q311",
    prompt: "Complete: 'We are going to _____ a movie after dinner.'",
    options: [
      "watch",
      "watching",
      "watched",
      "watches"
    ],
    correctIndex: 0,
    explanation: "'Going to' is followed by the base form of the verb.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Future: going to"
  },
  {
    id: "q312",
    prompt: "Complete: '_____ he going to invite her to the party?'",
    options: [
      "Is",
      "Does",
      "Will",
      "Has"
    ],
    correctIndex: 0,
    explanation: "Question form for third person singular uses 'Is'.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Future: going to"
  },
  {
    id: "q313",
    prompt: "Complete: 'They _____ going to start a new business next year.'",
    options: [
      "are",
      "will",
      "do",
      "have"
    ],
    correctIndex: 0,
    explanation: "Plural subject takes 'are'.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Future: going to"
  },
  {
    id: "q314",
    prompt: "Complete: 'I\'m going to _____ English in London.'",
    options: [
      "study",
      "studying",
      "studied",
      "studies"
    ],
    correctIndex: 0,
    explanation: "Base verb 'study' after 'going to'.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Future: going to"
  },
  {
    id: "q315",
    prompt: "Complete: 'My parents are _____ to travel to Spain.'",
    options: [
      "going",
      "go",
      "will",
      "goes"
    ],
    correctIndex: 0,
    explanation: "Part of the structure 'are going to'.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Future: going to"
  },
  {
    id: "q316",
    prompt: "Translate 'Cosa hai intenzione di fare?'",
    options: [
      "What are you going to do?",
      "What will you do?",
      "What do you do?",
      "What you are going to do?"
    ],
    correctIndex: 0,
    explanation: "'Have intention to' is translated with 'going to'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Future: going to"
  },
  {
    id: "q317",
    prompt: "Translate 'Non ho intenzione di aspettare tutto il giorno.'",
    options: [
      "I am not going to wait all day.",
      "I don't go to wait all day.",
      "I won't to wait all day.",
      "I am not going to waiting all day."
    ],
    correctIndex: 0,
    explanation: "Negative 'going to'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Future: going to"
  },
  {
    id: "q318",
    prompt: "Translate 'Lui studierà medicina all\'università.' (intenzione)",
    options: [
      "He is going to study medicine at university.",
      "He will study medicine at university.",
      "He is studying medicine at university.",
      "He studies medicine at university."
    ],
    correctIndex: 0,
    explanation: "Intentions use 'going to'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Future: going to"
  },
  {
    id: "q319",
    prompt: "Translate 'Stiamo per comprare una nuova casa.' (abbiamo deciso)",
    options: [
      "We are going to buy a new house.",
      "We will buy a new house.",
      "We are buying a new house.",
      "We buy a new house."
    ],
    correctIndex: 0,
    explanation: "Decisions already made use 'going to'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Future: going to"
  },
  {
    id: "q320",
    prompt: "Translate 'Pioverà a breve.' (guardando il cielo scuro)",
    options: [
      "It is going to rain soon.",
      "It will rain soon.",
      "It is raining soon.",
      "It rains soon."
    ],
    correctIndex: 0,
    explanation: "Prediction based on evidence uses 'going to'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Future: going to"
  },
  {
    id: "q321",
    prompt: "Translate 'Non parteciperanno all\'incontro.' (intenzione)",
    options: [
      "They aren't going to attend the meeting.",
      "They won't attend the meeting.",
      "They don't attend the meeting.",
      "They aren't attending the meeting."
    ],
    correctIndex: 0,
    explanation: "Negative intention.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Future: going to"
  },
  {
    id: "q322",
    prompt: "Translate 'Cosa mangerai a cena?' (che programmi hai)",
    options: [
      "What are you going to eat for dinner?",
      "What will you eat for dinner?",
      "What do you eat for dinner?",
      "What you going to eat for dinner?"
    ],
    correctIndex: 0,
    explanation: "Asking about plans.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Future: going to"
  },
  {
    id: "q323",
    prompt: "Translate 'Venderà la sua macchina?' (ha intenzione di)",
    options: [
      "Is she going to sell her car?",
      "Will she sell her car?",
      "Does she sell her car?",
      "Is she sell her car?"
    ],
    correctIndex: 0,
    explanation: "Question about intention.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Future: going to"
  },
  {
    id: "q324",
    prompt: "Translate 'Sono certo che cadrà!' (sta correndo sul ghiaccio)",
    options: [
      "I'm sure he is going to fall!",
      "I'm sure he will fall!",
      "I'm sure he falls!",
      "I'm sure he falling!"
    ],
    correctIndex: 0,
    explanation: "Prediction with evidence.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Future: going to"
  },
  {
    id: "q325",
    prompt: "Complete: 'I _____ TV when the phone rang.'",
    options: [
      "was watching",
      "watched",
      "am watching",
      "were watching"
    ],
    correctIndex: 0,
    explanation: "Past continuous for a long action interrupted by a short one.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Past Continuous"
  },
  {
    id: "q326",
    prompt: "Complete: 'While she was reading, her brother _____ video games.'",
    options: [
      "was playing",
      "played",
      "playing",
      "is playing"
    ],
    correctIndex: 0,
    explanation: "Two long actions happening at the same time in the past.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Past Continuous"
  },
  {
    id: "q327",
    prompt: "Complete: 'What _____ you doing at 8 PM yesterday?'",
    options: [
      "were",
      "was",
      "are",
      "did"
    ],
    correctIndex: 0,
    explanation: "'You' takes the auxiliary 'were' in the past continuous.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Past Continuous"
  },
  {
    id: "q328",
    prompt: "Complete: 'They were walking in the park when it started to _____.'",
    options: [
      "rain",
      "raining",
      "rained",
      "rains"
    ],
    correctIndex: 0,
    explanation: "'Started' is followed by the infinitive 'to rain' or gerund 'raining', but here 'to' is provided, so 'rain'.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Past Continuous"
  },
  {
    id: "q329",
    prompt: "Complete: 'He _____ (not) listening to the teacher.'",
    options: [
      "wasn't",
      "weren't",
      "didn't",
      "isn't"
    ],
    correctIndex: 0,
    explanation: "'He' takes 'wasn't' in negative past continuous.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Past Continuous"
  },
  {
    id: "q330",
    prompt: "Complete: 'While I _____ home, I saw a car accident.'",
    options: [
      "was driving",
      "drove",
      "am driving",
      "was drive"
    ],
    correctIndex: 0,
    explanation: "Continuous action in the past ('while' often signals continuous).",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Past Continuous"
  },
  {
    id: "q331",
    prompt: "Complete: 'We were having dinner when the lights _____ out.'",
    options: [
      "went",
      "were going",
      "go",
      "gone"
    ],
    correctIndex: 0,
    explanation: "The interrupting action is in the past simple ('went').",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Past Continuous"
  },
  {
    id: "q332",
    prompt: "Complete: '_____ it raining when you left?'",
    options: [
      "Was",
      "Were",
      "Did",
      "Is"
    ],
    correctIndex: 0,
    explanation: "'It' takes 'was'.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Past Continuous"
  },
  {
    id: "q333",
    prompt: "Complete: 'I broke my leg while I _____ football.'",
    options: [
      "was playing",
      "played",
      "am playing",
      "play"
    ],
    correctIndex: 0,
    explanation: "Long background action in past continuous.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Past Continuous"
  },
  {
    id: "q334",
    prompt: "Translate 'Cosa stavi facendo quando ti ho chiamato?'",
    options: [
      "What were you doing when I called you?",
      "What did you do when I called you?",
      "What was you doing when I called you?",
      "What are you doing when I called you?"
    ],
    correctIndex: 0,
    explanation: "Question in past continuous, interrupting action in past simple.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Past Continuous"
  },
  {
    id: "q335",
    prompt: "Translate 'Stavo dormendo quando l\'allarme ha suonato.'",
    options: [
      "I was sleeping when the alarm rang.",
      "I slept when the alarm was ringing.",
      "I was sleeping when the alarm was ringing.",
      "I slept when the alarm rang."
    ],
    correctIndex: 0,
    explanation: "Background action (sleeping), interruption (rang).",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Past Continuous"
  },
  {
    id: "q336",
    prompt: "Translate 'Mentre camminavamo, abbiamo trovato dei soldi.'",
    options: [
      "While we were walking, we found some money.",
      "While we walked, we were finding some money.",
      "When we were walking, we were finding some money.",
      "While we walking, we found some money."
    ],
    correctIndex: 0,
    explanation: "'While' + past continuous, then past simple.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Past Continuous"
  },
  {
    id: "q337",
    prompt: "Translate 'Lei non stava guardando la TV, stava leggendo.'",
    options: [
      "She wasn't watching TV, she was reading.",
      "She didn't watch TV, she was reading.",
      "She wasn't watching TV, she read.",
      "She wasn't watch TV, she was reading."
    ],
    correctIndex: 0,
    explanation: "Both actions are past continuous.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Past Continuous"
  },
  {
    id: "q338",
    prompt: "Translate 'Mentre cucinavo, lui ascoltava la musica.'",
    options: [
      "While I was cooking, he was listening to music.",
      "While I cooked, he listened to music.",
      "While I was cooking, he listened to music.",
      "While I cooked, he was listening to music."
    ],
    correctIndex: 0,
    explanation: "Two simultaneous long actions usually take past continuous.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Past Continuous"
  },
  {
    id: "q339",
    prompt: "Translate 'Pioveva forte ieri mattina?'",
    options: [
      "Was it raining hard yesterday morning?",
      "Did it rain hard yesterday morning?",
      "Were it raining hard yesterday morning?",
      "Is it raining hard yesterday morning?"
    ],
    correctIndex: 0,
    explanation: "Asking about a progressive state at a specific time in the past.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Past Continuous"
  },
  {
    id: "q340",
    prompt: "Translate 'Non stavamo andando troppo veloci.'",
    options: [
      "We weren't going too fast.",
      "We didn't go too fast.",
      "We wasn't going too fast.",
      "We aren't going too fast."
    ],
    correctIndex: 0,
    explanation: "Negative past continuous with 'were'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Past Continuous"
  },
  {
    id: "q341",
    prompt: "Translate 'Cosa pensavi in quel momento?'",
    options: [
      "What were you thinking at that moment?",
      "What did you think at that moment?",
      "What was you thinking at that moment?",
      "What are you thinking at that moment?"
    ],
    correctIndex: 0,
    explanation: "Asking about ongoing thoughts at a past moment.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Past Continuous"
  },
  {
    id: "q342",
    prompt: "Translate 'Loro ridevano quando sono entrato.'",
    options: [
      "They were laughing when I entered.",
      "They laughed when I was entering.",
      "They were laughing when I was entering.",
      "They laughed when I entered."
    ],
    correctIndex: 0,
    explanation: "Background action (laughing), short interruption (entered).",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Past Continuous"
  }
,
  {
    id: "q343",
    prompt: "Complete: 'You look tired. You _____ go to bed early.'",
    options: [
      "should",
      "have to",
      "mustn't",
      "don't have to"
    ],
    correctIndex: 0,
    explanation: "'Should' is used for advice.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Modals of Obligation and Advice"
  },
  {
    id: "q344",
    prompt: "Complete: 'In many countries, you _____ wear a seatbelt when driving.'",
    options: [
      "have to",
      "should",
      "don't have to",
      "mustn't"
    ],
    correctIndex: 0,
    explanation: "'Have to' is used for a strong obligation or law.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Modals of Obligation and Advice"
  },
  {
    id: "q345",
    prompt: "Complete: 'Tomorrow is Sunday, so I _____ wake up early.'",
    options: [
      "don't have to",
      "mustn't",
      "shouldn't",
      "haven't to"
    ],
    correctIndex: 0,
    explanation: "'Don't have to' means it's not necessary (lack of obligation).",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Modals of Obligation and Advice"
  },
  {
    id: "q346",
    prompt: "Complete: 'You _____ use your phone during the exam! It\'s forbidden.'",
    options: [
      "mustn't",
      "don't have to",
      "shouldn't",
      "haven't to"
    ],
    correctIndex: 0,
    explanation: "'Mustn't' means it is strictly prohibited.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Modals of Obligation and Advice"
  },
  {
    id: "q347",
    prompt: "Complete: '_____ I wear a suit to the interview?'",
    options: [
      "Should",
      "Must",
      "Have to",
      "Do I must"
    ],
    correctIndex: 0,
    explanation: "'Should' is common to ask for an opinion or advice.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Modals of Obligation and Advice"
  },
  {
    id: "q348",
    prompt: "Complete: 'We have plenty of time. We _____ hurry.'",
    options: [
      "don't have to",
      "mustn't",
      "shouldn't",
      "don't must"
    ],
    correctIndex: 0,
    explanation: "No obligation to hurry.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Modals of Obligation and Advice"
  },
  {
    id: "q349",
    prompt: "Complete: 'You _____ smoke in the hospital.'",
    options: [
      "mustn't",
      "don't have to",
      "shouldn't",
      "haven't to"
    ],
    correctIndex: 0,
    explanation: "Prohibition.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Modals of Obligation and Advice"
  },
  {
    id: "q350",
    prompt: "Complete: 'He _____ wear glasses to read because his eyesight is bad.'",
    options: [
      "has to",
      "should",
      "musts",
      "have to"
    ],
    correctIndex: 0,
    explanation: "External obligation, third person singular 'has to'.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Modals of Obligation and Advice"
  },
  {
    id: "q351",
    prompt: "Complete: 'Do I _____ pay for this ticket now?'",
    options: [
      "have to",
      "must",
      "should",
      "had to"
    ],
    correctIndex: 0,
    explanation: "Question form for obligation is 'Do/Does ... have to'.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Modals of Obligation and Advice"
  },
  {
    id: "q352",
    prompt: "Translate 'Dovresti mangiare più verdure.'",
    options: [
      "You should eat more vegetables.",
      "You must eat more vegetables.",
      "You have to eat more vegetables.",
      "You shouldn't eat more vegetables."
    ],
    correctIndex: 0,
    explanation: "Advice.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Modals of Obligation and Advice"
  },
  {
    id: "q353",
    prompt: "Translate 'Non devi per forza venire se sei stanco.'",
    options: [
      "You don't have to come if you're tired.",
      "You mustn't come if you're tired.",
      "You shouldn't come if you're tired.",
      "You haven't to come if you're tired."
    ],
    correctIndex: 0,
    explanation: "Lack of obligation.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Modals of Obligation and Advice"
  },
  {
    id: "q354",
    prompt: "Translate 'Non devi assolutamente toccare quel filo!'",
    options: [
      "You mustn't touch that wire!",
      "You don't have to touch that wire!",
      "You shouldn't touch that wire!",
      "You haven't to touch that wire!"
    ],
    correctIndex: 0,
    explanation: "Strong prohibition.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Modals of Obligation and Advice"
  },
  {
    id: "q355",
    prompt: "Translate 'Lui deve lavorare fino a tardi oggi.' (obbligo esterno)",
    options: [
      "He has to work late today.",
      "He should work late today.",
      "He have to work late today.",
      "He musts work late today."
    ],
    correctIndex: 0,
    explanation: "External obligation with 'has to'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Modals of Obligation and Advice"
  },
  {
    id: "q356",
    prompt: "Translate 'Non dovresti bere così tanto caffè.'",
    options: [
      "You shouldn't drink so much coffee.",
      "You mustn't drink so much coffee.",
      "You don't have to drink so much coffee.",
      "You haven't to drink so much coffee."
    ],
    correctIndex: 0,
    explanation: "Negative advice.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Modals of Obligation and Advice"
  },
  {
    id: "q357",
    prompt: "Translate 'Devo togliermi le scarpe?'",
    options: [
      "Do I have to take off my shoes?",
      "Must I to take off my shoes?",
      "Should I take off my shoes?",
      "Have I to take off my shoes?"
    ],
    correctIndex: 0,
    explanation: "Question about rules/obligation uses 'Do I have to'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Modals of Obligation and Advice"
  },
  {
    id: "q358",
    prompt: "Translate 'Non hai bisogno di pagare, è gratis.'",
    options: [
      "You don't have to pay, it's free.",
      "You mustn't pay, it's free.",
      "You shouldn't pay, it's free.",
      "You haven't to pay, it's free."
    ],
    correctIndex: 0,
    explanation: "Lack of obligation.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Modals of Obligation and Advice"
  },
  {
    id: "q359",
    prompt: "Translate 'Cosa dovrei fare?'",
    options: [
      "What should I do?",
      "What must I do?",
      "What have I to do?",
      "What do I do?"
    ],
    correctIndex: 0,
    explanation: "Asking for advice.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Modals of Obligation and Advice"
  },
  {
    id: "q360",
    prompt: "Translate 'Non devi dire niente a nessuno, è un segreto!'",
    options: [
      "You mustn't tell anyone, it's a secret!",
      "You don't have to tell anyone, it's a secret!",
      "You shouldn't tell anyone, it's a secret!",
      "You haven't to tell anyone, it's a secret!"
    ],
    correctIndex: 0,
    explanation: "Prohibition.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Modals of Obligation and Advice"
  },
  {
    id: "q361",
    prompt: "Complete: 'She speaks English very _____.' (good/well)",
    options: [
      "well",
      "good",
      "goodly",
      "welling"
    ],
    correctIndex: 0,
    explanation: "'Well' is the adverb form of 'good'.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Adverbs of Manner"
  },
  {
    id: "q362",
    prompt: "Complete: 'He drives very _____. It\'s dangerous!'",
    options: [
      "fast",
      "fastly",
      "quick",
      "speedy"
    ],
    correctIndex: 0,
    explanation: "'Fast' is both an adjective and an adverb.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Adverbs of Manner"
  },
  {
    id: "q363",
    prompt: "Complete: 'Please do your work _____. Take your time.'",
    options: [
      "carefully",
      "careful",
      "careless",
      "carelessly"
    ],
    correctIndex: 0,
    explanation: "'Carefully' describes how to do the work.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Adverbs of Manner"
  },
  {
    id: "q364",
    prompt: "Complete: 'They won the game _____. They were much better.'",
    options: [
      "easily",
      "easy",
      "easier",
      "easying"
    ],
    correctIndex: 0,
    explanation: "'Easily' is the adverb form of 'easy' (y changes to i + ly).",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Adverbs of Manner"
  },
  {
    id: "q365",
    prompt: "Complete: 'The old man walked _____ down the street.'",
    options: [
      "slowly",
      "slow",
      "slower",
      "slowingly"
    ],
    correctIndex: 0,
    explanation: "'Slowly' describes the verb 'walked'.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Adverbs of Manner"
  },
  {
    id: "q366",
    prompt: "Complete: 'She looked at him _____ when he broke the glass.'",
    options: [
      "angrily",
      "angry",
      "angrier",
      "angrying"
    ],
    correctIndex: 0,
    explanation: "Adverb formed from 'angry'.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Adverbs of Manner"
  },
  {
    id: "q367",
    prompt: "Complete: 'He worked _____ to pass the exam.'",
    options: [
      "hard",
      "hardly",
      "harder",
      "hards"
    ],
    correctIndex: 0,
    explanation: "'Hard' is an irregular adverb meaning with effort. ('Hardly' means almost not).",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Adverbs of Manner"
  },
  {
    id: "q368",
    prompt: "Complete: 'The children were playing _____ in the garden.'",
    options: [
      "happily",
      "happy",
      "happier",
      "happiness"
    ],
    correctIndex: 0,
    explanation: "Adverb of 'happy'.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Adverbs of Manner"
  },
  {
    id: "q369",
    prompt: "Complete: 'I can run very _____.'",
    options: [
      "fast",
      "fastly",
      "quick",
      "faster"
    ],
    correctIndex: 0,
    explanation: "'Fast' is an irregular adverb.",
    category: "Grammatica",
    level: "A2",
    grammarTopic: "Adverbs of Manner"
  },
  {
    id: "q370",
    prompt: "Translate 'Ha risposto alla domanda velocemente.'",
    options: [
      "He answered the question quickly.",
      "He answered the question quick.",
      "He answered the question fastly.",
      "He answered the question quicker."
    ],
    correctIndex: 0,
    explanation: "'Velocemente' is 'quickly'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Adverbs of Manner"
  },
  {
    id: "q371",
    prompt: "Translate 'Canta davvero bene.'",
    options: [
      "She sings really well.",
      "She sings really good.",
      "She sings really goodly.",
      "She sings really nice."
    ],
    correctIndex: 0,
    explanation: "'Bene' is the adverb 'well'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Adverbs of Manner"
  },
  {
    id: "q372",
    prompt: "Translate 'Hanno lavorato duramente tutto il giorno.'",
    options: [
      "They worked hard all day.",
      "They worked hardly all day.",
      "They worked difficultly all day.",
      "They worked heavy all day."
    ],
    correctIndex: 0,
    explanation: "'Duramente' (con fatica) is 'hard'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Adverbs of Manner"
  },
  {
    id: "q373",
    prompt: "Translate 'Per favore, parla lentamente.'",
    options: [
      "Please, speak slowly.",
      "Please, speak slow.",
      "Please, speak slower.",
      "Please, speak slowingly."
    ],
    correctIndex: 0,
    explanation: "'Lentamente' is 'slowly'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Adverbs of Manner"
  },
  {
    id: "q374",
    prompt: "Translate 'Ha chiuso la porta silenziosamente.'",
    options: [
      "He closed the door quietly.",
      "He closed the door quiet.",
      "He closed the door quietlyly.",
      "He closed the door silent."
    ],
    correctIndex: 0,
    explanation: "'Silenziosamente' is 'quietly'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Adverbs of Manner"
  },
  {
    id: "q375",
    prompt: "Translate 'Hanno risolto il problema facilmente.'",
    options: [
      "They solved the problem easily.",
      "They solved the problem easy.",
      "They solved the problem with easy.",
      "They solved the problem easier."
    ],
    correctIndex: 0,
    explanation: "'Facilmente' is 'easily'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Adverbs of Manner"
  },
  {
    id: "q376",
    prompt: "Translate 'Guida sempre con molta attenzione (attentamente).'",
    options: [
      "He always drives carefully.",
      "He always drives careful.",
      "He always drives care.",
      "He always drives with careful."
    ],
    correctIndex: 0,
    explanation: "'Attentamente' is 'carefully'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Adverbs of Manner"
  },
  {
    id: "q377",
    prompt: "Translate 'L\'insegnante ha spiegato la regola chiaramente.'",
    options: [
      "The teacher explained the rule clearly.",
      "The teacher explained the rule clear.",
      "The teacher explained the rule cleary.",
      "The teacher explained the rule clearing."
    ],
    correctIndex: 0,
    explanation: "'Chiaramente' is 'clearly'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Adverbs of Manner"
  },
  {
    id: "q378",
    prompt: "Translate 'Ho capito perfettamente.'",
    options: [
      "I understood perfectly.",
      "I understood perfect.",
      "I understood perfection.",
      "I understood perfectlyly."
    ],
    correctIndex: 0,
    explanation: "'Perfettamente' is 'perfectly'.",
    category: "Traduzione",
    level: "A2",
    grammarTopic: "Adverbs of Manner"
  }
];
