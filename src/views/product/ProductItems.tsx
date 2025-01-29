import type React from "react"
import { useState } from "react"

interface ProductItemProps {
  id: number
  name: string
  price: number
  description: string
  images: string[]
  onAddToCart: (product: { id: number; name: string; price: number; image: string }) => void
}

export const ProductItem: React.FC<ProductItemProps> = ({ id, name, price, description, images, onAddToCart }) => {
  const [showModal, setShowModal] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handleImageClick = () => {
    setShowModal(true)
  }

  const handleCloseModal = () => {
    setShowModal(false)
    setCurrentImageIndex(0)
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleAddToCart = () => {
    onAddToCart({ id, name, price, image: images[0] })
  }

  return (
    <div className="border rounded-lg overflow-hidden shadow-lg bg-white">
      <img
        src={images[0] || "/placeholder.svg"}
        alt={name}
        className="w-full h-48 object-cover cursor-pointer"
        onClick={handleImageClick}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <p className="text-gray-600 mb-2">{description}</p>
        <p className="text-xl font-bold text-[var(--tx-color2)]">${price.toFixed(2)}</p>
        <button
          className="mt-2 bg-[var(--tx-color2)] text-white px-4 py-2 rounded hover:bg-[var(--tx-hover)] transition-colors"
          onClick={handleAddToCart}
        >
          Añadir al carrito
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-4 rounded-lg max-w-3xl w-full">
            <img
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt={`${name} - imagen ${currentImageIndex + 1}`}
              className="w-full h-96 object-contain mb-4"
            />
            <div className="flex justify-between items-center">
              <button onClick={handlePrevImage} className="bg-gray-200 px-4 py-2 rounded">
                Anterior
              </button>
              <span>
                {currentImageIndex + 1} / {images.length}
              </span>
              <button onClick={handleNextImage} className="bg-gray-200 px-4 py-2 rounded">
                Siguiente
              </button>
            </div>
            <button onClick={handleCloseModal} className="mt-4 bg-red-500 text-white px-4 py-2 rounded">
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

