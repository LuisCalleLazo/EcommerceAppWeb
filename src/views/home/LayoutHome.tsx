import { ReactNode } from "react";
import { Login } from "./LoginHome";
// import { Register } from "../InitSession/Register";

interface HomeLayoutProp
{
  children : ReactNode
}

export const HomeLayout = ({children} : HomeLayoutProp) => 
{

 return (
    <div className="">
      <div>
        {children}
      </div>
      {
        <Login/>    
        // <Register setIsRegister={setIsRegister}/>
      }
    </div>
 ); 
}