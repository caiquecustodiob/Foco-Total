import type { Bloco, Apostila, Simulado, Dica, Video, Conquista } from './types';

export const blocos: Bloco[] = [
  // MATÉRIAS (Mantidas)
  { id: "mat-pt", tipo: "materia", nome: "Português", icone: "📚", cor: "from-blue-600 to-indigo-900" },
  { id: "mat-ma", tipo: "materia", nome: "Matemática", icone: "📐", cor: "from-orange-500 to-red-800" },
  { id: "mat-hi", tipo: "materia", nome: "História", icone: "🏛️", cor: "from-amber-600 to-orange-900" },
  { id: "mat-bi", tipo: "materia", nome: "Biologia", icone: "🌿", cor: "from-emerald-600 to-teal-900" },
  { id: "mat-fi", tipo: "materia", nome: "Física", icone: "⚡", cor: "from-violet-600 to-purple-900" },
  { id: "mat-ge", tipo: "materia", nome: "Geografia", icone: "🌍", cor: "from-sky-500 to-blue-800" },
  { id: "mat-qui", tipo: "materia", nome: "Química", icone: "🧪", cor: "from-lime-500 to-green-800" },
  { id: "mat-lit", tipo: "materia", nome: "Literatura", icone: "📖", cor: "from-rose-500 to-pink-900" },
  { id: "mat-ing", tipo: "materia", nome: "Inglês", icone: "🇬🇧", cor: "from-red-600 to-blue-900" },
  { id: "mat-fin", tipo: "materia", nome: "Ed. Financeira", icone: "💰", cor: "from-green-500 to-emerald-900" },
  { id: "mat-prog", tipo: "materia", nome: "Programação", icone: "💻", cor: "from-slate-700 to-black" },

  // MATÉRIAS (Novas - Input Bruto)
  { id: "mat-soc", tipo: "materia", nome: "Sociologia", icone: "🤝", cor: "from-pink-600 to-rose-900" },
  { id: "mat-fil", tipo: "materia", nome: "Filosofia", icone: "🤔", cor: "from-yellow-600 to-amber-900" },
  { id: "mat-red", tipo: "materia", nome: "Redação", icone: "✍️", cor: "from-red-500 to-orange-700" },

  // TEMAS (Existentes)
  { id: "tema-pt1", tipo: "tema", nome: "Sintaxe", materiaId: "mat-pt" },
  { id: "tema-ma1", tipo: "tema", nome: "Aritmética", materiaId: "mat-ma" },
  { id: "tema-pt2", tipo: "tema", nome: "Ortografia e Acentuação Gráfica", materiaId: "mat-pt" },
  { id: "tema-ma2", tipo: "tema", nome: "Porcentagem", materiaId: "mat-ma" },
  { id: "tema-bi1", tipo: "tema", nome: "Fotossíntese", materiaId: "mat-bi" },
  { id: "tema-hi1", tipo: "tema", nome: "Brasil Colônia", materiaId: "mat-hi" },
  { id: "tema-bi2", tipo: "tema", nome: "Ecologia e Cadeias", materiaId: "mat-bi" },
  { id: "tema-fi1", tipo: "tema", nome: "Mecânica Clássica", materiaId: "mat-fi" },
  { id: "tema-ge1", tipo: "tema", nome: "Astronomia Básica", materiaId: "mat-ge" },
  { id: "tema-qui1", tipo: "tema", nome: "Reações Químicas", materiaId: "mat-qui" },
  { id: "tema-lit1", tipo: "tema", nome: "Escolas Literárias", materiaId: "mat-lit" },
  { id: "tema-lit2", tipo: "tema", nome: "Romantismo", materiaId: "mat-lit" },
  { id: "tema-ing1", tipo: "tema", nome: "Gramática Básica", materiaId: "mat-ing" },
  { id: "tema-fin1", tipo: "tema", nome: "Planejamento Financeiro", materiaId: "mat-fin" },
  { id: "tema-prog1", tipo: "tema", nome: "Lógica de Programação", materiaId: "mat-prog" },

  // TEMAS (Novos - Input Bruto)
  { id: "tema-ge2", tipo: "tema", nome: "Globalização", materiaId: "mat-ge" },
  { id: "tema-soc1", tipo: "tema", nome: "Cidadania e Direitos", materiaId: "mat-soc" },
  { id: "tema-fil1", tipo: "tema", nome: "Ética e Moral", materiaId: "mat-fil" },
  { id: "tema-qui2", tipo: "tema", nome: "Química Ambiental", materiaId: "mat-qui" },
  { id: "tema-fi2", tipo: "tema", nome: "Energia e Sustentabilidade", materiaId: "mat-fi" },
  { id: "tema-ma3", tipo: "tema", nome: "Juros Simples e Compostos", materiaId: "mat-ma" },
  { id: "tema-red1", tipo: "tema", nome: "Competência 5 (Intervenção)", materiaId: "mat-red" },

  // APOSTILAS (Existentes)
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
  { id: "apo-bi1", tipo: "apostila", temaId: "tema-bi1", titulo: "Processo da Fotossíntese", conteudo: "[DEF] Processo bioquímico onde plantas transformam luz solar e CO₂ em glicose e O₂.\n[REG] Ocorre nos Cloroplastos, contendo Clorofila.\n\n[ETAPAS]\n1. Fase Clara (Tilacoides): Usa luz e H₂O para gerar ATP e NADPH.\n2. Fase Escura (Estroma/Ciclo de Calvin): Usa ATP, NADPH e CO₂ para criar Glicose.\n\n[ALERTA] Essencial para liberar oxigênio na atmosfera." },
  { id: "apo-hi1", tipo: "apostila", temaId: "tema-hi1", titulo: "Resumo Brasil Colônia", conteudo: "[DEF] Período de 1500 a 1822 sob domínio português.\n[ECONOMIA] Baseada em Plantation: Latifúndio, Monocultura e Escravidão.\n\n[CICLOS]\n1. Pau-Brasil (Extração)\n2. Cana-de-Açúcar (Engenhos)\n3. Mineração (Ouro em MG)\n\n[REG] Pacto Colonial: Comércio exclusivo com a Metrópole." },
  { id: "apo-bi2", tipo: "apostila", temaId: "tema-bi2", titulo: "Cadeias Alimentares", conteudo: "[DEF] Sequência linear de transferência de energia e nutrientes.\n[ESTRUTURA]\n1. Produtores: Autótrofos (Plantas).\n2. Consumidores: Primários (Herbívoros), Secundários, Terciários.\n3. Decompositores: Fungos/Bactérias (Reciclagem).\n\n[ALERTA] A energia diminui a cada nível trófico que sobe." },
  { id: "apo-fi1", tipo: "apostila", temaId: "tema-fi1", titulo: "As 3 Leis de Newton", conteudo: "[DEF] Princípios fundamentais da mecânica.\n\n1. Lei da Inércia: Um corpo tende a manter seu estado (repouso ou MRU) salvo força externa.\n2. Princípio Fundamental: F = m . a (Força é massa vezes aceleração).\n3. Ação e Reação: Para toda força aplicada, existe outra de igual intensidade e sentido oposto." },
  { id: "apo-ge1", tipo: "apostila", temaId: "tema-ge1", titulo: "Sistema Solar", conteudo: "[DEF] Conjunto de corpos orbitando o Sol.\n[REG] Planetas Rochosos: Mercúrio, Vênus, Terra, Marte.\n[REG] Planetas Gasosos: Júpiter, Saturno, Urano, Netuno.\n\n[CONCEITOS]\nRotação: Giro no eixo (Dia).\nTranslação: Giro ao redor do Sol (Ano)." },
  { id: "apo-qui1", tipo: "apostila", temaId: "tema-qui1", titulo: "Reações Químicas", conteudo: "[DEF] Transformação de Reagentes em Produtos com conservação de massa (Lavoisier).\n\n[TIPOS]\n1. Síntese (A+B -> C)\n2. Decomposição (C -> A+B)\n3. Simples Troca (A+BC -> AC+B)\n4. Dupla Troca (AB+CD -> AD+CB)\n\n[ENERGIA] Endotérmica (Absorve) vs Exotérmica (Libera)." },
  { id: "apo-lit1", tipo: "apostila", temaId: "tema-lit1", titulo: "Introdução às Escolas Literárias", conteudo: "[DEF] Movimentos artísticos influenciados pelo contexto histórico.\n\n[RESUMO]\n- Classicismo: Razão e equilíbrio.\n- Romantismo: Emoção e subjetividade.\n- Realismo: Crítica social e objetividade.\n- Modernismo: Ruptura e liberdade.\n\n[REG] A literatura reflete a sociedade de sua época." },
  { id: "apo-lit2", tipo: "apostila", temaId: "tema-lit2", titulo: "Romantismo no Brasil", conteudo: "[CTX] Pós-independência (1822), busca pela identidade nacional.\n\n[GERAÇÕES]\n1ª Indianista: O índio como herói (Gonçalves Dias, José de Alencar).\n2ª Ultrarromântica: Pessimismo, morte, 'Mal do Século' (Álvares de Azevedo).\n3ª Condoreira: Social e abolicionista (Castro Alves)." },
  { id: "apo-ing1", tipo: "apostila", temaId: "tema-ing1", titulo: "Simple Present Tense", conteudo: "[USO] Hábitos, rotinas e verdades universais.\n\n[REGRA HE/SHE/IT]\nAfirmativa: Verbo ganha 's' ou 'es'. (Ex: She works).\nNegativa: Usa 'Does not'. (Ex: He does not play).\nInterrogativa: 'Does' antes do sujeito. (Ex: Does it work?)\n\n[RESTO] Usa-se 'Do/Don't' para I, You, We, They." },
  { id: "apo-fin1", tipo: "apostila", temaId: "tema-fin1", titulo: "Orçamento e Planejamento", conteudo: "[DEF] Controle de receitas e despesas.\n[REGRA 50-30-20]\n- 50% Necessidades Básicas (Fixas)\n- 30% Desejos (Variáveis)\n- 20% Poupança/Investimentos\n\n[DICA] Crie uma Reserva de Emergência (3 a 6 meses de custo de vida) antes de investir com risco." },
  { id: "apo-prog1", tipo: "apostila", temaId: "tema-prog1", titulo: "Lógica e Algoritmos", conteudo: "[DEF] Algoritmo é uma sequência finita de passos para resolver um problema.\n\n[ESTRUTURAS]\n1. Variáveis: Armazenam dados.\n2. Condicionais (If/Else): Tomada de decisão.\n3. Loops (For/While): Repetição de tarefas.\n\n[REG] A lógica independe da linguagem de programação (JS, Python, etc)." },

  // APOSTILAS (Novas - Input Bruto Processado)
  {
    id: "apo-ge2",
    tipo: "apostila",
    temaId: "tema-ge2",
    titulo: "Globalização",
    conteudo: "[DEF] Processo de integração econômica, cultural, social e tecnológica entre países.\n\n[IMPULSORES]\nAvanços em transportes e telecomunicações (Internet).\n\n[CARACTERÍSTICAS]\n1. Integração de mercados internacionais.\n2. Multinacionais dominantes.\n3. Padronização cultural.\n\n[CRÍTICA] Aumenta desigualdades e dependência dos países periféricos."
  },
  {
    id: "apo-soc1",
    tipo: "apostila",
    temaId: "tema-soc1",
    titulo: "Cidadania e Direitos",
    conteudo: "[DEF] Cidadania: conjunto de direitos e deveres para participação na sociedade.\n\n[TIPOS DE DIREITOS]\n1. Civis: Liberdade individual, vida.\n2. Políticos: Voto, participação.\n3. Sociais: Saúde, educação, moradia.\n\n[CTX] Constituição de 1988 é chamada de 'Constituição Cidadã'."
  },
  {
    id: "apo-fil1",
    tipo: "apostila",
    temaId: "tema-fil1",
    titulo: "Ética e Moral",
    conteudo: "[DIFERENÇA]\n- Moral: Prática cotidiana, costumes de um grupo (O que fazemos).\n- Ética: Reflexão crítica sobre a moral (Por que fazemos?).\n\n[HISTÓRIA] Aristóteles via a ética como busca da virtude e equilíbrio. Hoje, discute-se bioética e ética digital."
  },
  {
    id: "apo-qui2",
    tipo: "apostila",
    temaId: "tema-qui2",
    titulo: "Química Ambiental",
    conteudo: "[DEF] Estudo das transformações químicas no meio ambiente e ação humana.\n\n[POLUIÇÃO]\n- Atmosférica: CO₂, SO₂ (Efeito Estufa, Chuva Ácida).\n- Hídrica: Esgoto, metais pesados.\n- Solo: Agrotóxicos.\n\n[FOCO] Sustentabilidade e redução de impactos."
  },
  {
    id: "apo-fi2",
    tipo: "apostila",
    temaId: "tema-fi2",
    titulo: "Energia e Sustentabilidade",
    conteudo: "[FONTES RENOVÁVEIS] Solar, Eólica, Hidrelétrica, Biomassa. Menor impacto.\n[FONTES NÃO RENOVÁVEIS] Petróleo, Carvão, Gás Natural. Emitem poluentes.\n\n[ANÁLISE] O desafio é manter a produção energética reduzindo o impacto ambiental."
  },
  {
    id: "apo-ma3",
    tipo: "apostila",
    temaId: "tema-ma3",
    titulo: "Juros Simples e Compostos",
    conteudo: "[DEF] Juros são o custo do dinheiro no tempo.\n\n[SIMPLES] Calculado apenas sobre o valor inicial (Principal). Crescimento linear.\n[COMPOSTOS] Juros sobre juros. Calculado sobre o montante acumulado. Crescimento exponencial.\n\n[USO] Financiamentos e investimentos usam juros compostos."
  },
  {
    id: "apo-red1",
    tipo: "apostila",
    temaId: "tema-red1",
    titulo: "Proposta de Intervenção (Comp. 5)",
    conteudo: "[OBJETIVO] Solucionar o problema apresentado no tema.\n\n[ELEMENTOS OBRIGATÓRIOS]\n1. Agente (Quem?)\n2. Ação (O quê?)\n3. Meio/Modo (Como?)\n4. Finalidade (Para quê?)\n5. Detalhamento (Explicação extra de um dos elementos).\n\n[DICA] Deve respeitar os Direitos Humanos."
  },

  // VÍDEOS (Existentes - Mantidos)
  { id: "vid-pt1", tipo: "video", temaId: "tema-pt1", titulo: "Análise Sintática Completa", url: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
  { id: "vid-ma1", tipo: "video", temaId: "tema-ma1", titulo: "Aritmética Básica para Concursos", url: "https://www.youtube.com/embed/jNQXAC9IVRw" },
  { id: "vid-pt2", tipo: "video", temaId: "tema-pt2", titulo: "Acentuação Gráfica: regras gerais", url: "https://www.youtube.com/embed/Jsl1orr_k5w" },
  { id: "vid-pt3", tipo: "video", temaId: "tema-pt2", titulo: "Ortografia e Acentuação para Concurso", url: "https://www.youtube.com/embed/NN0IQAx0hA4" },
  { id: "vid-pt4", tipo: "video", temaId: "tema-pt2", titulo: "Aprenda Acentuação com facilidade!", url: "https://www.youtube.com/embed/Ytw1SjnqEJ8" },
  { id: "vid-pt5", tipo: "video", temaId: "tema-pt2", titulo: "Quiz de Acentuação - Exercícios", url: "https://www.youtube.com/embed/kJr9zKfF_do" },
  { id: "vid-pt6", tipo: "video", temaId: "tema-pt2", titulo: "Ortografia Oficial / Acentuação Aula", url: "https://www.youtube.com/embed/BpDHOqagBRo" },
  { id: "vid-ma2", tipo: "video", temaId: "tema-ma2", titulo: "Aula completa de Porcentagem", url: "https://www.youtube.com/embed/K2VpvKMWddw" },
  { id: "vid-ma3", tipo: "video", temaId: "tema-ma2", titulo: "Como calcular porcentagens - Aula 02", url: "https://www.youtube.com/embed/6YLj3yWtHqA" },
  { id: "vid-ma4", tipo: "video", temaId: "tema-ma2", titulo: "Porcentagem: Aumento e Descontos", url: "https://www.youtube.com/embed/Ht1_WbzJwCI" },
  { id: "vid-bi1", tipo: "video", temaId: "tema-bi1", titulo: "FOTOSSÍNTESE: Fase clara e escura", url: "https://www.youtube.com/embed/SDNc_5qXa0Q" },
  { id: "vid-bi2", tipo: "video", temaId: "tema-bi1", titulo: "Resumo sobre Fotossíntese", url: "https://www.youtube.com/embed/fHC6M7xncds" },
  { id: "vid-bi3", tipo: "video", temaId: "tema-bi1", titulo: "Mecanismo e energia nas plantas", url: "https://www.youtube.com/embed/PT-0967OfKQ" },
  { id: "vid-bi4", tipo: "video", temaId: "tema-bi1", titulo: "Live: Fotossíntese no ENEM", url: "https://www.youtube.com/embed/jlnxCsAnSjo" },
  { id: "vid-hi1", tipo: "video", temaId: "tema-hi1", titulo: "Brasil Colônia: A História Resumida", url: "https://www.youtube.com/embed/p6IxQbme1pI" },
  { id: "vid-hi2", tipo: "video", temaId: "tema-hi1", titulo: "O BRASIL COLÔNIA — Aula Completa", url: "https://www.youtube.com/embed/qtwz_HKqUUg" },
  { id: "vid-hi3", tipo: "video", temaId: "tema-hi1", titulo: "História do Brasil Colonial Detalhada", url: "https://www.youtube.com/embed/Rm-4PXb_LCw" },
  { id: "vid-hi4", tipo: "video", temaId: "tema-hi1", titulo: "Colonial Brazil (English)", url: "https://www.youtube.com/embed/ocjJ8bKEQ3Q" },

  // VÍDEOS (Novos - Correspondentes ao Input Bruto)
  { id: "vid-ge2", tipo: "video", temaId: "tema-ge2", titulo: "Globalização: Resumo para o ENEM", url: "https://www.youtube.com/embed/3U_mIq2P7P0" },
  { id: "vid-soc1", tipo: "video", temaId: "tema-soc1", titulo: "Direitos Humanos e Cidadania", url: "https://www.youtube.com/embed/uG6Xv0dYJ2U" },
  { id: "vid-fil1", tipo: "video", temaId: "tema-fil1", titulo: "Ética e Moral: Qual a diferença?", url: "https://www.youtube.com/embed/O4M51w0M_j8" },
  { id: "vid-qui2", tipo: "video", temaId: "tema-qui2", titulo: "Química Ambiental - Chuva Ácida e Estufa", url: "https://www.youtube.com/embed/Rk0H9gQd1k0" },
  { id: "vid-fi2", tipo: "video", temaId: "tema-fi2", titulo: "Fontes de Energia Renováveis e Não Renováveis", url: "https://www.youtube.com/embed/q9S0o9dGk2U" },
  { id: "vid-ma5", tipo: "video", temaId: "tema-ma3", titulo: "Juros Simples vs Compostos", url: "https://www.youtube.com/embed/_yY3jXqXg2U" },
  { id: "vid-red1", tipo: "video", temaId: "tema-red1", titulo: "Redação ENEM: Proposta de Intervenção", url: "https://www.youtube.com/embed/8v6zZ8Y9a1s" },

  // QUESTÕES (Existentes)
  { id: "q1", tipo: "questao", temaId: "tema-pt1", materiaId: "mat-pt", pergunta: "Em 'Choveu muito ontem', o sujeito é:", alternativas: ["Simples", "Composto", "Oculto", "Inexistente"], correta: 3, explicacao: "Verbos de fenômenos da natureza são impessoais." },
  { id: "q2", tipo: "questao", temaId: "tema-ma1", materiaId: "mat-ma", pergunta: "Qual a razão entre 10 e 20?", alternativas: ["0.5", "2", "5", "10"], correta: 0, explicacao: "10/20 = 1/2 = 0.5." },
  { id: "q3", tipo: "questao", temaId: "tema-pt2", materiaId: "mat-pt", pergunta: "Assinale a alternativa em que todas as palavras estão corretamente acentuadas:", alternativas: ["Heroi – Trofeu – Papeis", "Herói – Troféu – Papéis", "Heroí – Trofeú – Papeís", "Herói – Trofeu – Papeis"], correta: 1, explicacao: "As palavras “herói”, “troféu” e “papéis” seguem as regras de acentuação para oxítonas e paroxítonas terminadas em ditongo aberto." },
  { id: "q4", tipo: "questao", temaId: "tema-pt2", materiaId: "mat-pt", pergunta: "Marque a alternativa em que a palavra está acentuada INCORRETAMENTE:", alternativas: ["Fácil", "Lâmpada", "Ideía", "Órgão"], correta: 2, explicacao: "A palavra correta é ideia, sem acento, conforme as novas regras ortográficas (ditongos abertos em paroxítonas não são acentuados)." },
  { id: "q5", tipo: "questao", temaId: "tema-pt2", materiaId: "mat-pt", pergunta: "Todas as palavras abaixo são proparoxítonas, EXCETO:", alternativas: ["Médico", "Rápido", "Árvore", "Café"], correta: 3, explicacao: "“Café” é oxítona, pois a sílaba tônica é a última." },
  { id: "q6", tipo: "questao", temaId: "tema-bi1", materiaId: "mat-bi", pergunta: "Onde ocorre a fase escura (Ciclo de Calvin) da fotossíntese?", alternativas: ["Nos tilacoides", "No estroma", "Na mitocôndria", "No núcleo"], correta: 1, explicacao: "A fase escura ocorre no estroma do cloroplasto, onde o CO₂ é fixado." },
  { id: "q7", tipo: "questao", temaId: "tema-hi1", materiaId: "mat-hi", pergunta: "Qual sistema econômico predominou no Brasil Colônia?", alternativas: ["Industrialização", "Feudalismo", "Plantation", "Mercantilismo Digital"], correta: 2, explicacao: "O Plantation se baseava em latifúndio, monocultura e mão de obra escrava." },
  { id: "q8", tipo: "questao", temaId: "tema-fi1", materiaId: "mat-fi", pergunta: "Pela 2ª Lei de Newton, se a força resultante é constante e a massa dobra, a aceleração:", alternativas: ["Dobra", "Cai pela metade", "Permanece igual", "Triplica"], correta: 1, explicacao: "Como a = F/m, massa e aceleração são inversamente proporcionais para uma mesma força." },
  { id: "q9", tipo: "questao", temaId: "tema-ge1", materiaId: "mat-ge", pergunta: "Qual destes planetas é considerado um 'Planeta Gasoso'?", alternativas: ["Marte", "Terra", "Vênus", "Júpiter"], correta: 3, explicacao: "Júpiter é um gigante gasoso, diferentemente dos três primeiros que são rochosos." },
  { id: "q10", tipo: "questao", temaId: "tema-lit2", materiaId: "mat-lit", pergunta: "Qual característica NÃO pertence à 2ª Geração do Romantismo?", alternativas: ["Pessimismo", "Exaltação da morte", "Nacionalismo ufanista", "Subjetividade"], correta: 2, explicacao: "O nacionalismo e o indianismo são marcos da 1ª Geração, não da 2ª (Ultrarromântica)." },
  { id: "q11", tipo: "questao", temaId: "tema-ing1", materiaId: "mat-ing", pergunta: "Complete corretamente: 'She _____ soccer every weekend.'", alternativas: ["play", "playing", "plays", "played"], correta: 2, explicacao: "No Simple Present, terceira pessoa do singular (She) recebe 's' no verbo." },
  { id: "q12", tipo: "questao", temaId: "tema-fin1", materiaId: "mat-fin", pergunta: "Na regra 50-30-20, o que os 20% representam?", alternativas: ["Dívidas", "Poupança e Investimentos", "Lazer", "Aluguel"], correta: 1, explicacao: "20% devem ser destinados à construção de patrimônio e reserva financeira." },
  { id: "q13", tipo: "questao", temaId: "tema-prog1", materiaId: "mat-prog", pergunta: "Qual estrutura é utilizada para tomada de decisão em algoritmos?", alternativas: ["Loop For", "Variável", "If / Else", "Array"], correta: 2, explicacao: "If/Else (Se/Senão) permite desviar o fluxo do código baseado em uma condição." },

  // QUESTÕES (Novas - Do Input Bruto)
  {
    id: "q14", tipo: "questao", temaId: "tema-ge2", materiaId: "mat-ge",
    pergunta: "Qual das opções abaixo é uma característica marcante da Globalização?",
    alternativas: ["Isolamento cultural extremo", "Fortalecimento das barreiras comerciais", "Padronização cultural e integração de mercados", "Fim das desigualdades sociais"],
    correta: 2, explicacao: "A globalização promove a difusão de marcas, hábitos e fluxo econômico mundial."
  },
  {
    id: "q15", tipo: "questao", temaId: "tema-soc1", materiaId: "mat-soc",
    pergunta: "Direitos que garantem a participação política, como o voto, são classificados como:",
    alternativas: ["Direitos Civis", "Direitos Políticos", "Direitos Sociais", "Direitos Ambientais"],
    correta: 1, explicacao: "Direitos políticos referem-se à atuação do cidadão no governo, seja votando ou sendo votado."
  },
  {
    id: "q16", tipo: "questao", temaId: "tema-fil1", materiaId: "mat-fil",
    pergunta: "Segundo o texto, qual a principal diferença entre Ética e Moral?",
    alternativas: ["São sinônimos exatos", "Moral é a teoria e Ética é a prática", "Moral é a prática (costumes) e Ética é a reflexão sobre ela", "Nenhuma das anteriores"],
    correta: 2, explicacao: "A moral dita o comportamento aceito (normas), enquanto a ética questiona e fundamenta essas normas."
  },
  {
    id: "q17", tipo: "questao", temaId: "tema-qui2", materiaId: "mat-qui",
    pergunta: "Qual gás é o principal responsável pela intensificação do Efeito Estufa citado no texto?",
    alternativas: ["Oxigênio (O₂)", "Dióxido de Carbono (CO₂)", "Nitrogênio (N₂)", "Hélio (He)"],
    correta: 1, explicacao: "A queima de combustíveis fósseis libera CO₂, que retém calor na atmosfera."
  },
  {
    id: "q18", tipo: "questao", temaId: "tema-fi2", materiaId: "mat-fi",
    pergunta: "Qual das fontes de energia abaixo NÃO é renovável?",
    alternativas: ["Eólica", "Carvão Mineral", "Biomassa", "Solar"],
    correta: 1, explicacao: "Carvão mineral é um combustível fóssil finito e altamente poluente."
  },
  {
    id: "q19", tipo: "questao", temaId: "tema-ma3", materiaId: "mat-ma",
    pergunta: "A principal diferença entre juros simples e compostos é que:",
    alternativas: ["Os simples crescem mais rápido a longo prazo", "Os compostos incidem sobre o valor acumulado (juros sobre juros)", "Os simples são usados em investimentos bancários", "Não há diferença matemática"],
    correta: 1, explicacao: "No regime composto, o juro de cada período é incorporado ao capital para o cálculo do próximo período."
  },
  {
    id: "q20", tipo: "questao", temaId: "tema-red1", materiaId: "mat-red",
    pergunta: "Na Competência 5 da Redação ENEM, o que é o 'Agente'?",
    alternativas: ["O modo como a ação será feita", "A finalidade da ação", "Quem executará a ação", "O problema abordado"],
    correta: 2, explicacao: "O Agente é o ator social responsável por colocar a proposta em prática (ex: Governo, Mídia, Escola)."
  },

  // QUESTÕES (VISIONÁRIO - Nível Difícil Extras)
  {
    id: "q21", tipo: "questao", temaId: "tema-ge2", materiaId: "mat-ge",
    pergunta: "Sobre a Divisão Internacional do Trabalho (DIT) na Globalização, é correto afirmar:",
    alternativas: ["Países desenvolvidos exportam apenas matérias-primas", "Países periféricos focam em tecnologia de ponta", "Ocorre uma descentralização produtiva, onde países periféricos oferecem mão de obra barata e matéria-prima", "As multinacionais evitam instalar fábricas em países subdesenvolvidos"],
    correta: 2, explicacao: "As empresas buscam maximizar lucros instalando linhas de montagem onde o custo produtivo e as leis trabalhistas são mais flexíveis."
  },
  {
    id: "q22", tipo: "questao", temaId: "tema-ma3", materiaId: "mat-ma",
    pergunta: "Um capital de R$ 1.000,00 aplicado a 10% ao mês. Após 2 meses, qual a diferença (em reais) entre o montante gerado por Juros Compostos e Juros Simples?",
    alternativas: ["R$ 0,00", "R$ 10,00", "R$ 20,00", "R$ 100,00"],
    correta: 1, explicacao: "Simples: 1000 + 100 + 100 = 1200. Compostos: Mês 1 (1100), Mês 2 (1100 + 10% de 1100 = 1210). Diferença: 1210 - 1200 = R$ 10,00."
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
  },
  // NOVAS CONQUISTAS BASEADAS EM EXPANSÃO DE CONTEÚDO
  {
    id: 'math-genius',
    titulo: 'Calculadora Humana',
    descricao: 'Dominou os conceitos de Matemática',
    icone: '🧮',
    cor: 'from-red-400 to-orange-600',
    requisito: (p) => p.concludedIds.filter(id => id.includes('ma')).length >= 3
  },
  {
    id: 'bio-explorer',
    titulo: 'Novo Darwin',
    descricao: 'Explorou os mistérios da Biologia',
    icone: '🧬',
    cor: 'from-emerald-400 to-green-600',
    requisito: (p) => p.concludedIds.filter(id => id.includes('bi')).length >= 3
  },
  {
    id: 'history-traveler',
    titulo: 'Viajante do Tempo',
    descricao: 'Mergulhou fundo na História',
    icone: '⏳',
    cor: 'from-amber-400 to-yellow-700',
    requisito: (p) => p.concludedIds.filter(id => id.includes('hi')).length >= 3
  },
  {
    id: 'phys-master',
    titulo: 'Novo Einstein',
    descricao: 'Descobriu as leis da Física',
    icone: '⚡',
    cor: 'from-violet-400 to-purple-600',
    requisito: (p) => p.concludedIds.filter(id => id.includes('fi')).length >= 1
  },
  {
    id: 'geo-explorer',
    titulo: 'Mapeador de Mundos',
    descricao: 'Estudou Geografia e o universo',
    icone: '🌍',
    cor: 'from-sky-400 to-blue-600',
    requisito: (p) => p.concludedIds.filter(id => id.includes('ge')).length >= 1
  },
  {
    id: 'polyglot',
    titulo: 'Poliglota em Breve',
    descricao: 'Iniciou os estudos de Inglês',
    icone: '🗣️',
    cor: 'from-red-400 to-blue-600',
    requisito: (p) => p.concludedIds.filter(id => id.includes('ing')).length >= 1
  },
  {
    id: 'finance-guru',
    titulo: 'Lobo de Wall Street',
    descricao: 'Aprendeu sobre dinheiro e finanças',
    icone: '💼',
    cor: 'from-green-400 to-emerald-600',
    requisito: (p) => p.concludedIds.filter(id => id.includes('fin')).length >= 1
  },
  {
    id: 'prog-hacker',
    titulo: 'Hello World',
    descricao: 'Escreveu seus primeiros algoritmos',
    icone: '💻',
    cor: 'from-gray-400 to-gray-800',
    requisito: (p) => p.concludedIds.filter(id => id.includes('prog')).length >= 1
  },
  // NOVA CONQUISTA (VISIONÁRIO)
  {
    id: 'thinker-supreme',
    titulo: 'Pensador Crítico',
    descricao: 'Estudou Filosofia e Sociologia',
    icone: '🧠',
    cor: 'from-pink-400 to-amber-600',
    requisito: (p) => {
      const fil = p.concludedIds.some(id => id.includes('fil'));
      const soc = p.concludedIds.some(id => id.includes('soc'));
      return fil && soc;
    }
  }
];

export const APOSTILAS_DATA: Apostila[] = [
  { 
    materia: "Português", 
    icone: "📚", 
    nivel: "Iniciante", 
    bannerColor: "from-blue-600 to-indigo-900", 
    topicos: [
      { id: "apo-pt1", titulo: "Sujeito e Predicado", conteudo: "..." },
      { id: "apo-pt2", titulo: "Ortografia e Acentuação", conteudo: "..." }
    ] 
  },
  { 
    materia: "Matemática", 
    icone: "📐", 
    nivel: "Iniciante", 
    bannerColor: "from-orange-500 to-red-800", 
    topicos: [
      { id: "apo-ma3", titulo: "Juros Simples e Compostos", conteudo: "..." }
    ] 
  },
  { 
    materia: "Biologia", 
    icone: "🌿", 
    nivel: "Intermediário", 
    bannerColor: "from-emerald-600 to-teal-900", 
    topicos: [
      { id: "apo-bi1", titulo: "Processo da Fotossíntese", conteudo: "..." },
      { id: "apo-bi2", titulo: "Cadeias Alimentares", conteudo: "..." }
    ] 
  },
  { 
    materia: "História", 
    icone: "🏛️", 
    nivel: "Intermediário", 
    bannerColor: "from-amber-600 to-orange-900", 
    topicos: [
      { id: "apo-hi1", titulo: "Resumo Brasil Colônia", conteudo: "..." }
    ] 
  },
  { 
    materia: "Física", 
    icone: "⚡", 
    nivel: "Difícil", 
    bannerColor: "from-violet-600 to-purple-900", 
    topicos: [
      { id: "apo-fi1", titulo: "As 3 Leis de Newton", conteudo: "..." },
      { id: "apo-fi2", titulo: "Energia e Sustentabilidade", conteudo: "..." }
    ] 
  },
  { 
    materia: "Geografia", 
    icone: "🌍", 
    nivel: "Iniciante", 
    bannerColor: "from-sky-500 to-blue-800", 
    topicos: [
      { id: "apo-ge1", titulo: "Sistema Solar", conteudo: "..." },
      { id: "apo-ge2", titulo: "Globalização", conteudo: "..." }
    ] 
  },
  { 
    materia: "Química", 
    icone: "🧪", 
    nivel: "Intermediário", 
    bannerColor: "from-lime-500 to-green-800", 
    topicos: [
      { id: "apo-qui1", titulo: "Reações Químicas", conteudo: "..." },
      { id: "apo-qui2", titulo: "Química Ambiental", conteudo: "..." }
    ] 
  },
  { 
    materia: "Literatura", 
    icone: "📖", 
    nivel: "Iniciante", 
    bannerColor: "from-rose-500 to-pink-900", 
    topicos: [
      { id: "apo-lit1", titulo: "Introdução às Escolas Literárias", conteudo: "..." },
      { id: "apo-lit2", titulo: "Romantismo no Brasil", conteudo: "..." }
    ] 
  },
  { 
    materia: "Inglês", 
    icone: "🇬🇧", 
    nivel: "Básico", 
    bannerColor: "from-red-600 to-blue-900", 
    topicos: [
      { id: "apo-ing1", titulo: "Simple Present Tense", conteudo: "..." }
    ] 
  },
  { 
    materia: "Ed. Financeira", 
    icone: "💰", 
    nivel: "Essencial", 
    bannerColor: "from-green-500 to-emerald-900", 
    topicos: [
      { id: "apo-fin1", titulo: "Orçamento e Planejamento", conteudo: "..." }
    ] 
  },
  { 
    materia: "Programação", 
    icone: "💻", 
    nivel: "Técnico", 
    bannerColor: "from-slate-700 to-black", 
    topicos: [
      { id: "apo-prog1", titulo: "Lógica e Algoritmos", conteudo: "..." }
    ] 
  },
  // NOVOS AGRUPAMENTOS PARA APRESENTAÇÃO
  {
    materia: "Sociologia",
    icone: "🤝",
    nivel: "Intermediário",
    bannerColor: "from-pink-600 to-rose-900",
    topicos: [
      { id: "apo-soc1", titulo: "Cidadania e Direitos", conteudo: "..." }
    ]
  },
  {
    materia: "Filosofia",
    icone: "🤔",
    nivel: "Reflexivo",
    bannerColor: "from-yellow-600 to-amber-900",
    topicos: [
      { id: "apo-fil1", titulo: "Ética e Moral", conteudo: "..." }
    ]
  },
  {
    materia: "Redação",
    icone: "✍️",
    nivel: "Avançado",
    bannerColor: "from-red-500 to-orange-700",
    topicos: [
      { id: "apo-red1", titulo: "Proposta de Intervenção", conteudo: "..." }
    ]
  }
];

export const SIMULADOS_DATA: Simulado[] = [
  { id: "sim-1", materia: "Linguagens", icone: "📝", questoes: [{ id: "q1", materia: "Português", tema: "Sintaxe", pergunta: "...", opcoes: ["A","B","C","D"], respostaCorreta: 3, explicacao: "..." }] }
];

export const DICAS_DATA: Dica[] = [{ titulo: "Foco", conteudo: "..." }];

export const VIDEOS_DATA: Video[] = [
  { videoId: "dQw4w9WgXcQ", titulo: "Video", descricao: "..." },
  { videoId: "K2VpvKMWddw", titulo: "Aula completa de Porcentagem", descricao: "Aula com explicações passo a passo sobre porcentagem e exemplos práticos com Professor Rafa Jesus." },
  { videoId: "6YLj3yWtHqA", titulo: "Como calcular porcentagens", descricao: "Explica o cálculo de porcentagens de forma didática." },
  { videoId: "Ht1_WbzJwCI", titulo: "Porcentagem — Aumento e Descontos", descricao: "Continuação com aumentos e descontos." },
  { videoId: "SDNc_5qXa0Q", titulo: "FOTOSSÍNTESE Completa", descricao: "Aula detalhada sobre o processo de fotossíntese, fase clara e escura." },
  { videoId: "fHC6M7xncds", titulo: "Resumo sobre Fotossíntese", descricao: "Revisão simplificada do processo biológico com Samuel Cunha." },
  { videoId: "PT-0967OfKQ", titulo: "Fotossíntese básica", descricao: "Explica como funciona o processo nas plantas, mecanismo e energia." },
  { videoId: "jlnxCsAnSjo", titulo: "Live — Fotossíntese no ENEM", descricao: "Aula voltada para provas como o ENEM com Prof. Kennedy Ramos." },
  { videoId: "p6IxQbme1pI", titulo: "Brasil Colônia: A História Resumida", descricao: "Vídeo aula introdutória sobre o Brasil Colônia." },
  { videoId: "qtwz_HKqUUg", titulo: "O BRASIL COLÔNIA", descricao: "Explica características do período colonial." },
  { videoId: "Rm-4PXb_LCw", titulo: "História do Brasil Colonial", descricao: "Aula longa e detalhada sobre o período colonial." },
  { videoId: "ocjJ8bKEQ3Q", titulo: "Colonial Brazil (English)", descricao: "Vídeo em inglês sobre a colonização brasileira." },
  // NOVOS VÍDEOS (Integração)
  { videoId: "3U_mIq2P7P0", titulo: "Globalização: Resumo", descricao: "Conceitos principais de Globalização para o vestibular." },
  { videoId: "uG6Xv0dYJ2U", titulo: "Direitos Humanos", descricao: "Entenda o conceito de cidadania e direitos no Brasil." },
  { videoId: "O4M51w0M_j8", titulo: "Ética e Moral", descricao: "Diferenciação clássica entre os termos filosóficos." },
  { videoId: "Rk0H9gQd1k0", titulo: "Química Ambiental", descricao: "Chuva ácida, efeito estufa e camada de ozônio." },
  { videoId: "q9S0o9dGk2U", titulo: "Fontes de Energia", descricao: "Comparativo entre fontes renováveis e não renováveis." },
  { videoId: "_yY3jXqXg2U", titulo: "Juros Simples e Compostos", descricao: "Matemática Financeira básica para provas." },
  { videoId: "8v6zZ8Y9a1s", titulo: "Redação Nota 1000", descricao: "Como estruturar a proposta de intervenção perfeita." }
];
