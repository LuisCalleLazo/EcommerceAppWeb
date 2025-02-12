
import { configureStore } from '@reduxjs/toolkit'
// Importa tus slices aquí

import productReducer from "./productsSlice";
import productDetailReducer from "./productDetailSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    productDetail: productDetailReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch