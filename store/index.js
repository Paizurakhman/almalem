export const state = () => ({
    showNav: false,
    mobileNav: false,
    mobileShowCatalog: false,
    lang: 'ru'
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
    }
}

export const getters = {
    getMobileNav(state) {
        return state.mobileNav
    },
    getShowCatalog(state) {
        return state.mobileShowCatalog
    }
}
