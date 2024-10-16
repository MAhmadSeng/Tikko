/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        sourceSans: ['"Source Sans 3"', 'sans-serif'],
        garamond: ['EB Garamond', 'serif'],
        playfair: ['Playfair Display', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        baskerville: ['Libre Baskerville', 'serif'],
        caslon: ['DM Serif Text', 'serif'],
        cormorant: ['Cormorant Garamond', 'serif'],
        greatVibes: ['Great Vibes', 'cursive'],
        lora: ['Lora', 'serif'],
      },
      colors: {
        bgmain: '#000914',
        bgInputFeild:'#19212B',
        textlight: '#EFF0F1',
        textdark: '#828991',
        bg1: 'bg-surface-primary',
        linebg:'#A3A8AE'
      },
      fontSize: {
        '16': '16px',
        '18': '18px',
        '24': '24px',
      },
      lineHeight: {
        '20': '20px',
        '20.11': '20.11px',
        '17.6': '17.6px',
        '22': '22.63px',
        '30': '30.17px',
      },
      fontWeight: {
        normal: 400,
        semibold: 600,
        bold: 700,
      },
      boxShadow:{
        default: '0px 0px 10px rgba(0, 0,4,4)',
        customboxshadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      
      },
      screens: {
        xs: '320px',
        sm: '425px',
        md: '768px',
      },
      borderRadius: {
        '20': '20px',
        '30': '30px',
        '50': '50px',
        '5':'5px'
      },
      padding: {
        'overall': '30px',
      },
    },
  },
  plugins: [],
}
