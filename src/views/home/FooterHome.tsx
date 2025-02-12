"use client"

import { useState } from "react"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Send } from "lucide-react"

export const FooterHome = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para manejar la suscripción
    console.log("Email suscrito:", email)
    setEmail("")
  }

  return (
    <footer className="bg-gradient-to-r from-pink-100 to-pink-200 text-pink-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Comex</h3>
            <p className="mb-4">Tu destino para productos de belleza y cuidado personal de alta calidad.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-pink-700 hover:text-pink-900 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-pink-700 hover:text-pink-900 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-pink-700 hover:text-pink-900 transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Productos
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail size={18} className="mr-2" />
                info@comex.com
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2" />
                +591 123 456 789
              </li>
              <li className="flex items-center">
                <MapPin size={18} className="mr-2" />
                La Paz, Bolivia
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Suscríbete</h4>
            <p className="mb-4">Recibe nuestras últimas ofertas y novedades.</p>
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="email"
                placeholder="Tu email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
                required
              />
              <button
                type="submit"
                className="bg-pink-500 text-white px-4 py-2 rounded-r-lg hover:bg-pink-600 transition-colors"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-pink-300 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Comex. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

