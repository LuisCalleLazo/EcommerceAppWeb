import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png"
import { CustomSelect } from "../../components";
import { useState } from "react";

export const HeadHome = () =>
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

  const [selectedValue, setSelectedValue] = useState("1");
  const classNav = "text-gray-700 hover:text-pink-400 w-[140px] h-14 text-sm font-medium hover:border-b items-center flex text-center justify-center";
  return(
    <>
      <header className="bg-gradient-to-r from-orange-100 to-pink-100">
        <div className="px-10 mx-auto">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0">
              <img src={logo || "/placeholder.svg"} alt="Comex Logo" className="h-[90px] w-[240px] opacity-90 hue-rotate-[300deg]" />
            </div>

            <nav className="space-x-8 h-16 flex items-center">
              <Link to={'/main'} className={classNav}>
                Home
              </Link>
              <Link to={'/about'} className={classNav}>
                ¿Quienes somos?
              </Link>
              <Link to={'/sustantibility'} className={classNav}>
                Sostenibilidad
              </Link>
              <Link to={'/contacts'} className={classNav}>
                Contactanos
              </Link>
              <Link to={'/e-commerce'} className={classNav}>
                Ecommerce
              </Link>
              <CustomSelect 
                value={selectedValue} 
                options={flags} 
                onChange={setSelectedValue} 
                widthMax="170px"
                />
            </nav>
          </div>
        </div>
      </header>
    </>
  );
}