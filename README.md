# 🎬 Projeto Rick & Morty

## 📝 Sobre o Projeto

Este é um projeto React que exibe informações sobre personagens de Rick & Morty, utilizando TypeScript para tipagem segura e React Query para gerenciamento de estado.

## 🏗 Arquitetura do Projeto

### 📁 Estrutura de Pastas

```
MOVIE/
├── node_modules/
├── public/
└── src/
    ├── components/      # Componentes reutilizáveis
    │   ├── BackButton/
    │   ├── Loading/
    │   ├── Pagination/
    │   └── SearchBar/
    ├── contexts/       # Contextos React
    │   └── CharactersContext/
    ├── pages/ # Páginas da aplicação
    │   ├── CharacterDetails/
    │   └── Favorites/
    ├── services/       # Serviços e chamadas API
    │   ├── api.ts
    │   └── endpoints.ts
    ├── types/          # Definições de tipos
    │   ├── character.ts
    │   ├── api.ts
    │   └── common.ts
    ├── styles/         # Estilos globais
    │   ├── global.ts
    │   ├── theme.ts
    │   └── common.ts
    ├── utils/          # Funções utilitárias
    │   ├── formatterStatus.ts
    │   ├── api.ts
    │   └── localStorage.ts
    ├── hooks/          # Custom hooks
    │   └── useCharacters.ts
    ├── routes/         # Configuração de rotas
    │   └── index.tsx
    └── constants/      # Constantes e configurações
        └── api.ts

```

### 🎯 Detalhamento das Camadas

#### 1. Components (`/components`)

- Componentes React reutilizáveis
- BackButton: Navegação entre páginas
- Loading: Feedback visual de carregamento
- Pagination: Navegação entre páginas de resultados
- SearchBar: Busca de personagens

#### 2. Contexts (`/contexts`)

- CharactersContext: Gerenciamento de favoritos
- Compartilhamento de estado global
- Tipagem forte para maior segurança

#### 3. Pages (`/pages`)

- CharacterDetails: Exibição detalhada do personagem
- Favorites: Lista de personagens favoritos
- Integração com React Router e React Query

#### 4. Services (`/services`)

- Configuração do Axios
- Endpoints centralizados
- Tipagem de respostas da API
- Tratamento de erros

#### 5. Types (`/types`)

- Interfaces TypeScript
- Tipagem para respostas da API
- Types compartilhados

#### 6. Styles (`/styles`)

- Styled Components
- Temas e variáveis globais
- Estilos compartilhados

#### 7. Utils (`/utils`)

- formatterStatus: Formatação de status dos personagens
- api: Configuração e utilidades da API
- localStorage: Gerenciamento de armazenamento local

#### 8. Hooks (`/hooks`)

- useCharacters: Gerenciamento de personagens
- Integração com React Query
- Lógica de favoritos

#### 9. Routes (`/routes`)

- Configuração do React Router
- Definição de rotas da aplicação

#### 10. Constants (`/constants`)

- URLs da API
- Configurações globais

## 🛠 Tecnologias Utilizadas

- React 18
- TypeScript
- React Query
- React Router Dom
- Styled Components
- Axios

## 💡 Principais Funcionalidades

- Listagem de personagens
- Busca por nome
- Detalhes do personagem
- Sistema de favoritos
- Paginação
- Loading states

## 🔍 Pontos Fortes

1. **Organização**

   - Estrutura clara e modular
   - Separação de responsabilidades
   - Fácil manutenção

2. **Performance**

   - Caching com React Query
   - Componentes otimizados
   - Lazy loading

3. **Desenvolvimento**
   - TypeScript para segurança
   - Padrões consistentes
   - Código reutilizável

## 🚀 Como Executar

1. Clone o repositório

```bash
git clone [url-do-repositorio]
```

2. Instale as dependências

```bash
npm install
```

3. Execute o projeto

```bash
npm start
```

## 📚 Scripts Disponíveis

- `npm start`: Inicia o projeto
- `npm build`: Build de produção
- `npm test`: Executa testes
- `npm lint`: Verifica código

## 👥 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Faça commit das alterações
4. Faça push para a branch
5. Abra um Pull Request

## 📫 Contato

[Márcia](https://www.linkedin.com/in/marcia-agostinho-developer/)
