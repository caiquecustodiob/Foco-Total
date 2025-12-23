
export type BlocoTipo = "materia" | "tema" | "apostila" | "video" | "questao";

export interface BlocoBase {
  id: string;
  tipo: BlocoTipo;
}

export interface MateriaBloco extends BlocoBase {
  tipo: "materia";
  nome: string;
  icone: string;
  cor: string;
}

export interface TemaBloco extends BlocoBase {
  tipo: "tema";
  nome: string;
  materiaId: string;
}

export interface ApostilaBloco extends BlocoBase {
  tipo: "apostila";
  temaId: string;
  titulo: string;
  conteudo: string;
}

export interface VideoBloco extends BlocoBase {
  tipo: "video";
  temaId: string;
  titulo: string;
  url: string;
}

export interface QuestaoBloco extends BlocoBase {
  tipo: "questao";
  temaId: string;
  materiaId: string;
  pergunta: string;
  alternativas: string[];
  correta: number;
  explicacao: string;
}

export type Bloco = MateriaBloco | TemaBloco | ApostilaBloco | VideoBloco | QuestaoBloco;

export type Screen = 'home' | 'biblioteca' | 'simulados' | 'jogos' | 'progresso' | 'leitura';

export interface Conquista {
  id: string;
  titulo: string;
  descricao: string;
  icone: string;
  cor: string;
  requisito: (p: UserProgress) => boolean;
}

export interface UserProgress {
  xp: number;
  streak: number;
  lastActive: string;
  concludedIds: string[];
  unlockedConquistas: string[];
  historico: { id: string; materiaId: string; acerto: boolean; data: string }[];
  metaDiaria: number;
  tempoFocadoHoje: number;
  settings: {
    fontSize: number;
    theme: 'light' | 'dark';
    brightness: number;
    soundEnabled: boolean;
    ambientSoundEnabled: boolean;
  };
}

// Legacy types for compatibility
export interface Topico { id: string; titulo: string; conteudo: string; }
export interface Apostila { materia: string; icone: string; nivel: string; bannerColor: string; topicos: Topico[]; }
export interface Questao { id: string; materia: string; tema: string; pergunta: string; opcoes: string[]; respostaCorreta: number; explicacao: string; materiaId?: string; }
export interface Simulado { id: string; materia: string; icone: string; questoes: Questao[]; }
export interface Dica { titulo: string; conteudo: string; }
export interface Video { videoId: string; titulo: string; descricao: string; }
