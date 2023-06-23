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
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
