
import { Route, Routes } from "react-router-dom";
import { LayoutDashboard } from "../views";

export const EcommerceRouter = () => {

  return (
    <>
      <LayoutDashboard>
        <Routes>
          <Route path="/dashboard" element = {<></>}/>  
          <Route path="/*" element = {<></>}/>  
        </Routes>
      </LayoutDashboard>
    </>
  )
}