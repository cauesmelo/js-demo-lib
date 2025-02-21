import { createTheme, css } from "@mui/material";

export const chartColors = [
  "#ED1C24",
  "#000000",
  "#B22222",
  "#FFD700",
  "#FF5C57",
  "#8B0000",
  "#FFFFFF",
  "#333333",
  "#444444",
  "#888888",
  "#F0F0F0",
  "#E0E0E0",
  "#D0D0D0",
  "#C0C0C0",
  "#B0B0B0",
];

export const darkTheme = createTheme({
  palette: {
    background: {
      paper: "#000000",
      default: "#1A1A1A",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
    primary: {
      main: "#ED1C24",
      light: "#FF5C57",
      dark: "#B22222",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#000000",
      light: "#333333",
      dark: "#000000",
      contrastText: "#FFFFFF",
    },
    success: {
      main: "#FFD700",
      light: "#FFEA00",
      dark: "#B8860B",
      contrastText: "#000000",
    },
    info: {
      main: "#FFFFFF",
      light: "#FFFFFF",
      dark: "#CCCCCC",
      contrastText: "#000000",
    },
    warning: {
      main: "#FFD700",
      light: "#FFEA00",
      dark: "#B8860B",
      contrastText: "#000000",
    },
    error: {
      main: "#B22222",
      light: "#ED1C24",
      dark: "#8B0000",
      contrastText: "#FFFFFF",
    },
    teal: {
      50: "#FFE5E5",
      100: "#FFB3B3",
      200: "#FF8080",
      300: "#ED1C24",
      400: "#E0111A",
      500: "#B22222",
      600: "#991F1F",
      700: "#7D1A1A",
      800: "#661616",
      900: "#4D1212",
    },
    cerulean: {
      main: "#000000",
      light: "#333333",
      dark: "#000000",
      contrastText: "#FFFFFF",
    },
    cobalt: {
      main: "#FFD700",
      light: "#FFEA00",
      dark: "#B8860B",
      contrastText: "#000000",
    },
    lightGrey: {
      50: "#FFFFFF",
      100: "#F0F0F0",
      200: "#E0E0E0",
      300: "#D0D0D0",
      400: "#C0C0C0",
      500: "#B0B0B0",
      600: "#A0A0A0",
      700: "#909090",
      800: "#808080",
      900: "#707070",
    },
    darkGrey: {
      400: "#404040",
      500: "#303030",
      600: "#202020",
      700: "#101010",
      800: "#000000",
      900: "#000000",
    },
    transparency: {
      darkGrey: {
        70: "rgba(0, 0, 0, 0.7)",
        50: "rgba(0, 0, 0, 0.5)",
        30: "rgba(0, 0, 0, 0.3)",
        8: "rgba(0, 0, 0, 0.08)",
        4: "rgba(0, 0, 0, 0.04)",
        2: "rgba(0, 0, 0, 0.02)",
      },
      white: {
        4: "rgba(255, 255, 255, 0.04)",
        8: "rgba(255, 255, 255, 0.08)",
        12: "rgba(255, 255, 255, 0.12)",
        30: "rgba(255, 255, 255, 0.3)",
        50: "rgba(255, 255, 255, 0.5)",
        70: "rgba(255, 255, 255, 0.7)",
      },
      teal: {
        46: "rgba(237, 28, 36, 0.46)",
        30: "rgba(237, 28, 36, 0.3)",
        14: "rgba(237, 28, 36, 0.14)",
      },
      darkTeal: {
        46: "rgba(178, 34, 34, 0.46)",
        30: "rgba(178, 34, 34, 0.3)",
        14: "rgba(178, 34, 34, 0.14)",
      },
    },
    data: {
      darkTeal: "#B22222",
      shadeTeal: "#ED1C24",
      mediumTeal: "#E0111A",
      brightTeal: "#FF5C57",
      darkCobalt: "#000000",
      mediumCobalt: "#444444",
      brightCobalt: "#888888",
      darkViolet: "#B8860B",
      violet: "#FFD700",
      lightViolet: "#FFEA00",
      darkMagenta: "#8B0000",
      magenta: "#ED1C24",
      lightMagenta: "#FF5C57",
      darkOrange: "#B22222",
      orange: "#ED1C24",
      lightOrange: "#FF5C57",
      darkYellow: "#B8860B",
      yellow: "#FFD700",
      lightYellow: "#FFEA00",
      darkGrey: "#000000",
      mediumGrey: "#444444",
      lightGrey: "#888888",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "57px",
      lineHeight: "64px",
    },
    h2: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "45px",
      lineHeight: "52px",
    },
    h3: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "36px",
      lineHeight: "44px",
    },
    h4: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "32px",
      lineHeight: "40px",
    },
    h5: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "28px",
      lineHeight: "36px",
    },
    h6: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "24px",
      lineHeight: "32px",
    },
    subtitle1: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "22px",
      lineHeight: "28px",
    },
    subtitle2: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "16px",
      lineHeight: "24px",
    },
    subtitle3: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "14px",
      lineHeight: "20px",
    },
    label1: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "14px",
      lineHeight: "20px",
    },
    label2: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "12px",
      lineHeight: "16px",
    },
    label3: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "11px",
      lineHeight: "16px",
    },
    body1: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "16px",
      lineHeight: "24px",
    },
    body2: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "14px",
      lineHeight: "20px",
    },
    body3: {
      fontFamily: "Roboto, sans-serif",
      fontSize: "12px",
      lineHeight: "16px",
    },
    button: {
      fontFamily: "Montserrat, sans-serif",
      fontSize: "14px",
      lineHeight: "20px",
      textTransform: "none",
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: css`
        @import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap");
      `,
    },
  },
});

export const lightTheme = createTheme({
  ...darkTheme,
  palette: {
    ...darkTheme.palette,
    background: {
      paper: "#FFFFFF",
      default: "#F5F5F5",
    },
    text: {
      primary: "#000000",
      secondary: "rgba(0, 0, 0, 0.8)",
    },
  },
});
