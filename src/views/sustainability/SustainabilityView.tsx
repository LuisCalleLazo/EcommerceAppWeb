"use client"

import { motion } from "framer-motion"
import { Recycle, Leaf, Droplet, Sun } from "lucide-react"

export const SustainabilityView = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-pink-800 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Nuestro Compromiso con la Sostenibilidad
        </motion.h1>

        <motion.p
          className="text-pink-800 text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          En Comex, creemos que la belleza y el cuidado del planeta van de la mano. Nos esforzamos por crear productos
          que no solo realcen tu belleza natural, sino que también respeten y protejan nuestro entorno.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-pink-700 mb-4">Ingredientes Naturales</h2>
            <p className="text-pink-800 mb-4">
              Utilizamos ingredientes naturales y orgánicos siempre que es posible, reduciendo el uso de químicos
              sintéticos y minimizando nuestro impacto en el medio ambiente.
            </p>
            <Leaf className="w-12 h-12 text-pink-500" />
          </motion.div>

          <motion.div
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 className="text-2xl font-semibold text-pink-700 mb-4">Empaques Eco-amigables</h2>
            <p className="text-pink-800 mb-4">
              Nos comprometemos a utilizar materiales reciclables y biodegradables en nuestros empaques, reduciendo así
              nuestra huella de plástico.
            </p>
            <Recycle className="w-12 h-12 text-pink-500" />
          </motion.div>
        </div>

        <motion.h2
          className="text-3xl font-semibold text-pink-800 text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Nuestras Iniciativas
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Droplet className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-pink-700 mb-2">Conservación del Agua</h3>
            <p className="text-pink-800">
              Implementamos tecnologías de ahorro de agua en nuestros procesos de producción.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Sun className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-pink-700 mb-2">Energía Renovable</h3>
            <p className="text-pink-800">
              Utilizamos energía solar en nuestras instalaciones para reducir nuestra huella de carbono.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Leaf className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-pink-700 mb-2">Reforestación</h3>
            <p className="text-pink-800">
              Por cada producto vendido, plantamos un árbol en áreas deforestadas de Bolivia.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">Nuestro Compromiso Futuro</h2>
          <p className="text-pink-800 max-w-2xl mx-auto">
            Nos comprometemos a seguir innovando en prácticas sostenibles, buscando constantemente nuevas formas de
            reducir nuestro impacto ambiental y promover un futuro más verde para la industria cosmética.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

