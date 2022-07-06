import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";
import DataGridCustom from "Components/DataGrid";
import { CustomCard, CustomCardContent } from "Utilty";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import axios from "axios";
import { useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import ProductKeyInformationCard from "Pages/License/Search/ProductKeyInformationCard";

const DisplayKeys = () => {
  const [age, setAge] = React.useState("");
  const [gridData, setGridData] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  useEffect(() => {
    loadLicense();
  }, []);

  const loadLicense = () => {
    axios
      .get("https://mocki.io/v1/2c5fde10-c234-488f-b8a0-dde7b5cc2d69")
      .then((response) => {
        setSelectionModel([response.data[0].id]);
        setGridData(response.data);
      });
  };

  const columns = [
    {
      field: "status",
      headerName: "Status",
      width: 75,
      sortable: false,
      renderCell: (params) =>
        params.row.status === "Activated" ? (
          <CheckCircleOutlineIcon color="success" />
        ) : (
          <ReportProblemIcon color="warning" />
        ),
    },
    {
      field: "productKey",
      headerName: "License Key",
      width: 160,
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
      width: 145,
      editable: false,
    },
    {
      field: "orderId",
      headerName: "Order ID",
      sortable: false,
      width: 120,
    },
    {
      field: "serverResponse",
      headerName: "Server Response",
      width: 125,
      editable: false,
      renderCell: (params) =>
        params.row.status === "Activated" ? null : "Inactive",
    },
    {
      field: "info",
      headerName: "",
      width: 75,
      editable: false,
      renderCell: () => (
        <Button variant="outlined" color="primary" size="small">
          <InfoIcon />
        </Button>
      ),
    },
    {
      field: "delete",
      headerName: "",
      width: 75,
      editable: false,
      renderCell: () => (
        <Button variant="outlined" color="primary" size="small">
          <DeleteIcon />
        </Button>
      ),
    },
  ];

  const setSelectionModelInDataGrid = (newSelectedModel) => {
    setSelectionModel(newSelectedModel);
  };

  return (
    <Grid container>
      <Grid item xs={7}>
        <CustomCard>
          <CustomCardContent>
            <Grid item mb={1}>
              <Typography id="licenseID-title" variant="h6">
                License Server ID
              </Typography>
            </Grid>
            <Grid item mb={1}>
              <Typography id="licenseID-subtitle" variant="caption">
                Insert the License server ID the product keys should be linked
                to.
              </Typography>
            </Grid>
            <Grid item mb={8}>
              <FormControl sx={{ width: "40ch" }}>
                <OutlinedInput value="23456-234567890-123456789-123456" />
              </FormControl>
            </Grid>
            <Grid item mb={1}>
              <Typography id="version-title" variant="h6">
                Protocol Version
              </Typography>
            </Grid>
            <Grid item mb={1}>
              <Typography id="version-subtitle" variant="caption">
                Select the protocol version
              </Typography>
            </Grid>
            <Grid item mb={8}>
              <FormControl sx={{ minWidth: 70 }} size="small">
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                  style={{
                    backgroundColor: "#fff",
                    border: "1px",
                    outline: "#ffffff solid 5px",
                  }}
                >
                  <MenuItem value="">
                    <em>1</em>
                  </MenuItem>
                  <MenuItem value={2}>2</MenuItem>
                  <MenuItem value={3}>3</MenuItem>
                  <MenuItem value={4}>4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item mb={8}>
              <div>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography id="option1-subtitle" variant="caption">
                    Below you&apos;ll find a list of the product keys that
                    should be activated with the license server. <br />
                    If a key doesn&apos;t exist you can proceed with activation.{" "}
                  </Typography>
                  <Button variant="outlined" style={{ fontWeight: "bold" }}>
                    + Add Key
                  </Button>
                </Stack>
              </div>
            </Grid>

            <Grid item>
              <div style={{ height: 360 }}>
                <DataGridCustom
                  columns={columns}
                  rows={gridData}
                  selectionModel={selectionModel}
                  setSelectionModel={setSelectionModelInDataGrid}
                ></DataGridCustom>
              </div>
            </Grid>
          </CustomCardContent>
        </CustomCard>
      </Grid>
      <ProductKeyInformationCard />
    </Grid>
  );
};

export default DisplayKeys;
