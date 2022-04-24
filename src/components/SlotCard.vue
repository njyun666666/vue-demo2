<template>
  <div>
    <div class="title">
      <slot name="title">default title</slot>
    </div>
    <div class="content">
      <slot name="content">default content</slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class SlotCard extends Vue {}
</script>

<style scoped lang="scss">
.title {
  color: red;
}
.content {
  color: blue;
}
</style>
