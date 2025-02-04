import { useSelector } from "react-redux"
import { RootState } from "../../store/store"
import { useDispatch } from "react-redux"
import { removeItem, updateQuantity } from "../../store/cartSlice"

export const CartItems = () =>
{
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()

  const onUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }))
  }

  const onRemoveItem = (id: number) => {
    dispatch(removeItem(id))
  }

  return(
    <div className="w-full md:w-[65%] space-y-8 relative overflow-auto h-[77vh] px-10">
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
                  <i className="bi bi-dash-circle"></i>
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                  className="text-[var(--tx-color2)] hover:text-[var(--tx-hover)] p-1"
                >
                  <i className="bi bi-plus-circle"></i>
                </button>
              </div>
            </div>
            <button onClick={() => onRemoveItem(item.id)} className="text-red-500 hover:text-red-700 ml-4 p-1">
              <i className="bi bi-trash3-fill"></i>
            </button>
          </div>
        ))
      )}
    </div>
  );
}