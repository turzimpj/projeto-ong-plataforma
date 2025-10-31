🚀 Faz Bem - SPA Institucional
Website institucional completo para a ONG "Faz Bem", focado em transformação social. Este projeto foi desenvolvido para demonstrar habilidades avançadas em CSS3 e JavaScript moderno.

Ele implementa um Design System coeso, layouts responsivos (Mobile-First) e uma aplicação JavaScript interativa que implementa o conceito de Single Page Application (SPA), com roteamento dinâmico e validação de formulários.

📖 Sobre o Projeto
A Faz Bem é uma organização (fictícia) comprometida com a transformação social por meio da solidariedade, educação e alimentação. Este website serve como sua principal plataforma digital, apresentando seus projetos à comunidade e facilitando o cadastro de novos voluntários e doadores.

O design foi construído com a abordagem Mobile-First, garantindo uma experiência de usuário perfeita em todos os dispositivos.

🏆 Recursos Técnicos Implementados
Este projeto atende a um conjunto rigoroso de especificações técnicas, demonstrando proficiência em desenvolvimento front-end moderno.

1. Sistema de Design (Design System)
Foi desenvolvido um design system coeso e escalável, centralizado no :root do CSS:

Paleta de Cores: Mais de 8 cores (primárias, secundárias, neutras, feedback) definidas em variáveis CSS.

Tipografia Hierárquica: Múltiplos tamanhos de fonte (rem) e famílias (--fonte-principal, --fonte-destaque).

Sistema de Espaçamento: Escala modular baseada em 8px (8, 16, 24, 32, 48, 64px) usada em padding, margin e gap.

2. Leiautes Responsivos (CSS Grid + Flexbox)
Mobile-First: O design foi construído do menor para o maior dispositivo.

CSS Grid (12 Colunas): O layout principal (<main>) usa um sistema de grid customizado de 12 colunas (grid-template-columns: repeat(12, 1fr)).

Flexbox: Utilizado para alinhamento de componentes internos, como o cabeçalho, navegação e cards.

Layout Adaptativo: O layout é Mobile-First, utilizando um breakpoint principal em 768px para adaptar a interface para desktops.

3. Navegação Sofisticada (Menu Gaveta)
Menu Deslizante: Em telas menores (abaixo de 768px), a navegação é substituída por um ícone de "hambúrguer" que abre um menu "gaveta" (ou "cortina"), deslizando da direita para a esquerda.

JavaScript: O menu é controlado por JavaScript, que alterna uma classe .active e atualiza atributos aria-* para acessibilidade.

Animação CSS: O ícone do hambúrguer se transforma em um "X" usando transform e transition de CSS.

4. Interatividade Avançada (JavaScript)
Single Page Application (SPA): O site não recarrega. O conteúdo é carregado dinamicamente usando roteamento por hash (window.location.hash) e um sistema de templates JavaScript.

Validação de Formulário (JS): Sistema de verificação de consistência de dados no formulário de cadastro. O envio é bloqueado e mensagens de erro são exibidas dinamicamente caso os campos (nome, email, CPF) não atendam aos critérios.

Máscaras de Input (JS): O arquivo js/main.js aplica máscaras de formatação em tempo real para os campos de CPF, CEP e Telefone, usando Expressões Regulares (Regex).

✨ Funcionalidades do Usuário

O site funciona como uma SPA (Single Page Application), onde o conteúdo é carregado dinamicamente sem recarregar a página. As principais visualizações incluem:

Home: Apresentação da missão, valores e informações de contato da ONG.

Projetos: Exibição dos projetos (Cozinha Comunitária, Reforço Escolar) em um layout de cards.

Participe: Formulário completo e interativo para captação de dados de novos voluntários, com validação de dados em tempo real.

💻 Tecnologias Utilizadas
HTML5: Estruturação semântica e acessível.

CSS3 (Avançado):

Variáveis CSS (Custom Properties)

CSS Grid Layout

CSS Flexbox

Media Queries (Design Responsivo)

Transitions e Transforms

JavaScript (ES6+):

Manipulação avançada do DOM

Event Listeners (incluindo hashchange e submit)

Single Page Application (SPA)

Sistema de Templates (Template Literals)

Validação de Formulário (client-side)

Regex (para máscaras de input)

📁 Estrutura do Projeto
A estrutura do projeto foi consolidada para a arquitetura SPA, sendo composta principalmente por:

🔧 Como Executar
Este é um projeto web estático, mas que requer um servidor local para funcionar corretamente devido à sua arquitetura SPA.

Pré-requisito
Para que o roteamento (#home, #projetos) funcione, você precisa executar o projeto a partir de um servidor local. A forma mais fácil é usar a extensão "Live Server" no Visual Studio Code.

Importante: Abrir o index.html diretamente no navegador (protocolo file:///) não ativará o roteamento da SPA.

Passos
Clone o Repositório

Acesse a Pasta

Execute com o Live Server (Recomendado)

Abra a pasta do projeto no VS Code.

Clique com o botão direito no arquivo index.html.

Selecione "Open with Live Server".

📧 Contato da ONG
Email: fazbem.ong@gmail.com

Telefone: (41) 99873-4882

Endereço: Rua Fictícia, 123 - São Paulo, SP

📄 Licença
Distribuído sob a licença MIT.