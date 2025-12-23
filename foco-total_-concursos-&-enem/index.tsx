
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

// Registro do Service Worker usando caminho relativo estrito
// Isso resolve o erro de 'origin mismatch' em ambientes de sandbox e na Vercel
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw.js') // Sem a barra inicial para ser relativo ao diretório atual
      .then(registration => {
        console.log('✅ Service Worker registrado com sucesso:', registration.scope);
      })
      .catch(err => {
        console.warn('⚠️ Falha no SW (comum em previews/iframes):', err.message);
      });
  });
}

// Launch Queue API para suporte a arquivos nativos .foco
if ('launchQueue' in window) {
  (window as any).launchQueue.setConsumer(async (params: any) => {
    if (params.files.length > 0) {
      const file = await params.files[0].getFile();
      const text = await file.text();
      try {
        const data = JSON.parse(text);
        window.dispatchEvent(new CustomEvent('foco-import-data', { detail: data }));
      } catch (e) {
        console.error("Erro ao processar arquivo de backup:", e);
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
