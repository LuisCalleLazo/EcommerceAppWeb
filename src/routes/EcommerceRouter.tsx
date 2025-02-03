
import { Route, Routes } from "react-router-dom";
import { LayoutDashboard, ProductsView } from "../views";

export const EcommerceRouter = () => {

  return (
    <>
      <LayoutDashboard>
        <Routes>
          <Route path="/" element = {<ProductsView />}/>  
          <Route path="/*" element = {<ProductsView />}/>  
        </Routes>
      </LayoutDashboard>
    </>
  )
}