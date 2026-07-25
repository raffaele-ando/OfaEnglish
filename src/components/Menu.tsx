import { AppState } from '../types';
import { BookOpen, GraduationCap, Download, Flame, Award, BarChart2, Upload, Cloud, Moon, Sun, Crown, Gift, CheckCircle } from 'lucide-react';
import { User } from 'firebase/auth';
import { useTheme } from '../hooks/useTheme';
import { cn } from '../lib/utils';

interface MenuProps {
  appState: AppState;
  user: User | null;
  onStartSmart: () => void;
  onStartLearn: () => void;
  onStartExam: () => void;
  onOpenStats: () => void;
  onExport: () => void;
  onImport: () => void;
  onLogin: () => void;
  onLogout: () => void;
}

export default function Menu({ appState, user, onStartSmart, onStartLearn, onStartExam, onOpenStats, onExport, onImport, onLogin, onLogout }: MenuProps) {
  const { isDark, toggleTheme } = useTheme();

  // Endowed Progress Effect: Give users a 50 XP head start so they feel invested immediately.
  const totalXP = 50 + Object.values(appState.stats).reduce((sum, stat) => sum + stat.correct, 0) * 10;
  const currentLevel = Math.floor(Math.sqrt(totalXP / 50)) + 1;
  const xpForCurrentLevel = Math.pow(currentLevel - 1, 2) * 50;
  const xpForNextLevel = Math.pow(currentLevel, 2) * 50;
  const progressPercent = Math.min(100, Math.max(0, ((totalXP - xpForCurrentLevel) / (xpForNextLevel - xpForCurrentLevel)) * 100));

  // Endless Daily Quest
  const todayStr = new Date().toISOString().split('T')[0];
  const todayActivity = appState.dailyActivity?.[todayStr] || 0;
  const endowedDaily = 1; // 1 free progress step every day just for opening the app (Endowed Progress)
  const currentTotalDaily = todayActivity + endowedDaily;
  
  const milestones = [10, 25, 50, 100, 150, 250, 400, 600, 1000, 99999];
  let milestoneIndex = 0;
  while (milestoneIndex < milestones.length - 1 && currentTotalDaily >= milestones[milestoneIndex]) {
    milestoneIndex++;
  }
  const currentMilestone = milestones[milestoneIndex];
  const previousMilestone = milestoneIndex === 0 ? 0 : milestones[milestoneIndex - 1];
  const currentPhaseProgress = currentTotalDaily - previousMilestone;
  const currentPhaseGoal = currentMilestone - previousMilestone;
  const phaseProgressPercent = Math.min(100, (currentPhaseProgress / currentPhaseGoal) * 100);

  return (
    <div className="h-full w-full bg-white dark:bg-[#1E293B] sm:rounded-[32px] sm:border-2 sm:border-gray-200 dark:sm:border-[#334155] overflow-hidden shadow-sm transition-colors duration-300">
      <div className="flex flex-col h-full p-4 sm:p-6 gap-3 sm:gap-4 overflow-y-auto scrollbar-hide">
        {/* Header */}
        <header className="flex justify-between items-center shrink-0">
          <h1 className="text-xl sm:text-2xl font-black text-[#4B4B4B] dark:text-[#F8FAFC] tracking-tight">OFA Polimi Prep</h1>
          <div className="flex items-center gap-2 sm:gap-3">
            <button 
              onClick={toggleTheme}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
            >
              {isDark ? <Sun size={24} strokeWidth={2.5} /> : <Moon size={24} strokeWidth={2.5} />}
            </button>
            <div className="flex items-center gap-1.5 text-[#FFC800] font-black border-2 border-gray-200 dark:border-[#334155] bg-white dark:bg-[#0F172A] px-2 sm:px-3 py-1 rounded-xl shadow-sm transition-colors text-sm sm:text-base">
              <Flame size={18} fill="currentColor" />
              <span>{appState.streak}</span>
            </div>
            {user ? (
               <button onClick={onLogout} className="text-xs font-bold text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors uppercase tracking-widest hidden sm:block">Logout</button>
            ) : (
              <div className="flex flex-col items-end gap-1">
                <button onClick={onLogin} className="flex items-center gap-1.5 text-xs font-black text-white uppercase tracking-widest bg-[#1CB0F6] hover:bg-[#1899D6] border-b-2 border-[#1899D6] active:border-b-0 active:translate-y-0.5 px-3 py-1.5 rounded-xl transition-all shadow-sm">
                  <Cloud size={16} /> Sign in
                </button>
              </div>
            )}
          </div>
        </header>

        {!user && window.self !== window.top && (
          <div className="bg-[#FFE5E5] dark:bg-[#7F1D1D]/30 border-2 border-[#FF4B4B] dark:border-[#EF4444] rounded-xl p-2 sm:p-3 text-xs sm:text-sm font-bold text-[#D80000] dark:text-[#FCA5A5] flex items-center justify-center text-center shadow-sm shrink-0">
            ⚠️ Per fare il login con Google, apri l'app in una nuova scheda (clicca l'icona "Open in new tab" in alto a destra).
          </div>
        )}

        {/* Sync Info for mobile logout */}
        {user && (
          <div className="flex justify-between items-center shrink-0 sm:hidden">
            <span className="text-xs font-bold text-[#58CC02] flex items-center gap-1"><Cloud size={14} /> Synced come {user.displayName}</span>
            <button onClick={onLogout} className="text-xs font-bold text-gray-400 uppercase">Logout</button>
          </div>
        )}
        
        {/* Sync Info desktop */}
        {user && (
          <div className="hidden sm:flex justify-end shrink-0 -mt-2">
            <span className="text-xs font-bold text-[#58CC02] flex items-center gap-1"><Cloud size={14} /> Synced come {user.displayName}</span>
          </div>
        )}

        <div className="flex flex-col gap-3 sm:gap-4 flex-1">
          {/* Top Stats Row: XP & Daily Goal */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 shrink-0">
            {/* XP & Level Bar */}
            <div className="bg-white dark:bg-[#0F172A] rounded-2xl p-3 sm:p-4 border-2 border-gray-200 dark:border-[#334155] border-b-4 flex flex-col justify-center gap-2 shadow-sm transition-colors">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <div className="bg-[#FFC800] text-white p-1.5 rounded-lg shadow-sm">
                    <Crown size={16} strokeWidth={3} />
                  </div>
                  <span className="text-sm sm:text-base font-black text-[#4B4B4B] dark:text-[#F8FAFC]">Liv. {currentLevel}</span>
                </div>
                <span className="text-xs font-bold text-[#FFC800]">{totalXP} XP</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-[#334155] h-2 sm:h-3 rounded-full overflow-hidden flex relative">
                <div className={cn("bg-[#FFC800] h-full rounded-full transition-all duration-500 ease-out", progressPercent > 80 && "animate-pulse")} style={{ width: `${progressPercent}%` }} />
              </div>
            </div>

            {/* Daily Goal Endless */}
            <div className="bg-white dark:bg-[#0F172A] rounded-2xl p-3 sm:p-4 border-2 border-gray-200 dark:border-[#334155] border-b-4 flex flex-col justify-center gap-2 shadow-sm transition-colors relative overflow-hidden group">
              <div className="flex justify-between items-center z-10 leading-none">
                <span className="text-sm sm:text-base font-black text-[#4B4B4B] dark:text-[#F8FAFC] flex items-center gap-2">
                  Sfida Quotidiana
                  <span className="bg-[#1CB0F6] text-white text-[10px] sm:text-xs px-2 py-0.5 rounded-lg uppercase tracking-wider">
                    Fase {milestoneIndex + 1}
                  </span>
                </span>
                <span className="text-sm sm:text-base font-black text-[#1CB0F6]">{currentTotalDaily}/{currentMilestone}</span>
              </div>
              
              <div className="w-full bg-gray-200 dark:bg-[#334155] h-2 sm:h-3 rounded-full overflow-hidden flex relative mt-1">
                <div 
                  className={cn("bg-[#1CB0F6] h-full rounded-full transition-all duration-700 ease-out", phaseProgressPercent > 80 && "animate-pulse")} 
                  style={{ width: `${phaseProgressPercent}%` }} 
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 shrink-0 mt-auto pt-2">
            <button
              onClick={onStartSmart}
              className="w-full bg-[#1CB0F6] border-b-4 border-[#1899D6] text-white font-black p-6 sm:p-8 rounded-2xl shadow-sm flex flex-col items-center justify-center active:border-b-0 active:translate-y-1 transition-all"
            >
              <span className="text-2xl sm:text-3xl leading-tight uppercase tracking-widest mb-2">Inizia Sessione</span>
              <span className="text-[#DDF4FF] text-xs sm:text-sm uppercase font-bold tracking-widest bg-black/10 px-4 py-1.5 rounded-full">Algoritmo Ottimizzato</span>
            </button>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <button
                onClick={onStartLearn}
                className="bg-white dark:bg-[#0F172A] border-2 border-gray-200 dark:border-[#334155] border-b-4 text-gray-400 dark:text-gray-500 font-black p-3 sm:p-4 rounded-2xl shadow-sm flex flex-col items-center justify-center active:border-b-0 active:translate-y-1 transition-all hover:bg-gray-50 dark:hover:bg-[#1E293B]"
              >
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-center">Modalità Custom</span>
              </button>

              <button
                onClick={onStartExam}
                className="bg-white dark:bg-[#0F172A] border-2 border-gray-200 dark:border-[#334155] border-b-4 text-gray-400 dark:text-gray-500 font-black p-3 sm:p-4 rounded-2xl shadow-sm flex flex-col items-center justify-center active:border-b-0 active:translate-y-1 transition-all hover:bg-gray-50 dark:hover:bg-[#1E293B]"
              >
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 mb-1 sm:mb-2" />
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-center">Simulazione Esame</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Nav / Extra Actions */}
        <div className="grid grid-cols-3 gap-2 border-t-2 border-gray-200 dark:border-[#334155] pt-3 sm:pt-4 shrink-0 transition-colors">
          <button 
            onClick={onOpenStats}
            className="flex flex-col items-center gap-1 sm:gap-2 text-gray-400 dark:text-gray-500 font-black uppercase text-xs sm:text-sm hover:text-[#58CC02] dark:hover:text-[#58CC02] transition-colors"
          >
            <BarChart2 size={24} strokeWidth={2.5} />
            Stats
          </button>
          <button 
            onClick={onImport}
            className="flex flex-col items-center gap-1 sm:gap-2 text-gray-400 dark:text-gray-500 font-black uppercase text-xs sm:text-sm hover:text-[#1CB0F6] dark:hover:text-[#38BDF8] transition-colors"
          >
            <Upload size={24} strokeWidth={2.5} />
            Import
          </button>
          <button 
            onClick={onExport}
            className="flex flex-col items-center gap-1 sm:gap-2 text-gray-400 dark:text-gray-500 font-black uppercase text-xs sm:text-sm hover:text-[#CE82FF] dark:hover:text-[#D946EF] transition-colors"
          >
            <Download size={24} strokeWidth={2.5} />
            Export
          </button>
        </div>
      </div>
    </div>
  );
}
