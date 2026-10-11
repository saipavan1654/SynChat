
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {},
  },

  plugins: [daisyui],

  daisyui: {
    themes: [
      "light",
      "dark",
      "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",

      // Custom SynChat Premium theme
      {
        premium: {
          "color-scheme": "dark",

          primary: "#D4AF37",
          "primary-content": "#080808",

          secondary: "#252018",
          "secondary-content": "#F5F5F5",

          accent: "#F0D36C",
          "accent-content": "#080808",

          neutral: "#17140B",
          "neutral-content": "#F5F5F5",

          "base-100": "#080808",
          "base-200": "#111111",
          "base-300": "#262626",
          "base-content": "#F5F5F5",

          info: "#60A5FA",
          success: "#22C55E",
          warning: "#EAB308",
          error: "#EF4444",
        },
      },
    ],
  },
};
