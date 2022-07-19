import { useSelector } from "react-redux";

import { CustomCard, CustomCardContent } from "utilty";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const SavedChangesStep = () => {
  const licenseDetails = useSelector((state) => state.modifyKey.licenseDetails);

  return (
    <CustomCard>
      <CustomCardContent>
        <Grid item mb={1}>
          <Typography variant="h5">Changes saved</Typography>
        </Grid>
        <Grid item mb={2}>
          <Typography variant="caption">
            Product Key {licenseDetails.oldLicense} was updated
          </Typography>
        </Grid>
      </CustomCardContent>
    </CustomCard>
  );
};

export default SavedChangesStep;
