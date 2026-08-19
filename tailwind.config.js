/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0D0C0B",
        surface: "#18160F",
        surfaceHover: "#211E17",
        paper: "#F4EFE6",
        muted: "#948C7E",
        gold: "#C9A227",
        goldSoft: "#332C18",
      },
      fontFamily: {
        display: ["Fraunces", "serif"],
        body: ["Inter", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
