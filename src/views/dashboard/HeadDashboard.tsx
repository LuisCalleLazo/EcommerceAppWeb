
import { useState } from "react"
import logo from "../../assets/ComexLogoTop.png"
import { CartModal } from "../cart/CartModal"

export const HeadDashboard = () =>
{
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Smartphone XYZ", price: 599.99, quantity: 1, image: "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg" },
    { id: 2, name: "Laptop UltraBook", price: 1299.99, quantity: 1, image: "https://cdn.static.escuelamakeup.com/imagenes/de-que-estan-hechos-los-cosmeticos_905x603.jpg" },
  ])

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="bg-white shadow-md w-full h-[15vh] flex items-center justify-between px-4 md:px-6 lg:px-8">
      <div className="flex items-center">
        <img src={logo || "/placeholder.svg"} alt="Comex Logo" className="h-12 w-auto" />
      </div>

      <div className="flex-1 max-w-2xl mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full py-2 px-4 pr-10 border border-gray-300 focus:outline-none focus:ring-2 focus:text-[var(--tx-color2)] focus:border-transparent"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <i className="bi bi-search text-gray-500 hover:text-[var(--tx-color2)] transition-colors"></i>
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-gray-700 hover:text-[var(--tx-color2)] transition-colors">
          <i className="bi bi-person text-2xl"></i>
        </button>
        <button
          className="text-gray-700 hover:text-[var(--tx-color2)] transition-colors relative"
          onClick={() => setIsCartOpen(true)}
        >
          <i className="bi bi-cart text-2xl"></i>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
      />
    </header>
  );
}