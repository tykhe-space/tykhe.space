/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "node_modules/flowbite/**/*.js",
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html","./src/**/*.{html,js}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('flowbite/plugin')
  ],
}
