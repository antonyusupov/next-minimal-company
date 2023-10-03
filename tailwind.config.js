/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background-image-about': 'url("/images/aboutBg.jpg")',
      },
      colors: {
        'custom_red': '#DC2B46',
        'custom_yellow': '#EDF738',
        'custom_blue': '#3E6DD9',
        'custom_White': '#E8E8E8'
      },
    },
  },
  plugins: [],
}
