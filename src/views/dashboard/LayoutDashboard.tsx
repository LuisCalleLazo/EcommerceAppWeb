import { ReactNode } from "react";
import { SidebarDashboard } from "./SidebarDashboard";
import { HeadDashboard } from "./HeadDashboard";
// import { Register } from "../InitSession/Register";
// http://localhost:5173/e-commerce/dashboard

export const LayoutDashboard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      {/* Cabecera */}
      <HeadDashboard />

      {/* Contenido principal */}
      <div className="h-[85vh] flex flex-row">
        {/* Sidebar */}
        <div className="w-[360px] relative overflow-auto border-r-2">
          <SidebarDashboard />
        </div>

        {/* Contenido */}
        <div className="w-auto relative overflow-auto p-4">
          {children}
        </div>
      </div>
      
    </div>
  ); 
}