import { useState } from "react";
import { useSelector } from "react-redux";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import InputProductKey from "./InputProductKey";
import EditProductKey from "./EditProductKey";

const ProductKey = (props) => {
  const [count, setCount] = useState(0);
  const state = useSelector((state) => state.generateLicense);

  const btnDisabled = state.error;

  const renderSwitch = (count) => {
    let obj = {
      btn: {
        text: "continue",
        variant: "contained",
        action: () => setCount(count + 1),
      },
      page: null,
    };
    switch (count) {
      case 0:
        obj.page = <InputProductKey />;
        break;
      case 1:
        obj.page = <EditProductKey />;
        break;
    }

    return obj;
  };

  const details = renderSwitch(count);

  return (
    <>
      <Grid item container direction="column" {...props}>
        {details.page}
        <Stack direction="row-reverse" justifyContent="space-between" mt={10}>
          {count === 0 && (
            <Button
              id="continue-btn"
              variant={details.btn.variant}
              disabled={btnDisabled}
              style={{ maxWidth: "25vh" }}
              onClick={details.btn.action}
            >
              <Typography id="continue-btn-text" variant="caption">
                {details.btn.text}
              </Typography>
            </Button>
          )}
        </Stack>
      </Grid>
    </>
  );
};

export default ProductKey;
