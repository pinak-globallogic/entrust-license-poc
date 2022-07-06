import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

import ActivationSuccess from "./ActivationSuccess";
import DisplayKeys from "./DisplayKeys";
import FileUploadDetail from "./FileUploadDetail";
import KeyActivationOptions from "./KeyActivationOptions";

import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";


const ActivateKey = (props) => {

  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  // make wrapper function to give child
  const wrapperSetCount = useCallback(val => {
    setCount(val);
  }, [setCount]);

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
      obj.page = <KeyActivationOptions countSetter={wrapperSetCount}/>;
      obj.btn.text = "Continue manualy without activation file";
      obj.btn.variant = "outlined";
      obj.btn.action = () => setCount(2);
      break;
    case 1:
      obj.page = <FileUploadDetail countSetter={wrapperSetCount}/>;
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
    <Grid item container direction="column" {...props}>
      {details.page}
      <Stack direction="row-reverse" justifyContent="space-between" mt={2}>
        <Button
          id="continue-btn"
          variant={details.btn.variant}
          style={{ maxWidth: "30vh" }}
          onClick={details.btn.action}
        >
          <Typography id="continue-btn-text" variant="caption">
            {details.btn.text}
          </Typography>
        </Button>
        {count > 1 && count < 3 && (
          <Button
            id="back-btn"
            variant="outlined"
            size="small"
            onClick={() => {
              setCount(count - 1);
            }}
          >
            <Typography id="back-btn-text" variant="caption">
              Go Back
            </Typography>
          </Button>
        )}
      </Stack>
    </Grid>
  </>
);

}

export default ActivateKey
