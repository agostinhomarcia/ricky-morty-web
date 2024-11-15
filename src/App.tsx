import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CharacterGrid } from "./components/CharacterGrid";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Arial', sans-serif;
    background: #f5f5f5;
  }
`;

const queryClient = new QueryClient();

const AppContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.header`
  padding: 2rem;
  text-align: center;

  h1 {
    color: #2196f3;
    font-size: 2.5rem;
  }
`;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <AppContainer>
        <Header>
          <h1>Rick and Morty Characters</h1>
        </Header>
        <CharacterGrid />
      </AppContainer>
    </QueryClientProvider>
  );
}

export default App;
