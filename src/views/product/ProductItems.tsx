"use client"

import { useState } from "react"

interface ProductItemProps {
  id: number
  name: string
  price: number
  description: string
  images: string[]
  onAddToCart: (product: { id: number; name: string; price: number; images: string }) => void
}

export function ProductItem({ id, name, price, description, images, onAddToCart }: ProductItemProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleCardClick = () => {
    setShowModal(true)
  }

  return (
    <>
      <div
        onClick={handleCardClick}
        className="group relative overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl rounded-lg
        border-2 w-[300px] h-[400px] flex" 
      >
        <div className="aspect-square overflow-hidden">
          <img
            src={images[0] || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        {/* Overlay that appears on hover */}
        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="p-4 text-white h-full flex flex-col justify-between">
            <div>
              <h3 className="text-lg font-semibold mb-2">{name}</h3>
              <p className="text-sm text-gray-200">{description}</p>
            </div>
            <div>
              <p className="text-xl font-bold mb-2">Bs {price.toFixed(2)}</p>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onAddToCart({ id, name, price, images: images[0] })
                }}
                className="w-full bg-[var(--tx-color2)] hover:bg-[var(--tx-hover)] text-white py-2 px-4 rounded-md transition-colors"
              >
                Añadir al carrito
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="relative w-full max-w-6xl bg-white rounded-2xl overflow-hidden flex"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Lado izquierdo: Imagen */}
            <div className="w-1/2 relative">
              <img
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt={`${name} - imagen ${currentImageIndex + 1}`}
                className="w-full h-[60vh] object-contain"
              />

              {images.length > 1 && (
                <>
                  <button
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--tx-color2)] hover:bg-white/20 p-2 rounded-full transition-colors"
                    onClick={(e) => {
                      e.stopPropagation()
                      handlePrevImage()
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[var(--tx-color2)] hover:bg-white/20 p-2 rounded-full transition-colors"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleNextImage()
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black/50 px-2 py-1 rounded">
                <span>
                  {currentImageIndex + 1} / {images.length}
                </span>
              </div>
            </div>

            {/* Lado derecho: Información del producto */}
            <div className="w-1/2 p-8 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4">{name}</h2>
                <p className="text-2xl font-semibold mb-6">Bs {price.toFixed(2)}</p>
                <p className="text-gray-600 mb-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                  aliquip ex ea commodo consequat.
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onAddToCart({ id, name, price, images: images[0] })
                  setShowModal(false)
                }}
                className="w-full bg-[var(--tx-color2)] hover:bg-[var(--tx-hover)] text-white py-3 px-4 rounded-md transition-colors text-lg font-semibold"
              >
                Añadir al carrito
              </button>
            </div>

            {/* Botón de cierre */}
            <button
              className="absolute right-6 top-6 text-gray-800 hover:bg-gray-200 p-2 rounded-full transition-colors z-10"
              onClick={() => setShowModal(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}

