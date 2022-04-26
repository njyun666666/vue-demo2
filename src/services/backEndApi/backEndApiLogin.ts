import BackEndInstance from "./backEndApiBase";
import IBase from "./models/IBase";
import { ILoginParams, ILoginResponse } from "./models/ILogin";

const PATH = "/Login";

export const LoginApi = async (
  params: ILoginParams
): Promise<IBase<ILoginResponse>> => {
  return (await BackEndInstance.post(`${PATH}/Login`, params))?.data;
};
