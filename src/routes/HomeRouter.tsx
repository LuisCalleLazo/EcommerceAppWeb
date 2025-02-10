
import { Route, Routes } from "react-router-dom";
import { ContactsHome, HomeLayout, MainHome } from "../views";
// import { Login } from '../views/InitSession/Login';
// import { Home } from '../views';
export const HomeRouter = () => {

  return (
    <>
      <HomeLayout>
        <Routes>
          <Route path="/" element = {<MainHome />}/>  
          <Route path="/main" element = {<MainHome />}/>  
          <Route path="/contacts" element = {<ContactsHome />}/>  
        </Routes>
      </HomeLayout>
    </>
  )
}