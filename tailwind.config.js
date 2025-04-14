/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',  // for App Router
    './pages/**/*.{js,ts,jsx,tsx}', // in case you're mixing routing styles
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage :{
        'heroBg' : "url('/heroBg.jpg')",
        'aboutBg' : "url('/aboutBg.jpg')",
        'gridBg' : "url('/gridMdBackground.svg')",
        'galleryBg1': "url('/gallery1.jpg')"
      }
    },
  },
  plugins: [],
};
