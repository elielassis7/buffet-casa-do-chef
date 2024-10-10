/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx}", ".html"],
  theme: {
    extend: {
      colors: {
        'bordo': '#800000'
      }
    },
    fontFamily: {
      'dancing': ['Dancing Script'],
      'Josefin': ['Josefin Sans']
    },

  },
  plugins: [],
}

