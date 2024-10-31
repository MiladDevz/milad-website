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
        gray: {
          900: '#111827',
          800: '#1F2937',
          700: '#374151',
          400: '#9CA3AF',
          300: '#D1D5DB',
        },
        primary: {
          900: '#1E40AF',
          800: '#1E3A8A',
          700: '#1D4ED8',
          600: '#2563EB',
          500: '#3B82F6',
          400: '#60A5FA',
        },
        accent: {
          900: '#7C3AED',
          800: '#6D28D9',
          700: '#5B21B6',
          600: '#4C1D95',
          500: '#8B5CF6',
          400: '#A78BFA',
        },
      },
    },
  },
  plugins: [],
}