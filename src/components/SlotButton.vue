<template>
  <div>
    <button>
      <slot>default text</slot>
    </button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {},
  watch: {},
})
export default class SlotButton extends Vue {}
</script>

<style scoped lang="scss"></style>
