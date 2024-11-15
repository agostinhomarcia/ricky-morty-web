import axios from "axios";

const BASE_URL = "https://rickandmortyapi.com/api";

export const api = axios.create({
  baseURL: BASE_URL,
});

export const getCharacters = async (page = 1) => {
  const response = await api.get("/character", {
    params: {
      page,
    },
  });
  return response.data;
};

export const searchCharacters = async (name: string) => {
  const response = await api.get("/character", {
    params: {
      name,
    },
  });
  return response.data;
};
