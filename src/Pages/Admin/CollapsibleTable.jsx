import React from "react";
import { makeStyles } from "@mui/styles";
import { withStyles } from "@material-ui/core";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableFooter from "@mui/material/TableFooter";
import TablePagination from "@mui/material/TablePagination";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import LastPageIcon from "@mui/icons-material/LastPage";
import MuiTableCell from "@material-ui/core/TableCell";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto",
  },
  table: {
    minWidth: 650,
    border: 0,
  },
});

const TableCell = withStyles({
  root: {
    borderBottom: "none",
  },
})(MuiTableCell);

const ExpandableTableRow = ({ children, expandRowData, ...otherProps }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <>
      <TableRow {...otherProps}>
        <TableCell padding="checkbox">
          {expandRowData.length !== 0 && (
            <IconButton onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}
            </IconButton>
          )}
        </TableCell>
        {children}
      </TableRow>
      {isExpanded &&
        expandRowData.map((row) => (
          <TableRow key={row.id}>
            <TableCell padding="checkbox" colSpan={2} />
            <TableCell align="right">{row.activityDate}</TableCell>
            <TableCell align="right">{row.userName}</TableCell>
            <TableCell align="right">{row.machineName}</TableCell>
            <TableCell align="right">{row.activity}</TableCell>
          </TableRow>
        ))}
    </>
  );
};

function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

export default function CollapsibleTable(props) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const classes = useStyles();

  return (
    <Table className={classes.table} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox" />
          <TableCell>
            <strong>productkey</strong>
          </TableCell>
          <TableCell align="right">
            <strong>activitydate</strong>
          </TableCell>
          <TableCell align="right">
            <strong>username</strong>
          </TableCell>
          <TableCell align="right">
            <strong>machinename</strong>
          </TableCell>
          <TableCell align="right">
            <strong>activity</strong>
          </TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.rows.map((row) => (
          <ExpandableTableRow
            key={row.productKey}
            expandRowData={row.subActivities}
          >
            <TableCell component="th" scope="row">
              {row.productKey}
            </TableCell>
            <TableCell align="right">{row.activityDate}</TableCell>
            <TableCell align="right">{row.userName}</TableCell>
            <TableCell align="right">{row.machineName}</TableCell>
            <TableCell align="right">{row.activity}</TableCell>
          </ExpandableTableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, { label: "All", value: -1 }]}
            colSpan={6}
            count={props.rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              inputProps: {
                "aria-label": "rows per page",
              },
              native: true,
            }}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </TableRow>
      </TableFooter>
    </Table>
  );
}
