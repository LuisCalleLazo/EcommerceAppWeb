import type React from "react"

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  images: string
}

interface CartModalProps {
  isOpen: boolean
  onClose: () => void
  cartItems: CartItem[]
  onUpdateQuantity: (id: number, quantity: number) => void
  onRemoveItem: (id: number) => void
}

export const CartModal: React.FC<CartModalProps> = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {
  if (!isOpen) return null

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-[var(--tx-color2)]">Carrito de compras</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-[var(--tx-hover)]">
            <i className="bi bi-x-lg"></i>
          </button>
        </div>

        {cartItems.length === 0 ? (
          <p className="text-gray-500">Tu carrito está vacío.</p>
        ) : (
          <>
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
                <img
                  src={item.images || "/placeholder.svg"}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="ml-4 flex-grow">
                  <h3 className="font-semibold text-[var(--tx-color2)]">{item.name}</h3>
                  <p className="text-gray-600">Bs {item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="text-[var(--tx-color2)] hover:text-[var(--tx-hover)]"
                    >
                      <i className="bi bi-dash-circle"></i>
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="text-[var(--tx-color2)] hover:text-[var(--tx-hover)]"
                    >
                      <i className="bi bi-plus-circle"></i>
                    </button>
                  </div>
                </div>
                <button onClick={() => onRemoveItem(item.id)} className="text-red-500 hover:text-red-700 ml-4">
                  <i className="bi bi-trash"></i>
                </button>
              </div>
            ))}
            <div className="mt-6">
              <div className="flex justify-between items-center font-bold text-lg">
                <span>Total:</span>
                <span className="text-[var(--tx-color2)]">Bs {total.toFixed(2)}</span>
              </div>
              <button className="w-full mt-4 bg-[var(--tx-color2)] text-white px-4 py-2 rounded hover:bg-[var(--tx-hover)] transition-colors">
                Proceder al pago
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

