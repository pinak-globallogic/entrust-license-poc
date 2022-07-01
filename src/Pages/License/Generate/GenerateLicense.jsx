import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import { styled } from "@mui/styles";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import CustomerDetails from "./CustomerDetails";
import ProductDetails from "./ProductDetails";
import FeatureDetails from "./FeatureDetails";
import LimitationDetails from "./LimitationDetails";
import GeneratrProductKeyDetails from "./GenerateProductKeyDetails";

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
      return <GeneratrProductKeyDetails />;
  }
};

const GenerateLicense = (props) => {
  const [count, setCount] = useState(0);
  const detailsPage = renderSwitch(count);

  return (
    <>
      <Grid item container direction="column" {...props}>
        {detailsPage}
        <Stack direction="row" justifyContent="space-between">
          {count > 0 ? (
            <Button variant="text" onClick={() => setCount(count - 1)}>
              Go Back
            </Button>
          ) : (
            <div style={{ display: "block" }} />
          )}
          {count < 4 && (
            <Button variant="contained" onClick={() => setCount(count + 1)}>
              Continue
            </Button>
          )}
        </Stack>
      </Grid>
    </>
  );
};

export default GenerateLicense;
