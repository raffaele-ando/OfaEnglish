import { AppState } from '../types';
import { questions } from '../data/questions';
import { X, Trophy, TrendingUp, AlertCircle, Clock } from 'lucide-react';
import { cn } from '../lib/utils';

interface StatsModeProps {
  appState: AppState;
  onExit: () => void;
}

export default function StatsMode({ appState, onExit }: StatsModeProps) {
  // Compute stats
  const totalQuestions = questions.length;
  const answeredQuestions = Object.keys(appState.stats).length;
  const masteryPercentage = Math.round((answeredQuestions / totalQuestions) * 100) || 0;
  
  const examsTaken = appState.history.length;
  const passedExams = appState.history.filter(h => h.passed).length;
  const passRate = examsTaken > 0 ? Math.round((passedExams / examsTaken) * 100) : 0;
  
  const bestScore = Math.max(0, ...appState.history.map(h => h.score));

  // Find most frequent errors
  const errorRates = Object.keys(appState.stats)
    .map(qId => {
      const stat = appState.stats[qId];
      const totalAttempts = stat.correct + stat.incorrect;
      const errorRate = totalAttempts > 0 ? stat.incorrect / totalAttempts : 0;
      return { qId, errorRate, incorrect: stat.incorrect };
    })
    .filter(item => item.incorrect > 0)
    .sort((a, b) => b.errorRate - a.errorRate)
    .slice(0, 5); // top 5 hardest questions

  return (
    <div className="flex flex-col h-full sm:h-auto sm:max-h-[90vh] w-full bg-white dark:bg-[#1E293B] sm:rounded-[32px] sm:border-2 sm:border-gray-200 dark:sm:border-[#334155] overflow-hidden shadow-sm transition-colors duration-300">
      <header className="flex items-center justify-between p-3 sm:p-5 border-b-2 border-gray-200 dark:border-[#334155] h-14 sm:h-16 transition-colors">
        <h2 className="text-lg sm:text-xl font-black text-[#4B4B4B] dark:text-[#F8FAFC] uppercase tracking-widest">Statistiche</h2>
        <button onClick={onExit} className="p-1 sm:p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#334155] rounded-full transition-colors">
          <X size={20} className="sm:w-6 sm:h-6" strokeWidth={3} />
        </button>
      </header>

      <main className="flex-1 overflow-y-auto scrollbar-hide p-3 sm:p-6 space-y-4 sm:space-y-6">
        
        {/* Overview Cards */}
        <div className="grid grid-cols-2 gap-2 sm:gap-4">
          <div className="bg-[#E5F5FF] dark:bg-[#0EA5E9]/10 border-2 border-[#84D8FF] dark:border-[#0284C7] rounded-xl sm:rounded-2xl p-3 sm:p-5 flex flex-col items-center text-center transition-colors">
            <Trophy className="text-[#1CB0F6] dark:text-[#38BDF8] mb-1 sm:mb-2 w-5 sm:w-6 h-5 sm:h-6" />
            <span className="text-xl sm:text-2xl font-black text-[#1CB0F6] dark:text-[#38BDF8] leading-none mb-1">{masteryPercentage}%</span>
            <span className="text-[9px] sm:text-[10px] font-bold text-[#1899D6] dark:text-[#0284C7] uppercase tracking-widest">Syllabus Coperto</span>
          </div>
          <div className="bg-[#D7FFB8] dark:bg-[#059669]/10 border-2 border-[#58CC02] dark:border-[#059669] rounded-xl sm:rounded-2xl p-3 sm:p-5 flex flex-col items-center text-center transition-colors">
            <TrendingUp className="text-[#58CC02] dark:text-[#10B981] mb-1 sm:mb-2 w-5 sm:w-6 h-5 sm:h-6" />
            <span className="text-xl sm:text-2xl font-black text-[#46A302] dark:text-[#34D399] leading-none mb-1">{passRate}%</span>
            <span className="text-[9px] sm:text-[10px] font-bold text-[#46A302] dark:text-[#059669] uppercase tracking-widest">Pass Rate</span>
          </div>
        </div>

        {/* Exam History Summary */}
        <div className="bg-white dark:bg-[#0F172A] border-2 border-gray-200 dark:border-[#334155] rounded-2xl p-4 sm:p-5 transition-colors">
          <h3 className="text-sm sm:text-base font-black text-[#4B4B4B] dark:text-[#F8FAFC] mb-3 uppercase tracking-widest flex items-center gap-2">
            <Clock className="text-[#CE82FF] dark:text-[#D946EF] w-4 sm:w-5 h-4 sm:h-5" />
            Simulazioni
          </h3>
          <div className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-100 dark:border-[#334155]">
            <span className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400">Esami completati</span>
            <span className="text-sm sm:text-base font-black text-[#4B4B4B] dark:text-[#F8FAFC]">{examsTaken}</span>
          </div>
          <div className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-100 dark:border-[#334155]">
            <span className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400">Esami superati</span>
            <span className="text-sm sm:text-base font-black text-[#58CC02] dark:text-[#10B981]">{passedExams}</span>
          </div>
          <div className="flex justify-between items-center py-2 sm:py-3">
            <span className="text-xs sm:text-sm font-bold text-gray-500 dark:text-gray-400">Miglior punteggio</span>
            <span className="text-sm sm:text-base font-black text-[#FFC800] dark:text-[#FBBF24]">{bestScore > 0 ? `${bestScore}/30` : '-'}</span>
          </div>
        </div>

        {/* Category Stats */}
        {appState.examCategoryStats && Object.keys(appState.examCategoryStats).length > 0 && (
          <div>
            <h3 className="text-sm sm:text-base font-black text-[#4B4B4B] dark:text-[#F8FAFC] mb-3 uppercase tracking-widest flex items-center gap-2">
              <TrendingUp className="text-[#1CB0F6] dark:text-[#38BDF8] w-4 sm:w-5 h-4 sm:h-5" />
              Performance per Categoria
            </h3>
            <div className="space-y-2 sm:space-y-3">
              {Object.entries(appState.examCategoryStats)
                .sort((a, b) => (b[1].correct / b[1].total) - (a[1].correct / a[1].total)) // Sort by performance
                .map(([cat, stats]) => {
                const percentage = Math.round((stats.correct / stats.total) * 100);
                let colorClass = "bg-gray-200";
                let textClass = "text-gray-500";
                if (percentage >= 80) { colorClass = "bg-[#58CC02]"; textClass = "text-[#58CC02]"; }
                else if (percentage >= 50) { colorClass = "bg-[#FFC800]"; textClass = "text-[#FFC800]"; }
                else { colorClass = "bg-[#FF4B4B]"; textClass = "text-[#FF4B4B]"; }

                return (
                  <div key={cat} className="bg-white dark:bg-[#0F172A] border-2 border-gray-200 dark:border-[#334155] rounded-xl p-3 transition-colors">
                    <div className="flex justify-between items-center mb-1.5">
                      <span className="font-bold text-[#4B4B4B] dark:text-[#F8FAFC] uppercase tracking-wider text-[10px] sm:text-xs">{cat}</span>
                      <span className={cn("font-black text-sm sm:text-base", textClass)}>{percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-[#334155] h-2 rounded-full overflow-hidden">
                      <div className={cn("h-full rounded-full", colorClass)} style={{ width: `${percentage}%` }} />
                    </div>
                    <p className="text-[9px] sm:text-[10px] font-bold text-gray-400 dark:text-gray-500 mt-1.5 text-right">
                      {stats.correct} / {stats.total} corrette
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Most common errors */}
        <div>
          <h3 className="text-sm sm:text-base font-black text-[#4B4B4B] dark:text-[#F8FAFC] mb-3 uppercase tracking-widest flex items-center gap-2">
            <AlertCircle className="text-[#FF4B4B] dark:text-[#F87171] w-4 sm:w-5 h-4 sm:h-5" />
            Errori Frequenti
          </h3>
          {errorRates.length === 0 ? (
            <div className="text-center p-6 bg-gray-50 dark:bg-[#0F172A] rounded-2xl border-2 border-gray-200 dark:border-[#334155] border-dashed transition-colors">
              <span className="font-bold text-xs sm:text-sm text-gray-400 dark:text-gray-500">Non ci sono ancora dati sufficienti. Continua ad esercitarti!</span>
            </div>
          ) : (
            <div className="space-y-2 sm:space-y-3">
              {errorRates.map(err => {
                const q = questions.find(q => q.id === err.qId);
                if (!q) return null;
                return (
                  <div key={err.qId} className="bg-[#FFE5E5] dark:bg-[#7F1D1D] border-2 border-[#FF4B4B] dark:border-[#EF4444] rounded-2xl p-4 shadow-sm transition-colors">
                    <p className="font-bold text-xs sm:text-sm text-[#3C3C3C] dark:text-[#F8FAFC] mb-2">{q.prompt}</p>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-[9px] sm:text-[10px] font-bold bg-white dark:bg-[#450A0A] text-[#D80000] dark:text-[#FCA5A5] px-1.5 py-0.5 rounded-md">
                        Sbagliata {err.incorrect} volte
                      </span>
                      <span className="text-[9px] sm:text-[10px] font-bold text-[#FF4B4B] dark:text-[#FCA5A5]">
                        Tasso d'errore: {Math.round(err.errorRate * 100)}%
                      </span>
                    </div>
                    <div className="bg-white/60 dark:bg-black/20 p-2 sm:p-3 rounded-lg border border-[#FF4B4B]/20 dark:border-[#EF4444]/20">
                      <p className="text-[10px] sm:text-xs font-bold text-[#46A302] dark:text-[#34D399] mb-1">
                        Corretta: {q.options[q.correctIndex]}
                      </p>
                      <p className="text-[10px] sm:text-xs font-medium text-[#4B4B4B] dark:text-gray-200">
                        {q.explanation}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
