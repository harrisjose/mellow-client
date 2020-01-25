<template>
  <div :class="[backgroundClass, 'h-full overflow-hidden']">
    <StatusSwitcher />
    <div class="container h-full mt-10 text-center" v-if="showEmptyState">
      <!-- <img src="@/assets/images/empty-state.png" alt="invite team members" /> -->
      <label class="font-extrabold text-4xl">Invite your team members!</label>
      <div class="mt-1 text-gray-700">
        To view their availability and have a look at their timezone
      </div>
      <v-btn color="primary" class="invite-now-button mt-5">Invite now</v-btn>
    </div>
    <div class="container flex mt-10 h-full" v-else>
      <UserList
        class="w-1/3 h-full user-list-seperator"
        statusIndicatorPath="images/user-available"
        :usersList="availableUsers"
        v-if="availableUsers.length"
      />
      <UserList
        class="w-1/3 h-full user-list-seperator"
        statusIndicatorPath="images/user-focus-mode"
        :usersList="focusModeUsers"
        v-if="focusModeUsers.length"
      />
      <UserList
        class="w-1/3"
        statusIndicatorPath="images/user-unavailable"
        :usersList="unavailableUsers"
        v-if="unavailableUsers.length"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import StatusSwitcher from '@/components/StatusSwitcher.vue'
import UserList from '@/components/UserList.vue'
export default {
  name: 'home',
  components: {
    StatusSwitcher,
    UserList,
  },
  computed: {
    ...mapState({
      usersList: state => state.users,
      currentUserStatus: state => state.userStatus,
    }),
    backgroundClass: function() {
      switch (this.currentUserStatus) {
        case 'AVAILABLE':
          return 'user-available'
        case 'FOCUSMODE':
          return 'user-focusmode'
        case 'UNAVAILABLE':
          return 'user-unavailable'
        default:
          return ''
      }
    },
    showEmptyState: function() {
      return (
        !this.availableUsers.length &&
        !this.focusModeUsers.length &&
        !this.unavailableUsers.length
      )
    },
    availableUsers: function() {
      return this.usersList.filter(user => {
        return user.status == 'AVAILABLE'
      })
    },
    focusModeUsers() {
      return this.usersList.filter(user => {
        return user.status == 'FOCUSMODE'
      })
    },
    unavailableUsers() {
      return this.usersList.filter(user => {
        return user.status == 'UNAVAILABLE'
      })
    },
  },
  created() {
    this.$store.dispatch('fetchUsers')
  },
}
</script>
<style scoped>
.user-available {
  background-color: #f9fef5;
}
.user-focusmode {
  background-color: #fffafa;
}
.user-unavailable {
  background-color: #f0f0f3;
}
.user-list-seperator {
  border-right: 1px solid #f0f0f3;
}
.v-btn.invite-now-button {
  padding: 5px 50px;
  border-radius: 5px;
}
</style>
