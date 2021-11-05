export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'drink',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        type: 'text/css ',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'vue-slick-carousel/dist/vue-slick-carousel.css',
    // 'vue-slick-carousel/dist/vue-slick-carousel-theme.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [

    { src: '@/plugins/vue-slick-carousel.js' },// Only works on client side
    //   { src: '@/plugins/woocommerce-rest-api.js' } Only works on client side
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/style-resources',
  ],
  styleResources: {
    // your settings here
    sass: [],

    hoistUseStatements: true  // Hoists the "@use" imports. Applies only to "sass", "scss" and "less". Default: false.
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
