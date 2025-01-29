import { ReactNode } from "react";
import { SidebarDashboard } from "./SidebarDashboard";
// import { Register } from "../InitSession/Register";
// http://localhost:5173/e-commerce/dashboard

export const LayoutDashboard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      {/* Cabecera */}
      <header className="h-[15vh] w-full bg-gray-800 text-white flex items-center justify-center">
        <h1 className="text-xl font-bold">Dashboard Header</h1>
      </header>

      {/* Contenido principal */}
      <div className="h-[85vh] flex flex-row">
        {/* Sidebar */}
        <div className="w-[310px] relative overflow-auto border-r-2">
          <SidebarDashboard />
        </div>

        {/* Contenido */}
        <div className="w-auto relative overflow-auto p-4">
          {children}
          wedwedwedwed
          <button>
            ACEPTAR
          </button>
        </div>
      </div>
      
    </div>
  ); 
}