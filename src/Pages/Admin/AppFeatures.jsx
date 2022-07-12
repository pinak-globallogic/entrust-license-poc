import { Box, Grid, Typography } from "@mui/material";

const AppFeatures = () => {
  return (
    <Grid container marginLeft={6} mt={0} rowSpacing={4}>
      <Grid item xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h5" gutterBottom component="div">
            App Defined Features
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            Description
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AppFeatures;
