import Grid from "@mui/material/Grid";

const Content = ({ children }) => {
  return (
    <Grid container sx={{ height: "100%" }}>
      {children}
    </Grid>
  );
};

export default Content;
