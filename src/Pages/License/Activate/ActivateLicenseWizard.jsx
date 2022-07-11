import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import {Grid, Stack, Button} from "@mui/material";

import ActivationSuccess from "./ActivationSuccess";
import DisplayKeys from "./DisplayKeys";
import FileUploadDetail from "./FileUploadDetail";
import KeyActivationOptions from "./KeyActivationOptions";

const ActivateLicenseWizard = (props) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  // wrapper function for count 
  const wrapperSetCount = useCallback(
    (val) => {
      setCount(val);
    },
    [setCount]
  );

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
        obj.page = <KeyActivationOptions countSetter={wrapperSetCount} />;
        obj.btn.text = "Continue manually without activation file";
        obj.btn.variant = "outlined";
        obj.btn.action = () => setCount(2);
        break;
      case 1:
        obj.page = <FileUploadDetail countSetter={wrapperSetCount} />;
        break;
      case 2:
        obj.page = <DisplayKeys />;
        break;
      case 3:
        obj.page = <ActivationSuccess />;
        obj.btn.text = "Finish and go back to dashboard";
        obj.btn.variant = "outlined";
        obj.btn.action = () => navigate("/dashboard");
        break;
    }

    return obj;
  };

  const details = renderSwitch(count);

  return (
    <>
      <Grid item container direction="column" {...props} pt={6}>
        {details.page}
        <div style={{ width: "56%" }}>
          <Stack direction="row-reverse" justifyContent="space-between" mt={2}>
            <Button
              id="continue-btn"
              variant={details.btn.variant}
              style={{ maxWidth: "25vh", fontWeight: "bold" }}
              onClick={details.btn.action}
              size="small"
            >
              {details.btn.text}
            </Button>
            {count == 2 && (
              <Button
                id="back-btn"
                variant="outlined"
                size="small"
                onClick={() => {
                  setCount(0);
                }}
              >
                Go Back
              </Button>
            )}
          </Stack>
        </div>
      </Grid>
    </>
  );
};

export default ActivateLicenseWizard;
