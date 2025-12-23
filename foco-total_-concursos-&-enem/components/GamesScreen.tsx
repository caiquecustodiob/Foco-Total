
import React, { useState, useEffect } from 'react';
import { blocos } from '../data';
import type { QuestaoBloco, UserProgress, MateriaBloco } from '../types';
import { BackIcon } from './Icons';

interface Props {
  progress: UserProgress;
  setProgress: (p: any) => void;
  playSound: (type: 'success' | 'error' | 'achievement') => void;
}

const GamesScreen: React.FC<Props> = ({ progress, setProgress, playSound }) => {
  const [activeGame, setActiveGame] = useState<'plataforma' | 'bomba' | null>(null);
  const [currentQuestao, setCurrentQuestao] = useState<QuestaoBloco | null>(null);
  const [gameState, setGameState] = useState<{ 
    selectedIdx: number | null; 
    status: 'playing' | 'correct' | 'wrong';
    platforms: boolean[];
    streak: number;
  }>({ selectedIdx: null, status: 'playing', platforms: [true, true, true, true], streak: 0 });
  const [xpPopup, setXpPopup] = useState<boolean>(false);

  const questoes = blocos.filter(b => b.tipo === "questao") as QuestaoBloco[];
  const materias = blocos.filter(b => b.tipo === "materia") as MateriaBloco[];

  const startRandomGame = (type: 'plataforma' | 'bomba') => {
    if (questoes.length === 0) return;
    const q = questoes[Math.floor(Math.random() * questoes.length)];
    setCurrentQuestao(q);
    setActiveGame(type);
    setGameState(prev => ({ ...prev, selectedIdx: null, status: 'playing', platforms: [true, true, true, true] }));
  };

  const handleChoice = (idx: number) => {
    if (gameState.status !== 'playing' || !currentQuestao) return;
    const isCorrect = idx === currentQuestao.correta;
    
    if (isCorrect) {
      playSound('success');
      setXpPopup(true);
      setTimeout(() => setXpPopup(false), 1000);
      const bonus = gameState.streak * 5;
      setProgress((p: any) => ({ 
        ...p, 
        xp: p.xp + 50 + bonus,
        streak: p.streak + 1
      }));
    } else {
      playSound('error');
      setProgress((p: any) => ({ ...p, streak: 0 }));
    }

    if (activeGame === 'plataforma') {
      const newPlatforms = [...gameState.platforms];
      if (!isCorrect) newPlatforms[idx] = false;
      setGameState(prev => ({ 
        ...prev, 
        selectedIdx: idx, 
        status: isCorrect ? 'correct' : 'wrong', 
        platforms: newPlatforms,
        streak: isCorrect ? prev.streak + 1 : 0
      }));
    } else {
      setGameState(prev => ({ 
        ...prev, 
        selectedIdx: idx, 
        status: isCorrect ? 'correct' : 'wrong',
        streak: isCorrect ? prev.streak + 1 : 0
      }));
    }
  };

  if (activeGame === 'plataforma' && currentQuestao) {
    const materia = materias.find(m => m.id === currentQuestao.materiaId);
    return (
      <div className="h-screen bg-[#020617] flex flex-col p-6 animate-fade-in relative overflow-hidden text-white">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]" />
        </div>

        {xpPopup && (
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[200] text-emerald-400 font-black text-6xl animate-bounce-soft pointer-events-none">
            +50 XP
          </div>
        )}

        <header className="relative z-10 flex items-center justify-between">
          <button onClick={() => setActiveGame(null)} className="p-3 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10">
            <BackIcon />
          </button>
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-black text-blue-400 tracking-[0.3em] uppercase">Combo Streak</span>
            <span className="text-2xl font-black italic">x{gameState.streak}</span>
          </div>
        </header>
        
        <div className="mt-12 text-center space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            <span className="text-xs">{materia?.icone || '📝'}</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">{materia?.nome || 'Geral'}</span>
          </div>
          <h2 className="text-2xl font-black leading-tight">{currentQuestao.pergunta}</h2>
        </div>

        <div className="flex-grow flex flex-col justify-end pb-12 gap-4 relative z-10">
          {currentQuestao.alternativas.map((alt, i) => (
            <button
              key={i}
              disabled={gameState.status !== 'playing'}
              onClick={() => handleChoice(i)}
              className={`relative w-full p-5 rounded-[2rem] transition-all duration-1000 transform border-2 
                ${!gameState.platforms[i] ? 'translate-y-[120vh] rotate-12 opacity-0' : 'translate-y-0 opacity-100'}
                ${gameState.status === 'correct' && i === currentQuestao.correta 
                  ? 'bg-emerald-500 border-emerald-400 shadow-[0_0_40px_rgba(16,185,129,0.4)]' 
                  : 'bg-white/5 border-white/10 hover:bg-white/10'}
              `}
            >
              <div className="flex items-center gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black ${gameState.status === 'correct' && i === currentQuestao.correta ? 'bg-white text-emerald-600' : 'bg-white/10 text-white'}`}>
                  {String.fromCharCode(65 + i)}
                </div>
                <span className="text-sm font-bold text-left">{alt}</span>
              </div>
            </button>
          ))}
        </div>

        {gameState.status !== 'playing' && (
          <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-8 z-[100] animate-fade-in">
             <div className="bg-slate-900 p-10 rounded-[3rem] text-center w-full border border-white/10 shadow-3xl">
                <span className="text-7xl block animate-bounce mb-6">{gameState.status === 'correct' ? '🌟' : '👨‍🚀'}</span>
                <h3 className="text-3xl font-black mb-2">{gameState.status === 'correct' ? 'Magnífico!' : 'Erro Crítico!'}</h3>
                <p className="text-slate-400 text-sm font-medium leading-relaxed mb-8">{currentQuestao.explicacao}</p>
                <button onClick={() => startRandomGame('plataforma')} className="w-full bg-blue-600 text-white font-black py-5 rounded-3xl shadow-xl shadow-blue-600/20 active:scale-95 transition-all">
                  PRÓXIMA MISSÃO
                </button>
             </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="p-6 animate-fade-in space-y-10 pb-32">
      <header className="space-y-2">
        <h2 className="text-4xl font-black tracking-tight text-slate-800 dark:text-white">Arcade Master</h2>
        <p className="text-slate-500 font-bold">Ganhe XP e medalhas jogando.</p>
      </header>
      <div className="grid grid-cols-1 gap-6">
        <button onClick={() => startRandomGame('plataforma')} className="group relative w-full h-56 rounded-[3rem] overflow-hidden shadow-2xl transition-all hover:scale-[1.02]">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-900" />
          <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
            <div className="flex justify-between items-start">
              <div className="w-14 h-14 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center text-3xl">🛸</div>
              <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border border-white/10">Ambientação Espacial</span>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-black leading-none">Plataformas Estelares</h3>
              <p className="text-white/60 font-bold text-xs mt-2">Questões flutuantes. Não deixe o astronauta cair!</p>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default GamesScreen;
