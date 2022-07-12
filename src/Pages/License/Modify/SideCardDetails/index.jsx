import Grid from "@mui/material/Grid";
import FeatureCard from "Pages/License/Details/Cards/FeatureCard";
import LicenseServerCard from "Pages/License/Details/Cards/LicenseServerCard";
import LimitationCard from "Pages/License/Details/Cards/LimitationCard";
import MiscellaneousCard from "Pages/License/Details/Cards/MiscellaneousCard";
import ProductCard from "Pages/License/Details/Cards/ProductCard";

import { useSelector } from "react-redux";


const SideCardDetails = (props) => {
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

     <LicenseServerCard data={state.licenseServer}/>
      <ProductCard data={state.product} />
      <FeatureCard data={state.feature} />
      <LimitationCard data={state.limitation} />
      <MiscellaneousCard />
    </Grid>
  );
};

export default SideCardDetails;
