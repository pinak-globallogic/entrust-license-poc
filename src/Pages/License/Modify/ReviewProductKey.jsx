import { CustomCard, CustomCardContent } from "Utilty";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WarningIcon from "@mui/icons-material/Warning";

const SaveServerId = () => {
  return (
    <CustomCard>
      <CustomCardContent>
        <Grid item mb={1}>
          <Typography variant="h5">Review and save changes</Typography>
        </Grid>
        <Grid item mb={2}>
          <Typography variant="caption">
            Review all changes and conflicts below. Accept the changes by
            choosing commit
          </Typography>
        </Grid>

        <br />
        <br />
        <Grid container columnSpacing={2}>
          <TableContainer component={Paper}>
            <TableBody aria-label="simple table" size="small" border="white">
              <TableRow align="left">
                <TableCell component="th" scope="row" align="left">
                  Status
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  Key
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  Old Value
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  New Value
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  Server Message
                </TableCell>
              </TableRow>
              <TableRow align="left">
                <TableCell component="th" scope="row" align="left">
                <CheckCircleIcon color="primary" fontSize="small" />
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  License Server Id
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  2d23d23-d2 23d245fgh-d2
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  asasty123456sfiiye4556
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  OK
                </TableCell>
              </TableRow>
              <TableRow align="left">
                <TableCell component="th" scope="row" align="left">
                  <WarningIcon fontSize="small" sx={{color:"#EE4B2B"}} />
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  Expiry Date
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  06/02/2021
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  Expired
                </TableCell>
              </TableRow>
            </TableBody>
          </TableContainer>
        </Grid>
      </CustomCardContent>
    </CustomCard>
  );
};

export default SaveServerId;
