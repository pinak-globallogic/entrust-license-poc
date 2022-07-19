import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

const UserAuthDetails = () => {
  return (
    <Grid
      container
      justifyContent="flex-start"
      alignItems="center"
      pt={2}
      ml={6}
    >
      <Grid item xs={6}>
        <TextField label="Ldap Url" variant="outlined" size="small" required />
      </Grid>
      <Grid item xs={6}>
        <TextField label="Port" variant="outlined" size="small" required />
      </Grid>
      <Grid item xs={6} pt={2}>
        <TextField label="Domain" variant="outlined" size="small" required />
      </Grid>
      <Grid item xs={6} pt={2}>
        <TextField
          label="Administrator Group"
          variant="outlined"
          size="small"
          required
        />
      </Grid>

      <Grid item xs={6} pt={2}>
        <TextField
          label="Users Group"
          variant="outlined"
          size="small"
          required
        />
      </Grid>
      <Grid item xs={6} pt={2}>
        <TextField
          label="Admin Test User"
          variant="outlined"
          size="small"
          required
        />
      </Grid>
      <Grid item xs={6} pt={2}>
        <TextField
          label="Admin Test Password"
          variant="outlined"
          size="small"
          required
        />
      </Grid>
    </Grid>
  );
};

export default UserAuthDetails;
