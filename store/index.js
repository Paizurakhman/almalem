export const state = () => ({
    showNav: false,
    mobileNav: false,
    mobileShowCatalog: false,
    lang: 'ru',
    imageUrl: 'http://cdn.astudiodigital.ru/',
    cart: []
})

export const mutations = {
    setShowNav(state) {
        state.showNav = !state.showNav
    },
    setMobileNav(state) {
        state.mobileNav = !state.mobileNav
    },
    setShowCatalog(state) {
        state.mobileShowCatalog = !state.mobileShowCatalog
    },
    SET_CART(state, id) {
      state.cart.push(id)
      localStorage.setItem('cart', state.cart.filter((v) => {
        return id !== v
      }))
    }
}

export const actions = {
    showAction({ commit }) {
        commit('setShowNav')
    },
    mobileNavAction({ commit }) {
        commit('setMobileNav')
    },
    showCatalogAction({ commit }) {
        commit('setShowCatalog')
    },
    ADD_TO_CART({commit}, id) {
      commit('SET_CART', id)
    }
}

export const getters = {
    getMobileNav(state) {
        return state.mobileNav
    },
    getShowCatalog(state) {
        return state.mobileShowCatalog
    },
    GET_CART (state) {
      return state.cart
    }
}
