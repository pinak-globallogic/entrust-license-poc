import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {  useState } from "react";
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

function createData(feature, currentSetting, originalSetting, fieldType) {
  return { feature, currentSetting, originalSetting, fieldType };
}

const rows = [
  createData("Central Issuance Smart Card", "On", "Off", "Select"),
  createData("Ice cream sandwich", "235", "9", "Input"),
  createData("Eclair", "123", "16", "Input"),
  createData("Cupcake", "7543", "3.7", "Input"),
  createData("Gingerbread", "2", "16", "Input"),
];

const licenseKeys = ["Plus", "Professional", "Enterprise"];

const FeatureDetails = (props) => {
  const [alignment, setAlignment] = useState("Professional");
  const changeProductKey = (newAlignment) => {
    setAlignment(newAlignment);
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
                  value={key}
                  aria-label="centered"
                  key={key}
                  selected={key === alignment}
                  style={{ color: "#87189D", borderColor: "#87189D" }}
                  onClick={(e) => {
                    changeProductKey(e.target.value);
                  }}
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
            <Table
              sx={{ minWidth: 600 }}
              aria-label="simple table"
              size="small"
            >
              <TableHead>
                <TableRow>
                  <TableCell>Feature</TableCell>
                  <TableCell>Current Setting</TableCell>
                  <TableCell>Original Setting</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.feature}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.feature}
                    </TableCell>
                    <TableCell align="left">
                      {row.fieldType === "Select" && (
                        <NativeSelect id="demo-customized-select-native">
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
                          sx={{ width: "10ch", m: "0" }}
                          size="small"
                          style={{ borderColor: "red" }}
                          value={row.currentSetting}
                        />
                      )}
                    </TableCell>
                    <TableCell align="center">{row.originalSetting}</TableCell>
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
