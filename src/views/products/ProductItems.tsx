import { motion } from "framer-motion"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { setSelectedProduct } from "../../store/productDetailSlice"
import { ShoppingCart, Star } from "lucide-react"
import { useState } from "react"
// import { useNavigate } from "react-router-dom"

interface ProductItemProps {
  id: number
  name: string
  price: number
  description: string
  images: string[]
  onAddToCart: (product: { id: number; name: string; price: number; images: string[] }) => void
}

export function ProductItem({ id, name, price, description, images, onAddToCart }: ProductItemProps) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [isHovered, setIsHovered] = useState(false)

  const handleCardClick = () => {
    dispatch(setSelectedProduct({ id, name, price, description, images, qualification: 12 }))
    navigate("product-detail")
  }

  return (
    <div
      className="relative w-[280px] h-[350px] rounded-2xl border-3 border-orange-300 overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-xl"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-full flex flex-col">
        <div className="aspect-square overflow-hidden">
          <img
            src={images[0] || "/placeholder.svg"}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>

        <div className="p-4 flex flex-col justify-between flex-grow bg-white">
          <div>
            <h3 className="text-lg font-semibold mb-2 line-clamp-2">{name}</h3>
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${i < Math.round(23) ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                />
              ))}
              <span className="ml-2 text-sm text-gray-600">({45})</span>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-xl font-bold">Bs {price.toFixed(2)}</p>
            <button
              className="p-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors"
              onClick={(e) => {
                e.stopPropagation()
                onAddToCart({ id, name, price, images })
              }}
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 bg-orange-900/40 opacity-0 transition-opacity duration-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <div className="p-4 text-white h-full flex flex-col justify-between relative z-10">
          <div>
            <h3 className="text-lg font-semibold mb-2">{name}</h3>
            <p className="text-sm text-gray-200 line-clamp-3">{description}</p>
          </div>
          <button
            className="w-full py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors"
            onClick={(e) => {
              e.stopPropagation()
              onAddToCart({ id, name, price, images })
            }}
          >
            Añadir al carrito
          </button>
        </div>
      </motion.div>
    </div>
  )
}

