import { Box, Grid, Typography } from "@mui/material";

const SubMenu2 = () => {
  return (
    <Grid container marginLeft={6} mt={0} rowSpacing={4}>
      <Grid item xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h5" gutterBottom component="div">
            Sub Menu 2
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            Description
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SubMenu2;
