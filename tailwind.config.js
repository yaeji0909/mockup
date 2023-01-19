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
      screens: {
        xs: '376px',
      },
      fontFamily: {
        sans: ['Pretendard'],
      },
      fontSize: {
        '2xs': ['0.75rem', '1.125rem'], // 12px
        xs: ['0.875rem', '1.25rem'], // 14px
        sm: ['0.938rem', '1.5rem'], // 15px
        base: ['1rem', '1.25rem'], // 16px
        xl: ['1.125rem', '1.5rem'], // 18px
        '2xl': ['1.3125rem', '1.875rem'], // 21px
        '3xl': ['1.625rem', '2.5rem'], // 26px
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
      boxShadow: {
        mint: '0px 0px 5px rgba(67, 227, 217, 0.5);',
        red: '0px 0px 5px rgba(67, 227, 217, 0.5);',
        service: '-5px 5px 40px rgba(0, 0, 0, 0.15);',
        recruit: '0px 4px 8px rgba(14, 31, 53, 0.12);',
        contact: '0px 8px 20px rgba(14, 31, 53, 0.12);',
      },
      dropShadow: {
        review: '10px 6px 6px #ededed',
        history: '0px 8px 20px rgba(55, 209, 199, 0.8)',
      },
      backgroundImage: {
        service: 'url(https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-bg.svg)',
        phone: 'url(https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/iPhone.svg)',
        'service-header': "url('https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/service-header.svg')",
        'review-5': "url('https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/review_box_5.svg')",
        'contact-header': "url('https://naturemobility.s3.ap-northeast-2.amazonaws.com/image/contact_bg.svg')",
      },
    },
    plugins: [],
  },
};
