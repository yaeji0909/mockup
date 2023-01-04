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
        '2xs': ['0.75rem', '0.889rem'], // 12px
        xs: ['0.875rem', '1.25rem'], // 14px
        sm: ['0.938rem', '1.5rem'], // 15px
        base: ['1rem', '1.25rem'], // 16px
        xl: ['1.125rem', '1.5rem'], // 18px
        '2xl': ['1.3125rem', '1.875rem'], // 21px
        '3xl': ['1.625rem', 'auto'], // 26px
        '4xl': ['1.875rem', '2.5rem'], // 30px
        '5xl': ['2rem', '2.875rem'], // 32px
        '6xl': ['3rem', '3.75rem'], // 48px
        '7xl': ['3.25rem', '4.375rem'], // 52px
        '8xl': ['3.75rem', '5rem'], // 60px
      },
      fontWeight: {
        normal: 400,
        medium: 600,
        bold: 700,
      },
      colors: {
        'gradient-aqua': '#5EEBFC',
        'primary-aqua': '#37D1C7',
        'primary-mint': '#97DECE',
        'secondary-green': '#DFEDDC',
        'secondary-beige': '#F8F8F8',
        error: '#FF5353',
        black: '#081236',
        'gray-sub': '#3A4968',
        'gray-caption': '#9BA4B4',
        'gray-border': '#D5DDE5',
        'gray-bg': '#F2F5FC',
        white: '#FFFFFF',
      },
    },
    plugins: [],
  },
};
