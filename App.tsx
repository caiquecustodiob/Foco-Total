
import React, { useState, useEffect } from 'react';
import { ApostilasIcon, DicasIcon, HomeIcon, ProgressoIcon, SimuladosIcon, VideoaulasIcon, SunIcon, MoonIcon, BackIcon } from './components/Icons';
import HomeScreen from './components/HomeScreen';
import ApostilasScreen from './components/ApostilasScreen';
import SimuladosScreen from './components/SimuladosScreen';
import DicasScreen from './components/DicasScreen';
import VideoaulasScreen from './components/VideoaulasScreen';
import ProgressoScreen from './components/ProgressoScreen';
import type { Screen } from './types';

const App: React.FC = () => {
  const [screen, setScreen] = useState<Screen>('home');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  const renderScreen = () => {
    switch (screen) {
      case 'apostilas':
        return <ApostilasScreen />;
      case 'simulados':
        return <SimuladosScreen />;
      case 'dicas':
        return <DicasScreen />;
      case 'videoaulas':
        return <VideoaulasScreen />;
      case 'progresso':
        return <ProgressoScreen />;
      default:
        return <HomeScreen setScreen={setScreen} />;
    }
  };

  const screenTitles: { [key in Screen]: string } = {
    home: 'Foco Total',
    apostilas: 'Apostilas',
    simulados: 'Simulados',
    dicas: 'Leitura & Dicas',
    videoaulas: 'Videoaulas',
    progresso: 'Meu Progresso',
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <header className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-sm sticky top-0 z-20 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {screen !== 'home' && (
            <button
              onClick={() => setScreen('home')}
              className="text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-colors"
              aria-label="Voltar para a tela inicial"
            >
              <BackIcon />
            </button>
          )}
          <h1 className="text-xl font-bold text-primary">{screenTitles[screen]}</h1>
        </div>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          aria-label="Alternar tema"
        >
          {isDarkMode ? <SunIcon /> : <MoonIcon />}
        </button>
      </header>

      <main className="flex-grow p-4 pb-24 animate-fade-in">
        {renderScreen()}
      </main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-t border-slate-200 dark:border-slate-700 shadow-lg z-20">
        <div className="max-w-md mx-auto flex justify-around">
          <NavItem icon={<HomeIcon />} label="Início" isActive={screen === 'home'} onClick={() => setScreen('home')} />
          <NavItem icon={<ApostilasIcon />} label="Apostilas" isActive={screen === 'apostilas'} onClick={() => setScreen('apostilas')} />
          <NavItem icon={<SimuladosIcon />} label="Simulados" isActive={screen === 'simulados'} onClick={() => setScreen('simulados')} />
          <NavItem icon={<ProgressoIcon />} label="Progresso" isActive={screen === 'progresso'} onClick={() => setScreen('progresso')} />
        </div>
      </nav>
    </div>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon, label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`flex flex-col items-center justify-center w-full pt-2 pb-1 text-xs transition-colors duration-200 ${
      isActive ? 'text-primary' : 'text-slate-500 dark:text-slate-400 hover:text-primary'
    }`}
  >
    <div className={`transform transition-transform ${isActive ? 'scale-110' : ''}`}>{icon}</div>
    <span className="mt-1">{label}</span>
  </button>
);

export default App;
