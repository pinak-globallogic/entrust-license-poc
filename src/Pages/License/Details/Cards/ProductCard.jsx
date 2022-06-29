import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import { CustomCard, CustomCardContent } from "..";

const ProductCard = ({ data }) => {
  return (
    <CustomCard>
      <CustomCardContent>
        <Grid item xs>
          <Chip label="Product" color="secondary" />
        </Grid>
        <Grid item xs pt={2}>
          <TextField
            label="SALES ORDER NUMBER2"
            disabled
            variant="standard"
            fullWidth
            value={data.salesOrderNo}
          />
        </Grid>
        <Grid item xs pt={2}>
          <TextField
            label="LINE ITEM NUMBER"
            disabled
            variant="standard"
            fullWidth
            value={data.lineItemNo}
          />
        </Grid>
        <Grid item xs pt={2}>
          <TextField
            label="PRODUCT ITEM NUMBER"
            disabled
            variant="standard"
            fullWidth
            value={data.productItemNo}
          />
        </Grid>
        <Grid item xs pt={2}>
          <TextField
            label="PRODUCT NAME"
            disabled
            variant="standard"
            fullWidth
            value={data.name}
          />
        </Grid>
      </CustomCardContent>
    </CustomCard>
  );
};

export default ProductCard;
