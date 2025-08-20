/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#BFA46F', // logo gold
          light: '#F5E9D4', // soft highlight
        },
        charcoal: {
          DEFAULT: '#232323', // luxury background
        },
        platinum: {
          DEFAULT: '#E5E5E5', // subtle accent
        },
        white: '#FFFFFF',
        primary: {
          DEFAULT: '#d97706',
          hover: '#b45309',
        },
        secondary: '#6b7280',
      },
      spacing: {
        'section': '2rem',
      },
      borderRadius: {
        'container': '0.75rem',
      },
      fontFamily: {
        sans: [
          'Inter Variable',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
        ],
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        scroll: 'scroll 16s linear infinite',
      },
    },
  },
  plugins: [],
}
