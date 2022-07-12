import {Grid} from "@mui/material";
import DisplayDetails from "./DisplayDetails";
import ActivateLicenseWizard from "./ActivateLicenseWizard";

const ActivateLicenseWrapper = () => {
  return (
    <Grid container pr={3}>
      <Grid item xs={7}>
        <ActivateLicenseWizard />
      </Grid>
      <Grid item xs={5}>
        <DisplayDetails />
      </Grid>
    </Grid>
  );
};

export default ActivateLicenseWrapper;
