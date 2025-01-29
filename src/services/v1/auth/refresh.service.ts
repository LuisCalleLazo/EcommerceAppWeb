import { LoginResponse, RefreshTokenRequest } from "../../../interfaces";
import { basicApi } from "../../asp_api.service";

export const refreshTokenService = async (refresh : RefreshTokenRequest): Promise<LoginResponse> => 
  {
    try
    {
      console.log(refresh);
      const response = await basicApi.post<LoginResponse>('v1/auth/refresh-token', refresh);
      console.log(response.data);
      localStorage.setItem('token', response.data.currentToken);
      localStorage.setItem('refreshToken', response.data.refreshToken);
      localStorage.setItem('user',  JSON.stringify(response.data.user));
      return response.data;
    }catch(error)
    {
      localStorage.clear();
      // if (axios.isAxiosError(error)) {
      //   ManageErrorAxios(error);
      // }
      // console.log(error);
      throw error;
    }
  }