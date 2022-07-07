import { makeStyles } from "@mui/styles";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

const useStyles = makeStyles({
  dataGrid: {
    background: "#fff",
  },
});

const DataGridCustom = (props) => {
  const [pageSize, setPageSizeState] = useState(5);
  const classes = useStyles();

  const setPageSize = (newPageSize) => {
    setPageSizeState(newPageSize);
  };

  return (
    <DataGrid
      className={classes.dataGrid}
      rows={props.rows}
      columns={props.columns}
      pageSize={pageSize}
      rowsPerPageOptions={[5, 10, 20, 50, 100]}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      autoHeight
      selectionModel={props.selectionModel}
      onSelectionModelChange={(newSelectionModel) => {
        props.setSelectionModel(newSelectionModel);
      }}
      hideFooterSelectedRowCount
    />
  );
};
export default DataGridCustom;
