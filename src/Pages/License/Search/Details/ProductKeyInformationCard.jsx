import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import React from "react";
import CardContent from "@mui/material/CardContent";
import Divider from "@mui/material/Divider";
import CustomCardContent from "Components/CustomCard/CustomCardContent";

function createData(fieldName, intVal, stringVal) {
  return { fieldName, intVal, stringVal };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const card = (
  <React.Fragment>
    <CardContent>
      <Typography variant="body1">Detail Product Key Information</Typography>
      <Divider />
    </CardContent>
  </React.Fragment>
);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography variant="body1">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const ProductKeyInformationCard = () => {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ minWidth: 120 }}>
      <CustomCardContent variant="outlined">
        {card}
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              <Tab label="DETAILS" {...a11yProps(0)} />
              <Tab label="CONTACT INFORMATION" {...a11yProps(1)} />
              <Tab label="APPLICATION DEFINED FEATURES" {...a11yProps(2)} />
              <Tab label="ACTIVITY LOG" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            DETAILS
          </TabPanel>
          <TabPanel value={value} index={1}>
            CONTACT INFORMATION
          </TabPanel>
          <TabPanel value={value} index={2}>
            <TableContainer component={Paper}>
              <Table
                sx={{ minWidth: 100 }}
                aria-label="simple table"
                size="small"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Fieldname</TableCell>
                    <TableCell align="right">Int Value</TableCell>
                    <TableCell align="right">String val</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.fieldName}
                      </TableCell>
                      <TableCell align="right">{row.intVal}</TableCell>
                      <TableCell align="right">{row.stringVal}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </TabPanel>
          <TabPanel value={value} index={3}>
            ACTIVITY LOG
          </TabPanel>
        </Box>
      </CustomCardContent>
    </Box>
  );
};

export default ProductKeyInformationCard;
