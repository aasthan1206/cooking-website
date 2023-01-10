/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#f14a0e',
        'secondary': '#f57e54',
      },
      fontFamily: {
        heading: ["Raleway-Regular"],
      },
    },
  },
  plugins: [],
}
