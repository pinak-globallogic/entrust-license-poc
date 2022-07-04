import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

const DataGridCustom = (props) => {
  const [pageSize, setPageSizeState] = useState(10);

  const setPageSize = (newPageSize) => {
    setPageSizeState(newPageSize);
  };

  return (
    <DataGrid
      rows={props.rows}
      columns={props.columns}
      pageSize={pageSize}
      rowsPerPageOptions={[10, 20, 50, 100]}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
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
