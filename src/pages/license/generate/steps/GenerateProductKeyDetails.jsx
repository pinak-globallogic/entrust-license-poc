import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CustomCard, CustomCardContent } from "utilty";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useState } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";

const useStyles = makeStyles({
  tableCell: {
    color: "black",
    background: "white",
    border: "white",
  },
});

const GenerateProductKeyDetails = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const copyToClipBoard = async (copyMe) => {
    try {
      await navigator.clipboard.writeText(copyMe);
    } catch (err) {
      setCopySuccess("Failed to copy!");
      {
        copySuccess;
      }
    }
  };

  const data = [
    {
      id: "01",
      key: "1234-1234-1234",
    },
    {
      id: "02",
      key: "2222-3333-4444",
    },
    {
      id: "03",
      key: "4444-5555-6666",
    },
  ];

  const classes = useStyles();
  return (
    <div>
      <CustomCard>
        <CustomCardContent>
          <Grid item container direction="column" xs pt={2}>
            <Grid item container>
              <Grid item mb={1} marginRight="10px">
                <CheckCircleIcon color="primary" fontSize="large" />
              </Grid>
              <Grid item mb={3}>
                <Typography variant="h5">Key successfully created.</Typography>
              </Grid>
            </Grid>
            <Grid item mb={4}>
              <Typography variant="caption">
                You can copy the individual key by clicking on the copy
                indicator on the right.
              </Typography>
            </Grid>
          </Grid>
          <br />
          <Grid>
            <Grid container columnSpacing={2}>
              <TableContainer sx={{ maxWidth: 300 }} component={Paper}>
                <Table aria-label="simple table" size="small">
                  <TableBody
                    aria-label="simple table"
                    size="small"
                    border="white"
                  >
                    {data.map((item, i) => (
                      <TableRow
                        key={i}
                        align="left"
                        className={classes.tableCell}
                      >
                        <TableCell component="th" scope="row" align="left">
                          {item.id}
                        </TableCell>
                        <TableCell component="th" scope="row" align="left">
                          {item.key}
                        </TableCell>
                        <TableCell component="th" scope="row" align="left">
                          <IconButton>
                            <ContentCopyIcon
                              onClick={() => copyToClipBoard(item.key)}
                            ></ContentCopyIcon>
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </CustomCardContent>
      </CustomCard>
    </div>
  );
};

export default GenerateProductKeyDetails;
