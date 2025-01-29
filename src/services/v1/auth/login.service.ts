import { basicApi } from '../../asp_api.service';
// import axios from 'axios';
import {LoginRequest, LoginResponse } from '../../../interfaces';

export const loginServ= async (loginData : LoginRequest) => 
{
  try
  {
    const response = await basicApi.post<LoginResponse>('v1/auth/login', loginData);
    // console.log(response.data);
    localStorage.setItem('token', response.data.currentToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    localStorage.setItem('user',  JSON.stringify(response.data.user));

    
    return response.data;

  }catch(error)
  {
    // if (axios.isAxiosError(error)) {
    //   ManageErrorAxios(error);
    // }
    // console.log(error);
    throw error;
  }
}

export const googleLoginService = async (token : string) => 
{
  try
  {
    const response = await basicApi.post<LoginResponse>('v1/auth/google-login', {token});
    // console.log(response.data);
    localStorage.setItem('token', response.data.currentToken);
    localStorage.setItem('refreshToken', response.data.refreshToken);
    localStorage.setItem('user',  JSON.stringify(response.data.user));

    return response.data;
  }catch(error)
  {
    // if (axios.isAxiosError(error)) {
    //   ManageErrorAxios(error);
    // }
    // console.log(error);
    throw error;
  }
}