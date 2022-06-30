//import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const DataGridCustom = (props) => {
  return (
    <DataGrid
      rows={props.rows}
      columns={props.columns}
      pageSize={props.pageSize}
      rowsPerPageOptions={[10, 20, 50, 100]}
      onPageSizeChange={(newPageSize) => props.setPageSize(newPageSize)}
      autoHeight
      selectionModel={props.selectionModel}
      onSelectionModelChange={(newSelectionModel) => {
        props.setSelectionModel(newSelectionModel);
      }}
      hideFooterSelectedRowCount="true"
    />
  );
};
export default DataGridCustom;
