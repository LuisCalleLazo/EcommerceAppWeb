import { useDispatch } from "react-redux"
import { useLoading } from "../context";
import { ProductResponse } from "../interfaces";

export const useCartStore = () =>
{
  const dispatch = useDispatch();
  const { setLoading } = useLoading();

  const addToCart = (product : ProductResponse) =>
  {
    // dispatch(addToCart())
  }

  const updateQuantity = () =>
  {

  }

  const removeItem = () =>
  {

  }

  return {
    addToCart,
    updateQuantity,
    removeItem
  }
}