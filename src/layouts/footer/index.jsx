import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Logo from "../../Assets/Images/entrust-logo.png";

const Footer = ({ open }) => {
  return (
    <Grid
      container
      alignItems="center"
      p={1}
      sx={{
        borderTop: "1px solid rgb(226, 225, 221)",
        width: open ? "calc(100% - 240px)" : "100%",
        marginLeft: open ? "240px" : 0,
        transition: "margin-left ease-out 200ms, width ease-out 200ms",
      }}
    >
      <Grid item container direction="column" xs>
        <Grid item>
          <Typography variant="subtitle2">
            © 2022 Entrust Corporation. All rights reserved.
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle2" color="secondary">
            Terms of Service Privacy Statement
          </Typography>
        </Grid>
      </Grid>
      <Grid item container xs justifyContent="end">
        <img src={Logo} alt="Footer logo" loading="lazy" width={100} />
      </Grid>
    </Grid>
  );
};

export default Footer;
