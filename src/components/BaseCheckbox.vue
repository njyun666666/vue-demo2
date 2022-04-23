<template>
  <div>
    <label>
      <input type="checkbox" v-model="checkedValue" />
      <slot></slot>
    </label>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
    checked: Boolean,
  },
  watch: {},
})
export default class BaseCheckbox extends Vue {
  checked!: boolean;

  get checkedValue() {
    return this.checked;
  }

  set checkedValue(val) {
    console.log("set", val);
    this.$emit("update:checked", val);
  }
}
</script>

<style scoped lang="scss"></style>
