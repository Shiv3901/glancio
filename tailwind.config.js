/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html,js}",
    "./public/js/**/*.js",
    "./public/js/components/**/*.js",
    "./public/js/pages/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          bg: '#0a0a0a',
          text: '#ffffff',
          muted: '#666666'
        },
        accent: {
          blue: '#3b82f6'
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
} 