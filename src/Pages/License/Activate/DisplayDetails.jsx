import { Grid } from "@mui/material";
import { useSelector } from "react-redux";

import CustomerInfo from "./CustomerInfo";
import DetailKeyInfo from "./DetailKeyInfo";

const DisplayDetails = (props) => {
  const activePage = useSelector((state) => state.customCard.activePage);
  const count = activePage.activateLicenseWizard;

  return (
    <Grid
      item
      container
      direction="column"
      alignItems="start"
      {...props}
      pr={3}
      pt={2}
    >
      {count >= 2 && (
        <>
          <CustomerInfo />
          <DetailKeyInfo />
        </>
      )}
    </Grid>
  );
};

export default DisplayDetails;
