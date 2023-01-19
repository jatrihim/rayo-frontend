// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'primevue/resources/themes/tailwind-light/theme.css',
    'primevue/resources/primevue.css',
    'primeicons/primeicons.css'
  ],
  build: {
    transpile: ['primevue']
  },
  typescript: {
    shim: false
  },
  modules: ['@nuxtjs/tailwindcss'],
 

})
