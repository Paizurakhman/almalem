export const state = () => ({
    showNav: false,
    mobileNav: false,
    mobileShowCatalog: false,
    lang: 'ru',
    imageUrl: 'http://cdn-almalem.test-vip.kz/',
    cart: [],
    favorites: [],
    cartLength: 0,
    favoriteLength: 0,
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
    SET_CART(state, { id, count }) {
        let cartData = JSON.parse(localStorage.getItem('cart')) || null
        if (cartData !== null) {
            state.cart = cartData
            if (cartData.find(el => el.id === id)) {
                localStorage.setItem('cart', JSON.stringify(cartData.filter(item => {
                    return item.id !== id
                })))
            } else {
                state.cart.push({
                    id: id,
                    count: count
                })
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
        } else {
            state.cart.push({
                id: id,
                count: 1
            })
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    },
    SET_FAVORITE(state, product) {
        let favorite = JSON.parse(localStorage.getItem('favorite')) || null
        if (favorite !== null) {
            state.favorites = favorite.products

            if (favorite.products.find(el => el.id === product.id)) {
                localStorage.setItem('favorite', JSON.stringify({
                    products: favorite.products.filter(val => {
                        return val.id !== product.id
                    })
                }))
            } else {
                state.favorites.push(product)
                localStorage.setItem('favorite', JSON.stringify({
                    products: state.favorites
                }))
            }
        } else {
            state.favorites.push(product)
            localStorage.setItem('favorite', JSON.stringify({
                products: state.favorites
            }))
        }
    },
    SET_IN_CART(state, { id, count }) {
        let cartData = JSON.parse(localStorage.getItem('cart')) || null
        if (cartData !== null) {
            state.cart = cartData
            if (cartData.find(el => el.id === id)) {
                localStorage.getItem('cart', JSON.stringify(cartData.filter(item => {
                   if(item.id === id){
                       item.count = count
                       localStorage.setItem('cart', JSON.stringify(state.cart))
                   }
                //    localStorage.setItem('cart', JSON.stringify(state.cart))
                })))
            } else {
                state.cart.push({
                    id: id,
                    count: count
                })
                localStorage.setItem('cart', JSON.stringify(state.cart))
            }
        } else {
            state.cart.push({
                id: id,
                count: 1
            })
            localStorage.setItem('cart', JSON.stringify(state.cart))
        }
    },
    SET_CART_LENGTH(state) {
        state.cartLength = JSON.parse(localStorage.getItem('cart'))?.length
    },
    SET_FAV_LENGTH(state) {
        state.favoriteLength = JSON.parse(localStorage.getItem('favorite'))?.products.length
    },
    SET_LANG(state) {
        if (localStorage.getItem('lang')) {
            state.lang = localStorage.getItem('lang')
        } else {
            state.lang = 'ru'
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
    ADD_TO_CART({ commit }, { id, count }) {
        commit('SET_CART', { id, count })
    },
    ADD_FAVORITE({ commit }, product) {
        commit('SET_FAVORITE', product)
    },
    CART_ACTION({ commit }) {
        commit('SET_CART_LENGTH')
    },
    FAV_LEN_ACTION({ commit }) {
        commit('SET_FAV_LENGTH')
    },
    IN_CART_ACTION({ commit }, { id, count }) {
        commit('SET_IN_CART', { id, count })
    },
    LANG_ACTION({ commit }) {
        commit('SET_LANG')
    }
}

export const getters = {
    getMobileNav(state) {
        return state.mobileNav
    },
    getShowCatalog(state) {
        return state.mobileShowCatalog
    },
    loggedIn() {
        return localStorage.getItem('token') || null
    },
    getCartLen(state) {
        return state.cartLength
    },
    GET_FAV_LEN(state) {
        return state.favoriteLength
    },
    GET_LANG(state) {
        return state.lang
    }
}
