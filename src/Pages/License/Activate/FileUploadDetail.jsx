import { useSelector, useDispatch } from "react-redux";

import { Grid, Typography, Chip } from "@mui/material";

import { CustomCard, CustomCardContent } from "Utilty";
import { updateLicense } from "Redux/Slices/activateKeySlice";
import { updateActivePage } from "Redux/Slices/customCardSlice";

const FileUploadDetail = () => {
  const dispatch = useDispatch();
  const license = useSelector((state) => state.activateKey.license);
  const activePage = useSelector((state) => state.customCard.activePage);

  const handleDelete = () => {
    dispatch(updateLicense({ ...license, uploadFile: null }));
    dispatch(
      updateActivePage({
        ...activePage,
        activateLicenseWizard: 0,
      })
    );
  };

  return (
    <CustomCard>
      <CustomCardContent>
        <Grid item mb={1}>
          <Typography id="option1-title" variant="h6">
            Activation file upload
          </Typography>
        </Grid>
        <Grid item mb={7}>
          <Typography id="option1-subtitle" variant="caption">
            Upload an activation file to start the activation process
          </Typography>
        </Grid>
        <Grid item mb={1}>
          <Typography id="option2-subtitle" variant="caption">
            You have uploaded the following file:
          </Typography>
        </Grid>
        <Grid item mb={22}>
          <Chip
            label={license.uploadFile}
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
