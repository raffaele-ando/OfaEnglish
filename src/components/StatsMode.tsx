import { AppState } from '../types';
import { questions } from '../data/questions';
import { X, Trophy, TrendingUp, AlertCircle, Clock, Target } from 'lucide-react';
import { cn } from '../lib/utils';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip } from 'recharts';

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
    <div className="h-full w-full bg-white dark:bg-[#1E293B] sm:rounded-[32px] sm:border-2 sm:border-gray-200 dark:sm:border-[#334155] overflow-hidden shadow-sm transition-colors duration-300">
      <div className="flex flex-col h-full p-2 sm:p-4">
      <header className="flex items-center justify-between p-2 border-b-2 border-gray-200 dark:border-[#334155] shrink-0 transition-colors">
        <h2 className="text-sm sm:text-lg font-black text-[#4B4B4B] dark:text-[#F8FAFC] uppercase tracking-widest">Statistiche</h2>
        <button onClick={onExit} className="p-1 sm:p-2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-50 dark:hover:bg-[#334155] rounded-full transition-colors">
          <X size={18} className="sm:w-5 sm:h-5" strokeWidth={3} />
        </button>
      </header>

      <main className="flex-1 overflow-y-auto scrollbar-hide p-4 sm:p-6 flex flex-col sm:grid sm:grid-cols-2 gap-4 sm:gap-6 items-stretch">
        
        {/* Left Column */}
        <div className="flex flex-col gap-4 sm:gap-6">
          {/* Overview Cards */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#E5F5FF] dark:bg-[#0EA5E9]/10 border-2 border-[#84D8FF] dark:border-[#0284C7] rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center transition-colors">
              <Trophy className="text-[#1CB0F6] dark:text-[#38BDF8] mb-2 w-8 h-8 sm:w-10 sm:h-10 shrink-0" />
              <span className="text-2xl sm:text-3xl font-black text-[#1CB0F6] dark:text-[#38BDF8] leading-none mb-1">{masteryPercentage}%</span>
              <span className="text-xs sm:text-sm font-bold text-[#1899D6] dark:text-[#0284C7] uppercase tracking-widest">Syllabus Coperto</span>
            </div>
            <div className="bg-[#D7FFB8] dark:bg-[#059669]/10 border-2 border-[#58CC02] dark:border-[#059669] rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center transition-colors">
              <TrendingUp className="text-[#58CC02] dark:text-[#10B981] mb-2 w-8 h-8 sm:w-10 sm:h-10 shrink-0" />
              <span className="text-2xl sm:text-3xl font-black text-[#46A302] dark:text-[#34D399] leading-none mb-1">{passRate}%</span>
              <span className="text-xs sm:text-sm font-bold text-[#46A302] dark:text-[#059669] uppercase tracking-widest">Pass Rate</span>
            </div>
          </div>

          {/* Exam Stats */}
          <div className="bg-white dark:bg-[#0F172A] border-2 border-gray-200 dark:border-[#334155] rounded-2xl p-4 sm:p-6 transition-colors flex flex-col justify-center">
            <h3 className="text-sm sm:text-base font-black text-[#4B4B4B] dark:text-[#F8FAFC] mb-3 uppercase tracking-widest flex items-center gap-2 shrink-0">
              <Clock className="text-[#CE82FF] dark:text-[#D946EF] w-5 h-5" />
              Simulazioni
            </h3>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-[#334155]">
                <span className="text-sm sm:text-base font-bold text-gray-500 dark:text-gray-400">Esami completati</span>
                <span className="text-base sm:text-lg font-black text-[#4B4B4B] dark:text-[#F8FAFC]">{examsTaken}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-[#334155]">
                <span className="text-sm sm:text-base font-bold text-gray-500 dark:text-gray-400">Esami superati</span>
                <span className="text-base sm:text-lg font-black text-[#58CC02] dark:text-[#10B981]">{passedExams}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-sm sm:text-base font-bold text-gray-500 dark:text-gray-400">Miglior punteggio</span>
                <span className="text-base sm:text-lg font-black text-[#FFC800] dark:text-[#FBBF24]">{bestScore > 0 ? `${bestScore}/30` : '-'}</span>
              </div>
            </div>
          </div>

          {/* Errori */}
          <div className="bg-white dark:bg-[#0F172A] border-2 border-gray-200 dark:border-[#334155] rounded-2xl p-4 sm:p-6 transition-colors flex flex-col">
            <h3 className="text-sm sm:text-base font-black text-[#4B4B4B] dark:text-[#F8FAFC] mb-3 uppercase tracking-widest flex items-center gap-2 shrink-0">
              <AlertCircle className="text-[#FF4B4B] dark:text-[#F87171] w-5 h-5" />
              Errori Comuni
            </h3>
            {errorRates.length === 0 ? (
              <div className="py-6 flex items-center justify-center text-center">
                <span className="font-bold text-sm text-gray-400 dark:text-gray-500">Non ci sono ancora dati sufficienti.</span>
              </div>
            ) : (
              <div className="space-y-3">
                {errorRates.slice(0, 3).map(err => {
                  const q = questions.find(q => q.id === err.qId);
                  if (!q) return null;
                  return (
                    <div key={err.qId} className="bg-[#FFE5E5] dark:bg-[#7F1D1D] border border-[#FF4B4B] dark:border-[#EF4444] rounded-xl p-3 sm:p-4 shadow-sm transition-colors flex flex-col gap-2">
                      <p className="font-bold text-sm sm:text-base text-[#3C3C3C] dark:text-[#F8FAFC] line-clamp-2 leading-tight">{q.prompt}</p>
                      <div className="flex items-center justify-between mt-1">
                        <span className="text-xs sm:text-sm font-bold bg-white dark:bg-[#450A0A] text-[#D80000] dark:text-[#FCA5A5] px-2 py-1 rounded shadow-sm">
                          {Math.round(err.errorRate * 100)}% errore
                        </span>
                        <span className="text-xs sm:text-sm font-bold text-[#46A302] dark:text-[#34D399] truncate max-w-[50%]">
                          {q.options[q.correctIndex]}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4 sm:gap-6 min-h-[300px] sm:min-h-0">
          {appState.examCategoryStats && Object.keys(appState.examCategoryStats).length > 0 ? (
            <div className="bg-white dark:bg-[#0F172A] border-2 border-gray-200 dark:border-[#334155] rounded-2xl p-4 sm:p-6 transition-colors flex flex-col h-full min-h-[300px]">
              <h3 className="text-sm sm:text-base font-black text-[#4B4B4B] dark:text-[#F8FAFC] mb-4 uppercase tracking-widest flex items-center gap-2 shrink-0">
                <Target className="text-[#1CB0F6] dark:text-[#38BDF8] w-5 h-5" />
                Skill Profile
              </h3>
              
              <div className="flex-1 min-h-0 relative">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart 
                    cx="50%" 
                    cy="50%" 
                    outerRadius="70%" 
                    data={Object.entries(appState.examCategoryStats).map(([cat, stats]) => ({
                      subject: cat,
                      A: Math.round((stats.correct / stats.total) * 100),
                      fullMark: 100,
                    }))}
                  >
                    <PolarGrid stroke="#e5e7eb" className="dark:stroke-[#334155]" />
                    <PolarAngleAxis 
                      dataKey="subject" 
                      tick={{ fill: '#9CA3AF', fontSize: 12, fontWeight: 'bold' }} 
                    />
                    <PolarRadiusAxis 
                      angle={30} 
                      domain={[0, 100]} 
                      tick={false} 
                      axisLine={false}
                    />
                    <Radar
                      name="Mastery"
                      dataKey="A"
                      stroke="#1CB0F6"
                      fill="#1CB0F6"
                      fillOpacity={0.5}
                    />
                    <Tooltip 
                      contentStyle={{ 
                        borderRadius: '12px', 
                        border: '2px solid #E5E7EB',
                        fontWeight: 'bold',
                        fontSize: '14px',
                        backgroundColor: '#fff',
                        color: '#4B4B4B',
                        padding: '8px 12px'
                      }}
                      itemStyle={{ color: '#1CB0F6', fontWeight: '900' }}
                    />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
          ) : (
            <div className="bg-white dark:bg-[#0F172A] border-2 border-gray-200 dark:border-[#334155] rounded-2xl p-6 transition-colors flex-1 flex flex-col justify-center items-center text-center min-h-[300px]">
              <AlertCircle className="text-[#FF4B4B] dark:text-[#F87171] w-10 h-10 mb-3 opacity-50" />
              <p className="text-sm font-bold text-gray-400">Completa almeno un esame per vedere il tuo Skill Profile radar.</p>
            </div>
          )}
        </div>
      </main>
      </div>
    </div>
  );
}
