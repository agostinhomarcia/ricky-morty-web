import { Routes, Route } from "react-router-dom";
import { Characters } from "../pages/Characters";
import { CharacterDetails } from "../pages/CharacterDetails";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="/character/:id" element={<CharacterDetails />} />
    </Routes>
  );
}
