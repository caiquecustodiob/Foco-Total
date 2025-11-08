
import React from 'react';
import { DICAS_DATA } from '../data';

const DicasScreen: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-4">Leitura & Dicas</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-6">Pequenas dicas que fazem uma grande diferença na sua preparação.</p>
      <div className="space-y-4">
        {DICAS_DATA.map((dica, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 p-5 rounded-lg shadow-md animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
            <h3 className="text-lg font-semibold text-primary mb-2">{dica.titulo}</h3>
            <p className="text-slate-700 dark:text-slate-300">{dica.conteudo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DicasScreen;
