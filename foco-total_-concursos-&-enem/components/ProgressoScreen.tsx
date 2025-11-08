
import React, { useState, useEffect } from 'react';
import type { ProgressoSimulado } from '../types';

const ProgressoScreen: React.FC = () => {
  const [historico, setHistorico] = useState<ProgressoSimulado[]>([]);

  useEffect(() => {
    const historicoJSON = localStorage.getItem('progressoSimulados');
    if (historicoJSON) {
      setHistorico(JSON.parse(historicoJSON));
    }
  }, []);

  const totalSimulados = historico.length;
  const mediaAcertos = totalSimulados > 0 
    ? (historico.reduce((acc, curr) => acc + (curr.acertos / curr.total), 0) / totalSimulados * 100).toFixed(1)
    : '0.0';

  const materiasEstudadas = [...new Set(historico.map(h => h.materia))];

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-6">Meu Progresso</h2>
      
      {totalSimulados === 0 ? (
        <div className="text-center bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl">📊</h3>
            <p className="mt-4 text-slate-600 dark:text-slate-400">Você ainda não completou nenhum simulado. Faça um para ver seu progresso aqui!</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-primary">{totalSimulados}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Simulados Feitos</div>
            </div>
            <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md text-center">
              <div className="text-3xl font-bold text-primary">{mediaAcertos}%</div>
              <div className="text-sm text-slate-500 dark:text-slate-400">Média de Acertos</div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md mb-6">
            <h3 className="font-semibold mb-2">Matérias Estudadas</h3>
            <div className="flex flex-wrap gap-2">
                {materiasEstudadas.length > 0 ? materiasEstudadas.map(m => (
                    <span key={m} className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded-full">{m}</span>
                )) : <p className="text-sm text-slate-500">Nenhuma</p>}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Histórico Recente</h3>
            <div className="space-y-3">
              {historico.map((item, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-sm flex justify-between items-center">
                  <div>
                    <div className="font-semibold">{item.materia}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{new Date(item.data).toLocaleString('pt-BR')}</div>
                  </div>
                  <div className="text-right">
                    <div className={`font-bold ${item.acertos/item.total >= 0.7 ? 'text-green-500' : 'text-amber-500'}`}>
                      {((item.acertos / item.total) * 100).toFixed(0)}%
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">{item.acertos}/{item.total} acertos</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProgressoScreen;
