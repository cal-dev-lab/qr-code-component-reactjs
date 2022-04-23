module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'light-gray': 'hsl(212, 45%, 89%)',
      'gray-blue': 'hsl(220, 15%, 55%)',
      'dark-blue': 'hsl(218, 44%, 22%)',
    },
    extend: {
      fontFamily: {
        'outfit': ['"Outfit"', 'sans'],
      },
    },
  },
  plugins: [],
}
