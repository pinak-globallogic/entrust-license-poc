import FirstRunStepper from "./FirstRunStepper";
import Grid from "@mui/material/Grid";
import ResponsiveAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import logo from "../../Assets/Images/entrust-logo.png";

const FirstRunWrapper = () => {
  return (
    <>
      <ResponsiveAppBar>
        <Container>
          <Toolbar disableGutters>
            <img src={logo} alt="entrust-logo.png" style={{ height: "40px" }} />
          </Toolbar>
        </Container>
      </ResponsiveAppBar>
      <Grid container direction="row" alignItems="center" pt={4}>
        <FirstRunStepper />
      </Grid>
    </>
  );
};

export default FirstRunWrapper;
