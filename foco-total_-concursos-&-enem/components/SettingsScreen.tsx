
import React, { useMemo, useState } from 'react';
import type { UserProgress } from '../types';
import { BackIcon } from './Icons';

interface Props {
  progress: UserProgress;
  setProgress: (p: any) => void;
}

const SettingsScreen: React.FC<Props> = ({ progress, setProgress }) => {
  const [showTerms, setShowTerms] = useState(false);

  const resetProgress = () => {
    if (confirm('Deseja apagar todo o seu progresso? Isso não pode ser desfeito.')) {
      localStorage.removeItem('foco_total_lego_v5');
      window.location.reload();
    }
  };

  const storageUsed = useMemo(() => {
    const str = JSON.stringify(progress);
    return (str.length / 1024).toFixed(2) + ' KB';
  }, [progress]);

  const formatTime = (minutes: number) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    if (h === 0) return `${m} min`;
    return `${h}h ${m > 0 ? m + 'm' : ''}`;
  };

  const estimatedXpBonus = Math.floor(50 + (progress.metaDiaria * 2));

  if (showTerms) {
    return (
      <div className="p-6 animate-fade-in space-y-6 pb-32">
        <button onClick={() => setShowTerms(false)} className="flex items-center gap-2 text-primary font-black text-xs uppercase mb-4">
          <BackIcon /> Voltar aos Ajustes
        </button>
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-200 dark:border-white/5 shadow-xl">
          <h2 className="text-2xl font-black mb-6">Termos de Uso e Privacidade</h2>
          <div className="prose prose-sm dark:prose-invert space-y-4 text-slate-600 dark:text-slate-400 font-medium">
            <p><strong>1. Propósito:</strong> O Foco Total é uma Progressive Web App (PWA) projetada exclusivamente para auxílio educacional e preparação para exames (ENEM, Concursos).</p>
            <p><strong>2. Armazenamento Local:</strong> Todos os seus dados de progresso, XP, medalhas e configurações são armazenados <strong>localmente</strong> no seu dispositivo (LocalStorage). Não enviamos seus dados para servidores externos.</p>
            <p><strong>3. Funcionamento PWA:</strong> Ao instalar este app, ele utilizará cache persistente para funcionar offline. Ele tem permissão para reproduzir áudios de feedback e manter a tela ativa durante a leitura, se solicitado.</p>
            <p><strong>4. Consentimento:</strong> A instalação e o uso contínuo deste software indicam que você concorda com o armazenamento local de dados e com a natureza gamificada da plataforma.</p>
            <p><strong>5. Modificações:</strong> Reservamos o direito de atualizar o conteúdo didático e as mecânicas de jogo para melhor atender aos critérios dos exames nacionais.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6 animate-fade-in pb-32">
      <header className="py-6 px-2">
        <h2 className="text-4xl font-black text-slate-800 dark:text-white">Ajustes</h2>
        <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mt-1">Personalize sua jornada imperial</p>
      </header>
      
      <div className="space-y-4">
        <section className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-200 dark:border-white/5 shadow-xl shadow-slate-200/50 dark:shadow-none bg-pattern">
          <h3 className="font-black mb-8 flex items-center gap-3 text-primary">
            <span className="text-2xl">🎯</span> Disciplina e Foco
          </h3>
          
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-sm font-black dark:text-white">Meta Diária</p>
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Compromisso com a aprovação</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-primary">{formatTime(progress.metaDiaria)}</span>
                </div>
              </div>
              
              <input 
                type="range" 
                min="5" 
                max="480" 
                step="5"
                value={progress.metaDiaria}
                onChange={(e) => setProgress((p: any) => ({ ...p, metaDiaria: parseInt(e.target.value) }))}
                className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full appearance-none cursor-pointer accent-primary"
              />
              
              <div className="flex justify-between text-[10px] font-black text-slate-400 uppercase tracking-widest px-1">
                <span>5m</span>
                <span>4h</span>
                <span>8h</span>
              </div>

              <div className="mt-6 p-4 bg-gold/10 rounded-2xl border border-gold/20 flex items-center gap-3">
                <span className="text-xl">✨</span>
                <div>
                  <p className="text-[10px] font-black text-gold uppercase">Recompensa Estimada</p>
                  <p className="text-xs font-bold dark:text-slate-300">Sua meta atual rende até <span className="text-gold font-black">+{estimatedXpBonus} XP</span> por lição concluída.</p>
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-white/5">
              <div>
                <p className="text-sm font-black dark:text-white">Efeitos Sonoros</p>
                <p className="text-[10px] font-bold text-slate-400 uppercase">Feedback auditivo do sistema</p>
              </div>
              <button 
                onClick={() => setProgress((p: any) => ({ ...p, settings: { ...p.settings, soundEnabled: !p.settings.soundEnabled } }))}
                className={`w-14 h-7 rounded-full transition-all relative ${progress.settings.soundEnabled ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}
              >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-all ${progress.settings.soundEnabled ? 'left-8' : 'left-1'}`} />
              </button>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-200 dark:border-white/5 shadow-sm">
          <h3 className="font-black mb-6 flex items-center gap-3 text-slate-400">
            <span className="text-xl">💾</span> Sistema
          </h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold opacity-60 dark:text-slate-400 uppercase tracking-widest">Memória em uso</span>
              <span className="font-black dark:text-white">{storageUsed}</span>
            </div>
            
            <button 
              onClick={() => setShowTerms(true)}
              className="w-full py-4 text-slate-500 font-black text-xs uppercase tracking-widest rounded-2xl border border-slate-200 dark:border-white/5 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Termos de Uso e Privacidade
            </button>

            <button 
              onClick={resetProgress}
              className="w-full py-5 text-rose-500 font-black rounded-3xl border-2 border-rose-100 dark:border-rose-900/30 hover:bg-rose-50 dark:hover:bg-rose-900/10 transition-colors active:scale-95"
            >
              LIMPAR TODO O PROGRESSO
            </button>
          </div>
        </section>

        <div className="p-8 text-center">
           <p className="text-[9px] font-black text-slate-400 dark:text-slate-600 mb-2">INSTALAR ESTE APP INDICA CONCORDÂNCIA COM OS TERMOS</p>
           <p className="text-[10px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-[0.5em]">Foco Total • v5.5 PWA Edition</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;
