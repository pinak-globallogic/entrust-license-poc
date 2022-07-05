import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";

import { CustomCard, CustomCardContent } from "Utilty";
import { useState } from "react";
import { updateOptionalDetails } from "Redux/Slices/generateLicenseSlice";

const OptionalDetails = () => {
  const state = useSelector((state) => state.generateLicense);
  console.log(state);
  const dispatch = useDispatch();
  const [errorText, setErrorText] = useState();

  const onChange = (event) => {
    if (event.target.value === "" || event.target.value < 1) {
      setErrorText("Field cannot be empty or less than 1");
      dispatch(
        updateOptionalDetails({
          ...state,
          keyAmount: event.target.value,
          error: true,
        })
      );
    } else {
      setErrorText("");
      dispatch(
        updateOptionalDetails({
          ...state,
          keyAmount: event.target.value,
          error: false,
        })
      );
    }
  };

  return (
    <div>
      <CustomCard>
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
              value={state.optionalComment}
              onChange={(e) =>
                dispatch(
                  updateOptionalDetails({
                    ...state,
                    optionalComment: e.target.value,
                  })
                )
              }
            />
          </Grid>
        </CustomCardContent>
        <CustomCardContent>
          <Grid item mb={1}>
            <Typography id="key-amount-title" variant="h6">
              Amount of keys
            </Typography>
          </Grid>
          <Grid item mb={2}>
            <Typography id="key-amount-subtitle2" variant="caption">
              In some instances you might need to generate multiple keys with
              identical settings. <br />
              Here you can specify the amount of keys being generated. The
              default value is 1.
            </Typography>
          </Grid>
          <Grid item mb={5}>
            <TextField
              id="key-amount-field"
              label="Amount of Keys"
              variant="outlined"
              size="small"
              type="number"
              required
              value={state.keyAmount}
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
            <Typography id="key-amount-subtitle2" variant="caption">
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
