/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        movil: '320px',
        inter: '425px,',
        
      },
      backgroundImage: {
        'custom-gradient': `radial-gradient(49% 81% at 45% 47%, #14FD6D96 0%, #073AFF00 100%),
                           radial-gradient(113% 91% at 17% -2%, #1B0161FF 1%, #FF000000 99%),
                           radial-gradient(142% 91% at -6% 74%, #0A1031FF 1%, #FF000000 99%), 
                           radial-gradient(142% 91% at 111% 84%, #1B0161FF 27%, #14FD6DFF 100%)`,
      },
      backgroundSize: {
        full: '100% 100%',
      },
      backgroundPosition: {
        'custom-position': '0px 0px, 0px 0px, 0px 0px, 0px 0px',
      },
      backgroundColor: {
        'black-bg': '#000000',
      },

      fontFamily: {
        Noto: "'Noto', monos",
        Sixtyfour: "'Sixtyfour', sans-serif",
      },
      plugins: [],
    },
  },
};