import { CharactersAction, CharactersActionTypes, CharactersState } from './types';

const initialState: CharactersState = {
  characters: [],
  error: null,
  isLoading: false,
  totalPage: 0,
  currentPage: 1,
  searchText: '',
  isSearchParamsApplied: false,
};

export const charactersReducer = (
  state = initialState,
  action: CharactersAction
): CharactersState => {
  switch (action.type) {
    case CharactersActionTypes.FETCH_CHARACTERS:
      return { ...state, isLoading: true };
    case CharactersActionTypes.FETCH_CHARACTERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: null,
        characters: action.payload.characters,
        totalPage: action.payload.totalPage,
      };
    case CharactersActionTypes.FETCH_CHARACTERS_ERROR:
      return { ...state, isLoading: false, characters: [], totalPage: 0, error: action.payload };
    case CharactersActionTypes.SET_CHARACTERS_SEARCH_TEXT:
      return { ...state, currentPage: 1, searchText: action.payload };
    case CharactersActionTypes.SET_CHARACTERS_CURRENT_PAGE:
      return { ...state, currentPage: action.payload };
    case CharactersActionTypes.SET_CHARACTERS_SEARCH_PARAMS:
      return {
        ...state,
        isSearchParamsApplied: true,
        currentPage: action.payload.currentPage,
        searchText: action.payload.searchText,
      };
    default:
      return state;
  }
};
