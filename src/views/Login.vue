<template>
  <div class="container flex flex-col justify-center text-center">
    <div class="w-1/2 mx-auto">
      <div class="text-3xl font-extrabold">Welcome back!</div>
      <v-form class="mt-5" ref="form" v-model="valid">
        <div class="text-left">
          <label>Email</label>
          <v-text-field
            class="mt-1"
            v-model="email"
            :outlined="true"
            required
          ></v-text-field>
        </div>
        <div class="text-left">
          <label class="mb-2 ">Password</label>
          <v-text-field
            class="mt-1"
            v-model="password"
            type="password"
            :outlined="true"
            required
          ></v-text-field>
        </div>
        <v-btn
          :disabled="!valid"
          color="primary"
          class="w-full mr-4"
          @click="login"
        >
          Login
        </v-btn>
      </v-form>
      <a class="inline-block text-black mt-8">
        Forget password?
      </a>
    </div>
  </div>
</template>
<script>
import http from '@/utils/http'
export default {
  name: 'login',
  data: () => ({
    valid: true,
    email: '',
    password: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
    ],
    passwordRules: [v => !!v || 'Password is required'],
  }),
  methods: {
    login() {
      http.post('/login', {
        email: this.email,
        password: this.password,
      })
    },
  },
}
</script>
