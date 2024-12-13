/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#1a357a",
          light: "#e8eeff",
          medium: "#5571bb",
        },
        secondary: {
          "ex-light": "#bbbcbd",
          light: "#8a8a8a",
          medium: "#343434",
          dark: "#1a1a1a",
        },
      },
    },
  },

  plugins: [require("daisyui")],
};
