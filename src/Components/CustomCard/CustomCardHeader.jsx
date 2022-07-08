import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const CustomCardHeader = ({ title, ...props }) => {
  return (
    <Box mb={1.5}>
      <Grid item container xs alignItems="center" {...props} mb={0.5}>
        <Grid item xs>
          <Typography variant="caption">{title}</Typography>
        </Grid>
        <Grid item xs display="flex" justifyContent="end">
          <Button
            variant="contained"
            size="small"
            color="secondary"
            sx={{ minWidth: "2rem" }}
          >
            <EditIcon sx={{ fontSize: "1rem" }} />
          </Button>
        </Grid>
      </Grid>
      <Divider sx={{ borderBottomWidth: 2 }} />
    </Box>
  );
};

export default CustomCardHeader;
