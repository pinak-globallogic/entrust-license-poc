import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ErrorIcon from "@mui/icons-material/Error";
import CachedIcon from "@mui/icons-material/Cached";
import DoneIcon from "@mui/icons-material/Done";
import { makeStyles } from "@mui/styles";
import ContentCopySharpIcon from "@mui/icons-material/ContentCopySharp";

const useStyles = makeStyles({
  chip: {
    border: "1px solid #e8e8e8",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    minHeight: "1vh",
    minWidth: "120px",
    fontSize: "12px",
    paddingLeft: "1vh",
    color: "black",
  },
});

function CustomChip(props) {
  const classes = useStyles();

  return (
    <Grid
      className={classes.chip}
      style={{ backgroundColor: props.color ? props.color : "#e8e8e8" }}
    >
      <Grid>
        {props.icon === "error" && <ErrorIcon fontSize="small"></ErrorIcon>}
        {props.icon === "done" && <DoneIcon fontSize="small"></DoneIcon>}
        {props.icon === "refresh" && <CachedIcon fontSize="small"></CachedIcon>}
      </Grid>
      <Grid
        style={{ alignItems: "center", minHeight: "4vh", paddingTop: "1vh", paddingRight: "2px"}}
      >
        <Typography variant="span">{props.label}</Typography>
      </Grid>
      <Grid
        style={{
          backgroundColor: "white",
          alignItems: "right",
          minHeight: "4vh",
          paddingTop: "1vh",
          minWidth: "68px",
          paddingLeft: "4px"
          
        }}
      >
        {props.value}
      </Grid>
      <Grid
        style={{
          alignItems: "center",
        }}
      >
        {props.icon === "copy" && (
          <ContentCopySharpIcon fontSize="small"></ContentCopySharpIcon>
        )}
      </Grid>
    </Grid>
  );
}

export default CustomChip;
