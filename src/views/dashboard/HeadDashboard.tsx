"use client"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { motion, AnimatePresence } from "framer-motion"
import { Search, User, ChevronDown, Menu, X } from 'lucide-react'
import type { RootState } from "../../store/store"
import { CustomSelect, IconCart } from "../../components"
import { categoryProducts } from "../../utils"
import { LogoutModal } from "./LogoutModal"
import { ProductsFilter } from "../products/ProductsFilter"
import logo from '../../assets/logo2.png';

export const HeadDashboard = () => {
  const [search, setSearch] = useState("")
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const [selectedValue, setSelectedValue] = useState("1")
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const navigate = useNavigate(); // Declare the navigate variable

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
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "tween" }}
              className="fixed left-0 top-0 bottom-0 w-[280px] bg-white z-50 overflow-y-auto"
            >
              <div className="p-4">
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
                
                {/* Mobile Search */}
                <div className="mt-8 mb-4">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Buscar productos..."
                      className="w-full py-2 px-4 rounded-full border outline-none"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <Search className="absolute right-4 top-2.5 text-pink-500" size={20} />
                  </div>
                </div>

                {/* Mobile Navigation */}
                <nav className="mb-6">
                  <ul className="space-y-4">
                    <li>
                      <Link
                        to="/e-commerce"
                        className="block text-pink-700 hover:text-pink-900"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Todos los productos
                      </Link>
                    </li>
                    <li>
                      <a href="#" className="block text-pink-700 hover:text-pink-900">
                        Ofertas
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block text-pink-700 hover:text-pink-900">
                        Rebajas
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block text-pink-700 hover:text-pink-900">
                        Productos mas populares
                      </a>
                    </li>
                  </ul>
                </nav>

                {/* Mobile Filters */}
                <div className="border-t pt-4">
                  <ProductsFilter />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <header className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-pink-600 hover:text-pink-700"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>

          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo || "/placeholder.svg"}
              alt="Comex Logo"
              className="w-[180px] md:w-[240px] opacity-90 hue-rotate-[300deg]"
            />
          </Link>

          {/* Search Bar - Hidden on Mobile */}
          <div className="hidden lg:block relative z-30 flex-1 max-w-xl mx-4">
            <motion.div
              className={`flex items-center bg-white rounded-full overflow-hidden transition-all ${
                isSearchFocused ? "shadow-lg" : "shadow"
              }`}
              animate={{ width: isSearchFocused ? "100%" : "100%" }}
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
              <div className="absolute top-full left-0 w-full mt-2 bg-white rounded-lg shadow-lg">
                {categoryProducts
                  .filter((category) =>
                    category.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((category, index) => (
                    <div
                      key={index}
                      className="p-2 hover:bg-pink-100 cursor-pointer"
                    >
                      {category.name}
                    </div>
                  ))}
              </div>
            )}
          </div> 
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <CustomSelect
                value={selectedValue}
                options={flags}
                onChange={setSelectedValue}
                widthMax="170px"
              />
            </div>

            <button
              className="text-pink-600 hover:text-pink-700 transition-colors relative"
              onClick={() => navigate("/cart")}
            >
              <IconCart cartItems={cartItems} />
            </button>

            <div className="relative">
              <button
                className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors"
                onClick={() => setShowUserMenu(!showUserMenu)}
              >
                <User size={24} />
                <ChevronDown size={16} className="hidden md:block" />
              </button>
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-30">
                  <LogoutModal />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block mt-4">
          <ul className="flex space-x-6 text-pink-700">
            <li>
              <Link
                to="/e-commerce"
                className="hover:text-pink-900 transition-colors"
              >
                Todos los productos
              </Link>
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
      </header>
    </div>
  )
}
