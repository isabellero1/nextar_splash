/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  daisyui: {
    themes: [{
      'lightt': {
        "primary": "#fafafa",
                  
         "secondary": "#e4e5f1",
                  
         "accent": "#d2d3db",
                  
         "neutral": "#9394a5",
                  
         "base-100": "#484b6a",
        },
      'bee': {
         
        "primary": "#dfc064",
                
        "secondary": "#f3f1e7",
                
        "accent": "#7b7875",
                
        "neutral": "#382f2f",
                
        "base-100": "#f5e3a2",
        },
      'darkk': {
           
          "primary": "#424549",
                    
          "secondary": "#7289da",
                    
          "accent": "#36393e",
                    
          "neutral": "#282b30",
                    
          "base-100": "#1e2124",
        },
    }, 
    "luxury",
  ],
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: "#1b1b1b", //black
        light: "#f5f5f5", //white
        primary: "#B63E96", // 240,86,199 pink
        primaryDark: "#58E6D9", // 80,230,217 blue
    }
    },
  },
  plugins: [require("daisyui")],
}

