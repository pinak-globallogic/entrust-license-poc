import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import { CustomCard, CustomCardContent } from "..";

const LimitationCard = ({ data }) => {
  return (
    <CustomCard>
      <CustomCardContent>
        <Grid item xs>
          <Chip label="Limitations" />
        </Grid>
        <Grid item xs pt={2}>
          <TextField
            label="LIMIT COUNT"
            disabled
            variant="standard"
            fullWidth
            value={data.limitCount}
          />
        </Grid>
        <Grid item xs pt={2}>
          <TextField
            label="EXPIRATION"
            disabled
            variant="standard"
            fullWidth
            value={data.expiration}
          />
        </Grid>
      </CustomCardContent>
    </CustomCard>
  );
};

export default LimitationCard;
