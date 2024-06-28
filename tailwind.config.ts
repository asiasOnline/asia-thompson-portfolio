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
    colors: {
      'transparent': 'transparent',
      'white': '#F9F8F8',
      'black': '#1E1E1E',
      'green': '#15803d',
      'ultramarine': '#190F88',
      'slateBlue': '#8175FF',
      'steelPink': '#C554B9',
      'fountainBlue': '#32B6BE',
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    fontFamily: {
      'display': ['var(--font-raleway)']
    },
    extend: { 
      fontFamily: {
        sans: ['var(--font-roboto)']
      },
      animation: {
        gradientAnimation: "gradientAnimation 5s infinite"
      },
      keyframes: {
        gradientAnimation: {
          '0%': { transform: "translate(0px, 0px) scale(1)" },
          '33%': { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        }
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config