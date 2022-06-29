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
  components: {
    MuiChip: {
      styleOverrides: {
        root: {
          ".MuiChip-label": {
            marginRight: "2vh",
          },
          ".MuiSvgIcon-root": {
            color: "#F3DEF3 !important",
            position: "absolute",
            right: 0,
            cursor: "auto",
            marginRight: "1vh",
          },
        },
      },
    },
  },
});
