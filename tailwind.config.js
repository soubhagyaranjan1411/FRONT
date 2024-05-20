/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'layer': "url('./src/assets/layer.svg')",
        'back': "url('./src/assets/back.svg')",
        'side': "url('./src/assets/side.svg')",
        'triangle': "url('./src/assets/triangle.svg')"

        
      },
      colors:{
        'custom-red':'#f13e4b'
      }
    },
  },
  plugins: [],
}
