import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'black': '#1E1E1E',
      'white': '#F9F8F8',
      'p-30-blue': '#190F88',
      'p-30-purple': '#CBC6FF',
      'p-60-lightBlue': '#32B6BE',
      'p-60-pink': '#32B6BE',
      },
    extend: {
      }
    },
  plugins: [],
};
export default config;
