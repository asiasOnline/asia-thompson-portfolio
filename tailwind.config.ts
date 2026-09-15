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
      sans: ['var(--font-plus-jakarta-sans)'],
      'display': ['new-kansas'],
    },
    extend: { 
      colors: {
        'primaryGreen': {
          100: '#DAE2DF',
          200: '#B5C6BF',
          300: '#90A99E',
          400: '#6B8D7E',
          500: '#46705E',
          600: '#385A4B',
          700: '#2A4338',
          800: '#1C2D26',
          900: '#0E1613',
        },
        'black': {
          300: '#83756E',
          500: '#30190D',
          700: '#1D0F08',
        },
        'transparent': 'transparent',
        'white': '#FAF8F5',  
        'ashGray': '#A8C4BC',
        'ultramarine': '#190F88',
        'slateBlue': '#4E4AB7',
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
        gradientAnimation: "gradientAnimation 5s infinite",
        scroll: 'scroll 30s linear infinite',
        'scroll-40': 'scroll 40s linear infinite',
        'scroll-60': 'scroll 60s linear infinite',
        'scroll-reverse': 'scroll-reverse 30s linear infinite',
        'scroll-reverse-40': 'scroll-reverse 40s linear infinite',
        'scroll-reverse-60': 'scroll-reverse 60s linear infinite',
        aurora: 'aurora 15s ease-in-out infinite', // 🔥 NEW
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'scroll-reverse': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        gradientAnimation: {
          '0%': { transform: "translate(0px, 0px) scale(1)" },
          '33%': { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
          "100%": { transform: "translate(0px, 0px) scale(1)" },
        },
        aurora: { // 🔥 NEW
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
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