<template>
  <div>
    <h2>UserName.vue</h2>

    <input v-model="firstNameValue" type="text" />
    <input v-model="lastNameValue" type="text" />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
  props: {
    firstName: String,
    lastName: String,
  },
  watch: {},
})
export default class UserName extends Vue {
  firstName!: string;
  lastName!: string;

  get firstNameValue() {
    return this.firstName;
  }

  set firstNameValue(val) {
    this.$emit("update:firstName", val);
  }

  get lastNameValue() {
    return this.lastName;
  }

  set lastNameValue(val) {
    this.$emit("update:lastName", val);
    console.log(this.fullName);
  }

  get fullName() {
    return `${this.firstNameValue} ${this.lastNameValue}`;
  }
}
</script>

<style scoped lang="scss"></style>
