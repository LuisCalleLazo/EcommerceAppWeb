"use client"

import type React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import { CustomSelect } from "../../components"
import logo from "../../assets/logo2.png"

export const HeadHome = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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

  const [selectedValue, setSelectedValue] = useState("1")

  return (
    <header className="relative bg-gradient-to-r from-orange-100 to-pink-100">
      <div className="px-4">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex-shrink-0">
            <img
              src={logo || "/placeholder.svg"}
              alt="Comex Logo"
              className="h-[60px] md:h-[90px] w-[180px] md:w-[240px] opacity-90 hue-rotate-[300deg]"
            />
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hidden-head p-2 text-gray-600 hover:text-pink-400 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden flex-head h-16 items-center justify-end space-x-6">
            <NavLink to="/main">Home</NavLink>
            <NavLink to="/about">¿Quienes somos?</NavLink>
            <NavLink to="/sustantibility">Sostenibilidad</NavLink>
            <NavLink to="/contacts">Contactanos</NavLink>
            <NavLink to="/e-commerce">Ecommerce</NavLink>

            <CustomSelect value={selectedValue} options={flags} onChange={setSelectedValue} widthMax="170px" />
          </nav>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`hidden-head fixed inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 z-100 ${
            isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div
            className={`fixed inset-y-0 right-0 w-[300px] bg-pink-100/90 backdrop-blur-md shadow-lg transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 text-gray-600 hover:text-pink-400 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col px-6 py-4 space-y-6">
              <MobileNavLink to="/main" onClick={() => setIsMenuOpen(false)}>
                Home
              </MobileNavLink>
              <MobileNavLink to="/about" onClick={() => setIsMenuOpen(false)}>
                ¿Quienes somos?
              </MobileNavLink>
              <MobileNavLink to="/sustantibility" onClick={() => setIsMenuOpen(false)}>
                Sostenibilidad
              </MobileNavLink>
              <MobileNavLink to="/contacts" onClick={() => setIsMenuOpen(false)}>
                Contactanos
              </MobileNavLink>
              <MobileNavLink to="/e-commerce" onClick={() => setIsMenuOpen(false)}>
                Ecommerce
              </MobileNavLink>

              <div className="pt-4">
                <CustomSelect value={selectedValue} options={flags} onChange={setSelectedValue} widthMax="100%" />
              </div>
            </nav>

            {/* Decorative elements */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-pink-100/50 to-transparent pointer-events-none" />
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-orange-100/30 to-transparent rounded-full -translate-x-16 -translate-y-16 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-tl from-pink-100/30 to-transparent rounded-full translate-x-24 translate-y-24 pointer-events-none" />
          </div>
        </div>
      </div>
    </header>
  )
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-gray-700 hover:text-pink-400 text-sm font-medium transition-colors relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 after:bg-pink-400 after:transition-all hover:after:w-full"
    >
      {children}
    </Link>
  )
}

function MobileNavLink({ to, children, onClick }: { to: string; children: React.ReactNode; onClick: () => void }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-gray-700 hover:text-pink-400 text-lg font-medium transition-all hover:translate-x-2"
    >
      {children}
    </Link>
  )
}

