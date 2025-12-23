
import React, { useState } from 'react';
import { APOSTILAS_DATA } from '../data';
import type { Apostila, Topico, ApostilaBloco } from '../types';
import { BackIcon } from './Icons';

interface Props {
  onRead: (apostila: ApostilaBloco) => void;
}

const ApostilasScreen: React.FC<Props> = ({ onRead }) => {
  const [selectedMateria, setSelectedMateria] = useState<Apostila | null>(null);

  if (selectedMateria) {
    return (
      <div className="animate-fade-in space-y-0">
        <header className="relative h-48 flex items-end p-6 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${selectedMateria.bannerColor}`} />
          <div className="absolute inset-0 bg-black/20" />
          <button 
            onClick={() => setSelectedMateria(null)} 
            className="absolute top-4 left-4 p-2 bg-black/30 backdrop-blur-md rounded-full text-white border border-white/20 z-10"
          >
            <BackIcon />
          </button>
          <div className="relative z-10 flex items-center gap-4">
            <span className="text-5xl drop-shadow-lg">{selectedMateria.icone}</span>
            <div>
              <h2 className="text-2xl font-black text-white leading-none">{selectedMateria.materia}</h2>
              <p className="text-[10px] font-bold text-white/70 uppercase tracking-[0.2em] mt-1">{selectedMateria.topicos.length} Lições Disponíveis</p>
            </div>
          </div>
        </header>

        <div className="p-4 space-y-3 mt-4">
          {selectedMateria.topicos.map((topico, index) => (
            <button
              key={index}
              onClick={() => onRead({
                id: topico.id,
                tipo: 'apostila',
                temaId: selectedMateria.materia,
                titulo: topico.titulo,
                conteudo: topico.conteudo
              })}
              className="w-full text-left bg-white dark:bg-slate-900 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:border-primary transition-all flex items-center gap-4 group active:scale-[0.98]"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-sm font-black text-slate-400 group-hover:bg-primary group-hover:text-white transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-sm leading-tight">{topico.titulo}</h3>
                <div className="flex items-center gap-2 mt-0.5">
                   <span className="text-[9px] font-black text-slate-400 uppercase">Aula Digital</span>
                   <span className="w-1 h-1 bg-slate-300 rounded-full" />
                   <span className="text-[9px] font-black text-primary uppercase">Maratona</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 animate-fade-in space-y-6">
      <header>
        <h2 className="text-3xl font-black">Biblioteca</h2>
        <p className="text-sm text-slate-500 font-medium">O que vamos maratonar hoje?</p>
      </header>
      
      <div className="space-y-4">
        {APOSTILAS_DATA.map((apostila, index) => (
          <button
            key={index}
            onClick={() => setSelectedMateria(apostila)}
            className="w-full relative h-32 rounded-3xl overflow-hidden group shadow-lg active:scale-95 transition-all"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${apostila.bannerColor} group-hover:scale-110 transition-transform duration-500`} />
            <div className="absolute inset-0 bg-black/10" />
            <div className="absolute inset-0 p-6 flex items-center justify-between">
              <div className="flex items-center gap-4 text-white">
                <span className="text-4xl">{apostila.icone}</span>
                <div className="text-left">
                  <h3 className="text-xl font-black leading-none">{apostila.materia}</h3>
                  <span className="text-[10px] font-black text-white/60 uppercase tracking-widest">{apostila.nivel}</span>
                </div>
              </div>
              <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
                 </svg>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ApostilasScreen;
