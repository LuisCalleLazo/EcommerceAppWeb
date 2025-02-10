import React from "react";
import { ProductItem } from "./ProductItems";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useCartStore } from "../../hooks";
import { toast } from "react-toastify";

export const Products: React.FC = () => {
  const products = useSelector((state: RootState) => state.products);
  const { addProductToCart } = useCartStore();

  return (
    <div className="container px-4 py-8">
      <div className="flex justify-around gap-4 flex-row flex-wrap">
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
    </div>
  );
};
