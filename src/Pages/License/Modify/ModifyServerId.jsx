import { CustomCard, CustomCardContent } from "Utilty";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const ModifyServerId = () => {
  return (
    <CustomCard>
      <CustomCardContent>
        <Grid item mb={1}>
          <Typography variant="h5">
            Change associated License Server Id
          </Typography>
        </Grid>
        <Grid item mb={2}>
          <Typography variant="caption">Rehosting</Typography>
        </Grid>
        <Grid item container xs pt={1}>
          <Grid item mr={5}>
            <TextField
              label="Old License Server ID"
              variant="outlined"
              size="small"
              value="234234-234234-234234-234234"
              disabled="true"
            />
          </Grid>
        </Grid>
        <br /> <br />
        <Grid item container xs pt={1}>
          <Grid item mb={1}>
            <Typography variant="caption">
              Insert the new License Server Id the product key should be looked
              to.
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs pt={1}>
          <Grid item mr={5}>
            <TextField
              label="Old License Server ID"
              variant="outlined"
              size="small"
              value="Input text"
            />
          </Grid>
        </Grid>
      </CustomCardContent>
    </CustomCard>
  );
};

export default ModifyServerId;
