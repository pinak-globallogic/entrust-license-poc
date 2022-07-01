import Grid from "@mui/material/Grid";
import CustomerCard from "./Cards/CustomerCard";
import ProductCard from "./Cards/ProductCard";
import FeatureCard from "./Cards/FeatureCard";
import LimitationCard from "./Cards/LimitationCard";
import { useSelector } from "react-redux";

const LicenseDetails = (props) => {
  const state = useSelector((state) => state.generateLicense);

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
