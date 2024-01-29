/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    },

    fontFamily: {
      'logo': ['"Gurajada"', 'sans-serif'],
    },

    colors: {
      "primary-hover": "#127DFF",
      "secondary-hover": "#DEDEE3",
      "secondary": "#EDF0F2",
      "typo": "#454545",
      "brandtypo": "#986E00",
      "graylight": "#BAC0C4",
      "graydark": "#53616B",


      "blue": "#86aed8",
      "indigo": "#6610f2",
      "purple": "#c1b9db",
      "pink": "#e83e8c",
      "red": "#ffb8b8",
      "orange": "#fd7e14",
      "yellow": "#feeccb",
      "green": "#93e3c0",
      "teal": "#20c997",
      "cyan": "#17a2b8",
      "primary": "#0f70e6",
      "success": "#93e3c0",
      "info": "#d7eff3",
      "warning": "#feeccb",
      "danger": "#ffb8b8",
      "light": "#e9ebec",
      "dark": "#454545",
    }
  },
  plugins: [],
}

