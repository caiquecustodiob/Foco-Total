import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Registro do Service Worker para PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').then(registration => {
      console.log('SW registrado com sucesso:', registration.scope);
    }, err => {
      console.log('Falha ao registrar SW:', err);
    });
  });
}

// Launch Queue API para lidar com abertura de arquivos .foco
if ('launchQueue' in window) {
  (window as any).launchQueue.setConsumer(async (params: any) => {
    if (params.files.length > 0) {
      const file = await params.files[0].getFile();
      const text = await file.text();
      try {
        const data = JSON.parse(text);
        // Dispara evento customizado para o App processar o import
        window.dispatchEvent(new CustomEvent('foco-import-data', { detail: data }));
      } catch (e) {
        console.error("Erro ao importar arquivo de lançamento:", e);
      }
    }
  });
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);