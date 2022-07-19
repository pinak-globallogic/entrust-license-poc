import Grid from "@mui/material/Grid";
import ApplicationContextProvider from "./ApplicationContextProvider";

const layoutStyle = {
  height: "calc(100vh - 64px)",
  marginTop: "64px",
};

const ContentLayout = (props) => {
  return (
    <Grid item container style={layoutStyle}>
      <ApplicationContextProvider {...props}></ApplicationContextProvider>
    </Grid>
  );
};

export default ContentLayout;
