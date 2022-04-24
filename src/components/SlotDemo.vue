<template>
  <div>
    <SlotButton></SlotButton>
    <SlotButton>new text</SlotButton>

    <hr />

    <SlotCard>
      <template v-slot:title>
        <h2>new card title</h2>
      </template>
      <template #content> new card content </template>
    </SlotCard>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SlotButton from "./SlotButton.vue";
import SlotCard from "./SlotCard.vue";

@Options({
  components: { SlotCard, SlotButton },
})
export default class SlotDemo extends Vue {}
</script>

<style scoped lang="scss"></style>
