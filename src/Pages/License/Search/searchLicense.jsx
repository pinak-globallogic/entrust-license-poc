import { Box, Button, Grid, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import axios from "axios";

import { useEffect, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import DataGridCustom from "Components/DataGrid";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stack from "@mui/material/Stack";

const formatDateFromMilliSeconds = (dateMilliSeconds) => {
  var date = new Date(Number(dateMilliSeconds)),
    month = "" + (date.getMonth() + 1),
    day = "" + date.getDate(),
    year = date.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
};

const SearchLicense = () => {
  const [respData, setResponseData] = useState([]);
  const [gridData, setGridData] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);
  const [dateValue, setDateValue] = useState(new Date());

  const [productKey, setProductKey] = useState("");
  const [customerName, setCustomerName] = useState("");
  const [licenseServerId, setLicenseServerId] = useState("");
  const [salesOrderNo, setSalesOrderNo] = useState("");

  useEffect(() => {
    loadLicense();
  }, []);

  const loadLicense = () => {
    axios
      .get("https://mocki.io/v1/2c5fde10-c234-488f-b8a0-dde7b5cc2d69")
      .then((response) => {
        setSelectionModel([response.data[0].id]);
        setGridData(response.data);
        setResponseData(response.data);
      });
  };

  const setSelectionModelInDataGrid = (newSelectedModel) => {
    setSelectionModel(newSelectedModel);
  };

  const columns = [
    {
      field: "id",
      headerName: "",
      width: 50,
      sortable: false,
      renderCell: (params) => (
        <Radio checked={selectionModel[0] === params.id} value={params.id} />
      ),
    },
    {
      field: "productKey",
      headerName: "License Key",
      width: 150,
      editable: false,
    },
    {
      field: "feature",
      headerName: "Feature",
      width: 100,
      editable: false,
    },
    {
      field: "company",
      headerName: "Company",
      width: 120,
      editable: false,
    },
    {
      field: "orderId",
      headerName: "Order ID",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 120,
    },
    {
      field: "status",
      headerName: "Status",
      width: 75,
      editable: false,
      renderCell: (params) =>
        params.row.status === "Activated" ? (
          <CheckCircleOutlineIcon color="success" />
        ) : (
          <DoNotDisturbIcon color="disabled" />
        ),
    },
    {
      field: "user",
      headerName: "User",
      width: 100,
      editable: false,
    },
    {
      field: "createdOn",
      headerName: "Created",
      width: 120,
      editable: false,
      renderCell: (params) => formatDateFromMilliSeconds(params.row.createdOn),
    },
  ];

  const filterRecordFromGrid = () => {
    var filteredData = respData;
    if (productKey) {
      filteredData = filteredData.filter(
        (licObj) => licObj.productKey.indexOf(productKey.trim()) !== -1
      );
    }
    if (customerName) {
      filteredData = filteredData.filter(
        (licObj) => licObj.company.indexOf(customerName.trim()) !== -1
      );
    }
    if (licenseServerId) {
      // filteredData = filteredData.filter(
      //   (licObj) => licObj.licenseServerId === licenseServerId);
    }
    if (salesOrderNo) {
      filteredData = filteredData.filter(
        (licObj) => licObj.orderId.indexOf(salesOrderNo.trim()) !== -1
      );
    }

    if (dateValue) {
      filteredData = filteredData.filter(
        (licObj) =>
          new Date(Number(licObj.createdOn)).getTime() <= dateValue.getTime()
      );
    }
    setGridData(filteredData);
    if (filteredData.length > 0) {
      setSelectionModel([filteredData[0].id]);
    }
  };

  return (
    <Grid container xs={6}>
      <Grid item xs={12}>
        Input keywords to filter the database. Click Search and find the results
        below.<br></br> You can filter the database for one or more parameters.
        At least one parameter must be set
      </Grid>
      <Grid xs={4} pt={2}>
        <TextField
          id="productKey"
          label="Product Key"
          variant="outlined"
          fullWidth
          name="productKey"
          onChange={(e) => {
            setProductKey(e.target.value);
          }}
        />
      </Grid>
      <Grid xs={1}></Grid>

      <Grid xs={4} pt={2}>
        <TextField
          id="customerName"
          label="Customer Name"
          variant="outlined"
          fullWidth
          name="customerName"
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </Grid>
      <Grid xs={3}></Grid>

      <Grid xs={4} pt={2}>
        <TextField
          id="licenseServerId"
          label="License Server ID"
          variant="outlined"
          fullWidth
          name="licenseServerId"
          onChange={(e) => setLicenseServerId(e.target.value)}
        />
      </Grid>
      <Grid xs={1}></Grid>

      <Grid xs={4} pt={2}>
        <TextField
          id="salesOrderNo"
          label="Sales Order No."
          variant="outlined"
          fullWidth
          name="orderNo"
          onChange={(e) => setSalesOrderNo(e.target.value)}
        />
      </Grid>
      <Grid xs={3}></Grid>

      <Grid xs={12} marginTop={3}>
        By default, the most recently created key is shown first.
      </Grid>
      <Grid xs={12}>
        Pick a date to only display keys that where created before a certain
        date.
      </Grid>
      <Grid marginTop={3} xs={3}>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <Stack spacing={3}>
            <DatePicker
              id="createdDate"
              disableFuture
              label="Only show results before"
              openTo="day"
              views={["year", "month", "day"]}
              value={dateValue}
              onChange={(newValue) => {
                setDateValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </Grid>
      <Grid xs={4} />
      <Grid xs={3} alignSelf="self-end">
        <Box display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            onClick={filterRecordFromGrid}
            label="SEARCH"
            id="searchLicense"
            name="searchLicense"
          >
            SEARCH
          </Button>
        </Box>
      </Grid>
      <Grid xs={12} marginTop={5}>
        <DataGridCustom
          columns={columns}
          rows={gridData}
          selectionModel={selectionModel}
          setSelectionModel={setSelectionModelInDataGrid}
        ></DataGridCustom>
      </Grid>
    </Grid>
  );
};
export default SearchLicense;
