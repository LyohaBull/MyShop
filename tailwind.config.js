/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    fontFamily: {
      manrope: ['var(--font-manrope)'],
     },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#010717',
      primary: '#ff0042',
      gray: {
        lighter: '#FAF7F3',
        light: '#323232', 
        dark: '#010717',    
        txt: '#4c4d56',
        line: '#E5E5E5',
      },
    },
    extend: {
      backgroundImage: {
        'banner': "url('../components/home-page/img/banner1.jpg')",
      }
    },
  },
  plugins: [],
};
