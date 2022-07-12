import Grid from "@mui/material/Grid";
import Content from "./Content";
import Sidenav from "../Nav/index";

const layoutStyle = {
  height: "calc(100vh - 64px)",
  marginTop: "64px",
};

const ContentLayout = (props) => {
  return (
    <Grid item container style={layoutStyle}>
      <Sidenav xs={1.4} />
      <Content xs pt={0} {...props} />
    </Grid>
  );
};

export default ContentLayout;
