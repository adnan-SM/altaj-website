const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        orange: colors.orange,
        'warm-gray': colors.warmGray,
        teal: colors.teal,
      },
      fontfamily: {
        'open-sans': ['Open Sans']
      },
      transitionProperty: {
        'height': 'height',
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('https://htmlstream.com/front/assets/svg/components/abstract-shapes-20.svg')",
        'food-image-main': "url('https://images.unsplash.com/photo-1553578133-80f4d8cbd0db?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=485&q=80')",
      })
    },
  },
  variants: {
    extend: {
      transitionProperty: ['hover', 'focus'],
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
  ],
}
