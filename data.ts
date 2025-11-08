import type { Apostila, Dica, Simulado, Video } from './types';

export const APOSTILAS_DATA: Apostila[] = [
  {
    materia: 'Português',
    icone: '🇵🇹',
    topicos: [
      { 
        titulo: 'Interpretação de Texto', 
        conteudo: `
          <h2 class="text-xl font-bold mb-2">Interpretação de Texto</h2>
          <p class="mb-4">A interpretação de texto é a capacidade de compreender o que está escrito em um texto, decodificando as informações e inferindo significados. É uma habilidade crucial para o ENEM e concursos.</p>
          <h3 class="text-lg font-semibold mb-2">Estratégias:</h3>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Leitura Atenta:</strong> Leia o texto pelo menos duas vezes. A primeira para ter uma ideia geral e a segunda para focar nos detalhes.</li>
            <li><strong>Identificar a Ideia Central:</strong> Qual é a mensagem principal que o autor quer passar?</li>
            <li><strong>Contexto:</strong> Preste atenção ao contexto das palavras e frases. Uma palavra pode ter diferentes significados.</li>
            <li><strong>Inferência:</strong> Muitas vezes, a resposta não está explícita, mas pode ser deduzida a partir das informações dadas.</li>
          </ul>
        ` 
      },
      { 
        titulo: 'Figuras de Linguagem', 
        conteudo: `
          <h2 class="text-xl font-bold mb-2">Figuras de Linguagem</h2>
          <p class="mb-4">São recursos expressivos que desviam da norma padrão da língua para dar mais ênfase, expressividade ou originalidade à comunicação.</p>
          <h3 class="text-lg font-semibold mb-2">Exemplos Comuns:</h3>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Metáfora:</strong> Comparação implícita. Ex: "A vida é uma nuvem que voa."</li>
            <li><strong>Comparação:</strong> Comparação explícita com conectivo (como, tal qual). Ex: "Seus olhos são como jabuticabas."</li>
            <li><strong>Metonímia:</strong> Substituição de um termo por outro com o qual tem relação. Ex: "Li Machado de Assis." (a obra pelo autor)</li>
            <li><strong>Ironia:</strong> Dizer o contrário do que se pensa, geralmente com tom de sarcasmo. Ex: "Que pessoa educada!" (para alguém grosseiro)</li>
          </ul>
        ` 
      },
      { 
        titulo: 'Crase e Regência', 
        conteudo: `
          <h2 class="text-xl font-bold mb-2">Crase e Regência</h2>
          <p class="mb-4">A <strong>crase</strong> é a fusão da preposição "a" com o artigo feminino "a" ou com o "a" inicial de pronomes. É indicada pelo acento grave (\`).</p>
          <p class="mb-4"><strong>Regência</strong> é a relação de subordinação entre um verbo (regência verbal) ou nome (regência nominal) e seus complementos.</p>
          <h3 class="text-lg font-semibold mb-2">Dica de Crase:</h3>
          <p>Substitua a palavra feminina por uma masculina. Se o "a" virar "ao", então há crase. Ex: "Vou à praia." -> "Vou ao campo." Logo, tem crase.</p>
          <h3 class="text-lg font-semibold mb-2">Exemplo de Regência:</h3>
          <p>O verbo "assistir" no sentido de "ver" pede preposição "a". Ex: "Eu assisti ao filme." Já no sentido de "ajudar", não pede. Ex: "O médico assistiu o paciente."</p>
        ` 
      },
    ],
  },
  {
    materia: 'Matemática',
    icone: '🧮',
    topicos: [
      { 
        titulo: 'Porcentagem', 
        conteudo: `
          <h2 class="text-xl font-bold mb-2">Porcentagem</h2>
          <p class="mb-4">Porcentagem, representada pelo símbolo %, é uma razão cujo denominador é 100. É usada para calcular descontos, acréscimos, lucros, etc.</p>
          <h3 class="text-lg font-semibold mb-2">Cálculo Básico:</h3>
          <p>Para calcular X% de um valor Y, basta multiplicar Y por (X/100).</p>
          <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded">Ex: 25% de 200 = 200 * (25/100) = 200 * 0.25 = 50</p>
          <h3 class="text-lg font-semibold mt-4 mb-2">Fator de Multiplicação:</h3>
          <ul class="list-disc list-inside space-y-2">
            <li><strong>Acréscimo:</strong> Um aumento de 15% corresponde a um fator de 1 + 0.15 = 1.15.</li>
            <li><strong>Desconto:</strong> Um desconto de 20% corresponde a um fator de 1 - 0.20 = 0.80.</li>
          </ul>
        ` 
      },
      { 
        titulo: 'Juros Simples e Compostos', 
        conteudo: `
          <h2 class="text-xl font-bold mb-2">Juros Simples e Compostos</h2>
          <p class="mb-4">Juros são a remuneração cobrada pelo empréstimo de dinheiro.</p>
          <h3 class="text-lg font-semibold mb-2">Juros Simples:</h3>
          <p>A taxa de juros incide apenas sobre o capital inicial. A fórmula é <code class="font-mono">J = C * i * t</code>, onde C é o capital, i é a taxa e t é o tempo.</p>
          <h3 class="text-lg font-semibold mt-4 mb-2">Juros Compostos:</h3>
          <p>A taxa de juros incide sobre o capital inicial e sobre os juros acumulados ("juros sobre juros"). A fórmula do montante é <code class="font-mono">M = C * (1 + i)^t</code>.</p>
        ` 
      },
    ],
  },
   {
    materia: 'História',
    icone: '🏛️',
    topicos: [
        {
            titulo: 'Brasil Colônia',
            conteudo: `
                <h2 class="text-xl font-bold mb-2">Brasil Colônia (1500-1822)</h2>
                <p class="mb-4">Período que se inicia com a chegada dos portugueses e termina com a Independência do Brasil. A economia era baseada no extrativismo (pau-brasil), seguido pelo ciclo da cana-de-açúcar e, posteriormente, pelo ciclo do ouro. A sociedade era patriarcal, escravocrata e estratificada.</p>
                <h3 class="text-lg font-semibold mt-4 mb-2">Principais Eventos:</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li><strong>1500:</strong> Chegada de Pedro Álvares Cabral.</li>
                    <li><strong>1534:</strong> Início das Capitanias Hereditárias.</li>
                    <li><strong>Século XVII:</strong> Invasões Holandesas no Nordeste.</li>
                    <li><strong>Século XVIII:</strong> Ciclo do Ouro em Minas Gerais e Inconfidência Mineira.</li>
                    <li><strong>1808:</strong> Vinda da Família Real para o Brasil.</li>
                </ul>`
        },
        {
            titulo: 'Revolução Industrial',
            conteudo: `
                <h2 class="text-xl font-bold mb-2">Revolução Industrial</h2>
                <p class="mb-4">Conjunto de mudanças tecnológicas com profundo impacto no processo produtivo em nível econômico e social. Iniciada na Inglaterra no século XVIII, expandiu-se pelo mundo a partir do século XIX.</p>
                <h3 class="text-lg font-semibold mt-4 mb-2">Características:</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li>Substituição do trabalho artesanal pelo assalariado e com o uso das máquinas.</li>
                    <li>Crescimento da produção e surgimento de novas classes sociais: a burguesia industrial e o proletariado.</li>
                    <li>Êxodo rural e crescimento urbano desordenado.</li>
                    <li>Inovações como a máquina a vapor.</li>
                </ul>`
        }
    ]
  },
  {
      materia: 'Geografia',
      icone: '🌍',
      topicos: [
          {
              titulo: 'Climas do Brasil',
              conteudo: `
                <h2 class="text-xl font-bold mb-2">Climas do Brasil</h2>
                <p class="mb-4">Devido à sua grande extensão territorial, o Brasil possui uma grande diversidade de climas. A maior parte do país está na zona tropical, o que resulta em temperaturas elevadas na maior parte do ano.</p>
                <h3 class="text-lg font-semibold mt-4 mb-2">Principais Climas:</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li><strong>Equatorial:</strong> Quente e muito úmido, presente na Amazônia.</li>
                    <li><strong>Tropical:</strong> Quente, com estação seca (inverno) e chuvosa (verão). Predomina no Brasil central.</li>
                    <li><strong>Semiárido:</strong> Quente e seco, com chuvas escassas e irregulares. Típico do Sertão Nordestino.</li>
                    <li><strong>Tropical de Altitude:</strong> Temperaturas mais amenas devido à altitude, comum em áreas serranas do Sudeste.</li>
                    <li><strong>Subtropical:</strong> Estações bem definidas, com verões quentes e invernos frios. Predomina na Região Sul.</li>
                </ul>`
          },
          {
              titulo: 'Globalização',
              conteudo: `
                <h2 class="text-xl font-bold mb-2">Globalização</h2>
                <p class="mb-4">É o processo de intensificação da integração econômica, política, cultural e social entre os países. É impulsionada pelo avanço dos meios de transporte e comunicação.</p>
                <h3 class="text-lg font-semibold mt-4 mb-2">Características:</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li><strong>Fluxos Financeiros:</strong> Movimentação de capital entre países em tempo real.</li>
                    <li><strong>Empresas Transnacionais:</strong> Grandes corporações que atuam em diversos países.</li>
                    <li><strong>Cultura Global:</strong> Disseminação de hábitos de consumo, músicas, filmes e estilos de vida em escala mundial.</li>
                    <li><strong>Blocos Econômicos:</strong> Formação de acordos comerciais como Mercosul e União Europeia para facilitar o comércio.</li>
                </ul>
                <p class="mt-4">A globalização também gera críticas, como o aumento da desigualdade social e a precarização do trabalho.</p>`
          }
      ]
  },
    {
    materia: 'Concursos Militares',
    icone: '🎖️',
    topicos: [
        {
            titulo: 'Cálculo I: Limites',
            conteudo: `
                <h2 class="text-xl font-bold mb-2">Cálculo I: Limites</h2>
                <p class="mb-4">O conceito de limite é fundamental no cálculo diferencial e é usado para definir derivadas e integrais. Intuitivamente, o limite de uma função f(x) quando x se aproxima de um ponto 'a' é o valor para o qual f(x) se aproxima à medida que x se aproxima de 'a'.</p>
                <h3 class="text-lg font-semibold mt-4 mb-2">Exemplo:</h3>
                <p>O limite de f(x) = x + 2 quando x tende a 3 é 5, pois quanto mais x se aproxima de 3, mais f(x) se aproxima de 5.</p>
                <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded">lim (x → 3) (x + 2) = 5</p>
                `
        },
        {
            titulo: 'Física: Eletromagnetismo',
            conteudo: `
                <h2 class="text-xl font-bold mb-2">Física: Eletromagnetismo</h2>
                <p class="mb-4">O eletromagnetismo é o ramo da física que estuda a relação entre eletricidade e magnetismo. Um campo elétrico variável no tempo cria um campo magnético, e um campo magnético variável cria um campo elétrico.</p>
                <h3 class="text-lg font-semibold mt-4 mb-2">Leis de Maxwell:</h3>
                <p>São um conjunto de quatro equações que descrevem completamente os fenômenos eletromagnéticos. Elas unificaram a eletricidade, o magnetismo e a óptica.</p>
                <ul class="list-disc list-inside space-y-2">
                    <li><strong>Lei de Gauss da Eletricidade:</strong> Relaciona o fluxo elétrico com a carga elétrica.</li>
                    <li><strong>Lei de Gauss do Magnetismo:</strong> Afirma a inexistência de monopólos magnéticos.</li>
                    <li><strong>Lei de Faraday da Indução:</strong> Descreve como um campo magnético variável cria um campo elétrico.</li>
                    <li><strong>Lei de Ampère-Maxwell:</strong> Descreve como correntes elétricas e campos elétricos variáveis criam campos magnéticos.</li>
                </ul>`
        },
        {
            titulo: 'Geopolítica Contemporânea',
            conteudo: `
                <h2 class="text-xl font-bold mb-2">Geopolítica Contemporânea</h2>
                <p class="mb-4">Estuda as relações de poder no espaço geográfico mundial, considerando as estratégias dos Estados e outros atores internacionais (como ONGs e corporações transnacionais) na disputa por territórios, recursos e influência.</p>
                <h3 class="text-lg font-semibold mt-4 mb-2">Temas Relevantes:</h3>
                <ul class="list-disc list-inside space-y-2">
                    <li><strong>Nova Ordem Mundial:</strong> A reconfiguração do poder global após o fim da Guerra Fria, com a ascensão de novas potências como a China.</li>
                    <li><strong>Conflitos Regionais:</strong> Disputas no Oriente Médio, tensões na Ucrânia, Mar do Sul da China, etc.</li>
                    <li><strong>Disputa por Recursos:</strong> Controle de recursos estratégicos como petróleo, água e minerais raros.</li>
                    <li><strong>Cibersegurança e Guerra Híbrida:</strong> O uso da tecnologia e da desinformação como ferramentas de poder.</li>
                </ul>`
        }
    ]
  }
];

export const SIMULADOS_DATA: Simulado[] = [
  {
    materia: 'Português',
    icone: '🇵🇹',
    questoes: [
      { 
        pergunta: 'Assinale a alternativa em que a palavra está acentuada INCORRETAMENTE:', 
        opcoes: ['Herói', 'Troféu', 'Idéia', 'Chapéu'], 
        respostaCorreta: 2,
        explicacao: 'A palavra "ideia" não é mais acentuada desde o Novo Acordo Ortográfico. Ditongos abertos "ei" e "oi" em palavras paroxítonas perderam o acento.'
      },
      { 
        pergunta: 'Em "Entregou o prêmio à vencedora.", o uso da crase é:', 
        opcoes: ['Obrigatório', 'Facultativo', 'Incorreto'], 
        respostaCorreta: 0,
        explicacao: 'O verbo "entregar" é transitivo direto e indireto (entrega ALGO a ALGUÉM). O objeto indireto "vencedora" é feminino e admite artigo "a". A fusão da preposição "a" com o artigo "a" torna a crase obrigatória.'
      },
      { 
        pergunta: 'Qual figura de linguagem está presente em "O bonde passa cheio de pernas"?', 
        opcoes: ['Metáfora', 'Comparação', 'Hipérbole', 'Metonímia'], 
        respostaCorreta: 3,
        explicacao: 'Ocorre uma metonímia, que é a substituição da parte (pernas) pelo todo (pessoas). O bonde não está cheio de pernas, mas de pessoas.'
      },
    ],
  },
  {
    materia: 'Matemática',
    icone: '🧮',
    questoes: [
      { 
        pergunta: 'Um produto que custava R$ 80,00 teve um aumento de 25%. Qual o novo preço?', 
        opcoes: ['R$ 90,00', 'R$ 95,00', 'R$ 100,00', 'R$ 105,00'], 
        respostaCorreta: 2,
        explicacao: '25% de 80 é (25/100) * 80 = 20. O novo preço é o preço antigo mais o aumento: 80 + 20 = 100. Outra forma é usar o fator de aumento: 80 * 1.25 = 100.'
      },
      { 
        pergunta: 'Se 3 torneiras enchem um tanque em 9 horas, em quanto tempo 9 torneiras encherão o mesmo tanque?', 
        opcoes: ['1 hora', '3 horas', '6 horas', '27 horas'], 
        respostaCorreta: 1,
        explicacao: 'Esta é uma regra de três simples inversa. Se o número de torneiras aumenta (de 3 para 9, triplicou), o tempo para encher o tanque diminui na mesma proporção (divide por 3). Portanto, 9 horas / 3 = 3 horas.'
      },
      { 
        pergunta: 'Qual o montante de uma aplicação de R$ 500,00 a juros compostos de 10% ao mês, durante 2 meses?', 
        opcoes: ['R$ 550,00', 'R$ 600,00', 'R$ 605,00', 'R$ 610,00'], 
        respostaCorreta: 2,
        explicacao: 'No primeiro mês, o juro é 10% de 500 = 50. Montante = 550. No segundo mês, o juro incide sobre 550, então 10% de 550 = 55. Montante final = 550 + 55 = 605. Usando a fórmula: M = 500 * (1 + 0.10)^2 = 500 * 1.21 = 605.'
      },
    ],
  },
  {
    materia: 'História',
    icone: '🏛️',
    questoes: [
        {
            pergunta: 'Qual atividade econômica foi a principal responsável pela ocupação do interior do Brasil no século XVIII?',
            opcoes: ['Pecuária', 'Mineração', 'Cultivo de cana-de-açúcar', 'Extração de pau-brasil'],
            respostaCorreta: 1,
            explicacao: 'A mineração, especialmente a busca por ouro e diamantes na região de Minas Gerais, Goiás e Mato Grosso, foi o grande motor da interiorização e urbanização da colônia no século XVIII.'
        },
        {
            pergunta: 'A vinda da Família Real Portuguesa para o Brasil em 1808 foi uma consequência direta de qual evento europeu?',
            opcoes: ['Revolução Francesa', 'Guerras Napoleônicas', 'Revolução Industrial', 'Guerra dos Sete Anos'],
            respostaCorreta: 1,
            explicacao: 'A Família Real fugiu de Portugal para o Brasil para não ser capturada pelas tropas de Napoleão Bonaparte, que haviam decretado o Bloqueio Continental contra a Inglaterra, aliada de Portugal.'
        },
        {
            pergunta: 'A Lei Áurea, que aboliu a escravidão no Brasil, foi assinada em qual ano?',
            opcoes: ['1822', '1850', '1888', '1889'],
            respostaCorreta: 2,
            explicacao: 'A Lei Áurea foi assinada pela Princesa Isabel em 13 de maio de 1888, culminando um longo processo de luta do movimento abolicionista e de resistência dos escravizados.'
        }
    ]
  },
  {
      materia: 'Geografia',
      icone: '🌍',
      questoes: [
          {
              pergunta: 'O clima predominante na Região Sul do Brasil, caracterizado por estações bem definidas, é o:',
              opcoes: ['Tropical', 'Equatorial', 'Subtropical', 'Semiárido'],
              respostaCorreta: 2,
              explicacao: 'O clima Subtropical é típico de latitudes médias, abaixo do Trópico de Capricórnio. Ele se caracteriza por ter as quatro estações do ano bem definidas, com verões quentes e invernos frios, sendo comum na Região Sul.'
          },
          {
              pergunta: 'A formação de blocos econômicos, como o Mercosul e a União Europeia, é uma característica de qual processo?',
              opcoes: ['Guerra Fria', 'Globalização', 'Imperialismo', 'Feudalismo'],
              respostaCorreta: 1,
              explicacao: 'A globalização é marcada pela intensificação das trocas comerciais e financeiras entre os países. A criação de blocos econômicos visa facilitar essas trocas, reduzindo ou eliminando barreiras alfandegárias entre os países membros.'
          },
          {
              pergunta: 'Qual bioma brasileiro, conhecido como a savana brasileira, é caracterizado por árvores tortuosas e grande biodiversidade?',
              opcoes: ['Amazônia', 'Mata Atlântica', 'Pampa', 'Cerrado'],
              respostaCorreta: 3,
              explicacao: 'O Cerrado, que ocupa a porção central do Brasil, é o segundo maior bioma do país e é considerado a savana com maior biodiversidade do mundo, com sua vegetação característica adaptada ao fogo e à seca.'
          }
      ]
  },
   {
      materia: 'Concursos Militares',
      icone: '🎖️',
      questoes: [
          {
              pergunta: 'O valor do limite de (x² - 4) / (x - 2) quando x tende a 2 é:',
              opcoes: ['0', 'Indefinido', '4', '2'],
              respostaCorreta: 2,
              explicacao: 'Se substituirmos x=2 diretamente, temos uma indeterminação 0/0. Fatorando o numerador (diferença de quadrados), temos (x-2)(x+2) / (x-2). Cortando o termo (x-2), a expressão se simplifica para (x+2). Agora, substituindo x=2, obtemos 2+2=4.'
          },
          {
              pergunta: 'Qual das Leis de Maxwell afirma que não existem monopólos magnéticos?',
              opcoes: ['Lei de Gauss da Eletricidade', 'Lei de Gauss do Magnetismo', 'Lei de Faraday', 'Lei de Ampère-Maxwell'],
              respostaCorreta: 1,
              explicacao: 'A Lei de Gauss do Magnetismo afirma que o fluxo magnético através de qualquer superfície fechada é zero. Isso implica que as linhas de campo magnético são sempre fechadas, ou seja, não há "fontes" ou "sumidouros" de campo, o que significa que não existem cargas magnéticas isoladas (monopólos).'
          },
          {
              pergunta: 'A organização internacional criada após a Segunda Guerra Mundial com o objetivo de manter a paz e a segurança internacionais é a:',
              opcoes: ['OTAN', 'Liga das Nações', 'ONU', 'Pacto de Varsóvia'],
              respostaCorreta: 2,
              explicacao: 'A Organização das Nações Unidas (ONU) foi fundada em 1945, após a Segunda Guerra, para substituir a Liga das Nações e servir como um fórum para a cooperação internacional, prevenindo conflitos e promovendo os direitos humanos.'
          }
      ]
  }
];

export const DICAS_DATA: Dica[] = [
  { 
    titulo: 'Crie um Cronograma de Estudos', 
    conteudo: 'Organize seu tempo de forma eficiente. Use um planner ou aplicativo para definir metas diárias e semanais, alternando entre matérias teóricas e práticas para manter o cérebro engajado.' 
  },
  { 
    titulo: 'Faça Pausas Regulares (Técnica Pomodoro)', 
    conteudo: 'Estudar por horas a fio pode ser contraproducente. Tente a técnica Pomodoro: 25 minutos de foco total e 5 minutos de pausa. A cada 4 ciclos, faça uma pausa maior de 15-30 minutos.' 
  },
  { 
    titulo: 'Resolva Provas Anteriores', 
    conteudo: 'Resolver questões de concursos passados é a melhor forma de entender o estilo da banca, os tópicos mais cobrados e gerenciar seu tempo de prova. Simule as condições reais.' 
  },
  { 
    titulo: 'Ensine o que Aprendeu', 
    conteudo: 'Tentar explicar um conceito complexo com suas próprias palavras para um amigo ou até mesmo para o espelho é uma das formas mais eficazes de verificar se você realmente entendeu e de fixar o conhecimento.' 
  },
];

export const VIDEOS_DATA: Video[] = [
  { 
    videoId: '8S5_fkp_o8w', 
    titulo: 'Como Estudar para Concursos Públicos - Guia Completo', 
    descricao: 'Um guia com dicas práticas e estratégias para otimizar sua preparação para qualquer concurso público.' 
  },
  { 
    videoId: 'w-M3jY-3kcg', 
    titulo: 'A Melhor Técnica de Memorização para Provas', 
    descricao: 'Aprenda técnicas de memorização cientificamente comprovadas para não esquecer o conteúdo na hora da prova.' 
  },
  {
    videoId: 'GRx_p49d_hY',
    titulo: 'Como Fazer uma Redação Nota 1000',
    descricao: 'Dicas essenciais sobre estrutura, argumentação e coesão para você construir uma redação nota máxima no ENEM.'
  }
];