import { useSelector, useDispatch } from "react-redux";

import { Grid, Typography, Chip } from "@mui/material";

import { CustomCard, CustomCardContent } from "Utilty";
import { setActivateKeyDetails } from "Redux/Slices/activateKeySlice";

const FileUploadDetail = ({ countSetter }) => {
  const dispatch = useDispatch();
  const activateKey = useSelector((state) => state.activateKey);

  const handleDelete = () => {
    countSetter(0);
    dispatch(setActivateKeyDetails({ ...activateKey, uploadFile: null }));
  };

  return (
    <CustomCard>
      <CustomCardContent>
        <Grid item mb={3}>
          <Typography id="option1-title" variant="h5">
            Activation file upload
          </Typography>
        </Grid>
        <Grid item mb={8}>
          <Typography id="option1-subtitle" variant="subtitle1">
            Upload an activation file to start the activation process
          </Typography>
        </Grid>
        <Grid item>
          <Typography id="option2-subtitle" variant="subtitle1">
            You have uploaded the following file:
          </Typography>
        </Grid>
        <Grid item mb={10}>
          <Chip
            label={activateKey.uploadFile}
            variant="outlined"
            style={{ backgroundColor: "#fff" }}
            onDelete={handleDelete}
          />
        </Grid>
      </CustomCardContent>
    </CustomCard>
  );
};

export default FileUploadDetail;
