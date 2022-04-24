<template>
  <div>
    BaseInput
    <input
      :value="modelValue"
      @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      @focus="onFocus($event)"
      @change="onChangeA($event)"
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Emit, Prop, Watch } from "vue-property-decorator";

@Options({ components: {} })
export default class BaseInput extends Vue {
  @Prop(String) modelValue!: string;

  @Watch("modelValue") onChange(val: string, oldVal: string) {
    console.log(`val: ${val}, oldVal: ${oldVal}`);
    this.change(val, oldVal);
  }

  @Emit() change(val: string, oldVal: string) {
    return { val, oldVal };
  }

  onFocus(event: FocusEvent) {
    console.log("onFocus", event);
    this.$emit("focus", event);
  }

  onChangeA(event: Event) {
    console.log(event);
  }

  get text() {
    return this.modelValue + " from getter";
  }
}
</script>

<style scoped lang="scss">
input {
  padding: 5px;
  border: 1px solid #adadad;
  border-radius: 5px;
  outline-color: blue;
}
</style>
