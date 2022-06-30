import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { styled } from "@mui/styles";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "App";
import CustomerDetails from "./CustomerDetails";
import ProductDetails from "./ProductDetails";
import FeatureDetails from "./FeatureDetails";
import LimitationDetails from "./LimitationDetails";
import OptionalDetails from "./OptionalDetails";

export const CustomCard = styled(Card)(() => ({
  marginBottom: "1vh",
  backgroundColor: "transparent !important",
  boxShadow: "none !important",
}));

export const CustomCardContent = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const renderSwitch = (count) => {
  switch (count) {
  case 0:
    return <CustomerDetails />;
  case 1:
    return <ProductDetails />;
  case 2:
    return <FeatureDetails />;
  case 3:
    return <LimitationDetails />;
  case 4:
    return <OptionalDetails />;
  }
};

const noOfKeys = (keyAmount) => {
  if(keyAmount < 1){
    return 1;
  }
  return keyAmount;
}

const GenerateLicense = (props) => {
  const [count, setCount] = useState(0);
  const detailsPage = renderSwitch(count);
  const navigate = useNavigate();
  const { state } = useContext(AppContext);
  const btnDisabled = state.error;

  return (
    <>
      <Grid item container direction="column" {...props}>
        {detailsPage}
        <Stack direction="row" justifyContent="space-between">
          {count > 0 && count < 5 ? (
            <Button variant="text" disabled={btnDisabled} onClick={() => {setCount(count - 1)}}>
              Go Back
            </Button>
          ) : (
            <div style={{ display: "block" }} />
          )}
          {(count <= 3 && (
            <Button variant="contained" disabled={btnDisabled} onClick={() => setCount(count + 1)}>
              Continue
            </Button>
          )) ||
            (count == 4 && (
              <Button
                variant="contained"
                disabled={btnDisabled}
                style={{ maxWidth: "25vh" }}
                onClick={() => setCount(count + 1)}
              >
                Commit setting and generate {noOfKeys(state.optional.keyAmount)} key(s)
              </Button>
            )) ||
            (count == 5 && (
              <Button variant="outlined" onClick={() => navigate("/dashboard")}>
                Finish and go back to dashboard
              </Button>
            ))}
        </Stack>
      </Grid>
    </>
  );
};

export default GenerateLicense;
