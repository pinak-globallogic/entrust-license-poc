import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { CustomCard, CustomCardContent } from "./../../../Utilty";


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
        </CustomCardContent>
      </CustomCard>
    </div>
  );
};

export default LimitationDetails;
