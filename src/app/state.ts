import { combineReducers, configureStore } from '@reduxjs/toolkit';
import reducerFavorite from '../components/UI/ReceptList/reseptListSlice.slice';

const reducers = combineReducers({
    reducerFavorite
});

export const store = configureStore({
  reducer: reducers, 
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch