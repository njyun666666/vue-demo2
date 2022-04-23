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
      ref="userName"
    ></UserName>
    firstName: {{ firstName }}
    <br />
    lastName: {{ lastName }}
    <br />
    <button @click="getuserName()">userName</button>

    <hr />

    <BaseCheckbox v-model:checked="checked">{{ checked }}</BaseCheckbox>

    <hr />

    <BaseInput @focus="onFocus($event)"></BaseInput>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import CustomInput from "../components/CustomInput.vue";
import UserName from "../components/UserName.vue";
import BaseCheckbox from "../components/BaseCheckbox.vue";
import BaseInput from "../components/BaseInput.vue";

@Options({
  components: { CustomInput, UserName, BaseCheckbox, BaseInput },
  props: {},
  watch: {},
})
export default class CustomView extends Vue {
  aaa = "";
  firstName = "";
  lastName = "";
  checked = false;

  getuserName() {
    const username = this.$refs.userName as UserName;
    console.log(username.fullName);
  }

  onFocus(event: any) {
    console.log("view onFocus", event);
  }
}
</script>

<style scoped lang="scss"></style>
