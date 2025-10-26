/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        peach: {
          50: '#FFF5F5',
          100: '#FFE5E5',
          200: '#FFD5D5',
        },
        lavender: {
          50: '#F3F0FF',
          100: '#E5DEFF',
          200: '#D5C8FF',
        },
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
}
