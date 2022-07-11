import Grid from "@mui/material/Grid";
import CustomCard from "Components/CustomCard/CustomCard";
import CustomCardContent from "Components/CustomCard/CustomCardContent";
import CustomCardHeader from "Components/CustomCard/CustomCardHeader";
import CustomCardRow from "Components/CustomCard/CustomCardRow";
import Collapse from "@mui/material/Collapse";
import { useSelector } from "react-redux";
import Divider from "@mui/material/Divider";

const CustomerCard = ({ data }) => {
  const cardState = useSelector((state) => state.customCard.customerCard);
  return (
    <CustomCard>
      <CustomCardContent>
        <CustomCardHeader title="Customer" />
        <Collapse in={cardState.expanded} timeout="auto" unmountOnExit>
        <Divider sx={{ borderBottomWidth: 2, mb:1 }} />
        <Grid item container xs direction="column">
            <CustomCardRow title="Name" value={data.name} mb={0} />
        </Grid>
        </Collapse>
      </CustomCardContent>
    </CustomCard>
  );
};

export default CustomerCard;
