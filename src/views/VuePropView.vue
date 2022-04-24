<template>
  <div>
    <h2>vueprop view</h2>

    <input type="text" v-model.number="aNumber" />

    <VueProp
      :propNumber="aNumber"
      @onCountValue="onCountValue($event)"
    ></VueProp>
    count: {{ count }}
  </div>
</template>

<script lang="ts">
import VueProp from "@/components/VueProp.vue";
import { Options, Vue } from "vue-class-component";
import {} from "vue-property-decorator";

@Options({ components: { VueProp } })
export default class VuePropView extends Vue {
  inputdata = "aaa";
  aNumber = 0;
  count = 0;

  onCountValue(count: number) {
    this.count = count;
    console.log(this.count);
  }
}
</script>

<style scoped lang="scss"></style>
