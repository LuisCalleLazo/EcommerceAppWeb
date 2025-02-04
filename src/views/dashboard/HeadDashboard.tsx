
import { useState } from "react"
import logo from "../../assets/logo2.png"
import { BtnHoverable, BtnIcon, BtnText, IconCart, InputSearch } from "../../components";
import { categoryProducts } from "../../utils";
import { LogoutModal } from "./LogoutModal";
import { FlagModal } from "./FlagModa";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

export const HeadDashboard = () =>
{
  
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const cartItems = useSelector((state: RootState) => state.cart.items)

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
          <BtnHoverable modal={<FlagModal />}>
            <BtnIcon OnClick={() => {}} icon="bi bi-flag" />
          </BtnHoverable>

          <button
              className="text-[var(--tx-color2)] hover:text-[var(--tx-hover)] transition-colors relative hover:cursor-pointer"
              onClick={() => navigate('cart')}>
            <IconCart cartItems={cartItems}/> 
          </button>

          <BtnHoverable modal={<LogoutModal />}>
            <BtnIcon OnClick={() => {}} icon="bi bi-person" />
          </BtnHoverable>
        </div>
      </header>
      <header className="bg-[var(--bg-color)] shadow-md w-full h-[7vh] flex items-center flex-wrap px-4 md:px-6 lg:px-8 gap-5">
        <BtnText onClick={() => {}} width="200px">
          Productos
        </BtnText>
        <BtnText onClick={() => {}} width="150px">
          Ofertas del dia
        </BtnText>
        <BtnText onClick={() => {}} width="150px">
          Listas
        </BtnText>
      </header>
    </div>
  );
}