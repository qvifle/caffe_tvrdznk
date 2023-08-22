/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#292929",
        semiDark: "#3c3c3c",
        light: "#E5E5E5",
        semiLight: "#d5d5d5",
        ghost: "#d9d9d9",
        primary: "#5678dc",
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
};
