/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        105: "1.05",
      },
      backgroundColor: {
        "hover-blue": "#1e3a8a",
      },
      transitionProperty: {
        "width-height": "width, height",
      },
      transitionDuration: {
        300: "300ms",
      },
      transitionTimingFunction: {
        "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      transform: {
        gpu: "translateZ(0)",
      },
    },
  },
  variants: {
    extend: { transform: ["hover", "group-hover"] },
  },
  plugins: [],
};
