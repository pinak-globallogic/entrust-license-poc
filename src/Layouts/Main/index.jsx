import Grid from "@mui/material/Grid";
import Header from "../Header/index";
import ContentLayout from "./ContentLayout";

const style = {
  layout: { minHeight: "100%" },
};

const LayoutWrapper = (props) => {
  console.log(props);
  return (
    <Grid container direction="column" sx={style.layout}>
      <Header />
      <ContentLayout {...props} />
    </Grid>
  );
};

export default LayoutWrapper;
