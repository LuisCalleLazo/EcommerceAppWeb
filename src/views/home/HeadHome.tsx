import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png"
import { CustomSelect } from "../../components";
import { useState } from "react";
import { Menu, X } from "lucide-react";


export const HeadHome = () =>
{
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
  const classNav = "text-gray-700 hover:text-pink-400 w-full h-14 text-sm font-medium hover:border-b items-center flex text-center justify-center transition-colors";

  return(
    <>
    <header className="bg-gradient-to-r from-orange-100 to-pink-100">
      <div className="px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <img 
              src={logo} 
              alt="Comex Logo" 
              className="h-[60px] md:h-[90px] w-[180px] md:w-[240px] opacity-90 hue-rotate-[300deg]" 
            />
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hidden-1100 p-2 text-gray-600 hover:text-pink-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <nav 
            className="hidden flex-1100 h-16 items-center justify-end">
            <Link to="/main" className={classNav}>Home</Link>
            <Link to="/about" className={classNav}>¿Quienes somos?</Link>
            <Link to="/sustantibility" className={classNav}>Sostenibilidad</Link>
            <Link to="/contacts" className={classNav}>Contactanos</Link>
            <Link to="/e-commerce" className={classNav}>Ecommerce</Link>
            
            <CustomSelect 
                value={selectedValue} 
                options={flags} 
                onChange={setSelectedValue} 
                widthMax="170px"
                />
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div className={`hidden-1100 ${isMenuOpen ? 'block' : 'hidden'}`}>
          <nav className="flex flex-col py-4 space-y-2 border-t border-gray-200">
            <Link to="/main" className={classNav}>Home</Link>
            <Link to="/about" className={classNav}>¿Quienes somos?</Link>
            <Link to="/sustantibility" className={classNav}>Sostenibilidad</Link>
            <Link to="/contacts" className={classNav}>Contactanos</Link>
            <Link to="/e-commerce" className={classNav}>Ecommerce</Link>
            
            <div className="flex justify-center">
              <CustomSelect 
                  value={selectedValue} 
                  options={flags} 
                  onChange={setSelectedValue} 
                  widthMax="170px"
                  />
            </div>
          </nav>
        </div>
      </div>
    </header>
    </>
  );
}