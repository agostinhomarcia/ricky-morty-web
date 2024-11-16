# 🎬 Projeto Movie

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
    ├── constants/       # Constantes e configurações
    ├── hooks/          # Hooks personalizados
    ├── pages/          # Páginas da aplicação
    │   ├── CharacterDetails/
    │   └── Characters/
    ├── routes/         # Configuração de rotas
    ├── services/       # Serviços e chamadas API
    ├── styles/         # Estilos globais
    ├── types/          # Definições de tipos
    ├── App.tsx
    └── index.tsx
```

### 🎯 Camadas da Aplicação

#### 1. Componentes (`/components`)

- Componentes React reutilizáveis
- Elementos de UI compartilhados
- Exemplos: Botões, Cards, Inputs

#### 2. Constantes (`/constants`)

- Valores fixos da aplicação
- Configurações estáticas
- URLs da API
- Textos padrão

#### 3. Hooks (`/hooks`)

- Hooks React personalizados
- Lógica de negócio reutilizável
- Gerenciamento de estado local

#### 4. Páginas (`/pages`)

- **CharacterDetails**: Exibe detalhes de um personagem específico
- **Characters**: Lista todos os personagens disponíveis

#### 5. Rotas (`/routes`)

- Configuração do React Router
- Definição de navegação
- Proteção de rotas (se necessário)

#### 6. Serviços (`/services`)

- Chamadas para APIs externas
- Lógica de negócios
- Manipulação de dados

#### 7. Estilos (`/styles`)

- Arquivos de estilo globais
- Temas da aplicação
- Variáveis de estilo compartilhadas

#### 8. Types (`/types`)

- Interfaces TypeScript
- Types compartilhados
- Definições de tipos da API

## 🔄 Fluxo de Dados

1. Usuário interage com uma página
2. Componente usa hooks personalizados
3. Hook chama serviço necessário
4. Serviço faz requisição à API
5. Dados retornam e atualizam a interface

## 🛠 Tecnologias Principais

- React
- TypeScript
- React Query
- React Router
- Styled Components (ou similar para estilos)

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
