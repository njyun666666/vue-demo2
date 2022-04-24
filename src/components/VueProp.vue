<template>
  <div>
    <h2>VueProp component</h2>
    <hr />
    <h3>@Prop</h3>
    propNumber: {{ propNumber }}
    <br />
    propText: {{ propText }}
    <hr />
    <h3>@Emit</h3>
    <button @click="onCountValue()" ref="aButton">emit</button>
    <hr />
    <h3>@Ref</h3>
    <BaseInput
      ref="baseInputAAA"
      v-model="text"
      @change="baseInputAAAonChange($event)"
    ></BaseInput>
    BaseInput text: {{ text }}
    <br />
    <button @click="getBaseInputAAAText()">get baseinputAAA text</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { Emit, Prop, Ref, Watch } from "vue-property-decorator";
import BaseInput from "./BaseInput.vue";

@Options({ components: { BaseInput } })
export default class VueProp extends Vue {
  @Prop(Number) propNumber!: number;
  @Prop(String) propText!: string;
  @Ref("aButton") readonly button!: HTMLButtonElement;
  @Ref("baseInputAAA") readonly baseInputAAA!: BaseInput;

  count = 0;
  text = "";

  @Watch("propNumber") onPropNumberChange(val: number, oldVal: number) {
    console.log(val, oldVal);
  }

  @Emit() onCountValue() {
    console.log(this.button);
    this.count++;
    return this.count;
  }

  baseInputAAAonChange(event: { val: string; oldVal: string }) {
    console.log(event);
  }

  getBaseInputAAAText() {
    console.log(this.baseInputAAA.text);
  }
}
</script>

<style scoped lang="scss"></style>
