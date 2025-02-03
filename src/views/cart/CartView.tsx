import type React from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { removeItem, updateQuantity } from "../../store/cartSlice"
import { RootState } from "../../store/store"

export const CartView: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()

  const onUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }))
  }

  const onRemoveItem = (id: number) => {
    dispatch(removeItem(id))
  }

  const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-[var(--tx-color2)]">Carrito de compras</h1>

      <div className="flex flex-col md:flex-row justify-between">
        {/* Productos del carrito */}
        <div className="w-full md:w-[60%] space-y-8">
          {cartItems.length === 0 ? (
            <p className="text-gray-500">Tu carrito está vacío.</p>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b border-gray-200 py-4">
                <img
                  src={item.images[0] || "/placeholder.svg"}
                  alt={item.name}
                  width={80}
                  height={80}
                  className="object-cover rounded"
                />
                <div className="ml-4 flex-grow">
                  <h3 className="font-semibold text-[var(--tx-color2)]">{item.name}</h3>
                  <p className="text-gray-600">Bs {item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="text-[var(--tx-color2)] hover:text-[var(--tx-hover)] p-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="text-[var(--tx-color2)] hover:text-[var(--tx-hover)] p-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                <button onClick={() => onRemoveItem(item.id)} className="text-red-500 hover:text-red-700 ml-4 p-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                </button>
              </div>
            ))
          )}
        </div>

        {/* Método de pago */}
        <div className="w-full md:w-[30%] mt-8 md:mt-0">
          <div className="bg-gray-100 p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4 text-[var(--tx-color2)]">Resumen de compra</h2>
            <div className="flex justify-between items-center font-bold text-lg mb-4">
              <span>Total:</span>
              <span className="text-[var(--tx-color2)]">Bs {totalAmount.toFixed(2)}</span>
            </div>
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Método de pago</h3>
              <div className="flex items-center">
                <input
                  type="radio"
                  id="qr-payment"
                  name="payment-method"
                  value="qr"
                  checked
                  readOnly
                  className="mr-2"
                />
                <label htmlFor="qr-payment">Pago por QR</label>
              </div>
            </div>
            <button className="w-full bg-[var(--tx-color2)] text-white px-4 py-2 rounded hover:bg-[var(--tx-hover)] transition-colors">
              Proceder al pago
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

