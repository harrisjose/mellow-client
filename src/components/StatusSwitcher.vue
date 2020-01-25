<style scoped>
.status-switcher-bg {
  background: rgba(35, 35, 35, 0.18);
}
</style>
<template>
  <div class="flex justify-center mt-3">
    <div class="p-1 rounded-sm  status-switcher-bg text-md">
      <div class="flex flex-row">
        <div
          v-for="status in userStatusList"
          :key="status.name"
          :class="[
            currentUserStatus === status.name ? 'bg-white' : '',
            'px-8 py-1 mx-1 inline-block cursor-pointer rounded-sm flex',
          ]"
          @click="setUserStatus(status.name)"
        >
          <InlineSvg :src="status.iconPath" />
          <div class="ml-1 inline-block">{{ status.displayValue }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import userStatusListConstant from '@/constants/userStatus'
export default {
  name: 'StatusSwitcher',
  data() {
    return {
      userStatusList: userStatusListConstant,
    }
  },
  computed: {
    ...mapState({
      currentUserStatus: state => state.userStatus,
    }),
  },
  methods: {
    setUserStatus(status) {
      this.$store.dispatch('updateUserStatus', status)
    },
  },
}
</script>
