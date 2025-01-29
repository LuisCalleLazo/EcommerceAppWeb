
import logo from "../../assets/ComexLogoTop.png"

export const HeadDashboard = () =>
{  
  return (
    <header className="bg-white shadow-md w-full h-[15vh] flex items-center justify-between px-4 md:px-6 lg:px-8">
      <div className="flex items-center">
        <img src={logo || "/placeholder.svg"} alt="Comex Logo" className="h-12 w-auto" />
      </div>

      <div className="flex-1 max-w-2xl mx-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="w-full py-2 px-4 pr-10 border border-gray-300 focus:outline-none focus:ring-2 focus:text-[var(--tx-color2)] focus:border-transparent"
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2">
            <i className="bi bi-search text-gray-500 hover:text-[var(--tx-color2)] transition-colors"></i>
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="text-gray-700 hover:text-[var(--tx-color2)] transition-colors">
          <i className="bi bi-person text-2xl"></i>
        </button>
        <button className="text-gray-700 hover:text-[var(--tx-color2)] transition-colors relative">
          <i className="bi bi-cart text-2xl"></i>
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            3
          </span>
        </button>
      </div>
    </header>
  );
}