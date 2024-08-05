import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      colors: {
        personal: {
          10: "#FFFFFF",
          20: "#EEEEEE",
          50: "#c5d8ff",
          100: "#97b7fb",
          200: "#789dea",
          300: "#5c83d4",
          400: "#4869b7",
          500: "#42588b",
          600: "#374665",
          700: "#283043",
          800: "#0f172a",
          900: "#0f195e",
          910: "#000000",
        },

        daintree: {
          50: "#e9f3f5",
          100: "#d3e6eb",
          200: "#99c1cc",
          300: "#689dad",
          400: "#225a70",
          500: "#002233",
          600: "#001d2e",
          700: "#001626",
          800: "#00101f",
          900: "#000b17",
          950: "#00070f",
        },
        rose: {
          50: "#fff2fc",
          100: "#ffe6f9",
          200: "#ffbfec",
          300: "#ff99dd",
          400: "#ff4db8",
          500: "#ff0088",
          600: "#e60073",
          700: "#bf0059",
          800: "#990042",
          900: "#73002c",
          950: "#4a001a",
        },
        sunglo: {
          50: "#fcfaf7",
          100: "#fcf6f0",
          200: "#f7e5da",
          300: "#f5d3c4",
          400: "#eba598",
          500: "#e37272",
          600: "#cc5c5c",
          700: "#ab3f3f",
          800: "#872929",
          900: "#661616",
          950: "#420909",
        },
        mariner: {
          50: "#f2f9fc",
          100: "#e8f6fc",
          200: "#c3e5f7",
          300: "#a0d1f2",
          400: "#5fa6e8",
          500: "#2273dd",
          600: "#1c63c7",
          700: "#124ba6",
          800: "#0c3685",
          900: "#072463",
          950: "#031440",
        },

        san_felix: {
          50: "#ebf7f2",
          100: "#daf0e6",
          200: "#a7d9bf",
          300: "#7ac298",
          400: "#33914f",
          500: "#076416",
          600: "#055913",
          700: "#044a0e",
          800: "#023b0a",
          900: "#012e07",
          950: "#011c03",
        },
        violent_violet: {
          50: "#f3ebf7",
          100: "#e6d8ed",
          200: "#c2a3d4",
          300: "#9d73ba",
          400: "#572d85",
          500: "#240552",
          600: "#1f044a",
          700: "#17023d",
          800: "#110230",
          900: "#0b0124",
          950: "#060017",
        },
        cola: {
          50: "#f5f2e9",
          100: "#ede8d5",
          200: "#d1c59d",
          300: "#b3a16b",
          400: "#7a5f25",
          500: "#422a00",
          600: "#3b2300",
          700: "#301b00",
          800: "#291400",
          900: "#1f0e00",
          950: "#140900",
        },

        burnt_umber: {
          50: "#F4E0D7",
          100: "#EECCBF",
          200: "#E1A08E",
          300: "#D46F5E",
          400: "#C13E33",
          500: "#912727",
          600: "#751F25",
          700: "#591821",
          800: "#3C101A",
          900: "#200910",
        },
      },
    },
  },
  plugins: [
    daisyui,
    function ({ addUtilities }) {
      const newUtilities = {
        "*:-webkit-scrollbar": {
          display: "none",
        },
      };
      addUtilities(newUtilities);
    },
  ],
};
