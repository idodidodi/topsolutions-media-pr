/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#002633',
          navy: '#003E53',
          teal: '#08536b',
          cyan: '#18A1BB',
          cyanHover: '#13899f',
          cyanLight: '#e6f7fa',
          cyanGlow: 'rgba(24, 161, 187, 0.25)',
          blue: '#0170B9',
          sky: '#6EC1E4',
          indigo: '#262262',
          accent: '#61CE70',
          accentDark: '#0fa35b',
          surface: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
          muted: '#64748B',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 25px -5px rgba(24, 161, 187, 0.35)',
        'glow-blue': '0 0 30px -5px rgba(1, 112, 185, 0.3)',
        'premium': '0 20px 40px -15px rgba(0, 62, 83, 0.12)',
        'card-hover': '0 25px 50px -12px rgba(0, 62, 83, 0.18)',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #002633 0%, #003E53 45%, #054c64 70%, #0170B9 100%)',
        'teal-glow': 'radial-gradient(circle at 50% 50%, rgba(24, 161, 187, 0.15) 0%, transparent 70%)',
        'brand-radial': 'radial-gradient(ellipse at top, #08536b 0%, #003E53 50%, #00222e 100%)',
        'glass-card': 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 100%)',
      }
    },
  },
  plugins: [],
}
