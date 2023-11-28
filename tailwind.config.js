/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,html}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '2rem',
      },
      center: true,
    },
    extend: {
      colors: {
        alpine: {
          10: '#6FFFE9',
          20: '#5BC0BE',
          30: '#3A506B',
          40: '#1C2541',
          50: '#0B132B',
        },
      },
      fontFamily: {
        dm: ['DM Sans', 'sans-serif'],
        lora: ['Lora', 'serif'],
        orbitron: ['Orbitron', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
