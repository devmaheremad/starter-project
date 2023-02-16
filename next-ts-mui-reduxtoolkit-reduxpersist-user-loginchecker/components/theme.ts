import { Open_Sans } from "@next/font/google";
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const openSans = Open_Sans({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

let theme = createTheme({
  palette: {
    primary: {
      main: "#f51997",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: openSans.style.fontFamily,
  },
});

theme = responsiveFontSizes(theme);

// Create a theme instance.
export default theme;
