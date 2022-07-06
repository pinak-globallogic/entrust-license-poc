import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import CustomCard from "Components/CustomCard/CustomCard";
import CustomCardContent from "Components/CustomCard/CustomCardContent";
import CustomChip from "Components/CustomCard/CustomChip";
import ProductKeyInformationCard from "./ProductKeyInformationCard";

const SearchLicenseDetails = () => {
  return (
    <Grid sx={{ pl: 5}}>
      <CustomCard style={{ width: "37vw", height: "22vw" }}>
        <CustomCardContent>
          <Grid item>
            <Grid item container xs alignItems="center">
              <Typography variant="body1">Overview</Typography>
            </Grid>
            <Divider sx={{ borderBottomWidth: 2, m: 2 }} />
            <Grid item sx={{ m: 1 }}>
              <Stack spacing={1} direction="row">
                <CustomChip
                  label="Product Key"
                  value="1x83-5684-c832-1b5744"
                  chipWidth="200px"
                  id="productKey"
                ></CustomChip>
                <CustomChip
                  label="Feature ID"
                  value="CC_PHOPT"
                  chipWidth="200px"
                  id="featureId"
                ></CustomChip>
                <CustomChip
                  label="Order No"
                  value="213456-2.1"
                  chipWidth="200px"
                  id="orderNo"
                ></CustomChip>
              </Stack>
            </Grid>
            <Grid item sx={{ m: 2 }}>
              <Stack spacing={1} direction="row">
                <CustomChip
                  label="Company"
                  value="Obrien"
                  chipWidth="200px"
                  id="company"
                ></CustomChip>
              </Stack>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="body1">Quick Access</Typography>
            <Divider sx={{ borderBottomWidth: 2, m: 2 }} />
            <Grid item sx={{ m: 1 }}>
              <Stack spacing={1} direction="row">
                <CustomChip
                  label="Expiration Date"
                  value="2022/01/02"
                  chipWidth="200px"
                  icon="error"
                  color="#EE4B2B"
                  id="expirationDate"
                ></CustomChip>
                <CustomChip
                  label="Rehost Count"
                  value="1"
                  chipWidth="200px"
                  icon="refresh"
                  id="rehostCount"
                ></CustomChip>
                <CustomChip
                  label="Limit"
                  value="40"
                  chipWidth="200px"
                  icon="done"
                  id="limit"
                ></CustomChip>
              </Stack>
            </Grid>

            <Grid item sx={{ m: 2 }}>
              <Grid xs>
                <CustomChip
                  label="License Server ID"
                  value="1x83-5684-c832-1b57441x83-5684-c832-1b57441x83-5684-c832"
                  chipWidth="500px"
                  icon="copy"
                  id="licenseServerId"
                ></CustomChip>
              </Grid>
            </Grid>
          </Grid>
        </CustomCardContent>
      </CustomCard>
      <CustomCard style={{ width: "37vw", height: "26vw" }}>
        <CustomCardContent>
        <ProductKeyInformationCard />
        </CustomCardContent>
      </CustomCard>

    </Grid>
  );
};

export default SearchLicenseDetails;
