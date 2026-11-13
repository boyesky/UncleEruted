/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "cursive"],
        bungee: ["Bungee", "sans-serif"],
        redaction: ["Redaction", "sans-serif"],
        patrickHand: ["Patrick Hand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
