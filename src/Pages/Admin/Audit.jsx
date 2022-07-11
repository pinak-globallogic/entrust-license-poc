import { Box, Grid, Typography, Button } from "@mui/material";
import TagsInput from "Components/TagsInput";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";

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
          <Typography>{children}</Typography>
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

const Audit = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSelectedTags = () => {
    //TODO
  };

  return (
    <Grid container marginLeft={6} pt={2} rowSpacing={5}>
      <Grid item xs={12}>
        <Box sx={{ width: "100%" }} mt={7}>
          <Typography variant="h5" gutterBottom component="div">
            Activity Log
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            Add user names, product keys or dates below and click search to
            filter the records
          </Typography>
        </Box>
      </Grid>

      <Grid container columnSpacing={6}>
        <Grid item xs={5}>
          <Box autoComplete="off" sx={{ backgroundColor: "white" }}>
            <TagsInput
              selectedTags={handleSelectedTags}
              fullWidth
              variant="outlined"
              id="tags"
              name="tags"
              placeholder="add Tags"
              label="tags"
            />{" "}
          </Box>
        </Grid>
        <Grid item xs={7}>
          <Box display="flex" justifyContent="flex-start" m={1}>
            <Button variant="contained" label="SEARCH">
              SEARCH
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={11}>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Activity Log" {...a11yProps(0)} />
              <Tab label="Logins" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            ACTIVITY LOG
          </TabPanel>
          <TabPanel value={value} index={1}>
            LOGINS
          </TabPanel>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Audit;
