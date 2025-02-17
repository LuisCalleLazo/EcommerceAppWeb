// import { Products } from "../products/Products";
import { SubTitle } from "../../components";
import { motion } from "framer-motion"
import { ProductsCarousel } from "../products/ProductsCarousel";
import { CarouselHome } from "./CarouselHome";


export const MainHome = () =>
{
  return (
    <>
      <div>
        
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          <CarouselHome />
        </motion.div>

        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          <SubTitle text="PRODUCTOS DESTACADOS"/>
          <ProductsCarousel />
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          <SubTitle text="MAS VENDIDOS"/>
          <ProductsCarousel />
        </motion.div>
        
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
          <SubTitle text="TODOS LOS PRODUCTOS"/>
          <ProductsCarousel />
        </motion.div>
      </div>
    </>
  );
}