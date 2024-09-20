/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        black: "#313131",
        yellow: "#fdd201",
      },
      backgroundImage: {
        pageBg: "linear-gradient(45deg,#d2001a,#7462ff,#f48e21,#23d5ab)",
      },
      backgroundSize: {
        '300': '300% 300%',
      },
      animation: {
        'gradient-move': 'gradientMove 12s ease-in-out infinite',
      },
      keyframes: {
        gradientMove: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};
