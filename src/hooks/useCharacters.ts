import { useQuery } from "@tanstack/react-query";
import { getCharacters, getCharacterById } from "../services/api";
import { Character, CharacterResponse } from "../types/character";

export function useCharacters(page: number) {
  return useQuery<CharacterResponse>({
    queryKey: ["characters", page],
    queryFn: () => getCharacters({ page }),
  });
}

export function useCharacter(id: string) {
  return useQuery<Character>({
    queryKey: ["character", id],
    queryFn: () => getCharacterById(id),
    enabled: !!id,
  });
}
