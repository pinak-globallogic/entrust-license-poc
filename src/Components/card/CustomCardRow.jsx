import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const styles = {
  chip: {
    width: "100%",
    display: "flex",
    justifyContent: "start",
    fontSize: "0.75em",
  },
  chipDefaultIcon: {
    color: "#F3DEF3 !important",
  },
};

const CustomCardRow = ({
  title,
  value,
  icon = <CheckCircleIcon sx={styles.chipDefaultIcon} />,
  disabled = false,
  ...props
}) => {
  return (
    <Box mb={props.mb || 1} {...props}>
      <Grid
        xs
        item
        container
        justifyContent="center"
        alignItems="center"
        mb={1}
      >
        <Grid item xs={6}>
          <Typography variant="body2">{title}</Typography>
        </Grid>
        <Grid item container xs={6} justifyContent="start">
          <Chip
            label={value}
            deleteIcon={icon}
            onDelete={() => ""}
            variant={disabled ? "filled" : "outlined"}
            size="small"
            sx={styles.chip}
          />
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
};

export default CustomCardRow;
