import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CustomCardContent } from "Utilty";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";

const OrderNumberComponent = (props) => {

    const product = useSelector((state) => state.generateLicense.product);

  return (
    <div>
      <CustomCardContent>
        <Grid item mb={1}>
          <Typography id="sales-order-title" variant="h6">
            {props.title}
          </Typography>
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
            value={product.salesOrderNo}
            //onChange={(e) => onChangeProductDetails(e, "salesOrderNo")}
          />
        </Grid>
      </CustomCardContent>
    </div>
  );
};

export default OrderNumberComponent;
