import { useSelector } from "react-redux";

import { CustomCard, CustomCardContent } from "Utilty";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const SavedProductKeyStep = () => {
  const key = useSelector((state) => state.modifyKey.productKey);

  return (
    <CustomCard>
      <CustomCardContent>
        <Grid item mb={1}>
          <Typography variant="h5">Changes saved</Typography>
        </Grid>
        <Grid item mb={2}>
          <Typography variant="caption">
            Product Key {key.id} was updated
          </Typography>
        </Grid>
      </CustomCardContent>
    </CustomCard>
  );
};

export default SavedProductKeyStep;
