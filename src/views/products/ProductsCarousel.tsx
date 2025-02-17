import React from 'react';
import { useSelector } from 'react-redux';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { RootState } from "../../store/store";
import { ProductItem } from './ProductItems';
import { useCartStore } from "../../hooks";
import { toast } from "react-toastify";

export const ProductsCarousel: React.FC = () => {
  const products = useSelector((state: RootState) => state.products);
  const { addProductToCart } = useCartStore();
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative max-w-[95vw] mx-auto">
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors md:block hidden"
      >
        <ChevronLeft className="w-6 h-6 text-gray-600" />
      </button>
      
      <div 
        ref={scrollContainerRef}
        className="flex overflow-x-auto gap-4 py-4 px-2 scrollbar-hide scroll-smooth"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {products.map((product) => (
          <div key={product.id} className="flex-none w-[280px]">
            <ProductItem
              {...product}
              onAddToCart={() => {
                addProductToCart(product);
                toast.success("Se guardó al carrito");
              }}
            />
          </div>
        ))}
      </div>

      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors md:block hidden"
      >
        <ChevronRight className="w-6 h-6 text-gray-600" />
      </button>
    </div>
  );
};