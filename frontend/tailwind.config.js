export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0E1A3D',
        accent: '#FFB100',
        secondary: '#FF6B4A',
        eco: '#2EE6A6',
        surface: '#F7F9FC',
        textDark: '#14213D',
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        xl: '12px',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(14, 26, 61, 0.10)',
      },
    },
  },
  plugins: [],
};
