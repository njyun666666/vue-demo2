<template>
  <div class="loading-div" v-show="loadingShow">
    <div class="loading-img">
      <img src="../src/assets/rocket.svg" alt="" />
    </div>
  </div>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { RouteLocationNormalized } from "vue-router";
import Loading from "./store/modules/Loading";

@Options({})
export default class App extends Vue {
  get loadingShow() {
    return Loading.isShow;
  }

  @Watch("$route") routeA(
    to: RouteLocationNormalized,
    from: RouteLocationNormalized
  ) {
    console.log("@Watch($route)", to, from);
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 10px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.loading-div {
  position: fixed;
  top: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.9);
}
</style>
