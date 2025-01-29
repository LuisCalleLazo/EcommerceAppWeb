import type React from "react"
import { ProductItem } from "./ProductItems";
import { useState } from "react";
import { CartModal } from "../cart/CartModal";

// Datos de ejemplo para los productos
const productData = [
  {
    id: 1,
    name: "Smartphone XYZ",
    price: 599.99,
    description: "Un smartphone potente con cámara de alta resolución.",
    images: [
      "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg", 
      "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg", 
      "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg"],
  },
  {
    id: 2,
    name: "Laptop UltraBook",
    price: 1299.99,
    description: "Laptop ligera y potente para profesionales.",
    images: [
      "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg", 
      "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg"],
  },
  {
    id: 3,
    name: "Auriculares Inalámbricos",
    price: 149.99,
    description: "Auriculares con cancelación de ruido y gran autonomía.",
    images: [
      "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg", 
      "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg", 
      "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg"
    ],
  },
  {
    id: 4,
    name: "Smartwatch FitPro",
    price: 199.99,
    description: "Reloj inteligente con múltiples funciones de salud.",
    images: [
      "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg", 
      "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg", 
      "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg"],
  },
  {
    id: 5,
    name: "Cámara DSLR Pro",
    price: 899.99,
    description: "Cámara profesional para fotógrafos exigentes.",
    images: [
      "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg", 
      "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg", 
      "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg"],
  },
  {
    id: 5,
    name: "Cámara DSLR Pro",
    price: 899.99,
    description: "Cámara profesional para fotógrafos exigentes.",
    images: [
      "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg", 
      "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg", 
      "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg"],
  },
  {
    id: 5,
    name: "Cámara DSLR Pro",
    price: 899.99,
    description: "Cámara profesional para fotógrafos exigentes.",
    images: [
      "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg", 
      "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg", 
      "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg"],
  },
  // Puedes agregar más productos aquí
]

export const Products: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cartItems, setCartItems] = useState<
    Array<{ id: number; name: string; price: number; quantity: number; image: string }>
  >([])

  const handleAddToCart = (product: { id: number; name: string; price: number; image: string }) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id)
      if (existingItem) {
        return prevItems.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item))
      }
      return [...prevItems, { ...product, quantity: 1, image: product.image[0] }]
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
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productData.map((product) => (
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

