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
    <div className="">
      <HeadHome />
      <div>
        {children}
      </div>
      <FooterHome />
    </div>
 ); 
}