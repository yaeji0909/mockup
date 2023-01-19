// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/image-edge', '@intlify/nuxt3', '@vueuse/nuxt'],
  intlify: {
    localeDir: 'locales',
    vueI18n: {
      locale: 'ko',
      fallbackLocale: 'ko',
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  buildModules: ['nuxt-gsap-module'],
  gsap: {
    /* Module Options */
  },
  build: {
    transpile: ['@fawmi/vue-google-maps', '@intlify/nuxt3'],
  },
  runtimeConfig: {
    public: { GOOGLE_MAP_API_KEY: process.env.GOOGLE_MAP_API_KEY },
  },
});
