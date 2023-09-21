import { Character } from '../../../types/models';

export interface CharactersState {
  characters: Character[];
  error: null | string;
  isLoading: boolean;
  totalPage: number;
  currentPage: number;
  searchText: string;
  isSearchParamsApplied: boolean;
}

export enum CharactersActionTypes {
  FETCH_CHARACTERS = 'FETCH_CHARACTERS',
  FETCH_CHARACTERS_SUCCESS = 'FETCH_CHARACTERS_SUCCESS',
  FETCH_CHARACTERS_ERROR = 'FETCH_CHARACTERS_ERROR',
  SET_CHARACTERS_SEARCH_TEXT = 'SET_CHARACTERS_SEARCH_TEXT',
  SET_CHARACTERS_CURRENT_PAGE = 'SET_CHARACTERS_CURRENT_PAGE',
  SET_CHARACTERS_SEARCH_PARAMS = 'SET_CHARACTERS_SEARCH_PARAMS',
}

interface FetchCharacters {
  type: CharactersActionTypes.FETCH_CHARACTERS;
}

interface FetchCharactersSuccess {
  type: CharactersActionTypes.FETCH_CHARACTERS_SUCCESS;
  payload: { characters: Character[]; totalPage: number };
}

interface FetchCharactersError {
  type: CharactersActionTypes.FETCH_CHARACTERS_ERROR;
  payload: string;
}

interface SetCharactersSearchText {
  type: CharactersActionTypes.SET_CHARACTERS_SEARCH_TEXT;
  payload: string;
}

interface SetCharactersCurrentPage {
  type: CharactersActionTypes.SET_CHARACTERS_CURRENT_PAGE;
  payload: number;
}

interface SetCharactersSearchParams {
  type: CharactersActionTypes.SET_CHARACTERS_SEARCH_PARAMS;
  payload: {
    searchText: string;
    currentPage: number;
  };
}

export type CharactersAction =
  | FetchCharacters
  | FetchCharactersSuccess
  | FetchCharactersError
  | SetCharactersSearchText
  | SetCharactersCurrentPage
  | SetCharactersSearchParams;
