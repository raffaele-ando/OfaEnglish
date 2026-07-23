import React, { useState } from 'react';
import { Target, Zap, Folder, BrainCircuit, ArrowLeft, BookOpen } from 'lucide-react';
import { questions } from '../data/questions';

interface PracticeMenuProps {
  onSelectMode: (mode: 'standard' | 'weakness' | 'blitz' | 'category' | 'recall', category?: string) => void;
  onBack: () => void;
}

export default function PracticeMenu({ onSelectMode, onBack }: PracticeMenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  
  const categories = Array.from(new Set(questions.map(q => q.category)));

  return (
    <div className="flex flex-col h-full p-6 sm:p-10 bg-white dark:bg-[#1E293B] sm:rounded-[40px] sm:border-2 sm:border-gray-200 dark:sm:border-[#334155] overflow-y-auto shadow-sm">
      <header className="flex items-center gap-4 mb-8">
        <button 
          onClick={onBack}
          className="p-2 -ml-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors rounded-full"
        >
          <ArrowLeft size={28} strokeWidth={2.5} />
        </button>
        <h1 className="text-3xl font-black text-[#4B4B4B] dark:text-[#F8FAFC] tracking-tight">Modalità</h1>
      </header>

      <div className="flex flex-col gap-4">
        <button
          onClick={() => onSelectMode('standard')}
          className="bg-white dark:bg-[#0F172A] border-2 border-gray-200 dark:border-[#334155] border-b-4 hover:bg-gray-50 dark:hover:bg-[#1E293B] text-left p-6 rounded-2xl transition-all active:border-b-0 active:translate-y-1 flex items-start gap-4"
        >
          <div className="bg-[#1CB0F6]/10 text-[#1CB0F6] p-3 rounded-xl">
            <BookOpen size={24} />
          </div>
          <div>
            <h3 className="font-black text-[#4B4B4B] dark:text-[#F8FAFC] text-xl mb-1">Standard (SM-2)</h3>
            <p className="text-gray-500 dark:text-gray-400 font-bold text-sm">Spaced repetition classica per ottimizzare la memoria a lungo termine.</p>
          </div>
        </button>

        <button
          onClick={() => onSelectMode('weakness')}
          className="bg-white dark:bg-[#0F172A] border-2 border-gray-200 dark:border-[#334155] border-b-4 hover:bg-gray-50 dark:hover:bg-[#1E293B] text-left p-6 rounded-2xl transition-all active:border-b-0 active:translate-y-1 flex items-start gap-4"
        >
          <div className="bg-[#FF4B4B]/10 text-[#FF4B4B] p-3 rounded-xl">
            <Target size={24} />
          </div>
          <div>
            <h3 className="font-black text-[#4B4B4B] dark:text-[#F8FAFC] text-xl mb-1">Targeted Weakness</h3>
            <p className="text-gray-500 dark:text-gray-400 font-bold text-sm">Focalizzati esclusivamente sugli errori recenti e i concetti critici.</p>
          </div>
        </button>

        <button
          onClick={() => onSelectMode('blitz')}
          className="bg-white dark:bg-[#0F172A] border-2 border-gray-200 dark:border-[#334155] border-b-4 hover:bg-gray-50 dark:hover:bg-[#1E293B] text-left p-6 rounded-2xl transition-all active:border-b-0 active:translate-y-1 flex items-start gap-4"
        >
          <div className="bg-[#FFC800]/10 text-[#FFC800] p-3 rounded-xl">
            <Zap size={24} />
          </div>
          <div>
            <h3 className="font-black text-[#4B4B4B] dark:text-[#F8FAFC] text-xl mb-1">Speed Blitz</h3>
            <p className="text-gray-500 dark:text-gray-400 font-bold text-sm">Timer aggressivo (10s) per costruire automaticità e fluidità.</p>
          </div>
        </button>

        <button
          onClick={() => onSelectMode('recall')}
          className="bg-white dark:bg-[#0F172A] border-2 border-gray-200 dark:border-[#334155] border-b-4 hover:bg-gray-50 dark:hover:bg-[#1E293B] text-left p-6 rounded-2xl transition-all active:border-b-0 active:translate-y-1 flex items-start gap-4"
        >
          <div className="bg-[#CE82FF]/10 text-[#CE82FF] p-3 rounded-xl">
            <BrainCircuit size={24} />
          </div>
          <div>
            <h3 className="font-black text-[#4B4B4B] dark:text-[#F8FAFC] text-xl mb-1">Active Recall</h3>
            <p className="text-gray-500 dark:text-gray-400 font-bold text-sm">Nasconde le opzioni: forza il cervello a recuperare l'informazione da zero.</p>
          </div>
        </button>

        <div className="bg-white dark:bg-[#0F172A] border-2 border-gray-200 dark:border-[#334155] border-b-4 p-6 rounded-2xl flex flex-col gap-4">
          <div className="flex items-start gap-4">
            <div className="bg-[#58CC02]/10 text-[#58CC02] p-3 rounded-xl">
              <Folder size={24} />
            </div>
            <div>
              <h3 className="font-black text-[#4B4B4B] dark:text-[#F8FAFC] text-xl mb-1">Category Master</h3>
              <p className="text-gray-500 dark:text-gray-400 font-bold text-sm">Blocked practice: allenati solo su una specifica categoria.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <select 
              className="flex-1 bg-gray-50 dark:bg-[#1E293B] border-2 border-gray-200 dark:border-[#334155] rounded-xl px-4 py-3 font-bold text-[#4B4B4B] dark:text-[#F8FAFC] outline-none focus:border-[#1CB0F6] transition-colors"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="" disabled>Scegli Categoria</option>
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <button
              disabled={!selectedCategory}
              onClick={() => onSelectMode('category', selectedCategory)}
              className="bg-[#58CC02] border-b-4 border-[#46A302] disabled:bg-gray-200 disabled:border-gray-300 disabled:dark:bg-[#334155] disabled:dark:border-[#475569] disabled:text-gray-400 text-white font-black px-6 py-3 rounded-xl transition-all active:border-b-0 active:translate-y-1"
            >
              INIZIA
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
