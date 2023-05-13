/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui:{
    themes: [
      {
        mytheme: {
          primary: "#ffffff",

          secondary: "#000",

          accent: "#cb9815",

          neutral: "#191D24",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#f62e36",
        },
      },
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

