import { Character } from '../../types/models';

const baseUrl = 'https://rickandmortyapi.com/api/character/';

export const getCharacter = async (id: string): Promise<Character | null> => {
  const response = await fetch(baseUrl + id);
  const data = await response.json();
  if (data.error) return null;
  return data;
};
