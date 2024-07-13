import daisyui from "daisyui"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'terraNeutral': '#1e1e1e',
        'terraGray': '#EBF1F6',
        'terraDarkGray': '#859099',
        'terraPink': '#D566DF',
        'terraDarkGreen': '#595235',
        'terraGreen': '#5eb23f',
      },
    },
  },
  plugins: [
    daisyui,
  ],

}