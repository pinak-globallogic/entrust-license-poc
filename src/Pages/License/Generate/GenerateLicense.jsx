import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useContext } from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/styles";
import CardContent from "@mui/material/CardContent";
import { AppContext } from "./../../../App";

export const CustomCard = styled(Card)(() => ({
  marginBottom: "1vh",
  backgroundColor: "transparent !important",
  boxShadow: "none !important",
}));

export const CustomCardContent = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

const GenerateLicense = (props) => {
  const { state, setState } = useContext(AppContext);

  return (
    <Grid item container direction="column" {...props}>
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
      <CustomCard>
        <CustomCardContent>
          <Grid item mb={1}>
            <Typography variant="h6">Sales Order Number</Typography>
          </Grid>
          <Grid item mb={2}>
            <Typography variant="caption">
              Usually associated with the sales order in Oracle.
            </Typography>
          </Grid>
          <Grid>
            <TextField
              label="Sales Order Number"
              variant="outlined"
              size="small"
              required
              // value={state.customerName}
              // onChange={(e) =>
              //   setState({ ...state, customerName: e.target.value })
              // }
            />
          </Grid>
        </CustomCardContent>
      </CustomCard>

      <CustomCard>
        <CustomCardContent>
          <Grid item mb={1}>
            <Typography variant="h6">Line Item Number</Typography>
          </Grid>
          <Grid item mb={2}>
            <Typography variant="caption">
              The line item number from the Oracle order sheet.
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              label="Line Item Number"
              variant="outlined"
              size="small"
              required
              // value={state.customerName}
              // onChange={(e) =>
              //   setState({ ...state, customerName: e.target.value })
              // }
            />
          </Grid>
        </CustomCardContent>
      </CustomCard>

      <CustomCard>
        <CustomCardContent>
          <Grid item mb={1}>
            <Typography variant="h6">Specify product</Typography>
          </Grid>
          <Grid item mb={2}>
            <Typography variant="caption">
              Insert either the product name, the product item number, or other
              product identifiers. Choose the product in question from the
              dropdown menu.
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              label="Product identifier"
              variant="outlined"
              size="small"
              required
              // value={state.customerName}
              // onChange={(e) =>
              //   setState({ ...state, customerName: e.target.value })
              // }
            />
          </Grid>
        </CustomCardContent>
      </CustomCard>
      <CustomCard>
        <CustomCardContent>
          <Grid item mb={1}>
            <Typography variant="h6">Limitations</Typography>
          </Grid>
          <Grid item mb={2}>
            <Typography variant="caption">
              The limit count needs to be between 1 and 40
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              label="Limit Count"
              variant="outlined"
              size="small"
              required
              // value={state.customerName}
              // onChange={(e) =>
              //   setState({ ...state, customerName: e.target.value })
              // }
            />
          </Grid>
        </CustomCardContent>
      </CustomCard>
    </Grid>
  );
};

export default GenerateLicense;
