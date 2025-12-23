
import React, { useState, useEffect, useRef } from 'react';
import type { ApostilaBloco, UserProgress } from '../types';
import { BackIcon, MoonIcon, SunIcon } from './Icons';

interface Props {
  apostila: ApostilaBloco;
  progress: UserProgress;
  setProgress: (p: any) => void;
  onBack: () => void;
  onFinish: () => void;
}

const LeituraScreen: React.FC<Props> = ({ apostila, progress, setProgress, onBack, onFinish }) => {
  const [fontSize, setFontSize] = useState(progress.settings.fontSize);
  const [brightness, setBrightness] = useState(progress.settings.brightness);
  const [scrollPerc, setScrollPerc] = useState(0);
  const [canFinish, setCanFinish] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);

  // Recompensa dinâmica baseada na meta configurada
  const dynamicXP = Math.floor(50 + (progress.metaDiaria * 2));

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(s => s + 1);
      setProgress((p: any) => ({ ...p, tempoFocadoHoje: p.tempoFocadoHoje + 1 }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
    const perc = (scrollTop / (scrollHeight - clientHeight)) * 100;
    setScrollPerc(perc);
    if (perc > 85 && seconds > 15) setCanFinish(true);
  };

  const renderContent = (text: string) => {
    return text.split('\n').map((line, i) => {
      if (line.includes('[DEF]')) return <div key={i} className="my-8 p-6 bg-primary/5 dark:bg-primary-dark/10 border-l-4 border-primary dark:border-primary-dark rounded-r-[2rem]"><b className="text-primary dark:text-primary-dark block mb-2 text-xs font-black uppercase tracking-widest">O CONCEITO</b>{line.replace('[DEF]', '')}</div>;
      if (line.includes('[REG]')) return <div key={i} className="my-8 p-6 bg-gold/5 border-l-4 border-gold rounded-r-[2rem]"><b className="text-gold block mb-2 text-xs font-black uppercase tracking-widest">A NORMA</b>{line.replace('[REG]', '')}</div>;
      if (line.includes('[ALERTA]')) return <div key={i} className="my-8 p-6 bg-rose-500/10 border-l-4 border-rose-500 rounded-r-[2rem]"><b className="text-rose-500 block mb-2 text-xs font-black uppercase tracking-widest">SENTINELA</b>{line.replace('[ALERTA]', '')}</div>;
      return <p key={i} className="mb-6 leading-relaxed opacity-90 font-medium">{line}</p>;
    });
  };

  return (
    <div className={`flex flex-col h-screen transition-colors duration-500 ${progress.settings.theme === 'dark' ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-800'}`} style={{ filter: `brightness(${brightness}%)` }}>
      {/* Progress Line */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-100 dark:bg-slate-800 z-[100]">
        <div className="h-full bg-primary dark:bg-primary-dark shadow-[0_0_15px_#dc2626]" style={{ width: `${scrollPerc}%` }} />
      </div>

      <header className="p-4 flex items-center justify-between border-b border-slate-100 dark:border-white/5 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-50">
        <button onClick={onBack} className="p-3 text-slate-400 hover:text-primary transition-colors"><BackIcon /></button>
        <div className="text-center truncate px-6">
          <h2 className="text-[10px] font-black text-primary dark:text-primary-dark uppercase tracking-[0.2em]">{apostila.titulo}</h2>
        </div>
        <div className="w-10" />
      </header>

      <div 
        className="flex-grow overflow-y-auto px-8 py-12 no-scrollbar bg-pattern"
        onScroll={handleScroll}
        ref={contentRef}
      >
        <div className="max-w-prose mx-auto" style={{ fontSize: `${fontSize}px` }}>
          <h1 className="text-4xl font-black mb-12 leading-tight drop-shadow-sm">{apostila.titulo}</h1>
          <article className="prose dark:prose-invert max-w-none">
            {renderContent(apostila.conteudo)}
          </article>
          
          <div className="mt-24 p-12 bg-slate-50 dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-white/5 text-center shadow-inner">
            <span className="text-5xl block mb-6 animate-bounce-soft">📜</span>
            <h3 className="text-xl font-black mb-2">Lição Absorvida?</h3>
            <p className="text-slate-500 text-xs font-bold mb-10 uppercase tracking-widest">Sua XP será validada ao fim da jornada.</p>
            <button 
              disabled={!canFinish}
              onClick={() => {
                setProgress((p: any) => ({ ...p, xp: p.xp + dynamicXP }));
                onFinish();
              }}
              className={`w-full py-5 rounded-[2rem] font-black transition-all shadow-xl ${canFinish ? 'btn-primary scale-100' : 'bg-slate-200 dark:bg-slate-800 text-slate-400 scale-95 opacity-50 cursor-not-allowed'}`}
            >
              {canFinish ? `VALIDAR CONHECIMENTO (+${dynamicXP} XP)` : `ESTUDANDO... (${Math.max(0, 15 - seconds)}s)`}
            </button>
          </div>
        </div>
      </div>

      {/* Control Panel flutuante */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-md p-5 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] flex items-center justify-between gap-6 z-[100] shadow-2xl">
        <div className="flex items-center gap-3 bg-slate-100 dark:bg-black/20 px-4 py-2 rounded-2xl">
          <button onClick={() => setFontSize(s => Math.max(12, s-2))} className="w-8 h-8 font-black text-slate-500 hover:text-primary">-</button>
          <span className="text-xs font-black text-slate-700 dark:text-white">{fontSize}</span>
          <button onClick={() => setFontSize(s => Math.min(26, s+2))} className="w-8 h-8 font-black text-slate-500 hover:text-primary">+</button>
        </div>
        <div className="flex items-center gap-4 flex-grow">
          <span className="text-lg">🔅</span>
          <input 
            type="range" min="30" max="100" 
            value={brightness} 
            onChange={e => setBrightness(parseInt(e.target.value))}
            className="flex-grow" 
          />
        </div>
      </div>
    </div>
  );
};

export default LeituraScreen;
