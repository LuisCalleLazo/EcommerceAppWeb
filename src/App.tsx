import './App.css'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { LoadingModal } from './components';
import { HomeRouter } from './routes';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={ <HomeRouter/> } />
        <Route path="*" element={ <HomeRouter/> } />
      </Routes>
      <ToastContainer autoClose={1300} className="custom-toast-container" />
      <LoadingModal />
    </>
  )
}

export default App
