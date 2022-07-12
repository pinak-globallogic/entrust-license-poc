import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { updateActivePage } from "Redux/Slices/customCardSlice";
import { ROUTE_LICENSE_ACTIVATE, ROUTE_LICENSE_DASHBOARD } from "Routes";
import InputProductKeyStep from "./InputProductKeyStep";
import SelectCategoryStep from "./SelectCategoryStep";
import ChangeProductKeyStep from "./ChangeProductKeyStep";
import ReviewProductKeyStep from "./ReviewProductKeyStep";
import SavedProductKeyStep from "./SavedProductKeyStep";

const ModifyProductKeyWizard = (props) => {
  const activePage = useSelector((state) => state.customCard.activePage);
  const count = activePage.modifyLicenseWizard;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const dispatchChangeStep = (index) => {
    dispatch(
      updateActivePage({
        ...activePage,
        modifyLicenseWizard: index,
      })
    );
  };

  const renderSwitch = (count) => {
    let obj = {
      btn: {
        text: "continue",
        variant: "contained",
        disabled: false,
        backgroundColor: "primary",
        action: () => dispatchChangeStep(activePage.modifyLicenseWizard + 1),
      },
      page: null,
    };
    switch (count) {
      case 0:
        obj.page = <InputProductKeyStep />;
        break;
      case 1:
        obj.btn.text = "No Changes Yet";
        obj.btn.disabled = true;
        obj.page = <SelectCategoryStep />;
        break;
      case 2:
        obj.btn.text = (
          <>
            Review
            <br />
            And Save Changes
          </>
        );
        obj.btn.variant = "outlined";
        obj.page = <ChangeProductKeyStep />;
        break;
      case 3:
        obj.btn.text = "Commit Changes";
        obj.page = <ReviewProductKeyStep />;
        break;
      case 4:
        obj.btn.text = (
          <>
            Continue
            <br />
            With Activation
          </>
        );
        obj.btn.action = () => {
          dispatch(
            updateActivePage({
              ...activePage,
              activateLicenseWizard: 2,
              modifyLicenseWizard: 0,
            })
          );
          navigate(ROUTE_LICENSE_ACTIVATE);
        };
        obj.page = <SavedProductKeyStep />;
        break;
    }

    return obj;
  };

  const details = renderSwitch(count);

  return (
    <>
      <Grid item container direction="column" {...props}>
        {details.page}
        <Stack
          direction="row-reverse"
          justifyContent={count !== 4 ? "space-between" : "end"}
          sx={{ margin: "6vh 2vh 0" }}
        >
          <Button
            id="continue-btn"
            variant={details.btn.variant}
            onClick={details.btn.action}
            disabled={details.btn.disabled}
          >
            <Typography id="continue-btn-text" variant="caption">
              {details.btn.text}
            </Typography>
          </Button>
          {count === 4 && (
            <Button
              id="finish-btn"
              variant="outlined"
              onClick={() => {
                navigate(ROUTE_LICENSE_DASHBOARD);
                dispatchChangeStep(0);
              }}
              sx={{ mr: 5 }}
            >
              <Typography id="finish-btn-text" variant="caption">
                Finish And Go Back
                <br />
                To Dashboard
              </Typography>
            </Button>
          )}
          {count > 0 && count < 4 && (
            <Button
              id="back-btn"
              variant="contained"
              size="small"
              sx={{ backgroundColor: "#EE4B2B" }}
              onClick={() => dispatchChangeStep(0)}
            >
              <Typography id="back-btn-text" variant="caption">
                Reset All Changes
              </Typography>
            </Button>
          )}
        </Stack>
      </Grid>
    </>
  );
};

export default ModifyProductKeyWizard;
