import Grid from "@mui/material/Grid";
import CustomCard from "Components/CustomCard/CustomCard";
import CustomCardContent from "Components/CustomCard/CustomCardContent";
import CustomCardHeader from "Components/CustomCard/CustomCardHeader";
import CustomCardRow from "Components/CustomCard/CustomCardRow";
import LockIcon from "@mui/icons-material/Lock";
import EditOffIcon from "@mui/icons-material/EditOff";
import Collapse from "@mui/material/Collapse";
import { useSelector } from "react-redux";
import Divider from "@mui/material/Divider";

const LimitationCard = ({ data }) => {
  const cardState = useSelector((state) => state.customCard.limitationCard);
  return (
    <div>
      <CustomCard>
        <CustomCardContent>
          <CustomCardHeader title={{id: cardState.id, name: "Limitations", expanded: cardState.expanded}}  />
          <Grid item container xs direction="column">
            <Collapse in={cardState.expanded} timeout="auto" unmountOnExit>
            <Divider sx={{ borderBottomWidth: 2, mb:1 }} />
              <CustomCardRow
                title="Expiration"
                value={data.expiration || "Not available"}
                disabled={!data.expiration || false}
              />
              <CustomCardRow
                title="Limit Count"
                value={data.limitCount}
                icon={<EditOffIcon />}
              />
              <CustomCardRow
                title="Site license"
                value={data.siteLicense}
                mb={0}
                disabled
                icon={<LockIcon />}
              />
            </Collapse>
          </Grid>
        </CustomCardContent>
      </CustomCard>
    </div>
  );
};

export default LimitationCard;
