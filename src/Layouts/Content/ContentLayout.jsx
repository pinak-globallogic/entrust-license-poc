import Grid from "@mui/material/Grid";
import Content from "./Content";
import Sidenav from "../Nav/index";

const ContentLayout = (props) => {
  return (
    <Grid item container direction="row">
      <Sidenav xs={2} />
      <Content xs {...props} />
    </Grid>
  );
};

export default ContentLayout;
