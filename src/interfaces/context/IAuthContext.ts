import { LoginRequest } from "../requests/IAuthRequests";
import { UserAuthResponse } from "../responses/IAuthResponse";

export interface IAuthContext {
  isAuthenticated: boolean;
  loading: boolean;
  init: boolean;
  setUser: (user : UserAuthResponse) => void
  user: UserAuthResponse;
  admin : string;
  worker : string;
  customer : string;
  rols : number [];
  login: (loginData: LoginRequest) => Promise<void>;
  loginGoogle: (token : string) => Promise<void>;
  logout: () => void;
  refreshToken: () => Promise<void>;
}