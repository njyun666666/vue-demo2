import { LoginApi } from "./../../services/backEndApi/backEndApiLogin";
import { ILoginParams } from "./../../services/backEndApi/models/ILogin";
import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";

import store from "../index";
import modulesNames from "../modulesNames";
import LocalStorageUtils from "@/utils/LocalStorageUtils";

const AUTH_TOKEN_KEY = "token";

@Module({ dynamic: true, namespaced: true, store, name: modulesNames.login })
class Login extends VuexModule {
  private _authToken = LocalStorageUtils.getItem(AUTH_TOKEN_KEY);

  get authToken() {
    return this._authToken;
  }

  @Mutation
  private setAuthToken(authToken: string) {
    LocalStorageUtils.setItem("token", authToken);
  }

  @Action({ rawError: true })
  async login(params: ILoginParams) {
    const res = await LoginApi(params);
    this.setAuthToken(res.data.token);
  }
}

export default getModule(Login);
