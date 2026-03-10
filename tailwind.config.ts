/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1680px",
      "4xl": "2200px",
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a1a1a",
          light: "#2d2d2d",
          dark: "#0a0a0a",
        },
        secondary: {
          DEFAULT: "#f5f5f5",
          light: "#ffffff",
          dark: "#e0e0e0",
        },
      },
    },
  },
  plugins: [],
};

