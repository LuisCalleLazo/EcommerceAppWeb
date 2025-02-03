import React from "react";
import { Products } from "./Products";
import { ProductsFilter } from "./ProductsFilter";

export const ProductsView: React.FC = () =>
{
  return(
    <>
      <div className="w-[19%] relative overflow-auto border-r-2">
        <ProductsFilter />
      </div>
      
      <div className="w-[81%] relative overflow-auto p-4">
        <Products />
      </div>
    </>
  );
}