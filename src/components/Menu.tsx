import { AppState } from '../types';
import { BookOpen, GraduationCap, Download, Flame, Award, BarChart2, Upload, Cloud, Moon, Sun, Crown, Gift, CheckCircle } from 'lucide-react';
import { User } from 'firebase/auth';
import { useTheme } from '../hooks/useTheme';
import { ActivityChart } from './ActivityChart';
import { cn } from '../lib/utils';

interface MenuProps {
  appState: AppState;
  user: User | null;
  onStartLearn: () => void;
  onStartExam: () => void;
  onOpenStats: () => void;
  onExport: () => void;
  onImport: () => void;
  onLogin: () => void;
  onLogout: () => void;
}

export default function Menu({ appState, user, onStartLearn, onStartExam, onOpenStats, onExport, onImport, onLogin, onLogout }: MenuProps) {
  const masteredQuestions = Object.values(appState.stats).filter(s => s.box >= 4).length;
  const bestScore = Math.max(0, ...appState.history.map(h => h.score));
  const { isDark, toggleTheme } = useTheme();

  // Endowed Progress Effect: Give users a 50 XP head start so they feel invested immediately.
  const totalXP = 50 + Object.values(appState.stats).reduce((sum, stat) => sum + stat.correct, 0) * 10;
  const currentLevel = Math.floor(Math.sqrt(totalXP / 50)) + 1;
  const xpForCurrentLevel = Math.pow(currentLevel - 1, 2) * 50;
  const xpForNextLevel = Math.pow(currentLevel, 2) * 50;
  const progressPercent = Math.min(100, Math.max(0, ((totalXP - xpForCurrentLevel) / (xpForNextLevel - xpForCurrentLevel)) * 100));

  // Daily Quest with Endowed Progress & Goal Gradient
  const todayStr = new Date().toISOString().split('T')[0];
  const todayActivity = appState.dailyActivity?.[todayStr] || 0;
  const dailyGoal = 5;
  const endowedDaily = 1; // 1 free progress step every day just for opening the app (Endowed Progress)
  const currentDailyProgress = Math.min(dailyGoal, todayActivity + endowedDaily);

  return (
    <div className="h-full sm:h-auto sm:max-h-[90vh] w-full bg-white dark:bg-[#1E293B] sm:rounded-[32px] sm:border-2 sm:border-gray-200 dark:sm:border-[#334155] overflow-y-auto shadow-sm transition-colors duration-300">
      <div className="flex flex-col min-h-full p-4 sm:p-8">
        <header className="flex justify-between items-center mb-3 sm:mb-6 shrink-0">
        <h1 className="text-2xl sm:text-3xl font-black text-[#4B4B4B] dark:text-[#F8FAFC] tracking-tight">OFA Polimi Prep</h1>
        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 rounded-full transition-colors"
          >
            {isDark ? <Sun size={24} strokeWidth={2.5} /> : <Moon size={24} strokeWidth={2.5} />}
          </button>
          <div className="flex items-center gap-1.5 text-[#FFC800] font-black border-2 border-gray-200 dark:border-[#334155] bg-white dark:bg-[#0F172A] px-3 py-1.5 rounded-xl shadow-sm transition-colors">
            <Flame size={20} fill="currentColor" />
            <span>{appState.streak}</span>
          </div>
        </div>
      </header>

      {/* Cloud Sync Header */}
      <div className="mb-4 flex flex-col items-end">
        {user ? (
          <div className="flex items-center gap-3">
            <span className="text-xs font-bold text-[#58CC02] flex items-center gap-1"><Cloud size={14} /> Synced come {user.displayName}</span>
            <button onClick={onLogout} className="text-xs font-bold text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 uppercase transition-colors">Logout</button>
          </div>
        ) : (
          <div className="flex flex-col items-end gap-2">
            <button onClick={onLogin} className="flex items-center gap-2 text-xs sm:text-sm font-black text-white uppercase tracking-widest bg-[#1CB0F6] hover:bg-[#1899D6] border-b-4 border-[#1899D6] active:border-b-0 active:translate-y-1 px-4 py-2 rounded-xl transition-all shadow-sm">
              <Cloud size={18} /> Sign in per sincronizzare
            </button>
            {window !== window.top && (
              <p className="text-[10px] text-gray-400 text-right max-w-[200px]">
                Se il login dà problemi, apri l'app in una nuova scheda.
              </p>
            )}
          </div>
        )}
      </div>

      {/* XP & Level Bar */}
      <div className="bg-white dark:bg-[#0F172A] rounded-2xl p-3 sm:p-4 border-2 border-gray-200 dark:border-[#334155] border-b-4 mb-3 flex flex-col gap-2 shadow-sm transition-colors">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-[#FFC800] text-white p-1.5 rounded-lg shadow-sm">
              <Crown size={16} strokeWidth={3} />
            </div>
            <span className="text-sm sm:text-base font-black text-[#4B4B4B] dark:text-[#F8FAFC]">Livello {currentLevel}</span>
          </div>
          <span className="text-xs sm:text-sm font-bold text-[#FFC800]">{totalXP} XP</span>
        </div>
        <div className="w-full bg-gray-200 dark:bg-[#334155] h-3 rounded-full overflow-hidden flex relative">
          {/* Goal Gradient: Make the bar pulse when near the next level */}
          <div className={cn("bg-[#FFC800] h-full rounded-full transition-all duration-500 ease-out", progressPercent > 80 && "animate-pulse")} style={{ width: `${progressPercent}%` }} />
        </div>
        <div className="text-right text-[10px] font-bold text-gray-400">
          {progressPercent > 80 ? "Ci sei quasi!" : `${xpForNextLevel - totalXP} XP al Livello ${currentLevel + 1}`}
        </div>
      </div>

      {/* Daily Goal - Endowed Progress & Goal Gradient */}
      <div className="bg-white dark:bg-[#0F172A] rounded-2xl p-3 sm:p-4 border-2 border-gray-200 dark:border-[#334155] border-b-4 mb-3 flex flex-col gap-3 shadow-sm transition-colors relative overflow-hidden group">
        <div className="flex justify-between items-center z-10">
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-black text-[#4B4B4B] dark:text-[#F8FAFC]">Obiettivo Giornaliero</span>
            {currentDailyProgress < dailyGoal ? (
              <span className="text-[10px] sm:text-xs font-bold text-[#1CB0F6]">
                {currentDailyProgress === endowedDaily ? "Hai 1 punto bonus di benvenuto!" : `Quasi fatto! -${dailyGoal - currentDailyProgress} per completare`}
              </span>
            ) : (
              <span className="text-[10px] sm:text-xs font-bold text-[#58CC02]">
                Completato! Ottimo lavoro!
              </span>
            )}
          </div>
          <span className="text-lg sm:text-xl font-black text-[#1CB0F6]">{currentDailyProgress}/{dailyGoal}</span>
        </div>
        
        {/* Goal Gradient Track */}
        <div className="flex gap-1.5 sm:gap-2 z-10">
          {Array.from({ length: dailyGoal }).map((_, i) => {
            const isCompleted = i < currentDailyProgress;
            const isEndowed = i < endowedDaily;
            return (
              <div 
                key={i} 
                className={cn(
                  "flex-1 h-8 sm:h-10 rounded-lg flex items-center justify-center border-2 transition-all duration-300",
                  isCompleted 
                    ? isEndowed 
                      ? "bg-[#FFC800] border-[#E5B400] text-white" // Endowed bonus
                      : "bg-[#1CB0F6] border-[#1899D6] text-white scale-105" // Earned progress (Goal Gradient visual pop)
                    : "bg-gray-100 dark:bg-[#1E293B] border-gray-200 dark:border-[#334155] text-transparent"
                )}
              >
                {isEndowed ? <Gift size={14} strokeWidth={3} /> : <CheckCircle size={14} strokeWidth={3} />}
              </div>
            );
          })}
        </div>
        {/* Subtle background pulse when close to goal */}
        {currentDailyProgress === dailyGoal - 1 && (
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1CB0F6]/10 animate-pulse pointer-events-none" />
        )}
      </div>

      <div className="grid grid-cols-2 gap-2 sm:gap-4 mb-3">
        <div className="bg-white dark:bg-[#0F172A] rounded-2xl p-3 sm:p-4 border-2 border-gray-200 dark:border-[#334155] border-b-4 flex flex-col items-center text-center shadow-sm transition-colors">
          <BookOpen className="text-[#1CB0F6] dark:text-[#38BDF8] mb-1 w-5 sm:w-6 h-5 sm:h-6" />
          <span className="text-2xl sm:text-3xl font-black text-[#4B4B4B] dark:text-[#F8FAFC] leading-none">{masteredQuestions}</span>
          <span className="text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Mastered</span>
        </div>
        <div className="bg-white dark:bg-[#0F172A] rounded-2xl p-3 sm:p-4 border-2 border-gray-200 dark:border-[#334155] border-b-4 flex flex-col items-center text-center shadow-sm transition-colors">
          <Award className="text-[#FFC800] mb-1 w-5 sm:w-6 h-5 sm:h-6" />
          <span className="text-2xl sm:text-3xl font-black text-[#4B4B4B] dark:text-[#F8FAFC] leading-none">{bestScore > 0 ? `${bestScore}/30` : '-'}</span>
          <span className="text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">Best Score</span>
        </div>
      </div>

      <ActivityChart dailyActivity={appState.dailyActivity} />

      <div className="flex flex-col gap-2 sm:gap-3 mt-auto">
        <button
          onClick={onStartLearn}
          className="bg-[#1CB0F6] border-b-4 border-[#1899D6] text-white font-black text-sm sm:text-base py-3 sm:py-4 px-4 sm:px-6 rounded-xl shadow-sm flex items-center justify-between active:border-b-0 active:translate-y-1 transition-all"
        >
          <span className="flex items-center gap-2">
            <BookOpen className="w-4 sm:w-5 h-4 sm:h-5" />
            LEARN & PRACTICE
          </span>
          <span className="text-[#DDF4FF] text-[9px] sm:text-[11px] font-bold uppercase tracking-wider block sm:inline">Spaced Repetition</span>
        </button>

        <button
          onClick={onStartExam}
          className="bg-[#CE82FF] border-b-4 border-[#A568CC] text-white font-black text-sm sm:text-base py-3 sm:py-4 px-4 sm:px-6 rounded-xl shadow-sm flex items-center justify-between active:border-b-0 active:translate-y-1 transition-all"
        >
          <span className="flex items-center gap-2">
            <GraduationCap className="w-4 sm:w-5 h-4 sm:h-5" />
            TAKE MOCK EXAM
          </span>
          <span className="text-[#F3E5FF] text-[9px] sm:text-[11px] font-bold uppercase tracking-wider block sm:inline">15 mins • 30 Qs</span>
        </button>
      </div>

      {/* Bottom Nav / Extra Actions */}
      <div className="mt-3 sm:mt-5 grid grid-cols-3 gap-2 border-t-2 border-gray-200 dark:border-[#334155] pt-3 sm:pt-4 transition-colors">
        <button 
          onClick={onOpenStats}
          className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500 font-black uppercase text-xs hover:text-[#58CC02] dark:hover:text-[#58CC02] transition-colors"
        >
          <BarChart2 size={24} />
          Stats
        </button>
        <button 
          onClick={onImport}
          className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500 font-black uppercase text-xs hover:text-[#1CB0F6] dark:hover:text-[#38BDF8] transition-colors"
        >
          <Upload size={24} />
          Import
        </button>
        <button 
          onClick={onExport}
          className="flex flex-col items-center gap-2 text-gray-400 dark:text-gray-500 font-black uppercase text-xs hover:text-[#CE82FF] dark:hover:text-[#D946EF] transition-colors"
        >
          <Download size={24} />
          Export
        </button>
      </div>
    </div>
    </div>
  );
}
