import { Grid } from "@mui/material";
import DisplayDetails from "./DisplayDetails";
import ActivateLicenseWizard from "./ActivateLicenseWizard";
import Content from "Layouts/Content/Content";

const ActivateLicenseWrapper = () => {
  return (
    <Content pr={3}>
      <Grid item xs={7}>
        <ActivateLicenseWizard />
      </Grid>
      <Grid item xs={5}>
        <DisplayDetails />
      </Grid>
    </Content>
  );
};

export default ActivateLicenseWrapper;
