import { Box, Typography, Divider, TextField, Grid } from "@mui/material";

import { CustomCard, CustomCardContent } from "Utilty";

const CustomerInfo = () => {
  return (
    <CustomCard>
      <CustomCardContent style={{ backgroundColor: "#fff" }}>
        <Typography variant="subtitle1">Customer Information</Typography>
        <Divider sx={{ borderBottomWidth: 2, m: 2 }} />
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { maxWidth: "20ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                id="firstName"
                label="First Name"
                defaultValue="Input text"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="lastName"
                label="Last Name"
                defaultValue="Input text"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="company"
                label="Company"
                defaultValue="Input text"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="city"
                label="City"
                defaultValue="Input text"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="addressLine1"
                label="Address Line 1"
                defaultValue="Input text"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="addressLine2"
                label="Address Line 2"
                defaultValue="Input text"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="state"
                label="State / Province / Region"
                defaultValue="Input text"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="zip"
                label="ZIP / Postal Code"
                defaultValue="Input text"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="country"
                label="Country"
                defaultValue="Input text"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="phoneNo"
                label="Phone Number"
                defaultValue="Input text"
                size="small"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                id="email"
                label="Email Address"
                defaultValue="Input text"
                size="small"
              />
            </Grid>
          </Grid>
        </Box>
      </CustomCardContent>
    </CustomCard>
  );
};

export default CustomerInfo;
