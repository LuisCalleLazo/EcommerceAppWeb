import { Products } from "../products/Products";
import { CarouselHome } from "./CarouselHome";


export const MainHome = () =>
{
  return (
    <>
      <div>
        <CarouselHome />
        <div className="px-20 pt-10">
          <h2 className=" border-t-2 border-orange-400 border-b-2 py-3 font-bold text-left pl-10 text-pink-700">
            PRODUCTOS DESTACADOS
          </h2>
        </div>
        <div className="flex justify-center">
          <Products />
        </div>
      </div>
    </>
  );
}