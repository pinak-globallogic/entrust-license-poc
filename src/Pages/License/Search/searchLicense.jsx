import { Box, Button, Grid, TextField } from "@mui/material";
import Radio from "@mui/material/Radio";
import axios from "axios";

import { useEffect, useState } from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import DataGridCustom from "../../../Components/DataGrid";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Stack from "@mui/material/Stack";

const formatDateFromMilliSeconds = (dateMilliSeconds) => {
  var date = new Date(Number(dateMilliSeconds)), month = "" + (date.getMonth() + 1),
    day = "" + date.getDate(),
    year = date.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

const SearchLicense = () => {
  const [data, setData] = useState([]);
  const [pageSize, setPageSizeState] = useState(10);
  const [selectionModel, setSelectionModel] = useState([]);
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    //Comment loadLicense method call from here if not need to fetch on load
    loadLicense();
  }, []);

  const loadLicense = () => {
    axios
      .get("https://mocki.io/v1/2c5fde10-c234-488f-b8a0-dde7b5cc2d69")
      .then((response) => {
        setSelectionModel([response.data[0].id]);
        setData(response.data);
      });
  };

  const setSelectionModelInDataGrid = (newSelectedModel) => {
    setSelectionModel(newSelectedModel);
  };

  const setPageSize = (newPageSize) => {
    setPageSizeState(newPageSize);
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
        params.row.status === "Activated" ? <CheckCircleOutlineIcon color="success" /> : <DoNotDisturbIcon color="disabled" />,
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

  const handleGetRowId = (e) => {
    return e.licenseId;
  };

  return (
    <Grid container xs={6}>
      <Grid item xs={12}>
        Input keyworkds to filter the database. Click Search and find the
        results below.<br></br> You can filter the database for one or more
        parameters. At least one parameter must be set
      </Grid>
      <Grid xs={4} pt={2}>
        <TextField
          label="Product Key"
          variant="outlined"
          fullWidth
          name="productKey"
        />
      </Grid>
      <Grid xs={1}></Grid>

      <Grid xs={4} pt={2}>
        <TextField
          label="Customer Name"
          variant="outlined"
          fullWidth
          name="customerName"
        />
      </Grid>
      <Grid xs={3}></Grid>

      <Grid xs={4} pt={2}>
        <TextField
          label="License Server ID"
          variant="outlined"
          fullWidth
          name="licenseServerId"
        />
      </Grid>
      <Grid xs={1}></Grid>

      <Grid xs={4} pt={2}>
        <TextField
          label="Sales Order No."
          variant="outlined"
          fullWidth
          name="orderNo"
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
              disableFuture
              label="Only show results before"
              openTo="day"
              views={["year", "month", "day"]}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </Stack>
        </LocalizationProvider>
      </Grid>
      <Grid xs={4} />
      <Grid xs={3} alignSelf="self-end">
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" onClick={loadLicense} label="SEARCH">
            SEARCH
          </Button>
        </Box>
      </Grid>
      <Grid xs={12} marginTop={5}>
        <DataGridCustom
          setPageSize={setPageSize}
          columns={columns}
          rows={data}
          pageSize={pageSize}
          selectionModel={selectionModel}
          setSelectionModel={setSelectionModelInDataGrid}
          handleGetRowId={handleGetRowId}
        ></DataGridCustom>
      </Grid>
    </Grid>
  );
};
export default SearchLicense;
