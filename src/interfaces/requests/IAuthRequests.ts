
export interface LoginRequest {
  nameOrGmail: string;
  password: string;
}

export interface RefreshTokenRequest
{
  tokenExpired  : string
  refreshToken : string
}