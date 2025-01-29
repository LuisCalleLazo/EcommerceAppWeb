
import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "../views";
// import { Login } from '../views/InitSession/Login';
// import { Home } from '../views';
export const HomeRouter = () => {

  return (
    <>
      <HomeLayout>
        <Routes>
          <Route path="/*" element = {<></>}/>  
        </Routes>
      </HomeLayout>
    </>
  )
}