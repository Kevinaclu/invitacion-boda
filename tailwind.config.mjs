import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    screens: {
      xs: "375px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        gloock: ["Gloock", "serif"],
        loversQuarrel: ["Lovers Quarrel", "cursive"],
        cormorant: ["Cormorant Garamond", "serif"],
        baskerville: ["Libre Baskerville", "serif"],
        playfair: ["Playfair Display Variable", "serif"],
      },
    },
  },
  plugins: [],
};
