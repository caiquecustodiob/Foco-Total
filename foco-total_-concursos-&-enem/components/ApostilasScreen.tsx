
import React, { useState } from 'react';
import { APOSTILAS_DATA } from '../data';
import type { Apostila, Topico } from '../types';
import { BackIcon } from './Icons';

const ApostilasScreen: React.FC = () => {
  const [selectedMateria, setSelectedMateria] = useState<Apostila | null>(null);
  const [selectedTopico, setSelectedTopico] = useState<Topico | null>(null);

  if (selectedTopico) {
    return (
      <div className="animate-fade-in">
        <button
          onClick={() => setSelectedTopico(null)}
          className="flex items-center gap-2 mb-4 text-primary font-semibold hover:underline"
        >
          <BackIcon /> Voltar para os tópicos
        </button>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">{selectedTopico.titulo}</h2>
          <div
            className="prose prose-slate dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: selectedTopico.conteudo }}
          />
        </div>
      </div>
    );
  }

  if (selectedMateria) {
    return (
      <div className="animate-fade-in">
        <button
          onClick={() => setSelectedMateria(null)}
          className="flex items-center gap-2 mb-4 text-primary font-semibold hover:underline"
        >
         <BackIcon /> Voltar para matérias
        </button>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
          <span className="text-3xl">{selectedMateria.icone}</span> {selectedMateria.materia}
        </h2>
        <div className="space-y-3">
          {selectedMateria.topicos.map((topico, index) => (
            <button
              key={index}
              onClick={() => setSelectedTopico(topico)}
              className="w-full text-left bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm hover:shadow-md hover:bg-slate-50 dark:hover:bg-slate-700 transition-all"
            >
              <h3 className="font-semibold">{topico.titulo}</h3>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-4">Escolha a matéria</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {APOSTILAS_DATA.map((apostila, index) => (
          <button
            key={index}
            onClick={() => setSelectedMateria(apostila)}
            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center"
          >
            <span className="text-4xl mb-3">{apostila.icone}</span>
            <h3 className="text-lg font-semibold">{apostila.materia}</h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default ApostilasScreen;
