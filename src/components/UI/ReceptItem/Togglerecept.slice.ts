import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ReceptItemType } from "../../../utils/types";
import {
  fetchAddToFavoritas,
  fetchGetAllFavoritas,
  fetchRemoveOnFavoritas,
} from "../../../servises/api";


// добавляем в избранное
export const addToFavoritas = createAsyncThunk(
  "favorites/addFavorites",
  async (item: ReceptItemType) => {
    return await fetchAddToFavoritas(item);
  }
);
// убираем из избранного
export const RemoveOnFavoritas = createAsyncThunk(
  "favorites/removeFavorites",
  async (item: ReceptItemType) => {
    return fetchRemoveOnFavoritas(item);
  }
);
// получить список избранного с сервера
export const getAllFavoritas = createAsyncThunk(
  "favorites/getAll",
  async () => {
    return fetchGetAllFavoritas();
  }
);

const initialState: { favoritas: ReceptItemType[] } = {
  favoritas: [],
};

const ToggleFavoritas = createSlice({
  name: "favorites/toggleFavorites",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      addToFavoritas.fulfilled,
      (state, action: PayloadAction<ReceptItemType>) => {
        state.favoritas.push(action.payload);
      }
    ),
      builder.addCase(
        RemoveOnFavoritas.fulfilled,
        (state, action: PayloadAction<ReceptItemType>) => {
          state.favoritas = state.favoritas.filter(
            (elem) => elem.id !== action.payload.id
          );
        }
      ),
      builder.addCase(
        getAllFavoritas.fulfilled,
        (state, action: PayloadAction<ReceptItemType[]>) => {
          state.favoritas = action.payload;
        }
      );
  },
});

export default ToggleFavoritas.reducer;
