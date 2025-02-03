
import { useState } from "react"
import logo from "../../assets/logo2.png"
import { CartModal } from "../cart/CartModal"
import { BtnIconDev, BtnText, InputSearch } from "../../components";
import { categoryProducts } from "../../utils";
import { HoverableIconButton } from "./HoverableIconButton";
import { LogoutModal } from "./LogoutModal";
import { FlagModal } from "./FlagModa";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../../store/cartSlice";

export const HeadDashboard = () =>
{
  
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [search, setSearch] = useState("");
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()

  const onUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }))
  }

  const onRemoveItem = (id: number) => {
    dispatch(removeItem(id))
  }
  return (
    <div>
      <header className="bg-[var(--bg-color)] shadow-md w-full h-[10vh] flex items-center justify-between px-4 md:px-6 lg:px-8">
        <div className="flex items-center p-2 rounded-lg">
          <img src={logo || "/placeholder.svg"} alt="Comex Logo" className="h-[90px] w-[240px] opacity-90 hue-rotate-[300deg]" />
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
            onClick={() => navigate('cart')}
          >
            <i className="bi bi-cart text-[25px]"></i>
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems.length}
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
          onUpdateQuantity={onUpdateQuantity}
          onRemoveItem={onRemoveItem}
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