import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        gloock: ["Gloock", "serif"],
        loversQuarrel: ["Lovers Quarrel", "cursive"],
        cormorant: ["Cormorant Garamond", "serif"],
        baskerville: ["Libre Baskerville", "serif"],
      },
    },
  },
  plugins: [],
};
