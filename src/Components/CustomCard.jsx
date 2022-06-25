import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import KeyIcon from "@mui/icons-material/Key";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  header: {
    display: "inline-block",
    verticalAlign: "top",
    marginLeft: "3px",
    marginBottom: "20px"
  },
  heading: {
    fontSize: "17px",
    fontWeight: "bold",
  },
  body: {
    fontSize: "11px",
  },
});

function CustomCard({ title, subtitle, type }) {
  const classes = useStyles();
  var cardIcon;
  if (type == "key") {
    cardIcon = <KeyIcon />;
  } else {
    cardIcon = <SearchIcon />;
  }

  return (
    <Card sx={{ maxWidth: 300, minHeight: 250 }}>
      <CardContent>
        <div className={classes.header}>{cardIcon}</div>
        <div className={classes.header}>

          <div className="font-link">
            <Typography variant="h6" gutterBottom>
              <div className={classes.heading}>
                {title} <br />
                {subtitle} <br />
              </div>
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              <div className={classes.body}>Order Entry</div>
            </Typography>
          </div>

        </div>

        <div className="font-link">
          <Typography variant="body2">
            <div className={classes.body}>
              Order fulfillment from a line item. 
              <p>  You can create multiple keys using the same settings here, as well. </p>
            </div>
          </Typography>
        </div>
        
      </CardContent>
      <CardActions>
        <Button>Generate new product key</Button>
      </CardActions>
    </Card>
  );
}

export default CustomCard;
