import { useContext } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { AppContext } from "App";
import { CustomCard, CustomCardContent } from "./../../../Utilty";

//ToDo: Hard coded data should be removed once API is available
const productIdentifierList = [
  { name: "KMS Site License", itemNo: "4567898" },
  { name: "Some other product", itemNo: "2343421" },
  { name: "Product Name C Site License", itemNo: "121211" },
];

const ProductDetails = () => {
  const { state, setState } = useContext(AppContext);

  return (
    <div>
      <CustomCard>
        <CustomCardContent>
          <Grid item mb={1}>
            <Typography id="sales-order-title" variant="h6">Sales Order Number</Typography>
          </Grid>
          <Grid item mb={2}>
            <Typography id="sales-order-subtitle" variant="caption">
              Usually associated with the sales order in Oracle.
            </Typography>
          </Grid>
          <Grid>
            <TextField
              id="sales-order-field"
              label="Sales Order Number"
              variant="outlined"
              size="small"
              required
              type="number"
              value={state.product.salesOrderNo}
              onChange={(e) =>
                setState({
                  ...state,
                  product: {
                    ...state.product,
                    salesOrderNo: e.target.value,
                  },
                })
              }
            />
          </Grid>
        </CustomCardContent>
      </CustomCard>

      <CustomCard>
        <CustomCardContent>
          <Grid item mb={1}>
            <Typography id="line-item-title" variant="h6">Line Item Number</Typography>
          </Grid>
          <Grid item mb={2}>
            <Typography id="line-item-subtitle" variant="caption">
              The line item number from the Oracle order sheet.
            </Typography>
          </Grid>
          <Grid item>
            <TextField
              id="line-item-field"
              label="Line Item Number"
              variant="outlined"
              size="small"
              required
              type="number"
              value={state.product.lineItemNo}
              onChange={(e) =>
                setState({
                  ...state,
                  product: {
                    ...state.product,
                    lineItemNo: e.target.value,
                  },
                })
              }
            />
          </Grid>
        </CustomCardContent>
      </CustomCard>

      <CustomCard>
        <CustomCardContent>
          <Grid item mb={1}>
            <Typography id="product-info-title" variant="h6">Specify product</Typography>
          </Grid>
          <Grid item mb={2}>
            <Typography id="product-info-subtitle" variant="caption">
              Insert either the product name, the product item number, or other
              product identifiers. Choose the product in question from the
              dropdown menu.
            </Typography>
          </Grid>
          <Grid item>
            <Autocomplete
              id="product-info-autocomplete"
              disablePortal
              value={`${state.product.name}, ${state.product.productItemNo}`}
              options={productIdentifierList.map(
                (option) => option.name + ", " + option.itemNo
              )}
              onChange={(event, value) =>
                setState({
                  ...state,
                  product: {
                    ...state.product,
                    name: value.split(", ")[0],
                    productItemNo: value.split(", ")[1],
                  },
                })
              }
              sx={{ width: 300 }}
              renderInput={(params, value) => (
                <TextField
                  {...params}
                  id="product-info-field"
                  label="Product identifier"
                  variant="outlined"
                  size="small"
                  required
                  value={value}
                />
              )}
            />
          </Grid>
        </CustomCardContent>
      </CustomCard>
    </div>
  );
};

export default ProductDetails;
