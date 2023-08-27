/* TODO:
 * Add dark-mode
 */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        syne: ['"Syne"', "sans-serif"],
        orbitron: ['"Orbitron"', "sans-serif"],
        neuropol: ['"Neuropol"', "sans-serif"],
        earth: ['"Earth"', "sans-serif"],
        "march-evoked": ['"March_Evoked"', "sans-serif"],
      },
      animation: {
        "fade-in-bottom": "fade-in-bottom 1.2s ease-out both",
      },
      keyframes: {
        "fade-in-bottom": {
          "0%": {
            transform: "translateY(50px)",
            opacity: "0",
          },
          to: {
            transform: "translateY(0)",
            opacity: "1",
          },
        },
      },
    },
    colors: {
      white: {
        100: "#FFFFFF",
        200: "#F5F5F5",
        300: "#D8D8D8",
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
      green: {
        100: "#415245",
      },
      orange: {
        100: "#EF3E1D",
      },
      yellow: {
        100: "#CDC8BC",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
