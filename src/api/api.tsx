import { Character, CharactersAPIResponse } from '../types/models';

const baseUrl = 'https://rickandmortyapi.com/api/character/';

export const charactersAPI = {
  getCharacters: async (name: string, page: number): Promise<CharactersAPIResponse> => {
    const search: Record<string, string> = {};
    if (name) search.name = name;
    if (page) search.page = String(page);
    const searchParams = new URLSearchParams(search);
    const response = await fetch(`${baseUrl}?${searchParams}`);
    const data: CharactersAPIResponse = await response.json();
    return data;
  },
  getCharacter: async (id: string): Promise<Character | null> => {
    const response = await fetch(baseUrl + id);
    const data = await response.json();
    if (data.error) return null;
    return data;
  },
};
