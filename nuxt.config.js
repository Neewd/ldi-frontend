export default {
  ssr: false,

  head: {
    title: 'ladouceimpatience',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
  ],

  plugins: [
    { src: '~plugins/modals'},
  ],

  components: true,

  buildModules: [
    '@nuxt/typescript-build',
    '@nuxtjs/tailwindcss',
  ],

  modules: [
    '@nuxtjs/axios',
  ],

  axios: {},

  build: {
  }
}
