# Rick and Morty Character Explorer

Uma aplicação React + TypeScript para explorar personagens do Rick and Morty, desenvolvida com foco em boas práticas e performance.

## 🏗️ Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── BackButton/     # Navegação
│   ├── LoadingSpinner/ # Feedback de carregamento
│   ├── Pagination/     # Navegação entre páginas
│   ├── CharacterCard/  # Card de personagem
│   └── SearchBar/      # Busca de personagens
│
├── constants/          # Constantes da aplicação
│
├── contexts/          # Contextos React
│   └── CharacterContext.tsx
│
├── hooks/             # Hooks customizados
│   └── useCharacter.ts
│
├── pages/            # Páginas da aplicação
│   ├── CharacterDetails/
│   └── Characters/
│
├── routes/           # Configuração de rotas
│   └── index.tsx
│
├── services/         # Serviços e integrações
│
├── styles/           # Estilos globais
│   ├── App.styles.ts
│   ├── global.ts
│   └── theme.ts
│
├── types/            # Definições de tipos
│   ├── api.ts
│   └── characterStatus.ts
│
└── utils/            # Utilitários
    ├── api.ts
    └── localStorage.ts
```

### 🎯 Detalhamento das Camadas

#### 1. Components (`/components`)

Componentes React reutilizáveis e independentes:

- `BackButton`: Navegação entre páginas
- `LoadingSpinner`: Feedback visual de carregamento
- `Pagination`: Controle de paginação
- `CharacterCard`: Exibição de personagens
- `SearchBar`: Interface de busca

#### 2. Contexts (`/contexts`)

Gerenciamento de estado global:

- `CharacterContext`: Gerencia dados dos personagens
- Compartilhamento de estado
- Tipagem forte com TypeScript

#### 3. Pages (`/pages`)

Páginas principais da aplicação:

- `CharacterDetails`: Visualização detalhada
- `Characters`: Listagem de personagens

#### 4. Styles (`/styles`)

Estilização consistente:

- Styled Components
- Temas globais
- Variáveis compartilhadas

#### 5. Types (`/types`)

Definições de tipos TypeScript:

- Interfaces da API
- Types de status
- Tipos compartilhados

## 🛠 Tecnologias Utilizadas

- React
- TypeScript
- Styled Components
- React Router DOM
- Context API

## 💡 Principais Funcionalidades

- Listagem de personagens
- Busca por nome
- Visualização detalhada
- Paginação
- Estados de carregamento
- Interface responsiva

## 🔍 Pontos Fortes

1. **Arquitetura**

   - Estrutura modular
   - Separação clara de responsabilidades
   - Código manutenível

2. **Performance**

   - Componentes otimizados
   - Gerenciamento eficiente de estado
   - Carregamento sob demanda

3. **Desenvolvimento**
   - TypeScript para maior segurança
   - Padrões consistentes
   - Componentes reutilizáveis

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

- `npm start`: Inicia o servidor de desenvolvimento
- `npm test`: Executa os testes
- `npm run build`: Gera build de produção
- `npm run lint`: Verifica o código

## 👥 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/NovaFuncionalidade`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## 📫 Contato

[Seu Nome](https://www.linkedin.com/in/marcia-agostinho-developer/)

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
