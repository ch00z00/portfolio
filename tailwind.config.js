module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ['"Syne"', "sans-serif"],
        orbitron: ['"Orbitron"', "sans-serif"],
      },
    },
    colors: {
      white: {
        100: "#FFFFFF",
        200: "#F5F5F5",
      },
      black: {
        100: "#000000",
        200: "#19191A",
        300: "#272b29",
        400: "#212623",
      },
      red: {
        100: "#F40009",
      },
      blue: {
        100: "#EDF2F6",
        200: "#1F3250",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
