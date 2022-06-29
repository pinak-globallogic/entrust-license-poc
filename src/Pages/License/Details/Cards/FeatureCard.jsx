import Grid from "@mui/material/Grid";
import { CustomCard, CustomCardContent } from "..";
import CustomCardHeader from "./../../../../Components/CustomCard/CustomCardHeader";
import CustomCardRow from "./../../../../Components/CustomCard/CustomCardRow";

const FeatureCard = ({ data }) => {
  return (
    <CustomCard>
      <CustomCardContent>
        <CustomCardHeader title="Features" />
        <Grid item container xs direction="column">
          <CustomCardRow title="Edition" value={data.edition} />
          <Grid item>{/* TODO: Add table */}</Grid>
        </Grid>
      </CustomCardContent>
    </CustomCard>
  );
};

export default FeatureCard;
