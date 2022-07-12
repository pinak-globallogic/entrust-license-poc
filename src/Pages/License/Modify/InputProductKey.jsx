import { CustomCard, CustomCardContent } from "Utilty";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const InputProductKey = () => {
  return (
    <CustomCard>
      <CustomCardContent>
        <Grid item mb={1}>
          <Typography variant="h6">Input Product Key</Typography>
        </Grid>
        <Grid item mb={2}>
          <Typography variant="caption">
            Input the product key that you want to modify.
          </Typography>
        </Grid>

        <Grid item container xs pt={1}>
          <Grid item mr={5}>
            <TextField label="Product Key" variant="outlined" size="small" />
          </Grid>
        </Grid>
      </CustomCardContent>
    </CustomCard>
  );
};

export default InputProductKey;
