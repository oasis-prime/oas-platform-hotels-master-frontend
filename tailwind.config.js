const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Kanit', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f'
      },
      backgroundColor: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f'
      },
      minWidth: {
        md: '60em'
      },
      minHeight: {
        md: '30em'
      }
    },
    screens: {
      xs: '475px',
      ...defaultTheme.screens
    }
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')]
}
