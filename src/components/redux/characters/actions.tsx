import { CharactersAction, CharactersActionTypes } from './types';
import { AppDispatch } from '../store';

const baseUrl = 'https://rickandmortyapi.com/api/character/';

export const fetchUsers = (name: string, page: number) => {
  return async (dispatch: AppDispatch) => {
    const search: Record<string, string> = {};
    if (name) search.name = name;
    if (page) search.page = String(page);
    const searchParams = new URLSearchParams(search);
    try {
      dispatch({ type: CharactersActionTypes.FETCH_CHARACTERS });
      const response = await fetch(`${baseUrl}?${searchParams}`);
      const data = await response.json();
      dispatch({
        type: CharactersActionTypes.FETCH_CHARACTERS_SUCCESS,
        payload: { characters: data.results, totalPage: data.info.pages },
      });
    } catch (error) {
      dispatch({ type: CharactersActionTypes.FETCH_CHARACTERS_ERROR, payload: 'Nothing found' });
    }
  };
};

export const setCharactersSearchTextAction = (text: string): CharactersAction => ({
  type: CharactersActionTypes.SET_CHARACTERS_SEARCH_TEXT,
  payload: text,
});

export const setCharactersCurrentPageAction = (page: number): CharactersAction => ({
  type: CharactersActionTypes.SET_CHARACTERS_CURRENT_PAGE,
  payload: page,
});

export const aplyCharactersSearchParamsAction = (text: string, page: number): CharactersAction => ({
  type: CharactersActionTypes.APLY_CHARACTERS_SEARCH_PARAMS,
  payload: {
    searchText: text,
    currentPage: page,
  },
});
