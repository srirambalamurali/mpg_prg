/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: {
          50: '#eaf2ff',
          100: '#cad8ef',
          200: '#95a8ce',
          300: '#6478ab',
          400: '#3d4f7b',
          500: '#243357',
          600: '#18233c',
          700: '#11182e',
          800: '#0b1224',
          900: '#070d1a',
          950: '#050816',
        },
        electric: {
          50: '#e6feff',
          100: '#bafcff',
          200: '#7cf4ff',
          300: '#3be9f8',
          400: '#16d5e9',
          500: '#08bdd1',
          600: '#0895a6',
          700: '#0b7683',
          800: '#0e5f68',
          900: '#114e57',
        },
        neon: {
          50: '#ecfff7',
          100: '#d0ffe9',
          200: '#a1ffd4',
          300: '#69f5b4',
          400: '#33e38d',
          500: '#18c774',
          600: '#0fa45f',
          700: '#0e824d',
          800: '#10653e',
          900: '#0f5335',
        },
        amberglow: {
          400: '#f9c74f',
          500: '#f8961e',
          600: '#f3722c',
        },
      },
      boxShadow: {
        glass: '0 24px 80px rgba(3, 8, 32, 0.45)',
        neon: '0 0 0 1px rgba(62, 240, 255, 0.18), 0 0 40px rgba(62, 240, 255, 0.18)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        glow: {
          '0%, 100%': { opacity: '0.6' },
          '50%': { opacity: '1' },
        },
        sweep: {
          '0%': { transform: 'translateX(-120%) rotate(12deg)' },
          '100%': { transform: 'translateX(120%) rotate(12deg)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        sweep: 'sweep 8s linear infinite',
      },
      fontFamily: {
        display: ['Space Grotesk', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'radial-grid': 'radial-gradient(circle at top, rgba(62,240,255,0.18), transparent 32%), linear-gradient(180deg, rgba(5,8,22,0.9), rgba(5,8,22,1))',
      },
    },
  },
  plugins: [],
};
