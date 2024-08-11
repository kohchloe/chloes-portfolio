/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      gridTemplateColumns: {
        '70/30': '70% 28%',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#394e6a",
          "secondary": "#70acc7",
          "accent": "#a991f7",
          "neutral": "#394e6a", 
          "base-100": "#ffffff", 
          "info": "#f6cbd1",
          "success": "#b4e9d6",
          "warning": "#dc8850",
          "error": "#8c0327",
          },
        },
      ],
  },
}
