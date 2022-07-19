import Grid from "@mui/material/Grid";
import CustomCard from "components/card/CustomCard";
import CustomCardContent from "components/card/CustomCardContent";
import CustomCardHeader from "components/card/CustomCardHeader";
import CustomCardRow from "components/card/CustomCardRow";
import Collapse from "@mui/material/Collapse";
import { useSelector } from "react-redux";
import Divider from "@mui/material/Divider";

const CustomerCard = ({ data }) => {
  const cardState = useSelector((state) => state.customCard.customerCard);
  return (
    <CustomCard>
      <CustomCardContent>
        <CustomCardHeader
          title={{
            id: cardState.id,
            name: "Customer",
            expanded: cardState.expanded,
          }}
        />
        <Collapse in={cardState.expanded} timeout="auto" unmountOnExit>
          <Divider sx={{ borderBottomWidth: 2, mb: 1 }} />
          <Grid item container xs direction="column">
            <CustomCardRow title="Name" value={data.name} mb={0} />
          </Grid>
        </Collapse>
      </CustomCardContent>
    </CustomCard>
  );
};

export default CustomerCard;
