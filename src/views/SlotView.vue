<template>
  <div>
    <h1>SlotDemo</h1>
    <SlotDemo> </SlotDemo>
  </div>
</template>

<script lang="ts">
import SlotDemo from "@/components/SlotDemo.vue";
import { Options, Vue } from "vue-class-component";

@Options({
  components: { SlotDemo },
})
export default class SlotView extends Vue {}
</script>

<style scoped lang="scss"></style>
