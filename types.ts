export type Screen = 'home' | 'apostilas' | 'simulados' | 'dicas' | 'videoaulas' | 'progresso';

export interface Topico {
  titulo: string;
  conteudo: string;
}

export interface Apostila {
  materia: string;
  icone: string;
  topicos: Topico[];
}

export interface Questao {
  pergunta: string;
  opcoes: string[];
  respostaCorreta: number; // index of the correct option
  explicacao: string;
}

export interface Simulado {
  materia: string;
  icone: string;
  questoes: Questao[];
}

export interface Dica {
  titulo: string;
  conteudo: string;
}

export interface Video {
  videoId: string;
  titulo: string;
  descricao: string;
}

export interface ProgressoSimulado {
  materia: string;
  data: string; // ISO string
  acertos: number;
  total: number;
}