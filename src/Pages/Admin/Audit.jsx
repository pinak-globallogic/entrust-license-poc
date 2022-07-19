import { Box, Grid, Typography, Button } from "@mui/material";
import TagsInput from "components/TagsInput";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import CollapsibleTable from "pages/admin/CollapsibleTable";

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

const collapsibleTableData = [
  {
    productKey: "1234-1234-1234-1111",
    activityDate: "01/01/2020 15:00",
    userName: "username",
    machineName: "server01",
    activity: "created",
    subActivities: [],
  },
  {
    productKey: "1234-1234-1234-2222",
    activityDate: "01/01/2020 15:00",
    userName: "username",
    machineName: "server01",
    activity: "created",
    subActivities: [
      {
        id: "1",
        activityDate: "01/01/2020 15:00",
        userName: "username",
        machineName: "server01",
        activity: "created",
      },
    ],
  },
  {
    productKey: "1234-1234-1234-3333",
    activityDate: "01/01/2020 15:00",
    userName: "username",
    machineName: "server01",
    activity: "created",
    subActivities: [],
  },
  {
    productKey: "1234-1234-1234-4444",
    activityDate: "01/01/2020 15:00",
    userName: "username",
    machineName: "server01",
    activity: "created",
    subActivities: [
      {
        id: "2",
        activityDate: "01/01/2020 15:00",
        userName: "username",
        machineName: "server01",
        activity: "created",
      },
    ],
  },
];

const Audit = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSelectedTags = () => {
    //TODO
  };

  return (
    <Grid container marginLeft={6} rowSpacing={4}>
      <Grid item xs={12}>
        <Box sx={{ width: "100%" }}>
          <Typography variant="h5" gutterBottom component="div">
            Activity Log
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            Add user names, product keys or dates below and click search to
            filter the records
          </Typography>
        </Box>
      </Grid>

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
        <Box display="flex" justifyContent="flex-start" m={1} marginLeft={7}>
          <Button variant="contained" label="SEARCH">
            SEARCH
          </Button>
        </Box>
      </Grid>

      <Grid item xs={11}>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
              backgroundColor: "white",
              width: "20%",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Activity Log" {...a11yProps(0)} />
              <Tab label="Logins" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <Box sx={{ backgroundColor: "white" }}>
            <TabPanel value={value} index={0}>
              <CollapsibleTable rows={collapsibleTableData} />
            </TabPanel>
          </Box>
          <TabPanel value={value} index={1}>
            <Grid container sx={{ minHeight: 300 }}></Grid>
          </TabPanel>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Audit;
