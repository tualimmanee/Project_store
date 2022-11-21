/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      width: {
        20: "20px",
        80: "80px",
        100: "100px",
        120: "120px",
        130: "130px",
        150: "150px",
        190: "190px",
        225: "225px",
        250: "250px",
        300: "300px",
        340: "340px",
        350: "350px",
        375: "375px",
        420: "420px",
        460: "460px",
        656: "656px",
        880: "880px",
        508: "508px",
      },
      height: {
        40: "40px",
        80: "80px",
        120: "120px",
        130: "130px",
        150: "150px",
        225: "225px",
        300: "300px",
        340: "340px",
        370: "370px",
        420: "420px",
        510: "510px",
        600: "600px",
        650: "650px",
        685: "685px",
        800: "800px",
        "90vh": "90vh",
      },
      minWidth: {
        210: "210px",
        350: "350px",
        620: "620px",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        headingColor: "#2e2e2e",
        textColor: "#515151",
        cartNumBg: "#e80013",
        primary: "#f5f3f3",
        cardOverlay: "rgba(256,256,256,0.4)",
        lighttextGray: "#9ca0ab",
        card: "rgba(256,256,256,0.8)",
        cartBg: "#282a2c",
        cartItem: "#2e3033",
        cartTotal: "#343739",
        rowBG: "rgba(255,131,0,0.2)",
        borderCL: "#bce3db"
      },
      fontSize: {
        sm: ['15px', '19px'],
        base: ['16px', '24px'],
        lg: ['20px', '28px'],
        xl: ['24px', '32px'],
      },
      spacing: {
        '10px': '10px',
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
        '8': '8px',
        '19': '19px',
      }
      
      
    },
    
    plugins: [
      require("tailwind-scrollbar"),
    ],

  }
};