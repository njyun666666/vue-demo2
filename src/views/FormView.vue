<template>
  <div>
    <TestForm></TestForm>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import TestForm from "../components/TestForm.vue";

@Options({
  components: { TestForm },
})
export default class FormView extends Vue {}
</script>

<style scoped lang="scss"></style>
