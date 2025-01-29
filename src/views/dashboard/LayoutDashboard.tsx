import { ReactNode } from "react";
// import { Register } from "../InitSession/Register";
// http://localhost:5173/e-commerce/dashboard

export const LayoutDashboard = ({ children }: { children: ReactNode }) => {
  return (
    <div className="">
      <div>
        {children}
      </div>
      <div>
        <h1>
          HOLA
        </h1>
      </div>
    </div>
  ); 
}