import { Products } from "../products/Products";
import { CarouselHome } from "./CarouselHome";


export const MainHome = () =>
{
  return (
    <>
      <div className="pt-7">
        <CarouselHome />
        <div className="flex justify-center">
          <Products />
        </div>
      </div>
    </>
  );
}