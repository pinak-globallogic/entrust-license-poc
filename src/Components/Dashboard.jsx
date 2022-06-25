import { makeStyles } from "@mui/styles";
import CustomCard from "./CustomCard";
import Grid from "@mui/material/Grid";


const useStyles = makeStyles({
  container: {
    paddingLeft: "5rem",
    paddingRight: "5rem",
    paddingTop: "3rem",
    backgroundColor: "#F2F3F4",
    minHeight: "100%",
  },
  heading: {
    fontFamily: "Arial",
    textAlign: "left",
    fontSize: "40px",
    opacity: "80%",
  },
  body: {
    fontFamily: "Arial",
    textAlign: "left",
    fontSize: "13px",
  },
  row : {
    paddingTop: "25px" 
  }
});

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.heading}>Dashboard</div>
      <div className={classes.body}>
        Welcome to the Internal Licensing Tool. This is your Dashboard, from
        where you can access all available functions. <br />
        Below the header of each card, the legacy name of the function in regard
        to the old toolset is mentioned.
      </div>
      <div className={classes.row}>
        <Grid container item spacing={2}>
          <Grid item>
            <CustomCard
              title={"Generate product key"}
              subtitle={"Mockup 1: Scroll"}
              type={"key"}
            />
          </Grid>
          <Grid item>
            <CustomCard
              title={"Generate product key"}
              subtitle={"Mockup 1: Wizard"}
              type={"key"}
            />
          </Grid>
        </Grid>
      </div>
     
      <div className={classes.row}>
        <Grid container item spacing={2}>
          <Grid item>
            <CustomCard
              title={"License Database Search"}
              subtitle={"Mockup 1: Windowed"}
              type={"search"}
            />
          </Grid>
          <Grid item>
            <CustomCard
              title={"License Database Search"}
              subtitle={"Mockup 1: List"}
              type={"search"}
            />
          </Grid>
          <Grid item>
            <CustomCard
              title={"License Database Search"}
              subtitle={"Mockup 1: Data layout rework"}
              type={"search"}
            />
          </Grid>
        </Grid>
      </div>
     

    </div>
  );
};

export default Dashboard;
