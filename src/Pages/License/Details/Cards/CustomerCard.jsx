import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import { CustomCard, CustomCardContent } from "..";

const CustomerCard = ({ data }) => {
  return (
    <CustomCard>
      <CustomCardContent>
        <Grid item xs>
          <Chip label="Customer" color="secondary" />
        </Grid>
        <Grid item xs pt={2}>
          <TextField disabled variant="standard" fullWidth value={data.name} />
        </Grid>
      </CustomCardContent>
    </CustomCard>
  );
};

export default CustomerCard;
