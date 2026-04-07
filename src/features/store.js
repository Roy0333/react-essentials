import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: createReducer,
  },
});
