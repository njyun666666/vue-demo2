import {
  Action,
  getModule,
  Module,
  Mutation,
  VuexModule,
} from "vuex-module-decorators";
import store from "../index";
import modulesNames from "../modulesNames";

@Module({ dynamic: true, namespaced: true, store, name: modulesNames.loading })
class Loading extends VuexModule {
  loading = false;

  get isShow() {
    return this.loading;
  }

  @Mutation
  private setLoading(show: boolean) {
    this.loading = show;
  }

  @Action({ rawError: true })
  show() {
    this.setLoading(true);
  }

  @Action({ rawError: true })
  hide() {
    this.setLoading(false);
  }
}

export default getModule(Loading);
