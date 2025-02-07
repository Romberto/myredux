import { createSlice } from "@reduxjs/toolkit";
import { ReceptItemType } from "../../../utils/types";

type ReceptStateType = {
  favoritesList: ReceptItemType[];
};

const initialState: ReceptStateType = {
  favoritesList: [],
};

const ReceptSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    ToggleItemInFavorites: (state, action) => {
      const payload = action.payload; // Извлекаем данные из action
      const isExist = state.favoritesList.some(
        (item) => item.id === payload.id
      ); // Проверяем, существует ли элемент

      if (!isExist) {
        // Если элемент не существует, добавляем его в список
        state.favoritesList.push(payload);
      } else {
        // Если элемент существует, фильтруем его из списка
        state.favoritesList = state.favoritesList.filter(
          (item) => item.id !== payload.id
        );
      }
    },
  },
  extraReducers(builder) {
      
  },
});

export default ReceptSlice.reducer;
export const { ToggleItemInFavorites } = ReceptSlice.actions;
