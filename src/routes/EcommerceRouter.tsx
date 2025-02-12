
import { Route, Routes } from "react-router-dom";
import { LayoutDashboard, ProductDetailView, ProductsView } from "../views";

export const EcommerceRouter = () => {

  return (
    <>
      <LayoutDashboard>
        <Routes>
          <Route path="/" element = {<ProductsView />}/>  
          <Route path="/product-detail" element = {<ProductDetailView />}/>  
          <Route path="/*" element = {<ProductsView />}/>  
        </Routes>
      </LayoutDashboard>
    </>
  )
}