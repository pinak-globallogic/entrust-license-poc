import Grid from "@mui/material/Grid";
import CustomCard from "Components/CustomCard/CustomCard";
import CustomCardContent from "Components/CustomCard/CustomCardContent";
import CustomCardHeader from "Components/CustomCard/CustomCardHeader";
import CustomCardRow from "Components/CustomCard/CustomCardRow";

const ProductCard = ({ data }) => {
  return (
    <CustomCard>
      <CustomCardContent>
        <CustomCardHeader title="Product" />
        <Grid item container xs direction="column">
          <CustomCardRow title="FeatureID" value={data.productItemNo} />
          <CustomCardRow title="Product Name" value={data.name} />
          <CustomCardRow title="Order Number" value={data.salesOrderNo} />
          <CustomCardRow
            title="List Item Number"
            value={data.lineItemNo}
            mb={0}
          />
        </Grid>
      </CustomCardContent>
    </CustomCard>
  );
};

export default ProductCard;
