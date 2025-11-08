
import React from 'react';
import { VIDEOS_DATA } from '../data';

const VideoaulasScreen: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <h2 className="text-2xl font-bold mb-4">Videoaulas</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-6">Aulas selecionadas para reforçar seus conhecimentos.</p>
      <div className="space-y-6">
        {VIDEOS_DATA.map((video, index) => (
          <div key={index} className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${video.videoId}`}
                title={video.titulo}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1">{video.titulo}</h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">{video.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoaulasScreen;
