import FirstRunStepper from "./FirstRunStepper";
import Grid from "@mui/material/Grid";

const FirstRunWrapper = () => {
  return (
    <>
      <Grid container direction="row" alignItems="center" pt={4}>
        <FirstRunStepper />
      </Grid>
    </>
  );
};

export default FirstRunWrapper;
