# LP - Revelare

## Introdução

Projeto desenvolvido como parte do processo. Abaixo estão as principais ferramentas e bibliotecas escolhidas para o desenvolvimento:

- **React (Vite)**
- **TypeScript**
- **Axios**
- **React Query**
- **Styled-Components**
- **React Router**

## Decisões

### Escolha de Tecnologias

1. **React + Vite:** Proporcionam um ambiente mais rápido, com builds otimizadas.
2. **React Query:** Reduz o código repetitivo para requisições à APIs, gerencia cache automaticamente e oferece outras ferramentas caso seja necessária customização no futuro (invalidação, desabilitação, etc).
3. **Styled-Components:** Permite uma estilização mais dinâmica, legível e fácil de dar manutenção.
4. **TypeScript:** Garante segurança na tipagem dos dados e propriedades, facilitando a manutenção.
5. **Familiaridade:** Todas as tecnologias foram escolhidas com base no conhecimento prévio, que permitiram um desenvolvimento mais rápido e eficiente.

### Organização do Projeto

- **Estrutura de Componentes:**  
  Componentes foram separados em até 4 arquivos:

  - **Tipagem:** Arquivo exclusivo para tipos e interfaces.
  - **Estilo:** Definição dos estilos utilizando Styled-Components.
  - **Constantes:** Variáveis e dados estáticos relacionados ao componente.
  - **Index:** Contém o código JSX (HTML em si) e a lógica do componente.

- **Pasta de Utils:** Criada para armazenar funções que podem ser reutilizadas em várias partes do projeto.

- **Context API:** Implementado para evitar o prop drilling e facilitar o acesso ao estado global, como no caso do estado de pesquisa utilizado na página de blog e na home. Isso também garante que seja mais fácil adicionar novos recursos no futuro utilizando o valor da pesquisa do header.

- **Hooks Personalizados:** Criado para lidar com requisições à API, centralizando a lógica e mantendo o código mais limpo.

- **Separação de Páginas e Componentes:** As páginas e componentes foram organizados em pastas separadas para evitar confusões e melhorar a legibilidade do código.

### Limitações de Design

Durante o desenvolvimento do projeto não houve acesso a nenhum software de design colaborativo (Figma, etc), nem às dimensões exatas com as quais a página foi planejada. Sendo assim:

- O design **mobile** foi feito com base em **estimativas** e **práticas comuns**.
- Não havia informações sobre especificações de elementos. Sendo assim, os seguintes elementos podem ser diferentes do design apresentado no mock:
  - **Tamanhos de fontes**.
  - **Fontes específicas** utilizadas no design.
  - **Cores oficiais** ou paleta exata do projeto.

Essas decisões foram feitas utilizando referências visuais disponíveis e estimativas para garantir que a aplicação fosse funcional e visualmente consistente.

---
