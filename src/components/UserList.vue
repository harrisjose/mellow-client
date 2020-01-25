<style scoped>
.user-box {
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.08);
}
</style>
<template>
  <div class="px-3 overflow-y-auto">
    <div class="flex justify-center mb-5 text-lg">
      <InlineSvg :src="statusIndicatorPath" />
    </div>
    <div class="flex flex-row">
      <div
        class="flex rounded bg-white p-3 user-box"
        v-for="user in usersList"
        :key="user.id"
      >
        <div class="flex flex-row ml-2">
          <img class="w-10 h-10 rounded-full mr-4" />
          <div>
            <div class="text-sm font-medium">{{ user.name }}</div>
            <div class="text-xs text-gray-700">{{ user.email }}</div>
          </div>
        </div>
        <div class="mr-2">
          <div class="text-sm font-medium">{{ user.currentTime }}</div>
          <div class="text-xs text-gray-700">{{ user.location }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  props: ['statusIndicatorPath', 'usersList'],
}
</script>
