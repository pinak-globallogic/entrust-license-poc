import { useState } from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import InputProductKey from "./InputProductKey";
import EditProductKey from "./EditProductKey";
import ModifyServerId from "./ModifyProductKey";
import SaveServerId from "./ReviewProductKey";
import SaveServerIdPage from "./SaveProductKeyPage";
import { useNavigate } from "react-router-dom";
import { ROUTE_LICENSE_DASHBOARD } from "Routes";

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
      case 4:
        obj.page = <SaveServerIdPage />;
        break;
    }

    return obj;
  };

  const navigate = useNavigate();
  const action = () => navigate(ROUTE_LICENSE_DASHBOARD);

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
                <Typography id="review-btn-text" variant="caption">
                  REVIEW <br /> AND SAVE CHANGES
                </Typography>
              </Button>
            )}
          </Grid>
          <Grid item mr={5}>
            {count === 3 && (
              <Button
                id="commit-btn"
                variant={details.btn.variant}
                size="small"
                disabled={btnDisabled}
                onClick={details.btn.action}
              >
                <Typography id="commit-btn-text" variant="caption">
                  COMMIT CHANGES
                </Typography>
              </Button>
            )}
          </Grid>
          <Grid item mr={5}>
            {count === 1 && (
              <Button
                id="no-changes-btn"
                variant="outlined"
                size="small"
                disabled={btnDisabled}
                style={{ backgroundColor: "#FFFFFF" }}
              >
                <Typography id="no-changes-btn-text" variant="caption">
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
                <Typography id="revert-btn-text" variant="caption">
                  REVERT ALL CHANGES
                </Typography>
              </Button>
            )}
            <Grid container>
              <Grid item mr={5}>
                {count === 4 && (
                  <Button
                    id="review-btn"
                    variant="outlined"
                    size="small"
                    disabled={btnDisabled}
                    onClick={action}
                  >
                    <Typography id="finish-btn-back" variant="caption">
                      FINISH AND GO BACK <br /> TO DASHBOARD
                    </Typography>
                  </Button>
                )}
              </Grid>
              <Grid item mr={5}>
                {count === 4 && (
                  <Button
                    id="revert-btn"
                    variant={details.btn.variant}
                    size="small"
                    disabled={btnDisabled}
                  >
                    <Typography id="continue-activation" variant="caption">
                      CONTINUE <br /> WITH ACTIVATION
                    </Typography>
                  </Button>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
    </>
  );
};

export default ModifyProductKeyWizard;
