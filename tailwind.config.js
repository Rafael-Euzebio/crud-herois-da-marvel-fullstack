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
      "marvel-accent-red": "#e62429",
      "marvel-accent-red-hover": "#9f0013",
      "marvel-bg": '#202020',
      "marvel-input": '#1E1E1E',
      "marvel-widget-bg": '#3A3A3A',
      "marvel-base": "#fdfdfd",
      "marvel-error": "#fece00",
      ...colors
    },
    extend: {},
  },
  plugins: [slant.handler],
}
