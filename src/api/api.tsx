import { Character, CharactersAPIResponse } from '../types/models';

const baseUrl = 'https://rickandmortyapi.com/api/character/';

export const charactersAPI = {
  getCharacters: async (name: string, page: number): Promise<CharactersAPIResponse> => {
    const search: Record<string, string> = {};
    if (name) search.name = name;
    if (page) search.page = String(page);
    const searchParams = new URLSearchParams(search);
    const response = await fetch(`${baseUrl}?${searchParams}`);
    if (response.ok !== true) throw new Error('Сharacters request error');
    const data: CharactersAPIResponse = await response.json();
    return data;
  },
  getCharacter: async (id: string): Promise<Character | null> => {
    const response = await fetch(baseUrl + id);
    if (response.ok !== true) return null;
    const data: Character = await response.json();
    return data;
  },
};
