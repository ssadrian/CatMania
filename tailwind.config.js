/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '2xl': '0 25px 50px -12px rgba(129, 199, 132, .5)',
      }
    },
  },
  plugins: [],
}
