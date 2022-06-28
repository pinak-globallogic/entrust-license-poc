import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import { CustomCard, CustomCardContent, SmallChip } from "..";

const FeatureCard = ({ data }) => {
  return (
    <div>
      <CustomCard>
        <CustomCardContent>
          <Grid item xs>
            <Chip label="Features" color="secondary" />
          </Grid>
          <Grid item xs pt={2}>
            <TextField
              label="EDITION"
              disabled
              variant="standard"
              fullWidth
              value={data.edition}
            />
          </Grid>
          <Grid item container xs pt={1}>
            <Grid item xs pr={2}>
              <SmallChip label="Central Issuance Smart Card: True" />
            </Grid>
            <Grid item xs>
              <SmallChip label="Developer Name: 234234" />
            </Grid>
          </Grid>
        </CustomCardContent>
      </CustomCard>
    </div>
  );
};

export default FeatureCard;
