import axios from "axios";
import { API_BASE_URL, ENDPOINTS } from "../constants/api";

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const getCharacters = async ({ page = 1 }) => {
  const response = await api.get(`${ENDPOINTS.characters}?page=${page}`);
  return response.data;
};

export const getCharacterById = async (id: string) => {
  const response = await api.get(ENDPOINTS.character(id));
  return response.data;
};

export default api;
