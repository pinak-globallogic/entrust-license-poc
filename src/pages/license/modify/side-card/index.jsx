import Grid from "@mui/material/Grid";
import FeatureCard from "pages/license/details/cards/FeatureCard";
import LicenseServerCard from "pages/license/details/cards/LicenseServerCard";
import LimitationCard from "pages/license/details/cards/LimitationCard";
import MiscellaneousCard from "pages/license/details/cards/MiscellaneousCard";
import ProductCard from "pages/license/details/cards/ProductCard";

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
          <LicenseServerCard data={licenseServerState.licenseDetails} />
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
