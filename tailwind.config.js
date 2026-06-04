/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#030712',
        surface: '#0A0F1C',
        gold: { DEFAULT: '#F59E0B', light: '#FCD34D', dark: '#D97706' },
        violet: { DEFAULT: '#8B5CF6', light: '#A78BFA', dark: '#7C3AED' },
        emerald: { DEFAULT: '#10B981', light: '#34D399' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-slow': 'float 12s ease-in-out 2s infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'marquee': 'marquee 35s linear infinite',
        'marquee-reverse': 'marquee 35s linear infinite reverse',
        'aurora': 'aurora 12s ease infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'gradient': 'gradientShift 6s ease infinite',
        'fade-up': 'fadeUp 0.7s ease forwards',
        'scale-in': 'scaleIn 0.5s ease forwards',
        'border-spin': 'borderSpin 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(0px) rotate(0deg)' },
          '33%': { transform: 'translateY(-18px) rotate(1deg)' },
          '66%': { transform: 'translateY(-8px) rotate(-1deg)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        aurora: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '33%': { backgroundPosition: '100% 50%' },
          '66%': { backgroundPosition: '50% 0%' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.08)' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(28px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.94)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        borderSpin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
    },
  },
  plugins: [],
}
