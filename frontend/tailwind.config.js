/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3bb77e",
        "primary-accent": "#29a56c",
        "primary-bg": "#def9ec",
        secondary: "#253d4e",
        "secondary-content": "#adadad",
        "accent-yellow": "#fdc040",
        "accent-red": "#dc2626",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
      },
      fontWeight: {
        DEFAULT: 400,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },

  plugins: [require("daisyui")],
};
