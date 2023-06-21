const toml = require("toml");
const fs = require("fs");
const path = require("path");
const configPath = path.join(__dirname, "config.toml");
const getConfig = fs.readFileSync(configPath, "utf8");
const theme = JSON.parse(JSON.stringify(toml.parse(getConfig)));

let font_base = Number(theme.params.fonts.font_size.base.replace("px", ""));

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./hugo_stats.json"],
  safelist: [{ pattern: /^swiper-/ }],

  theme: {
    screens: {
      sm: "540px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      colors: {
        text: theme.params.colors.default.text_color.default,
        light: theme.params.colors.default.text_color.light,
        dark: theme.params.colors.default.text_color.dark,
        primary: theme.params.colors.default.theme_color.primary,
        secondary: theme.params.colors.default.theme_color.secondary,
        body: theme.params.colors.default.theme_color.body,
        border: theme.params.colors.default.theme_color.border,
        "theme-light": theme.params.colors.default.theme_color.theme_light,
        "theme-dark": theme.params.colors.default.theme_color.theme_dark,
      },
      fontSize: {
        base: font_base + "px",
        h1: "2rem",
        "h1-sm": "1.6rem",
        h2: "1.5rem",
        "h2-sm": "1.2rem",
        h3: "1.25rem",
        "h3-sm": "1.15rem",
        h4: "1.1rem",
        h5: "1rem",
        h6: "0.9rem",
      },
      fontFamily: {
        primary: `"TeleNeoWeb","Helvetica",Arial,sans-serif;`,
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwind-bootstrap-grid")({
      generateContainer: false,
      gridGutterWidth: "2rem",
      gridGutters: {
        1: "0.25rem",
        2: "0.5rem",
        3: "1rem",
        4: "1.5rem",
        5: "3rem",
      },
    }),
  ],
};
