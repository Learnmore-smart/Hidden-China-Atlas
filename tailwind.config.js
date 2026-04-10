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
        primary: '#16325B',
        secondary: '#2A4365',
        accent: '#4A5568',
        neutral: '#F8FAFC',
        'neutral-dark': '#1A202C',
        'neutral-muted': '#718096',
        'accent-emerald': '#0D9488',
        'accent-amber': '#F59E0B',
        'accent-rose': '#E11D48',
        'accent-sky': '#0284C7',
      },
      fontFamily: {
        sans: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'elegant': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.02)',
        'hover': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}