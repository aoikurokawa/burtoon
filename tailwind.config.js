  // tailwind.config.js
  module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       extend: {
        backgroundImage: {
          // hero: "url('/images/hero-bg.png')",
        },
         colors: {
           'gv-gold': '#BBA573',
           'gv-blue': '#3B5998',
         }
       },
     },
     variants: {
       extend: {},
     },
     plugins: [],
   }
