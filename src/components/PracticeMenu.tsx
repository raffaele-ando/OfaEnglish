import React, { useState } from 'react';
import { Target, Zap, Folder, BrainCircuit, ArrowLeft, BookOpen } from 'lucide-react';
import { questions } from '../data/questions';
import { playTapSound } from '../lib/audio';

interface PracticeMenuProps {
  onSelectMode: (mode: 'standard' | 'weakness' | 'blitz' | 'category' | 'recall', category?: string) => void;
  onBack: () => void;
}

export default function PracticeMenu({ onSelectMode, onBack }: PracticeMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  
  const categories = Array.from(new Set(questions.map(q => q.category))).filter(Boolean);
  const levels = Array.from(new Set(questions.map(q => q.level))).filter(Boolean);
  const topics = Array.from(new Set(questions.map(q => q.grammarTopic))).filter(Boolean);

  return (
    <div className="h-full w-full bg-white dark:bg-[#1E293B] sm:rounded-[32px] sm:border-2 sm:border-gray-200 dark:sm:border-[#334155] overflow-hidden shadow-sm transition-colors duration-300 flex flex-col">
      <div className="flex flex-col h-full p-4 sm:p-6 gap-3 sm:gap-4 flex-1 min-h-0 overflow-y-auto scrollbar-hide">
      <header className="flex items-center gap-3 shrink-0">
        <button 
          onClick={() => { playTapSound(); onBack(); }}
          className="p-2 -ml-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-full"
        >
          <ArrowLeft size={24} strokeWidth={3} />
        </button>
        <h1 className="text-xl sm:text-2xl font-black text-[#4B4B4B] dark:text-[#F8FAFC] tracking-tight">Modalità</h1>
      </header>

      <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 min-h-0 items-stretch">
        <button
          onClick={() => { playTapSound(); onSelectMode('standard'); }}
          className="bg-white dark:bg-[#0F172A] border-2 border-gray-200 dark:border-[#334155] border-b-4 hover:bg-gray-50 dark:hover:bg-[#1E293B] text-left p-4 sm:p-5 rounded-[24px] transition-all duration-200 active:border-b-0 active:translate-y-1 flex items-center gap-4 h-full"
        >
          <div className="bg-[#1CB0F6]/10 text-[#1CB0F6] p-3 sm:p-4 rounded-[16px] shrink-0">
            <BookOpen className="w-6 sm:w-7 h-6 sm:h-7" />
          </div>
          <div>
            <h3 className="font-black text-[#4B4B4B] dark:text-[#F8FAFC] text-base sm:text-lg mb-0.5">Standard</h3>
            <p className="text-gray-500 dark:text-gray-400 font-bold text-xs sm:text-sm">Spaced repetition classica.</p>
          </div>
        </button>

        <button
          onClick={() => { playTapSound(); onSelectMode('weakness'); }}
          className="bg-white dark:bg-[#0F172A] border-2 border-gray-200 dark:border-[#334155] border-b-4 hover:bg-gray-50 dark:hover:bg-[#1E293B] text-left p-4 sm:p-5 rounded-[24px] transition-all duration-200 active:border-b-0 active:translate-y-1 flex items-center gap-4 h-full"
        >
          <div className="bg-[#FF4B4B]/10 text-[#FF4B4B] p-3 sm:p-4 rounded-[16px] shrink-0">
            <Target className="w-6 sm:w-7 h-6 sm:h-7" />
          </div>
          <div>
            <h3 className="font-black text-[#4B4B4B] dark:text-[#F8FAFC] text-base sm:text-lg mb-0.5">Weakness</h3>
            <p className="text-gray-500 dark:text-gray-400 font-bold text-xs sm:text-sm">Focalizzati sugli errori.</p>
          </div>
        </button>

        <button
          onClick={() => { playTapSound(); onSelectMode('blitz'); }}
          className="bg-white dark:bg-[#0F172A] border-2 border-gray-200 dark:border-[#334155] border-b-4 hover:bg-gray-50 dark:hover:bg-[#1E293B] text-left p-4 sm:p-5 rounded-[24px] transition-all duration-200 active:border-b-0 active:translate-y-1 flex items-center gap-4 h-full"
        >
          <div className="bg-[#FFC800]/10 text-[#FFC800] p-3 sm:p-4 rounded-[16px] shrink-0">
            <Zap className="w-6 sm:w-7 h-6 sm:h-7" />
          </div>
          <div>
            <h3 className="font-black text-[#4B4B4B] dark:text-[#F8FAFC] text-base sm:text-lg mb-0.5">Blitz</h3>
            <p className="text-gray-500 dark:text-gray-400 font-bold text-xs sm:text-sm">Timer aggressivo (10s).</p>
          </div>
        </button>

        <button
          onClick={() => { playTapSound(); onSelectMode('recall'); }}
          className="bg-white dark:bg-[#0F172A] border-2 border-gray-200 dark:border-[#334155] border-b-4 hover:bg-gray-50 dark:hover:bg-[#1E293B] text-left p-4 sm:p-5 rounded-[24px] transition-all duration-200 active:border-b-0 active:translate-y-1 flex items-center gap-4 h-full"
        >
          <div className="bg-[#CE82FF]/10 text-[#CE82FF] p-3 sm:p-4 rounded-[16px] shrink-0">
            <BrainCircuit className="w-6 sm:w-7 h-6 sm:h-7" />
          </div>
          <div>
            <h3 className="font-black text-[#4B4B4B] dark:text-[#F8FAFC] text-base sm:text-lg mb-0.5">Active Recall</h3>
            <p className="text-gray-500 dark:text-gray-400 font-bold text-xs sm:text-sm">Nasconde le opzioni.</p>
          </div>
        </button>

        <div className="bg-white dark:bg-[#0F172A] border-2 border-gray-200 dark:border-[#334155] border-b-4 p-4 sm:p-6 rounded-[24px] flex flex-col justify-between gap-4 sm:col-span-2 h-full">
          <div className="flex items-center gap-4">
            <div className="bg-[#58CC02]/10 text-[#58CC02] p-3 sm:p-4 rounded-[16px] shrink-0">
              <Folder className="w-6 sm:w-7 h-6 sm:h-7" />
            </div>
            <div>
              <h3 className="font-black text-[#4B4B4B] dark:text-[#F8FAFC] text-base sm:text-lg mb-0.5">Filtro Mirato</h3>
              <p className="text-gray-500 dark:text-gray-400 font-bold text-xs sm:text-sm">Allenati su una categoria o argomento specifico.</p>
            </div>
          </div>
          <div className="flex flex-row gap-3 mt-auto">
            <select 
              className="flex-1 min-w-0 bg-gray-50 dark:bg-[#1E293B] border-2 border-gray-200 dark:border-[#334155] rounded-xl px-4 py-3 text-sm font-bold text-[#4B4B4B] dark:text-[#F8FAFC] outline-none focus:border-[#1CB0F6] transition-colors appearance-none"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="" disabled>Seleziona un filtro...</option>
              <optgroup label="Categorie">
                {categories.map(c => (
                  <option key={`category:${c}`} value={`category:${c}`}>{c}</option>
                ))}
              </optgroup>
              <optgroup label="Livelli">
                {levels.map(l => (
                  <option key={`level:${l}`} value={`level:${l}`}>Livello {l}</option>
                ))}
              </optgroup>
              <optgroup label="Argomenti Grammaticali">
                {topics.map(t => (
                  <option key={`topic:${t}`} value={`topic:${t}`}>{t}</option>
                ))}
              </optgroup>
            </select>
            <button
              disabled={!selectedCategory}
              onClick={() => { playTapSound(); onSelectMode('category', selectedCategory); }}
              className="bg-[#58CC02] hover:bg-[#46A302] border-b-4 border-[#46A302] disabled:bg-gray-200 disabled:border-gray-300 disabled:dark:bg-[#334155] disabled:dark:border-[#475569] disabled:text-gray-400 text-white font-black px-6 sm:px-8 py-3 text-sm sm:text-base rounded-[16px] transition-all duration-200 active:border-b-0 active:translate-y-1"
            >
              INIZIA
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
