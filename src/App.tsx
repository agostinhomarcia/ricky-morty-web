import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppContainer } from "./styles/App.styles";
import { Characters } from "./pages/Characters";
import { CharacterDetails } from "./pages/CharacterDetails";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppContainer>
          <Routes>
            <Route path="/" element={<Characters />} />
            <Route path="/character/:id" element={<CharacterDetails />} />
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
