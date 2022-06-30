import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { CustomCard, CustomCardContent } from "./GenerateLicense";
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import { RadioGroup } from "@mui/material";
import { useContext, useState } from "react";
import { AppContext } from "App";

const EXPIRYDAYS = "Expiry in days:";
const NOEXPIRY = "No expiry Date";
const SPECIFICDATE = "Specific date";

const LimitationDetails = () => {
  const { state, setState } = useContext(AppContext);
  const [radioValue, setRadioValue] = useState("No expiry Date");

  const radioHandler = (e) => {
    setRadioValue(e.target.value);
  };

  const onLimitCountChange = (e) => {
    setState({
      ...state,
      limitation: {
        ...state.limitation,
        limitCount: e.target.value,
      },
    });
  };

  const onExpirationChange = (e) => {
    setState({
      ...state,
      limitation: {
        ...state.limitation,
        expiration: e.target.value,
      },
    });
  };

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
            <Grid item mr={3}>
              <TextField
                label="Limit Count"
                variant="outlined"
                size="small"
                type="number"
                InputProps={{
                  type: "number",
                  inputProps: { min: 1, max: 40 },
                }}
                required
                value={state.limitation.limitCount}
                onChange={onLimitCountChange}
              />
            </Grid>
            <Grid item pr={1}>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Site license or unlimited"
              />
            </Grid>
          </Grid>
        </CustomCardContent>

        <CustomCardContent>
          <Grid item mb={1}>
            <Typography variant="h6">Expiration date</Typography>
          </Grid>
          <Grid item mb={2}>
            <Typography variant="caption">
              The expiration date can be set to none, a specific day count from
              today on, or a set date.
            </Typography>
          </Grid>
          <Grid item mb={2}>
            <RadioGroup
              name="use-radio-group"
              defaultValue={NOEXPIRY}
              onChange={radioHandler}
              value={radioValue}
            >
              <FormControlLabel
                value={NOEXPIRY}
                label={NOEXPIRY}
                control={<Radio />}
              />
              <Grid item container xs pt={1}>
                <Grid item xs pr={2}>
                  <FormControlLabel
                    value={EXPIRYDAYS}
                    label={EXPIRYDAYS}
                    control={<Radio />}
                  />
                </Grid>
                <Grid item xs pr={2}>
                  <TextField
                    disabled={radioValue !== EXPIRYDAYS}
                    label="Number of days"
                    variant="outlined"
                    size="small"
                    type="number"
                    required
                    value={state.limitation.expiration}
                    onChange={onExpirationChange}
                  />
                </Grid>
              </Grid>
              <Grid item container xs pt={1}>
                <Grid item xs pr={2}>
                  <FormControlLabel
                    value={SPECIFICDATE}
                    label={SPECIFICDATE}
                    control={<Radio />}
                  />
                </Grid>

                <Grid item xs pr={2}>
                  <TextField
                    disabled={radioValue !== SPECIFICDATE}
                    defaultValue={new Date().toISOString()}
                    inputProps={{
                      min: new Date().toISOString().slice(0, 16),
                    }}
                    variant="outlined"
                    label="Birthday"
                    placeholder="Birthday"
                    type="datetime-local"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    value={state.limitation.expiration}
                    onChange={onExpirationChange}
                  />
                </Grid>
              </Grid>
            </RadioGroup>
          </Grid>
        </CustomCardContent>
      </CustomCard>
    </div>
  );
};

export default LimitationDetails;
