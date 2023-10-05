import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { Character } from '../types/models';
import { charactersAPI } from '../api/api';

interface CharactersState {
  characters: Character[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: null | string;
  totalPage: number;
  currentPage: number;
  searchText: string;
  initialSearchParamsApplied: boolean;
}

const initialState: CharactersState = {
  characters: [],
  status: 'idle',
  error: null,
  totalPage: 0,
  currentPage: 1,
  searchText: '',
  initialSearchParamsApplied: false,
};

export const fetchCharacters = createAsyncThunk<
  { characters: Character[]; totalPage: number },
  { name: string; page: number }
>('characters/fetchCharacters', async (params) => {
  const response = await charactersAPI.getCharacters(params.name, params.page);
  return { characters: response.results, totalPage: response.info.pages };
});

const charactersSlice = createSlice({
  name: 'characters',
  initialState,
  reducers: {
    setInitSearchParams(state, action: PayloadAction<{ name: string; page: number }>) {
      state.searchText = action.payload.name;
      state.currentPage = action.payload.page;
      state.initialSearchParamsApplied = true;
    },
    setSearchText(state, action: PayloadAction<string>) {
      state.currentPage = 1;
      state.searchText = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.status = 'loading';
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.characters = action.payload.characters;
      state.totalPage = action.payload.totalPage;
    });
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.status = 'failed';
      state.error = action.error.message || 'Unknown error';
    });
  },
});

export const { setInitSearchParams, setSearchText, setCurrentPage } = charactersSlice.actions;

export default charactersSlice.reducer;
