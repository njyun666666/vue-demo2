<template>
  <div>
    <CustomInput v-model="aaa"></CustomInput>
    <br />
    aaa: {{ aaa }}
    <br />
    <button @click="aaa = 'AAAAA'">set aaa</button>

    <hr />
    <UserName
      v-model:firstName="firstName"
      v-model:lastName="lastName"
    ></UserName>
    firstName: {{ firstName }}
    <br />
    lastName: {{ lastName }}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CustomInput from "../components/CustomInput.vue";
import UserName from "../components/UserName.vue";

@Options({
  components: { CustomInput, UserName },
  props: {},
  watch: {},
})
export default class CustomView extends Vue {
  aaa = "";
  firstName = "";
  lastName = "";
}
</script>

<style scoped lang="scss"></style>
