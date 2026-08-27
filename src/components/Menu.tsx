import { AppState } from '../types';
import { BookOpen, GraduationCap, Download, Flame, Award, BarChart2, Upload, Cloud, Moon, Sun, Crown, Gift, CheckCircle, Bug } from 'lucide-react';
import { User } from 'firebase/auth';
import { useTheme } from '../hooks/useTheme';
import { cn } from '../lib/utils';
import { questions } from '../data/questions';

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
  onOpenDebug: () => void;
}

export default function Menu({ appState, user, onStartSmart, onStartLearn, onStartExam, onOpenStats, onExport, onImport, onLogin, onLogout, onOpenDebug }: MenuProps) {
  const { isDark, toggleTheme } = useTheme();

  // Global Progress Stats
  const totalQuestions = questions.length;
  const masteredQuestions = Object.values(appState.stats).filter(stat => stat.box > 0).length;
  const masteryPercent = totalQuestions > 0 ? Math.min(100, Math.round((masteredQuestions / totalQuestions) * 100)) : 0;

  let totalCorrect = 0;
  let totalIncorrect = 0;
  Object.values(appState.stats).forEach(stat => {
    totalCorrect += stat.correct;
    totalIncorrect += stat.incorrect;
  });
  const totalAttempts = totalCorrect + totalIncorrect;
  const accuracyPercent = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

  return (
    <div className="h-full w-full bg-white dark:bg-[#1E293B] sm:rounded-[32px] sm:border-2 sm:border-gray-200 dark:sm:border-[#334155] overflow-hidden shadow-sm transition-colors duration-300">
      <div className="flex flex-col h-full p-4 sm:p-6 gap-3 sm:gap-4 overflow-y-auto scrollbar-hide">
        {/* Header */}
        <header className="flex justify-between items-center shrink-0">
          <h1 className="text-xl sm:text-2xl font-black text-[#4B4B4B] dark:text-[#F8FAFC] tracking-tight">OFA Polimi Prep</h1>
          <div className="flex items-center gap-2 sm:gap-3">
            <button 
              onClick={onOpenDebug}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              title="Debug Firebase"
            >
              <Bug size={24} strokeWidth={2.5} />
            </button>
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
          {/* Top Stats Row: Mastery & Accuracy */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 shrink-0">
            {/* Domande Imparate */}
            <div className="bg-white dark:bg-[#0F172A] rounded-[24px] p-4 sm:p-5 border-2 border-gray-200 dark:border-[#334155] border-b-4 flex flex-col justify-center gap-3 shadow-sm transition-colors">
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Maestria</span>
                <span className="text-lg sm:text-xl font-black text-[#58CC02]">{masteryPercent}%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-[#334155] h-3 sm:h-4 rounded-full overflow-hidden flex relative">
                <div 
                  className="bg-[#58CC02] h-full rounded-full transition-all duration-700 ease-out" 
                  style={{ width: `${masteryPercent}%` }} 
                />
              </div>
            </div>

            {/* Accuratezza */}
            <div className="bg-white dark:bg-[#0F172A] rounded-[24px] p-4 sm:p-5 border-2 border-gray-200 dark:border-[#334155] border-b-4 flex flex-col justify-center gap-3 shadow-sm transition-colors">
              <div className="flex justify-between items-center">
                <span className="text-sm sm:text-base font-black text-gray-400 dark:text-gray-500 uppercase tracking-widest">Precisione</span>
                <span className="text-lg sm:text-xl font-black text-[#CE82FF] dark:text-[#D946EF]">{accuracyPercent}%</span>
              </div>
              <div className="w-full bg-gray-100 dark:bg-[#334155] h-3 sm:h-4 rounded-full overflow-hidden flex relative">
                <div 
                  className="bg-[#CE82FF] dark:bg-[#D946EF] h-full rounded-full transition-all duration-700 ease-out" 
                  style={{ width: `${accuracyPercent}%` }} 
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4 shrink-0 mt-auto pt-2">
            <button
              onClick={onStartSmart}
              className="w-full bg-[#1CB0F6] hover:bg-[#1899D6] border-b-4 border-[#1899D6] active:border-b-0 active:translate-y-1 text-white font-black p-6 sm:p-8 rounded-[20px] sm:rounded-2xl shadow-sm flex flex-col items-center justify-center transition-all duration-200"
            >
              <span className="text-2xl sm:text-3xl leading-tight uppercase tracking-widest mb-2">Inizia Sessione</span>
              <span className="text-[#DDF4FF] text-xs sm:text-sm uppercase font-bold tracking-widest bg-black/10 px-4 py-1.5 rounded-full">Algoritmo Ottimizzato</span>
            </button>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <button
                onClick={onStartLearn}
                className="bg-white dark:bg-[#0F172A] border-2 border-gray-200 dark:border-[#334155] border-b-4 text-gray-400 dark:text-gray-500 font-black p-3 sm:p-4 rounded-[20px] sm:rounded-2xl shadow-sm flex flex-col items-center justify-center active:border-b-0 active:translate-y-1 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-[#1E293B] hover:text-gray-500 dark:hover:text-gray-400"
              >
                <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 mb-2 text-[#CE82FF] dark:text-[#D946EF]" />
                <span className="text-[10px] sm:text-xs uppercase tracking-widest text-center">Modalità Custom</span>
              </button>

              <button
                onClick={onStartExam}
                className="bg-white dark:bg-[#0F172A] border-2 border-gray-200 dark:border-[#334155] border-b-4 text-gray-400 dark:text-gray-500 font-black p-3 sm:p-4 rounded-[20px] sm:rounded-2xl shadow-sm flex flex-col items-center justify-center active:border-b-0 active:translate-y-1 transition-all duration-200 hover:bg-gray-50 dark:hover:bg-[#1E293B] hover:text-gray-500 dark:hover:text-gray-400"
              >
                <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 mb-2 text-[#FFC800]" />
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
