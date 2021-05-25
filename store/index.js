export const state = () => ({
    showNav: false,
    mobileNav: false,
    mobileShowCatalog: false,
    lang: 'ru',
    imageUrl: 'http://cdn.astudiodigital.ru/',
    cart: [],
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
      let cartData = JSON.parse(localStorage.getItem('cart')) || null
      if (cartData !== null) {
        state.cart = cartData
        if (cartData) {
          state.cart.push(id)
          localStorage.setItem('cart', JSON.stringify(state.cart))
        }
        if (cartData.find(el => el === id)) {
          state.cart = cartData.filter(item => {
            return item !== id
          })
        }
      }
      else {
        state.cart.push(id)
        localStorage.setItem('cart', JSON.stringify(state.cart))
      }
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
    loggedIn () {
      return localStorage.getItem('token') || null
    }
}
