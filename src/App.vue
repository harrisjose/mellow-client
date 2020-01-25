<template>
  <v-app class="h-screen">
    <div class="flex product-logo-section">
      <img alt="Mellow" src="@/assets/images/mellow-logo.svg" />
      <span class="px-2 py-1 ml-3 text-xs rounded text-white bg-black"
        >BETA</span
      >
    </div>
    <div class="profile-icon">
      Profile
    </div>
    <router-view></router-view>
  </v-app>
</template>

<style scoped>
.product-logo-section {
  position: absolute;
  top: 20px;
  left: 20px;
}
.profile-icon {
  position: absolute;
  top: 20px;
  right: 10px;
}
</style>
