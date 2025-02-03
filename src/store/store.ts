
import { configureStore } from '@reduxjs/toolkit'
// Importa tus slices aquí

import productReducer from "./productsSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch