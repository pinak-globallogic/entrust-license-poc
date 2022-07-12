import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { Grid, Stack, Button } from "@mui/material";

import ActivationSuccess from "./ActivationSuccess";
import DisplayKeys from "./DisplayKeys";
import FileUploadDetail from "./FileUploadDetail";
import KeyActivationOptions from "./KeyActivationOptions";
import { ROUTE_LICENSE_DASHBOARD } from "Routes";
import { updateActivePage } from "Redux/Slices/activateKeySlice";

const ActivateLicenseWizard = (props) => {
  const activePage = useSelector((state) => state.activateKey.activePage);
  const count = activePage.number;
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        obj.page = <KeyActivationOptions />;
        obj.btn.text = "Continue manually without activation file";
        obj.btn.variant = "outlined";
        obj.btn.action = () => {
          dispatch(
            updateActivePage({
              ...activePage,
              number: 2,
            })
          );
        };
        break;
      case 1:
        obj.page = <FileUploadDetail />;
        break;
      case 2:
        obj.page = <DisplayKeys />;
        break;
      case 3:
        obj.page = <ActivationSuccess />;
        obj.btn.text = "Finish and go back to dashboard";
        obj.btn.variant = "outlined";
        obj.btn.action = () => {
          navigate(ROUTE_LICENSE_DASHBOARD);
          dispatch(
            updateActivePage({
              ...activePage,
              number: 0,
            })
          );
        };
        break;
    }

    return obj;
  };

  const details = renderSwitch(count);

  return (
    <>
      <Grid item container direction="column" {...props}>
        {details.page}
        <div>
          <Stack direction="row-reverse" justifyContent="space-between">
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
                  dispatch(
                    updateActivePage({
                      ...activePage,
                      number: 0,
                    })
                  );
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
