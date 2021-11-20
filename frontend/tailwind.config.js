module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        fontSize: {
            '7.5xl': '5.5rem'
        },
    },
  },
  variants: {
    extend: {
        backgroundColor: ['active']
    },
  },
  plugins: [
      require('tailwindcss-debug-screens'),
    //   require('@tailwindcss/forms'),
  ],
}
