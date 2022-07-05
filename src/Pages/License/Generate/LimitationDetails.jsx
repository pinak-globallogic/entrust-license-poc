import { FormControlLabel, RadioGroup } from "@mui/material";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import { useSelector, useDispatch } from "react-redux";
import { updateLimitation } from "Redux/Slices/generateLicenseSlice";
import { CustomCard, CustomCardContent } from "Utilty";

const EXPIRYDAYS = "Expiry in days:";
const NOEXPIRY = "No expiry Date";
const SPECIFICDATE = "Specific date";

const LimitationDetails = () => {
  const limitation = useSelector((state) => state.generateLicense.limitation);
  const dispatch = useDispatch();

  const radioHandler = (e) => {
    dispatch(updateLimitation({ ...limitation, select: e.target.value }));
  };

  const onLimitCountChange = (e) => {
    dispatch(updateLimitation({ ...limitation, limitCount: e.target.value }));
  };

  const onExpirationChange = (e) => {
    dispatch(updateLimitation({ ...limitation, expiration: e.target.value }));
  };

  return (
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
          <Grid item mr={5}>
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
              value={limitation.limitCount}
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
        <Grid item mb={1} mt={8}>
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
            value={limitation.select}
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
                  disabled={limitation.select !== EXPIRYDAYS}
                  label="Number of days"
                  variant="outlined"
                  size="small"
                  type="number"
                  required
                  value={limitation.expiration}
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
                  disabled={limitation.select !== SPECIFICDATE}
                  defaultValue={new Date().toISOString().slice(0,10)}
                  inputProps={{
                    min: new Date().toISOString().slice(0, 10),
                  }}
                  variant="outlined"
                  label="Birthday"
                  placeholder="Birthday"
                  type="date"
                  size="small"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={limitation.expiration}
                  onChange={onExpirationChange}
                />
              </Grid>
            </Grid>
          </RadioGroup>
        </Grid>
      </CustomCardContent>
    </CustomCard>
  );
};

export default LimitationDetails;