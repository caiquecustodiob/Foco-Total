
import React from 'react';
import type { Screen } from '../types';
import { ApostilasIcon, DicasIcon, ProgressoIcon, SimuladosIcon, VideoaulasIcon } from './Icons';

interface HomeScreenProps {
  setScreen: (screen: Screen) => void;
}

const HomeScreen: React.FC<HomeScreenProps> = ({ setScreen }) => {
  return (
    <div className="flex flex-col items-center justify-center text-center animate-fade-in">
        <div className="bg-primary/10 dark:bg-primary/20 p-6 rounded-full mb-6">
            <h1 className="text-5xl">🎯</h1>
        </div>
      <h2 className="text-3xl font-bold text-slate-800 dark:text-white mb-2">Foco Total</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-md">Sua jornada para a aprovação começa aqui. Escolha uma opção abaixo para começar a estudar.</p>
      
      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        <HomeButton icon={<ApostilasIcon />} label="Apostilas" onClick={() => setScreen('apostilas')} />
        <HomeButton icon={<SimuladosIcon />} label="Simulados" onClick={() => setScreen('simulados')} />
        <HomeButton icon={<DicasIcon />} label="Leitura & Dicas" onClick={() => setScreen('dicas')} />
        <HomeButton icon={<VideoaulasIcon />} label="Videoaulas" onClick={() => setScreen('videoaulas')} />
        <div className="col-span-2">
            <HomeButton icon={<ProgressoIcon />} label="Meu Progresso" onClick={() => setScreen('progresso')} />
        </div>
      </div>
    </div>
  );
};

interface HomeButtonProps {
    icon: React.ReactNode;
    label: string;
    onClick: () => void;
}

const HomeButton: React.FC<HomeButtonProps> = ({icon, label, onClick}) => (
    <button
        onClick={onClick}
        className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center justify-center text-center"
    >
        <div className="text-primary text-3xl mb-3">{icon}</div>
        <span className="font-semibold text-slate-700 dark:text-slate-200">{label}</span>
    </button>
);


export default HomeScreen;
