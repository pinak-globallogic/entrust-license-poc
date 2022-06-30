import Grid from "@mui/material/Grid";
import Header from "./Header/index";
import ContentLayout from "./Content/ContentLayout";

const style = {
  layout: { minHeight: "100%" },
};

const LayoutWrapper = (props) => {
  return (
    <Grid container direction="column" sx={style.layout}>
      <Header />
      <ContentLayout {...props} />
    </Grid>
  );
};

export default LayoutWrapper;
