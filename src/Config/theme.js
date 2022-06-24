import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: { main: "#6D2077" },
    secondary: { main: "#B91685" },
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: "#fff",
      },
    },
  },
});
