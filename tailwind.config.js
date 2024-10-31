/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#111827',
        },
        gray: {
          900: '#111827',
          800: '#1F2937',
          700: '#374151',
          600: '#4B5563',
          500: '#6B7280',
          400: '#9CA3AF',
          300: '#D1D5DB',
        },
        primary: {
          900: '#FF1A75',
          800: '#FF3385',
          700: '#FF4D94',
          600: '#FF66A3',
          500: '#FF80B2',
          400: '#FF99C2',
        },
        accent: {
          900: '#9333EA',
          800: '#A855F7',
          700: '#C084FC',
          600: '#D8B4FE',
          500: '#E9D5FF',
          400: '#F3E8FF',
        },
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px #FF1A75, 0 0 15px #FF1A75, 0 0 25px #FF1A75' },
          '100%': { boxShadow: '0 0 10px #9333EA, 0 0 20px #9333EA, 0 0 30px #9333EA' },
        },
      },
    },
  },
  plugins: [],
}