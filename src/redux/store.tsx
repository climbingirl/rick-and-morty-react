import { configureStore } from '@reduxjs/toolkit';
import charactersReducer from './charactersSlice';
import createPageReducer from './createSlice';

const store = configureStore({
  reducer: {
    characters: charactersReducer,
    create: createPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
