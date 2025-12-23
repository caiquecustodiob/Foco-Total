
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { HomeIcon, ApostilasIcon, SimuladosIcon, ProgressoIcon, SunIcon, MoonIcon, SettingsIcon } from './components/Icons';
import HomeScreen from './components/HomeScreen';
import BibliotecaScreen from './components/BibliotecaScreen';
import LeituraScreen from './components/LeituraScreen';
import SimuladosScreen from './components/SimuladosScreen';
import GamesScreen from './components/GamesScreen';
import ProgressoScreen from './components/ProgressoScreen';
import SettingsScreen from './components/SettingsScreen';
import { CONQUISTAS_BASE } from './data';
import type { Screen, UserProgress, ApostilaBloco, Conquista } from './types';

const INITIAL_PROGRESS: UserProgress = {
  xp: 0,
  streak: 0,
  lastActive: new Date().toISOString(),
  concludedIds: [],
  unlockedConquistas: [],
  historico: [],
  metaDiaria: 30,
  tempoFocadoHoje: 0,
  settings: { fontSize: 16, theme: 'light', brightness: 100, soundEnabled: true }
};

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen | 'settings'>('home');
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem('foco_total_lego_v5');
    return saved ? JSON.parse(saved) : INITIAL_PROGRESS;
  });
  const [activeApostila, setActiveApostila] = useState<ApostilaBloco | null>(null);
  const [newMedal, setNewMedal] = useState<Conquista | null>(null);

  const toggleTheme = () => {
    setProgress(p => ({
      ...p,
      settings: { ...p.settings, theme: p.settings.theme === 'dark' ? 'light' : 'dark' }
    }));
  };

  const playSound = useCallback((type: 'success' | 'error' | 'achievement') => {
    if (!progress.settings.soundEnabled) return;
    const ctx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'success') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } else if (type === 'error') {
      osc.type = 'square';
      osc.frequency.setValueAtTime(120, ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(60, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.1, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } else if (type === 'achievement') {
      [523, 659, 783].forEach((freq, i) => {
        const o = ctx.createOscillator();
        const g = ctx.createGain();
        o.connect(g); g.connect(ctx.destination);
        o.frequency.value = freq;
        g.gain.setValueAtTime(0.05, ctx.currentTime + i * 0.12);
        g.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + i * 0.12 + 0.4);
        o.start(ctx.currentTime + i * 0.12);
        o.stop(ctx.currentTime + i * 0.12 + 0.4);
      });
    }
  }, [progress.settings.soundEnabled]);

  useEffect(() => {
    CONQUISTAS_BASE.forEach(c => {
      if (!progress.unlockedConquistas.includes(c.id) && c.requisito(progress)) {
        setProgress(prev => ({
          ...prev,
          unlockedConquistas: [...prev.unlockedConquistas, c.id]
        }));
        setNewMedal(c);
        playSound('achievement');
      }
    });
  }, [progress.xp, progress.concludedIds, progress.streak, playSound]);

  useEffect(() => {
    localStorage.setItem('foco_total_lego_v5', JSON.stringify(progress));
    document.documentElement.classList.toggle('dark', progress.settings.theme === 'dark');
  }, [progress]);

  const level = useMemo(() => {
    if (progress.xp < 1000) return 'Acadêmico Iniciante';
    if (progress.xp < 5000) return 'Membro do Conselho';
    return 'Lenda Imperial';
  }, [progress.xp]);

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-500 text-slate-800 dark:text-slate-100`}>
      {/* Medal Unlock Overlay */}
      {newMedal && (
        <div className="fixed inset-0 z-[1000] bg-black/90 flex items-center justify-center p-8 animate-fade-in backdrop-blur-md">
           <div className="text-center animate-slide-up">
              <div className={`w-40 h-40 bg-gradient-to-br ${newMedal.cor} rounded-full flex items-center justify-center text-7xl shadow-[0_0_50px_rgba(212,175,55,0.4)] mx-auto mb-6 animate-bounce-soft`}>
                {newMedal.icone}
              </div>
              <h2 className="text-white text-3xl font-black mb-2">CONQUISTA IMPERIAL!</h2>
              <p className="text-gold font-bold text-lg mb-8 uppercase tracking-widest">{newMedal.titulo}</p>
              <button 
                onClick={() => setNewMedal(null)}
                className="bg-white text-primary font-black px-10 py-4 rounded-2xl active:scale-95 transition-all shadow-xl"
              >
                RECEBER HONRARIA
              </button>
           </div>
        </div>
      )}

      {screen !== 'leitura' && (
        <header className="sticky top-0 z-[100] bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-slate-200 dark:border-white/5 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl animate-pulse-soft">🏆</span>
            <div>
              <h1 className="text-sm font-black text-primary dark:text-primary-dark leading-none">FOCO TOTAL</h1>
              <span className="text-[9px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">{level}</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
             <button onClick={toggleTheme} className="w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-500">
               {progress.settings.theme === 'dark' ? <SunIcon /> : <MoonIcon />}
             </button>
             <button onClick={() => setScreen('settings')} className={`w-8 h-8 rounded-full flex items-center justify-center bg-slate-100 dark:bg-slate-800 transition-colors ${screen === 'settings' ? 'text-primary' : 'text-slate-500'}`}>
                <SettingsIcon />
             </button>
             <div className="flex items-center gap-1.5 bg-gold/10 px-3 py-1 rounded-full border border-gold/20">
                <span className="text-xs">🔥</span>
                <span className="text-xs font-black text-gold">{progress.streak}</span>
             </div>
          </div>
        </header>
      )}

      <main className={`flex-grow ${screen !== 'leitura' ? 'pb-24' : ''}`}>
        {screen === 'home' && <HomeScreen progress={progress} setScreen={(s: any) => setScreen(s)} onRead={(a) => { setActiveApostila(a); setScreen('leitura'); }} />}
        {screen === 'biblioteca' && <BibliotecaScreen onRead={(a) => { setActiveApostila(a); setScreen('leitura'); }} />}
        {screen === 'leitura' && activeApostila && <LeituraScreen apostila={activeApostila} progress={progress} setProgress={setProgress} onBack={() => setScreen('home')} onFinish={() => { setProgress(p => ({ ...p, concludedIds: [...new Set([...p.concludedIds, activeApostila.id])] })); setScreen('home'); playSound('success'); }} />}
        {screen === 'simulados' && <SimuladosScreen progress={progress} setProgress={setProgress} addXP={(xp: number) => { setProgress(p => ({ ...p, xp: p.xp + xp })); playSound('success'); }} playSound={playSound} />}
        {screen === 'jogos' && <GamesScreen progress={progress} setProgress={setProgress} playSound={playSound} />}
        {screen === 'progresso' && <ProgressoScreen progress={progress} level={level} />}
        {screen === 'settings' && <SettingsScreen progress={progress} setProgress={setProgress} />}
      </main>

      {screen !== 'leitura' && (
        <nav className="fixed bottom-0 left-0 right-0 z-[100] bg-white/80 dark:bg-slate-950/80 backdrop-blur-2xl border-t border-slate-200 dark:border-white/5 px-6 py-3 safe-area-bottom">
          <div className="max-w-md mx-auto flex justify-between items-center">
            <NavBtn active={screen === 'home'} icon={<HomeIcon />} label="Base" onClick={() => setScreen('home')} />
            <NavBtn active={screen === 'biblioteca'} icon={<ApostilasIcon />} label="Aulas" onClick={() => setScreen('biblioteca')} />
            <NavBtn active={screen === 'jogos'} icon={<span className="text-xl">🎮</span>} label="Play" onClick={() => setScreen('jogos')} />
            <NavBtn active={screen === 'simulados'} icon={<SimuladosIcon />} label="Testes" onClick={() => setScreen('simulados')} />
            <NavBtn active={screen === 'progresso'} icon={<ProgressoIcon />} label="Honra" onClick={() => setScreen('progresso')} />
          </div>
        </nav>
      )}
    </div>
  );
};

const NavBtn = ({ active, icon, label, onClick }: any) => (
  <button onClick={onClick} className={`flex flex-col items-center gap-1 transition-all ${active ? 'text-primary dark:text-primary-dark scale-110' : 'text-slate-400 dark:text-slate-600 opacity-60 hover:opacity-100'}`}>
    <div className="w-6 h-6 flex items-center justify-center">{icon}</div>
    <span className="text-[8px] font-black uppercase tracking-tighter">{label}</span>
  </button>
);

export default App;
