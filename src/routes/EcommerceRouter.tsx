
import { Route, Routes } from "react-router-dom";
import { LayoutDashboard, ProductDetail, ProductsView } from "../views";

export const EcommerceRouter = () => {

  return (
    <>
      <LayoutDashboard>
        <Routes>
          <Route path="/" element = {<ProductsView />}/>  
          <Route path="/product-detail" element = {<ProductDetail />}/>  
          <Route path="/*" element = {<ProductsView />}/>  
        </Routes>
      </LayoutDashboard>
    </>
  )
}