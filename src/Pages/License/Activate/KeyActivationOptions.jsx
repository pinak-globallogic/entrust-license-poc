import { useSelector, useDispatch } from "react-redux";

import { Grid, Typography } from "@mui/material";

import { FileUpload } from "Components/FileUpload";
import { CustomCard, CustomCardContent } from "Utilty";
import { setActivateKeyDetails } from "Redux/Slices/activateKey";

const KeyActivationOptions = ({ countSetter }) => {
  const dispatch = useDispatch();
  const activateKey = useSelector((state) => state.activateKey);

  const fileUploadProp = {
    accept: "image/*",
    onChange: () => {
      if (event.target.files !== null && event.target?.files?.length > 0) {
        console.log(`Saving ${event.target.value}`);
        countSetter(1);
        dispatch(
          setActivateKeyDetails({
            ...activateKey,
            uploadFile: event.target.files[0].name,
          })
        );
      }
    },
    onDrop: () => {
      console.log(`Drop ${event.dataTransfer.files[0].name}`);
      countSetter(1);
      dispatch(
        setActivateKeyDetails({
          ...activateKey,
          uploadFile: event.dataTransfer.files[0].name,
        })
      );
    },
  };

  return (
    <CustomCard>
      <CustomCardContent>
        <Grid item mb={3}>
          <Typography id="option1-title" variant="h5">
            Activation file upload
          </Typography>
        </Grid>
        <Grid item mb={3}>
          <Typography id="option1-subtitle" variant="subtitle1">
            Upload an activation file to start the activation process.
          </Typography>
        </Grid>
        <Grid item mb={8}>
          <FileUpload {...fileUploadProp} />
        </Grid>
        <Grid item mb={3}>
          <Typography id="option2-title" variant="h5">
            Manual activation
          </Typography>
        </Grid>
        <Grid item mb={3}>
          <Typography id="option2-subtitle" variant="subtitle1">
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
