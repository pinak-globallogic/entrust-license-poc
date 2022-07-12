import { useState } from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import InputProductKey from "./InputProductKey";
import EditProductKey from "./EditProductKey";
import ModifyServerId from "./ModifyServerId";
import SaveServerId from "./SaveServerId";

const ModifyProductKeyWizard = (props) => {
  const [count, setCount] = useState(0);
  const state = useSelector((state) => state.generateLicense);

  const btnDisabled = state.error;

  const renderSwitch = (count) => {
    let obj = {
      btn: {
        text: "continue",
        variant: "contained",
        action: () => setCount(count + 1),
      },
      page: null,
    };
    switch (count) {
      case 0:
        obj.page = <InputProductKey />;
        break;
      case 1:
        obj.page = <EditProductKey />;
        break;
      case 2:
        obj.page = <ModifyServerId />;
        break;
      case 3:
        obj.page = <SaveServerId />;
        break;
    }

    return obj;
  };

  const details = renderSwitch(count);

  return (
    <>
      <Grid item container direction="column" {...props}>
        {details.page}
        <Stack direction="row-reverse" justifyContent="space-between" mt={10}>
          <Grid item mr={5}>
            {count >= 0 && count < 2 && (
              <Button
                id="continue-btn"
                variant={details.btn.variant}
                disabled={btnDisabled}
                style={{ maxWidth: "25vh" }}
                onClick={details.btn.action}
              >
                <Typography id="continue-btn-text" variant="caption">
                  {details.btn.text}
                </Typography>
              </Button>
            )}
          </Grid>
          <Grid item mr={5}>
            {count === 2 && (
              <Button
                id="review-btn"
                variant="outlined"
                size="small"
                disabled={btnDisabled}
                onClick={details.btn.action}
              >
                <Typography id="back-btn-text" variant="caption">
                  REVIEW <br /> AND SAVE CHANGES
                </Typography>
              </Button>
            )}
          </Grid>
          <Grid item mr={5}>
            {count === 3 && (
              <Button
                id="revert-btn"
                variant={details.btn.variant}
                size="small"
                disabled={btnDisabled}
              >
                <Typography id="back-btn-text" variant="caption">
                  COMMIT CHANGES
                </Typography>
              </Button>
            )}
                  </Grid>
          <Grid item mr={5}>
            {count === 1 && (
              <Button
                id="review-btn"
                variant="outlined"
                size="small"
                disabled={btnDisabled}
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <Typography id="back-btn-text" variant="caption">
                  NO CHANGES
                </Typography>
              </Button>
            )}
          </Grid>
          <Grid item mr={5}>
            {count >= 1 && count < 4 && (
              <Button
                id="revert-btn"
                size="small"
                disabled={btnDisabled}
                style={{
                  backgroundColor: "#EE4B2B",
                  color: "white",
                }}
              >
                <Typography id="back-btn-text" variant="caption">
                  REVERT ALL CHANGES
                </Typography>
              </Button>
            )}
          </Grid>
        </Stack>
      </Grid>
    </>
  );
};

export default ModifyProductKeyWizard;
