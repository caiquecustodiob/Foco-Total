import type { Bloco, Apostila, Simulado, Dica, Video, Conquista } from './types';

export const blocos: Bloco[] = [
  // MATÉRIAS (Mantidas)
  { id: "mat-pt", tipo: "materia", nome: "Português", icone: "📚", cor: "from-blue-600 to-indigo-900" },
  { id: "mat-ma", tipo: "materia", nome: "Matemática", icone: "📐", cor: "from-orange-500 to-red-800" },
  { id: "mat-hi", tipo: "materia", nome: "História", icone: "🏛️", cor: "from-amber-600 to-orange-900" },
  { id: "mat-bi", tipo: "materia", nome: "Biologia", icone: "🌿", cor: "from-emerald-600 to-teal-900" },
  
  // TEMAS
  { id: "tema-pt1", tipo: "tema", nome: "Sintaxe", materiaId: "mat-pt" },
  { id: "tema-ma1", tipo: "tema", nome: "Aritmética", materiaId: "mat-ma" },
  { id: "tema-pt2", tipo: "tema", nome: "Ortografia e Acentuação Gráfica", materiaId: "mat-pt" },

  // APOSTILAS
  { 
    id: "apo-pt1", 
    tipo: "apostila", 
    temaId: "tema-pt1", 
    titulo: "Sujeito e Predicado", 
    conteudo: "[DEF] Sujeito é o termo sobre o qual se declara algo.\n[REG] O verbo deve concordar com o núcleo do sujeito.\n[ALERTA] No sujeito oculto, o termo não aparece mas é identificável.\n\nExemplo: 'Compramos pão'. Sujeito: Nós (Oculto)." 
  },
  { 
    id: "apo-pt2", 
    tipo: "apostila", 
    temaId: "tema-pt2", 
    titulo: "Ortografia e Acentuação Gráfica", 
    conteudo: "[DEF] A ortografia é o conjunto de regras que orienta a escrita correta das palavras.\n[REG] Palavras oxítonas são acentuadas quando terminam em a, e, o, em, ens.\n[REG] Palavras paroxítonas são acentuadas quando não terminam em a, e, o, em, ens.\n[REG] Todas as palavras proparoxítonas são acentuadas.\n[REG] Ditongos abertos como éi, ói, éu recebem acento quando tônicos." 
  },
  
  // VÍDEOS
  {
    id: "vid-pt1",
    tipo: "video",
    temaId: "tema-pt1",
    titulo: "Análise Sintática Completa",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "vid-ma1",
    tipo: "video",
    temaId: "tema-ma1",
    titulo: "Aritmética Básica para Concursos",
    url: "https://www.youtube.com/embed/jNQXAC9IVRw"
  },
  {
    id: "vid-pt2",
    tipo: "video",
    temaId: "tema-pt2",
    titulo: "Acentuação Gráfica: regras gerais",
    url: "https://www.youtube.com/embed/Jsl1orr_k5w"
  },
  {
    id: "vid-pt3",
    tipo: "video",
    temaId: "tema-pt2",
    titulo: "Ortografia e Acentuação para Concurso",
    url: "https://www.youtube.com/embed/NN0IQAx0hA4"
  },
  {
    id: "vid-pt4",
    tipo: "video",
    temaId: "tema-pt2",
    titulo: "Aprenda Acentuação com facilidade!",
    url: "https://www.youtube.com/embed/Ytw1SjnqEJ8"
  },
  {
    id: "vid-pt5",
    tipo: "video",
    temaId: "tema-pt2",
    titulo: "Quiz de Acentuação - Exercícios",
    url: "https://www.youtube.com/embed/kJr9zKfF_do"
  },
  {
    id: "vid-pt6",
    tipo: "video",
    temaId: "tema-pt2",
    titulo: "Ortografia Oficial / Acentuação Aula",
    url: "https://www.youtube.com/embed/BpDHOqagBRo"
  },

  // QUESTÕES
  {
    id: "q1", tipo: "questao", temaId: "tema-pt1", materiaId: "mat-pt",
    pergunta: "Em 'Choveu muito ontem', o sujeito é:",
    alternativas: ["Simples", "Composto", "Oculto", "Inexistente"],
    correta: 3, explicacao: "Verbos de fenômenos da natureza são impessoais."
  },
  {
    id: "q2", tipo: "questao", temaId: "tema-ma1", materiaId: "mat-ma",
    pergunta: "Qual a razão entre 10 e 20?",
    alternativas: ["0.5", "2", "5", "10"],
    correta: 0, explicacao: "10/20 = 1/2 = 0.5."
  },
  {
    id: "q3", tipo: "questao", temaId: "tema-pt2", materiaId: "mat-pt",
    pergunta: "Assinale a alternativa em que todas as palavras estão corretamente acentuadas:",
    alternativas: ["Heroi – Trofeu – Papeis", "Herói – Troféu – Papéis", "Heroí – Trofeú – Papeís", "Herói – Trofeu – Papeis"],
    correta: 1, explicacao: "As palavras “herói”, “troféu” e “papéis” seguem as regras de acentuação para oxítonas e paroxítonas terminadas em ditongo aberto."
  },
  {
    id: "q4", tipo: "questao", temaId: "tema-pt2", materiaId: "mat-pt",
    pergunta: "Marque a alternativa em que a palavra está acentuada INCORRETAMENTE:",
    alternativas: ["Fácil", "Lâmpada", "Ideía", "Órgão"],
    correta: 2, explicacao: "A palavra correta é ideia, sem acento, conforme as novas regras ortográficas (ditongos abertos em paroxítonas não são acentuados)."
  },
  {
    id: "q5", tipo: "questao", temaId: "tema-pt2", materiaId: "mat-pt",
    pergunta: "Todas as palavras abaixo são proparoxítonas, EXCETO:",
    alternativas: ["Médico", "Rápido", "Árvore", "Café"],
    correta: 3, explicacao: "“Café” é oxítona, pois a sílaba tônica é a última."
  }
];

export const CONQUISTAS_BASE: Conquista[] = [
  {
    id: 'first-steps',
    titulo: 'Primeiros Passos',
    descricao: 'Ganhou seus primeiros 100 XP',
    icone: '🥇',
    cor: 'from-blue-400 to-blue-600',
    requisito: (p) => p.xp >= 100
  },
  {
    id: 'marathoner',
    titulo: 'Maratonista',
    descricao: 'Concluiu 5 apostilas de estudo',
    icone: '🏃',
    cor: 'from-orange-400 to-red-600',
    requisito: (p) => p.concludedIds.length >= 5
  },
  {
    id: 'sniper',
    titulo: 'Sniper de Questões',
    descricao: 'Acertou 10 questões seguidas',
    icone: '🎯',
    cor: 'from-emerald-400 to-teal-600',
    requisito: (p) => p.streak >= 10
  },
  {
    id: 'xp-master',
    titulo: 'Lenda do ENEM',
    descricao: 'Atingiu a marca de 5.000 XP',
    icone: '🏆',
    cor: 'from-yellow-400 to-yellow-600',
    requisito: (p) => p.xp >= 5000
  },
  {
    id: 'daily-foco',
    titulo: 'Foco de Ferro',
    descricao: 'Completou a meta diária hoje',
    icone: '🛡️',
    cor: 'from-purple-400 to-purple-600',
    requisito: (p) => p.tempoFocadoHoje >= p.metaDiaria * 60
  }
];

export const APOSTILAS_DATA: Apostila[] = [
  { materia: "Português", icone: "📚", nivel: "Iniciante", bannerColor: "from-blue-600 to-indigo-900", topicos: [{ id: "apo-pt1", titulo: "Sujeito e Predicado", conteudo: "..." }] }
];
export const SIMULADOS_DATA: Simulado[] = [
  { id: "sim-1", materia: "Linguagens", icone: "📝", questoes: [{ id: "q1", materia: "Português", tema: "Sintaxe", pergunta: "...", opcoes: ["A","B","C","D"], respostaCorreta: 3, explicacao: "..." }] }
];
export const DICAS_DATA: Dica[] = [{ titulo: "Foco", conteudo: "..." }];
export const VIDEOS_DATA: Video[] = [{ videoId: "dQw4w9WgXcQ", titulo: "Video", descricao: "..." }];
