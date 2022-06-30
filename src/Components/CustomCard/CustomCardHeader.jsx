import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";

const CustomCardHeader = ({ title, ...props }) => {
  return (
    <Box mb={2}>
      <Grid item container xs alignItems="center" {...props} mb={0.5}>
        <Grid item xs>
          <Typography variant="body1">{title}</Typography>
        </Grid>
        <Grid item xs display="flex" justifyContent="end">
          <EditIcon />
        </Grid>
      </Grid>
      <Divider sx={{ borderBottomWidth: 2 }} />
    </Box>
  );
};

export default CustomCardHeader;
