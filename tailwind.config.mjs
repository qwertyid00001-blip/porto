/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          lime: '#D4FF32',
          'lime-light': '#E5FF75',
          'lime-dark': '#B0D920',
          glow: 'rgba(212, 255, 50, 0.35)',
        },
        surface: {
          bg: '#07090E',
          card: '#0D121F',
          'card-subtle': '#121829',
          border: '#1B2438',
          'border-highlight': '#2A3755',
          muted: '#8E9BAE',
          light: '#F8FAFC',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-lime': '0 0 35px -5px rgba(212, 255, 50, 0.3)',
        'glow-card': '0 10px 40px -10px rgba(0, 0, 0, 0.7)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
};

