import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import { AppContext } from "./../../../App";
import { CustomCard, CustomCardContent } from "./GenerateLicense";


const CustomerDetails = () => {
  const { state, setState } = useContext(AppContext);
  return (
    <div>
      <CustomCard>
        <CustomCardContent>
          <Grid item mb={1}>
            <Typography variant="h6">Select or create customer</Typography>
          </Grid>
          <Grid item mb={2}>
            <Typography variant="caption">
              To generate a license key, you need to set the customer. When
              typing below, you can search the database for existing customers.
              If the customer is not yet in the database, you can type in the
              new name, as well.
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              label="Customer name"
              variant="outlined"
              size="small"
              required
              value={state.customer.name}
              onChange={(e) =>
                setState({ ...state, customer: { name: e.target.value } })
              }
            />
          </Grid>
        </CustomCardContent>
      </CustomCard>
    </div>
  );
};

export default CustomerDetails;
