import Grid from "@mui/material/Grid";
import CustomerCard from "./cards/CustomerCard";
import ProductCard from "./cards/ProductCard";
import FeatureCard from "./cards/FeatureCard";
import LimitationCard from "./cards/LimitationCard";
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
