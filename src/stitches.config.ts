import { createStitches } from "@stitches/react";

export const {css, theme, styled, createTheme } = createStitches({
  theme: {
    colors: {
      backgroundDefault: "white",
      black: "rgba(0, 0, 0, 0.87)",
      blackMedium: "rgba(0, 0, 0, 0.60)",
      blackDisable: "rgba(0, 0, 0, 0.37)",
      borderDefault: "#ced4da",
      borderFocus: "#0d6efd",
    },
    shadows: {
      inputFocus: "0 0 0px 3px #0d6efd40",
    },
    space: {
      1: "8px",
      2: "12px",
      3: "16px",
      4: "20px",
      5: "24px",
      6: "28px",
      7: "32px",
      8: "36px",
      9: "40px",
      10: "44px",
      11: "48px",
      12: "52px",
    },
    radii: {
      1: "0px",
      2: "8px",
      3: "12px",
      4: "16px",
      5: "24px",
    },
    fontSizes: {
      1: "12px",
      2: "14px",
      3: "16px",
      4: "18px",
    },
    fonts: {
      1: "Poppins, sans-serif",
    },
  },
});