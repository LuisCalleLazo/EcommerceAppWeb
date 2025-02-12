"use client"

import { motion } from "framer-motion"
import { Heart, Star, Droplet } from "lucide-react"

export const AboutView = () => {
  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-pink-800 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Sobre Comex
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <img src="/about-image.jpg" alt="Comex cosmetics" className="rounded-lg shadow-lg w-full h-auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-pink-700 mb-4">Nuestra Historia</h2>
            <p className="text-pink-800 mb-4">
              Fundada en 2010, Comex nació de la pasión por ofrecer productos cosméticos de alta calidad que realzan la
              belleza natural de cada persona. Desde nuestros humildes inicios en La Paz, Bolivia, hemos crecido hasta
              convertirnos en un referente en la industria de la belleza en toda Latinoamérica.
            </p>
            <p className="text-pink-800">
              Nuestro compromiso con la innovación, la calidad y la satisfacción del cliente nos ha permitido expandir
              nuestra gama de productos y llegar a más personas que buscan lo mejor para su cuidado personal.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid md:grid-cols-3 gap-8 mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-pink-700 mb-2">Pasión</h3>
            <p className="text-pink-800">Amamos lo que hacemos y eso se refleja en cada uno de nuestros productos.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Star className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-pink-700 mb-2">Calidad</h3>
            <p className="text-pink-800">
              Utilizamos solo los mejores ingredientes y las últimas tecnologías en nuestras fórmulas.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Droplet className="w-12 h-12 text-pink-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-pink-700 mb-2">Innovación</h3>
            <p className="text-pink-800">
              Constantemente buscamos nuevas formas de mejorar y crear productos revolucionarios.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h2 className="text-2xl font-semibold text-pink-700 mb-4">Nuestra Misión</h2>
          <p className="text-pink-800 max-w-2xl mx-auto">
            En Comex, nos dedicamos a realzar la belleza natural de cada individuo a través de productos cosméticos
            innovadores, seguros y de alta calidad. Nos esforzamos por inspirar confianza y bienestar, respetando
            siempre la diversidad y el medio ambiente.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

