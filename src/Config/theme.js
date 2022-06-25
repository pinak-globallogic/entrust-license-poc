import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: { main: "#87189D" },
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
