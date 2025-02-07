import { createSlice, nanoid } from "@reduxjs/toolkit";
import { CardType } from "../../../utils/types";
import { createAppAsyncThunk } from "../../../app/hooks";
import { fetchApiPage } from "../../../servises/api";

export const fetchCards = createAppAsyncThunk('cards/fetchCards', async () => {
    const response = await fetchApiPage()
    return response
  })

type CardsState = {
  posts: CardType[];
  status: "idle" | "pending" | "succeeded" | "failed";
  error: string | null;
};

const initialState: CardsState = {
  posts: [],
  status: "idle",
  error: null,
};
const cardSlice = createSlice({
  name: "getPageCard",
  initialState,
  reducers: {},
  extraReducers:(builder) => {},
});
