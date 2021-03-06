module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  i18n: {
    locales: ["en-US", "vi-VN"],
    defaultLocale: "en-US",
  },
  theme: {
    screens: {
      tablet: "768px",
      laptop: "1024px",
      desktop: "1440px",
    },
    colors: {
      svg: "#715DF2",
      alert: "#e53170",
      white: "#f5f6fa",
      background: "#fffffe",
      main: "#f2eef5",
      btn: "#4fc4cf",
      btn_text: "#181818",
      headline: "#181818",
      para: "#2e2e2e",
      divider: "#DFD5D5",

      background_dark: "#0f0e17",
      main_dark: "#fffffe",
      btn_dark: "#ff8906",
      btn_text_dark: "#fffffe",
      headline_dark: "#fffffe",
      para_dark: "#a7a9be",
    },
    fontFamily: {
      inter: ['"Inter"', "sans-serif"],
      pacifico: ['"Pacifico"', "cursive"],
    },
  },
  variants: {
    extend: {
      backgroundColor: ["checked"],
      borderColor: ["checked"],
      inset: ["checked"],
      zIndex: ["hover", "active"],
    },
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
  },
};
