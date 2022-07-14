import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CustomCardContent } from "Utilty";
import TextField from "@mui/material/TextField";

const OptionalDetails = () => {
  return (
    <div>
      <CustomCardContent>
        <Grid item mb={1}>
          <Typography id="optional-comment-title" variant="h6">
            Optional comment
          </Typography>
        </Grid>
        <Grid item mb={2}>
          <Typography id="optional-comment-subtitle" variant="caption">
            If you want, you can set a comment or leave it blank.
          </Typography>
        </Grid>
        <Grid item mb={5}>
          <TextField
            id="optional-comment-field"
            label="Optional comment"
            variant="outlined"
            size="small"
            required
            value=""
          />
        </Grid>
      </CustomCardContent>
    </div>
  );
};

export default OptionalDetails;
