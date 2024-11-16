export const API_BASE_URL = "https://rickandmortyapi.com/api";
export const ENDPOINTS = {
  characters: "/character",
  character: (id: string) => `/character/${id}`,
};
