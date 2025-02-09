import { combineReducers, configureStore } from '@reduxjs/toolkit'
import receptReduser from '../components/UI/ReceptList/reseptListSlice.slice'
import toggleReduser from '../components/UI/ReceptItem/Togglerecept.slice'


const reducers = combineReducers({
    receptReduser,
    toggleReduser
});

export const store = configureStore({
  reducer: reducers, 
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch