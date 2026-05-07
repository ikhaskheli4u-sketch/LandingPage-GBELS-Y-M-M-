/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e4f1ff',
          100: '#bad7ff',
          500: '#1d4ed8',
          600: '#1e40af'
        },
        gold: {
          50: '#fdf7e9',
          100: '#f7e1b5',
          400: '#facc6b',
          500: '#eab308'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'sans-serif'],
        sindhi: ['Lateef', 'Noto Sans Arabic', 'Noto Nastaliq Urdu', 'serif']
      },
      boxShadow: {
        glass: '0 18px 45px rgba(15,23,42,0.55)'
      },
      backgroundImage: {
        'sindhi-pattern':
          'radial-gradient(circle at 1px 1px, rgba(250,204,21,0.15) 1px, transparent 0)',
        'hero-gradient':
          'radial-gradient(circle at top left, rgba(59,130,246,0.45), transparent 55%), radial-gradient(circle at bottom right, rgba(234,179,8,0.4), transparent 55%)'
      },
      backgroundSize: {
        'pattern-size': '28px 28px'
      }
    }
  },
  plugins: []
};

