import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CardElement } from '../types/models';

interface CreateState {
  cards: CardElement[];
}

const initialState: CreateState = {
  cards: [],
};

const createPageSlice = createSlice({
  name: 'create',
  initialState,
  reducers: {
    addCard(state, action: PayloadAction<CardElement>) {
      state.cards.push(action.payload);
    },
  },
});

export const { addCard } = createPageSlice.actions;

export default createPageSlice.reducer;
