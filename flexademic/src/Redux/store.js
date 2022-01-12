import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./dataSlice";

export const store = configureStore({
  reducer: {
    data: counterSlice,
  },
});
