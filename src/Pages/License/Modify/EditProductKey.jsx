import { CustomCard, CustomCardContent } from "Utilty";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";

const EditProductKey = () => {
  return (
    <CustomCard>
      <CustomCardContent>
        <Grid item mb={1}>
          <Typography variant="h4">
            Product Key to edit: 234234-234234-234234
          </Typography>
        </Grid>
        <Grid item mb={15}>
          <Typography variant="h6">
            Select the category you want to change on the right.
          </Typography>
        </Grid>
        <Grid item container xs pt={1}>
          <Grid xs pr={2}>
            <Button
              style={{
                borderBlock: 20,
                backgroundColor: "#FF8C00",
                padding: "18px 36px",
                fontSize: "10px",
              }}
            >
              REVERT ALL CHANGES
            </Button>
          </Grid>
          <Grid xs pr={2}>
            <Button
              style={{
                borderBlock: 20,
                backgroundColor: "#FFFFFF",
                padding: "18px 36px",
                fontSize: "8px",
              }}
            >
              NO CHANGES YET
            </Button>
          </Grid>
        </Grid>
      </CustomCardContent>
    </CustomCard>
  );
};

export default EditProductKey;
