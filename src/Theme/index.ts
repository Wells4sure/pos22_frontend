import { colors, createTheme } from "@mui/material";
import typography from "./typography";

const theme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: colors.common.white,
      paper: colors.common.white,
    },
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    text: {
      primary: colors.blueGrey[900],
      secondary: colors.blueGrey[600],
    },
  },
  typography,
  spacing: 10,
});

export default theme;
