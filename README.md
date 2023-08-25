# Nu Kenzie - Gerenciamento de Gastos

Bem-vindo ao Nu Kenzie, uma aplicação para gerenciamento de gastos, onde você pode cadastrar suas entradas e saídas financeiras.

## Sobre o Projeto

O Nu Kenzie é uma aplicação desenvolvida como parte do curso na Kenzie Academy, onde os princípios de React, componentização e estilização são aplicados na criação de uma ferramenta de gerenciamento financeiro pessoal.

## Componentização

A estrutura do projeto é baseada na componentização em React. Os principais componentes criados incluem:

- **Header:** Cabeçalho da aplicação exibindo o título e informações relevantes.
- **Form:** Formulário para adicionar novas transações, capturando valores com `useState`.
- **List:** Lista dinâmica de transações exibidas com base no estado.
- **Summary:** Componente para exibir o resumo das transações, calculando o total com `reduce` e exibindo condições condicionais usando ternário.

## Estilização

A estilização do projeto é feita com Styled Components para fornecer uma experiência visual agradável. O uso do Styled Components permite que os componentes sejam estilizados de forma mais dinâmica e coesa, mantendo a compatibilidade com as práticas de estilo tradicionais do CSS.

## Funcionalidades

O Nu Kenzie oferece as seguintes funcionalidades:

1. **Adicionar Transações:** Os usuários podem adicionar novas transações, especificando se é uma entrada ou saída, a descrição e o valor.
2. **Excluir Transações:** Cada transação pode ser excluída individualmente.
3. **Total de Gastos:** O aplicativo calcula e exibe o total de gastos, considerando entradas e saídas.
4. **Estilização Responsiva:** A aplicação possui um design responsivo para uma experiência consistente em diferentes dispositivos.

## Instalação

Siga estas etapas para executar o projeto localmente:

1. Clone este repositório.
2. Navegue até o diretório do projeto: `cd nome-do-diretório`.
3. Instale as dependências: `npm install` ou `yarn install`.
4. Inicie o servidor de desenvolvimento: `npm start` ou `yarn start`.

## Tecnologias Utilizadas

- React
- Styled Components