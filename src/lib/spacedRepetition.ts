import { Question, UserStats, AppState } from '../types';
import { questions } from '../data/questions';

// Initialize or update stats for a question
export function getQuestionStats(stats: UserStats, questionId: string) {
  if (!stats[questionId]) {
    return {
      correct: 0,
      incorrect: 0,
      omitted: 0,
      lastSeen: 0,
      box: 0, // Repetitions count
      easiness: 2.5,
      interval: 0,
    };
  }
  return {
    ...stats[questionId],
    correct: stats[questionId].correct ?? 0,
    incorrect: stats[questionId].incorrect ?? 0,
    omitted: stats[questionId].omitted ?? 0,
    // Migrate old stats if necessary
    box: stats[questionId].box === 1 && stats[questionId].correct === 0 ? 0 : stats[questionId].box,
    easiness: stats[questionId].easiness ?? 2.5,
    interval: stats[questionId].interval ?? 0,
  };
}

// Select questions for practice using SuperMemo-2 (SM-2) algorithm
export function selectPracticeQuestions(stats: UserStats, options: { numQuestions?: number, mode?: 'standard' | 'weakness' | 'blitz' | 'category' | 'recall' | 'smart', category?: string } = {}): Question[] {
  const { numQuestions = 10, mode = 'standard', category } = options;
  const now = Date.now();
  
  let pool = questions;
  if (category && mode === 'category') {
    if (category.startsWith('level:')) {
      pool = questions.filter(q => q.level === category.substring(6));
    } else if (category.startsWith('topic:')) {
      pool = questions.filter(q => q.grammarTopic === category.substring(6));
    } else if (category.startsWith('category:')) {
      pool = questions.filter(q => q.category === category.substring(9));
    } else {
      pool = questions.filter(q => q.category === category);
    }
  }

  const scoredQuestions = pool.map(q => {
    const qStats = getQuestionStats(stats, q.id);
    let score = 0;

    if (mode === 'weakness') {
      // Prioritize questions with lowest easiness, highest incorrect/correct ratio
      const totalAttempts = qStats.correct + qStats.incorrect;
      if (totalAttempts === 0) {
        score = 0; // Not seen yet, not a weakness
      } else {
        const errorRate = qStats.incorrect / totalAttempts;
        score = (errorRate * 1000) + ((5 - qStats.easiness) * 100);
      }
    } else if (mode === 'smart') {
      // Academic approach for ADHD & Low Conscientiousness:
      // Combines Spaced Repetition (SM-2) for long-term retention,
      // Weakness targeting for immediate struggle areas,
      // and a degree of randomness (interleaving) to keep dopamine and engagement high.
      
      let sm2Score = 0;
      if (qStats.lastSeen === 0) {
        sm2Score = 800 + Math.random() * 200; // High priority for unseen
      } else {
        const daysSinceSeen = (now - qStats.lastSeen) / (1000 * 60 * 60 * 24);
        const isDue = daysSinceSeen >= qStats.interval;
        if (isDue) {
          sm2Score = 500 + (daysSinceSeen - qStats.interval) * 10;
        } else {
          sm2Score = (daysSinceSeen / Math.max(1, qStats.interval)) * 100;
        }
      }

      let weaknessScore = 0;
      const totalAttempts = qStats.correct + qStats.incorrect;
      if (totalAttempts > 0) {
        const errorRate = qStats.incorrect / totalAttempts;
        // Boost score significantly if error rate is high and easiness is low
        weaknessScore = (errorRate * 400) + ((5 - qStats.easiness) * 40);
      }

      // Combine scores and add some noise for interleaving
      score = sm2Score + weaknessScore + (Math.random() * 100);

    } else {
      // Standard SM-2 scoring
      if (qStats.lastSeen === 0) {
        score = 1000 + Math.random() * 100;
      } else {
        const daysSinceSeen = (now - qStats.lastSeen) / (1000 * 60 * 60 * 24);
        const isDue = daysSinceSeen >= qStats.interval;

        if (isDue) {
          score = 500 + (daysSinceSeen - qStats.interval) * 10;
        } else {
          score = (daysSinceSeen / Math.max(1, qStats.interval)) * 100;
        }
      }
    }

    return { question: q, score };
  });

  // Sort by score descending
  scoredQuestions.sort((a, b) => b.score - a.score);

  return scoredQuestions.slice(0, numQuestions).map(sq => sq.question);
}

// Update stats after answering based on SM-2 and fluency (time)
export function updateStats(appState: AppState, questionId: string, isCorrect: boolean, timeTakenMs: number = 0, attempts: number = 1, confidence: 'low' | 'medium' | 'high' = 'high'): AppState {
  const stats = appState.stats;
  const speedStats = appState.speedStats || { minTimeMs: 3000, maxTimeMs: 15000, avgTimeMs: 8000, totalAnswers: 0 };
  const qStats = getQuestionStats(stats, questionId);
  
  let newRepetitions = qStats.box;
  let newEasiness = qStats.easiness;
  let newInterval = qStats.interval;

  let { minTimeMs, maxTimeMs, avgTimeMs, totalAnswers } = speedStats;

  // Grade from 0 to 5 based on performance
  let quality = 0;
  
  if (isCorrect) {
    if (attempts === 1) {
      // Update global speed stats
      totalAnswers += 1;
      // Cap timeTakenMs so a 5-minute distraction doesn't ruin the average
      const cappedTimeMs = Math.min(timeTakenMs, 60000); 
      avgTimeMs = avgTimeMs + (cappedTimeMs - avgTimeMs) / totalAnswers;
      
      // Gradually learn the user's natural min and max speeds
      if (cappedTimeMs < minTimeMs) {
        minTimeMs = cappedTimeMs;
      } else {
        // slowly pull minTimeMs up over time in case they get slower
        minTimeMs += 10;
      }
  
      if (cappedTimeMs > maxTimeMs) {
        maxTimeMs = cappedTimeMs;
      } else {
        // slowly pull maxTimeMs down over time in case they get faster
        maxTimeMs -= 10;
      }
  
      // Ensure safe bounds
      minTimeMs = Math.max(1000, minTimeMs);
      maxTimeMs = Math.max(minTimeMs + 2000, maxTimeMs);
    }

    // Calculate a speed penalty from 0.0 to 1.0 based on the user's boundaries
    let speedPenalty = 0;
    if (timeTakenMs >= maxTimeMs) {
      speedPenalty = 1.0;
    } else if (timeTakenMs > minTimeMs) {
      speedPenalty = (timeTakenMs - minTimeMs) / (maxTimeMs - minTimeMs);
    }

    if (attempts === 1) {
      // First try: Quality ranges smoothly from 3.0 to 5.0
      quality = 5.0 - (speedPenalty * 2.0);
    } else {
      // Multiple attempts: Quality is strictly less than 3.0 (meaning an "incorrect" flag in SM-2),
      // but it smoothly decays based on how many attempts it took and how long it took.
      const baseQuality = Math.max(1.0, 3.0 - (attempts - 1) * 0.5);
      quality = Math.max(0.1, baseQuality - (speedPenalty * 0.5));
    }

    if (confidence === 'low') {
      // If they guessed, heavily penalize quality so they see it again soon
      quality = Math.max(0.1, quality - 2.5);
    } else if (confidence === 'medium') {
      quality = Math.max(0.1, quality - 1.0);
    }
  } else {
    // Completely incorrect / unrecoverable
    quality = 0;
  }

  if (quality >= 3) {
    // Correct answer
    if (newRepetitions === 0) {
      newInterval = 1;
    } else if (newRepetitions === 1) {
      newInterval = 6;
    } else {
      newInterval = Math.round(newInterval * newEasiness);
    }
    newRepetitions += 1;
  } else {
    // Incorrect answer
    newRepetitions = 0;
    newInterval = 1;
  }

  // Update easiness factor based on quality
  newEasiness = newEasiness + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  newEasiness = Math.max(1.3, newEasiness); // Minimum easiness is 1.3

  const dateString = new Date().toISOString().split('T')[0];
  const dailyActivity = { ...(appState.dailyActivity || {}) };
  dailyActivity[dateString] = (dailyActivity[dateString] || 0) + 1;

  return {
    ...appState,
    speedStats: { minTimeMs, maxTimeMs, avgTimeMs, totalAnswers },
    dailyActivity,
    stats: {
      ...stats,
      [questionId]: {
        ...qStats,
        correct: qStats.correct + (isCorrect && attempts === 1 ? 1 : 0),
        incorrect: qStats.incorrect + (quality < 3 ? 1 : 0),
        lastSeen: Date.now(),
        box: newRepetitions,
        easiness: newEasiness,
        previousEasiness: qStats.easiness,
        interval: newInterval,
      }
    }
  };
}
