import axios from "axios";
import { ApiResponse } from "../types/character";

const api = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

export const getCharacters = async (page: number) => {
  try {
    const response = await api.get(`/character?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar personagens:", error);
    return {
      results: [],
      info: {
        count: 0,
        pages: 0,
        next: null,
        prev: null,
      },
    };
  }
};

export const getCharacterById = async (id: string) => {
  const response = await api.get(`/character/${id}`);
  return response.data;
};

export default api;
