import { CharactersAction, CharactersActionTypes } from './types';
import { AppDispatch } from '../store';
import { charactersAPI } from '../../../api/api';

export const fetchCharacters = (name: string, page: number) => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch({ type: CharactersActionTypes.FETCH_CHARACTERS });
      const data = await charactersAPI.getCharacters(name, page);
      dispatch({
        type: CharactersActionTypes.FETCH_CHARACTERS_SUCCESS,
        payload: { characters: data.results, totalPage: data.info.pages },
      });
    } catch (error) {
      dispatch({ type: CharactersActionTypes.FETCH_CHARACTERS_ERROR, payload: 'Nothing found' });
    }
  };
};

export const setCharactersSearchText = (text: string): CharactersAction => ({
  type: CharactersActionTypes.SET_CHARACTERS_SEARCH_TEXT,
  payload: text,
});

export const setCharactersCurrentPage = (page: number): CharactersAction => ({
  type: CharactersActionTypes.SET_CHARACTERS_CURRENT_PAGE,
  payload: page,
});

export const setCharactersSearchParams = (text: string, page: number): CharactersAction => ({
  type: CharactersActionTypes.SET_CHARACTERS_SEARCH_PARAMS,
  payload: {
    searchText: text,
    currentPage: page,
  },
});
