export const state = () => ({
  showNav: false,
  languageNav: false,
  mobileNav: false,
  mobileShowCatalog: false
})

export const mutations = {
  setShowNav (state) {
    state.showNav = !state.showNav
  },
  setLanguageNav (state) {
    state.languageNav = !state.languageNav
  },
  setMobileNav(state) {
    state.mobileNav = !state.mobileNav
  },
  setShowCatalog(state) {
    state.mobileShowCatalog = !state.mobileShowCatalog
  }
}

export const actions = {
  showAction({commit}) {
    commit('setShowNav')
  },
  languageNavAction({commit}) {
    commit('setLanguageNav')
  },
  mobileNavAction ({commit}) {
    commit('setMobileNav')
  },
  showCatalogAction ({commit}) {
    commit('setShowCatalog')
  }
}

export const getters = {
  getLanguageNav (state) {
    return state.languageNav
  },
  getMobileNav(state) {
    return state.mobileNav
  },
  getShowCatalog (state) {
    return state.mobileShowCatalog
  }
}
