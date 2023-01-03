/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Pretendard'],
      },
      fontSize: {
        // '2xs': '0.75rem', // 12px
        // xs: '0.875rem', // 14px
        // sm: '0.938rem', // 15px
        // base: '1rem', // 16px
        // xl: '1.25rem',  // px
        // '2xl': '1.563rem',
        // '3xl': '1.953rem',
        // '4xl': '2.441rem',
        // '5xl': '3.052rem',

        // '2xs': '1.2rem,', // 12px
        // xs: '1.4rem', // 14px
        // sm: '1.5rem', // 15px
        // base: '1.6rem', // 16px
        // xl: '1.8rem', // 18px
        // '2xl': '2.1rem', // 21px
        // '3xl': '2.6rem', // 26px
        // '4xl': '3.0rem', //30px
        // '4xl': '3.2rem', //32px
        // '5xl': '4.8rem', //48px
        // '6xl': '5.2rem', //52px
        // '7xl': '6.0rem', //60px

        '2xs': ['12px', '18px'],
        xs: ['14px', '18px'],
        sm: ['15px', '24px'],
        base: ['16px', 'auto'],
        xl: ['18px', 'auto'],
        '2xl': ['21px', 'auto'],
        '3xl': ['26px', 'auto'],
        '4xl': ['30px', '30px'],
        '5xl': ['32px', 'auto'],
        '6xl': ['48px', 'auto'],
        '7xl': ['52px', 'auto'],
        '8xl': ['60px', '80px'],
      },
    },
  },
  plugins: [],
};
