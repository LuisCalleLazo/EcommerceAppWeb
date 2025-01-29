import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from './App.tsx'
import { store } from './store/store.ts';
import { AuthProvider, LoadingProvider } from './context';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>
          <LoadingProvider>
            <App />
          </LoadingProvider>
        </AuthProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>,
)
