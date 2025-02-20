"use client"

import { useState } from "react"
import { useSelector } from "react-redux"
import { ChevronLeft, ChevronRight, Heart, Share2 } from "lucide-react"
import type { RootState } from "../../store/store"
import { useNavigate } from "react-router-dom"
import { BubbleAnimation } from "../../components"
import { useCartStore } from "../../hooks"
import { toast } from "react-toastify"

export const ProductDetailView = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [activeTab, setActiveTab] = useState("description")
  const navigate = useNavigate()
  const { addProductToCart } = useCartStore()

  const selectedProduct = useSelector((state: RootState) => state.productDetail.selectedProduct)

  // Si no hay producto seleccionado, redirigir
  if (!selectedProduct) {
    navigate("/")
    return null
  }

  const { name, price, description, images } = selectedProduct

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="mx-auto max-w-7xl bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex flex-col md:flex-row p-4 md:p-6">
          {/* Left column: Images */}
          <div className="w-full md:w-1/2 flex flex-col md:flex-row relative">
            {/* Thumbnails */}
            <div className="order-2 md:order-1 md:w-1/2 flex flex-row md:flex-col gap-2 mt-4 md:mt-0 overflow-x-auto md:overflow-x-visible">
              <BubbleAnimation />
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-md border-2 overflow-hidden ${
                    currentImageIndex === index ? "border-pink-500" : "border-transparent"
                  }`}
                >
                  <img
                    src={img || "/placeholder.svg"}
                    alt={`${name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="order-1 md:order-2 relative flex-1 md:ml-4">
              <div className="aspect-square">
                <img
                  src={images[currentImageIndex] || "/placeholder.svg"}
                  alt={`${name} - imagen ${currentImageIndex + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>

              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-1 shadow-lg hover:bg-gray-100"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Right column: Product Info */}
          <div className="w-full md:w-1/2 md:pl-8 mt-6 md:mt-0">
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{name}</h1>
            <p className="text-xl md:text-2xl font-semibold mb-4">Bs. {price.toFixed(2)}</p>

            <p className="text-gray-600 mb-6">{description}</p>

            <p className="mb-4">
              <strong>Contenido:</strong> 30 ml
            </p>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="font-semibold mb-2">Recomendación:</h3>
              <p className="text-sm text-gray-600">
                El uso de este y cualquier producto dermocosmético o dermatológico debe ser previamente consultado por
                un especialista médico. Laboratorios sugieren la visita periódica a su dermatólogo para la salud y
                cuidado de la piel.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <button
                className="flex-1 bg-pink-600 text-white py-3 px-6 rounded-lg hover:bg-pink-700 transition-colors"
                onClick={() => {
                  addProductToCart(selectedProduct)
                  toast.success("Se guardo al carrito")
                }}
              >
                Añadir al carrito
              </button>
              <button className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Heart className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center gap-2 flex-1 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50">
                <Share2 className="w-5 h-5" />
                Compartir
              </button>
              <button className="flex-1 border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-50">
                Copiar enlace
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="border-t mt-8">
          <div className="flex overflow-x-auto">
            {["Descripción", "Ingredientes", "Uso", "Precausiones", "Indicaciones"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-4 py-2 whitespace-nowrap font-semibold hover:cursor-pointer ${
                  activeTab === tab.toLowerCase() ? "border-b-2 border-pink-500 text-pink-500" : "text-gray-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="p-4">
            {activeTab === "description" && (
              <p>Hydrin Hyaluronic® Serum Facial AntiEdad está indicado para hidratar y cuidar pieles maduras.</p>
            )}
            {activeTab === "ingredients" && <p>Lista de ingredientes...</p>}
            {activeTab === "usage" && <p>Instrucciones de uso...</p>}
            {activeTab === "precautions" && <p>Precauciones de uso...</p>}
            {activeTab === "indications" && <p>Indicaciones específicas...</p>}
          </div>
        </div>

        {/* Product Reviews */}
        <div className="mt-8 p-4 border-t">
          <h2 className="text-2xl font-bold mb-4">Reseña de Productos</h2>
          <div className="flex items-center mb-4">
            <span className="text-3xl font-bold mr-2">4.8</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Heart key={star} className="w-6 h-6 text-pink-500 fill-current" />
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-8 p-4 border-t">
          <h2 className="text-2xl font-bold mb-4">Otros productos en la categoría</h2>
          {/* Aquí puedes agregar una lista o grid de productos relacionados */}
        </div>
      </div>
    </div>
  )
}

