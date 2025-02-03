import React from "react";
import { ProductItem } from "./ProductItems";
import { CartModal } from "../cart/CartModal";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useCartStore } from "../../hooks";
import { toast } from "react-toastify";

export const Products: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = React.useState(false);
  const products = useSelector((state: RootState) => state.products);
  const { cartItems, addProductToCart, updateCartQuantity, removeCartItem } = useCartStore();

  return (
    <div className="container px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            {...product}
            onAddToCart={() => {
              addProductToCart(product);
              toast.success("Se guardo al carrito");
            }}
          />
        ))}
      </div>
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={updateCartQuantity}
        onRemoveItem={removeCartItem}
      />
    </div>
  );
};
