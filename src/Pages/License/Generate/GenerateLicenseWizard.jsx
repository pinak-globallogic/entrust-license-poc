import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import CustomerDetails from "./steps/CustomerDetails";
import ProductDetails from "./steps/ProductDetails";
import FeatureDetails from "./steps/FeatureDetails";
import LimitationDetails from "./steps/LimitationDetails";
import OptionalDetails from "./steps/OptionalDetails";
import { Typography } from "@mui/material";
import GenerateProductKeyDetails from "./steps/GenerateProductKeyDetails";
import {
  resetActivePage,
  updateActivePage,
} from "redux/slices/customCardSlice";
import { ROUTE_LICENSE_DASHBOARD } from "routes";

const noOfKeys = (keyAmount) => {
  if (keyAmount < 1) {
    return 1;
  }
  return keyAmount;
};

const GenerateLicenseWizard = (props) => {
  const state = useSelector((state) => state.generateLicense);
  const activePage = useSelector((state) => state.customCard.activePage);
  const count = activePage.number;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const btnDisabled = state.error;

  const renderSwitch = (count) => {
    let obj = {
      btn: {
        text: "continue",
        variant: "contained",
        action: () =>
          dispatch(
            updateActivePage({
              ...activePage,
              number: activePage.number + 1,
            })
          ),
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
        obj.btn.action = () => {
          navigate(ROUTE_LICENSE_DASHBOARD);
          dispatch(resetActivePage());
        };
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
                dispatch(
                  updateActivePage({
                    ...activePage,
                    number: activePage.number - 1,
                  })
                );
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

export default GenerateLicenseWizard;
