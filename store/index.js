import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showNav: false
  },
  mutations: {
    SET_SHOW_NAV (state) {
      state.showNav = !state.showNav
    }
  },
  actions: {
    SHOW_NAV ({commit}) {
      commit('SET_SHOW_NAV')
    }
  },
  getters: {
    GET_SHOW_NAV (state) {
      return state.showNav
    }
  }
})
