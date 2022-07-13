import React from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import {
  Box,
  Button,
  Typography,
  Tab,
  Tabs,
  Paper,
  Table,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  TableBody,
  Grid,
} from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import { CustomCard, CustomCardContent } from "Utilty";
import { updateKey } from "Redux/Slices/activateKeySlice";

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

const DetailKeyInfo = () => {
  const dispatch = useDispatch();
  const key = useSelector((state) => state.activateKey.key);
  const [value, setValue] = React.useState(2);
  console.log(key.id);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClick = () => {
    dispatch(
      updateKey({
        ...key,
        showKeyDetails: !key.showKeyDetails,
      })
    );
  };

  return (
    <Grid xs item container direction="column">
      <CustomCard>
        <CustomCardContent style={{ backgroundColor: "#fff" }}>
          <Button
            variant="text"
            onClick={handleClick}
            startIcon={<ArrowDropDownIcon />}
            style={{
              color: "black",
              justifyContent: "flex-start",
              textTransform: "none",
            }}
          >
            <Typography variant="subtitle1">
              Detail Product Key Information
            </Typography>
          </Button>
          {key.showKeyDetails ? (
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
                          key={row.fieldName}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
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
          ) : null}
        </CustomCardContent>
      </CustomCard>
    </Grid>
  );
};

export default DetailKeyInfo;
