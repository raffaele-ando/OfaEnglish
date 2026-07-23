import { useState, useEffect, useMemo } from 'react';
import { Question, ExamHistory } from '../types';
import { questions } from '../data/questions';
import { motion } from 'motion/react';
import { X, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn, calculateSimilarity, shuffleQuestion } from '../lib/utils';
import confetti from 'canvas-confetti';

interface ExamModeProps {
  onComplete: (history: ExamHistory, categoryUpdates: Record<string, { correct: number, total: number }>) => void;
  onExit: () => void;
}

const EXAM_DURATION = 15 * 60; // 15 minutes
const PASSING_SCORE = 25;

export default function ExamMode({ onComplete, onExit }: ExamModeProps) {
  const [examQuestions, setExamQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [timeLeft, setTimeLeft] = useState(EXAM_DURATION);
  const [isFinished, setIsFinished] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    // Pick 30 distinct questions avoiding high similarity
    const shuffled = [...questions].sort(() => 0.5 - Math.random());
    const selected: Question[] = [];
    
    for (const q of shuffled) {
      if (selected.length >= 30) break;
      
      // Check similarity with already selected questions (threshold 0.45)
      const isTooSimilar = selected.some(
        selectedQ => calculateSimilarity(selectedQ.prompt, q.prompt) > 0.45
      );
      
      if (!isTooSimilar) {
        selected.push(q);
      }
    }
    
    // Fallback if we couldn't find 30 different ones
    if (selected.length < 30) {
      for (const q of shuffled) {
        if (selected.length >= 30) break;
        if (!selected.some(s => s.id === q.id)) {
          selected.push(q);
        }
      }
    }

    setExamQuestions(selected.map(shuffleQuestion));
  }, []);

  useEffect(() => {
    let timer: any;
    if (hasStarted && !isFinished && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            handleFinish(answers);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hasStarted, isFinished, timeLeft]);

  const handleStart = () => setHasStarted(true);

  const handleFinish = (finalAnswers = answers) => {
    setIsFinished(true);
    let score = 0;
    const categoryUpdates: Record<string, { correct: number, total: number }> = {};

    examQuestions.forEach(q => {
      if (!categoryUpdates[q.category]) {
        categoryUpdates[q.category] = { correct: 0, total: 0 };
      }
      categoryUpdates[q.category].total++;

      if (finalAnswers[q.id] === q.correctIndex) {
        score++;
        categoryUpdates[q.category].correct++;
      }
    });

    const passed = score >= PASSING_SCORE;
    if (passed) {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    onComplete({
      id: Math.random().toString(36).substring(7),
      date: Date.now(),
      score,
      passed,
      timeSpentSeconds: EXAM_DURATION - timeLeft,
      categoryStats: categoryUpdates
    }, categoryUpdates);
  };

  const handleOptionSelect = (qId: string, optIdx: number) => {
    setAnswers(prev => ({ ...prev, [qId]: optIdx }));
  };

  if (examQuestions.length === 0) return null;

  if (!hasStarted) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-6 text-center bg-white dark:bg-[#1E293B] sm:rounded-[40px] sm:border-2 sm:border-gray-200 dark:sm:border-[#334155] overflow-hidden shadow-sm transition-colors duration-300">
        <Clock className="text-[#1CB0F6] dark:text-[#38BDF8] mb-6" size={64} />
        <h2 className="text-4xl font-black text-[#4B4B4B] dark:text-[#F8FAFC] mb-4">Mock Exam</h2>
        <ul className="text-left text-gray-500 dark:text-gray-400 font-bold space-y-4 mb-10 max-w-sm">
          <li className="flex gap-3 items-center"><span className="w-2 h-2 bg-[#1CB0F6] dark:bg-[#38BDF8] rounded-full"></span> 30 Multiple choice questions</li>
          <li className="flex gap-3 items-center"><span className="w-2 h-2 bg-[#FFC800] dark:bg-[#FBBF24] rounded-full"></span> 15 Minutes time limit</li>
          <li className="flex gap-3 items-center"><span className="w-2 h-2 bg-[#58CC02] dark:bg-[#46A302] rounded-full"></span> 25/30 required to pass</li>
          <li className="flex gap-3 items-center"><span className="w-2 h-2 bg-[#CE82FF] dark:bg-[#D946EF] rounded-full"></span> No immediate feedback</li>
        </ul>
        <div className="flex flex-col gap-4 w-full max-w-sm">
          <button onClick={handleStart} className="w-full py-4 font-black tracking-widest text-white bg-[#58CC02] border-b-4 border-[#46A302] rounded-2xl active:border-b-0 active:translate-y-1 transition-all uppercase text-lg">
            Start Exam
          </button>
          <button onClick={onExit} className="w-full py-4 font-black tracking-widest text-gray-400 dark:text-gray-500 bg-white dark:bg-[#0F172A] border-2 border-gray-200 dark:border-[#334155] border-b-4 rounded-2xl active:border-b-0 active:translate-y-1 transition-all uppercase hover:bg-gray-50 dark:hover:bg-[#1E293B]">
            Cancel
          </button>
        </div>
      </div>
    );
  }

  if (isFinished) {
    const score = Object.keys(answers).filter(id => {
      const q = examQuestions.find(q => q.id === id);
      return q && answers[id] === q.correctIndex;
    }).length;
    
    const passed = score >= PASSING_SCORE;

    return (
      <div className="flex flex-col h-full overflow-y-auto bg-white dark:bg-[#1E293B] sm:rounded-[40px] sm:border-2 sm:border-gray-200 dark:sm:border-[#334155] shadow-sm p-6 text-center transition-colors duration-300">
        <div className="py-10">
          <h2 className={cn("text-4xl font-black uppercase tracking-widest mb-2", passed ? "text-[#58CC02] dark:text-[#10B981]" : "text-[#FF4B4B] dark:text-[#F87171]")}>
            {passed ? "PASSED" : "FAILED"}
          </h2>
          <div className="text-[5rem] leading-none font-black text-[#4B4B4B] dark:text-[#F8FAFC] mb-2">{score}/30</div>
          <p className="text-gray-400 dark:text-gray-500 font-bold uppercase tracking-wider text-sm mt-4">
            Time taken: {Math.floor((EXAM_DURATION - timeLeft) / 60)}m {((EXAM_DURATION - timeLeft) % 60).toString().padStart(2, '0')}s
          </p>
        </div>

        <button onClick={onExit} className="w-full max-w-sm mx-auto mb-10 bg-[#1CB0F6] border-b-4 border-[#1899D6] active:border-b-0 active:translate-y-1 text-white font-black text-lg uppercase tracking-widest py-4 rounded-2xl transition-all">
          Return to Menu
        </button>

        <div className="text-left max-w-2xl mx-auto w-full pb-10">
          <h3 className="text-xl font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-6">Review Incorrect Answers</h3>
          <div className="space-y-6">
            {examQuestions.filter(q => answers[q.id] !== q.correctIndex).map((q, idx) => (
              <div key={q.id} className="bg-[#FFE5E5] dark:bg-[#7F1D1D] border-2 border-[#FF4B4B] dark:border-[#EF4444] rounded-3xl p-6 shadow-sm transition-colors">
                <p className="font-bold text-lg text-[#3C3C3C] dark:text-[#F8FAFC] mb-4">{q.prompt}</p>
                <div className="space-y-3 text-sm">
                  <div className="flex gap-2 items-center">
                    <span className="font-bold text-[#D80000] dark:text-[#FCA5A5] uppercase text-xs tracking-widest">Your Answer:</span>
                    <span className="text-[#D80000] dark:text-[#FCA5A5] line-through font-medium">
                      {answers[q.id] !== undefined ? q.options[answers[q.id]] : "No answer"}
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="font-bold text-[#46A302] dark:text-[#34D399] uppercase text-xs tracking-widest">Correct:</span>
                    <span className="text-[#46A302] dark:text-[#34D399] font-bold">
                      {q.options[q.correctIndex]}
                    </span>
                  </div>
                  <p className="text-[#4B4B4B] dark:text-gray-200 font-medium mt-4 bg-white/60 dark:bg-black/20 p-4 rounded-xl border border-[#FF4B4B]/20 dark:border-[#EF4444]/20">
                    {q.explanation}
                  </p>
                </div>
              </div>
            ))}
            {score === 30 && (
              <p className="text-[#58CC02] dark:text-[#10B981] font-black text-center p-6 bg-[#D7FFB8] dark:bg-[#064E3B] rounded-3xl border-2 border-[#58CC02] dark:border-[#46A302] transition-colors">
                Perfect score! Nothing to review.
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  const question = examQuestions[currentIndex];
  const answeredCount = Object.keys(answers).length;
  const progress = (answeredCount / 30) * 100;
  
  const m = Math.floor(timeLeft / 60);
  const s = timeLeft % 60;
  const timeStr = `${m}:${s.toString().padStart(2, '0')}`;

  return (
    <div className="flex flex-col h-full bg-white dark:bg-[#1E293B] sm:rounded-[40px] sm:border-2 sm:border-gray-200 dark:sm:border-[#334155] overflow-hidden shadow-sm transition-colors duration-300">
      <header className="flex flex-col gap-3 p-6 border-b-2 border-gray-200 dark:border-[#334155] transition-colors">
        <div className="flex items-center justify-between">
          <button onClick={onExit} className="p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#334155] rounded-full transition-colors">
            <X size={24} strokeWidth={3} />
          </button>
          <div className={cn("font-black font-mono text-xl flex items-center gap-2", timeLeft < 120 ? "text-[#FF4B4B] dark:text-[#EF4444]" : "text-[#1CB0F6] dark:text-[#38BDF8]")}>
            <Clock size={20} strokeWidth={3} /> {timeStr}
          </div>
          <button 
            onClick={() => handleFinish()}
            className="text-sm font-black text-[#CE82FF] dark:text-[#D946EF] hover:bg-[#CE82FF]/10 dark:hover:bg-[#D946EF]/10 px-4 py-2 rounded-xl uppercase tracking-widest transition-colors"
          >
            Submit
          </button>
        </div>
        <div className="flex items-center gap-3 mt-2">
          <span className="text-xs font-black text-gray-400 dark:text-gray-500 w-12 text-right">{answeredCount}/30</span>
          <div className="flex-1 bg-gray-200 dark:bg-[#334155] h-4 rounded-full overflow-hidden transition-colors">
            <div className="bg-[#1CB0F6] dark:bg-[#38BDF8] h-full rounded-full transition-all" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto p-8 flex flex-col max-w-2xl mx-auto w-full">
        <div className="mb-6 inline-block">
          <span className="px-4 py-1.5 bg-[#FFC800] dark:bg-[#F59E0B] text-white text-[11px] font-black uppercase rounded-full tracking-widest shadow-sm">
            Question {currentIndex + 1}
          </span>
        </div>
        <h2 className="text-3xl font-black text-[#3C3C3C] dark:text-[#F8FAFC] mb-10 leading-tight">
          {question.prompt}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {question.options.map((opt, idx) => {
            const isSelected = answers[question.id] === idx;
            return (
              <button
                key={idx}
                onClick={() => handleOptionSelect(question.id, idx)}
                className={cn(
                  "p-6 text-left border-2 rounded-2xl group transition-all",
                  isSelected 
                    ? "bg-[#DDF4FF] dark:bg-[#0369A1] border-[#84D8FF] dark:border-[#38BDF8] text-[#1899D6] dark:text-[#E0F2FE]" 
                    : "border-gray-200 dark:border-[#334155] bg-white dark:bg-[#0F172A] hover:bg-gray-50 dark:hover:bg-[#1E293B] hover:border-blue-400 dark:hover:border-blue-500 text-[#4B4B4B] dark:text-gray-200"
                )}
              >
                <div className="flex items-center gap-4">
                  <span className={cn("w-10 h-10 flex shrink-0 items-center justify-center border-2 rounded-xl font-black transition-colors", 
                    isSelected ? "border-[#84D8FF] dark:border-[#38BDF8] bg-white dark:bg-[#0369A1] text-[#1899D6] dark:text-[#E0F2FE]" : "border-gray-200 dark:border-[#334155] text-gray-400 dark:text-gray-500 group-hover:bg-blue-100 dark:group-hover:bg-[#1E293B] group-hover:border-blue-400 dark:group-hover:border-blue-500 group-hover:text-blue-600 dark:group-hover:text-blue-400"
                  )}>
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-lg font-bold">{opt}</span>
                </div>
              </button>
            );
          })}
        </div>
      </main>

      <div className="p-4 border-t-2 border-gray-200 dark:border-[#334155] bg-white dark:bg-[#1E293B] min-h-[100px] flex items-center transition-colors">
        <div className="max-w-4xl w-full mx-auto flex justify-between items-center px-4">
          <button
            onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
            disabled={currentIndex === 0}
            className="p-4 text-gray-400 dark:text-gray-500 disabled:opacity-30 rounded-2xl hover:bg-gray-100 dark:hover:bg-[#334155] transition-colors border-2 border-transparent active:bg-gray-200 dark:active:bg-[#475569]"
          >
            <ChevronLeft size={32} strokeWidth={3} />
          </button>
          
          <div className="flex gap-1.5 overflow-x-auto max-w-[200px] sm:max-w-sm px-2 scrollbar-hide items-center">
            {examQuestions.map((q, idx) => (
              <div 
                key={idx} 
                className={cn(
                  "h-2.5 min-w-[10px] flex-1 rounded-full transition-all", 
                  currentIndex === idx ? "bg-[#4B4B4B] dark:bg-[#F8FAFC] h-4" : answers[q.id] !== undefined ? "bg-[#1CB0F6] dark:bg-[#38BDF8]" : "bg-gray-200 dark:bg-[#334155]"
                )}
              />
            ))}
          </div>

          <button
            onClick={() => setCurrentIndex(prev => Math.min(29, prev + 1))}
            disabled={currentIndex === 29}
            className="p-4 text-gray-400 dark:text-gray-500 disabled:opacity-30 rounded-2xl hover:bg-gray-100 dark:hover:bg-[#334155] transition-colors border-2 border-transparent active:bg-gray-200 dark:active:bg-[#475569]"
          >
            <ChevronRight size={32} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
}
