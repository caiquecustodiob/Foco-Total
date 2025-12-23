
import React, { useState } from 'react';
import { SIMULADOS_DATA } from '../data';
import type { Simulado, UserProgress, Questao } from '../types';
import { BackIcon } from './Icons';

interface Props {
  progress: UserProgress;
  setProgress: (p: any) => void;
  addXP: (xp: number) => void;
  playSound: (type: 'success' | 'error' | 'achievement') => void;
}

const SimuladosScreen: React.FC<Props> = ({ progress, setProgress, addXP, playSound }) => {
  const [activeSimulado, setActiveSimulado] = useState<Simulado | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOp, setSelectedOp] = useState<number | null>(null);
  const [results, setResults] = useState<{ id: string; correct: boolean }[]>([]);

  const handleAnswer = (idx: number) => {
    if (selectedOp !== null) return;
    setSelectedOp(idx);
    const correct = idx === activeSimulado!.questoes[currentIndex].respostaCorreta;
    setResults([...results, { id: activeSimulado!.questoes[currentIndex].id, correct }]);
    
    if (correct) {
      addXP(50);
    } else {
      playSound('error');
    }
  };

  const nextQuestao = () => {
    if (currentIndex < activeSimulado!.questoes.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedOp(null);
    } else {
      const finalAcertos = results.filter(r => r.correct).length;
      
      // Fixed: pushing individual question results to history to match UserProgress type
      const historyEntries = results.map(r => {
        const qData = activeSimulado!.questoes.find(q => q.id === r.id);
        return {
          id: Math.random().toString(36).substring(2, 9),
          materiaId: qData?.materiaId || 'mat-pt',
          acerto: r.correct,
          data: new Date().toISOString()
        };
      });

      setProgress((p: any) => ({ ...p, historico: [...historyEntries, ...p.historico] }));
      
      if (finalAcertos === activeSimulado!.questoes.length) {
        playSound('achievement');
      }
      
      setActiveSimulado(null);
      setResults([]);
      setCurrentIndex(0);
      setSelectedOp(null);
    }
  };

  if (activeSimulado) {
    const q = activeSimulado.questoes[currentIndex];
    return (
      <div className="p-4 space-y-4 animate-fade-in h-full flex flex-col">
        <div className="flex justify-between items-center bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800">
           <button onClick={() => setActiveSimulado(null)} className="text-slate-400"><BackIcon /></button>
           <div className="text-center">
             <p className="text-[10px] font-black text-slate-400 uppercase tracking-tighter">{activeSimulado.materia}</p>
             <span className="text-xs font-black text-primary uppercase">Questão {currentIndex + 1} de {activeSimulado.questoes.length}</span>
           </div>
           <div className="flex gap-1">
             {results.map((r, i) => (
               <div key={i} className={`w-2 h-2 rounded-full ${r.correct ? 'bg-emerald-500' : 'bg-red-500'}`} />
             ))}
           </div>
        </div>

        <div className="flex-grow bg-white dark:bg-slate-900 p-6 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-y-auto no-scrollbar">
          <div className="flex justify-between items-start mb-4">
            <span className="bg-primary/10 text-primary text-[10px] font-black px-2 py-1 rounded-md uppercase">{q.materia}</span>
            <span className="text-[10px] text-slate-400 font-bold uppercase">{q.tema}</span>
          </div>
          <p className="text-lg font-bold leading-relaxed mb-8">{q.pergunta}</p>
          <div className="space-y-3">
            {q.opcoes.map((op, i) => {
              let style = "border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950";
              if (selectedOp !== null) {
                if (i === q.respostaCorreta) style = "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 scale-[1.02]";
                else if (i === selectedOp) style = "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-700 dark:text-red-300";
                else style = "opacity-40 border-slate-200";
              }
              return (
                <button 
                  key={i} 
                  disabled={selectedOp !== null}
                  onClick={() => handleAnswer(i)}
                  className={`w-full text-left p-4 rounded-2xl border-2 font-medium transition-all ${style}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-8 h-8 rounded-xl border flex items-center justify-center text-[10px] font-black ${selectedOp !== null && i === q.respostaCorreta ? 'bg-emerald-500 text-white' : 'bg-white dark:bg-slate-800'}`}>
                      {String.fromCharCode(65 + i)}
                    </span>
                    {op}
                  </div>
                </button>
              );
            })}
          </div>

          {selectedOp !== null && (
            <div className="mt-8 animate-slide-up">
              <div className="bg-slate-100 dark:bg-slate-800 p-5 rounded-2xl mb-6">
                <p className="text-xs font-black text-slate-400 uppercase mb-2 tracking-widest">💡 Por que isso?</p>
                <p className="text-sm font-medium leading-relaxed">{q.explicacao}</p>
              </div>
              <button 
                onClick={nextQuestao}
                className="w-full bg-primary text-white font-black py-4 rounded-2xl shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all"
              >
                {currentIndex < activeSimulado.questoes.length - 1 ? 'PRÓXIMO EPISÓDIO' : 'VER RESULTADO FINAL'}
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6">
      <header>
        <h2 className="text-3xl font-black">Testes Pro</h2>
        <p className="text-sm text-slate-500 font-medium">Treine como um maratonista.</p>
      </header>
      
      <div className="grid grid-cols-1 gap-4">
        {SIMULADOS_DATA.map(s => (
          <button 
            key={s.id}
            onClick={() => setActiveSimulado(s)}
            className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-200 dark:border-slate-800 flex items-center gap-5 hover:border-primary transition-all text-left group relative overflow-hidden"
          >
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-4xl group-hover:scale-110 transition-transform">
              {s.icone}
            </div>
            <div className="flex-grow">
              <h4 className="font-black text-base">{s.materia}</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-[10px] font-black text-primary bg-primary/10 px-2 py-0.5 rounded-full uppercase">ENEM 2024</span>
                <span className="text-[10px] text-slate-400 font-bold uppercase">{s.questoes.length} Questões</span>
              </div>
            </div>
            <div className="w-10 h-10 bg-slate-50 dark:bg-slate-800 rounded-full flex items-center justify-center">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SimuladosScreen;
