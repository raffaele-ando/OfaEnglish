export interface Question {
  id: string;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  category: string;
  level?: string;
  grammarTopic?: string;
}

export interface UserStats {
  [questionId: string]: {
    correct: number;
    incorrect: number;
    omitted?: number;
    lastSeen: number;
    box: number; // Repetitions (previously Leitner box)
    easiness?: number; // SuperMemo-2 E-factor
    interval?: number; // Interval in days
    previousEasiness?: number; // per calcolare il trend
  };
}

export interface ExamHistory {
  id: string;
  date: number;
  score: number;
  passed: boolean;
  timeSpentSeconds: number;
  categoryStats?: Record<string, { correct: number; total: number; }>;
}

export interface AppState {
  stats: UserStats;
  history: ExamHistory[];
  streak: number;
  lastActiveDate: number | null;
  speedStats?: {
    minTimeMs: number;
    maxTimeMs: number;
    avgTimeMs: number;
    totalAnswers: number;
  };
  examCategoryStats?: Record<string, { correct: number; total: number; }>;
  dailyActivity?: Record<string, number>;
  dailyTimeSpent?: Record<string, number>;
}
