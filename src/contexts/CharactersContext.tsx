import { createContext, useContext, ReactNode, useState } from "react";
import { Character } from "../types/character";

interface CharactersContextData {
  favorites: Character[];
  addToFavorites: (character: Character) => void;
  removeFromFavorites: (characterId: number) => void;
  isFavorite: (characterId: number) => boolean;
}

const CharactersContext = createContext<CharactersContextData>(
  {} as CharactersContextData
);

export function CharactersProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Character[]>([]);

  const addToFavorites = (character: Character) => {
    setFavorites((prev) => [...prev, character]);
  };

  const removeFromFavorites = (characterId: number) => {
    setFavorites((prev) => prev.filter((char) => char.id !== characterId));
  };

  const isFavorite = (characterId: number) => {
    return favorites.some((char) => char.id === characterId);
  };

  return (
    <CharactersContext.Provider
      value={{
        favorites,
        addToFavorites,
        removeFromFavorites,
        isFavorite,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
}

export const useCharacters = () => useContext(CharactersContext);
