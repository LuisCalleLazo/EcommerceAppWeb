"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import type React from "react" // Added import for React

export const ContactView = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.h1
          className="text-4xl font-bold text-pink-800 text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contáctanos
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 className="text-2xl font-semibold text-pink-700 mb-4">Envíanos un mensaje</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-pink-800 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-pink-800 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-pink-800 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-pink-500 text-white px-6 py-2 rounded-lg hover:bg-pink-600 transition-colors flex items-center"
              >
                <Send className="mr-2" size={18} />
                Enviar mensaje
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold text-pink-700 mb-4">Información de contacto</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="text-pink-500 mr-2" size={20} />
                <span className="text-pink-800">info@comex.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-pink-500 mr-2" size={20} />
                <span className="text-pink-800">+591 123 456 789</span>
              </div>
              <div className="flex items-center">
                <MapPin className="text-pink-500 mr-2" size={20} />
                <span className="text-pink-800">Av. 16 de Julio, La Paz, Bolivia</span>
              </div>
            </div>

            <h2 className="text-2xl font-semibold text-pink-700 mt-8 mb-4">Encuéntranos</h2>
            <div className="w-full h-64 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.3663116523!2d-68.13398868513684!3d-16.49839168861276!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f20f04f9a2e5d%3A0x8f0f6e4d1a2c9a0!2sAv.%2016%20de%20Julio%2C%20La%20Paz%2C%20Bolivia!5e0!3m2!1sen!2sus!4v1625180000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

