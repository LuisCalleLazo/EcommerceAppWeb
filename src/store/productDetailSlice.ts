import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

interface Product {
  id : number;
  name : string;
  description : string;
  price : number;
  images : string[];
  qualification : number;
}

interface ProductState {
  selectedProduct: Product | null
}

const initialState: ProductState = {
  selectedProduct: null,
}

export const productDetailSlice = createSlice({
  name: "productDetail",
  initialState,
  reducers: {
    setSelectedProduct: (state, action: PayloadAction<Product>) => {
      state.selectedProduct = action.payload
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null
    },
  },
})

export const { setSelectedProduct, clearSelectedProduct } = productDetailSlice.actions
export default productDetailSlice.reducer