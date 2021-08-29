module.exports = {
  prefix: '',
  purge: {
    content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
  },
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        topBar: '76px',
      },
      colors: {
        primary: '#000000',
        secondary: '#737373',
        tertiary: '#b3b3b3',
        success: '#208368',
        warning: '#f59a05',
        alert: '#d0021b',
        info: '#007aff',
        lightStroke: '#e1e1e1',
        mediumStroke: '#b3b3b3',
        blueHighLight: '#0000FF',
        link: '#0000FF',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
