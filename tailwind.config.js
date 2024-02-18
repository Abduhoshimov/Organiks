/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        Arapawa: "#274C5B",
        salaPaduate: "#7EB693",
        FunkyYellow: "#EFD372",
        DiscoBall: "#D4D4D4",
        Doctor: "#F9F8F8",
        HeavySugar: "#EFF6F1",
        CityRain: "#525C60",
        DRwhite: "#FAFAFA",
        ChristmasSilver: "#E0E0E0",
        SeaLettuce: "#68A47F",
        FortressGrey: "#B8B8B8",
        PeacefulRain: "#F1F8F4",
        Coronation: "#ECECEC",
        SnowCrystalGreen: "#E3F1E9",
      },
      container: {
        center: true,
        padding: "20px",
        screens: {
          desc: "1600px"
        }
      }
    },
    fontFamily: {
      ttyelow: "Yellowtail, cursive"
    },
    
  },
  plugins: [],
}