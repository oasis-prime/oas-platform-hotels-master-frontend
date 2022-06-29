/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f'
      },
      backgroundColor: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f'
      }
    }
  },
  plugins: []
}
