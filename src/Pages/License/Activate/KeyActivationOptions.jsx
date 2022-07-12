import { useSelector, useDispatch } from "react-redux";

import { Grid, Typography } from "@mui/material";

import { FileUpload } from "Components/FileUpload";
import { CustomCard, CustomCardContent } from "Utilty";
import {updateLicense, updateActivePage} from "Redux/Slices/activateKeySlice";

const KeyActivationOptions = () => {
  const dispatch = useDispatch();
  const license = useSelector((state) => state.activateKey.license);
  const activePage = useSelector((state) => state.activateKey.activePage);

  const fileUploadProp = {
    accept: "image/*",
    onChange: () => {
      if (event.target.files !== null && event.target?.files?.length > 0) {
        console.log(`Saving ${event.target.value}`);
        dispatch(
          updateLicense({
            ...license,
            uploadFile: event.target.files[0].name,
          })
        );
        dispatch(updateActivePage({ ...activePage, number: 1 }));
      }
    },
    onDrop: () => {
      console.log(`Drop ${event.dataTransfer.files[0].name}`);
      dispatch(
        updateLicense({
          ...license,
          uploadFile: event.dataTransfer.files[0].name,
        })
      );
      dispatch(updateActivePage({ ...activePage, number: 1 }));
    },
  };

  return (
    <CustomCard>
      <CustomCardContent>
        <Grid item mb={1}>
          <Typography id="option1-title" variant="h6">
            Activation file upload
          </Typography>
        </Grid>
        <Grid item mb={3}>
          <Typography id="option1-subtitle" variant="caption">
            Upload an activation file to start the activation process.
          </Typography>
        </Grid>
        <Grid item mb={3}>
          <FileUpload {...fileUploadProp} />
        </Grid>
        <Grid item mb={1}>
          <Typography id="option2-title" variant="h6">
            Manual activation
          </Typography>
        </Grid>
        <Grid item mb={3}>
          <Typography id="option2-subtitle" variant="caption">
            If you have no activation file, you can manually input the license
            server id and product keys <br />
            on the next page.
          </Typography>
        </Grid>
      </CustomCardContent>
    </CustomCard>
  );
};

export default KeyActivationOptions;
