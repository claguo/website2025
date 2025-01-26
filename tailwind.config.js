/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Space Mono", "sans-serif"],
        sans: ["Inter"],
      },
      colors: {
        "bg-white": "#FFFFFF",
        "bg-gray": "#F6F6FA",

        "text-default": "#07081D",
        "text-subtle": "#413F69",

        blue: "#248EFF",
        pink: "#FF6BE1",
        green: "#00CE7F",

        "border-default": "#D0D0E2",

        "text-mochi": "#5447FF",
        "border-mochi": "#6B60FF",
        "bg-mochi": "#6B60FF33",

        "text-a11y": "#BD5500",
        "border-a11y": "#FF9E34",
        "bg-a11y": "#FF9E3433",

        "text-eto": "#0C56DC",
        "border-eto": "#0C56DC",
        "bg-eto": "#0C56DC33",

        "text-rcw": "#DA1699",
        "border-rcw": "#FF3EBF",
        "bg-rcw": "#FF3EBF33",
      },
      fontSize: {
        xs: "0.75rem",
        sm: "1rem",
        md: "1.5rem",
        lg: "2.5rem",
        xl: "4rem",
      },
      borderRadius: {
        md: "0.5rem",
      },
      spacing: {
        "4xs": "2px",
        "3xs": "8px",
        "2xs": "12px",
        xs: "16px",
        sm: "24px",
        md: "32px",
        lg: "40px",
        xl: "48px",
        "2xl": "64px",
        "3xl": "72px",
        "4xl": "96px",
      },
    },
  },
  plugins: [],
};

// old green: #00D287
