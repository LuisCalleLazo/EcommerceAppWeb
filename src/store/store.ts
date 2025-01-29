
import { configureStore } from '@reduxjs/toolkit'
// Importa tus slices aquí

export const store = configureStore({
  reducer: {
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch