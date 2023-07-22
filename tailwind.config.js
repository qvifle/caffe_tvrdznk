/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: "#292929",
        light: '#E5E5E5',
        ghost: '#d9d9d9',
        primary: 'rgb(96 165 250)',
        darkPrimary: '4397C0',
      },
    },
  },
  plugins: [require("daisyui")],
};
