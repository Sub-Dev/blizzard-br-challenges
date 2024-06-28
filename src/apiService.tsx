import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE;

export type Game = {
  name: string;
  category: string;
  image: string;
  logo: string;
};

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const fetchGames = async (): Promise<Game[]> => {
  try {
    const response = await api.get('/games');
    return response.data;
  } catch (error) {
    if (error instanceof Error) {
      console.error('Erro ao buscar jogos:', error.message);
    } else {
      console.error('Erro desconhecido:', error);
    }
    throw error;
  }
};
