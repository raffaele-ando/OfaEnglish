import { useState, useEffect } from 'react';
import { Question, AppState } from '../types';
import { selectPracticeQuestions, updateStats } from '../lib/spacedRepetition';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight, RotateCcw } from 'lucide-react';
import { cn, shuffleQuestion } from '../lib/utils';

interface LearnModeProps {
  appState: AppState;
  mode: 'standard' | 'weakness' | 'blitz' | 'category' | 'recall' | 'smart';
  category?: string;
  onUpdateAppState: (newState: AppState) => void;
  onExit: () => void;
}

export default function LearnMode({ appState, mode, category, onUpdateAppState, onExit }: LearnModeProps) {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasChecked, setHasChecked] = useState(false);
  const [sessionStats, setSessionStats] = useState({ correct: 0, total: 0 });
  const [optionsRevealed, setOptionsRevealed] = useState(mode !== 'recall');
  
  const [startTime, setStartTime] = useState<number>(Date.now());
  const [attempts, setAttempts] = useState(0);
  const [wrongOptions, setWrongOptions] = useState<Set<number>>(new Set());
  
  const timeLimit = mode === 'blitz' ? 10 : 30;
  const [timeLeft, setTimeLeft] = useState(timeLimit);

  useEffect(() => {
    setQuestions(selectPracticeQuestions(appState.stats, { numQuestions: 10, mode, category }).map(shuffleQuestion));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setStartTime(Date.now());
    setAttempts(0);
    setWrongOptions(new Set());
    setTimeLeft(timeLimit);
    setOptionsRevealed(mode !== 'recall');
  }, [currentIndex, mode, timeLimit]);

  useEffect(() => {
    if (hasChecked || timeLeft <= 0 || attempts > 0) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [hasChecked, timeLeft, attempts]);

  useEffect(() => {
    if (timeLeft === 0 && !hasChecked && attempts === 0) {
      handleCheck('low', true);
    }
  }, [timeLeft, hasChecked, attempts]);

  if (questions.length === 0) return null;

  const question = questions[currentIndex];
  const isCorrect = selectedOption === question?.correctIndex;

  const handleCheck = (confidence: 'low' | 'medium' | 'high', isTimeout: boolean = false) => {
    if (selectedOption === null && !isTimeout) return;
    
    setHasChecked(true);
    const currentAttempts = attempts + 1;
    setAttempts(currentAttempts);
    
    const correct = !isTimeout && selectedOption === question.correctIndex;
    
    if (correct) {
      const timeTakenMs = Date.now() - startTime;
      const newState = updateStats(appState, question.id, true, timeTakenMs, currentAttempts, confidence);
      onUpdateAppState(newState);
      
      if (currentAttempts === 1) {
        setSessionStats(prev => ({ ...prev, correct: prev.correct + 1, total: prev.total + 1 }));
      } else {
        setSessionStats(prev => ({ ...prev, total: prev.total + 1 }));
      }
    } else {
      if (selectedOption !== null) {
        setWrongOptions(prev => new Set(prev).add(selectedOption));
      }
      
      // Update stats as incorrect on the first failed attempt
      if (currentAttempts === 1) {
        const timeTakenMs = Date.now() - startTime;
        const newState = updateStats(appState, question.id, false, timeTakenMs, currentAttempts, confidence);
        onUpdateAppState(newState);
      }
    }
  };

  const handleNext = () => {
    if (!isCorrect) {
      // Try again logic
      setHasChecked(false);
      setSelectedOption(null);
      return;
    }
    setSelectedOption(null);
    setHasChecked(false);
    setCurrentIndex(prev => prev + 1);
  };

  if (currentIndex >= questions.length) {
    return (
      <div className="flex flex-col h-full w-full bg-white dark:bg-[#1E293B] sm:rounded-[32px] sm:border-2 sm:border-gray-200 dark:sm:border-[#334155] overflow-hidden shadow-sm p-4 sm:p-6 items-center justify-center text-center transition-colors duration-300">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-[#58CC02] dark:bg-[#46A302] p-4 sm:p-6 rounded-full mb-4 sm:mb-6 text-white shadow-sm"
        >
          <Check size={40} className="sm:w-12 sm:h-12" strokeWidth={3} />
        </motion.div>
        <h2 className="text-2xl sm:text-3xl font-black text-[#4B4B4B] dark:text-[#F8FAFC] mb-2">Session Complete!</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-6 sm:mb-8 font-bold text-base sm:text-lg">
          You got {sessionStats.correct} out of {sessionStats.total} correct on the first try.
        </p>
        <button
          onClick={onExit}
          className="w-full max-w-sm bg-[#1CB0F6] border-b-4 border-[#1899D6] active:border-b-0 active:translate-y-1 text-white font-black text-base sm:text-lg py-3 sm:py-4 px-6 rounded-xl sm:rounded-2xl transition-all uppercase tracking-widest"
        >
          Continue
        </button>
      </div>
    );
  }

  const progress = (currentIndex / questions.length) * 100;

  return (
    <div className="flex flex-col h-full w-full bg-white dark:bg-[#1E293B] sm:rounded-[32px] sm:border-2 sm:border-gray-200 dark:sm:border-[#334155] overflow-hidden shadow-sm transition-colors duration-300">
      {/* Header & Progress */}
      <header className="flex items-center gap-3 sm:gap-4 p-3 border-b-2 border-gray-200 dark:border-[#334155] h-12 shrink-0 transition-colors">
        <button onClick={onExit} className="p-1 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 rounded-full transition-colors">
          <X size={18} strokeWidth={3} />
        </button>
        <div className="flex-1 bg-gray-200 dark:bg-[#334155] h-3 rounded-full overflow-hidden transition-colors">
          <motion.div 
            className="bg-[#58CC02] h-full rounded-full transition-all duration-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
          />
        </div>
        <div className={cn("font-black text-sm w-8 text-center", timeLeft <= 5 ? "text-[#FF4B4B] animate-pulse" : "text-gray-500 dark:text-gray-400")}>
          {timeLeft}s
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6 flex flex-col w-full overflow-y-auto scrollbar-hide min-h-0">
        <div className="mb-3 sm:mb-4 shrink-0">
          <span className="px-3 py-1 bg-[#CE82FF] dark:bg-[#D946EF] text-white text-[10px] sm:text-xs font-black uppercase rounded-full tracking-widest shadow-sm">
            Question {currentIndex + 1}
          </span>
        </div>
        <h2 className="text-lg sm:text-2xl font-black text-[#3C3C3C] dark:text-[#F8FAFC] mb-4 sm:mb-6 leading-tight shrink-0">
          {question.prompt}
        </h2>

        {!optionsRevealed ? (
          <div className="flex-1 flex flex-col items-center justify-center">
            <button
              onClick={() => setOptionsRevealed(true)}
              className="bg-[#CE82FF] border-b-4 border-[#A568CC] active:border-b-0 active:translate-y-1 text-white font-black text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition-all uppercase tracking-widest shadow-sm"
            >
              Rivela Opzioni
            </button>
            <p className="text-gray-400 font-bold mt-4 text-xs sm:text-sm text-center max-w-md">
              Pensa alla risposta prima di rivelare le opzioni per massimizzare il ricordo.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 flex-1 min-h-0">
            {question.options.map((opt, idx) => {
              let stateClass = "border-gray-200 dark:border-[#334155] bg-white dark:bg-[#0F172A] hover:bg-gray-50 dark:hover:bg-[#1E293B] hover:border-blue-400 dark:hover:border-blue-500 text-[#4B4B4B] dark:text-gray-200";
              let numberClass = "border-gray-200 dark:border-[#334155] text-gray-400 dark:text-gray-500 group-hover:bg-blue-100 dark:group-hover:bg-[#1E293B] group-hover:border-blue-400 dark:group-hover:border-blue-500 group-hover:text-blue-600 dark:group-hover:text-blue-400";
              
              if (hasChecked) {
                if (idx === question.correctIndex) {
                  stateClass = "border-[#58CC02] dark:border-[#46A302] bg-[#E5F5E5] dark:bg-[#064E3B] text-[#46A302] dark:text-[#10B981]";
                  numberClass = "border-[#58CC02] dark:border-[#46A302] bg-white dark:bg-[#064E3B] text-[#58CC02] dark:text-[#10B981]";
                } else if (idx === selectedOption) {
                  stateClass = "border-[#FF4B4B] dark:border-[#EF4444] bg-[#FFE5E5] dark:bg-[#7F1D1D] text-[#D80000] dark:text-[#F87171]";
                  numberClass = "border-[#FF4B4B] dark:border-[#EF4444] bg-white dark:bg-[#7F1D1D] text-[#FF4B4B] dark:text-[#F87171]";
                } else if (wrongOptions.has(idx)) {
                  stateClass = "border-gray-200 dark:border-[#334155] bg-gray-50 dark:bg-[#1E293B] opacity-50";
                } else {
                  stateClass = "border-gray-200 dark:border-[#334155] bg-white dark:bg-[#0F172A] opacity-50";
                }
              } else if (selectedOption === idx) {
                stateClass = "bg-[#DDF4FF] dark:bg-[#0369A1] border-[#84D8FF] dark:border-[#38BDF8] text-[#1899D6] dark:text-[#E0F2FE]";
                numberClass = "border-[#84D8FF] dark:border-[#38BDF8] bg-white dark:bg-[#0369A1] text-[#1899D6] dark:text-[#E0F2FE]";
              } else if (wrongOptions.has(idx)) {
                stateClass = "border-gray-200 dark:border-[#334155] bg-gray-50 dark:bg-[#1E293B] opacity-50";
              }

              return (
                <button
                  key={idx}
                  disabled={hasChecked || wrongOptions.has(idx)}
                  onClick={() => setSelectedOption(idx)}
                  className={cn(
                    "p-3 sm:p-4 text-left border-2 rounded-xl sm:rounded-2xl group transition-all h-full",
                    stateClass
                  )}
                >
                  <div className="flex items-start gap-3">
                    <span className={cn("w-8 h-8 sm:w-10 sm:h-10 text-sm sm:text-base flex shrink-0 items-center justify-center border-2 rounded-lg sm:rounded-xl font-black transition-colors mt-0.5", numberClass)}>
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="text-sm sm:text-base font-bold leading-tight">{opt}</span>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </main>

      {/* Bottom Action Bar */}
      <div className={cn("border-t-2 border-gray-200 dark:border-[#334155] shrink-0 p-3 sm:p-4 transition-colors flex items-center justify-center min-h-[80px]", hasChecked ? (isCorrect ? "bg-[#D7FFB8] dark:bg-[#064E3B] border-[#58CC02] dark:border-[#46A302]" : "bg-[#FFDFE0] dark:bg-[#7F1D1D] border-[#FF4B4B] dark:border-[#EF4444]") : "bg-white dark:bg-[#1E293B]")}>
        <div className="w-full max-w-4xl flex flex-row gap-3 sm:gap-4 items-center justify-between">
          <AnimatePresence>
            {hasChecked && (
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className={cn(
                  "font-black text-base sm:text-xl flex flex-col gap-1",
                  isCorrect ? "text-[#58CC02] dark:text-[#10B981]" : "text-[#FF4B4B] dark:text-[#F87171]"
                )}
              >
                {isCorrect ? "Ottimo!" : "Errata."}
                {!isCorrect && (
                  <p className="text-xs sm:text-sm font-bold opacity-80 text-gray-700 dark:text-gray-200">
                    Riprova!
                  </p>
                )}
                {isCorrect && (
                  <p className="text-xs sm:text-sm font-bold opacity-80 text-gray-700 dark:text-gray-200 line-clamp-2 leading-tight max-w-[200px] sm:max-w-md">
                    {question.explanation}
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {!hasChecked ? (
            <div className="ml-auto flex flex-row gap-2 sm:gap-3">
              <button
                onClick={() => handleCheck('low')}
                disabled={selectedOption === null}
                className="bg-[#FF4B4B] border-b-4 border-[#D80000] disabled:bg-gray-200 disabled:dark:bg-[#334155] disabled:border-gray-300 disabled:dark:border-[#475569] disabled:text-gray-400 disabled:dark:text-gray-600 text-white font-black uppercase text-[10px] sm:text-xs py-2 sm:py-3 px-3 sm:px-4 rounded-xl transition-all active:border-b-0 active:translate-y-1"
              >
                Indovino
              </button>
              <button
                onClick={() => handleCheck('medium')}
                disabled={selectedOption === null}
                className="bg-[#FFC800] border-b-4 border-[#E5B400] disabled:bg-gray-200 disabled:dark:bg-[#334155] disabled:border-gray-300 disabled:dark:border-[#475569] disabled:text-gray-400 disabled:dark:text-gray-600 text-white font-black uppercase text-[10px] sm:text-xs py-2 sm:py-3 px-3 sm:px-4 rounded-xl transition-all active:border-b-0 active:translate-y-1"
              >
                Incerto
              </button>
              <button
                onClick={() => handleCheck('high')}
                disabled={selectedOption === null}
                className="bg-[#58CC02] border-b-4 border-[#46A302] disabled:bg-gray-200 disabled:dark:bg-[#334155] disabled:border-gray-300 disabled:dark:border-[#475569] disabled:text-gray-400 disabled:dark:text-gray-600 text-white font-black uppercase text-[10px] sm:text-xs py-2 sm:py-3 px-3 sm:px-4 rounded-xl transition-all active:border-b-0 active:translate-y-1"
              >
                Sicuro
              </button>
            </div>
          ) : (
            <button
              onClick={handleNext}
              className={cn(
                "ml-auto text-white font-black uppercase text-sm sm:text-base py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl transition-all active:border-b-0 active:translate-y-1 border-b-4 flex items-center justify-center gap-2",
                isCorrect ? "bg-[#58CC02] border-[#46A302] dark:bg-[#10B981] dark:border-[#059669]" : "bg-[#FF4B4B] border-[#D80000] dark:bg-[#EF4444] dark:border-[#DC2626]"
              )}
            >
              {isCorrect ? (
                <>Next <ArrowRight size={20} strokeWidth={3} /></>
              ) : (
                <>Riprova <RotateCcw size={20} strokeWidth={3} /></>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

