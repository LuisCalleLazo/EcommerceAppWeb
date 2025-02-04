import { ReactNode } from "react";
import { HeadDashboard } from "./HeadDashboard";

export const LayoutDashboard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      <HeadDashboard />

      <div className="h-[83vh] flex flex-row">
        {children}
      </div>
      
      <div className="fixed right-[30px] bottom-[30px]">
        <div className="bg-green-400 rounded-full size-12 flex 
          justify-center items-center hover:cursor-pointer hover:scale-105">
          <i className="bi bi-whatsapp text-white text-2xl"/>
        </div>
      </div>
    </div>
  ); 
}