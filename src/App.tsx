import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { LoadingModal } from './components';
import {  EcommerceRouter } from './routes';
import { CartView } from './views';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <EcommerceRouter/> } />
        <Route path="/cart" element={ <CartView/> } />
        <Route path="*" element={ <EcommerceRouter/> } />
      </Routes>
      <ToastContainer autoClose={1300} className="custom-toast-container" position="bottom-right"/>
      <LoadingModal />
    </>
  )
}

export default App
