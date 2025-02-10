import { Action, createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAppAsyncThunk } from "../../../app/hooks";
import { ReceptItemType } from "../../../utils/types";
import { fetchAllRecept } from "../../../servises/api";

export const fetchReceptAll = createAsyncThunk(
  "recepts/getAllRecepts",
  async () => {
    const data = await fetchAllRecept();
    return data;
  }
);

export const AddNewRecept = createAsyncThunk(
  'recepts/addNewRecept',
  async()=>{
    try{
      const data = {
        id: "45",
        title: 'Mакароны',
        views: 400
      }

      const response = await fetch('http://localhost:3000/recepts',{
        method: "POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      if(!response.ok){
        throw new Error('Сеть ответила с ошибкой');
      }
      console.log('sucssesfull')
      return  await response.json()
      
    }catch(error){
      console.error(error)
    }
  }
)

const initialState: { recepts: ReceptItemType[],isLoading: "pending" | "fulfilled" | 'rejected'} = {
  recepts: [],
  isLoading: "pending"
};

const receptSlice = createSlice({
  name: "recepts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchReceptAll.fulfilled, (state, action) => {
      state.recepts = action.payload;
      state.isLoading = 'fulfilled'
    });
    builder.addCase(AddNewRecept.fulfilled,(state, action:PayloadAction<ReceptItemType>) => {
      state.recepts.push(action.payload)
      state.isLoading = 'fulfilled'
    });
  },
});
export const {} = receptSlice.actions;
export default receptSlice.reducer;
