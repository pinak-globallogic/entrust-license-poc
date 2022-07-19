import { CustomCard, CustomCardContent } from "utilty";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { updateLicense } from "redux/slices/modifyKeySlice";

const ChangeProductKeyStep = () => {
  const licenseServerDetails = useSelector(
    (state) => state.modifyKey.licenseDetails
  );
  const dispatch = useDispatch();

  const updateNewLicenseServerId = (e) => {
    dispatch(
      updateLicense({
        ...licenseServerDetails,
        newLicense: e.target.value,
      })
    );
  };

  return (
    <CustomCard>
      <CustomCardContent>
        <Grid item mb={1}>
          <Typography variant="h6">
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
              value={licenseServerDetails.oldLicense}
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
              label="New License Server ID"
              variant="outlined"
              size="small"
              onChange={(e) => updateNewLicenseServerId(e)}
            />
          </Grid>
        </Grid>
      </CustomCardContent>
    </CustomCard>
  );
};

export default ChangeProductKeyStep;
