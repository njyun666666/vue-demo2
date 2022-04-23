/* eslint-disable vue/no-unused-vars */
<template>
  <div class="hello">
    <span :class="spanstyle">{{ msg }}</span>
    <br />
    <span :class="[arrColor, 'bold']">{{ message }}</span>
    <br />
    <button @click="changeArrColor()">change color</button>
    <br />
    <span :class="{ red: objColor === 'red' }">{{ message }}</span>
    <br />
    <span :class="objClass">{{ message }}</span>
    <br />
    {{ a1 }}
    <br />
    {{ a2 }}
    <input type="text" v-model="a2" />
    <br />
    <div v-if="isShow">qqqqqqq</div>
    <div v-show="isShow">qqqqqqq</div>
    <button @click="isShow = !isShow">isshow</button>

    <br />
    <div v-for="item in items" :key="item">
      {{ item }}
    </div>
    <br /><br />

    <div v-for="item in objItems" :key="item.id">
      {{ item.id }}, {{ item.name }}
    </div>
    <br /><br />

    <div v-for="(item, index) in objItems" :key="index">
      index:{{ index }}, {{ item.id }}, {{ item.name }}
    </div>

    <br /><br />

    <div v-for="(item, index) in objItems" :key="index">
      index:{{ index }} ---------------------------------------
      <div v-for="(item2, key2, index2) in item" :key="index2">
        key: {{ key2 }}, value:{{ item2 }}
      </div>
      <br />
    </div>

    <div>
      <ul>
        <li v-for="n in 10" :key="n">{{ n }}</li>
      </ul>
    </div>

    <br />
    <ACom></ACom>
    <br /><br />
    <input type="text" v-model="bComTitle" />
    {{ bComTitle }}
    <BCom :title="bComTitle" ref="refBCom"></BCom>
    <br /><br />
    <!-- <component :is="'BCom'"></component> -->

    <button @click="getBComValue1()">get bcom value1</button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ACom from "./ACom.vue";
import BCom from "./BCom.vue";

@Options({
  components: {
    ACom,
    BCom,
  },
  props: {
    msg: String,
    a1: String,
  },
  watch: {
    msg: function (val) {
      console.log(val);
    },
    a2: function (val) {
      console.log(val);
    },
  },
})
export default class HelloWorld extends Vue {
  bComTitle = "";
  msg!: string;
  a1!: string;
  a2 = "";
  spanstyle = "red bold";
  arrColor = "red";
  objColor = "red";
  isShow = true;
  items = ["one", "two", "three"];
  objItems = [
    { name: "1", id: 1 },
    { name: "22", id: 2 },
    { name: "333", id: 3 },
  ];

  user = { firstName: "Peter" };

  declare $refs: {
    refBCom: BCom;
  };

  beforeCreate() {
    console.log("beforeCreate", this.$el);
  }

  created() {
    console.log("created", this.$el);
  }
  beforeMount() {
    console.log("beforeMount", this.$el);
  }
  mounted() {
    console.log("mounted", this.$el);
    // const el = this.$el as HTMLBaseElement;
    // console.log(el.childNodes);
  }

  get message() {
    return this.msg;
  }

  get objClass() {
    return {
      red: this.arrColor === "red",
      blue: this.arrColor === "blue",
      bold: true,
    };
  }

  changeArrColor() {
    console.log(this.arrColor);
    this.arrColor = this.arrColor === "blue" ? "red" : "blue";
  }

  getBComValue1() {
    console.log(this.$refs.refBCom.value1);
    console.log((this.$refs.refBCom as BCom).value1);
    this.$refs.refBCom.countAdd();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
.bold {
  font-weight: bold;
}
</style>
