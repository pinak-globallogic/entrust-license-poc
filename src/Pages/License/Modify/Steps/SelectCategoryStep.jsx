import { useSelector } from "react-redux";

import { CustomCard, CustomCardContent } from "utilty";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const SelectCategoryStep = () => {
  const licenseDetails = useSelector((state) => state.modifyKey.licenseDetails);

  return (
    <CustomCard>
      <CustomCardContent>
        <Grid item mb={1}>
          <Typography variant="h6">
            Product Key to edit: {licenseDetails.oldLicense}
          </Typography>
        </Grid>
        <Grid item mb={15}>
          <Typography variant="caption">
            Select the category you want to change on the right.
          </Typography>
        </Grid>
        <Grid item container xs pt={1}></Grid>
      </CustomCardContent>
    </CustomCard>
  );
};

export default SelectCategoryStep;
