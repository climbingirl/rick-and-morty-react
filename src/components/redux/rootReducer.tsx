import { combineReducers } from 'redux';
import { charactersReducer } from './characters/reducer';
import { createReducer } from './create/reducer';

export const rootReducer = combineReducers({
  characters: charactersReducer,
  create: createReducer,
});
