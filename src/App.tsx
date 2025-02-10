import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { LoadingModal } from './components';
import {  EcommerceRouter, HomeRouter } from './routes';
import { CartView } from './views';

function App() {
  return (
    <>
      <Routes>
        <Route path="/e-commerce/*" element={ <EcommerceRouter/> } />
        <Route path="/cart" element={ <CartView/> } />
        <Route path="*" element={ <HomeRouter/> } />
      </Routes>
      <ToastContainer autoClose={1300} className="custom-toast-container" position="bottom-right"/>
      <LoadingModal />
      <div className="fixed right-[30px] bottom-[30px] z-50">
        <div className="bg-[var(--bg-color)] rounded-full size-15 flex 
          justify-center items-center hover:cursor-pointer hover:scale-105" onClick={() => window.open('https://wa.me/59178824516', '_blank')}>
          <i className="bi bi-whatsapp text-white text-4xl ml-0.5 mb-0.5"/>
        </div>
      </div>
    </>
  )
}

export default App
