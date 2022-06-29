import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { CustomCard, CustomCardContent } from "./GenerateLicense";
import {FormControlLabel} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";


const LimitationDetails = () => {
  return (
    <div>
      <CustomCard>
        <CustomCardContent>
          <Grid item mb={1}>
            <Typography variant="h6">Limitations</Typography>
          </Grid>
          <Grid item mb={2}>
            <Typography variant="caption">
              The limit count needs to be between 1 and 40
            </Typography>
          </Grid>
          <Grid item container xs pt={1}>
            <Grid item>
              <TextField
                label="Limit Count"
                variant="outlined"
                size="small"
                required
                // value={state.customerName}
                // onChange={(e) =>
                //   setState({ ...state, customerName: e.target.value })
                // }
              />
            </Grid>
            <Grid item pr={1}>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Site license or unlimited" />
            </Grid>
          </Grid>
        </CustomCardContent>
      </CustomCard>
    </div>
  );
};

export default LimitationDetails;
