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
      // 'tablet': '640px',
      // // => @media (min-width: 640px) { ... }
      // 'tablet': '640px',
      // // => @media (min-width: 640px) { ... }

      // 'laptop': '1024px',
      // // => @media (min-width: 1024px) { ... }

      // 'desktop': '1280px',
      // // => @media (min-width: 1280px) { ... }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
