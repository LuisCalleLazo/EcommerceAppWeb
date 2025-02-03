import { useDispatch, useSelector } from "react-redux";
// import { useLoading } from "../context";
import { ProductResponse } from "../interfaces";
import { RootState } from "../store/store";
import { addToCart, removeItem, updateQuantity } from "../store/cartSlice";

export const useCartStore = () => {
  const dispatch = useDispatch();
  // const { setLoading } = useLoading();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const addProductToCart = (product: ProductResponse) => {
    // setLoading(true);
    dispatch(addToCart(product));
  };

  const updateCartQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const removeCartItem = (id: number) => {
    dispatch(removeItem(id));
  };

  return {
    cartItems,
    addProductToCart,
    updateCartQuantity,
    removeCartItem,
  };
};
