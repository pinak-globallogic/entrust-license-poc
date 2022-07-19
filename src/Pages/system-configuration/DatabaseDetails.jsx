import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const DatabaseDetails = () => {
  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="center"
      pt={2}
      ml={6}
    >
      <Grid item xs={6}>
        <TextField label="Host/IP" variant="outlined" size="small" required />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Port" variant="outlined" size="small" required />
      </Grid>
      <Grid item xs={6} pt={2}>
        <TextField label="Instance Name" variant="outlined" size="small" />
      </Grid>
    </Grid>
  );
};

export default DatabaseDetails;
