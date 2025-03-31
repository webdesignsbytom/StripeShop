/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg': "url('../assets')",
      },
      boxShadow: {
        input: 'inset 1px 1px 6px 1px #00000014',
        cardShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        cardShadowBold: 'rgba(0, 0, 0, 0.34) 5px 4px 16px',
      },
      colors: {
        'main-background': '#f8fafc',
        'main-background-dark': '#11121a',
        'nav-background': '#334155',
        'alt-background': '#334155',
        'alt-colour': '#dcbc90',
        'text-colour': '#dcbc90',
        'text-colour-dark': '#e6e6ef',
        'hover-colour': '#222533',
        'hover-colour-dark': '#222533',
        'border-main': '#cbd5e1',
        'border-main-dark': '#42434a',
        'active-colour': '#42434a',
        'active-colour-dark': '#5e63ff',
        'error-red': '#dc2626',
        'success-green': '#16a34a',
        'hyperlink-colour': '#2563EB',
        'colour1': '#ffffff',
        'colour2': '#000000',
        'colour3': '#fdf7f6',
        'colour4': '#faebe7',
        'colour5': '#f9d6cd',
        'colour6': '#f2ab9b',
        'colour7': '#374151', // Dark text
        'colour8': '#4b5563', // Light Text
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      gridTemplateRows: {
        reg: 'auto 1fr',
        rev: '1fr auto',
        a1a: 'auto 1fr auto',
      },
      gridTemplateColumns: {
        reg: 'auto 1fr',
        rev: '1fr auto',
        a1a: 'auto 1fr auto',
      },
      screens: {
        xxs: '390px',
        xs: '422px',
      },
      zIndex: {
        '100': '100',
        max: '999'
      }
    },
  },
  plugins: [],
};
