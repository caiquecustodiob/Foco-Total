
import React from 'react';
import { blocos } from '../data';
import type { MateriaBloco, UserProgress, Screen, ApostilaBloco } from '../types';

interface Props {
  progress: UserProgress;
  setScreen: (s: Screen) => void;
  onRead: (apo: ApostilaBloco) => void;
}

const HomeScreen: React.FC<Props> = ({ progress, setScreen, onRead }) => {
  const materias = blocos.filter(b => b.tipo === "materia") as MateriaBloco[];
  const apostilas = blocos.filter(b => b.tipo === "apostila") as ApostilaBloco[];
  
  const heroApo = apostilas[0];
  const focusPercent = Math.min(100, (progress.tempoFocadoHoje / (progress.metaDiaria * 60)) * 100);

  return (
    <div className="animate-fade-in pb-20">
      {/* Hero Section - Ajustado para altura mínima dinâmica */}
      <section className="relative min-h-[45vh] lg:h-[55vh] w-full overflow-hidden flex flex-col justify-end">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/10 dark:from-primary-dark/20 to-slate-50 dark:to-slate-950" />
        <div className="absolute inset-0 flex items-center justify-center text-[10rem] md:text-[12rem] opacity-5 select-none pointer-events-none">🏛️</div>
        
        <div className="relative p-8 space-y-4 w-full bg-gradient-to-t from-slate-50 dark:from-slate-950 via-slate-50/90 dark:via-slate-950/80 to-transparent">
          <div className="flex items-center gap-2">
            <span className="bg-primary dark:bg-primary-dark text-[10px] text-white font-black px-2 py-0.5 rounded-sm">CONSELHO</span>
            <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Sua próxima lição</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-slate-800 dark:text-white leading-tight pr-4">{heroApo.titulo}</h1>
          <div className="flex gap-3">
            <button 
              onClick={() => onRead(heroApo)}
              className="flex-grow btn-primary text-sm font-black py-4 rounded-2xl flex items-center justify-center gap-2 active:scale-95 transition-all"
            >
              INICIAR ESTUDO
            </button>
            <button onClick={() => setScreen('biblioteca')} className="px-6 bg-white dark:bg-white/10 backdrop-blur-md text-slate-800 dark:text-white border border-slate-200 dark:border-white/10 font-black py-4 rounded-2xl active:scale-95">
              MAIS
            </button>
          </div>
        </div>
      </section>

      {/* Progress Bar - Centralizado e Responsivo */}
      <div className="px-6 -mt-4 relative z-10">
        <div className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl border border-slate-200 dark:border-white/10 p-5 rounded-[2.5rem] flex items-center justify-between shadow-xl shadow-slate-200/50 dark:shadow-none">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-xl">🔱</div>
            <div>
              <p className="text-[9px] font-black text-slate-400 uppercase tracking-tighter">Foco do Dia</p>
              <p className="text-xs font-black dark:text-white">{Math.floor(progress.tempoFocadoHoje/60)} / {progress.metaDiaria}m</p>
            </div>
          </div>
          <div className="h-2 w-28 md:w-32 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-gold transition-all duration-700" style={{ width: `${focusPercent}%` }} />
          </div>
        </div>
      </div>

      {/* Categories Row - Snap Scrolling melhorado */}
      <div className="mt-12 space-y-12 pl-6">
        <section className="space-y-4">
          <h3 className="text-xl font-black tracking-tight text-slate-800 dark:text-white">Áreas de Domínio</h3>
          <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 pr-6">
            {materias.map(m => (
              <button 
                key={m.id}
                onClick={() => setScreen('biblioteca')}
                className={`flex-shrink-0 w-36 h-48 rounded-[2rem] bg-gradient-to-br ${m.cor} p-5 flex flex-col justify-between snap-start active:scale-90 transition-transform shadow-lg relative overflow-hidden group`}
              >
                <span className="text-4xl relative z-10 group-hover:scale-110 transition-transform">{m.icone}</span>
                <span className="font-black text-white text-xs text-left leading-tight relative z-10">{m.nome}</span>
                <div className="absolute bottom-0 right-0 w-20 h-20 bg-white/10 rounded-full -mr-8 -mb-8 pointer-events-none" />
              </button>
            ))}
          </div>
        </section>

        <section className="space-y-4 pr-6">
          <h3 className="text-xl font-black tracking-tight text-slate-800 dark:text-white">Em Progresso</h3>
          <div className="flex gap-4 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4">
            {apostilas.map(a => (
              <button 
                key={a.id}
                onClick={() => onRead(a)}
                className="flex-shrink-0 w-[85vw] md:w-72 h-44 bg-white dark:bg-slate-900 rounded-[2.5rem] overflow-hidden border border-slate-200 dark:border-white/5 snap-start relative group shadow-sm active:scale-[0.98] transition-all"
              >
                <div className="absolute inset-0 bg-primary/5 dark:bg-primary-dark/5 group-hover:bg-primary/10 transition-colors" />
                <div className="absolute bottom-0 p-5 w-full bg-gradient-to-t from-white dark:from-black via-white/80 dark:via-black/80 to-transparent">
                  <p className="text-slate-800 dark:text-white font-black text-sm truncate">{a.titulo}</p>
                  <div className="h-1 bg-slate-100 dark:bg-white/10 rounded-full mt-3 overflow-hidden">
                    <div className="h-full bg-gold" style={{ width: progress.concludedIds.includes(a.id) ? '100%' : '5%' }} />
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomeScreen;
