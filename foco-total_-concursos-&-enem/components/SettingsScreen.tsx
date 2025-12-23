import React, { useMemo, useState } from 'react';
import type { UserProgress } from '../types';
import { BackIcon } from './Icons';

interface Props {
  progress: UserProgress;
  setProgress: (p: any) => void;
  deferredPrompt?: any;
}

const SettingsScreen: React.FC<Props> = ({ progress, setProgress, deferredPrompt }) => {
  const [showTerms, setShowTerms] = useState(false);

  const resetProgress = () => {
    if (confirm('Deseja apagar todo o seu progresso? Isso não pode ser desfeito.')) {
      localStorage.removeItem('foco_total_lego_v5');
      window.location.reload();
    }
  };

  const handleInstall = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        console.log('App instalado');
      }
    }
  };

  const exportBackup = async () => {
    try {
      if ('showSaveFilePicker' in window) {
        const handle = await (window as any).showSaveFilePicker({
          suggestedName: `foco-total-backup-${new Date().toISOString().split('T')[0]}.foco`,
          types: [{
            description: 'Backup Foco Total',
            accept: { 'application/json': ['.foco'] }
          }]
        });
        const writable = await handle.createWritable();
        await writable.write(JSON.stringify(progress, null, 2));
        await writable.close();
      } else {
        // Fallback para navegadores sem File System Access API
        const blob = new Blob([JSON.stringify(progress)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'foco-total.foco';
        a.click();
      }
    } catch (e) {
      console.error(e);
    }
  };

  const importBackup = async () => {
    try {
      if ('showOpenFilePicker' in window) {
        const [handle] = await (window as any).showOpenFilePicker({
          types: [{
            description: 'Backup Foco Total',
            accept: { 'application/json': ['.foco'] }
          }]
        });
        const file = await handle.getFile();
        const text = await file.text();
        const data = JSON.parse(text);
        if (confirm('Importar backup? Seu progresso atual será substituído.')) {
          setProgress(data);
        }
      } else {
        alert('Seu navegador não suporta a API de arquivos nativa. Arraste o arquivo para a tela inicial para importar.');
      }
    } catch (e) {
      console.error(e);
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

  if (showTerms) {
    return (
      <div className="p-6 animate-fade-in space-y-6 pb-32">
        <button onClick={() => setShowTerms(false)} className="flex items-center gap-2 text-primary dark:text-primary-dark font-black text-xs uppercase mb-4">
          <BackIcon /> Voltar aos Ajustes
        </button>
        <div className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-200 dark:border-white/5 shadow-xl">
          <h2 className="text-2xl font-black mb-6 dark:text-white">Termos de Uso e Privacidade</h2>
          <div className="prose prose-sm dark:prose-invert space-y-4 text-slate-600 dark:text-slate-400 font-medium">
            <p><strong>1. Aceitação dos Termos:</strong> Ao instalar ou acessar o <strong>Foco Total</strong>, você concorda com estes termos.</p>
            <p><strong>2. PWA Nativo:</strong> Este app utiliza APIs de sistema (File System, Launch Queue) para uma experiência de desktop/mobile completa.</p>
            <p><strong>3. Armazenamento Local:</strong> Seus dados ficam no seu dispositivo. Use a função de Backup para evitar perdas ao limpar o navegador.</p>
            <p><strong>4. Privacidade:</strong> Não coletamos nem enviamos seus dados para a nuvem.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 space-y-6 animate-fade-in pb-32">
      <header className="py-6 px-2">
        <h2 className="text-4xl font-black text-slate-800 dark:text-white">Ajustes</h2>
        <p className="text-sm text-slate-500 font-bold uppercase tracking-widest mt-1">Configurações de Nível Elite</p>
      </header>
      
      <div className="space-y-4">
        {/* Sessão de Instalação */}
        {deferredPrompt && (
          <section className="bg-primary/10 dark:bg-primary-dark/10 p-6 rounded-[2.5rem] border-2 border-primary/20 animate-bounce-soft">
            <div className="flex items-center gap-4">
              <span className="text-3xl">🚀</span>
              <div className="flex-grow">
                <p className="text-sm font-black dark:text-white">Instalar App Nativo</p>
                <p className="text-[10px] font-bold text-slate-500 uppercase">Experiência sem distrações</p>
              </div>
              <button onClick={handleInstall} className="btn-primary px-6 py-2 rounded-xl font-black text-xs">INSTALAR</button>
            </div>
          </section>
        )}

        <section className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-200 dark:border-white/5 shadow-xl">
          <h3 className="font-black mb-8 flex items-center gap-3 text-primary dark:text-primary-dark">
            <span className="text-2xl">🎯</span> Disciplina e Foco
          </h3>
          <div className="space-y-10">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <div>
                  <p className="text-sm font-black dark:text-white">Meta Diária</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-primary dark:text-primary-dark">{formatTime(progress.metaDiaria)}</span>
                </div>
              </div>
              <input 
                type="range" min="5" max="480" step="5"
                value={progress.metaDiaria}
                onChange={(e) => setProgress((p: any) => ({ ...p, metaDiaria: parseInt(e.target.value) }))}
                className="w-full h-3 bg-slate-100 dark:bg-slate-800 rounded-full appearance-none cursor-pointer accent-primary"
              />
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-slate-100 dark:border-white/5">
              <p className="text-sm font-black dark:text-white">Efeitos Sonoros</p>
              <button 
                onClick={() => setProgress((p: any) => ({ ...p, settings: { ...p.settings, soundEnabled: !p.settings.soundEnabled } }))}
                className={`w-14 h-7 rounded-full transition-all relative ${progress.settings.soundEnabled ? 'bg-primary dark:bg-primary-dark' : 'bg-slate-300 dark:bg-slate-700'}`}
              >
                <div className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all ${progress.settings.soundEnabled ? 'left-8' : 'left-1'}`} />
              </button>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-slate-900 p-8 rounded-[3rem] border border-slate-200 dark:border-white/5 shadow-sm">
          <h3 className="font-black mb-6 flex items-center gap-3 text-slate-400">
            <span className="text-xl">💾</span> Backup & Arquivos
          </h3>
          <div className="grid grid-cols-2 gap-3 mb-6">
            <button onClick={exportBackup} className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl text-center hover:scale-95 transition-all">
              <span className="text-xl block mb-1">📤</span>
              <span className="text-[10px] font-black uppercase tracking-tighter dark:text-white">Exportar</span>
            </button>
            <button onClick={importBackup} className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl text-center hover:scale-95 transition-all">
              <span className="text-xl block mb-1">📥</span>
              <span className="text-[10px] font-black uppercase tracking-tighter dark:text-white">Importar</span>
            </button>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-xs">
              <span className="font-bold opacity-60 dark:text-slate-400 uppercase tracking-widest">Cache Local</span>
              <span className="font-black dark:text-white">{storageUsed}</span>
            </div>
            <button onClick={() => setShowTerms(true)} className="w-full py-4 text-slate-600 dark:text-slate-400 font-black text-xs uppercase tracking-widest rounded-2xl border border-slate-200 dark:border-white/10">Termos e Privacidade</button>
            <button onClick={resetProgress} className="w-full py-5 text-rose-500 font-black rounded-3xl border-2 border-rose-100 dark:border-rose-900/30 active:scale-95">LIMPAR TUDO</button>
          </div>
        </section>

        <div className="p-8 text-center">
           <p className="text-[10px] font-black text-slate-300 dark:text-slate-700 uppercase tracking-[0.5em]">Foco Total • v7.0 REI DA MESA Edition</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsScreen;