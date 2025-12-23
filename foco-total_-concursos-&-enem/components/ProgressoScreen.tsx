
import React, { useMemo } from 'react';
import { blocos, CONQUISTAS_BASE } from '../data';
import type { UserProgress, MateriaBloco } from '../types';

interface Props {
  progress: UserProgress;
  level: string;
}

const ProgressoScreen: React.FC<Props> = ({ progress, level }) => {
  const materias = blocos.filter(b => b.tipo === "materia") as MateriaBloco[];

  const statsByMateria = useMemo(() => {
    const stats: Record<string, { correct: number, total: number }> = {};
    materias.forEach(m => stats[m.id] = { correct: 0, total: 0 });
    progress.historico.forEach(h => {
      if (stats[h.materiaId]) {
        stats[h.materiaId].total++;
        if (h.acerto) stats[h.materiaId].correct++;
      }
    });
    return stats;
  }, [progress.historico, materias]);

  return (
    <div className="p-6 space-y-10 animate-fade-in pb-32">
      <header className="text-center py-6">
        <div className="w-28 h-28 bg-gradient-to-br from-primary to-indigo-900 rounded-full flex items-center justify-center text-5xl shadow-[0_0_40px_rgba(37,99,235,0.3)] mx-auto border-4 border-white dark:border-slate-900 relative">
          <span className="animate-bounce-soft">🎓</span>
          <div className="absolute -bottom-2 bg-yellow-400 text-black text-[10px] font-black px-3 py-1 rounded-full uppercase">Lvl {Math.floor(progress.xp/500)}</div>
        </div>
        <h2 className="text-3xl font-black mt-6 dark:text-white">{level}</h2>
        <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em]">{progress.xp} XP acumulado</p>
      </header>

      {/* Hall of Fame - Medal Case */}
      <section className="space-y-6">
        <div className="flex justify-between items-end">
           <h3 className="text-xl font-black flex items-center gap-2 dark:text-white">
            <span className="text-yellow-500">🏅</span> Hall de Medalhas
           </h3>
           <span className="text-[10px] font-black text-slate-400 uppercase">{progress.unlockedConquistas.length}/{CONQUISTAS_BASE.length} Coletadas</span>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          {CONQUISTAS_BASE.map(c => {
            const isUnlocked = progress.unlockedConquistas.includes(c.id);
            return (
              <div key={c.id} className="flex flex-col items-center gap-2">
                <div className={`w-20 h-20 rounded-2xl flex items-center justify-center text-3xl transition-all duration-500 relative group
                  ${isUnlocked ? `bg-gradient-to-br ${c.cor} shadow-lg scale-100` : 'bg-slate-200 dark:bg-slate-800 opacity-30 scale-90 grayscale'}
                `}>
                  {c.icone}
                  {isUnlocked && <div className="absolute inset-0 bg-white/20 rounded-2xl animate-pulse" />}
                </div>
                <p className={`text-[9px] font-black uppercase text-center leading-tight tracking-tighter ${isUnlocked ? 'text-slate-700 dark:text-slate-200' : 'text-slate-400'}`}>
                  {c.titulo}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="space-y-4">
        <h3 className="text-xl font-black flex items-center gap-2 dark:text-white">
          <span className="text-primary">📊</span> Precisão por Área
        </h3>
        <div className="space-y-4">
          {materias.map(m => {
            const s = statsByMateria[m.id];
            const acc = s.total > 0 ? Math.round((s.correct / s.total) * 100) : 0;
            return (
              <div key={m.id} className="bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-white/5 shadow-sm">
                <div className="flex justify-between items-end mb-3">
                  <div>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{m.nome}</p>
                    <p className="text-xl font-black text-slate-800 dark:text-white">{acc}% <span className="text-xs font-bold text-slate-400">Taxa de Acerto</span></p>
                  </div>
                  <p className="text-[10px] font-bold text-slate-500 uppercase">{s.total} Questões</p>
                </div>
                <div className="h-3 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                  <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${acc}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ProgressoScreen;
