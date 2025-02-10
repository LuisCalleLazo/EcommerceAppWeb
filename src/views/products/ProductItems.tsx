import { motion } from "framer-motion"
import { useState } from "react"
import { BtnIcon, BtnText, BubbleAnimation } from "../../components"
import { useNavigate } from "react-router-dom"

interface ProductItemProps {
  id: number
  name: string
  price: number
  description: string
  images: string[]
  onAddToCart: (product: { id: number; name: string; price: number; images: string[] }) => void
}

export function ProductItem({ id, name, price, description, images, onAddToCart }: ProductItemProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate();

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }

  const handleCardClick = () => {
    setShowModal(true);
    // navigate('product-detail')
  }

  return (
    <>
      <div
        onClick={handleCardClick}
        className="relative flex-row flex-wrap
          cursor-pointer transition-all duration-300 
          hover:shadow-xl rounded-2xl border-3 border-pink-300
          w-[280px] h-[350px] flex">
            
        <div className="aspect-square overflow-hidden rounded-xl">
          <img
            src={images[0] || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        
        {/* Hover Style with Bubble Animation */}
        <motion.div
          className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl "
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}>

          <BubbleAnimation />
          <div className="p-4 text-white h-full flex flex-col justify-between relative z-10 rounded-xl ">
            <div>
              <h3 className="text-lg font-semibold mb-2">{name}</h3>
              <p className="text-sm text-gray-200">{description}</p>
            </div>
            <div>
              <p className="text-xl font-bold mb-2">Bs {price.toFixed(2)}</p>
              <BtnText 
                onClick={() => { onAddToCart({ id, name, price, images: images }) }}>
                Añadir al carrito
              </BtnText>
            </div>
          </div>
        </motion.div>

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
                  <BtnIcon 
                    OnClick={() => handlePrevImage()}
                    icon="bi bi-chevron-left"
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full p-2 hover:bg-gray-200"
                  />
                  <BtnIcon 
                    OnClick={() => handleNextImage()}
                    icon="bi bi-chevron-right"
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-2 hover:bg-gray-200"
                  />
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
              <BtnText
                onClick={() => {
                  onAddToCart({ id, name, price, images: images })
                  setShowModal(false)
                }}>
                Añadir al carrito
              </BtnText>
            </div>

            {/* Botón de cierre */}
            <BtnIcon 
              OnClick={() => setShowModal(false)}
              icon="bi bi-x"
              className="absolute right-4 top-2 text-gray-800 p-2 hover:bg-gray-200 z-10 rounded-full"
            />
          </div>
        </div>
      )}
    </>
  )
}

