import type React from "react";
import { CartItems } from "./CartItems";
import { CartMethodPay } from "./CartMethodPay";

export const CartView: React.FC = () => {

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-white m-auto bg-red-400 h-[9vh] 
        items-center flex justify-center">
        Carrito de compras
      </h1>

      <div className="flex md:flex-row justify-between flex-col-reverse">
        {/* Productos del carrito */}
       <CartItems />

        {/* Método de pago */}
        <CartMethodPay />
      </div>
    </div>
  )
}

