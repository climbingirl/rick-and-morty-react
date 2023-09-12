import { Character } from '../../types/models';

const baseUrl = 'https://rickandmortyapi.com/api/character/';

export const getCharacters = async (name: string): Promise<Character[]> => {
  const search: Record<string, string> = {};

  if (name) {
    search.name = name;
  }

  const searchParams = new URLSearchParams(search);

  const response = await fetch(`${baseUrl}?${searchParams}`);
  const data = await response.json();
  if (data.error) return [];
  return data.results;
};

export const getCharacter = async (id: string): Promise<Character | null> => {
  const response = await fetch(baseUrl + id);
  const data = await response.json();
  if (data.error) return null;
  return data;
};
