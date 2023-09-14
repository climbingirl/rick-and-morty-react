import { Character } from '../../types/models';

const baseUrl = 'https://rickandmortyapi.com/api/character/';

export const getCharactersData = async (
  name: string,
  page: string
): Promise<[Character[], number]> => {
  const search: Record<string, string> = {};
  if (name) search.name = name;
  if (page) search.page = page;
  const searchParams = new URLSearchParams(search);

  const response = await fetch(`${baseUrl}?${searchParams}`);
  const data = await response.json();
  if (data.error) return [[], 0];
  return [data.results, data.info.pages];
};

export const getCharacter = async (id: string): Promise<Character | null> => {
  const response = await fetch(baseUrl + id);
  const data = await response.json();
  if (data.error) return null;
  return data;
};
