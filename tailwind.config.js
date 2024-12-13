/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'gradient': 'gradient 15s ease infinite',
        'float': 'float var(--particle-duration, 20s) ease-in-out infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': '0% 50%'
          },
          '50%': {
            'background-size': '400% 400%',
            'background-position': '100% 50%'
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translate(0, 0)',
          },
          '50%': {
            transform: 'translate(var(--translate-x, 100px), var(--translate-y, 100px))',
          },
        },
      },
    },
  },
  plugins: [],
};