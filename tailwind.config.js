/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "appear-from-above": {
          "0%": {
            transform: "translateY(-30%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        "appear-from-bottom": {
          "0%": {
            transform: "translateY(20%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      },
      animation: {
        "appear-from-above": "appear-from-above 0.75s ease-out",
        "appear-from-bottom": "appear-from-bottom 0.75s ease-out",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwindcss-animation"),
  ],
};
