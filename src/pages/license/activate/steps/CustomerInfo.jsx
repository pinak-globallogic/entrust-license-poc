import { Box, Typography, Divider, TextField, Grid } from "@mui/material";

import { CustomCard, CustomCardContent } from "utilty";

const CustomerInfo = (props) => {
  return (
    <Grid xs item container direction="column">
      <CustomCard>
        <CustomCardContent
          style={{ backgroundColor: props.details.color, paddingLeft: 25 }}
        >
          <Typography variant="subtitle1">Customer Information</Typography>
          {props.details.isSideCard === true && (
            <Divider sx={{ borderBottomWidth: 2 }} />
          )}
          <Box component="form" noValidate autoComplete="off">
            <Grid container xs columnSpacing={10} sx={{ mt: 3 }}>
              <Grid item container xs direction="column" rowSpacing={2}>
                <Grid item xs>
                  <TextField
                    id="firstName"
                    label="First Name"
                    defaultValue="Input text"
                    size="small"
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    id="company"
                    label="Company"
                    defaultValue="Input text"
                    size="small"
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    id="addressLine1"
                    label="Address Line 1"
                    defaultValue="Input text"
                    size="small"
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    id="state"
                    label="State / Province / Region"
                    defaultValue="Input text"
                    size="small"
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    id="country"
                    label="Country"
                    defaultValue="Input text"
                    size="small"
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    id="email"
                    label="Email Address"
                    defaultValue="Input text"
                    size="small"
                  />
                </Grid>
              </Grid>

              <Grid item container xs direction="column" rowSpacing={2}>
                <Grid item xs>
                  <TextField
                    id="lastName"
                    label="Last Name"
                    defaultValue="Input text"
                    size="small"
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    id="city"
                    label="City"
                    defaultValue="Input text"
                    size="small"
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    id="addressLine2"
                    label="Address Line 2"
                    defaultValue="Input text"
                    size="small"
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    id="zip"
                    label="ZIP / Postal Code"
                    defaultValue="Input text"
                    size="small"
                  />
                </Grid>
                <Grid item xs>
                  <TextField
                    id="phoneNo"
                    label="Phone Number"
                    defaultValue="Input text"
                    size="small"
                  />
                </Grid>
                <Grid item xs />
              </Grid>
            </Grid>
          </Box>
        </CustomCardContent>
      </CustomCard>
    </Grid>
  );
};

export default CustomerInfo;
