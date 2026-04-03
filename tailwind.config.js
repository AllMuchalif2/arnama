/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brutal: {
          bg:      '#f0f0f0',
          primary: '#3b82f6',
          accent:  '#60a5fa',
          black:   '#000000',
        }
      },
      boxShadow: {
        'brutal':       '8px 8px 0px 0px rgba(0,0,0,1)',
        'brutal-sm':    '4px 4px 0px 0px rgba(0,0,0,1)',
        'brutal-xs':    '3px 3px 0px 0px rgba(0,0,0,1)',
        'brutal-blue':  '8px 8px 0px 0px rgba(59,130,246,1)',
        'brutal-blue-sm':'4px 4px 0px 0px rgba(59,130,246,1)',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'Arial Black', 'Impact', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
