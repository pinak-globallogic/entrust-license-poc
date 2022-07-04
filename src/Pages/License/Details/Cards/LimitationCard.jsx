import Grid from "@mui/material/Grid";
import CustomCard from "Components/CustomCard/CustomCard";
import CustomCardContent from "Components/CustomCard/CustomCardContent";
import CustomCardHeader from "Components/CustomCard/CustomCardHeader";
import CustomCardRow from "Components/CustomCard/CustomCardRow";
import LockIcon from "@mui/icons-material/Lock";
import EditOffIcon from "@mui/icons-material/EditOff";

const LimitationCard = ({ data }) => {
  return (
    <div>
      <CustomCard>
        <CustomCardContent>
          <CustomCardHeader title="Limitations" />
          <Grid item container xs direction="column">
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
          </Grid>
        </CustomCardContent>
      </CustomCard>
    </div>
  );
};

export default LimitationCard;
