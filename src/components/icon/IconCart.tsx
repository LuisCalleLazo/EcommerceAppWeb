import { CartItem } from "../../store/cartSlice";

interface IconCartProp
{
  cartItems : CartItem[]
}

export const IconCart = (props: IconCartProp) =>
{
  return(
    <>
      <i className="bi bi-cart text-[25px]"></i>
      {props.cartItems.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {props.cartItems.length}
        </span>
      )}
    </>
  );
}