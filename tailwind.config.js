/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'pure-black': {
          DEFAULT: '#000000',
          50: '#F5F5F5',
          100: '#E5E5E5',
          200: '#CCCCCC',
          300: '#999999',
          400: '#666666',
          500: '#4D4D4D',
          600: '#333333',
          700: '#1A1A1A',
          800: '#0D0D0D',
          900: '#000000',
        },
        'neon-cyan': {
          DEFAULT: '#00F0FF',
          50: '#E6FEFF',
          100: '#B3FCFF',
          200: '#80FAFF',
          300: '#4DF8FF',
          400: '#1AF4FF',
          500: '#00F0FF',
          600: '#00BDD1',
          700: '#008A9E',
          800: '#00576A',
          900: '#002437',
        },
        'neon-green': {
          DEFAULT: '#00FF41',
          50: '#E6FFF0',
          100: '#B3FFD1',
          200: '#80FFB3',
          300: '#4DFF94',
          400: '#1AFF75',
          500: '#00FF41',
          600: '#00CC34',
          700: '#009926',
          800: '#006619',
          900: '#00330C',
        },
        'secondary-grey': {
          DEFAULT: '#F7F9FC',
          50: '#FFFFFF',
          100: '#F7F9FC',
          200: '#E8EDF4',
          300: '#D1DBE8',
          400: '#BAC9DC',
          500: '#A3B7D0',
          600: '#7B92B0',
          700: '#5D7190',
          800: '#455468',
          900: '#2D3740',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'hover': '0 4px 25px rgba(0, 102, 204, 0.15)',
        'neon': '0 0 20px rgba(0, 240, 255, 0.5), 0 0 40px rgba(0, 240, 255, 0.3)',
        'neon-lg': '0 0 30px rgba(0, 240, 255, 0.6), 0 0 60px rgba(0, 240, 255, 0.4)',
        'green-glow': '0 0 20px rgba(0, 255, 65, 0.5), 0 0 40px rgba(0, 255, 65, 0.3)',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(rgba(0, 240, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 240, 255, 0.1) 1px, transparent 1px)',
        'black-gradient': 'linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #000000 100%)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)' },
          '100%': { boxShadow: '0 0 40px rgba(0, 240, 255, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}

