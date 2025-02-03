import React from "react"
import { ProductItem } from "./ProductItems";
import { CartModal } from "../cart/CartModal";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { addToCart, removeItem, updateQuantity } from "../../store/cartSlice";

export const Products: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = React.useState(false)
  const products = useSelector((state: RootState) => state.products)
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()

  const handleAddToCart = (product: { id: number; name: string; price: number; images: string[] }) => {
    dispatch(addToCart(product))
    setIsCartOpen(true)
  }

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }))
  }

  const handleRemoveItem = (id: number) => {
    dispatch(removeItem(id))
  }

  
  return (
    <div className="container px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductItem description={""} key={product.id} {...product} onAddToCart={handleAddToCart} />
        ))}
      </div>
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </div>
  )
}

