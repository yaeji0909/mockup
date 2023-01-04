// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/image-edge', '@intlify/nuxt3'],
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
});
