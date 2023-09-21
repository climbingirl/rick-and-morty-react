import { combineReducers } from 'redux';
import { charactersReducer } from './characters/reducer';

export const rootReducer = combineReducers({
  characters: charactersReducer,
});
