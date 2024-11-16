import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppContainer } from "./styles/App.styles";
import { Characters } from "./pages/Characters";
import { CharacterDetails } from "./pages/CharacterDetails";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/theme";
import { CharactersProvider } from "./contexts/CharactersContext";

const queryClient = new QueryClient();

function App() {
  return (
    <CharactersProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <BrowserRouter>
            <AppContainer>
              <Routes>
                <Route path="/" element={<Characters />} />
                <Route path="/character/:id" element={<CharacterDetails />} />
              </Routes>
            </AppContainer>
          </BrowserRouter>
        </ThemeProvider>
      </QueryClientProvider>
    </CharactersProvider>
  );
}

export default App;
