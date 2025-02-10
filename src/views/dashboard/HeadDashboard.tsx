
import { useState } from "react"
import logo from "../../assets/logo2.png"
import { BtnHoverable, BtnIcon, CustomSelect, IconCart, InputSearch } from "../../components";
import { categoryProducts } from "../../utils";
import { LogoutModal } from "./LogoutModal";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../store/store";
import { useSelector } from "react-redux";

export const HeadDashboard = () =>
{
  const flags = [
    { id: "1", label: "La Paz", icon: "bi bi-flag-fill" },
    { id: "2", label: "Cochabamba", icon: "bi bi-flag-fill"  },
    { id: "3", label: "Santa Cruz", icon: "bi bi-flag-fill"  },
    { id: "4", label: "Oruro", icon: "bi bi-flag-fill"  },
    { id: "5", label: "Tarija", icon: "bi bi-flag-fill"  },
    { id: "6", label: "Pando", icon: "bi bi-flag-fill"  },
    { id: "7", label: "Chuquisaca", icon: "bi bi-flag-fill"  },
    { id: "8", label: "Potosi", icon: "bi bi-flag-fill"  },
    { id: "9", label: "Beni", icon: "bi bi-flag-fill"  },
  ]

  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const [selectedValue, setSelectedValue] = useState("1")

  return (
    <div>
      <header className="bg-[var(--bg-color)] shadow-md w-full h-[12vh] flex items-center justify-between px-4 md:px-6 lg:px-8">
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
          <CustomSelect 
            value={selectedValue} 
            options={flags} 
            onChange={setSelectedValue} 
            widthMax="170px"
            />

          <button
              className="text-[var(--tx-color2)] hover:text-[var(--tx-hover)] transition-colors relative hover:cursor-pointer"
              onClick={() => navigate('/cart')}>
            <IconCart cartItems={cartItems}/> 
          </button>

          <BtnHoverable modal={<LogoutModal />}>
            <BtnIcon OnClick={() => {}} icon="bi bi-person" />
          </BtnHoverable>
        </div>
      </header>
      <header className="bg-[var(--bg-color)] shadow-md w-full h-[5vh] flex items-center flex-wrap px-4 md:px-6 lg:px-8 gap-5">
        
      </header>
    </div>
  );
}