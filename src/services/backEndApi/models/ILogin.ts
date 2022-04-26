export interface ILoginParams {
  account: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
  infoJsonString: string;
}
