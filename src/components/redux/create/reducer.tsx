import { CreateAction, CreateActionTypes, CreateState } from './types';

const initialState: CreateState = {
  cards: [],
};

export const createReducer = (state = initialState, action: CreateAction): CreateState => {
  switch (action.type) {
    case CreateActionTypes.SET_CREATE_CARD:
      return { ...state, cards: [...state.cards, action.payload] };
    default:
      return state;
  }
};
