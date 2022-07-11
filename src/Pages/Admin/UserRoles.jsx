import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import {
  DataGrid,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import { Grid } from "@mui/material";

const UserRoles = () => {
  const [pageSize, setPageSize] = useState(10);
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(true);

  const columns = [
    {
      field: "role",
      renderHeader: () => <strong>Role</strong>,
      width: 230,
      sortable: false,
    },
    {
      field: "adGroup",
      width: 85,
      headerAlign: "center",
      sortable: false,
      renderHeader: () => <strong>AD Group</strong>,
    },
    {
      field: "generation",
      width: 90,
      align: "center",
      sortable: false,
      renderHeader: () => <strong>Generation</strong>,
      headerAlign: "center",
      renderCell: (params) =>
        params.row.generation === true ? (
          <Checkbox defaultChecked />
        ) : (
          <Checkbox />
        ),
    },
    {
      field: "activation",
      headerAlign: "center",
      align: "center",
      width: 85,
      sortable: false,
      renderHeader: () => <strong>Activation</strong>,
      description: "This column has a value getter and is not sortable.",
      renderCell: (params) =>
        params.row.generation === true ? (
          <Checkbox defaultChecked />
        ) : (
          <Checkbox />
        ),
    },
    {
      field: "reactivation",
      width: 100,
      align: "center",
      sortable: false,
      renderHeader: () => <strong>Reactivation</strong>,
      headerAlign: "center",
      renderCell: (params) =>
        params.row.generation === true ? (
          <Checkbox defaultChecked />
        ) : (
          <Checkbox />
        ),
    },
    {
      field: "rehost",
      width: 65,
      align: "center",
      sortable: false,
      renderHeader: () => <strong>Rehost</strong>,
      headerAlign: "center",
      renderCell: (params) =>
        params.row.generation === true ? (
          <Checkbox defaultChecked />
        ) : (
          <Checkbox />
        ),
    },
    {
      field: "featureModification",
      width: 155,
      align: "center",
      sortable: false,
      renderHeader: () => <strong>Feature Modification</strong>,
      headerAlign: "center",
      renderCell: (params) =>
        params.row.generation === true ? (
          <Checkbox defaultChecked />
        ) : (
          <Checkbox />
        ),
    },
    {
      field: "updateExpiry",
      width: 110,
      align: "center",
      sortable: false,
      renderHeader: () => <strong>Update Expiry</strong>,
      headerAlign: "center",
      renderCell: (params) =>
        params.row.generation === true ? (
          <Checkbox defaultChecked />
        ) : (
          <Checkbox />
        ),
    },
    {
      field: "licenseToolAccess",
      width: 155,
      align: "center",
      sortable: false,
      renderHeader: () => <strong>License Tool Access</strong>,
      headerAlign: "center",
      renderCell: (params) =>
        params.row.generation === true ? (
          <Checkbox defaultChecked />
        ) : (
          <Checkbox />
        ),
    },
    {
      field: "licenseToolAdmin",
      width: 150,
      sortable: false,
      renderHeader: () => <strong>License Tool Admin</strong>,
      headerAlign: "center",
      align: "center",
      renderCell: (params) =>
        params.row.generation === true ? (
          <Checkbox defaultChecked />
        ) : (
          <Checkbox />
        ),
    },
  ];

  const CustomToolbar = () => {
    return (
      <GridToolbarContainer>
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
      </GridToolbarContainer>
    );
  };

  const sampleGridData = [
    {
      id: "1",
      role: "Test Product Key Management",
      generation: true,
      activation: true,
      reactivation: true,
      rehost: true,
      featureModification: true,
      updateExpiry: true,
      licenseToolAccess: true,
      licenseToolAdmin: true,
    },
    {
      id: "2",
      role: "Order Entry",
      generation: false,
      activation: false,
      reactivation: false,
      rehost: false,
      featureModification: false,
      updateExpiry: false,
      licenseToolAccess: false,
      licenseToolAdmin: false,
    },
    {
      id: "3",
      role: "Product Key Activation",
      generation: false,
      activation: false,
      reactivation: false,
      rehost: false,
      featureModification: false,
      updateExpiry: false,
      licenseToolAccess: false,
      licenseToolAdmin: false,
    },
    {
      id: "4",
      role: "Rehosting",
      generation: false,
      activation: false,
      reactivation: false,
      rehost: false,
      featureModification: false,
      updateExpiry: false,
      licenseToolAccess: false,
      licenseToolAdmin: false,
    },
    {
      id: "5",
      role: "Product Key update",
      generation: false,
      activation: false,
      reactivation: false,
      rehost: false,
      featureModification: false,
      updateExpiry: false,
      licenseToolAccess: false,
      licenseToolAdmin: false,
    },
    {
      id: "6",
      role: "Product Key update/rehost",
      generation: false,
      activation: false,
      reactivation: false,
      rehost: false,
      featureModification: false,
      updateExpiry: false,
      licenseToolAccess: false,
      licenseToolAdmin: false,
    },
    {
      id: "7",
      role: "Feature Modification",
      generation: false,
      activation: false,
      reactivation: false,
      rehost: false,
      featureModification: false,
      updateExpiry: false,
      licenseToolAccess: false,
      licenseToolAdmin: false,
    },
    {
      id: "8",
      role: "License Fulfillment",
      generation: false,
      activation: false,
      reactivation: false,
      rehost: false,
      featureModification: false,
      updateExpiry: false,
      licenseToolAccess: false,
      licenseToolAdmin: false,
    },
    {
      id: "9",
      role: "Manufacturing",
      generation: false,
      activation: false,
      reactivation: false,
      rehost: false,
      featureModification: false,
      updateExpiry: false,
      licenseToolAccess: false,
      licenseToolAdmin: false,
    },
    {
      id: "10",
      role: "Licensing Administration",
      generation: false,
      activation: false,
      reactivation: false,
      rehost: false,
      featureModification: false,
      updateExpiry: false,
      licenseToolAccess: false,
      licenseToolAdmin: false,
    },
    {
      id: "11",
      role: "Test Licensing Administration",
      generation: false,
      activation: false,
      reactivation: false,
      rehost: false,
      featureModification: false,
      updateExpiry: false,
      licenseToolAccess: false,
      licenseToolAdmin: false,
    },
  ];

  const getRoles = () => {
    setLoading(true);
    // TODO - Replace with real Api
    /*axios("https://getdata.free.beeceptor.com/getData")
      .then((response) => {
        setLoading(false);
        setGridData(response.data);
      })*/
    setLoading(false);
    setGridData(sampleGridData);
  };

  useEffect(() => {
    getRoles();
  }, []);

  return (
    <Grid container marginLeft={6} pt={2} rowSpacing={5}>
      <Grid item xs={12}>
        <Box sx={{ width: "100%" }} mt={7}>
          <Typography variant="h5" gutterBottom component="div">
            User Roles
          </Typography>
          <Typography variant="subtitle2" gutterBottom component="div">
            Description
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} marginRight={2}>
        <Box sx={{ width: "100%" }}>
          <Card>
            <div style={{ width: "100%" }}>
              <DataGrid
                rows={gridData}
                columns={columns}
                components={{
                  Toolbar: CustomToolbar,
                }}
                autoHeight
                rowsPerPageOptions={[10, 20, 50, 100]}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                loading={loading}
              />
            </div>
          </Card>
        </Box>
      </Grid>
      <Grid container item justifyContent="flex-end" xs={10} sx={{ mb: 3 }}>
        <Button variant="contained" color="primary">
          Save
        </Button>
      </Grid>
    </Grid>
  );
};

export default UserRoles;
