<template>
  <div>
    <button @click="login">Login</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Login from "@/store/modules/Login";

@Options({})
export default class LoginView extends Vue {
  async login() {
    console.log(process.env);

    await Login.login({
      account: "demo",
      password: "1",
    });
  }
}
</script>

<style scoped lang="scss"></style>
