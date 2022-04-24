<template>
  <div>
    <header>
      <div>template main</div>
    </header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/form">form</router-link>
      <router-link to="/slot">slot</router-link>
      <router-link to="/custom">custom</router-link>
      <router-link to="/vueprop">vueprop</router-link>
    </nav>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {},
  watch: {},
})
export default class TemplateMain extends Vue {}
</script>

<style scoped lang="scss"></style>
