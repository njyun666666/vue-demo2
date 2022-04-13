<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->

    <input type="text" v-model="msg" @keyup.enter="enterEvent($event)" />
    <HelloWorld :msg="msg" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  msg = "msggggg";

  enterEvent(event: KeyboardEvent) {
    console.log(event);
  }
}
</script>
