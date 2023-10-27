/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['Space Mono', 'sans-serif'],
        'sans': ['poppins']
      },
      colors: {
        'lighter-green': '#00D287',
        'light-green': '#009E67',
        'green': '#007A50',
        'dark-green': '#00583A',
        'bg-gray': '#ececec',
        'gray': '#e1e1e1',
        'collab-purple': '#EBB2FC'
      },
      fontSize: {
        'lg': ['3rem', '1.25'],
        'sm': ['0.75rem'],
        'md': ['2rem', '1.25']
      }
    },
  },
  plugins: [],
}

// old green: #00D287

