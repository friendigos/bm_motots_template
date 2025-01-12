/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/**/*.{js,ts,jsx,tsx,mdx}",

    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
          '2xl': '1320px',
        },
      },
      'max-sm': { 'max': '576px' },
      'max-md': { 'max': '768px' },
      'max-lg': { 'max': '992px' },
      'max-xl': { 'max': '1200px' },
      'max-xxl': { 'max': '1400px' },
      colors: {
        'header-color': '#0F0D1D',
        'theme-color': '#384BFF',
        'text-color-2': '#ffffffcc',
        'theme-color-2': '#384BFF',
      },
      boxShadow: {
        'custom': '0px 0px 10px rgba(0, 0, 0, 0.2)',
      },
      spacing: {
        '130': '130px',
        '50': '50px',
        '40': '40px',
        '15': '15px',
        '25': '25px',
        '10': '10px',
        '20': '20px',
        '30': '30px',
        '14': '14px',
        '22': '22px',
        '24': '24px',
        '5': '5px',
      },
      fontSize: {
        '15': '15px',
        '16': '16px',
        '14': '14px',
      },
      zIndex: {
        '99': '99',
        '99999': '99999',
        '100': '100',
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, theme }) {
      addBase({
        'audio, canvas, embed, iframe, img, object, svg, video': {
          'vertical-align': 'middle',
          'display': 'revert',
        }
      });

      addComponents({
        '.container-fluid': {
          width: '100%',
          paddingRight: theme('spacing.15'),
          paddingLeft: theme('spacing.15'),
          marginRight: 'auto',
          marginLeft: 'auto',
          '@screen sm': {
            paddingRight: '15px',
            paddingLeft: '15px',
          },
          '@screen md': {
            paddingRight: '40px',
            paddingLeft: '40px',
          },
          '@screen lg': {
            paddingRight: '50px',
            paddingLeft: '50px',
          },
          '@screen xl': {
            paddingRight: '130px',
            paddingLeft: '130px',
          },
          '@screen 2xl': {
            paddingRight: '130px',
            paddingLeft: '130px',
          },
        },
      });
    }),
  ],
}