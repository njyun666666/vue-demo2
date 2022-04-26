import Login from "@/store/modules/Login";
import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
import HttpStatusCodes from "../common/HttpStatusCodes";

const AuthInterceptor = (
  config: AxiosRequestConfig<any>
): AxiosRequestConfig => {
  const accessToken = Login.authToken;
  if (accessToken)
    (
      config.headers as AxiosRequestHeaders
    ).Authorization = `Token ${accessToken}`;
  return config;
};

const OnResponseSuccess = (response: AxiosResponse<any>): AxiosResponse<any> =>
  response;

const OnResponseFailure = (error: any): Promise<any> => {
  const httpStatus = error?.response?.status;

  const errors = error?.response?.data?.errors;
  const isUnknownError = errors?.[0].startsWith("Unknown");

  switch (httpStatus) {
    case HttpStatusCodes.UNAUTHORIZED:
      // User.logout();
      // router.push({ name: routesNames.authLogin });
      console.log("You are not logged in, please login first.");
      break;
    case HttpStatusCodes.NOT_FOUND:
      console.log(
        errors?.length > 0 && !isUnknownError
          ? errors
          : ["Requested resource was not found."]
      );
      break;
    case HttpStatusCodes.FORBIDDEN:
      console.log(
        errors?.length > 0 && !isUnknownError
          ? errors
          : ["Access to this resource is forbidden"]
      );
      break;
    case HttpStatusCodes.UNPROCESSABLE_ENTITY:
      // This case should be handled at the forms
      break;
    default:
      console.log(
        errors?.length > 0
          ? errors
          : ["Unknown error occurred, please try again later."]
      );
      break;
  }
  return Promise.reject(errors);
};

const instance: Readonly<AxiosInstance> = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_API_URL,
  timeout: 30000,
});

// instance.defaults.headers.get.Accepts = "application/json";
instance.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

instance.interceptors.request.use(AuthInterceptor);

instance.interceptors.response.use(OnResponseSuccess, OnResponseFailure);

export default instance;
