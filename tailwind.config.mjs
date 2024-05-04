/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        "slide-in-left": "slide-in-left 150ms ease-in-out",
        "slide-out-left": "slide-out-left 150ms ease-in-out",
        "fade-in": "fade-in 150ms ease-in-out",
        "fade-out": "fade-out 150ms ease-in-out",
      },
      keyframes: {
        "slide-in-left": {
          "0%": { transform: "translateX(6rem)", opacity: "0" },
          "100%": { transform: "translateX(0rem)", opacity: "1" },
        },
        "slide-out-left": {
          "0%": { transform: "translateX(0rem)", opacity: "1" },
          "100%": { transform: "translateX(6rem)", opacity: "0" },
        },
      },
      "fade-in": {
        "0%": { opacity: "0" },
        "100%": { opacity: "1" },
      },
      "fade-out": {
        "0%": { opacity: "1" },
        "100%": { opacity: "0" },
      },
    },
  },
  plugins: [],
};
