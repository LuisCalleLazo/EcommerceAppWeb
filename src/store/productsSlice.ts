import { createSlice } from "@reduxjs/toolkit"
import { ecommerceProducts } from "../utils"


export interface Product {
  id: number
  name: string
  price: number
  images: string[]
}

const initialState: Product[] = ecommerceProducts

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
})

export default productSlice.reducer

