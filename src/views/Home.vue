<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="m-auto" />
    <HelloWorld msg="Welcome to Your Vue.js App" class="text-red-600" />
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
  },
}
</script>
