"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import logo from "../../assets/logo2.png"
import { motion } from "framer-motion"
import { Search, User, ChevronDown } from "lucide-react"
import type { RootState } from "../../store/store"
import { CustomSelect, IconCart } from "../../components"
import { categoryProducts } from "../../utils"
import { LogoutModal } from "./LogoutModal"

export const HeadDashboard = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const [selectedValue, setSelectedValue] = useState("1")
  const [isSearchFocused, setIsSearchFocused] = useState(false)

  const flags = [
    { id: "1", label: "La Paz", icon: "bi bi-flag-fill" },
    { id: "2", label: "Cochabamba", icon: "bi bi-flag-fill" },
    { id: "3", label: "Santa Cruz", icon: "bi bi-flag-fill" },
    { id: "4", label: "Oruro", icon: "bi bi-flag-fill" },
    { id: "5", label: "Tarija", icon: "bi bi-flag-fill" },
    { id: "6", label: "Pando", icon: "bi bi-flag-fill" },
    { id: "7", label: "Chuquisaca", icon: "bi bi-flag-fill" },
    { id: "8", label: "Potosi", icon: "bi bi-flag-fill" },
    { id: "9", label: "Beni", icon: "bi bi-flag-fill" },
  ]

  return (
    <div className="bg-gradient-to-r from-orange-100 to-pink-200">
      <header className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <img 
            onClick={() => {navigate("/")}}
            src={logo || "/placeholder.svg"} alt="Comex Logo" 
            className="w-[240px] opacity-90 hue-rotate-[300deg] hover:cursor-pointer"
            />

          <div className="relative z-50">
            <motion.div
              className={`flex items-center bg-white rounded-full overflow-hidden transition-all ${
                isSearchFocused ? "shadow-lg" : "shadow"
              }`}
              animate={{ width: isSearchFocused ? 400 : 300 }}
            >
              <input
                type="text"
                placeholder="Buscar productos..."
                className="w-full py-2 px-4 outline-none"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <button className="p-2 text-pink-500 hover:text-pink-600">
                <Search size={20} />
              </button>
            </motion.div>
            {isSearchFocused && search && (
              <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-lg z-10">
                {categoryProducts
                  .filter((category) => category.name.toLowerCase().includes(search.toLowerCase()))
                  .map((category, index) => (
                    <div key={index} className="p-2 hover:bg-pink-100 cursor-pointer">
                      {category.name}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center space-x-6">
          <CustomSelect value={selectedValue} options={flags} onChange={setSelectedValue} widthMax="170px" />

          <button
            className="text-pink-600 hover:text-pink-700 transition-colors relative"
            onClick={() => navigate("/cart")}
          >
            <IconCart cartItems={cartItems} />
          </button>

          <div className="relative group">
            <button className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors">
              <User size={24} />
              <ChevronDown size={16} />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-10">
              <LogoutModal />
            </div>
          </div>
        </div>
      </header>

      <nav className="container mx-auto px-4 py-3">
        <ul className="flex space-x-6 text-pink-700">
          <li>
            <a href="#" className="hover:text-pink-900 transition-colors">
              Todos los productos
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-900 transition-colors">
              Ofertas
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-900 transition-colors">
              Rebajas
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-pink-900 transition-colors">
              Productos mas populares
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

