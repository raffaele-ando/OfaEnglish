/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { AppState, UserStats, ExamHistory } from './types';
import { loadState, saveState, updateStreak, exportData, importData, syncToCloud, syncFromCloud } from './lib/storage';
import { auth, signInWithGoogle, logout } from './lib/firebase';
import { onAuthStateChanged, User } from 'firebase/auth';
import Menu from './components/Menu';
import PracticeMenu from './components/PracticeMenu';
import LearnMode from './components/LearnMode';
import ExamMode from './components/ExamMode';
import StatsMode from './components/StatsMode';
import { Layout } from './components/Layout';

type View = 'menu' | 'practiceMenu' | 'learn' | 'exam' | 'stats';

export default function App() {
  const [view, setView] = useState<View>('menu');
  const [learnMode, setLearnMode] = useState<'standard' | 'weakness' | 'blitz' | 'category' | 'recall'>('standard');
  const [learnCategory, setLearnCategory] = useState<string | undefined>(undefined);
  const [appState, setAppState] = useState<AppState>(loadState());
  const [user, setUser] = useState<User | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Listen to Auth State
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        // Sync data from cloud upon login
        const syncedState = await syncFromCloud(currentUser.uid, appState);
        setAppState(syncedState);
      }
    });
    return () => unsubscribe();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Update streak on load
    const newState = updateStreak(appState);
    setAppState(newState);
    saveState(newState);
    if (user) {
      syncToCloud(user.uid, newState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleUpdateStats = (newStats: UserStats) => {
    const newState = { ...appState, stats: newStats };
    setAppState(newState);
    saveState(newState);
    if (user) syncToCloud(user.uid, newState);
  };

  const handleExamComplete = (historyEntry: ExamHistory, categoryUpdates: Record<string, { correct: number, total: number }>) => {
    setAppState(prev => {
      const mergedCategoryStats = { ...(prev.examCategoryStats || {}) };
      for (const [cat, stats] of Object.entries(categoryUpdates)) {
        if (!mergedCategoryStats[cat]) {
          mergedCategoryStats[cat] = { correct: 0, total: 0 };
        }
        mergedCategoryStats[cat].correct += stats.correct;
        mergedCategoryStats[cat].total += stats.total;
      }
      const newState = { 
        ...prev, 
        history: [...prev.history, historyEntry],
        examCategoryStats: mergedCategoryStats
      };
      saveState(newState);
      if (user) syncToCloud(user.uid, newState);
      return newState;
    });
  };

  const handleImport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      try {
        const imported = await importData(file);
        setAppState(imported);
        saveState(imported);
        if (user) syncToCloud(user.uid, imported);
        alert("Dati importati con successo!");
      } catch (err) {
        alert("Errore nell'importazione dei dati. Assicurati che il file sia valido.");
      }
    }
  };

  return (
    <Layout>
      {view === 'menu' && (
        <Menu 
          appState={appState} 
          user={user}
          onStartLearn={() => setView('practiceMenu')}
          onStartExam={() => setView('exam')}
          onOpenStats={() => setView('stats')}
          onExport={() => exportData(appState)}
          onImport={() => fileInputRef.current?.click()}
          onLogin={signInWithGoogle}
          onLogout={logout}
        />
      )}
      {view === 'practiceMenu' && (
        <PracticeMenu 
          onSelectMode={(mode, category) => {
            setLearnMode(mode);
            setLearnCategory(category);
            setView('learn');
          }}
          onBack={() => setView('menu')}
        />
      )}
      {view === 'learn' && (
        <LearnMode 
          appState={appState}
          mode={learnMode}
          category={learnCategory}
          onUpdateAppState={(newState) => {
            setAppState(newState);
            saveState(newState);
            if (user) syncToCloud(user.uid, newState);
          }}
          onExit={() => setView('menu')}
        />
      )}
      {view === 'exam' && (
        <ExamMode 
          onComplete={handleExamComplete}
          onExit={() => setView('menu')}
        />
      )}
      {view === 'stats' && (
        <StatsMode 
          appState={appState}
          onExit={() => setView('menu')}
        />
      )}
      <input 
        type="file" 
        accept=".json" 
        style={{ display: 'none' }} 
        ref={fileInputRef}
        onChange={handleImport}
      />
    </Layout>
  );
}
