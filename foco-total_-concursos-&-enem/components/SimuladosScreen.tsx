import React, { useState, useEffect } from 'react';
import { SIMULADOS_DATA } from '../data';
import type { Simulado, ProgressoSimulado, Questao } from '../types';
import { BackIcon } from './Icons';

// Função para embaralhar um array (Fisher-Yates shuffle)
const shuffleArray = <T,>(array: T[]): T[] => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};


const SimuladosScreen: React.FC = () => {
  const [selectedSimulado, setSelectedSimulado] = useState<Simulado | null>(null);
  const [questoesAtuais, setQuestoesAtuais] = useState<Questao[]>([]);
  const [respostas, setRespostas] = useState<Record<number, number>>({});
  const [resultado, setResultado] = useState<{ acertos: number; total: number } | null>(null);
  const [currentQuestaoIndex, setCurrentQuestaoIndex] = useState(0);
  const [respostaDada, setRespostaDada] = useState<number | null>(null);

  const resetState = () => {
    setSelectedSimulado(null);
    setQuestoesAtuais([]);
    setRespostas({});
    setResultado(null);
    setCurrentQuestaoIndex(0);
    setRespostaDada(null);
  };

  const handleSelectMateria = (simulado: Simulado) => {
    const questoesEmbaralhadas = shuffleArray(simulado.questoes).slice(0, 15); // Pega até 15 questões
    const questoesComOpcoesEmbaralhadas = questoesEmbaralhadas.map(q => {
        const originalOpcoes = [...q.opcoes];
        const respostaOriginal = originalOpcoes[q.respostaCorreta];
        const opcoesEmbaralhadas = shuffleArray(originalOpcoes);
        const novaRespostaCorreta = opcoesEmbaralhadas.indexOf(respostaOriginal);
        return { ...q, opcoes: opcoesEmbaralhadas, respostaCorreta: novaRespostaCorreta };
    });
    
    setQuestoesAtuais(questoesComOpcoesEmbaralhadas);
    setSelectedSimulado(simulado);
  };

  const handleSelectResposta = (opcaoIndex: number) => {
    if (respostaDada !== null) return;
    setRespostas(prev => ({ ...prev, [currentQuestaoIndex]: opcaoIndex }));
    setRespostaDada(opcaoIndex);
  };

  const handleProximaQuestao = () => {
    if (currentQuestaoIndex < questoesAtuais.length - 1) {
      setCurrentQuestaoIndex(prev => prev + 1);
      setRespostaDada(null);
    } else {
      finalizarSimulado();
    }
  };
  
  const finalizarSimulado = () => {
    if (!selectedSimulado) return;
    let acertos = 0;
    questoesAtuais.forEach((questao, index) => {
      if (respostas[index] === questao.respostaCorreta) {
        acertos++;
      }
    });

    const total = questoesAtuais.length;
    setResultado({ acertos, total });

    const novoProgresso: ProgressoSimulado = {
      materia: selectedSimulado.materia,
      data: new Date().toISOString(),
      acertos,
      total,
    };
    const historicoJSON = localStorage.getItem('progressoSimulados');
    const historico: ProgressoSimulado[] = historicoJSON ? JSON.parse(historicoJSON) : [];
    historico.unshift(novoProgresso);
    localStorage.setItem('progressoSimulados', JSON.stringify(historico));
  };


  if (resultado) {
    return (
      <div className="animate-fade-in text-center">
        <h2 className="text-2xl font-bold mb-4">Resultado</h2>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-lg shadow-md max-w-md mx-auto">
            <p className="text-xl text-slate-700 dark:text-slate-300 mb-2">Você acertou</p>
            <p className="text-6xl font-bold text-primary mb-4">{resultado.acertos} de {resultado.total}</p>
            <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4 mb-6">
                <div className="bg-green-500 h-4 rounded-full" style={{ width: `${(resultado.acertos / resultado.total) * 100}%` }}></div>
            </div>
            <div className="flex gap-4 justify-center">
                 <button
                    onClick={resetState}
                    className="bg-primary text-white font-bold py-2 px-6 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                    Voltar
                </button>
            </div>
        </div>
      </div>
    );
  }

  if (selectedSimulado && questoesAtuais.length > 0) {
    const questao = questoesAtuais[currentQuestaoIndex];
    return (
      <div className="animate-fade-in max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-4">
            <button
            onClick={resetState}
            className="flex items-center gap-2 text-primary font-semibold hover:underline"
            >
            <BackIcon /> Sair do simulado
            </button>
            <span className="text-sm font-semibold text-slate-500">{currentQuestaoIndex + 1} / {questoesAtuais.length}</span>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4 leading-relaxed">{questao.pergunta}</h3>
            <div className="space-y-3">
            {questao.opcoes.map((opcao, index) => {
                const isSelected = respostas[currentQuestaoIndex] === index;
                const isCorrect = questao.respostaCorreta === index;
                let buttonClass = 'bg-slate-100 dark:bg-slate-700 border-transparent hover:bg-slate-200 dark:hover:bg-slate-600';

                if (respostaDada !== null) {
                    if (isCorrect) {
                        buttonClass = 'bg-green-100 dark:bg-green-900/50 border-green-500 text-green-800 dark:text-green-200';
                    } else if (isSelected) {
                        buttonClass = 'bg-red-100 dark:bg-red-900/50 border-red-500 text-red-800 dark:text-red-200';
                    } else {
                        buttonClass = 'bg-slate-100 dark:bg-slate-700 border-transparent opacity-70';
                    }
                }
                
                return (
                    <button
                        key={index}
                        onClick={() => handleSelectResposta(index)}
                        disabled={respostaDada !== null}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-colors duration-300 ${buttonClass}`}
                    >
                        {opcao}
                    </button>
                )
            })}
            </div>

            {respostaDada !== null && questao.explicacao && (
                <div className="mt-6 p-4 bg-slate-100 dark:bg-slate-700/50 rounded-lg border border-slate-200 dark:border-slate-700 animate-fade-in">
                    <h4 className="font-bold text-primary mb-2">Explicação:</h4>
                    <div className="prose prose-sm prose-slate dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: questao.explicacao }} />
                </div>
            )}
            
            {respostaDada !== null && (
                <button
                    onClick={handleProximaQuestao}
                    className="mt-6 w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary/90 transition-colors animate-fade-in"
                >
                    {currentQuestaoIndex < questoesAtuais.length - 1 ? 'Próxima Questão' : 'Finalizar Simulado'}
                </button>
            )}
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-4">Escolha a matéria para simular</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {SIMULADOS_DATA.map((simulado, index) => (
          <button
            key={index}
            onClick={() => handleSelectMateria(simulado)}
            className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center"
          >
            <span className="text-4xl mb-3">{simulado.icone}</span>
            <h3 className="text-lg font-semibold">{simulado.materia}</h3>
          </button>
        ))}
      </div>
    </div>
  );
};

export default SimuladosScreen;