/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ram: {
          100: '#dcdad7',
          300: '#9e9e9e',
          500: '#3c3e44',
          700: '#272b33',
          900: '#202329',
          950: '#333333'
        }
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite'
      },
      spacing: {
        '132': '38rem'
      }
    },
  },
  plugins: [],
}
