import { ReactNode } from "react";
import { HeadHome } from "./HeadHome";
import { FooterHome } from "./FooterHome";
// import { Register } from "../InitSession/Register";

interface HomeLayoutProp
{
  children : ReactNode
}

export const HomeLayout = ({children} : HomeLayoutProp) => 
{

 return (
    <div className="bg-gradient-to-r from-orange-100 to-pink-100">
      <HeadHome />
      <div className="bg-white">
        {children}
      </div>
      <FooterHome />
    </div>
 ); 
}