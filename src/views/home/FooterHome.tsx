"use client"

import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export const FooterHome = () => {

  return (
    <footer className=" text-pink-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Beuty Falabella</h3>
            <p className="mb-4">Tu destino para productos de belleza y cuidado personal de alta calidad.</p>
            <div className="flex space-x-4 justify-around pt-5">
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
              <li className="flex items-center justify-center">
                <Mail size={18} className="mr-2" />
                info@comex.com
              </li>
              <li className="flex items-center justify-center">
                <Phone size={18} className="mr-2" />
                +591 123 456 789
              </li>
              <li className="flex items-center justify-center">
                <MapPin size={18} className="mr-2" />
                La Paz, Bolivia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-pink-300 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Beuty Falabella. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

