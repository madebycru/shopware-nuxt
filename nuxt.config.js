import axios from 'axios'


export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'shop-nuxt',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/shopware.js',
    '~/plugins/functions.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios'
  ],


  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  generate: {
    routes() {

      let config = {
        headers: {
          'sw-access-key': 'SWSC40-LJTNO6COUEN7CJMXKLA'
        }
      }

      return axios.get('https://pwa-demo-api.shopware.com/trunk/store-api/product',config).then(res => {
        return res.data.elements.map(product => {
          const slug = product.name ? product.name.replace(/[^A-Z0-9]+/ig, "-").toLowerCase() : null;
          return {
            route: '/products/'+slug,
            payload: product
          }
        })
      })
    }
  }
}
