
import React from 'react';
import type { VideoBloco } from '../types';
import { BackIcon } from './Icons';

interface Props {
  video: VideoBloco;
  onBack: () => void;
  onFinish: () => void;
}

const VideoPlayerScreen: React.FC<Props> = ({ video, onBack, onFinish }) => {
  return (
    <div className="fixed inset-0 z-[200] bg-black animate-fade-in flex flex-col overflow-hidden">
      {/* Header do Player */}
      <header className="p-6 flex items-center justify-between pt-safe">
        <button 
          onClick={onBack} 
          className="w-12 h-12 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center text-white active:scale-90 transition-all"
        >
          <BackIcon />
        </button>
        <div className="text-center truncate px-4">
           <h2 className="text-white font-black text-sm uppercase tracking-widest truncate max-w-[200px]">{video.titulo}</h2>
           <p className="text-rose-500 text-[10px] font-black uppercase">Modo Cinema Ativo</p>
        </div>
        <div className="w-12" />
      </header>

      {/* Container do Vídeo */}
      <div className="flex-grow flex items-center justify-center p-4">
        <div className="w-full max-w-4xl aspect-video rounded-[2rem] overflow-hidden shadow-[0_0_80px_rgba(220,38,38,0.2)] bg-slate-900 border border-white/5">
          <iframe
            src={`${video.url}?modestbranding=1&rel=0&iv_load_policy=3&showinfo=0`}
            title={video.titulo}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>

      {/* Footer com Ações */}
      <footer className="p-8 pb-safe space-y-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-[2.5rem] backdrop-blur-md">
           <div className="flex items-center gap-4 mb-4">
              <span className="text-3xl animate-bounce-soft">🍿</span>
              <div className="flex-grow">
                <h3 className="text-white font-black text-lg">Gostou da aula?</h3>
                <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Marque como concluído para ganhar XP</p>
              </div>
           </div>
           <button 
            onClick={onFinish}
            className="w-full btn-primary py-5 rounded-2xl font-black text-sm shadow-2xl active:scale-95 transition-all"
           >
             CONCLUIR AULA (+40 XP)
           </button>
        </div>
        <div className="text-center">
           <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">Reproduzindo via YouTube Integrado</p>
        </div>
      </footer>
    </div>
  );
};

export default VideoPlayerScreen;
