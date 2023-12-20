/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
        {
          ninelives: {
            "primary": "#06D6A0",
            "secondary": "#FFBD4C",
            "accent": "#EF476F",
            "neutral": "#3d4451",
            "base-100": "#ffffff",
            "blue": "#118AB2",
            "midnight-green": "#073B4C"
          },
        },
        "winter",
    ],
  },
}

