/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      borderRadius: {
        xs: '2px',
        sm: '3px',
        md: '8px',
        lg: '12px',
        xl: '16px'
      },
      boxShadow: {
        'xs': '0 0 1 0 #14141429',
        '3xl': '0 35px 60px -15px #14141429'
      },
      fontSize: {
        sm: '0.9rem',
        md: '1rem',
        h5: '1rem',
        h4: '3rem',
        h3: '4rem',
        h2: '5rem',
        h1: '6rem'
      },
      lineHeight: {
        xs: '115%',
        sm: '120%',
        md: '133%',
        lg: '150%',
        xl: '170%',
        xxl: '200%'
      },
      spacing: {
        'quark': '4px',
        'nano': '7px',
        '3xs': '16px',
        '2xs': '24px',
        'xs': '32px',
        'sm': '40px',
        'md': '48px',
        'lg': '56px',
        'xl': '64px',
        '2xl': '80px',
        '3xl': '120px',
        'huge': '160px',
        'giant': '200px'
      }
    }
  },
  plugins: []
};
