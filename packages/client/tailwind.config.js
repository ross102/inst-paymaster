/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        backgroundTheme: "#11142b",
        secondaryGlow: "#7d0cc1",
        blurColor: "rgba(125, 12, 193, 1)",
      },
      fontFamily: {
        monserrat: "Montserrat",
        color: "#fff",
      },
      shadow: {
        btn: "4px 4px 14px rgba(0, 0, 0, 0.15)",
      },
      mainContainer: {
        maxWidth: "1240px",
        center: "0 auto",
      },
    },
  },
  plugins: [],
};
