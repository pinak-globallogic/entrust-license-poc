import AppBar from "../Header/Appbar";
import Grid from "@mui/material/Grid";

const Header = () => {
  return (
    <Grid item mb={8}>
      <AppBar position="fixed" />
    </Grid>
  );
};

export default Header;
