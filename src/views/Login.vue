<template>
  <div class="container flex flex-col justify-center text-center">
    <div class="text-3xl font-extrabold">Welcome back!</div>
    <v-form ref="form" v-model="valid" :lazy-validation="lazy">
      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
      ></v-text-field>
      <v-text-field
        v-model="password"
        type="password"
        :rules="passwordRules"
        label="Password"
        required
      ></v-text-field>
      <v-btn :disabled="!valid" color="primary" class="mr-4" @click="login">
        Login
      </v-btn>
    </v-form>
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
