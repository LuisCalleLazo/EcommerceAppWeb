import { ReactNode } from "react";
import { HeadDashboard } from "./HeadDashboard";

export const LayoutDashboard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex flex-col">
      <HeadDashboard />

      <div className="h-[83vh] flex flex-row">
        {children}
      </div>
    </div>
  ); 
}