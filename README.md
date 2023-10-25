# 🤖 Droid Data Directory

https://github.com/M0rona/DroidDataDirectory/assets/91230559/3a2d00d1-061a-4b4d-8453-944cfb8ed7c8

## 📝 Descrição
O projeto "Droid Data Directory" é uma aplicação React que oferece um diretório de dados de droids do universo Star Wars. Com essa aplicação, você poderá realizar filtros avançados, pesquisar droids e obter informações detalhadas sobre cada droid, incluindo os filmes em que participaram.

## 🔗 Acesse o Projeto
Clique [aqui](https://m0rona.github.io/DroidDataDirectory/) para acessar o projeto.

## 📋 Índice
- [Instalação](#-instalação)
- [Execução](#-execução)
- [Ferramentas](#%EF%B8%8F-ferramentas)
- [Conceitos Aplicados](#-conceitos-aplicados)
- [Explicação Detalhada do Código](#-explicação-detalhada-do-código)

## 🔧 Instalação
Para instalar o projeto em sua máquina, basta clonar o repositório e instalar as dependências, cole os comandos abaixo em seu terminal:

```
git clone https://github.com/M0rona/DroidDataDirectory.git
cd DroidDataDirectory
npm install
```

## 🚀 Execução
Para executar o projeto em um ambiente de desenvolvimento, utilize o comando:
```
npm run dev
```
Isso gerará um link que você pode abrir no seu navegador.

## 🛠️ Ferramentas
- React
- TypeScript
- Npm (Node Package Manager)

## 🧩 Conceitos Aplicados
Neste projeto, foram aplicados os seguintes conceitos e funcionalidades:

* Context
* Componentes
* Responsividade

## 🔎 Explicação Detalhada do Código
O projeto "Droid Data Directory" é uma aplicação React que oferece um diretório de dados de droids do universo Star Wars. Vamos explorar as principais características e componentes que compõem o código do projeto:

### Context
O projeto faz uso de Context em React para gerenciar o estado dos personagens e compartilhá-lo entre os diferentes componentes. Isso é alcançado por meio de um contexto chamado "CharacterProvider", que fornece os dados dos personagens a todos os componentes da aplicação. Isso simplifica a passagem de dados e o gerenciamento do estado global.

### Componentes
O projeto é dividido em vários componentes, cada um com uma função específica. Estes incluem:

* Componente de lista de droids (SectionCharacters): Responsável por exibir a lista de droids e implementar a funcionalidade de carregamento infinito. Isso permite que os usuários naveguem na lista de personagens e carreguem mais dados à medida que rolam a página.
* Componente de informações detalhadas (SectionInfos): Apresenta informações detalhadas sobre um droid específico, incluindo seu nome, ano de nascimento, gênero e os filmes em que apareceu. Isso é realizado de forma responsiva para se adaptar ao tamanho da tela.
* Componentes de filtragem e pesquisa: Permite que os usuários realizem filtros avançados para encontrar droids específicos com base em critérios selecionados. Além disso, a pesquisa permite aos usuários procurar droids por nome.

### Responsividade
O projeto é responsivo e se adapta a diferentes tamanhos de tela. Isso é alcançado por meio de verificações de largura de janela e seleção de componentes apropriados com base no tamanho da tela. Por exemplo, a exibição de informações detalhadas é otimizada para dispositivos móveis.

### Bibliotecas
O projeto faz uso de várias bibliotecas para facilitar o desenvolvimento. Isso inclui Axios para fazer chamadas à API SWAPI, Styled-Components para estilizar os componentes da aplicação e Swiper para recursos de carrossel.
