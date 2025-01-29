
export interface LoginResponse {
  user : UserAuthResponse;
  currentToken: string;
  refreshToken: string;
}

export interface UserAuthResponse
{
  id : number;
  name : string;
  email : string;
  photo : string;
  firstName : string;
  dadLastName : string;
  momLastName : string;
  age : number;
  ci : string;
}


export interface DecodedToken {
  exp: number;
  admin: string;
  worker: string;
  customer: string;
}