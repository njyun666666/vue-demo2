<template>
  <div>
    <h1>Test Form Component</h1>
    <div>
      <button @click="msg = ''">clear</button>
      <input v-model="msg" type="text" placeholder="input msg" /> {{ msg }}

      <hr />

      <input id="checkbox1" v-model="checked" type="checkbox" />
      <label for="checkbox1">checkbox1</label>
      {{ checked }}

      <hr />

      <input v-model="multipleCheckbox" type="checkbox" id="vue" value="vue" />
      <label for="vue">vue</label>
      <br />
      <input
        v-model="multipleCheckbox"
        type="checkbox"
        id="angular"
        value="angular"
      />
      <label for="angular">angular</label>
      <br />
      <input
        v-model="multipleCheckbox"
        type="checkbox"
        id="react"
        value="react"
      />
      <label for="react">react</label>
      <br />
      {{ multipleCheckbox }}

      <hr />

      <input v-model="radio1" type="radio" id="yes" value="yes" />
      <label for="yes">yes</label>

      <br />

      <input v-model="radio1" type="radio" id="no" value="no" />
      <label for="no">no</label>

      <br />
      {{ radio1 }}

      <hr />

      <select v-model="selected">
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
      </select>

      {{ selected }}

      <hr />

      <select v-model="multipleSelect" multiple>
        <option value="a">a</option>
        <option value="b">b</option>
        <option value="c">c</option>
      </select>

      {{ multipleSelect }}

      <hr />

      <select v-model="forSelect">
        <option
          v-for="option in options"
          :key="option.value"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>

      {{ forSelect }}

      <hr />

      <select v-model="forSelect2">
        <option
          v-for="option in optionsSort"
          :key="option.value"
          :value="option.value"
        >
          {{ option.text }}
        </option>
      </select>
      {{ forSelect2 }}

      <hr />

      <!-- <input
        type="checkbox"
        id="checkbox2"
        v-model="checkbox2"
        :true-value="checkbox2Yes"
        :false-value="checkbox2No"
      />
      <label for="checkbox2">{{ checkbox2 }} </label> -->

      <hr />

      <input type="radio" id="radio2yes" value="yes" v-model="radio2" />
      <label for="radio2yes">yes</label>
      <input type="radio" id="radio2no" value="no" v-model="radio2" />
      <label for="radio2no">no</label>
      {{ radio2 }}

      <hr />

      <h2>.lazy</h2>
      {{ lazydata }}
      <br />
      <input v-model.lazy="lazydata" type="text" />
      <input v-model="lazydata" type="text" />
      <hr />

      <h2>number</h2>
      {{ numData }}, typeof {{ typeof numData }}
      <br />
      <input v-model.number="numData" type="number" step="1" />
      <input v-model="numData" type="number" />

      <hr />
      <h2>.trim</h2>
      <input type="text" v-model.trim="trimData" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class TestForm extends Vue {
  msg = "";
  checked = false;
  multipleCheckbox = [];
  radio1 = "";
  selected = "";
  multipleSelect = [];

  forSelect = "";
  forSelect2 = "";
  options = [
    { value: "c", text: "ccc" },
    { value: "b", text: "bbb" },
    { value: "a", text: "aaa" },
  ];

  checkbox2 = "";
  checkbox2Yes = "yes";
  checkbox2No = "No";

  radio2 = "";
  lazydata = "";
  numData = 0;
  trimData = "";

  get optionsSort() {
    return [...this.options].sort((a, b) => {
      const textA = a.text.toUpperCase();
      const textB = b.text.toUpperCase();

      if (textA < textB) {
        return -1;
      }

      if (textA < textB) {
        return 1;
      }
      return 0;
    });
  }
}
</script>

<style scoped lang="scss"></style>
