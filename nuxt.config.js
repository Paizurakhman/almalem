export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    ssr: true,

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'almalem',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' },
            { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        '~/assets/styles/main.scss',
        'vue-slick-carousel/dist/vue-slick-carousel.css',
        'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
        '@invisiburu/vue-picker/dist/vue-picker.min.css'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/vue-slick-carousel',
        '~/plugins/vue-the-mask',
        '~/plugins/vue-no-ssr',
        '~/plugins/vue-cookies',
        '~/plugins/picker',
        '~/plugins/star-rating'
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
      baseURL: 'http://back.astudiodigital.ru/api/'
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {}
}
