<template>
  <div>
    <h3>custom input</h3>
    https://vuejs.org/guide/components/events.html#usage-with-v-model
    <br />
    <input v-model="value" type="text" />
    <br />
    {{ value }}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
    modelValue: String,
  },
  watch: {},
})
export default class CustomInput extends Vue {
  modelValue!: string;

  get value() {
    return this.modelValue;
  }

  set value(val) {
    // console.log("set", val);
    this.$emit("update:modelValue", val);
  }
}
</script>

<style scoped lang="scss"></style>
