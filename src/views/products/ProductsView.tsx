import React from "react";
import { Products } from "./Products";
import { ProductsFilter } from "./ProductsFilter";

export const ProductsView: React.FC = () =>
{
  return(
    <>
      <div className="hidden relative overflow-auto lg:w-[19%] lg:flex">
        <ProductsFilter />
      </div>
      
      <div className="w-full relative overflow-auto p-4 lg:w-[81%]">
        <Products />
      </div>
    </>
  );
}