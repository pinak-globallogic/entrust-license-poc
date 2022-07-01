import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import { AppContext } from "App";
import CustomerDetails from "./CustomerDetails";
import ProductDetails from "./ProductDetails";
import FeatureDetails from "./FeatureDetails";
import LimitationDetails from "./LimitationDetails";
import OptionalDetails from "./OptionalDetails";

const noOfKeys = (keyAmount) => {
  if (keyAmount < 1) {
    return 1;
  }
  return keyAmount;
};

const GenerateLicense = (props) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const { state } = useContext(AppContext);
  const btnDisabled = state.error;

  const renderSwitch = (count) => {
    let obj = {
      btn:{
      text: "continue",
      variant: "contained",
      action: () => setCount(count + 1),
      },
      page: null
    };
    switch (count) {
    case 0:
      obj.page = <CustomerDetails />;
      break;
    case 1:
      obj.page = <ProductDetails />;
      break;
    case 2:
      obj.page = <FeatureDetails />;
      break;
    case 3:
      obj.page = <LimitationDetails />;
      break;
    case 4:
      obj.btn.text = `Commit setting and generate ${noOfKeys(state.keyAmount)} key(s)`;
      obj.page= <OptionalDetails />;
      break;
    case 5:
      obj.btn.text = "Finish and go back to dashboard";
      obj.btn.variant = "outlined";
      obj.btn.action = () => navigate("/dashboard");
      obj.page =  null;
      break;
    }

    return obj;
  };

  const details = renderSwitch(count);

  return (
    <>
      <Grid item container direction="column" {...props}>
        {details.page}
        <Stack direction="row-reverse" justifyContent="space-between">
          <Button
            id="continue-btn"
            variant={details.btn.variant}
            disabled={btnDisabled}
            style={{ maxWidth: "25vh" }}
            onClick={details.btn.action}
          >
            {details.btn.text}
          </Button>
          {count > 0 && count < 5 && (
            <Button
              id="back-btn"
              variant="text"
              disabled={btnDisabled}
              onClick={() => {
                setCount(count - 1);
              }}
            >
              Go Back
            </Button>
          )}
        </Stack>
      </Grid>
    </>
  );
};

export default GenerateLicense;
