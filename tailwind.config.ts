import type { Config } from "tailwindcss"

const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
  darkMode: "class",
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      'display': []
    },
    colors: {
      'white': '#F9F8F8',
      'black': '#1E1E1E',
      'ultramarine': '#190F88',
      'slateBlue': '#8175FF',
      'steelPink': '#C554B9',
      'fountainBlue': '#32B6BE',
    },
    extend: { 

    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config