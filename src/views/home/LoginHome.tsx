
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useAuth } from "../../context";
import { H1Text } from "../../components";
import { InputText } from "../../components";
import { InputPass } from "../../components";
import { BtnText } from "../../components";
import { LoadingSpinner } from "../../components";
import { GoogleOAuthProvider } from '@react-oauth/google';

export const Login = () =>
{
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loadLogin, setLoadLogin] = useState(false);

  const { login, loginGoogle } = useAuth();

  // function sleep(ms: number): Promise<void> {
  //   return new Promise(resolve => setTimeout(resolve, ms));
  // }

  const handleLogin = async () => {
    setLoadLogin(true);
    navigate('/e-commerce/dashboard');
    await login({nameOrGmail: username, password})
    setLoadLogin(false);
  };
  
  const handleGoogleSuccess = async (credentialResponse : CredentialResponse) => {
      const id_token = credentialResponse.credential;

      // Envía este token a tu backend
      if(id_token == undefined)
      { 
        toast.error("Error con la autenticacion con google");
        return;
      }
      console.log(id_token);
      await loginGoogle(id_token);
  };
  
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_ID}>   
      <div className="bg-black flex w-full h-[100vh] justify-center items-center">
        <div className="h-[520px] w-[400px] diffuse-body rounded-2xl">

          <H1Text text="LOGIN" bg="#0000" color="#fff" width="100%"/>
          
          <div className=" w-[400px] m-auto pt-5 pb-9">
            <InputText placeholder="Ingreso su correo o usuario" value={username} 
              label="Usuario" width="300px" icon="people" setValue={setUsername}/>
          </div>

          <div className=" w-[400px] m-auto pt-5 pb-9">
            <InputPass placeholder="Ingreso su contraseña" value={password} 
              label="Contraseña" width="300px" icon="people" setValue={setPassword}/>
          </div>
          
          <div className="mt-5 flex flex-col items-center">

            <div className="py-1">
                {
                  loadLogin ? 
                  <div className="bg-[#dfaf12] w-[300px] rounded-md h-[45px] flex justify-center">
                    <LoadingSpinner heigth="50px" hw="8" color="#fff"/>
                  </div> : 
                  
                  <BtnText onClick={() => {handleLogin()}} width="300px" bg="#dfaf12">
                    Iniciar Session
                  </BtnText>
                }
            </div>
    
            <div className="hover:scale-105 duration-150 ease-in-out py-1">
                <GoogleLogin
                    onSuccess={handleGoogleSuccess} 
                    onError={() => console.log('Login Failed')}
                    width={"300px"}
                />
            </div>
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}