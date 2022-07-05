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
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";

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
    tableCell: {
      border: 0,
    },
  });
  return (
    <CustomCard>
      <CustomCardContent>
        <CustomCardHeader title="Features" />
        <Grid item container xs direction="column">
          <CustomCardRow title="Edition" value={data.edition} />
          <Grid item>
            <TableContainer component={Paper} sx={{ height: 200 }}>
              <Table
                sx={{ minWidth: 280 }}
                arialabel="simple table"
                size="small"
              >
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name} className={useStyles.tableCell}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </CustomCardContent>
    </CustomCard>
  );
};

export default FeatureCard;
