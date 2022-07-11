import Grid from "@mui/material/Grid";

const Content = (props) => {
  return (
    <Grid item container pt={props.pt | 5} {...props}>
      {props.children}
    </Grid>
  );
};

export default Content;
