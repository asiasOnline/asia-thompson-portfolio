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
      sans: ['var(--font-roboto)'],
      'display': ['var(--font-coolvetica)'],
    },
    extend: { 
      colors: {
        'transparent': 'transparent',
        'white': '#F5F5F5',
        'black': '#1E1E1E',
        'green': '#15803d',
        'ultramarine': '#190F88',
        'slateBlue': '#8175FF',
        'steelPink': '#C554B9',
        'fountainBlue': '#32B6BE',
        'brightBlue': '#97E4F8',
        'brightPurple': '#9D99FF',
        'brightPink': '#FBACA4',
      },
      lineHeight: {
        '12': '3rem',
        '14': '3.5rem',
        '16': '4rem',
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
  corePlugins: {
    aspectRatio: false,
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/aspect-ratio"),
  ],
} satisfies Config

export default config