import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/styles";
import { useContext } from "react";
import { AppContext } from "./../../../App";
import CustomerCard from "./Cards/CustomerCard";
import ProductCard from "./Cards/ProductCard";
import FeatureCard from "./Cards/FeatureCard";
import LimitationCard from "./Cards/LimitationCard";

export const CustomCard = styled(Card)(() => ({
  width: "313px",
  marginBottom: "3vh",
}));

export const CustomCardContent = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export const SmallChip = styled(Chip)(() => ({
  fontSize: "8px !important",
  height: "20px !important",
}));

const LicenseDetails = (props) => {
  const { state } = useContext(AppContext);

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="center"
      justifyContent="start"
      {...props}
    >
      <CustomerCard data={state.customer} />
      <ProductCard data={state.product} />
      <FeatureCard data={state.feature} />
      <LimitationCard data={state.limitation} />
    </Grid>
  );
};

export default LicenseDetails;
