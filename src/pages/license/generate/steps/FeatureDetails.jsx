import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import Card from "@mui/material/Card";
import { styled } from "@mui/styles";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import NativeSelect from "@mui/material/NativeSelect";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { updateFeature } from "redux/slices/generateLicenseSlice";

const useStyles = makeStyles({
  tableCell: {
    border: 0,
  },
  button: { color: "#87189D !important", borderColor: "#87189D !important" },
  textField: {
    width: "10ch",
    m: "0",
  },
});

export const CustomCard = styled(Card)(() => ({
  marginBottom: "1vh",
  backgroundColor: "transparent !important",
  boxShadow: "none !important",
}));

export const CustomCardContent = styled(CardContent)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

function createData(id, feature, currentSetting, originalSetting, fieldType) {
  return { id, feature, currentSetting, originalSetting, fieldType };
}

const rows = [
  createData(1, "Central Issuance Smart Card", "On", "Off", "Select"),
  createData(2, "Ice cream sandwich", "235", "9", "Input"),
  createData(3, "Eclair", "123", "16", "Input"),
  createData(4, "Cupcake", "7543", "3.7", "Input"),
  createData(5, "Gingerbread", "2", "16", "Input"),
];

const licenseKeys = ["Plus", "Professional", "Enterprise"];

const FeatureDetails = (props) => {
  const classes = useStyles();
  const feature = useSelector((state) => state.generateLicense.feature);
  const dispatch = useDispatch();
  const [alignment, setAlignment] = useState(feature.edition);
  const changeProductKey = (event) => {
    setAlignment(event.target.value);
    dispatch(updateFeature({ ...feature, edition: event.target.value }));
  };

  return (
    <Grid item container direction="column" {...props}>
      <CustomCard>
        <CustomCardContent>
          <Grid item mb={1}>
            <Typography variant="h6">Product Edition</Typography>
          </Grid>
          <Grid item mb={2}>
            <Typography variant="caption">
              Pick the edition to batch edit the product features
            </Typography>
          </Grid>

          <ToggleButtonGroup exclusive aria-label="text alignment">
            <Stack spacing={3} direction="row">
              {licenseKeys.map((key) => (
                <ToggleButton
                  className={classes.button}
                  id={key}
                  value={key}
                  aria-label="centered"
                  key={key}
                  selected={key === alignment}
                  onClick={changeProductKey}
                >
                  {key}
                </ToggleButton>
              ))}
            </Stack>
          </ToggleButtonGroup>
        </CustomCardContent>
      </CustomCard>
      <CustomCard>
        <CustomCardContent>
          <TableContainer component={Paper}>
            <Table aria-label="simple table" size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Feature</TableCell>
                  <TableCell>Current Setting</TableCell>
                  <TableCell align="left">Original Setting</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.id} className={classes.tableCell}>
                    <TableCell component="th" scope="row">
                      {row.feature}
                    </TableCell>
                    <TableCell align="left">
                      {row.fieldType === "Select" && (
                        <NativeSelect id={`selectField_${row.id}`}>
                          <option
                            value={0}
                            selected={row.currentSetting === "Off"}
                          >
                            Off
                          </option>
                          <option
                            value={1}
                            selected={row.currentSetting === "On"}
                          >
                            On
                          </option>
                        </NativeSelect>
                      )}
                      {row.fieldType === "Input" && (
                        <TextField
                          className={classes.textField}
                          size="small"
                          value={row.currentSetting}
                          id={`inputField_${row.id}`}
                        />
                      )}
                    </TableCell>
                    <TableCell align="left">{row.originalSetting}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CustomCardContent>
      </CustomCard>
    </Grid>
  );
};

export default FeatureDetails;
