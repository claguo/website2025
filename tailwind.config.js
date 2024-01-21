/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Space Mono", "sans-serif"],
        sans: ["poppins"],
      },
      colors: {
        "yellow-green": "#C2E772",
        "light-green": "#7dfab1",
        green: "#19e98f",
        "dark-green": "#00885F",
        "bg-gray": "#ececec",
        gray: "#e1e1e1",
        "dark-gray": "#888888",
        "collab-purple": "#EBB2FC",
      },
      fontSize: {
        lg: ["3rem", "1.25"],
        sm: ["0.75rem", "1.25"],
        md: ["2rem", "1.25"],
      },
    },
  },
  plugins: [],
};

// old green: #00D287
