
import { useState } from "react"
import logo from "../../assets/logo2.png"
import { CartModal } from "../cart/CartModal"
import { BtnIconDev, BtnText, InputSearch } from "../../components";
import { categoryProducts } from "../../utils";
import { HoverableIconButton } from "./HoverableIconButton";
import { LogoutModal } from "./LogoutModal";
import { FlagModal } from "./FlagModa";

export const HeadDashboard = () =>
{
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Smartphone XYZ", price: 599.99, quantity: 1, images: "https://m.media-amazon.com/images/I/61UjBLFlH2L.__AC_SX300_SY300_QL70_FMwebp_.jpg" },
    { id: 2, name: "Laptop UltraBook", price: 1299.99, quantity: 1, images: "https://m.media-amazon.com/images/I/815uX7wkOZS.__AC_SX300_SY300_QL70_FMwebp_.jpg" },
  ])

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity } : item)))
  }

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id))
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div>
      <header className="bg-[var(--bg-color)] shadow-md w-full h-[10vh] flex items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="flex items-center">
          <img src={logo || "/placeholder.svg"} alt="Comex Logo" className="h-[90px] w-[240px]" />
        </div>

        <div className="flex-1 max-w-[600px] flex-row">
            <InputSearch
              width="500px"
              placeholder="Ingrese una busqueda"
              setValue={setSearch}
              onSearch={setSearch}
              value={search}
              icon="bi bi-search"
              options={categoryProducts}
            />
        </div>

        <div className="flex items-center w-[300px] justify-between">
        <HoverableIconButton modal={<FlagModal />}>
          <BtnIconDev onClick={() => {}} icon="bi bi-flag" />
        </HoverableIconButton>
          

          <button
            className="text-[var(--tx-color2)] hover:text-[var(--tx-hover)] transition-colors relative"
            onClick={() => setIsCartOpen(true)}
          >
            <i className="bi bi-cart text-[25px]"></i>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>


          <HoverableIconButton modal={<LogoutModal />}>
            <BtnIconDev onClick={() => {}} icon="bi bi-person" />
          </HoverableIconButton>
        </div>
        <CartModal
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          cartItems={cartItems}
          onUpdateQuantity={handleUpdateQuantity}
          onRemoveItem={handleRemoveItem}
        />
      </header>
      <header className="bg-[var(--bg-color)] shadow-md w-full h-[7vh] flex items-center flex-wrap px-4 md:px-6 lg:px-8 gap-5">
        <BtnText onClick={() => {}}>
          Productos
        </BtnText>
        <BtnText onClick={() => {}}>
          Ofertas del dia
        </BtnText>
        <BtnText onClick={() => {}}>
          Listas
        </BtnText>
      </header>
    </div>
  );
}