/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        campblue: "#1D3B41",
        campbrown: "#6B3D1A"
      },
      fontFamily: {
        preten100: "Pretendard-Thin",
        preten200: "Pretendard-ExtraLight",
        preten300: "Pretendard-Light",
        preten400: "Pretendard-Regular",
        preten500: "Pretendard-Medium",
        preten600: "Pretendard-SemiBold",
        preten700: "Pretendard-Bold",
        preten800: "Pretendard-ExtraBold",
        preten900: "Pretendard-Black"
      },
      boxShadow: {
        mainBoxShadow: "0 2px 8px rgba(0, 0, 0, 0.25)"
      }
    }
  },
  plugins: []
};
