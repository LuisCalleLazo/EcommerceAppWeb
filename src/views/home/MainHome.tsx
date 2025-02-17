// import { Products } from "../products/Products";
import { SubTitle } from "../../components";
import { ProductsCarousel } from "../products/ProductsCarousel";
import { CarouselHome } from "./CarouselHome";


export const MainHome = () =>
{
  return (
    <>
      <div>
        <CarouselHome />
        <SubTitle text="PRODUCTOS DESTACADOS"/>
        <ProductsCarousel />
        <SubTitle text="MAS VENDIDOS"/>
        <ProductsCarousel />
        <SubTitle text="TODOS LOS PRODUCTOS"/>
        <ProductsCarousel />
        <SubTitle text="EN OFERTA"/>
        <ProductsCarousel />
      </div>
    </>
  );
}