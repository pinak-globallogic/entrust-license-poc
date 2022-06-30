import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { AppContext } from "App";
import { CustomCard, CustomCardContent } from "./GenerateLicense";

const OptionalDetails = () => {
  const { state, setState } = useContext(AppContext);
  const [errorText, setErrorText] = React.useState();
  let keyAmount = state.optional.keyAmount;

  const onChange = (event) => {
    if (event.target.value === "" || event.target.value < 1) {
      setErrorText("Field cannot be empty or less than 1");
      setState({
        ...state,
        optional: { ...state.optional, keyAmount: event.target.value },
        error: true,
      });
    } else {
      setErrorText("");
      setState({
        ...state,
        optional: { ...state.optional, keyAmount: event.target.value },
        error: false,
      });
    }
  };

  return (
    <div>
      <CustomCard>
        <CustomCardContent>
          <Grid item mb={1}>
            <Typography variant="h6">Optional comment</Typography>
          </Grid>
          <Grid item mb={2}>
            <Typography variant="caption">
              If you want, you can set a comment or leave it blank.
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              label="Optional comment"
              variant="outlined"
              size="small"
              required
              value={state.optional.comment}
              onChange={(e) =>
                setState({
                  ...state,
                  optional: { ...state.optional, comment: e.target.value },
                })
              }
            />
          </Grid>
        </CustomCardContent>
        <CustomCardContent>
          <Grid item mb={1}>
            <Typography variant="h6">Amount of keys</Typography>
          </Grid>
          <Grid item mb={2}>
            <Typography variant="caption">
              In some instances you might need to generate multiple keys with
              identical settings. <br />
              Hence, you can specify amount of key generated. The default value
              is 1.
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              label="Amount of Keys"
              variant="outlined"
              size="small"
              type="number"
              required
              value={keyAmount}
              InputProps={{
                inputProps: { min: 1 },
              }}
              error={errorText}
              helperText={errorText}
              onChange={onChange}
            />
          </Grid>
        </CustomCardContent>
        <CustomCardContent>
          <Grid item mb={1}>
            <Typography variant="caption">
              You have now completed the key generator form. Please carefully
              review the settings on the right. <br />
              If you are happy with the settings, proceed to next screen to
              generate the keys.
            </Typography>
          </Grid>
        </CustomCardContent>
      </CustomCard>
    </div>
  );
};

export default OptionalDetails;
