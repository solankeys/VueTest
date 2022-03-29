<template>
  <div class="login-form">
    <h1>{{ title }}</h1>
    <form @submit.prevent="submitform" class="form-login">
      <custom-input v-model="email" :label="emailLabel" />
      <custom-input v-model="password" :label="passwordLabel" />
        <hr/>
      <custom-input v-for="(input, i) in inputs" :key='i' v-model="input.value" :label="input.label" :type="input.type"></custom-input>
      <button>Submit</button>
    </form>
  </div>
</template>
<script>
import CustomInput from './CustomInput.vue'
export default {
  name: 'Form',
  components: {
    CustomInput,
  },
  data() {
    return {
      title: 'Login Form',
      inputs: [
        {
          label:'Email',
          value:'',
          type:'email'
        },
        {
          label:'Password',
          value:'',
          type:'password'
        },
      ],
      email: '',
      password: '',
      emailLabel: 'Email',
      passwordLabel: 'Password',
    }
  },
  methods: {
    submitform() {
      console.log(this.email, this.password)
      console.log(this.inputs[0].value, this.inputs[1].value)
    },
  },
  setup() {},
}
</script>
<style scoped>
.form-login {
  display: flex;
  flex-direction: column;
}
input {
  width: 50%;
  height: 40px;
  margin-bottom: 10px;
}
button {
  width: 25%;
}
</style>
