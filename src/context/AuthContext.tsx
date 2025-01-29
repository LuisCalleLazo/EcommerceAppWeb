import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { loginServ, googleLoginService } from '../services/v1/auth/login.service';
import { refreshTokenService } from '../services/v1/auth/refresh.service';
import { LoginRequest, IAuthContext, UserAuthResponse, DecodedToken, LoginResponse } from '../interfaces';

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { jwtDecode } from 'jwt-decode';
import { executeAsyncAction } from '../utils';
interface Props {
  children: ReactNode;
}

const AuthContext = createContext<IAuthContext | undefined>(undefined);

export const AuthProvider : React.FC<Props> = ({ children }) => {

  const userDefault = { 
    id : 0, name : 'string', email : 'string', photo : 'string', firstName : 'string', 
    dadLastName : 'String', momLastName : 'string', age : 0, ci : 'string'
  }

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const [admin, setAdmin] =  useState<string>('none');
  const [worker, setWorker] = useState<string>('none'); 
  const [customer, setCustomer] = useState<string>('none');

  // const [rols, setRols] = useState<number[]>([]);

  const [loading, setLoading] = useState<boolean>(true); 
  const [init, setInit] = useState<boolean>(false); 
  const [user, setUser] = useState<UserAuthResponse>(userDefault);
  const navigate = useNavigate();

  useEffect(() => {
    const initAuth = async () => {
      const token = localStorage.getItem('token');
      const storedUser = localStorage.getItem('user');
      const refreshToken = localStorage.getItem('refreshToken');

      if (token && refreshToken && storedUser) {
        try {
          const decodedToken = jwtDecode<DecodedToken>(token);
          const currentTime = Date.now() / 1000;
          
          if (decodedToken.exp > currentTime) 
          {
            setAdmin(decodedToken.admin);
            setWorker(decodedToken.worker);
            setCustomer(decodedToken.customer);

            setIsAuthenticated(true);
            setUser(JSON.parse(storedUser));
          }

          setInit(true);
          
        } catch (error) {
          console.error("Token validation error:", error);
          logout();
        }
      }
      setLoading(false);
    };

    initAuth();

  }, []);

  const login = async (loginData: LoginRequest) => {
    try {
      
    setLoading(true);
    executeAsyncAction<LoginResponse>({
      asyncFunction: async () => await loginServ(loginData),
      successAction: (data) => {
        setUser(data.user);
        setIsAuthenticated(true);
        toast.success("Inicio de session correcto");
        navigateAccess(data.currentToken)
      },
      finalAction: () => setLoading(false),
    });
      
    } catch (error) {
      toast.error("Credenciales incorrectas!");
      console.error('Login failed:', error);
    }
  };

  
  const loginGoogle = async (token : string) => {
    try {
      const data = await googleLoginService(token);
      setUser(data.user);
      setIsAuthenticated(true);

      toast.success("Inicio de session correcto");
      navigateAccess(data.currentToken)

    } catch (error) {
      toast.error("Credenciales incorrectas");
      console.error('Login failed:', error);
    }
  }; 
  const navigateAccess = (token : string) =>
  {
    const decodedToken = jwtDecode<DecodedToken>(token);
    
    if (decodedToken.admin == 'true') {
      navigate('/admin');
    } else if (decodedToken.worker == 'true') {
      navigate('/worker');
    } else if (decodedToken.customer == 'true') {
      navigate('/customer');
    }else{
      navigate('/register')
    }
  }

  const logout = () => {
    localStorage.clear();
    setUser(userDefault);
    setAdmin('none');
    setWorker('none');
    setCustomer('none');
    setIsAuthenticated(false);
    navigate('/login');
  };

  const refreshToken = async () => {
    try {
      const data = await refreshTokenService({ 
        tokenExpired: localStorage.getItem('token')!, 
        refreshToken : localStorage.getItem('refreshToken')! 
      });
      setUser(data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Error refreshing token:', error);
      logout();
    }
  };


  return (
    <AuthContext.Provider value={{ 
        isAuthenticated, loading, user, init, setUser,
        admin, rols : [], worker, customer,
        login, loginGoogle, logout, refreshToken 
    }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de un AuthProvider');
  }
  return context;
};
