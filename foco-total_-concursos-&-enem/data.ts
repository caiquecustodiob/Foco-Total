import type { Apostila, Dica, Simulado, Video } from './types';

export const APOSTILAS_DATA: Apostila[] = [
  {
    materia: 'Português',
    icone: '🇵🇹',
    topicos: [
     {
  titulo: 'Interpretação de Texto',
  conteudo: `
    <h2 class="text-xl font-bold mb-3">Interpretação de Texto</h2>

    <p class="mb-4">
      Interpretar um texto significa compreender não apenas o que está escrito, 
      mas também aquilo que está implícito. Envolve reconhecer a intenção do autor, 
      analisar elementos linguísticos, estabelecer relações lógicas e inferir significados. 
      Essa habilidade é fundamental para provas como ENEM, concursos e vestibulares.
    </p>

    <h3 class="text-lg font-semibold mb-2">1. Objetivo da Interpretação</h3>
    <p class="mb-4">
      O leitor deve ser capaz de:
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>Reconhecer a ideia central e as ideias secundárias.</li>
      <li>Identificar o ponto de vista do autor.</li>
      <li>Inferir informações não explícitas.</li>
      <li>Relacionar informações entre si.</li>
      <li>Avaliar efeitos de sentido provocados por palavras e construções linguísticas.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">2. Estratégias Fundamentais</h3>
    <ul class="list-disc list-inside space-y-3 mb-4">
      <li>
        <strong>Leitura Atenta:</strong>  
        Faça uma primeira leitura para captar o tema geral e uma segunda para observar detalhes, 
        como conectivos, comparações, oposição de ideias e marcações temporais.
      </li>

      <li>
        <strong>Identificação da Ideia Central:</strong>  
        Pergunte-se: <em>"Se eu tivesse que resumir o texto em uma frase, qual seria?"</em>  
        Isso ajuda a evitar distrações com informações secundárias.
      </li>

      <li>
        <strong>Análise de Palavras-Chave:</strong>  
        Palavras como “porém”, “portanto”, “além disso”, “embora” revelam relações lógicas 
        e ajudam a entender os argumentos do autor.
      </li>

      <li>
        <strong>Contexto e Polissemia:</strong>  
        Muitas palavras têm vários significados. Sempre interprete de acordo com o contexto específico do texto.
      </li>

      <li>
        <strong>Inferência:</strong>  
        Algumas respostas não estão literalmente no texto, mas podem ser deduzidas a partir das informações apresentadas.  
        Inferir é “ligar os pontos”.
      </li>

      <li>
        <strong>Identificação da Intenção do Autor:</strong>  
        O texto busca convencer? Informar? Criticar? Contar uma história?  
        A intenção ajuda a direcionar a interpretação.
      </li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">3. Técnicas Avançadas (Concursos/ENEM)</h3>
    <ul class="list-disc list-inside space-y-3 mb-4">
      <li><strong>Marque contrastes:</strong> quando o autor opõe ideias, costuma estar reforçando o ponto principal.</li>
      <li><strong>Fuja de interpretações pessoais:</strong> as respostas vêm do texto, não das suas opiniões.</li>
      <li><strong>Cuidado com pegadinhas:</strong> alternativas exageradas (“sempre”, “nunca”, “todos”) costumam estar erradas.</li>
      <li><strong>Reconheça o gênero textual:</strong> crônica, artigo, notícia, charge — cada gênero tem intenções diferentes.</li>
      <li><strong>Observe elementos não verbais:</strong> imagens, gráficos e tirinhas são parte do texto e podem alterar o sentido.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">4. Exemplo Prático</h3>
    <p class="mb-2"><em>Texto curto:</em></p>
    <blockquote class="border-l-4 pl-3 italic mb-3">
      "A tecnologia aproxima os distantes e afasta os próximos."
    </blockquote>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Ideia central:</strong> contradição moderna do uso excessivo da tecnologia.</li>
      <li><strong>Inferência:</strong> pessoas passam mais tempo online do que interagindo presencialmente.</li>
      <li><strong>Estratégia usada:</strong> antítese (aproxima × afasta).</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">5. Dicas Finais</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>Leia devagar, interpretando cada parágrafo.</li>
      <li>Responda sempre com base no texto, jamais por intuição.</li>
      <li>Procure pistas linguísticas que revelam ironia, crítica ou humor.</li>
      <li>Treine com textos de diferentes gêneros e níveis de complexidade.</li>
    </ul>
  `
},
{
  titulo: 'Figuras de Linguagem',
  conteudo: `
    <h2 class="text-xl font-bold mb-3">Figuras de Linguagem</h2>

    <p class="mb-4">
      Figuras de linguagem são recursos expressivos usados para tornar o texto mais criativo, 
      enfático e significativo. Elas aparecem em poemas, charges, músicas, redações, tirinhas e 
      principalmente em provas de interpretação de texto.
    </p>

    <h3 class="text-lg font-semibold mb-2">1. Figuras de Pensamento</h3>
    <ul class="list-disc list-inside space-y-3 mb-4">

      <li>
        <strong>Metáfora:</strong> comparação implícita entre dois elementos.  
        Ex.: <em>"Ela é uma flor."</em> (não há “como”, é uma associação direta)
      </li>

      <li>
        <strong>Comparação (ou Símile):</strong> relação explícita de semelhança usando conectivos 
        como <em>como, tal qual, assim como</em>.  
        Ex.: <em>"Ele é corajoso como um leão."</em>
      </li>

      <li>
        <strong>Metonímia:</strong> substituição de uma palavra por outra que possui relação lógica.  
        Exemplos clássicos:
        <ul class="list-disc list-inside ml-6 space-y-1">
          <li><em>"Li Machado de Assis"</em> (autor pela obra)</li>
          <li><em>"Bebi um copo de água"</em> (recipiente pelo conteúdo)</li>
        </ul>
      </li>

      <li>
        <strong>Ironia:</strong> dizer o contrário do que realmente se quer comunicar, geralmente com crítica ou humor.  
        Ex.: <em>"Parabéns, chegou super cedo!"</em> (para alguém atrasado)
      </li>

      <li>
        <strong>Hipérbole:</strong> exagero intencional para dar ênfase.  
        Ex.: <em>"Estou morrendo de fome."</em>
      </li>

      <li>
        <strong>Eufemismo:</strong> suavização de uma ideia considerada dura ou ofensiva.  
        Ex.: <em>"Ele nos deixou"</em> (para evitar “morreu”)
      </li>

      <li>
        <strong>Antítese:</strong> oposição de ideias dentro da mesma frase.  
        Ex.: <em>"Vence o bem, perde o mal."</em>
      </li>

      <li>
        <strong>Oxímoro:</strong> antítese extrema dentro de um mesmo elemento, criando paradoxo.  
        Ex.: <em>"Silêncio ensurdecedor."</em>
      </li>

      <li>
        <strong>Paradoxo:</strong> afirmação contraditória que, ao ser analisada, faz sentido.  
        Ex.: <em>"Menos é mais."</em>
      </li>

    </ul>

    <h3 class="text-lg font-semibold mb-2">2. Figuras de Construção (Sintaxe)</h3>
    <ul class="list-disc list-inside space-y-3 mb-4">

      <li>
        <strong>Elipse:</strong> omissão de um termo facilmente identificável pelo contexto.  
        Ex.: <em>"No jantar, só risos."</em> (omitiu “houve”)
      </li>

      <li>
        <strong>Zeugma:</strong> omissão de um termo já citado anteriormente.  
        Ex.: <em>"Eu gosto de matemática; ele, de biologia."</em>
      </li>

      <li>
        <strong>Anáfora:</strong> repetição no início de frases ou versos para criar ênfase.  
        Ex.: <em>"Eu quero paz, eu quero justiça, eu quero igualdade."</em>
      </li>

      <li>
        <strong>Pleonasmo enfático:</strong> repetição para reforçar uma ideia.  
        Ex.: <em>"Eu vi com meus próprios olhos."</em>
      </li>

      <li>
        <strong>Hipérbato:</strong> inversão da ordem natural da frase.  
        Ex.: <em>"De tudo, ficaram três coisas."</em>
      </li>

    </ul>

    <h3 class="text-lg font-semibold mb-2">3. Figuras de Som (Fonéticas)</h3>
    <ul class="list-disc list-inside space-y-3 mb-4">

      <li>
        <strong>Aliteração:</strong> repetição de sons consonantais.  
        Ex.: <em>"O rato roeu a roupa do rei de Roma."</em>
      </li>

      <li>
        <strong>Assonância:</strong> repetição de sons vocálicos.  
        Ex.: <em>"A aranha arranha a rã."</em>
      </li>

      <li>
        <strong>Onomatopeia:</strong> reprodução de sons reais.  
        Ex.: <em>"Tic-tac", "Bum!", "Splash"</em>
      </li>

    </ul>

    <h3 class="text-lg font-semibold mb-2">4. Figuras de Palavra</h3>
    <ul class="list-disc list-inside space-y-3 mb-4">

      <li>
        <strong>Personificação (Prosopopeia):</strong> atribuição de características humanas a seres inanimados.  
        Ex.: <em>"O vento sussurrou no meu ouvido."</em>
      </li>

      <li>
        <strong>Antonomásia:</strong> substituição de um nome por uma característica marcante.  
        Ex.: <em>"O Rei do Futebol"</em> (Pelé)
      </li>

    </ul>

    <h3 class="text-lg font-semibold mb-2">Resumo Geral</h3>
    <p class="mb-4">
      As figuras de linguagem ampliam o sentido das palavras e enriquecem a comunicação. 
      Em provas, costumam ser cobradas para analisar efeitos de sentido, ironia, subjetividade, 
      crítica social e intenção do autor.
    </p>
  `
},
{
  titulo: 'Crase e Regência',
  conteudo: `
    <h2 class="text-xl font-bold mb-3">Crase e Regência</h2>

    <p class="mb-4">
      A <strong>crase</strong> indica a fusão da preposição <em>"a"</em> com o artigo feminino <em>"a"</em>, 
      com pronomes demonstrativos iniciados por “a” (<em>aquela, aquele, aquilo</em>) ou com a preposição 
      <em>a</em> seguida de palavra feminina. A fusão é marcada pelo acento grave (<strong>\`</strong>).
    </p>

    <p class="mb-4">
      <strong>Regência</strong> é a relação que um termo (geralmente um verbo ou nome) estabelece com seus 
      complementos, indicando qual preposição é exigida para que a frase mantenha sentido e estrutura corretos.
    </p>

    <h3 class="text-lg font-semibold mb-2">1. Casos Obrigatórios de Crase</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>
        <strong>Antes de palavras femininas determinadas:</strong>  
        Ex.: <em>"Entreguei o documento à diretora."</em>
      </li>

      <li>
        <strong>Com locuções femininas:</strong>  
        Ex.: <em>"À tarde", "Às vezes", "À medida que", "À noite".</em>
      </li>

      <li>
        <strong>Com pronomes demonstrativos iniciados por 'a':</strong>  
        Ex.: <em>"Referi-me àquela situação."</em>
      </li>

      <li>
        <strong>Com horas determinadas:</strong>  
        Ex.: <em>"A reunião começará às 14h."</em>
      </li>

      <li>
        <strong>Após verbos que exigem a preposição 'a' (regência verbal):</strong>  
        Ex.: <em>"Obedeci à professora."</em>
      </li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">2. Casos Proibidos de Crase</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>
        <strong>Antes de palavras masculinas:</strong>  
        Ex.: <em>"Vou a pé."</em>
      </li>

      <li>
        <strong>Antes de verbos:</strong>  
        Ex.: <em>"Começou a estudar."</em>
      </li>

      <li>
        <strong>Antes de pronomes pessoais, de tratamento e indefinidos:</strong>  
        Ex.: <em>"Entreguei o livro a ela."</em>
      </li>

      <li>
        <strong>Quando o 'a' é somente artigo, sem preposição:</strong>  
        Ex.: <em>"A menina chegou cedo."</em>
      </li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">3. Teste Prático da Crase</h3>
    <p class="mb-4">
      Substitua a palavra feminina por uma masculina:  
      Se o termo exigir <strong>"ao"</strong> no masculino, então existe crase no feminino.
    </p>

    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><em>"Vou à praia."</em> → "Vou ao campo." ✔️ Tem crase.</li>
      <li><em>"Obedeci à professora."</em> → "Obedeci ao professor." ✔️ Tem crase.</li>
      <li><em>"Ajudarei a criança."</em> → "Ajudarei ao menino." ❌ Não tem crase (o verbo não exige preposição).</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">4. Regência Verbal (Principais Casos de Prova)</h3>
    <ul class="list-disc list-inside space-y-3 mb-4">

      <li>
        <strong>Verbo Assistir:</strong>
        <ul class="list-disc list-inside ml-6 space-y-1">
          <li><strong>ver / assistir a algo:</strong> <em>"Assisti ao filme."</em></li>
          <li><strong>ajudar:</strong> sem preposição → <em>"O médico assistiu o paciente."</em></li>
          <li><strong>morar:</strong> transitivo indireto → <em>"Assisto à Rua 9."</em></li>
        </ul>
      </li>

      <li>
        <strong>Verbo Gostar:</strong> exige preposição "de".  
        Ex.: <em>"Gosto de você."</em>
      </li>

      <li>
        <strong>Verbo Preferir:</strong>  
        <strong>preferir X a Y</strong>.  
        Ex.: <em>"Prefiro estudar a descansar."</em>
      </li>

      <li>
        <strong>Verbo Ir / Voltar:</strong>  
        Preposição varia conforme determinante.  
        <ul class="list-disc list-inside ml-6 space-y-1">
          <li><em>"Vou a Paris."</em> (cidade sem determinante)</li>
          <li><em>"Vou à Bahia."</em> (estado feminino com artigo)</li>
        </ul>
      </li>

      <li>
        <strong>Verbo Visar:</strong>
        <ul class="list-disc list-inside ml-6 space-y-1">
          <li><strong>mirar:</strong> transitivo direto → <em>"Visou o alvo."</em></li>
          <li><strong>almejar:</strong> exige "a" → <em>"Visa à estabilidade financeira."</em></li>
        </ul>
      </li>

    </ul>

    <h3 class="text-lg font-semibold mb-2">5. Regência Nominal</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li><strong>apto a:</strong> Ex.: <em>"Apto a mudanças."</em></li>
      <li><strong>propenso a:</strong> Ex.: <em>"Propenso a erros."</em></li>
      <li><strong>averso a:</strong> Ex.: <em>"Averso à violência."</em></li>
      <li><strong>amor a / amor por:</strong> varia com sentido:  
        <ul class="list-disc list-inside ml-6 space-y-1">
          <li><em>"amor a alguém"</em> (respeito)</li>
          <li><em>"amor por alguém"</em> (sentimento afetivo)</li>
        </ul>
      </li>
      <li><strong>obediente a:</strong> Ex.: <em>"Obediente às regras."</em></li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">Resumo Final</h3>
    <p class="mb-4">
      Crase e regência caminham juntas: se o verbo ou nome exige preposição 
      e o termo seguinte admite artigo feminino, ocorre a crase. O domínio desses tópicos 
      facilita a interpretação, a redação e evita erros comuns em provas objetivas.
    </p>
  `
},
{
  titulo: 'Classes de Palavras',
  conteudo: `
    <h2 class="text-xl font-bold mb-3">Classes de Palavras</h2>

    <p class="mb-4">
      As classes de palavras são categorias gramaticais que classificam os termos conforme 
      sua função e características dentro da frase. Dominar essas classes é essencial para 
      análise sintática, interpretação e redação.
    </p>

    <h3 class="text-lg font-semibold mb-2">1. Substantivo</h3>
    <p class="mb-2">Nomeia seres, objetos, sentimentos, lugares e ideias.</p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Concretos:</strong> mesa, gato.</li>
      <li><strong>Abstratos:</strong> alegria, medo.</li>
      <li><strong>Próprios:</strong> Brasil, Ana.</li>
      <li><strong>Comuns:</strong> cidade, carro.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">2. Adjetivo</h3>
    <p class="mb-2">Caracteriza o substantivo.</p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Simples:</strong> feliz, triste.</li>
      <li><strong>Composto:</strong> luso-brasileiro.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">3. Verbo</h3>
    <p class="mb-2">Indica ação, estado ou fenômeno.</p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Ação:</strong> correr, falar.</li>
      <li><strong>Estado:</strong> ser, estar.</li>
      <li><strong>Fenômeno:</strong> chover, nevar.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">4. Advérbio</h3>
    <p class="mb-2">Modifica verbo, adjetivo ou advérbio. Indica modo, intensidade, tempo, lugar etc.</p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Modo:</strong> bem, mal, depressa.</li>
      <li><strong>Tempo:</strong> hoje, já, sempre.</li>
      <li><strong>Lugar:</strong> aqui, ali.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">5. Conjunção</h3>
    <p class="mb-2">Liga orações ou termos semelhantes.</p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Aditivas:</strong> e, nem.</li>
      <li><strong>Adversativas:</strong> mas, porém.</li>
      <li><strong>Causais:</strong> porque, visto que.</li>
      <li><strong>Conclusivas:</strong> portanto, logo.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">6. Preposição</h3>
    <p class="mb-2">Liga termos e estabelece relação de dependência.</p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>a, ante, até, após, com, contra, de, desde, em, entre, para, por, sem, sob, sobre.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">7. Artigo</h3>
    <p class="mb-2">Acompanha o substantivo indicando gênero e número.</p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Definidos:</strong> o, a, os, as.</li>
      <li><strong>Indefinidos:</strong> um, uma, uns, umas.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">Resumo Final</h3>
    <p class="mb-4">
      Conhecer as classes de palavras facilita analisar frases e resolver questões de 
      interpretação, concordância, regência e pontuação.
    </p>
  `
},
{
  titulo: 'Concordância Verbal',
  conteudo: `
    <h2 class="text-xl font-bold mb-3">Concordância Verbal</h2>

    <p class="mb-4">
      A concordância verbal determina que o verbo deve concordar com seu sujeito em número e pessoa.
      Provas adoram cobrar exceções e casos especiais.
    </p>

    <h3 class="text-lg font-semibold mb-2">1. Regra Geral</h3>
    <p class="mb-4">O verbo concorda com o núcleo do sujeito.</p>
    <blockquote class="border-l-4 pl-3 italic mb-3">
      "Os alunos estudam muito."
    </blockquote>

    <h3 class="text-lg font-semibold mb-2">2. Casos Especiais</h3>
    <ul class="list-disc list-inside space-y-3 mb-4">

      <li>
        <strong>Sujeito composto antes do verbo:</strong>  
        Verbo no plural.  
        Ex.: <em>"João e Maria chegaram."</em>
      </li>

      <li>
        <strong>Sujeito composto depois do verbo:</strong>  
        Verbo pode ficar no singular (preferência formal) ou plural.  
        Ex.: <em>"Chegou João e Maria."</em> / "Chegaram João e Maria."
      </li>

      <li>
        <strong>Expressões partitivas:</strong>  
        Ex.: "A maioria" / "Grande parte" / "Metade"  
        ➝ Singular ou plural, dependendo do foco.  
        Ex.: <em>"A maioria dos alunos passou."</em>
      </li>

      <li>
        <strong>Porcentagens:</strong>  
        Ex.: <em>"10% dos alunos faltaram."</em> (concorda com "alunos")  
        Ex.: <em>"10% é pouco."</em> (concorda com o percentual)
      </li>

      <li>
        <strong>Verbo impessoal (haver, fazer):</strong>  
        <em>Haver</em> com sentido de existir = sempre singular.  
        Ex.: <em>"Havia muitas pessoas."</em>  
        <em>Fazer</em> indicando tempo = singular.  
        Ex.: <em>"Faz cinco anos."</em>
      </li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">Resumo Final</h3>
    <p class="mb-4">
      Identificar corretamente o sujeito é a chave para acertar questões de concordância. 
      Fique atento aos casos especiais e às regras de preferência do padrão culto.
    </p>
  `
},
{
  titulo: 'Concordância Nominal',
  conteudo: `
    <h2 class="text-xl font-bold mb-3">Concordância Nominal</h2>

    <p class="mb-4">
      A concordância nominal estabelece que artigos, adjetivos, numerais e pronomes devem 
      concordar com o substantivo em gênero e número.
    </p>

    <h3 class="text-lg font-semibold mb-2">1. Regra Geral</h3>
    <p class="mb-4">O adjetivo concorda com o substantivo ao qual se refere.</p>

    <blockquote class="border-l-4 pl-3 italic mb-3">
      "Casas bonitas."<br>
      "Menino inteligente."
    </blockquote>

    <h3 class="text-lg font-semibold mb-2">2. Casos Especiais</h3>
    <ul class="list-disc list-inside space-y-3 mb-4">

      <li>
        <strong>Vários substantivos + um adjetivo:</strong>  
        <ul class="list-disc list-inside ml-6 space-y-1">
          <li>Adjetivo antes → concorda com o mais próximo.</li>
          <li>Adjetivo depois → plural masculino.</li>
        </ul>
        Ex.: <em>"Linda casa e apartamento."</em><br>
        Ex.: <em>"Casa e apartamento lindos."</em>
      </li>

      <li>
        <strong>Palavras invariáveis:</strong>  
        meio, alerta, bastante, menos.  
        Ex.: <em>"Eles estavam meio cansados."</em>
      </li>

      <li>
        <strong>Anexo, incluso, obrigado:</strong> concordam.  
        Ex.: <em>"Documentos anexos."</em>  
        Ex.: <em>"Obrigada!"</em> (se falado por mulher)
      </li>

    </ul>

    <h3 class="text-lg font-semibold mb-2">Resumo</h3>
    <p class="mb-4">
      A chave é identificar qual termo o adjetivo caracteriza e se ele está antes ou depois do substantivo.
    </p>
  `
},
{
  titulo: 'Pontuação (Avançado)',
  conteudo: `
    <h2 class="text-xl font-bold mb-3">Pontuação — Uso Correto e Avançado</h2>

    <p class="mb-4">
      A pontuação organiza as ideias, marca pausas, define sentido e orienta a leitura. 
      Dominar seu uso é essencial para interpretação, redação e compreensão de textos.
    </p>

    <h3 class="text-lg font-semibold mb-2">1. Vírgula</h3>
    <p class="mb-2">Indica pausas leves, separações e deslocamentos.</p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Termos deslocados:</strong> "Hoje, começaremos o projeto."</li>
      <li><strong>Aposto/explicação:</strong> "O aluno, dedicado como sempre, finalizou cedo."</li>
      <li><strong>Enumerações:</strong> "Comprei livros, cadernos, marcadores."</li>
      <li><strong>Orações explicativas:</strong> "Os funcionários, que chegaram cedo, organizaram tudo."</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">2. Ponto e Vírgula</h3>
    <p class="mb-2">Separa ideias relacionadas, especialmente quando já há vírgulas no trecho.</p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>"Os documentos foram revisados, assinados e enviados; agora aguardamos a resposta."</li>
      <li>"O time se esforçou; o resultado não veio."</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">3. Dois Pontos</h3>
    <p class="mb-2">Introduzem explicações, exemplos ou falas.</p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>"Ele foi claro: precisamos melhorar o rendimento."</li>
      <li>"Há três motivos: tempo, custo e logística."</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">4. Travessão</h3>
    <p class="mb-2">Destaca interrupções, marca falas ou ressalta elementos.</p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>"O projeto — interrompido pela chuva — atrasou dois dias."</li>
      <li>— Você já enviou o relatório?</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">5. Parênteses</h3>
    <p class="mb-2">Inserem informações adicionais.</p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>"O evento será em Fortaleza (capital do Ceará)."</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">6. Reticências</h3>
    <p class="mb-2">Expressam continuidade, hesitação ou suspense.</p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>"Eu até poderia ajudar, mas…"</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">Resumo Final</h3>
    <p class="mb-4">
      A pontuação altera o sentido, cria ritmo e organiza ideias. 
      Em provas, é essencial identificar a intenção comunicativa para interpretar corretamente.
    </p>
  `
},
{
  titulo: 'Funções da Linguagem',
  conteudo: `
    <h2 class="text-xl font-bold mb-3">Funções da Linguagem</h2>

    <p class="mb-4">
      As funções da linguagem representam a intenção principal de um texto ou fala. 
      Cada função destaca um aspecto da comunicação: emissor, receptor, mensagem, canal, 
      código e contexto. Conhecê-las ajuda na interpretação e identificação de gêneros textuais.
    </p>

    <h3 class="text-lg font-semibold mb-2">1. Função Referencial (ou Denotativa)</h3>
    <p class="mb-2">
      Foca no <strong>contexto</strong> e na transmissão objetiva de informações.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>Textos jornalísticos.</li>
      <li>Relatórios e notas técnicas.</li>
      <li>Definições e textos científicos.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">2. Função Emotiva (ou Expressiva)</h3>
    <p class="mb-2">
      Centrada no <strong>emissor</strong>, revela emoções, opiniões e subjetividade.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>"Estou exausto hoje."</li>
      <li>Textos autobiográficos.</li>
      <li>Desabafos, cartas pessoais.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">3. Função Conativa (ou Apelativa)</h3>
    <p class="mb-2">
      Direcionada ao <strong>receptor</strong>, com o objetivo de convencer, pedir ou orientar.
      Usa verbos no imperativo.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>"Não perca esta oferta!"</li>
      <li>Propagandas.</li>
      <li>Textos instrucionais: "Leia atentamente."</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">4. Função Fática</h3>
    <p class="mb-2">
      Busca testar, iniciar ou encerrar o <strong>canal</strong> de comunicação.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>"Alô?" (telefone)</li>
      <li>"Está me ouvindo?"</li>
      <li>Conversas de cumprimento: "Tudo bem?"</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">5. Função Metalinguística</h3>
    <p class="mb-2">
      Utiliza o <strong>código</strong> para falar sobre o próprio código.
      É quando a linguagem explica a linguagem.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>Gramática explicando regras da língua.</li>
      <li>Dicionários.</li>
      <li>"A palavra 'fé' é um monossílabo tônico."</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">6. Função Poética</h3>
    <p class="mb-2">
      Valoriza a forma, o estilo e a estética da <strong>mensagem</strong>.
      O foco está no modo como se diz.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>Poemas, músicas e slogans.</li>
      <li>"O amor é um fogo que arde sem se ver."</li>
      <li>Textos com linguagem figurada.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">Resumo Final</h3>
    <p class="mb-4">
      Cada função destaca um elemento da comunicação. Um texto pode conter mais de uma função,
      mas sempre haverá uma predominante, que indica a intenção principal do emissor.
    </p>
  `
},
{
  titulo: 'Vozes Verbais',
  conteudo: `
    <h2 class="text-xl font-bold mb-3">Vozes Verbais</h2>

    <p class="mb-4">
      As vozes verbais indicam a relação entre o sujeito e a ação expressa pelo verbo.
      Elas mostram se o sujeito pratica, recebe ou participa indiretamente da ação.
      Dominar o tema é fundamental para interpretação, clareza textual e construção correta de frases.
    </p>

    <h3 class="text-lg font-semibold mb-2">1. Voz Ativa</h3>
    <p class="mb-2">O sujeito <strong>pratica</strong> a ação.</p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>"O aluno <strong>realizou</strong> a atividade."</li>
      <li>"A equipe <strong>organizou</strong> o evento."</li>
      <li>Estrutura: Sujeito + Verbo + Objeto.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">2. Voz Passiva</h3>
    <p class="mb-2">
      O sujeito <strong>recebe</strong> a ação. Pode aparecer em duas formas:
    </p>

    <h4 class="font-semibold mb-1">▪ Analítica (verbo ser + particípio)</h4>
    <ul class="list-disc list-inside space-y-1 mb-3">
      <li>"A carta <strong>foi escrita</strong> pelo diretor."</li>
      <li>"Os relatórios <strong>serão entregues</strong> amanhã."</li>
    </ul>

    <h4 class="font-semibold mb-1">▪ Sintética (pronome apassivador “se”)</h4>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>"Vendem-se casas."</li>
      <li>"Aluga-se apartamento."</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">3. Voz Reflexiva</h3>
    <p class="mb-2">
      O sujeito <strong>pratica e recebe</strong> a ação simultaneamente.
      Geralmente marcada pelos pronomes: me, te, se, nos, vos.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>"Ele <strong>se feriu</strong> no treino."</li>
      <li>"Os atletas <strong>se prepararam</strong> para a competição."</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">4. Voz Reflexiva Recíproca</h3>
    <p class="mb-2">
      Dois ou mais sujeitos praticam a ação um sobre o outro.
      Marcada por pronomes como "se" ou "um ao outro".
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>"Os amigos <strong>se abraçaram</strong>."</li>
      <li>"Eles <strong>se ajudaram</strong> durante o projeto."</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">5. Transformações Entre Vozes</h3>
    <p class="mb-2">A transformação mais comum é entre ativa e passiva.</p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Ativa:</strong> "O professor corrigiu a prova."</li>
      <li><strong>Passiva:</strong> "A prova foi corrigida pelo professor."</li>
      <li><strong>Sintética:</strong> "Corrige-se a prova."</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">Resumo Final</h3>
    <p class="mb-4">
      As vozes verbais mostram a relação do sujeito com a ação: praticando (ativa), 
      recebendo (passiva) ou participando diretamente (reflexiva).
      Compreender essas relações torna o texto mais claro e facilita resolver questões de sintaxe.
    </p>
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
    <p class="mb-4">
      Porcentagem é uma forma de representar uma razão cujo denominador é 100. 
      Ela é amplamente utilizada em situações do cotidiano, como descontos, 
      acréscimos, variações, estatísticas, análises financeiras e comparações.
    </p>

    <h3 class="text-lg font-semibold mb-2">Cálculo Básico:</h3>
    <p class="mb-2">Para calcular <strong>X%</strong> de um valor <strong>Y</strong>, basta multiplicar:</p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-3">
      Y × (X / 100)
    </p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      Ex: 25% de 200 = 200 × 0.25 = 50
    </p>

    <h3 class="text-lg font-semibold mt-4 mb-2">Fator de Multiplicação:</h3>
    <p class="mb-2">Usado para agilizar cálculos de descontos e aumentos.</p>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li><strong>Acréscimo de X%:</strong> multiplica por (1 + X/100).</li>
      <li><strong>Desconto de X%:</strong> multiplica por (1 - X/100).</li>
    </ul>

    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      Ex: Aumentar 300 em 15% → 300 × 1.15 = 345<br>
      Ex: Descontar 80 em 20% → 80 × 0.80 = 64
    </p>

    <h3 class="text-lg font-semibold mb-2">Porcentagem Inversa:</h3>
    <p class="mb-2">
      Usada quando queremos descobrir o valor original antes de um aumento ou desconto.
    </p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-3">
      Valor Original = Valor Final ÷ Fator
    </p>
    <p class="mb-4">
      Ex: Um produto com 20% de desconto passou a custar 160.<br>
      Qual era o preço original?
    </p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      Fator do desconto = 0.80<br>
      Valor Original = 160 ÷ 0.80 = 200
    </p>

    <h3 class="text-lg font-semibold mb-2">Porcentagem de Porcentagem:</h3>
    <p class="mb-2">Quando um valor recebe dois aumentos ou dois descontos sucessivos.</p>
    <p class="mb-4">Ex: Aumentar um preço 10% e depois mais 20%.</p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded">
      Fator total = 1.10 × 1.20 = 1.32<br>
      Aumento total = 32%
    </p>

    <h3 class="text-lg font-semibold mb-2 mt-4">Variação Percentual:</h3>
    <p class="mb-2">Serve para medir o quanto um valor cresceu ou diminuiu.</p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      Variação = (Valor Final - Valor Inicial) ÷ Valor Inicial × 100%
    </p>

    <p class="mb-2">Ex: Preço passou de 50 para 65.</p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      Variação = (65 - 50) ÷ 50 × 100 = 30%
    </p>

    <h3 class="text-lg font-semibold mt-4 mb-2">Regra de Três com Porcentagem:</h3>
    <p class="mb-4">Útil quando os valores aparecem misturados ao longo de tabelas ou problemas.</p>
    
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded">
      Ex: 40 é quantos % de 160?<br>
      40 ÷ 160 = 0.25 → 25%
    </p>
  `
},
{
  titulo: 'Juros Simples',
  conteudo: `
    <h2 class="text-xl font-bold mb-2">Juros Simples</h2>
    <p class="mb-4">
      Juros simples é um tipo de acréscimo calculado apenas sobre o 
      <strong>capital inicial</strong>. O valor do juro não se acumula ao longo do tempo. 
      É muito utilizado em financiamentos curtos, empréstimos simples, carnês e 
      negociações comerciais.
    </p>

    <h3 class="text-lg font-semibold mb-2">Fórmula Principal</h3>
    <p class="mb-2">O juro é calculado pela fórmula:</p>
    
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      J = C × i × t
    </p>

    <ul class="list-disc list-inside space-y-2 mb-4">
      <li><strong>C:</strong> capital (valor inicial)</li>
      <li><strong>i:</strong> taxa de juros (em decimal: 10% → 0.10)</li>
      <li><strong>t:</strong> tempo (deve estar na mesma unidade da taxa)</li>
      <li><strong>J:</strong> juro gerado</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">Montante</h3>
    <p class="mb-2">Montante é o valor total após a aplicação dos juros:</p>

    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      M = C + J
    </p>

    <h3 class="text-lg font-semibold mb-2">Exemplo 1 — Básico</h3>
    <p class="mb-2">
      Calcule o juro simples de um empréstimo de R$1.000 a uma taxa de 5% ao mês durante 4 meses.
    </p>

    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      C = 1000<br>
      i = 0.05<br>
      t = 4<br>
      J = 1000 × 0.05 × 4 = 200<br>
      M = 1000 + 200 = 1200
    </p>

    <h3 class="text-lg font-semibold mb-2">Exemplo 2 — Encontrar o Capital</h3>
    <p class="mb-2">
      Um juro de R$180 foi gerado a uma taxa de 3% ao mês por 6 meses. Qual era o capital?
    </p>

    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      J = C × i × t<br>
      180 = C × 0.03 × 6<br>
      180 = C × 0.18<br>
      C = 180 ÷ 0.18 = 1000
    </p>

    <h3 class="text-lg font-semibold mb-2">Exemplo 3 — Encontrar a Taxa</h3>
    <p class="mb-2">
      Um capital de R$800 gerou R$160 de juros em 10 meses. Qual foi a taxa mensal?
    </p>

    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      160 = 800 × i × 10<br>
      160 = 8000i<br>
      i = 160 ÷ 8000 = 0.02 → 2% ao mês
    </p>

    <h3 class="text-lg font-semibold mb-2">Exemplo 4 — Encontrar o Tempo</h3>
    <p class="mb-2">
      Um investimento de R$1.200 rendeu R$360 de juros a uma taxa de 2% ao mês. Quanto tempo durou?
    </p>

    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      360 = 1200 × 0.02 × t<br>
      360 = 24t<br>
      t = 360 ÷ 24 = 15 meses
    </p>

    <h3 class="text-lg font-semibold mt-4 mb-2">Quando usar Juros Simples?</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>Empréstimos de curto prazo</li>
      <li>Financiamentos básicos</li>
      <li>Compras em carnês</li>
      <li>Rendimentos não acumulativos</li>
      <li>Contratos onde a taxa é aplicada somente ao capital inicial</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">Resumo Final</h3>
    <p>
      No juros simples, o valor cresce sempre de forma linear. 
      É fácil de calcular e ótimo para problemas diretos, regra de três e finanças básicas.
    </p>
  `
},
{
  titulo: 'Juros Compostos',
  conteudo: `
    <h2 class="text-xl font-bold mb-2">Juros Compostos</h2>
    <p class="mb-4">
      Juros compostos são aqueles em que os juros do período são incorporados ao capital, 
      formando um <strong>novo valor</strong> que servirá de base para o cálculo dos juros seguintes. 
      Por isso, são chamados de <strong>juros sobre juros</strong> e apresentam crescimento exponencial.
    </p>

    <h3 class="text-lg font-semibold mb-2">Fórmula Principal do Montante</h3>
    <p class="mb-2">O cálculo do montante em juros compostos é dado por:</p>

    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      M = C × (1 + i)<sup>t</sup>
    </p>

    <ul class="list-disc list-inside space-y-2 mb-4">
      <li><strong>C:</strong> Capital inicial</li>
      <li><strong>i:</strong> Taxa de juros (decimal: 8% → 0.08)</li>
      <li><strong>t:</strong> Tempo (mesma unidade da taxa)</li>
      <li><strong>M:</strong> Montante final</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">Fórmula do Juro</h3>
    <p class="mb-2">O juro pode ser obtido pela diferença:</p>

    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      J = M − C
    </p>

    <h3 class="text-lg font-semibold mb-2">Exemplo 1 — Básico</h3>
    <p class="mb-2">
      Calcule o montante de R$1.000 aplicados a 10% ao mês durante 3 meses.
    </p>

    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      M = 1000 × (1 + 0.10)<sup>3</sup><br>
      M = 1000 × (1.1)<sup>3</sup><br>
      M = 1000 × 1.331 = 1331<br>
      J = 1331 − 1000 = 331
    </p>

    <h3 class="text-lg font-semibold mb-2">Exemplo 2 — Encontrar o Capital</h3>
    <p class="mb-2">
      Após 6 meses a 5% ao mês, um investimento tornou-se R$2.680. 
      Qual era o capital inicial?
    </p>

    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      M = C × (1 + i)<sup>t</sup><br>
      2680 = C × (1.05)<sup>6</sup><br>
      2680 = C × 1.3401<br>
      C = 2680 ÷ 1.3401 ≈ 2000
    </p>

    <h3 class="text-lg font-semibold mb-2">Exemplo 3 — Encontrar a Taxa</h3>
    <p class="mb-2">
      Um capital de R$5.000 tornou-se R$6.050 em 4 meses. 
      Qual foi a taxa mensal?
    </p>

    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      6050 = 5000 × (1 + i)<sup>4</sup><br>
      6050 ÷ 5000 = (1 + i)<sup>4</sup><br>
      1.21 = (1 + i)<sup>4</sup><br>
      1 + i = 1.21<sup>1/4</sup> ≈ 1.0488<br>
      i ≈ 0.0488 → 4.88% ao mês
    </p>

    <h3 class="text-lg font-semibold mb-2">Exemplo 4 — Encontrar o Tempo</h3>
    <p class="mb-2">
      Um investimento de R$800 rendeu R$1.200 a 6% ao mês. 
      Quanto tempo permaneceu aplicado?
    </p>

    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      1200 = 800 × (1.06)<sup>t</sup><br>
      1.5 = (1.06)<sup>t</sup><br>
      t = log(1.5) / log(1.06) ≈ 6.96 meses
    </p>

    <h3 class="text-lg font-semibold mb-2">Comparação: Juros Simples × Compostos</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li><strong>Simples:</strong> Crescimento linear</li>
      <li><strong>Compostos:</strong> Crescimento exponencial</li>
      <li><strong>Simples:</strong> Juros sobre o capital inicial</li>
      <li><strong>Compostos:</strong> Juros sobre o capital + juros acumulados</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">Onde aparecem Juros Compostos?</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>Financiamentos</li>
      <li>Empréstimos bancários</li>
      <li>Cartões de crédito</li>
      <li>Investimentos (poupança, CDB, Tesouro, fundos)</li>
      <li>Correções monetárias</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">Resumo Final</h3>
    <p>
      Juros compostos são o modelo mais usado no mercado financeiro. Seu crescimento 
      acelerado exige atenção em dívidas e favorece aplicações de longo prazo. 
      Entender a fórmula e suas variações é essencial para resolver questões do ENEM, 
      concursos e vida financeira real.
    </p>
  `
},
{
  titulo: 'Regra de Três',
  conteudo: `
    <h2 class="text-xl font-bold mb-2">Regra de Três</h2>

    <p class="mb-4">
      A <strong>Regra de Três</strong> é um método matemático usado para resolver problemas 
      que envolvem proporcionalidade entre duas grandezas. A ideia é simples: se duas grandezas 
      estão relacionadas, podemos montar uma proporção para descobrir um valor desconhecido.
    </p>

    <h3 class="text-lg font-semibold mb-2">Estrutura Básica</h3>
    <p class="mb-2">A regra de três relaciona três valores conhecidos para encontrar o quarto:</p>

    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      a —— b<br>
      c —— x
    </p>

    <p class="mb-4">O valor de <strong>x</strong> sempre é encontrado por:</p>

    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      x = (b × c) ÷ a
    </p>

    <h3 class="text-lg font-semibold mb-2">Tipos de Regra de Três</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li><strong>Simples:</strong> envolve duas grandezas.</li>
      <li><strong>Composta:</strong> envolve três ou mais grandezas.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">1. Regra de Três Simples</h3>
    <p class="mb-2">Pode ser:</p>

    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Direta:</strong> quando uma grandeza aumenta e a outra também.</li>
      <li><strong>Inversa:</strong> quando uma aumenta e a outra diminui.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">Exemplo — Proporção Direta</h3>
    <p class="mb-2">
      Se 4 litros de tinta pintam 30 m², quantos m² 10 litros pintam?
    </p>

    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      4 —— 30<br>
      10 —— x<br><br>
      x = (10 × 30) ÷ 4 = 300 ÷ 4 = 75 m²
    </p>

    <h3 class="text-lg font-semibold mb-2">Exemplo — Proporção Inversa</h3>
    <p class="mb-2">Se 8 operários constroem um muro em 15 dias, quantos dias levam 12 operários?</p>

    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      Grandeza operários × dias é inversa<br><br>
      8 —— 15<br>
      12 —— x<br><br>
      Invertendo 12 → 1/12:<br>
      x = (15 × 8) ÷ 12 = 120 ÷ 12 = 10 dias
    </p>

    <h3 class="text-lg font-semibold mb-2">2. Regra de Três Composta</h3>
    <p class="mb-2">
      Usada quando o problema envolve mais de duas grandezas, como tempo, velocidade, consumo, produção etc.
      Primeiro analisamos cada grandeza como direta ou inversa em relação ao que queremos descobrir.
    </p>

    <h3 class="text-lg font-semibold mb-2">Exemplo — Composta</h3>
    <p class="mb-2">
      5 máquinas produzem 200 peças em 4 horas.  
      Quantas peças 8 máquinas produzem em 6 horas?
    </p>

    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      Máquinas ↑ → Produção ↑ (Direta)<br>
      Horas ↑ → Produção ↑ (Direta)<br><br>

      5 —— 200 —— 4<br>
      8 —— x   —— 6<br><br>

      x = 200 × (8/5) × (6/4)<br>
      x = 200 × 1.6 × 1.5 = 480
    </p>

    <h3 class="text-lg font-semibold mb-2">Erros Comuns</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>Confundir grandezas diretas com inversas.</li>
      <li>Alterar a ordem das grandezas, deixando-as “desalinhadas”.</li>
      <li>Esquecer de converter unidades (horas → minutos, km → m).</li>
      <li>Não conferir se faz sentido aumentar ou diminuir o resultado.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">Resumo Final</h3>
    <p>
      A regra de três é uma ferramenta essencial na resolução de questões de porcentagem,
      velocidade média, escalas, escala de mapas, densidade, economia e problemas práticos.
      Dominar a lógica das grandezas facilita muito o raciocínio matemático.
    </p>
  `
},
{
  titulo: 'Funções',
  conteudo: `
    <h2 class="text-xl font-bold mb-2">Funções</h2>
    <p class="mb-4">
      Uma função é uma relação entre duas variáveis, onde cada valor da variável independente (x) 
      está associado a um único valor da variável dependente (y). Em Matemática, costuma-se escrever:
    </p>

    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      y = f(x)
    </p>

    <h3 class="text-lg font-semibold mb-2">Domínio e Imagem</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li><strong>Domínio (D):</strong> conjunto de valores possíveis para x.</li>
      <li><strong>Imagem (Im):</strong> conjunto de valores possíveis para y = f(x).</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">Função Afim (Linear)</h3>
    <p class="mb-2">É da forma:</p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      f(x) = ax + b
    </p>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li><strong>a</strong>: coeficiente angular (inclinação da reta)</li>
      <li><strong>b</strong>: coeficiente linear (ponto onde a reta corta o eixo y)</li>
    </ul>

    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      Exemplo: f(x) = 2x + 3 → f(4) = 2·4 + 3 = 11
    </p>

    <h3 class="text-lg font-semibold mb-2">Função Quadrática</h3>
    <p class="mb-2">É da forma:</p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      f(x) = ax² + bx + c
    </p>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>O gráfico é uma parábola.</li>
      <li>Se a > 0, a parábola é voltada para cima.</li>
      <li>Se a &lt; 0, é voltada para baixo.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">Função Exponencial</h3>
    <p class="mb-2">Da forma:</p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      f(x) = a · b^x , com b > 0 e b ≠ 1
    </p>

    <p class="mb-4">Usada para crescimento e decaimento, como juros compostos, população, radioatividade etc.</p>

    <h3 class="text-lg font-semibold mb-2">Função Injetora, Sobrejetora e Bijetora</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li><strong>Injetora:</strong> valores diferentes de x geram valores diferentes de y.</li>
      <li><strong>Sobrejetora:</strong> toda a imagem coincide com o contradomínio.</li>
      <li><strong>Bijetora:</strong> é injetora e sobrejetora ao mesmo tempo.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">Composição de Funções</h3>
    <p class="mb-2">Dada f(x) e g(x), a composição é:</p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      (f ∘ g)(x) = f(g(x))
    </p>

    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded">
      Exemplo: f(x) = 2x e g(x) = x + 1  
      → (f ∘ g)(x) = f(x + 1) = 2(x + 1) = 2x + 2
    </p>
  `
},
{
  titulo: 'Estatística',
  conteudo: `
    <h2 class="text-xl font-bold mb-2">Estatística</h2>
    <p class="mb-4">
      Estatística é a área da matemática responsável pela coleta, organização, análise e interpretação de dados. 
      É amplamente usada em pesquisas, controle de qualidade, ciência de dados e tomada de decisões.
    </p>

    <h3 class="text-lg font-semibold mb-2">Tipos de Dados</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li><strong>Qualitativos:</strong> representam categorias (ex: cor dos olhos, estado civil).</li>
      <li><strong>Quantitativos:</strong> representam números (ex: altura, idade, peso).</li>
      <li><strong>Discretos:</strong> valores contáveis (ex: número de filhos).</li>
      <li><strong>Contínuos:</strong> valores em intervalos reais (ex: temperatura, velocidade).</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">Medidas de Tendência Central</h3>

    <h4 class="text-md font-semibold mb-1">Média</h4>
    <p class="mb-2">Soma dos valores dividida pela quantidade de elementos.</p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      Ex: Dados: 4, 8, 6 → Média = (4+8+6)/3 = 6
    </p>

    <h4 class="text-md font-semibold mb-1">Mediana</h4>
    <p class="mb-2">
      Valor central quando os dados estão ordenados.  
      Se houver quantidade par de valores, é a média dos dois centrais.
    </p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      Ex: 3, 5, 9 → Mediana = 5  
      Ex: 2, 4, 6, 10 → Mediana = (4+6)/2 = 5
    </p>

    <h4 class="text-md font-semibold mb-1">Moda</h4>
    <p class="mb-2">Valor que mais se repete no conjunto.</p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      Ex: 7, 2, 7, 9, 7, 3 → Moda = 7
    </p>

    <h3 class="text-lg font-semibold mb-2">Medidas de Dispersão</h3>

    <h4 class="text-md font-semibold mb-1">Amplitude</h4>
    <p class="mb-2">Diferença entre o maior e o menor valor.</p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      Ex: Dados 2, 5, 9 → Amplitude = 9 - 2 = 7
    </p>

    <h4 class="text-md font-semibold mb-1">Variância</h4>
    <p class="mb-2">
      Mede quanto os valores se afastam da média.  
      Fórmula da variância populacional:
    </p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      σ² = Σ(x - μ)² / N
    </p>

    <h4 class="text-md font-semibold mb-1">Desvio Padrão</h4>
    <p class="mb-2">É a raiz quadrada da variância. Mede a dispersão de forma mais intuitiva.</p>

    <h3 class="text-lg font-semibold mb-2">Tabelas e Gráficos</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li><strong>Tabela de frequências:</strong> mostra a quantidade de ocorrências de cada valor.</li>
      <li><strong>Gráfico de barras:</strong> usado para dados categóricos.</li>
      <li><strong>Histograma:</strong> usado para dados contínuos em intervalos.</li>
      <li><strong>Setores (pizza):</strong> mostra proporções em porcentagens.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">Medidas de Posição (Percentis e Quartis)</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li><strong>Quartis:</strong> dividem os dados em 4 partes iguais (Q1, Q2, Q3).</li>
      <li><strong>Percentis:</strong> dividem os dados em 100 partes.</li>
      <li><strong>Q2:</strong> é a própria mediana.</li>
    </ul>

    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded">
      Ex: Q1 representa 25% dos dados abaixo dele.  
      Q3 representa 75% dos dados abaixo dele.
    </p>
  `
},
{
  titulo: 'Matrizes',
  conteudo: `
    <h2 class="text-xl font-bold mb-2">Matrizes</h2>
    <p class="mb-4">
      Matrizes são tabelas organizadas em linhas e colunas que representam dados numéricos. 
      São amplamente usadas em sistemas lineares, computação, gráficos, estatística e diversas 
      áreas da matemática.
    </p>

    <h3 class="text-lg font-semibold mb-2">Definições Básicas</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>
        <strong>Matriz m × n:</strong> possui <em>m</em> linhas e <em>n</em> colunas.
        <br>Ex: Matriz 2 × 3 → 2 linhas, 3 colunas.
      </li>
      <li>
        <strong>Elemento a<sub>ij</sub>:</strong> está na linha <em>i</em> e coluna <em>j</em>.
      </li>
      <li>
        <strong>Matriz quadrada:</strong> m = n → mesma quantidade de linhas e colunas.
      </li>
      <li>
        <strong>Matriz identidade (I):</strong> possui 1 na diagonal principal e 0 nos demais elementos.
      </li>
      <li>
        <strong>Matriz nula:</strong> todos os elementos iguais a 0.
      </li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">Operações com Matrizes</h3>

    <h4 class="text-md font-semibold mb-1">1. Soma e Subtração</h4>
    <p class="mb-2">
      Só podem ser somadas matrizes de mesma ordem.  
      A soma é feita elemento por elemento.
    </p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      Ex:  
      A = [1 2]<br>
      B = [3 4]<br>
      A + B = [1+3  2+4] = [4 6]
    </p>

    <h4 class="text-md font-semibold mb-1">2. Multiplicação por Escalar</h4>
    <p class="mb-2">Multiplica-se cada elemento da matriz por um número real.</p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      Ex: 3 × [2 5] = [6 15]
    </p>

    <h4 class="text-md font-semibold mb-1">3. Multiplicação de Matrizes</h4>
    <p class="mb-2">
      Para multiplicar A (m × n) por B (n × p), o número de colunas de A deve ser igual ao número de linhas de B.
      O resultado é uma matriz m × p.
    </p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      Ex:<br>
      A = [1 2]<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[3 4]<br>
      B = [2 0]<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1 5]<br><br>
      A × B = [1×2 + 2×1   1×0 + 2×5] = [4 10]<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[3×2 + 4×1   3×0 + 4×5] = [10 20]
    </p>

    <h3 class="text-lg font-semibold mb-2">Transposta</h3>
    <p class="mb-2">
      A transposta de uma matriz A (denotada Aᵗ) é obtida trocando linhas por colunas.
    </p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      Ex:<br>
      A = [1 3]<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[2 4]<br>
      Aᵗ = [1 2]<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[3 4]
    </p>

    <h3 class="text-lg font-semibold mb-2">Determinante de Matrizes</h3>

    <h4 class="text-md font-semibold mb-1">Matriz 2 × 2</h4>
    <p class="mb-2">Fórmula: det(A) = ad - bc</p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      A = [a b]<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[c d]<br>
      det(A) = ad - bc
    </p>

    <h4 class="text-md font-semibold mb-1">Matriz 3 × 3 (Regra de Sarrus)</h4>
    <p class="mb-2">Repete-se as duas primeiras colunas e soma-se produtos das diagonais.</p>

    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      A = [a b c]<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[d e f]<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[g h i]<br><br>
      det(A) = (a·e·i + b·f·g + c·d·h) − (c·e·g + b·d·i + a·f·h)
    </p>

    <h3 class="text-lg font-semibold mb-2">Matriz Inversa</h3>
    <p class="mb-2">
      A inversa de uma matriz A é outra matriz A⁻¹ tal que:
    </p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      A × A⁻¹ = I
    </p>
    <p class="mb-2">
      Para matrizes 2 × 2:
    </p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      A = [a b]<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[c d]<br>
      A⁻¹ = (1/(ad - bc)) × [d -b]<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[-c a]
    </p>

    <h3 class="text-lg font-semibold mb-2">Sistemas Lineares e Matrizes</h3>
    <p class="mb-2">As matrizes podem representar sistemas de equações lineares.</p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      Ex:  
      Sistema:<br>
      2x + 3y = 8<br>
      x − y = 1<br><br>
      Forma matricial: A·X = B<br>
      A = [2 3]<br>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[1 -1]<br>
      X = [x y]<br>
      B = [8 1]
    </p>

    <p class="mb-4">
      O estudo de matrizes é essencial para álgebra linear, computação gráfica, 
      machine learning, sistemas lineares e diversas aplicações modernas.
    </p>
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
    <h2 class="text-xl font-bold mb-2">Brasil Colônia (1500–1822)</h2>

    <p class="mb-4">
      O período colonial brasileiro teve início com a chegada dos portugueses em 1500 e terminou 
      com a Independência em 1822. Durante mais de três séculos, o Brasil foi administrado por 
      Portugal segundo interesses econômicos mercantilistas, com forte exploração de recursos 
      naturais, mão de obra escravizada e uma sociedade rigidamente hierarquizada.
    </p>

    <h3 class="text-lg font-semibold mb-3">Economia Colonial</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>
        <strong>Pau-brasil (1500–1530):</strong> exploração do litoral, uso de mão de obra indígena pelo escambo.
      </li>
      <li>
        <strong>Cana-de-açúcar (séculos XVI–XVII):</strong> principal produto exportado; introdução do 
        sistema de plantation (latifúndio, monocultura e escravidão africana).
      </li>
      <li>
        <strong>Ciclo do Ouro (século XVIII):</strong> enriquecimento de Minas Gerais; cobrança de impostos 
        como o quinto e a derrama; surgimento de sociedades urbanizadas.
      </li>
      <li>
        <strong>Pecuária:</strong> expandiu-se para o interior, sustentando engenhos e ocupando regiões afastadas.
      </li>
    </ul>

    <h3 class="text-lg font-semibold mb-3">Administração e Organização</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>
        <strong>Capitanias Hereditárias (1534):</strong> tentativa de colonização descentralizada; 
        maioria fracassou por falta de recursos e ataques indígenas.
      </li>
      <li>
        <strong>Governo-Geral (1549):</strong> centralização administrativa; primeiro governador foi Tomé de Sousa.
      </li>
      <li>
        <strong>Atuação dos Jesuítas:</strong> catequese indígena, criação de escolas, conflitos com colonos 
        pelo uso da mão de obra indígena.
      </li>
      <li>
        <strong>Sistema Colonial:</strong> pacto colonial — colônia produz matérias-primas, metrópole monopoliza o comércio.
      </li>
    </ul>

    <h3 class="text-lg font-semibold mb-3">Sociedade Colonial</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li><strong>Estrutura patriarcal:</strong> família extensa e controle masculino.</li>
      <li><strong>Escravismo:</strong> base econômica e social; tráfico negreiro intensivo.</li>
      <li><strong>Elites coloniais:</strong> senhores de engenho, proprietários de terras.</li>
      <li><strong>Populações marginalizadas:</strong> indígenas, escravizados africanos e mestiços.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-3">Conflitos e Resistências</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>
        <strong>Invasões Holandesas (1624–1654):</strong> domínio no Nordeste, modernização dos engenhos, 
        governo de Maurício de Nassau.
      </li>
      <li>
        <strong>Guerra dos Palmares:</strong> maior quilombo do período colonial; liderança de Zumbi (século XVII).
      </li>
      <li>
        <strong>Revoltas Mineradoras:</strong> Inconfidência Mineira (1789) e Conjuração Baiana (1798), 
        influenciadas pelo Iluminismo.
      </li>
      <li>
        <strong>Revoltas Nativistas:</strong> Beckman (1684), Mascates (1710), Emboabas (1708–1709).
      </li>
    </ul>

    <h3 class="text-lg font-semibold mb-3">Transformações do Início do Século XIX</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>
        <strong>1808 — Chegada da Família Real:</strong> abertura dos portos, fim do pacto colonial, 
        criação de instituições administrativas e culturais.
      </li>
      <li>
        <strong>Elevação a Reino Unido (1815):</strong> Brasil deixa de ser colônia e torna-se parte do 
        Reino Unido de Portugal, Brasil e Algarves.
      </li>
      <li>
        <strong>Movimentos Pró-Independência:</strong> tensões políticas, desejo de autonomia e 
        fortalecimento das elites brasileiras.
      </li>
    </ul>

    <p class="mt-4">
      O período colonial moldou a formação econômica, social e cultural do Brasil, deixando 
      marcas profundas na estrutura agrária, no uso da escravidão e na organização política que 
      influenciariam todo o período posterior.
    </p>
  `
}, 
{
  titulo: 'Brasil Império',
  conteudo: `
    <h2 class="text-xl font-bold mb-2">Brasil Império (1822–1889)</h2>

    <p class="mb-4">
      O Brasil Império começa com a Independência em 1822 e termina em 1889, com a Proclamação 
      da República. Foi marcado por disputas políticas, formação do Estado nacional, conflitos 
      regionais, economia agroexportadora e, ao final, a abolição da escravidão.
    </p>

    <h3 class="text-lg font-semibold mb-3">1. Primeiro Reinado (1822–1831)</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li><strong>Independência (1822):</strong> ruptura com Portugal sob liderança de D. Pedro I.</li>
      <li><strong>Constituição de 1824:</strong> instituiu o voto censitário e o Poder Moderador.</li>
      <li><strong>Noite das Garrafadas (1831):</strong> confronto entre portugueses e brasileiros.</li>
      <li><strong>Renúncia de D. Pedro I:</strong> pressões políticas e crise econômica resultaram em sua abdicação.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-3">2. Período Regencial (1831–1840)</h3>
    <p class="mb-2">Fase marcada por instabilidade política, disputas regionais e revoltas.</p>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li><strong>Ato Adicional (1834):</strong> descentralizou poderes e criou Assembleias Provinciais.</li>
      <li><strong>Revoltas Regenciais:</strong> Cabanagem, Balaiada, Sabinada e Farroupilha.</li>
      <li><strong>Golpe da Maioridade (1840):</strong> D. Pedro II assume o trono aos 14 anos.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-3">3. Segundo Reinado (1840–1889)</h3>
    <h4 class="text-md font-semibold mb-1">Política Interna</h4>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li><strong>Revezamento de partidos:</strong> Conservadores e Liberais no sistema de "parlamentarismo às avessas".</li>
      <li><strong>Estabilidade política:</strong> centralização do poder nas mãos do Imperador.</li>
    </ul>

    <h4 class="text-md font-semibold mb-1">Economia</h4>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li><strong>Café:</strong> principal produto econômico; expansão no Vale do Paraíba e Oeste Paulista.</li>
      <li><strong>Trabalho escravo:</strong> base da produção até 1888.</li>
      <li><strong>Imigração:</strong> início da entrada de italianos e europeus, principalmente após 1870.</li>
    </ul>

    <h4 class="text-md font-semibold mb-1">Questão Escravista</h4>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li><strong>Lei Eusébio de Queirós (1850):</strong> proibiu o tráfico negreiro.</li>
      <li><strong>Lei do Ventre Livre (1871):</strong> libertou filhos de escravizadas.</li>
      <li><strong>Lei dos Sexagenários (1885):</strong> liberdade para escravos com mais de 60 anos.</li>
      <li><strong>Lei Áurea (1888):</strong> aboliu a escravidão no Brasil.</li>
    </ul>

    <h4 class="text-md font-semibold mb-1">Política Externa</h4>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li><strong>Guerra do Paraguai (1864–1870):</strong> conflito mais marcante do período; grande desgaste econômico e político.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-3">4. Crise do Império e Proclamação da República</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li><strong>Ruptura com as Forças Armadas:</strong> militares insatisfeitos com pouca influência política.</li>
      <li><strong>Conflito com a Igreja:</strong> a Questão Religiosa abala o apoio católico ao Imperador.</li>
      <li><strong>Descontentamento das elites:</strong> cafeicultores paulistas defendem o republicanismo.</li>
      <li><strong>1889:</strong> Marechal Deodoro da Fonseca lidera o golpe e proclama a República.</li>
    </ul>

    <p class="mt-4">
      O Brasil Império foi fundamental na construção do Estado brasileiro, consolidando fronteiras, 
      promovendo a unidade nacional e estruturando a economia, mas carregou desigualdades marcantes 
      e um sistema político excludente.
    </p>
  `
},
{
  titulo: 'Brasil Império',
  conteudo: `
    <h2 class="text-xl font-bold mb-2">Brasil Império (1822–1889)</h2>
    <p class="mb-4">
      O período imperial começa com a <strong>Independência do Brasil</strong> e termina com a 
      <strong>Proclamação da República</strong>. Foi marcado pela centralização política, disputas regionais, 
      manutenção da escravidão e, posteriormente, pela luta pela sua abolição.
    </p>

    <h3 class="text-lg font-semibold mt-4 mb-2">Primeiro Reinado (1822–1831)</h3>
    <ul class="list-disc list-inside space-y-2">
      <li><strong>1822:</strong> Dom Pedro I declara a Independência.</li>
      <li><strong>1824:</strong> Constituição Imperial, de caráter centralizador.</li>
      <li><strong>Confederação do Equador (1824):</strong> movimento separatista no Nordeste contra o autoritarismo imperial.</li>
      <li><strong>Abdicação de D. Pedro I (1831):</strong> pressões políticas e crise econômica.</li>
    </ul>

    <h3 class="text-lg font-semibold mt-4 mb-2">Período Regencial (1831–1840)</h3>
    <p>Período sem imperador, marcado por forte instabilidade e revoltas regionais.</p>
    <ul class="list-disc list-inside space-y-2">
      <li><strong>Cabanagem (PA)</strong></li>
      <li><strong>Balaiada (MA)</strong></li>
      <li><strong>Sabinada (BA)</strong></li>
      <li><strong>Revolução Farroupilha (RS)</strong></li>
      <li><strong>Golpe da Maioridade (1840):</strong> D. Pedro II assume com 14 anos.</li>
    </ul>

    <h3 class="text-lg font-semibold mt-4 mb-2">Segundo Reinado (1840–1889)</h3>
    <ul class="list-disc list-inside space-y-2">
      <li><strong>Ingresso de D. Pedro II</strong> com apoio liberal.</li>
      <li><strong>Café</strong> como principal produto econômico.</li>
      <li><strong>Guerra do Paraguai (1864–1870):</strong> maior conflito sul-americano.</li>
      <li><strong>Questão Religiosa:</strong> conflito entre Estado e Igreja.</li>
      <li><strong>Questão Militar:</strong> militares ganham força após a guerra.</li>
      <li><strong>Abolicionismo:</strong> Lei Eusébio de Queirós (1850), Lei do Ventre Livre (1871), Lei Áurea (1888).</li>
      <li><strong>1889:</strong> Proclamação da República por Marechal Deodoro da Fonseca.</li>
    </ul>

    <p class="mt-4">
      O fim do Império foi resultado da perda de apoio de três grupos fundamentais: 
      <strong>militares, cafeicultores e Igreja Católica</strong>, culminando na queda da monarquia.
    </p>
  `
},
{
  titulo: 'República Velha',
  conteudo: `
    <h2 class="text-xl font-bold mb-2">República Velha (1889–1930)</h2>
    <p class="mb-4">
      A República Velha, também chamada de <strong>Primeira República</strong>, foi o período inicial da história republicana 
      do Brasil. Dividiu-se em dois momentos: <strong>República da Espada</strong> (governos militares) e 
      <strong>República Oligárquica</strong> (predomínio político das elites rurais). Marcada pelo coronelismo, voto fraudado, 
      economia cafeeira e movimentos sociais.
    </p>

    <h3 class="text-lg font-semibold mt-4 mb-2">República da Espada (1889–1894)</h3>
    <ul class="list-disc list-inside space-y-2">
      <li><strong>Marechal Deodoro da Fonseca (1889–1891):</strong> crise econômica e fechamento do Congresso.</li>
      <li><strong>Marechal Floriano Peixoto (1891–1894):</strong> repressão às revoltas; consolidação da República.</li>
      <li><strong>Revolução Federalista (RS):</strong> conflito civil contra o governo central.</li>
      <li><strong>Revolta da Armada:</strong> revoltas da Marinha contra o governo florianista.</li>
    </ul>

    <h3 class="text-lg font-semibold mt-4 mb-2">República Oligárquica (1894–1930)</h3>
    <p>Período de domínio das oligarquias estaduais, especialmente São Paulo e Minas Gerais (“política do café com leite”).</p>
    <ul class="list-disc list-inside space-y-2">
      <li><strong>Coronelismo:</strong> poder local dos coronéis sobre voto, segurança e relações sociais.</li>
      <li><strong>Voto de Cabresto:</strong> manipulação eleitoral.</li>
      <li><strong>Política dos Governadores:</strong> troca de apoio entre presidentes e oligarquias estaduais.</li>
      <li><strong>Convênio de Taubaté (1906):</strong> sustentação artificial do preço do café.</li>
    </ul>

    <h3 class="text-lg font-semibold mt-4 mb-2">Revoltas Sociais e Populares</h3>
    <ul class="list-disc list-inside space-y-2">
      <li><strong>Revolta da Vacina (1904):</strong> reação à vacinação obrigatória no Rio de Janeiro.</li>
      <li><strong>Revolta da Chibata (1910):</strong> marujos contra castigos físicos.</li>
      <li><strong>Contestado (1912–1916):</strong> conflito social no Sul do país.</li>
      <li><strong>Greves Operárias (década de 1910):</strong> surgimento do movimento operário e anarquista.</li>
    </ul>

    <h3 class="text-lg font-semibold mt-4 mb-2">Crise e Fim da República Velha</h3>
    <ul class="list-disc list-inside space-y-2">
      <li><strong>Crise do café:</strong> queda dos preços internacionais após 1929.</li>
      <li><strong>Movimento Tenentista:</strong> revoltas militares pela moralização política.</li>
      <li><strong>Aliança Liberal (1930):</strong> oposição ao domínio paulista.</li>
      <li><strong>Revolução de 1930:</strong> deposição de Washington Luís e ascensão de Getúlio Vargas.</li>
    </ul>

    <p class="mt-4">
      O período terminou com a ruptura do sistema oligárquico, abrindo espaço para o fortalecimento do Estado e as 
      transformações políticas e econômicas da Era Vargas.
    </p>
  `
},
{
  titulo: 'Era Vargas',
  conteudo: `
    <h2 class="text-xl font-bold mb-2">Era Vargas (1930–1945)</h2>
    <p class="mb-4">
      A Era Vargas corresponde ao período em que <strong>Getúlio Vargas</strong> governou o Brasil de forma centralizada 
      e com forte intervenção estatal. Esse período marcou profundas transformações na economia, na política e nas 
      relações trabalhistas, consolidando as bases do Estado moderno brasileiro.
    </p>

    <h3 class="text-lg font-semibold mt-4 mb-2">1. Governo Provisório (1930–1934)</h3>
    <p class="mb-2">Vargas assume após a Revolução de 1930 e dissolve o Congresso Nacional.</p>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>Criação dos Ministérios do Trabalho, Indústria e Comércio.</li>
      <li>Intervenção nos estados e nomeação de interventores.</li>
      <li>Centralização administrativa.</li>
      <li>Código Eleitoral de 1932: voto secreto e feminino.</li>
      <li>Revolução Constitucionalista de 1932 em São Paulo.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">2. Governo Constitucional (1934–1937)</h3>
    <p class="mb-2">Nova Constituição é promulgada em 1934, modernizando o Estado brasileiro.</p>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>Leis trabalhistas começam a ganhar força.</li>
      <li>Aumento da atuação estatal na economia.</li>
      <li>Crescimento da oposição, especialmente da Ação Integralista Brasileira (AIB) e Aliança Nacional Libertadora (ANL).</li>
      <li>Plano Cohen (1937): falso documento usado como justificativa para golpe.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">3. Estado Novo (1937–1945)</h3>
    <p class="mb-2">
      Regime ditatorial implantado por Vargas, caracterizado por censura, centralização e propaganda política.
    </p>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>Suspensão do Congresso e dos partidos políticos.</li>
      <li>Nova Constituição (Polaca): inspiração autoritária.</li>
      <li>DIP (Departamento de Imprensa e Propaganda): controle dos meios de comunicação.</li>
      <li>Industrialização acelerada com empresas estatais: CSN, Vale, Petrobras (projeto).</li>
      <li>Fortalecimento das leis trabalhistas e criação da CLT (1943).</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">4. Relações Externas e Segunda Guerra Mundial</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>Inicial neutralidade, depois alinhamento aos Aliados.</li>
      <li>Envio da FEB (Força Expedicionária Brasileira) à Itália.</li>
      <li>Pressões democráticas para o fim da ditadura.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">5. Fim da Era Vargas</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>Queda de Vargas em 1945 devido à pressão militar e popular.</li>
      <li>Abertura democrática e eleições para presidente.</li>
    </ul>

    <p class="mt-4">
      A Era Vargas transformou o Brasil ao estabelecer direitos trabalhistas, incentivar a industrialização e fortalecer 
      o Estado. Mesmo após sua queda, sua influência permaneceu marcante na política brasileira.
    </p>
  `
},
{
  titulo: 'Ditadura Militar',
  conteudo: `
    <h2 class="text-xl font-bold mb-2">Ditadura Militar (1964–1985)</h2>
    <p class="mb-4">
      A Ditadura Militar foi um regime autoritário instaurado após o golpe de 31 de março de 1964, quando as Forças Armadas 
      depuseram o presidente João Goulart. Caracterizou-se por repressão política, censura, centralização do poder e controle 
      dos meios de comunicação. Também foi marcada por crescimento econômico em alguns períodos e forte perseguição a 
      opositores do regime.
    </p>

    <h3 class="text-lg font-semibold mt-4 mb-2">1. Golpe de 1964</h3>
    <p class="mb-2">
      O golpe foi apoiado por setores militares, empresariais, parte da mídia e do governo dos EUA. Os militares assumiram 
      sob o discurso de combater o comunismo e restaurar a ordem.
    </p>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>Suspensão de direitos políticos.</li>
      <li>Intervenção nos estados e municípios.</li>
      <li>Instituição dos Atos Institucionais (AIs).</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">2. Consolidação do Regime (1964–1968)</h3>
    <p class="mb-2">Período inicial dos governos Castelo Branco e Costa e Silva.</p>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>AI-2: fim dos partidos políticos e criação do bipartidarismo (ARENA e MDB).</li>
      <li>Crescimento da censura e repressão.</li>
      <li>Reformas econômicas que abriram caminho para o "milagre econômico".</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">3. AI-5 e Abertura da Repressão (1968)</h3>
    <p class="mb-2">
      O Ato Institucional nº 5 foi o mais severo do regime. Suspendeu garantias constitucionais e deu ao governo poderes 
      extraordinários.
    </p>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>Fechamento do Congresso.</li>
      <li>Prisões sem mandado judicial.</li>
      <li>Censura prévia na imprensa, música, cinema e teatro.</li>
      <li>Aumento da tortura institucionalizada.</li>
      <li>Fortalecimento dos órgãos de repressão: DOI-CODI, DOPS, SNI.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">4. Milagre Econômico (1969–1973)</h3>
    <p class="mb-2">Período de rápido crescimento econômico durante o governo Médici.</p>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>Crescimento do PIB acima de 10% ao ano.</li>
      <li>Aumento das obras de infraestrutura: Transamazônica, Itaipu e Metrô de SP.</li>
      <li>Propaganda ufanista: "Brasil: Ame-o ou Deixe-o".</li>
      <li>Aumento da desigualdade social e arrocho salarial.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">5. Resistência e oposição</h3>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>Guerrilhas urbana e rural (ex.: Guerrilha do Araguaia).</li>
      <li>Movimentos estudantis e intelectuais censurados.</li>
      <li>Exílio e prisão de diversos artistas, políticos e jornalistas.</li>
    </ul>

    <h3 class="text-lg font-semibold mb-2">6. Crise e Início da Abertura (1974–1985)</h3>
    <p class="mb-2">A partir de Geisel, o regime inicia uma abertura "lenta, gradual e segura".</p>
    <ul class="list-disc list-inside space-y-2 mb-4">
      <li>Fim do AI-5 em 1978.</li>
      <li>Reforma partidária (1979): fim do bipartidarismo.</li>
      <li>Crescimento da oposição e fortalecimento das greves no ABC paulista.</li>
      <li>Diretas Já (1984): grande movimento popular por eleições diretas.</li>
      <li>Eleição indireta de Tancredo Neves em 1985, encerrando oficialmente o regime.</li>
    </ul>

    <p class="mt-4">
      A Ditadura Militar deixou marcas profundas no Brasil, como avanços econômicos em infraestrutura, mas também graves 
      violações de direitos humanos, censura e perseguições políticas. O período ainda é amplamente debatido pela 
      historiografia contemporânea.
    </p>
  `
},
{
  titulo: 'História Geral',
  conteudo: `
    <h2 class="text-xl font-bold mb-2">História Geral – Principais Civilizações e Períodos</h2>
    <p class="mb-4">
      A História Geral estuda as principais civilizações e acontecimentos que marcaram o 
      desenvolvimento da humanidade. Compreender esses períodos é essencial para entender 
      a formação das sociedades modernas, suas estruturas políticas, econômicas, sociais e culturais.
    </p>

    <!-- EGITO -->
    <h3 class="text-lg font-semibold mt-4 mb-2">1. Egito Antigo</h3>
    <p class="mb-2">
      Civilização que se desenvolveu às margens do rio Nilo. Sua organização política era 
      teocrática, com o faraó sendo considerado um deus vivo. Notabilizou-se pela arquitetura, 
      escrita hieroglífica e avanços em matemática e medicina.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Sociedade:</strong> rígida e estratificada.</li>
      <li><strong>Religião:</strong> politeísta (Rá, Ísis, Osíris).</li>
      <li><strong>Economia:</strong> agricultura irrigada.</li>
      <li><strong>Legado:</strong> pirâmides, múmias, escrita.</li>
    </ul>

    <!-- MESOPOTÂMIA -->
    <h3 class="text-lg font-semibold mb-2">2. Mesopotâmia</h3>
    <p class="mb-2">
      Região entre os rios Tigre e Eufrates, considerada o berço das primeiras cidades-Estado. 
      Diversos povos dominaram a região ao longo dos séculos, como sumérios, acádios, babilônios e assírios.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Invenções:</strong> escrita cuneiforme, roda, códigos legais.</li>
      <li><strong>Código de Hamurábi:</strong> uma das primeiras leis escritas (“olho por olho”).</li>
      <li><strong>Religião:</strong> politeísta.</li>
    </ul>

    <!-- GRÉCIA ANTIGA -->
    <h3 class="text-lg font-semibold mb-2">3. Grécia Antiga</h3>
    <p class="mb-2">
      Sede de importantes contribuições filosóficas, políticas e culturais. A Grécia era formada por 
      cidades-Estado independentes, sendo Atenas e Esparta as mais influentes.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Atenas:</strong> democracia direta, filosofia (Sócrates, Platão, Aristóteles).</li>
      <li><strong>Esparta:</strong> militarismo e disciplina.</li>
      <li><strong>Cultura:</strong> teatro, mitologia, olimpíadas.</li>
    </ul>

    <!-- ROMA -->
    <h3 class="text-lg font-semibold mb-2">4. Roma Antiga</h3>
    <p class="mb-2">
      Uma das maiores civilizações da história, Roma passou por três períodos: Monarquia, República 
      e Império. Influenciou profundamente o direito, a língua, o urbanismo e a administração pública.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>República:</strong> expansão militar e conflitos sociais.</li>
      <li><strong>Império:</strong> Augusto inaugura a Pax Romana.</li>
      <li><strong>Queda:</strong> pressionada por crises econômicas e invasões bárbaras (476 d.C.).</li>
    </ul>

    <!-- IDADE MÉDIA -->
    <h3 class="text-lg font-semibold mb-2">5. Idade Média</h3>
    <p class="mb-2">
      Período entre a queda do Império Romano e o Renascimento. Sociedade baseada no feudalismo, 
      forte influência da Igreja Católica e baixo desenvolvimento urbano.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Feudalismo:</strong> servos, senhores feudais e economia agrária.</li>
      <li><strong>Cruzadas:</strong> expedições militares com objetivo religioso.</li>
      <li><strong>Alta e Baixa Idade Média:</strong> formação e crise do sistema feudal.</li>
    </ul>

    <!-- RENASCIMENTO -->
    <h3 class="text-lg font-semibold mb-2">6. Renascimento</h3>
    <p class="mb-2">
      Movimento cultural e científico dos séculos XIV ao XVI que valorizou a razão, o 
      humanismo e a arte inspirada na Antiguidade Clássica.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>Leonardo da Vinci, Michelangelo e Rafael.</li>
      <li>Início das transformações científicas (Galileu, Copérnico).</li>
    </ul>

    <!-- REVOLUÇÃO FRANCESA -->
    <h3 class="text-lg font-semibold mb-2">7. Revolução Francesa (1789)</h3>
    <p class="mb-2">
      Marcou o fim do absolutismo na França e difundiu ideias como liberdade, igualdade e 
      fraternidade. Transformou a política europeia e inspirou diversos movimentos no mundo.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Causas:</strong> crise econômica, privilégios da nobreza e do clero, influência iluminista.</li>
      <li><strong>Fases:</strong> Assembleia Nacional, Convenção (período do Terror), Diretório e Consulado.</li>
      <li><strong>Consequências:</strong> ascensão da burguesia, fim dos privilégios feudais, expansão das ideias liberais.</li>
    </ul>

    <p class="mt-4">
      O estudo da História Geral permite compreender como sociedades se formaram, evoluíram e 
      influenciaram o mundo moderno. Esses períodos fornecem a base para entender política, 
      economia, cultura e relações internacionais em perspectiva histórica.
    </p>
  `
},
{
  titulo: 'Egito Antigo — Completo',
  conteudo: `
    <h2 class="text-xl font-bold mb-2">Egito Antigo — História Completa</h2>
    <p class="mb-4">
      O Egito Antigo desenvolveu-se às margens do rio Nilo e tornou-se uma das mais 
      sofisticadas civilizações da Antiguidade. Sua organização política, crenças e 
      avanços tecnológicos influenciam o estudo histórico até hoje.
    </p>

    <!-- GEOGRAFIA -->
    <h3 class="text-lg font-semibold mt-4 mb-2">1. Geografia e o Rio Nilo</h3>
    <p class="mb-2">
      A prosperidade egípcia dependia das cheias do Nilo, que fertilizavam a terra. 
      A organização agrícola baseava-se na inundação, plantio e colheita.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>Alta, Média e Baixa Egito.</li>
      <li>Oásis e desertos serviam como barreiras naturais.</li>
      <li>Calendário baseado no ciclo do Nilo.</li>
    </ul>

    <!-- POLÍTICA -->
    <h3 class="text-lg font-semibold mb-2">2. Organização Política</h3>
    <p class="mb-2">
      A política egípcia era centralizada e teocrática. O faraó era considerado um 
      deus vivo, responsável pela ordem cósmica (Maat).
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Faraó:</strong> líder absoluto.</li>
      <li><strong>Vizir:</strong> administrador máximo.</li>
      <li><strong>Nomarcas:</strong> líderes regionais (nomos).</li>
      <li><strong>Exército:</strong> proteção e expansão territorial.</li>
    </ul>

    <!-- SOCIEDADE -->
    <h3 class="text-lg font-semibold mb-2">3. Sociedade Egípcia</h3>
    <p class="mb-2">
      Altamente hierarquizada e rígida, com pouca mobilidade social.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>Faraó</li>
      <li>Nobreza e sacerdotes</li>
      <li>Escribas</li>
      <li>Soldados</li>
      <li>Camponeses e artesãos</li>
      <li>Escravos</li>
    </ul>

    <!-- RELIGIÃO -->
    <h3 class="text-lg font-semibold mb-2">4. Religião</h3>
    <p class="mb-2">
      Politeísta, baseada na vida após a morte. Os deuses representavam forças da natureza.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Rá:</strong> deus do Sol.</li>
      <li><strong>Osíris:</strong> deus da vida e da morte.</li>
      <li><strong>Ísis:</strong> deusa da fertilidade.</li>
      <li><strong>Anúbis:</strong> deus do embalsamamento.</li>
      <li>Livro dos Mortos.</li>
    </ul>
    <p class="mb-4">
      A mumificação preservava o corpo para que a alma (ka) pudesse reconhecê-lo.
    </p>

    <!-- ECONOMIA -->
    <h3 class="text-lg font-semibold mb-2">5. Economia</h3>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>Agricultura irrigada (trigo, cevada, linho).</li>
      <li>Artesanato em cerâmica, metais e tecidos.</li>
      <li>Comércio com Núbia, Líbano e Mesopotâmia.</li>
      <li>Tributos e trabalho compulsório nos projetos do Estado.</li>
    </ul>

    <!-- ESCRITA -->
    <h3 class="text-lg font-semibold mb-2">6. Escrita e Cultura</h3>
    <p class="mb-2">Desenvolveram três sistemas de escrita:</p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Hieroglífica:</strong> escrita sagrada.</li>
      <li><strong>Hierática:</strong> versão cursiva para sacerdotes.</li>
      <li><strong>Demótica:</strong> usada pelo povo.</li>
    </ul>
    <p class="mb-4">
      A Pedra de Roseta (1799) permitiu a decifração moderna.
    </p>

    <!-- ASSUNTOS MARCANTES -->
    <h3 class="text-lg font-semibold mb-2">7. Principais Fases do Egito</h3>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Antigo Império:</strong> construção das pirâmides.</li>
      <li><strong>Médio Império:</strong> reorganização e expansão.</li>
      <li><strong>Novo Império:</strong> auge militar (Hatshepsut, Ramsés II, Tutancâmon).</li>
    </ul>

    <!-- ENGENHARIA -->
    <h3 class="text-lg font-semibold mb-2">8. Arquitetura e Engenharia</h3>
    <p class="mb-2">Grandes construções:</p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>Pirâmides de Gizé</li>
      <li>Esfinge</li>
      <li>Templos de Luxor e Karnak</li>
      <li>Vale dos Reis</li>
    </ul>

    <!-- DECLÍNIO -->
    <h3 class="text-lg font-semibold mb-2">9. Declínio</h3>
    <p class="mb-2">
      O Egito enfraqueceu por disputas internas e invasões estrangeiras. Foi dominado por 
      persas, gregos (Alexandre, a dinastia Ptolomaica) e romanos em 30 a.C. (Cleópatra).
    </p>

    <p class="mt-4">
      O Egito Antigo é uma das civilizações mais fascinantes da humanidade, e seus legados 
      influenciam até hoje a arte, a escrita, a arquitetura e a religiosidade.
    </p>
  `
}
,
{
  titulo: 'Mesopotâmia — Completo',
  conteudo: `
    <h2 class="text-xl font-bold mb-2">Mesopotâmia — História Completa</h2>
    <p class="mb-4">
      A Mesopotâmia, localizada entre os rios Tigre e Eufrates (atual Iraque e regiões vizinhas),
      é considerada o "berço da civilização". Ali surgiram as primeiras cidades, sistemas legais,
      escrita e grandes impérios da Antiguidade.
    </p>

    <!-- GEOGRAFIA -->
    <h3 class="text-lg font-semibold mt-4 mb-2">1. Geografia</h3>
    <p class="mb-2">
      A região era fértil graças aos rios, permitindo o desenvolvimento agrícola. Porém,
      diferente do Egito, as cheias eram irregulares, exigindo obras complexas de irrigação.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>Crescente Fértil</li>
      <li>Planícies propícias à agricultura</li>
      <li>Rotas comerciais conectando Ásia, África e Mediterrâneo</li>
    </ul>

    <!-- POVOS -->
    <h3 class="text-lg font-semibold mb-2">2. Principais Povos Mesopotâmicos</h3>
    <p class="mb-2">
      A Mesopotâmia não foi um império único, mas um mosaico de povos que se sucederam ao longo dos séculos:
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Sumerianos:</strong> criadores das primeiras cidades.</li>
      <li><strong>Acádios:</strong> primeiro império centralizado.</li>
      <li><strong>Babilônios:</strong> desenvolveram o Código de Hamurábi.</li>
      <li><strong>Assírios:</strong> império militarista e expansionista.</li>
      <li><strong>Caldeus:</strong> renascimento da Babilônia.</li>
    </ul>

    <!-- SUMERIOS -->
    <h3 class="text-lg font-semibold mb-2">3. Sumérios</h3>
    <p class="mb-2">
      Os sumérios fundaram cidades como Ur, Uruk e Lagash. Desenvolveram:
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Zigurates:</strong> templos em formato de pirâmides escalonadas.</li>
      <li><strong>Escrita cuneiforme:</strong> uma das primeiras escritas da história.</li>
      <li><strong>Códigos legais iniciais</strong> e sistemas administrativos.</li>
    </ul>

    <!-- BABILÔNIA -->
    <h3 class="text-lg font-semibold mb-2">4. Babilônia e Hamurábi</h3>
    <p class="mb-2">
      A primeira Babilônia tornou-se famosa por Hamurábi, criador do primeiro grande
      código de leis escrito:
    </p>
    <p class="font-mono bg-slate-200 dark:bg-slate-700 p-2 rounded mb-4">
      "Olho por olho, dente por dente" (Lei de Talião)
    </p>
    <p class="mb-4">
      O Código de Hamurábi regulava comércio, trabalho, punições, família e propriedade.
    </p>

    <!-- ASSIRIOS -->
    <h3 class="text-lg font-semibold mb-2">5. Império Assírio</h3>
    <p class="mb-4">
      Conhecidos pela disciplina militar e tecnologia bélica (cavalaria, ferro, arqueiros),
      os assírios formaram um vasto império com capital em Nínive e a maior biblioteca
      antiga do Oriente Próximo (Biblioteca de Assurbanípal).
    </p>

    <!-- CALDEUS -->
    <h3 class="text-lg font-semibold mb-2">6. Neobabilônicos (Caldeus)</h3>
    <p class="mb-2">
      Sob Nabucodonosor II, Babilônia vive um renascimento:
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>Jardins Suspensos da Babilônia</li>
      <li>Grande Zigurate (Torre de Babel)</li>
      <li>Avanços em astronomia e matemática</li>
    </ul>

    <!-- RELIGIÃO -->
    <h3 class="text-lg font-semibold mb-2">7. Religião Mesopotâmica</h3>
    <p class="mb-2">
      Politeísta e ligada aos fenômenos da natureza. Entre os principais deuses:
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Enlil:</strong> deus dos ventos.</li>
      <li><strong>Anu:</strong> deus do céu.</li>
      <li><strong>Ishtar:</strong> deusa do amor e da guerra.</li>
      <li><strong>Marduk:</strong> deus principal da Babilônia.</li>
    </ul>

    <!-- ECONOMIA -->
    <h3 class="text-lg font-semibold mb-2">8. Economia</h3>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>Agricultura: cevada, trigo, tâmaras.</li>
      <li>Artesanato em cerâmica e metais.</li>
      <li>Grande centro de comércio internacional.</li>
      <li>Surgimento dos primeiros bancos e contratos comerciais.</li>
    </ul>

    <!-- CIÊNCIA -->
    <h3 class="text-lg font-semibold mb-2">9. Conhecimentos e Avanços</h3>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>Invenção da escrita cuneiforme.</li>
      <li>Primeiras escolas (edubas).</li>
      <li>Matemática baseada no número 60 (origem dos minutos e segundos).</li>
      <li>Astronomia e astrologia.</li>
    </ul>

    <!-- DECLINIO -->
    <h3 class="text-lg font-semibold mb-2">10. Declínio</h3>
    <p class="mb-2">
      A região sofreu sucessivas invasões (persas, macedônios, romanos) até perder autonomia.
      Sua localização estratégica sempre atraiu disputas.
    </p>

    <p class="mt-4">
      A Mesopotâmia deixou legados fundamentais para a humanidade, como a escrita,
      códigos de leis, avanços matemáticos e os primeiros modelos de Estado.
    </p>
  `
}
,
{
  titulo: 'Grécia Antiga — Completo',
  conteudo: `
    <h2 class="text-xl font-bold mb-2">Grécia Antiga — História Completa</h2>
    <p class="mb-4">
      A Grécia Antiga foi uma das civilizações mais influentes da história, responsável 
      pelo desenvolvimento da filosofia, democracia, artes, ciências e modelos políticos 
      que moldaram o mundo ocidental. Localizava-se no sul da Europa, composta por cidades-estado 
      independentes (pólis).
    </p>

    <!-- GEOGRAFIA -->
    <h3 class="text-lg font-semibold mt-4 mb-2">1. Geografia</h3>
    <p class="mb-2">
      Território montanhoso, com solo pouco fértil, grande litoral e ilhas. Isso favoreceu o 
      comércio marítimo e a formação de cidades independentes.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>Mar Mediterrâneo e Mar Egeu</li>
      <li>Atitude expansionista por colonização</li>
      <li>Isolamento natural das pólis</li>
    </ul>

    <!-- PERÍODOS -->
    <h3 class="text-lg font-semibold mb-2">2. Períodos da Grécia Antiga</h3>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Período Pré-Homérico:</strong> povos indo-europeus (aqueus, jônios, dórios).</li>
      <li><strong>Período Homérico:</strong> formação dos genos (clãs familiares).</li>
      <li><strong>Período Arcaico:</strong> surgimento das pólis, colonização e leis escritas.</li>
      <li><strong>Período Clássico:</strong> apogeu cultural (Atenas e Esparta).</li>
      <li><strong>Período Helenístico:</strong> expansão de Alexandre, mistura cultural grega-oriental.</li>
    </ul>

    <!-- PÓLIS -->
    <h3 class="text-lg font-semibold mb-2">3. As Pólis (Cidades-estado)</h3>
    <p class="mb-2">
      Cada pólis tinha governo, exército, leis e cultura próprios. As duas mais famosas foram Atenas e Esparta.
    </p>

    <h4 class="font-semibold mt-2 mb-1">Atenas</h4>
    <ul class="list-disc list-inside space-y-1 mb-2">
      <li>Berço da democracia.</li>
      <li>Economia baseada no comércio marítimo.</li>
      <li>Cultura voltada às artes, filosofia e ciência.</li>
    </ul>

    <h4 class="font-semibold mt-2 mb-1">Esparta</h4>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>Sociedade militarista e austera.</li>
      <li>Economia agrícola.</li>
      <li>Governo oligárquico (gerúsia, éforos, reis).</li>
    </ul>

    <!-- SOCIEDADE -->
    <h3 class="text-lg font-semibold mb-2">4. Sociedade Grega</h3>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Cidadãos:</strong> homens livres nascidos na pólis.</li>
      <li><strong>Metecos:</strong> estrangeiros residentes.</li>
      <li><strong>Escravos:</strong> prisioneiros de guerra ou endividados.</li>
    </ul>

    <!-- RELIGIÃO -->
    <h3 class="text-lg font-semibold mb-2">5. Religião e Mitologia</h3>
    <p class="mb-2">Politeístas, adoravam deuses antropomórficos, com qualidades humanas.</p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Zeus:</strong> deus dos deuses.</li>
      <li><strong>Atena:</strong> sabedoria.</li>
      <li><strong>Apolo:</strong> artes e luz.</li>
      <li><strong>Afrodite:</strong> amor.</li>
      <li><strong>Ares:</strong> guerra.</li>
    </ul>

    <!-- POLÍTICA -->
    <h3 class="text-lg font-semibold mb-2">6. Sistemas Políticos</h3>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Monarquia:</strong> governo de um rei.</li>
      <li><strong>Oligarquia:</strong> elite governante.</li>
      <li><strong>Democracia:</strong> poder dos cidadãos (Atenas).</li>
      <li><strong>Tirania:</strong> governo absoluto de um líder militar.</li>
    </ul>

    <!-- CULTURA -->
    <h3 class="text-lg font-semibold mb-2">7. Cultura, Filosofia e Ciência</h3>
    <p class="mb-2">A Grécia foi o berço da filosofia ocidental:</p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Sócrates:</strong> ética e método socrático.</li>
      <li><strong>Platão:</strong> teoria das ideias, Academia.</li>
      <li><strong>Aristóteles:</strong> lógica, ciência, Liceu.</li>
    </ul>

    <p class="mb-2">Teatro, literatura e esportes (Jogos Olímpicos) também se destacaram.</p>

    <!-- GUERRAS -->
    <h3 class="text-lg font-semibold mb-2">8. Guerras Importantes</h3>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Guerras Médicas:</strong> gregos x persas (vitória grega).</li>
      <li><strong>Guerra do Peloponeso:</strong> Atenas x Esparta (vitória espartana).</li>
    </ul>

    <!-- HELENISMO -->
    <h3 class="text-lg font-semibold mb-2">9. Período Helenístico</h3>
    <p class="mb-4">
      Após as conquistas de Alexandre, o Grande, a cultura grega espalhou-se pelo Oriente, 
      misturando-se com tradições locais. Surgiram centros culturais como Alexandria.
    </p>

    <!-- DECLÍNIO -->
    <h3 class="text-lg font-semibold mb-2">10. Declínio</h3>
    <p class="mb-4">
      Enfraquecida por guerras internas, a Grécia foi conquistada pelos romanos em 146 a.C.
    </p>

    <p class="mt-4">
      A Grécia Antiga deixou contribuições essenciais à filosofia, política, ciência e artes, 
      tornando-se uma das bases da civilização ocidental.
    </p>
  `
}
,
{
  titulo: 'Roma Antiga — Completo',
  conteudo: `
    <h2 class="text-xl font-bold mb-3">Roma Antiga — História Completa</h2>

    <p class="mb-4">
      Roma foi uma das civilizações mais importantes da história, influenciando o direito, a política,
      a arquitetura, a engenharia, a língua e a cultura do mundo ocidental. Desenvolveu-se na Península
      Itálica e, com o tempo, tornou-se o maior império da Antiguidade Ocidental.
    </p>

    <!-- PERIODIZAÇÃO -->
    <h3 class="text-lg font-semibold mt-4 mb-2">1. Periodização de Roma</h3>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Monarquia (753–509 a.C.)</strong> — Governo de reis, influência etrusca.</li>
      <li><strong>República (509–27 a.C.)</strong> — Expansão militar e conflitos sociais.</li>
      <li><strong>Império (27 a.C.–476 d.C.)</strong> — Máxima expansão e posterior decadência.</li>
    </ul>

    <!-- MONARQUIA -->
    <h3 class="text-lg font-semibold mb-2">2. Monarquia (753–509 a.C.)</h3>
    <p class="mb-2">
      Segundo a tradição, Roma foi fundada por <strong>Rômulo</strong>. A monarquia tinha forte
      influência etrusca na política, religião e arquitetura. O poder era concentrado no rei.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Rei:</strong> autoridade máxima civil, militar e religiosa.</li>
      <li><strong>Senado:</strong> conselho de anciãos patrícios.</li>
      <li><strong>Assembleias:</strong> participação limitada da população.</li>
    </ul>

    <!-- REPÚBLICA -->
    <h3 class="text-lg font-semibold mb-2">3. República (509–27 a.C.)</h3>
    <p class="mb-2">
      Após a expulsão do último rei etrusco, Roma adotou um sistema republicano.
      O poder político era dividido entre magistraturas eletivas.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Cônsules:</strong> comandavam o exército e o governo.</li>
      <li><strong>Senado:</strong> órgão mais poderoso, controlava finanças e política externa.</li>
      <li><strong>Tribunos da Plebe:</strong> defendiam os plebeus e tinham poder de veto.</li>
    </ul>
    <p class="mb-4">
      Neste período ocorreram as <strong>Guerras Púnicas</strong> contra Cartago, que transformaram
      Roma na maior potência do Mediterrâneo.
    </p>

    <!-- IMPÉRIO -->
    <h3 class="text-lg font-semibold mb-2">4. Império (27 a.C.–476 d.C.)</h3>
    <p class="mb-2">
      O Império começou com <strong>Otávio Augusto</strong>, que estabeleceu a
      <strong>Pax Romana</strong>, período de estabilidade e prosperidade.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Augusto:</strong> reorganização política e administrativa.</li>
      <li><strong>Trajano:</strong> expansão máxima do território romano.</li>
      <li><strong>Constantino:</strong> legalização do cristianismo.</li>
      <li><strong>Teodósio:</strong> cristianismo como religião oficial.</li>
    </ul>

    <!-- SOCIEDADE -->
    <h3 class="text-lg font-semibold mb-2">5. Sociedade Romana</h3>
    <p class="mb-2">Estratificada e com forte dependência do trabalho escravo.</p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Patrícios:</strong> elite proprietária.</li>
      <li><strong>Plebeus:</strong> trabalhadores livres.</li>
      <li><strong>Clientes:</strong> dependentes de famílias patrícias.</li>
      <li><strong>Escravos:</strong> base produtiva.</li>
    </ul>

    <!-- CULTURA -->
    <h3 class="text-lg font-semibold mb-2">6. Cultura, Religião e Inovações</h3>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Arquitetura:</strong> Coliseu, aquedutos, pontes, estradas.</li>
      <li><strong>Direito Romano:</strong> base de muitos sistemas jurídicos modernos.</li>
      <li><strong>Religião:</strong> politeísta até a expansão do cristianismo.</li>
      <li><strong>Língua Latina:</strong> origem do português e das línguas românicas.</li>
    </ul>

    <!-- EXÉRCITO -->
    <h3 class="text-lg font-semibold mb-2">7. Exército e Expansão</h3>
    <p class="mb-2">
      A organização militar foi essencial para o crescimento de Roma.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>Legiões altamente treinadas.</li>
      <li>Engenharia militar avançada.</li>
      <li>Estradas para deslocamento rápido.</li>
    </ul>

    <!-- CRISE E QUEDA -->
    <h3 class="text-lg font-semibold mb-2">8. Crise e Queda do Império</h3>
    <p class="mb-2">A decadência ocorreu por vários fatores:</p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>Crise econômica e inflação.</li>
      <li>Desorganização política e corrupção.</li>
      <li>Divisão do Império em Ocidental e Oriental.</li>
      <li>Invasões bárbaras (Godos, Vândalos, Hunos).</li>
    </ul>

    <p class="mt-4">
      Em <strong>476 d.C.</strong>, a deposição de Rômulo Augústulo marcou simbolicamente
      o fim do Império Romano do Ocidente e da Antiguidade.
    </p>
  `
}
,
{
  titulo: 'Idade Média — Completa',
  conteudo: `
    <h2 class="text-xl font-bold mb-3">Idade Média — História Completa</h2>

    <p class="mb-4">
      A Idade Média foi um período histórico que se estende do século V ao século XV, marcado
      pela queda do Império Romano do Ocidente (476) e pela transição para a Idade Moderna.
      Esse período é tradicionalmente dividido em Alta e Baixa Idade Média.
    </p>

    <!-- PERIODIZAÇÃO -->
    <h3 class="text-lg font-semibold mt-4 mb-2">1. Periodização da Idade Média</h3>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Alta Idade Média (séculos V–X):</strong> feudalismo, ruralização e invasões bárbaras.</li>
      <li><strong>Baixa Idade Média (séculos XI–XV):</strong> renascimento urbano, comércio e crises.</li>
    </ul>

    <!-- QUEDA DE ROMA -->
    <h3 class="text-lg font-semibold mb-2">2. A Queda do Império Romano</h3>
    <p class="mb-2">
      A queda do Império Romano do Ocidente abriu espaço para a formação dos reinos germânicos.
      Essa transição marcou o fim da Antiguidade e o início da Idade Média.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>Descentralização política.</li>
      <li>Mistura entre cultura romana e cultura germânica.</li>
      <li>Perda da vida urbana.</li>
    </ul>

    <!-- FEUDALISMO -->
    <h3 class="text-lg font-semibold mb-2">3. Feudalismo</h3>
    <p class="mb-2">
      O feudalismo foi o principal sistema socioeconômico da Idade Média. Baseava-se na posse de terras
      (feudos) e em relações de dependência entre senhores e servos.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Economia agrária:</strong> autossuficiente e de baixa circulação monetária.</li>
      <li><strong>Sociedade estamental:</strong> clero, nobreza e servos.</li>
      <li><strong>Vassalagem:</strong> pacto entre senhores (terra, proteção e fidelidade).</li>
    </ul>

    <!-- IGREJA -->
    <h3 class="text-lg font-semibold mb-2">4. A Igreja Medieval</h3>
    <p class="mb-2">
      A Igreja Católica tornou-se a instituição mais poderosa da época, controlando cultura, educação,
      política e moralidade.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>Poder espiritual e temporal.</li>
      <li>Mosteiros preservaram o conhecimento escrito.</li>
      <li>Tribunais da Inquisição.</li>
      <li>Criação de universidades na Baixa Idade Média.</li>
    </ul>

    <!-- CROZADAS -->
    <h3 class="text-lg font-semibold mb-2">5. Cruzadas (séculos XI–XIII)</h3>
    <p class="mb-2">
      Expedições militares cristãs para reconquistar Jerusalém. Apesar de fracassarem militarmente,
      impulsionaram o comércio e o contato com o Oriente.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>Aumento da circulação de mercadorias.</li>
      <li>Reabertura do Mediterrâneo ao comércio europeu.</li>
      <li>Fortalecimento dos reis e enfraquecimento da nobreza.</li>
    </ul>

    <!-- CIDADES -->
    <h3 class="text-lg font-semibold mb-2">6. Renascimento Urbano e Comercial</h3>
    <p class="mb-2">
      A partir do século XI, o crescimento populacional estimulou a retomada das cidades e
      o surgimento de uma nova classe social: a burguesia.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li>Crescimento das feiras e rotas comerciais.</li>
      <li>Criação das corporações de ofício.</li>
      <li>Renascimento das universidades.</li>
      <li>Fortalecimento das monarquias nacionais.</li>
    </ul>

    <!-- CRISES -->
    <h3 class="text-lg font-semibold mb-2">7. Crises da Baixa Idade Média</h3>
    <p class="mb-2">
      Entre os séculos XIV e XV, a Europa enfrentou uma série de crises que abalaram o feudalismo.
    </p>
    <ul class="list-disc list-inside space-y-1 mb-4">
      <li><strong>Peste Negra (1348):</strong> matou cerca de 1/3 da população europeia.</li>
      <li><strong>Guerras:</strong> como a Guerra dos Cem Anos (França × Inglaterra).</li>
      <li><strong>Revoltas camponesas:</strong> contra abusos feudais.</li>
      <li><strong>Fome e recessão econômica.</strong></li>
    </ul>

    <!-- FIM -->
    <h3 class="text-lg font-semibold mb-2">8. Fim da Idade Média</h3>
    <p class="mb-4">
      A Idade Média chegou ao fim com transformações sociais, econômicas e culturais. O período abriu
      caminho para a Idade Moderna, marcada pelo Renascimento, pela centralização do poder monárquico
      e pelas Grandes Navegações.
    </p>

    <p class="mt-4">
      A Idade Média foi um período complexo, longe da imagem de “idade das trevas”. Houve importantes
      avanços culturais, artísticos e institucionais que moldaram a Europa e influenciam o mundo até hoje.
    </p>
  `
}
,

{
    titulo: 'Revolução Industrial',
    conteudo: `
        <h2 class="text-2xl font-bold mb-3">Revolução Industrial</h2>

        <p class="mb-4 leading-relaxed">
            A Revolução Industrial foi um processo de transformações tecnológicas, econômicas e sociais
            que começou na Inglaterra no século XVIII. Com a introdução das máquinas e novas fontes de energia,
            a produção deixou de ser artesanal e passou a ser mecanizada, modificando profundamente o modo de vida das pessoas.
        </p>

        <h3 class="text-xl font-semibold mt-4 mb-2">Principais Características</h3>
        <ul class="list-disc list-inside space-y-2 pl-2">
            <li><strong>Mecanização da produção</strong>: ferramentas manuais foram substituídas por máquinas.</li>
            <li><strong>Trabalho assalariado</strong>: artesãos perderam espaço para trabalhadores de fábrica.</li>
            <li><strong>Crescimento urbano</strong>: êxodo rural e formação de cidades industriais.</li>
            <li><strong>Surgimento de novas classes</strong>: burguesia industrial e proletariado.</li>
            <li><strong>Inovações tecnológicas</strong>: destaque para a máquina a vapor.</li>
            <li><strong>Aumento da produção</strong>: produtos ficaram mais rápidos e baratos de fabricar.</li>
        </ul>

        <h3 class="text-xl font-semibold mt-6 mb-2">Consequências Sociais e Econômicas</h3>
        <ul class="list-disc list-inside space-y-2 pl-2">
            <li>Jornadas de trabalho longas e condições insalubres nas fábricas.</li>
            <li>Fortalecimento do capitalismo e do sistema fabril.</li>
            <li>Ampliação das desigualdades sociais.</li>
            <li>Transformação global do comércio e transporte.</li>
        </ul>

        <p class="mt-6 p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
            <strong>Dica para provas:</strong> memorize que a Revolução Industrial mudou a forma de produzir,
            acelerou o crescimento das cidades e ampliou as diferenças sociais — isso sempre cai em exames.
        </p>
    `
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
    pergunta: 'Assinale a alternativa em que a palavra está acentuada INCORRETAMENTE:',
    opcoes: ['Baú', 'Pôde', 'Jibóia', 'Ideia'],
    respostaCorreta: 3,
    explicacao: 'A palavra “ideia” não leva acento desde o Novo Acordo Ortográfico (2009). Ditongos abertos “éi” e “ói” em palavras paroxítonas deixaram de ser acentuados, por isso “ideia” e “jiboia” são as grafias corretas.'
  },
  { 
    pergunta: 'Em “À medida que o tempo passa, aprendemos mais.”, o uso da crase é:',
    opcoes: ['Obrigatório', 'Facultativo', 'Incorreto'],
    respostaCorreta: 0,
    explicacao: 'A expressão “à medida que” é locução conjuntiva proporcional e exige o uso da crase, pois resulta da fusão da preposição “a” com o artigo definido “a” que acompanha “medida”.'
  },
  { 
    pergunta: 'Assinale a alternativa que apresenta uma figura de linguagem do tipo antítese:',
    opcoes: [
      'Ela chorava de alegria.',
      'O sol doía nos olhos.',
      'O tempo é o senhor da razão.',
      'As palavras voam, os escritos ficam.'
    ],
    respostaCorreta: 0,
    explicacao: '“Chorava de alegria” contrapõe ideias opostas (choro ↔ alegria). Essa aproximação de contrários caracteriza a antítese.'
  },
  { 
    pergunta: 'Qual das alternativas apresenta um caso de silepse?',
    opcoes: [
      'Vossa Excelência está preocupado?',
      'O povo quer e queremos também!',
      'As rosas exalam perfume suave.',
      'Comprou o livro e o leu em um dia.'
    ],
    respostaCorreta: 1,
    explicacao: 'Em “O povo quer e queremos também!”, há concordância ideológica (de sentido) e não gramatical. O sujeito “o povo” está na terceira pessoa, mas o verbo “queremos” está na primeira. É um caso de **silepse de pessoa**.'
  },
  { 
    pergunta: 'Identifique a alternativa em que há erro de concordância verbal:',
    opcoes: [
      'Houveram muitos problemas na reunião.',
      'Faltam dois dias para o evento.',
      'Existem boas razões para continuar.',
      'Chegaram os convidados à festa.'
    ],
    respostaCorreta: 0,
    explicacao: 'O verbo “haver”, no sentido de “existir”, é impessoal e deve ser usado sempre no singular. O correto seria: “Houve muitos problemas na reunião.”'
  },
  { 
    pergunta: 'Assinale a alternativa em que ocorre pleonasmo vicioso:',
    opcoes: [
      'Subir para cima.',
      'Ouvir com atenção.',
      'Ver com os próprios olhos.',
      'Sair de fininho.'
    ],
    respostaCorreta: 0,
    explicacao: '“Subir” já implica o movimento para cima; logo, “subir para cima” repete desnecessariamente a ideia — é um **pleonasmo vicioso**, ou redundância incorreta.'
  },
  { 
    pergunta: 'Na frase “Ele é um verdadeiro Camões”, identifica-se:',
    opcoes: ['Metáfora', 'Metonímia', 'Comparação', 'Ironia'],
    respostaCorreta: 1,
    explicacao: 'Trata-se de metonímia: o nome do autor (Camões) é usado no lugar de sua característica (grande poeta). É uma substituição por relação de contiguidade.'
  },
  { 
    pergunta: 'A frase “O silêncio gritava naquela sala” apresenta qual figura de linguagem?',
    opcoes: ['Antítese', 'Hipérbole', 'Personificação', 'Paradoxo'],
    respostaCorreta: 2,
    explicacao: 'Atribui-se uma ação humana (“gritar”) a algo inanimado (“silêncio”), caracterizando **personificação** ou **prosopopeia**.'
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