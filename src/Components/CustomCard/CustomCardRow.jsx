import Typography from "@mui/material/Typography";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const CustomCardRow = ({
  title,
  value,
  icon = (
    <CheckCircleIcon
      sx={{
        color: "#F3DEF3 !important",
      }}
    />
  ),
  disabled = false,
  ...props
}) => {
  return (
    <Box mb={props.mb || 2} {...props}>
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
            onDelete
            variant={disabled ? "filled" : "outlined"}
            size="small"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "start",
            }}
          />
        </Grid>
      </Grid>
      <Divider />
    </Box>
  );
};

export default CustomCardRow;
