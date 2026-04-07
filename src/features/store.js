import { configureStore } from "@reduxjs/toolkit";
import createReducer from "./cart/cartSlice";
import productReducer from "./products/productSlice";

export const store = configureStore({
  reducer: {
    cart: createReducer,
    products: productReducer,
  },
});
