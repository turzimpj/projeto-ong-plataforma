# 🚀 Faz Bem - Website Institucional

![Status do Projeto](https://img.shields.io/badge/status-Concluído-brightgreen)
![Licença](https://img.shields.io/badge/licença-MIT-blue)

Website institucional completo para a ONG "Faz Bem", focado em transformação social. Este projeto foi desenvolvido para demonstrar habilidades avançadas em CSS3 e JavaScript moderno.

Ele implementa um **Design System** completo, **layouts responsivos (Mobile-First)** usando CSS Grid e Flexbox, e **componentes de interface interativos** com JavaScript.

![Demonstração do Layout Responsivo](./docs/demo.gif)
*(Sugestão: Crie um GIF de demo e adicione-o a uma pasta 'docs' para esta imagem funcionar)*

---

## Tabela de Conteúdos

* [Sobre o Projeto](#-sobre-o-projeto)
* [Recursos Técnicos Implementados](#-recursos-técnicos-implementados)
* [Funcionalidades do Usuário](#-funcionalidades-do-usuário)
* [Tecnologias Utilizadas](#-tecnologias-utilizadas)
* [Estrutura do Projeto](#-estrutura-do-projeto)
* [Como Executar](#-como-executar)
* [Contato da ONG](#-contato-da-ong)
* [Licença](#-licença)

---

## 📖 Sobre o Projeto

A **Faz Bem** é uma organização (fictícia) comprometida com a transformação social por meio da solidariedade, educação e alimentação. Este website serve como sua principal plataforma digital, apresentando seus projetos à comunidade e facilitando o cadastro de novos voluntários e doadores.

O design foi construído com a abordagem **Mobile-First**, garantindo uma experiência de usuário perfeita em todos os dispositivos.

---

## 🏆 Recursos Técnicos Implementados

Este projeto atende a um conjunto rigoroso de especificações técnicas, demonstrando proficiência em desenvolvimento front-end moderno.

### 1. Sistema de Design (Design System)
Foi desenvolvido um `design system` coeso e escalável, centralizado no `:root` do CSS:
* **Paleta de Cores:** Mais de 8 cores (primárias, secundárias, neutras, feedback) definidas em variáveis CSS.
* **Tipografia Hierárquica:** Múltiplos tamanhos de fonte (`rem`) e famílias (`--fonte-principal`, `--fonte-destaque`).
* **Sistema de Espaçamento:** Escala modular baseada em 8px (8, 16, 24, 32, 48, 64px) usada em `padding`, `margin` e `gap`.

### 2. Leiautes Responsivos (CSS Grid + Flexbox)
* **Mobile-First:** O design foi construído do menor para o maior dispositivo.
* **CSS Grid (12 Colunas):** O layout principal (`<main>`) usa um sistema de grid customizado de 12 colunas (`grid-template-columns: repeat(12, 1fr)`).
* **Flexbox:** Utilizado para alinhamento de componentes internos, como o cabeçalho, navegação e cards.
* **5 Breakpoints:** O layout se adapta em 5 pontos de interrupção (`576px`, `768px`, `992px`, `1200px`, `1400px`).
* **Layout "Card-based":** O conteúdo é apresentado em "cards" brancos com `box-shadow` sobre um fundo cinza claro (`--cor-neutra-050`), criando profundidade visual.

### 3. Navegação Sofisticada (HTML + CSS + JS)
* **Menu Hambúrguer:** Em telas menores (abaixo de `768px`), a navegação principal é substituída por um ícone de "hambúrguer" totalmente funcional.
* **JavaScript:** O menu é controlado por JavaScript, que alterna uma classe `.active` no menu e atualiza atributos `aria-*` para acessibilidade.
* **Animação CSS:** O ícone do hambúrguer se transforma em um "X" usando transições de CSS.

### 4. Componentes de Interface (UI)
* **Botões com Estados:** A classe `.cta-botao` possui todos os estados visuais definidos: `:hover`, `:focus`, `:active`, e `:disabled`.
* **Formulários Estilizados:** Formulário completo com `fieldset` e `legend`, estilizado com as variáveis do Design System.
* **Validação Visual (CSS):** Os campos do formulário usam as pseudo-classes `:valid` e `:invalid:focus` para fornecer feedback visual instantâneo ao usuário (bordas verdes/vermelhas).
* **Máscaras de Input (JS):** O arquivo `js/main.js` aplica máscaras de formatação em tempo real para os campos de CPF, CEP e Telefone.

---

## ✨ Funcionalidades do Usuário

* **Página Home:** Apresentação da missão, valores e informações de contato da ONG.
* **Página de Projetos:** Exibição dos projetos (Cozinha Comunitária, Reforço Escolar) em um layout de cards responsivo.
* **Seções de CTA:** Chamadas para ação (Call to Action) claras para "Ser Voluntário" e "Fazer uma Doação".
* **Página de Cadastro:** Formulário completo e interativo para captação de dados de novos voluntários.

---

## 💻 Tecnologias Utilizadas

* **HTML5:** Estruturação semântica e acessível.
* **CSS3 (Avançado):**
    * Variáveis CSS (Custom Properties)
    * CSS Grid Layout
    * CSS Flexbox
    * Media Queries (Design Responsivo)
    * Pseudo-classes (`:focus`, `:valid`, `:invalid`)
* **JavaScript (ES6+):**
    * Manipulação do DOM
    * Event Listeners
    * Regex (para máscaras de input)

---

## 📁 Estrutura do Projeto

## 🔧 Como Executar

Este é um projeto web estático. Nenhuma instalação ou build é necessário.

1.  **Clone o Repositório**
    ```bash
    git clone [https://github.com/turzimpj/faz-bem.git](https://github.com/turzimpj/faz-bem.git)
    ```
2.  **Acesse a Pasta**
    ```bash
    cd faz-bem
    ```
3.  **Abra no Navegador**
    Basta abrir qualquer um dos arquivos `.html` (por exemplo, `index.html`) diretamente no seu navegador.

    *Recomendação: Para uma melhor experiência de desenvolvimento, use a extensão "Live Server" no VS Code.*

---

## 📧 Contato da ONG

* **Email:** fazbem.ong@gmail.com
* **Telefone:** (41) 99873-4882
* **Endereço:** Rua Fictícia, 123 - São Paulo, SP

---

## 📄 Licença

Distribuído sob a licença MIT.