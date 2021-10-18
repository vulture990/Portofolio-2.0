/* eslint-disable */

module.exports = {
  purge: ["./components/**/*.tsx", "./pages/**/*.tsx"],
  theme: {
    backgroundColor: theme => ({
      ...theme('colors'),
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'danger': '#e3342f',
      'white':'#FFFFFF',
      'footer': '#EAFAFB',
      'icons':'#45AEB4',
      'input':'#26B37D24',
      "pinkbg": "#FF8484",
      'bannerbg'  :'#00578E',
      'banner':'#119DA4',
      'section':'#EAFAFB',
      'back':'#D4F5F7'

    }),
    textColor: {
      'background': '#066F95',
      'white':'#FFFFFF',
      'primary': '#FFFFFF',
      'paragraph':'#454545',
      'header':'#303441',
      'op':'#119DA4',
      'secondary': '#FF8484',
      'aesthetic':  '#45AEB4',
      'black': '#121212',
      'background': '#119DA4',
    },
    corePlugins: {
      // ...

     textColor: false,
    },
    
    fontFamily: {
      sans:
      '"Roboto Condensed", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      serif: 'Arvo, Georgia, Cambria, "Times New Roman", Times, serif',
      'body': ['"Open Sans"',],
      'display': ['Poppins', ],
    },
    extend: {
      boxShadow: {
        table: "5px 6px 0px #010b1b",
      },
    },
  },
    
  variants: {},
  plugins: [],
};