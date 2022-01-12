import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  mycourses: [],
  myteachers:[],
  mystudents:[],
};
export const mycourses = createAsyncThunk("mycourses", async () => {
  const response = await axios.get(
    `https://intense-hamlet-45905.herokuapp.com/all-courses`
  );
  
  return response.data;
});
export const myteachers = createAsyncThunk("myteachers", async () => {
  const response = await axios.get(
    `https://intense-hamlet-45905.herokuapp.com/teachers`
  );
  
  return response.data;
});
export const mystudents = createAsyncThunk("mystudents", async () => {
  const response = await axios.get(
    `https://intense-hamlet-45905.herokuapp.com/teachers`
  );
  
  return response.data;
});
export const counterSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(mycourses.fulfilled, (state, action) => {
      // alert('action is full filled')
      state.mycourses = action.payload;
    });
    builder.addCase(myteachers.fulfilled, (state, action) => {
      // alert('action is full filled')
      state.myteachers = action.payload;
    });
    builder.addCase(mystudents.fulfilled, (state, action) => {
      // alert('action is full filled')
      state.mystudents = action.payload;
    });
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
