import { Box, Typography, Divider, TextField } from "@mui/material";
import { CustomCard, CustomCardContent } from "Utilty";

const CustomerInfo = () => {
  return (
    <CustomCard>
      <CustomCardContent style={{ backgroundColor: "#fff" }}>
        <Typography variant="body1" marginLeft={1}>Overview</Typography>
        <Divider sx={{ borderBottomWidth: 2, m: 2 }} />
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, maxWidth: "30ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              id="firstName"
              label="First Name"
              defaultValue="Input text"
              size="small"
            />
            <TextField
              id="lastName"
              label="Last Name"
              defaultValue="Input text"
              size="small"
            />
            <TextField
              id="company"
              label="Company"
              defaultValue="Input text"
              size="small"
            />
            <TextField
              id="city"
              label="City"
              defaultValue="Input text"
              size="small"
            />
            <TextField
              id="address"
              label="Address"
              defaultValue="Input text"
              size="small"
            />
           
            <TextField
              id="state"
              label="State / Province / Region"
              defaultValue="Input text"
              size="small"
            />
            <TextField
              id="zip"
              label="ZIP / Postal Code"
              defaultValue="Input text"
              size="small"
            />
            <TextField
              id="country"
              label="Country"
              defaultValue="Input text"
              size="small"
            />
            <TextField
              id="phoneNo"
              label="Phone Number"
              defaultValue="Input text"
              size="small"
            />
            <TextField
              id="email"
              label="Email Address"
              defaultValue="Input text"
              size="small"
            />
          </div>
        </Box>
      </CustomCardContent>
    </CustomCard>
  );
};

export default CustomerInfo;
