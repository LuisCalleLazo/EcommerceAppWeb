
import { Route, Routes } from "react-router-dom";
import { LayoutDashboard, Products } from "../views";

export const EcommerceRouter = () => {

  return (
    <>
      <LayoutDashboard>
        <Routes>
          <Route path="/" element = {<Products />}/>  
          <Route path="/*" element = {<Products />}/>  
        </Routes>
      </LayoutDashboard>
    </>
  )
}