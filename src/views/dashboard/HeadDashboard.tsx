
import { useState } from "react"
import logo from "../../assets/logo.png"
import { CartModal } from "../cart/CartModal"
import { BtnIconDev, InputSearch } from "../../components";

export const HeadDashboard = () =>
{
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [search, setSearch] = useState("");
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
    <header className="bg-[var(--bg-color)] shadow-md w-full h-[10vh] flex items-center justify-between px-4 md:px-6 lg:px-8">
      <div className="flex items-center">
        <img src={logo || "/placeholder.svg"} alt="Comex Logo" className="h-12 w-auto" />
      </div>

      <div className="flex-1 max-w-[500px]">
          <InputSearch
            width="500px"
            placeholder="Ingrese una busqueda"
            setValue={setSearch}
            onSearch={setSearch}
            value={search}
            icon="bi bi-search"
          />
      </div>

      <div className="flex items-center w-[300px] justify-between">

        <BtnIconDev onClick={() => {}} icon="bi bi-flag"/>
        

        <button
          className="text-[var(--tx-color2)] hover:text-[var(--tx-hover)] transition-colors relative"
          onClick={() => setIsCartOpen(true)}
        >
          <i className="bi bi-cart text-[30px]"></i>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>

        <BtnIconDev onClick={() => {}} icon="bi bi-person"/>
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