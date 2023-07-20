/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      
      colors : {
        mainColor : "#D20653" ,
        secondColor : "#9B0257",
        yellowColor : "#FDBC01",
        blackColor : "#414141" ,
        grayBoldColor : "#414141",
        grayColor : "#707070",
        whiteColor : "#FFFFFF",
        moveColor : "#44215D"
  
      }
    },
  },
  plugins: [],
}
