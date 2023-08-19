/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    variables: {
      DEFAULT: {
        tw: {
          shadow: '0px 4px 12px #2521581a'
        }
      }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    opacity: {
      "j-dark-300": '--tw-text-opacity',
    },
    fontSize: {
      xxs: "0.625rem",
      '6xl': '3.75rem',
      base: '1rem'
    },
    backgroundColor: {
      "j-dark-900": "rgb(14 11 51/var(--tw-bg-opacity))",
      "juni-dark-900": "rgb(41 37 99 / var(--tw-bg-opacity))",
      'juni-pink-600': "rgb(214 77 97/var(--tw-bg-opacity))"
    },
    // lineHeight: {
    //   'xxs': '1rem',
    //   sm: '1.25rem'
    // },
    boxShadow: {
      nav: "var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),0px 4px 12px #2521581a",
    },
    colors: {
      'j-dark-600': 'rgb(41 37 99 / var(--tw-text-opacity))',
      "j-dark-300": "rgb(148 146 177/var(--tw-text-opacity))",
      "juni-pink-600": "rgb(214 77 97/var(--tw-bg-opacity))",
    },
    height: {
      24: "6rem",
      12: '3rem',
      full: "100%"
    },
    
    width: {
      full: "100%",
      96: "24rem",
      20: '5rem',
    },
    borderColor: {
      transparent: "transparent"
    },
    lineHeight: {
      15: '3.75rem',
      base: '1rem',
      10: '2.5rem',
      14: '3.5rem'
    },
    spacing: {
      4: "1rem",
      15: "3.75rem",
      2: "0.5rem",
      1: "0.25rem",
      7: "1.75rem",
      md: "3.75rem",
      0: 0,
      12: "3rem",
      6: "1.5rem",
      8: '2rem',
      24: '6rem'
    },
  },
  plugins: [
  
  ],
};
