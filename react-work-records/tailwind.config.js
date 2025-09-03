/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'irs-blue': {
          50: '#f0f8ff',
          100: '#e3f2fd',
          200: '#bbdefb',
          300: '#90caf9',
          400: '#42a5f5',
          500: '#0066cc',
          600: '#0052a3',
          700: '#003d6b',
          800: '#002c4a',
          900: '#001a2e',
        },
        'status': {
          'open': '#fff3cd',
          'open-text': '#856404',
          'in-progress': '#cce5ff',
          'in-progress-text': '#004085',
          'resolved': '#d1edff',
          'resolved-text': '#0c5460',
          'suspended': '#f8d7da',
          'suspended-text': '#dc3545',
        }
      },
      fontFamily: {
        'sans': ['Source Sans Pro', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        'irs': '0 2px 8px rgba(0,0,0,0.1)',
        'irs-hover': '0 4px 12px rgba(0,0,0,0.15)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
