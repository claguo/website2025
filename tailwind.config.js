/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Space Mono', 'sans-serif']
      },
      colors: {
        'green': '#00D287',
        'mid-green': '#00D287',
        'dark-green': '#00A56A',
        'bg-gray': '#ececec',
        'gray': '#e1e1e1',
        'collab-purple': '#EBB2FC'
      },
      fontSize: {
        'lg': ['3rem', '1.25'],
        'sm': ['0.75rem'],
        'md': ['1.5rem']
      }
    },
  },
  plugins: [],
}

