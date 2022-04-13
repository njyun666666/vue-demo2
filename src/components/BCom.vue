<template>
  <div>
    BCom
    <br />
    title: {{ title }}
    <!-- fullName: {{ fullName }} -->
    <br />
    <input v-model="value1" type="text" />{{ value1 }}
    <br />
    {{ count }}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    title: String,
  },
  watch: {
    title: (val) => {
      console.log(val);
    },
  },
})
export default class extends Vue {
  title!: string;
  aaa = "bcom aaa";
  bbb = "bbb";
  value1 = "";
  count = 0;
  // private _fullName!: string;

  // get value1() {
  //   return this._value1;
  // }

  // set fullName(newName: string) {
  //   this._fullName = newName;
  // }

  countAdd() {
    this.count++;
  }
}
</script>

<style scoped></style>
