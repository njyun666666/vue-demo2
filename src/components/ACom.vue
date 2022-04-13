<template lang="">
  <div>{{ a }}</div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";

export default class ACom extends Vue {
  a = 1;
  mounted() {
    this.a = 2;
    console.log(this.$el.textContent);
    this.$nextTick(() => {
      console.log(this.$el.textContent);
    });
  }
}
</script>
<style lang=""></style>
