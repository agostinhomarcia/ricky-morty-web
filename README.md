# 🎬 Projeto Rick & Morty

## 📝 Sobre o Projeto

Este é um projeto React que exibe informações sobre personagens de filmes, utilizando TypeScript para tipagem segura e React Query para gerenciamento de estado.

## 🏗 Arquitetura do Projeto

### 📁 Estrutura de Pastas

```
MOVIE/
├── node_modules/
├── public/
└── src/
    ├── components/      # Componentes reutilizáveis
    │   ├── BackButton/
    │   ├── Card/
    │   ├── Header/
    │   ├── Loading/
    │   ├── Pagination/
    │   └── SearchBar/
    ├── contexts/       # Contextos React
    │   └── CharactersContext/
    ├── pages/          # Páginas da aplicação
    │   ├── Home/
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
    │   ├── useDebounce.ts
    │   ├── usePagination.ts
    │   └── useLocalStorage.ts
    ├── routes/         # Configuração de rotas
    │   ├── index.tsx
    │   └── PrivateRoute.tsx
    └── constants/      # Constantes e configurações
        ├── api.ts
        ├── messages.ts
        └── config.ts
```

### 🎯 Camadas da Aplicação

#### 1. Componentes (`/components`)

- Componentes React reutilizáveis
- Cada componente com sua própria estilização
- Props tipadas com TypeScript
- Exemplos: Card, Header, Loading

#### 2. Contextos (`/contexts`)

- Gerenciamento de estado global
- Context API para compartilhamento de dados
- Hooks personalizados para consumo
- Exemplo: CharactersContext para favoritos

#### 3. Páginas (`/pages`)

- Páginas principais da aplicação
- Integração com React Router
- Consumo de dados via React Query
- Exemplo: Home, CharacterDetails, Favorites

#### 4. Serviços (`/services`)

- Configuração do Axios
- Endpoints centralizados
- Tipagem de respostas
- Tratamento de erros

#### 5. Types (`/types`)

- Interfaces TypeScript
- Types para API
- Enums compartilhados
- Definições de tipos reutilizáveis

#### 6. Estilos (`/styles`)

- Styled Components
- Temas customizáveis
- Variáveis globais
- Estilos compartilhados

#### 7. Utils (`/utils`)

- Formatadores (formatterStatus.ts)
- Configuração API (api.ts)
- Gerenciamento localStorage (localStorage.ts)
- Funções helper reutilizáveis

#### 8. Hooks (`/hooks`)

- Custom hooks reutilizáveis
- Lógica de negócio compartilhada
- Exemplo: useDebounce, usePagination

#### 9. Rotas (`/routes`)

- Configuração React Router
- Proteção de rotas
- Layouts compartilhados
- Navegação da aplicação

#### 10. Constantes (`/constants`)

- URLs da API
- Mensagens do sistema
- Configurações globais
- Valores imutáveis

## 🔄 Fluxo de Dados

1. Usuário interage com uma página
2. Componente utiliza hooks e contexts
3. Serviços fazem chamadas à API
4. Utils processam e formatam dados
5. Interface atualiza com novos dados

## 🛠 Tecnologias Principais

- React 18
- TypeScript
- React Query
- React Router Dom
- Styled Components
- Axios

## 💻 Boas Práticas Implementadas

- Código totalmente tipado com TypeScript
- Componentização para reuso
- Separação clara de responsabilidades
- Gerenciamento de estado com Context API
- Cache eficiente com React Query
- Tratamento de erros centralizado
- Formatação consistente de dados
- Persistência local com localStorage

## 🔍 Pontos Fortes da Arquitetura

1. **Manutenibilidade**

   - Código organizado e modular
   - Responsabilidades bem definidas
   - Fácil localização de arquivos

2. **Escalabilidade**

   - Estrutura preparada para crescimento
   - Padrões bem definidos
   - Fácil adição de novas features

3. **Performance**

   - Caching eficiente
   - Code splitting
   - Otimização de renderização

4. **Desenvolvimento**
   - DRY (Don't Repeat Yourself)
   - SOLID principles
   - Clean Code

## 💻 Como Rodar o Projeto

1. Clone o repositório

```bash
git clone [url-do-repositorio]
```

2. Instale as dependências

```bash
npm install
```

3. Inicie o projeto

```bash
npm start
```

## 📚 Scripts Disponíveis

- `npm start`: Inicia o projeto em modo desenvolvimento
- `npm test`: Executa os testes
- `npm run build`: Gera versão de produção
- `npm run lint`: Executa verificação de código

## 🔍 Boas Práticas Implementadas

- Código tipado com TypeScript
- Componentização para reuso
- Separação clara de responsabilidades
- Gerenciamento de estado com React Query
- Organização escalável de arquivos

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature
3. Faça commit das alterações
4. Faça push para a branch
5. Abra um Pull Request

## 📫 Contato

[Márcia](https://www.linkedin.com/in/marcia-agostinho-developer/)
