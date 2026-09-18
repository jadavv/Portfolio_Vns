/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          950: '#060911',
          900: '#0a0f1d',
          850: '#0d1527',
          800: '#111b33',
          700: '#1c2b4d',
        },
        cyber: {
          indigo: '#6366f1',
          cyan: '#06b6d4',
          emerald: '#10b981',
          purple: '#a855f7',
          amber: '#f59e0b',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Outfit', 'sans-serif'],
        heading: ['Outfit', 'Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        'glow-indigo': '0 0 25px rgba(99, 102, 241, 0.35)',
        'glow-cyan': '0 0 25px rgba(6, 182, 212, 0.35)',
        'card-glass': '0 20px 40px -15px rgba(0, 0, 0, 0.6)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-neon': 'linear-gradient(135deg, #6366f1 0%, #06b6d4 100%)',
        'gradient-accent': 'linear-gradient(135deg, #a855f7 0%, #6366f1 50%, #06b6d4 100%)',
      }
    },
  },
  plugins: [],
}
