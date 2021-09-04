module.exports = {
  prefix: '',
  purge: {
    content: ['./apps/**/*.{html,ts}', './libs/**/*.{html,ts}'],
  },
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      maxWidth: {
        container: '120rem',
        searchBox: '55rem',
      },
      minWidth: {
        screen: '100vw',
      },
      width: {
        container: '120rem',
        headerLogo: '13rem',
        searchBox: '55rem',
      },
      height: {
        headerGlobal: '7.6rem',
        headerLogo: '1.7rem',
        navBar: '4rem',
        18: '4.5rem',
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
        blackHighLight: '#343434',
        link: '#0000FF',
      },
      fontSize: {
        xs: '1rem',
        sm: '1.2rem',
        base: '1.4rem',
        lg: '1.6rem',
        xl: '1.6rem',
      },
      borderRadius: {
        DEFAULT: '0.2rem',
      },
      boxShadow: {
        standard: '0 0.2rem 0.2rem rgb(0 0 0 / 50%)',
      },
      spacing: {
        toHeaderGlobal: '7.6rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    container: false,
  },
};
