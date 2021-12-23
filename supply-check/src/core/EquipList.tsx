import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material";
import fullEquipmentList from "../db/db";

const StyledTableHead = styled(TableHead)(({ theme }) => ({
  fontSize: "600",
  backgroundColor: "red",
}));
const rows = [...fullEquipmentList];
const EquipListTable = function () {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <StyledTableHead>
          <TableRow>
            <TableCell>#</TableCell>
            <TableCell align="right">Item&apos;s Name</TableCell>
            <TableCell align="right">Full Quantity</TableCell>
            <TableCell align="right">Current Quantity</TableCell>
            <TableCell align="right">Missing</TableCell>
          </TableRow>
        </StyledTableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              style={{ backgroundColor: i % 2 === 0 ? "" : "gainsboro" }}
            >
              <TableCell component="th" scope="row">
                {i + 1}
              </TableCell>
              <TableCell align="right">{row.name}</TableCell>
              <TableCell align="right">{row.fullQuantity}</TableCell>
              <TableCell align="right">
                <input />
              </TableCell>
              <TableCell align="right">{row.fullQuantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default EquipListTable;
