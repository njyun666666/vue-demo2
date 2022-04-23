<template>
  <div>
    <input type="text" @focus="onFocus($event)" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {},
  watch: {},
})
export default class BaseInput extends Vue {
  onFocus(event: FocusEvent) {
    console.log("onFocus", event);
    this.$emit("focus", event);
  }
}
</script>

<style scoped lang="scss"></style>
