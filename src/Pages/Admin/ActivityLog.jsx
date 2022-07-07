import { Box, Grid, Typography, TextField } from "@mui/material";
import { makeStyles } from "@mui/styles";

const ActivityLog = () => {
  const useStyles = makeStyles({
    box1: {
      width: 100,
    },
    box2: {
      width: 500,
      maxWidth: "100%",
      backgroundColor: "white",
    },
  });

  const classes = useStyles();

  return (
    <Grid container p={5} pt={1}>
      <Grid item xs={12}>
        <Box className={classes.box1} pt={0}>
          <Typography variant="h5" gutterBottom component="div">
            Activity Log
          </Typography>
          <Typography variant="subtitle3" gutterBottom component="div">
            Add User names, product keys or dates below and click search to
            filter the activity log
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box className={classes.box2}>
          <TextField fullWidth label="tags" id="tags" color="primary" />
        </Box>
      </Grid>
    </Grid>
  );
};

export default ActivityLog;
