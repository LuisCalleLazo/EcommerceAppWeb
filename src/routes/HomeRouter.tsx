
import { Route, Routes } from "react-router-dom";
import { AboutView, ContactView, HomeLayout, MainHome, SustainabilityView } from "../views";
// import { Login } from '../views/InitSession/Login';
// import { Home } from '../views';
export const HomeRouter = () => {

  return (
    <>
      <HomeLayout>
        <Routes>
          <Route path="/" element = {<MainHome />}/>  
          <Route path="/main" element = {<MainHome />}/>  
          <Route path="/contacts" element = {<ContactView />}/>
          <Route path="/about" element = {<AboutView />}/>  
          <Route path="/sustantibility" element = {<SustainabilityView />}/>  
        </Routes>
      </HomeLayout>
    </>
  )
}