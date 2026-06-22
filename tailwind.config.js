/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fdfbf7',
          100: '#fbf7ed',
          400: '#e5c07b',
          500: '#d4af37', 
          600: '#aa8c2c',
        },
        obsidian: {
          900: '#0B0B0B', 
          800: '#121212', 
          700: '#1C1C1E', 
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}