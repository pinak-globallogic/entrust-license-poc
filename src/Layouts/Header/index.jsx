import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";

const Header = () => {
  return (
    <Grid item mb={8}>
      <AppBar position="fixed">
        <Toolbar />
      </AppBar>
    </Grid>
  );
};

export default Header;
