/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#211951",
        primary: "#15F5BA",
        secondary: "#836FFF",
        light: "#F0F3FF",
      },
    },
  },
  plugins: [],
};
