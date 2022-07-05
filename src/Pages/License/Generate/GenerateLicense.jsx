import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import CustomerDetails from "./CustomerDetails";
import ProductDetails from "./ProductDetails";
import FeatureDetails from "./FeatureDetails";
import LimitationDetails from "./LimitationDetails";
import OptionalDetails from "./OptionalDetails";
import { Typography } from "@mui/material";
import GenerateProductKeyDetails from "./GenerateProductKeyDetails";

const noOfKeys = (keyAmount) => {
  if (keyAmount < 1) {
    return 1;
  }
  return keyAmount;
};

const GenerateLicense = (props) => {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
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
        //obj.page = <GenerateProductKeyDetails />;
        break;
      case 4:
        obj.btn.text = `Commit setting and generate ${noOfKeys(
          state.keyAmount
        )} key(s)`;
        obj.page = <OptionalDetails />;
        break;
      case 5:
        obj.btn.text = "Finish and go back to dashboard";
        obj.btn.variant = "outlined";
        obj.btn.action = () => navigate("/dashboard");
        obj.page = <GenerateProductKeyDetails />;
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
          {count > 0 && count < 5 && (
            <Button
              id="back-btn"
              variant="outlined"
              size="small"
              disabled={btnDisabled}
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
};

export default GenerateLicense;
