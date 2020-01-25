import Vue from 'vue'
import Vuex from 'vuex'
import http from '@/utils/http'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: [],
    userStatus: 'AVAILABLE',
  },
  mutations: {
    UPDATEUSERS(state, payload) {
      state.users = payload
    },
    UPDATEUSERSTATUS(state, payload) {
      state.userStatus = payload
    },
  },
  actions: {
    fetchUsers({ commit }) {
      http.get('/team').then(function(usersList) {
        commit('UPDATEUSERS', usersList)
      })
    },
    updateUserStatus({ commit }, status) {
      // TODO: need to update user status to server
      commit('UPDATEUSERSTATUS', status)
    },
  },
  modules: {},
})
