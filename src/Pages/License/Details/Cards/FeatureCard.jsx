import Grid from "@mui/material/Grid";
import CustomCard from "Components/CustomCard/CustomCard";
import CustomCardContent from "Components/CustomCard/CustomCardContent";
import CustomCardHeader from "Components/CustomCard/CustomCardHeader";
import CustomCardRow from "Components/CustomCard/CustomCardRow";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Collapse from "@mui/material/Collapse";
import { useSelector } from "react-redux";
import Divider from "@mui/material/Divider";

function createData(name, value) {
  return { name, value };
}

const rows = [
  createData("Frozen yoghurt", 159),
  createData("Ice cream sandwich", 237),
  createData("Eclair", 262),
  createData("Cupcake", 305),
  createData("Gingerbread", 356),
  createData("Frozen yoghurt", 159),
  createData("Ice cream sandwich", 237),
  createData("Eclair", 262),
  createData("Cupcake", 305),
  createData("Gingerbread", 356),
];
const FeatureCard = ({ data }) => {
  const useStyles = makeStyles({
    outerContainer: {
      maxHeight: 100,
    },
  });
  const classes = useStyles();
  const cardState = useSelector((state) => state.customCard.featureCard);
  return (
    <CustomCard>
      <CustomCardContent>
        <CustomCardHeader title={{id: cardState.id, name: "Features",  expanded: cardState.expanded}} 
        />
        <Grid item container xs direction="column">
          <Collapse in={cardState.expanded} timeout="auto" unmountOnExit>
          <Divider sx={{ borderBottomWidth: 2, mb:1 }} />
            <CustomCardRow title="Edition" value={data.edition} />
            <Grid item>
              <TableContainer className={classes.outerContainer}>
                <Table arialabel="simple table" size="small">
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.name}>
                        <TableCell component="th" scope="row">
                          <Typography variant="caption">{row.name}</Typography>
                        </TableCell>
                        <TableCell align="right">
                          <Typography variant="caption">{row.value}</Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Collapse>
        </Grid>
      </CustomCardContent>
    </CustomCard>
  );
};

export default FeatureCard;
