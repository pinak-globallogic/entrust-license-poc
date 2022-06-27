import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import { styled } from "@mui/styles";
import { useContext } from "react";
import { AppContext } from "./../../../App";

export const CustomCard = styled(Card)(() => ({
  width: "313px",
  marginBottom: "3vh",
}));

export const CustomCardContent = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
}));

const SmallChip = styled(Chip)(() => ({
  fontSize: "8px !important",
  height: "20px !important",
}));
import CustomerCard from "./Cards/CustomerCard";
import ProductCard from "./Cards/ProductCard";

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
      <CustomCard>
        <CustomCardContent>
          <Grid item xs>
            <Chip label="Features" color="secondary" />
          </Grid>
          <Grid item xs pt={2}>
            <TextField
              label="EDITION"
              disabled
              variant="standard"
              fullWidth
              value="Professional"
            />
          </Grid>
          <Grid item container xs pt={1}>
            <Grid item xs pr={2}>
              <SmallChip label="Central Issuance Smart Card: True" />
            </Grid>
            <Grid item xs>
              <SmallChip label="Developer Name: 234234" />
            </Grid>
          </Grid>
        </CustomCardContent>
      </CustomCard>
      <CustomCard>
        <CustomCardContent>
          <Grid item xs>
            <Chip label="Limitations" />
          </Grid>
          <Grid item xs pt={2}>
            <TextField
              label="LIMIT COUNT"
              disabled
              variant="standard"
              fullWidth
              value="Site License"
            />
          </Grid>
          <Grid item xs pt={2}>
            <TextField
              label="EXPIRATION"
              disabled
              variant="standard"
              fullWidth
              value="365 days"
            />
          </Grid>
        </CustomCardContent>
      </CustomCard>
    </Grid>
  );
};

export default LicenseDetails;
