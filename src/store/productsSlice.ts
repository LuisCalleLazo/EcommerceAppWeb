import { createSlice } from "@reduxjs/toolkit"
import { ecommerceProducts } from "../utils"
import { ProductResponse } from "../interfaces"



const initialState: ProductResponse[] = ecommerceProducts

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
})

export default productSlice.reducer

