import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import {
  MenuItem,
  FormControl,
  Select,
  Button,
  Grid,
  Stack,
  Typography,
  OutlinedInput,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import { makeStyles } from "@mui/styles";

import DataGridCustom from "Components/DataGrid";
import { CustomCard, CustomCardContent } from "Utilty";
import { updateLicense, updateKey } from "Redux/Slices/activateKeySlice";

const useStyles = makeStyles({
  dropdown: {
    backgroundColor: "#fff",
    border: "1px",
    outline: "#fff solid 5px",
  },
});

const DisplayKeys = () => {
  const dispatch = useDispatch();
  const license = useSelector((state) => state.activateKey.license);
  const key = useSelector((state) => state.activateKey.key);

  const [gridData, setGridData] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);
  const classes = useStyles();

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
      width: 60,
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
      width: 200,
      editable: false,
    },
    {
      field: "feature",
      headerName: "Feature",
      width: 120,
      editable: false,
    },
    {
      field: "company",
      headerName: "Company",
      width: 170,
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
      width: 150,
      editable: false,
      renderCell: (params) =>
        params.row.status === "Activated" ? null : "Inactive",
    },
    {
      field: "info",
      headerName: "",
      width: 75,
      editable: false,
      renderCell: (params) => (
        <Button
          variant="outlined"
          color="primary"
          onClick={() => {
            dispatch(
              updateKey({
                ...key,
                id: params.row.productKey,
                showKeyDetails: !key.showKeyDetails,
              })
            );
          }}
        >
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
        <Button variant="outlined" color="primary">
          <DeleteIcon />
        </Button>
      ),
    },
  ];

  const setSelectionModelInDataGrid = (newSelectedModel) => {
    setSelectionModel(newSelectedModel);
  };

  return (
    <Grid container direction="column">
      <CustomCard>
        <CustomCardContent>
          <Grid item mb={1}>
            <Typography id="licenseID-title" variant="h6">
              License Server ID
            </Typography>
          </Grid>
          <Grid item mb={1}>
            <Typography id="licenseID-subtitle" variant="caption">
              Insert the License server ID the product keys should be linked to.
            </Typography>
          </Grid>
          <Grid>
            <FormControl sx={{ width: "40ch" }}>
              <OutlinedInput
                disabled
                size="small"
                value={license.licenseServerID}
                onChange={(event) =>
                  dispatch(
                    updateLicense({
                      ...license,
                      licenseServerID: event.target.value,
                    })
                  )
                }
              />
            </FormControl>
          </Grid>
        </CustomCardContent>
      </CustomCard>
      <CustomCard>
        <CustomCardContent>
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
          <Grid>
            <FormControl sx={{ minWidth: 70 }} size="small">
              <Select
                value={license.protocolVersion}
                onChange={(event) =>
                  dispatch(
                    updateLicense({
                      ...license,
                      protocolVersion: event.target.value,
                    })
                  )
                }
                displayEmpty
                className={classes.dropdown}
              >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </CustomCardContent>
      </CustomCard>
      <CustomCard>
        <CustomCardContent>
          <Grid item mb={6}>
            <div>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography id="option1-subtitle" variant="caption">
                  Below you&apos;ll find a list of the product keys that should
                  be activated with the license server. <br />
                  If a key doesn&apos;t exist you can proceed with activation.{" "}
                </Typography>
                <Button
                  variant="outlined"
                  style={{ fontWeight: "bold" }}
                  size="small"
                >
                  + Add Key
                </Button>
              </Stack>
            </div>
          </Grid>
          <Grid item>
            <DataGridCustom
              columns={columns}
              rows={gridData}
              selectionModel={selectionModel}
              setSelectionModel={setSelectionModelInDataGrid}
            ></DataGridCustom>
          </Grid>
        </CustomCardContent>
      </CustomCard>
    </Grid>
  );
};

export default DisplayKeys;
