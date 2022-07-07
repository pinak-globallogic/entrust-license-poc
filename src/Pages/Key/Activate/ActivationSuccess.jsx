import axios from "axios";
import { useEffect, useState } from "react";

import { Chip, Typography, Grid } from "@mui/material";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import DataGridCustom from "Components/DataGrid";
import CustomerInfo from "./CustomerInfo";
import DetailKeyInfo from "./DetailKeyInfo";
import { CustomCard, CustomCardContent } from "Utilty";

const ActivationSuccess = () => {
  const [gridData, setGridData] = useState([]);
  const [selectionModel, setSelectionModel] = useState([]);

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
      renderCell: () => <CheckCircleIcon color="primary" />,
    },
    {
      field: "productKey",
      headerName: "License Key",
      width: 180,
      editable: false,
    },
    {
      field: "id",
      headerName: "License Server ID",
      width: 240,
      editable: false,
    },
    {
      field: "createdOn",
      headerName: "Activation Key",
      width: 180,
      editable: false,
    },
  ];

  const setSelectionModelInDataGrid = (newSelectedModel) => {
    setSelectionModel(newSelectedModel);
  };

  return (
    <Grid container pr={5}>
      <Grid item xs={7}>
        <CustomCard>
          <CustomCardContent>
            <Grid item container>
              <Grid item mb={1} marginRight="10px">
                <CheckCircleIcon color="primary" fontSize="large" />
              </Grid>
              <Grid item mb={3}>
                <Typography id="success-title" variant="h5">
                  Activation successfull
                </Typography>
              </Grid>
            </Grid>
            <Grid item mb={8}>
              <Typography id="success-subtitle" variant="caption">
                Each license key has been attached to provided license server
                ID.
              </Typography>
            </Grid>
            <Grid item mb={1}>
              <Typography id="export-title" variant="h5">
                Export activation file
              </Typography>
            </Grid>
            <Grid item mb={1}>
              <Typography id="export-subtitle" variant="caption">
                Export the corresponding activation file
              </Typography>
            </Grid>
            <Grid item mb={8}>
              <Chip
                label="EXPORT ACTIVATION FILE &nbsp;"
                deleteIcon={<FileDownloadIcon />}
                onDelete={() => ""}
                variant="filled"
                size="large"
                color="primary"
              />
            </Grid>
            <Grid item mb={1}>
              <Typography id="keyList-subtitle" variant="caption">
                The following keys were successfully activated.
              </Typography>
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
      <Grid item xs={5}>
        <CustomerInfo />
        <DetailKeyInfo />
      </Grid>
    </Grid>
  );
};

export default ActivationSuccess;
