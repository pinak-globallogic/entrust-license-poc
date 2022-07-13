import Grid from "@mui/material/Grid";
import FeatureCard from "Pages/License/Details/Cards/FeatureCard";
import LicenseServerCard from "Pages/License/Details/Cards/LicenseServerCard";
import LimitationCard from "Pages/License/Details/Cards/LimitationCard";
import MiscellaneousCard from "Pages/License/Details/Cards/MiscellaneousCard";
import ProductCard from "Pages/License/Details/Cards/ProductCard";

import { useSelector } from "react-redux";


const SideCardDetails = (props) => {
  const state = useSelector((state) => state.generateLicense);
  const activePage = useSelector((state) => state.customCard.activePage);
  const count = activePage.modifyLicenseWizard;
  const licenseServerState = useSelector((state) => state.modifyKey);

  return (
    <>
      {count > 0 && (
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          justifyContent="start"
          {...props}
        >
          
          <LicenseServerCard data={licenseServerState.licenseDetails}/>
          <ProductCard data={state.product} />
          <FeatureCard data={state.feature} />
          <LimitationCard data={state.limitation} />
          <MiscellaneousCard />
        </Grid>
      )}
    </>
  );
};

export default SideCardDetails;
