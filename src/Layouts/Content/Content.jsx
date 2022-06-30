import Grid from "@mui/material/Grid";

const Content = (props) => {
  return (
    <Grid item container direction="row" {...props}>
      {props.children}
    </Grid>
  );
};

export default Content;
