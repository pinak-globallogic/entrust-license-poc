import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";

import { CustomCard, CustomCardContent } from "Utilty";

const FileUploadDetail = ({ countSetter }) => {
  const handleDelete = () => {
    console.info("You clicked the delete icon.");
    countSetter(0);
  };

  return (
    <CustomCard>
      <CustomCardContent>
        <Grid item mb={1}>
          <Typography id="option1-title" variant="h6">
            Activation file upload
          </Typography>
        </Grid>
        <Grid item mb={8}>
          <Typography id="option1-subtitle" variant="caption">
            Upload an activation file to start the activation process.
          </Typography>
        </Grid>
        <Grid item>
          <Typography id="option2-subtitle" variant="caption">
            You have uploaded the following file:
          </Typography>
        </Grid>
        <Grid item mb={10}>
          <Chip
            label="activation-request-file.txt"
            variant="outlined"
            style={{backgroundColor:"white"}}
            onDelete={handleDelete}
          />
        </Grid>
      </CustomCardContent>
    </CustomCard>
  );
};

export default FileUploadDetail;
