/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      // Tes couleurs personnalisées (formatées pour correspondre à ta structure 'lb-blue' etc.)
      colors: {
        lb: {
          blue: '#0B1DBB',
          yellow: '#FFD500',
          pink: '#FF0080',
          grey: '#262626',
          beige: '#FFF3E0',
        }
      },
      // Tes polices (J'ai mis à jour "script" pour utiliser Vibur comme dans ton HTML)
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        script: ['"Vibur"', 'cursive'],
      },
      // Tes animations personnalisées récupérées du HTML
      animation: {
        'spin-slow': 'spin 12s linear infinite',
        'marquee': 'marquee 240s linear infinite',
        'marquee-reverse': 'marqueeReverse 240s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'blob': 'blob 7s infinite',
        'slide-right': 'slideRight 8s linear infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
      },
      // Les définitions des mouvements (keyframes)
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marqueeReverse: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '10%': { opacity: '1' },
          '90%': { opacity: '1' },
          '100%': { transform: 'translateX(100vw)', opacity: '0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}

