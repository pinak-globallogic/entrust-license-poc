import { CustomCard, CustomCardContent } from "Utilty";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";

const ReviewProductKeyStep = () => {
  return (
    <CustomCard>
      <CustomCardContent>
        <Grid item mb={1}>
          <Typography variant="h6">Review and save changes</Typography>
        </Grid>
        <Grid item mb={10}>
          <Typography variant="caption">
            Review all changes and conflicts below. Accept the changes by
            choosing commit.
          </Typography>
        </Grid>
        <Grid item>
          <TableContainer component={Paper} sx={{ minHeight: 250 }}>
            <Table aria-label="simple table" size="small">
              <TableHead>
                <TableRow align="left">
                  <TableCell component="th" scope="row" align="center">
                    Status
                  </TableCell>
                  <TableCell component="th" scope="row" align="left">
                    Key
                  </TableCell>
                  <TableCell component="th" scope="row" align="left">
                    Old value
                  </TableCell>
                  <TableCell component="th" scope="row" align="left">
                    New value
                  </TableCell>
                  <TableCell component="th" scope="row" align="left">
                    Server message
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody aria-label="simple table" border="white">
                <TableRow align="left">
                  <TableCell component="th" scope="row" align="center">
                    <CheckCircleIcon color="primary" fontSize="small" />
                  </TableCell>
                  <TableCell component="th" scope="row" align="left">
                    License Server Id
                  </TableCell>
                  <TableCell component="th" scope="row" align="left">
                    2d23d23-d2-23d245fgh-d2
                  </TableCell>
                  <TableCell component="th" scope="row" align="left">
                    asasty-12-3456sfi-iye4556
                  </TableCell>
                  <TableCell component="th" scope="row" align="left">
                    OK
                  </TableCell>
                </TableRow>
                <TableRow align="left">
                  <TableCell component="th" scope="row" align="center">
                    <WarningIcon fontSize="small" sx={{ color: "#EE4B2B" }} />
                  </TableCell>
                  <TableCell component="th" scope="row" align="left">
                    Expiry date
                  </TableCell>
                  <TableCell component="th" scope="row" align="left">
                    06/02/2021
                  </TableCell>
                  <TableCell
                    component="th"
                    scope="row"
                    align="left"
                  ></TableCell>
                  <TableCell component="th" scope="row" align="left">
                    Expired
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </CustomCardContent>
    </CustomCard>
  );
};

export default ReviewProductKeyStep;
