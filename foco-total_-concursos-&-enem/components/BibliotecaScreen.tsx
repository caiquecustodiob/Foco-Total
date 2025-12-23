
import React, { useState } from 'react';
import { blocos } from '../data';
import type { MateriaBloco, TemaBloco, ApostilaBloco } from '../types';
import { BackIcon } from './Icons';

interface Props {
  onRead: (a: ApostilaBloco) => void;
}

const BibliotecaScreen: React.FC<Props> = ({ onRead }) => {
  const [selection, setSelection] = useState<{ materiaId?: string; temaId?: string }>({});

  const materias = blocos.filter(b => b.tipo === "materia") as MateriaBloco[];
  const temas = selection.materiaId ? (blocos.filter(b => b.tipo === "tema" && b.materiaId === selection.materiaId) as TemaBloco[]) : [];
  // Use any cast to access temaId which only exists on some Bloco subtypes
  const conteudos = selection.temaId ? (blocos.filter(b => (b as any).temaId === selection.temaId)) : [];

  if (selection.temaId) {
    const tema = temas.find(t => t.id === selection.temaId);
    return (
      <div className="p-6 animate-fade-in space-y-6">
        <button onClick={() => setSelection(s => ({ ...s, temaId: undefined }))} className="flex items-center gap-2 text-primary font-black text-xs uppercase">
          <BackIcon /> Voltar para Temas
        </button>
        <h2 className="text-3xl font-black">{tema?.nome}</h2>
        <div className="space-y-4">
          {conteudos.map(c => (
            <button 
              key={c.id}
              onClick={() => c.tipo === 'apostila' && onRead(c as ApostilaBloco)}
              className="w-full bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-white/5 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{c.tipo === 'apostila' ? '📖' : '🎬'}</span>
                <div className="text-left">
                   <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{c.tipo}</p>
                   <h4 className="font-bold text-sm">{ (c as any).titulo }</h4>
                </div>
              </div>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">▶️</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (selection.materiaId) {
    const materia = materias.find(m => m.id === selection.materiaId);
    return (
      <div className="p-6 animate-fade-in space-y-6">
        <button onClick={() => setSelection({})} className="flex items-center gap-2 text-primary font-black text-xs uppercase">
          <BackIcon /> Voltar para Matérias
        </button>
        <h2 className="text-3xl font-black">{materia?.nome}</h2>
        <div className="grid grid-cols-1 gap-4">
          {temas.map(t => (
            <button 
              key={t.id}
              onClick={() => setSelection(s => ({ ...s, temaId: t.id }))}
              className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-white/5 text-left flex justify-between items-center group"
            >
              <span className="font-black text-lg group-hover:text-primary transition-colors">{t.nome}</span>
              <span className="text-slate-300">❯</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 animate-fade-in space-y-8">
      <header>
        <h2 className="text-4xl font-black">Biblioteca</h2>
        <p className="text-slate-500 font-bold mt-2">Selecione uma disciplina LEGO para explorar.</p>
      </header>
      <div className="grid grid-cols-2 gap-4">
        {materias.map(m => (
          <button 
            key={m.id}
            onClick={() => setSelection({ materiaId: m.id })}
            className={`h-48 rounded-[2.5rem] bg-gradient-to-br ${m.cor} p-6 flex flex-col justify-between shadow-xl active:scale-95 transition-all group overflow-hidden relative`}
          >
            <span className="text-5xl group-hover:scale-110 transition-transform relative z-10">{m.icone}</span>
            <div className="relative z-10">
              <h3 className="text-white font-black text-lg leading-tight">{m.nome}</h3>
              <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mt-1">Explorar</p>
            </div>
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default BibliotecaScreen;
