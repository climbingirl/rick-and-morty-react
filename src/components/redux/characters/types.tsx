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
  APLY_CHARACTERS_SEARCH_PARAMS = 'APLY_CHARACTERS_SEARCH_PARAMS',
}

interface FetchCharactersAction {
  type: CharactersActionTypes.FETCH_CHARACTERS;
}

interface FetchCharactersSuccessAction {
  type: CharactersActionTypes.FETCH_CHARACTERS_SUCCESS;
  payload: { characters: Character[]; totalPage: number };
}

interface FetchCharactersErrorAction {
  type: CharactersActionTypes.FETCH_CHARACTERS_ERROR;
  payload: string;
}

interface SetCharactersSearchTextAction {
  type: CharactersActionTypes.SET_CHARACTERS_SEARCH_TEXT;
  payload: string;
}

interface SetCharactersCurrentPage {
  type: CharactersActionTypes.SET_CHARACTERS_CURRENT_PAGE;
  payload: number;
}

interface AplyCharactersSearchParams {
  type: CharactersActionTypes.APLY_CHARACTERS_SEARCH_PARAMS;
  payload: {
    searchText: string;
    currentPage: number;
  };
}

export type CharactersAction =
  | FetchCharactersAction
  | FetchCharactersSuccessAction
  | FetchCharactersErrorAction
  | SetCharactersSearchTextAction
  | SetCharactersCurrentPage
  | AplyCharactersSearchParams;
