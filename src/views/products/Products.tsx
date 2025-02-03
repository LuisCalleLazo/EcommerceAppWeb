import type React from "react"
import { ProductItem } from "./ProductItems";
import { useState } from "react";
import { CartModal } from "../cart/CartModal";
import { ecommerceProducts } from "../../utils";

export const Products: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<
    Array<{ id: number; name: string; price: number; quantity: number; images: string }>
  >([])

  const handleAddToCart = (product: { id: number; name: string; price: number; images: string }) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)
      if (existingItem) {
        return prevItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prevItems, { ...product, quantity: 1, image: product.images[0] }]
    })
    setIsCartOpen(true)
  }

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems((prevItems) => prevItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const handleRemoveItem = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  return (
    <div className="container px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ecommerceProducts.map((product) => (
          <ProductItem key={product.id} {...product} onAddToCart={handleAddToCart} />
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

