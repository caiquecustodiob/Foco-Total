
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
  const audioContextRef = useRef<AudioContext | null>(null);
  const noiseNodeRef = useRef<AudioBufferSourceNode | null>(null);

  const dynamicXP = Math.floor(50 + (progress.metaDiaria * 2));

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(s => s + 1);
      setProgress((p: any) => ({ ...p, tempoFocadoHoje: p.tempoFocadoHoje + 1 }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!progress.settings.ambientSoundEnabled) return;

    const startAmbientAudio = async () => {
      try {
        const AudioContextClass = (window as any).AudioContext || (window as any).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioContextRef.current = ctx;

        const bufferSize = 2 * ctx.sampleRate;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        
        let lastOut = 0.0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          output[i] = (lastOut + (0.02 * white)) / 1.02;
          lastOut = output[i];
          output[i] *= 3.5;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = noiseBuffer;
        noise.loop = true;

        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(400, ctx.currentTime);

        const gainNode = ctx.createGain();
        gainNode.gain.setValueAtTime(0, ctx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.08, ctx.currentTime + 2);

        noise.connect(filter);
        filter.connect(gainNode);
        gainNode.connect(ctx.destination);

        noise.start();
        noiseNodeRef.current = noise;
      } catch (err) {
        console.warn('Erro ao iniciar áudio ambiente:', err);
      }
    };

    startAmbientAudio();

    return () => {
      if (noiseNodeRef.current) {
        noiseNodeRef.current.stop();
      }
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [progress.settings.ambientSoundEnabled]);

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
      <div className="fixed top-0 left-0 right-0 h-1 bg-slate-100 dark:bg-slate-800 z-[100] pt-safe">
        <div className="h-full bg-primary dark:bg-primary-dark shadow-[0_0_15px_#dc2626]" style={{ width: `${scrollPerc}%` }} />
      </div>

      <header className="p-4 flex items-center justify-between border-b border-slate-100 dark:border-white/5 bg-white/90 dark:bg-slate-950/90 backdrop-blur-2xl z-50 pt-safe">
        <button onClick={onBack} className="p-3 text-slate-400 hover:text-primary transition-colors active:scale-90"><BackIcon /></button>
        <div className="text-center truncate px-6">
          <h2 className="text-[10px] font-black text-primary dark:text-primary-dark uppercase tracking-[0.2em]">{apostila.titulo}</h2>
        </div>
        <div className="flex items-center gap-2">
           {progress.settings.ambientSoundEnabled && (
             <span className="text-[10px] font-black animate-pulse text-emerald-500 uppercase">Zen Mode</span>
           )}
           <div className="w-4" />
        </div>
      </header>

      <div 
        className="flex-grow overflow-y-auto px-6 py-12 no-scrollbar bg-pattern"
        onScroll={handleScroll}
        ref={contentRef}
      >
        <div className="max-w-prose mx-auto" style={{ fontSize: `${fontSize}px` }}>
          <h1 className="text-3xl md:text-4xl font-black mb-10 leading-tight drop-shadow-sm">{apostila.titulo}</h1>
          <article className="prose dark:prose-invert max-w-none pb-40">
            {renderContent(apostila.conteudo)}
            
            <div className="mt-16 p-8 md:p-12 bg-slate-50 dark:bg-slate-900 rounded-[3rem] border border-slate-200 dark:border-white/5 text-center shadow-inner">
              <span className="text-5xl block mb-6 animate-bounce-soft">📜</span>
              <h3 className="text-xl font-black mb-2">Lição Absorvida?</h3>
              <p className="text-slate-500 text-[10px] font-bold mb-10 uppercase tracking-widest">Sua XP será validada ao fim da jornada.</p>
              <button 
                disabled={!canFinish}
                onClick={() => {
                  setProgress((p: any) => ({ ...p, xp: p.xp + dynamicXP }));
                  onFinish();
                }}
                className={`w-full py-5 rounded-[2rem] font-black transition-all shadow-xl ${canFinish ? 'btn-primary scale-100 active:scale-95' : 'bg-slate-200 dark:bg-slate-800 text-slate-400 scale-95 opacity-50 cursor-not-allowed'}`}
              >
                {canFinish ? `VALIDAR CONHECIMENTO (+${dynamicXP} XP)` : `ESTUDANDO... (${Math.max(0, 15 - seconds)}s)`}
              </button>
            </div>
          </article>
        </div>
      </div>

      {/* Controles Flutuantes com Suporte a Safe Area Bottom */}
      <div className="fixed bottom-0 left-0 right-0 p-6 pb-safe z-[100] pointer-events-none">
        <div className="max-w-md mx-auto p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-3xl border border-slate-200 dark:border-white/10 rounded-[2.5rem] flex items-center justify-between gap-4 pointer-events-auto shadow-2xl">
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-black/20 px-3 py-1.5 rounded-2xl">
            <button onClick={() => setFontSize(s => Math.max(12, s-2))} className="w-8 h-8 font-black text-slate-500 hover:text-primary active:scale-110">-</button>
            <span className="text-xs font-black text-slate-700 dark:text-white min-w-[20px] text-center">{fontSize}</span>
            <button onClick={() => setFontSize(s => Math.min(26, s+2))} className="w-8 h-8 font-black text-slate-500 hover:text-primary active:scale-110">+</button>
          </div>
          <div className="flex items-center gap-3 flex-grow pr-2">
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
    </div>
  );
};

export default LeituraScreen;
