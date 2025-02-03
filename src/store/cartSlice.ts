import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  images: string[]
}

interface CartState {
  items: CartItem[]
}

const loadCartFromStorage = (): CartState => {
  if (typeof window !== "undefined") {
    const storedCart = localStorage.getItem("cart")
    return storedCart ? JSON.parse(storedCart) : { items: [] }
  }
  return { items: [] }
}

const saveCartToStorage = (cart: CartState) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cart))
  }
}

const initialState: CartState = loadCartFromStorage()

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Omit<CartItem, "quantity">>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }
      saveCartToStorage(state)
    },
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const item = state.items.find((item) => item.id === action.payload.id)
      if (item) {
        item.quantity = action.payload.quantity
      }
      saveCartToStorage(state)
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      saveCartToStorage(state) 
    },
    clearCart: (state) => {
      state.items = []
      saveCartToStorage(state)
    },
  },
})

export const { addToCart, updateQuantity, removeItem } = cartSlice.actions
export default cartSlice.reducer

