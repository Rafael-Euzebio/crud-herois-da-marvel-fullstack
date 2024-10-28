/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'
import tailwindcssSlantPlugin, * as slant from 'tailwindcss-slant-plugin'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "marvel-red": "#e62429",
      "marvel-dark-red": "#9f0013",
      "marvel-blue-gray": '#0e141a',
      "marvel-white": "#fdfdfd",
      ...colors
    },
    extend: {},
  },
  plugins: [slant.handler],
}

