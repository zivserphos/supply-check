/* eslint-disable array-callback-return */
import React, { useRef, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, styled } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { Notyf, NotyfNotification } from "notyf";
import Item from "./Item";
import { sendReport } from "../state/equpListReducer/equip-actions";

const StyledTableHead = styled(TableHead)(() => ({
  fontSize: "600",
  backgroundColor: "red",
}));

const EquipListTable = function () {
  const { equipmentList: equipment } = useSelector(
    (state: CombineState) => state.equipmentReducer
  );
  const [itemReport, setItemReport] = useState<MissingItem[]>([]);
  const tableBodyEl = useRef(null);
  const rows = [...equipment];
  const dispatch = useDispatch();
  const notyf = new Notyf();

  const sendReportData = (): NotyfNotification => {
    let isAllValueAdded = true;
    if (itemReport.length !== equipment.length)
      return notyf.error("please fill all item's quantity");
    itemReport.map((item) => {
      console.log(item.missingQuantity);
      if (!item.missingQuantity && item.missingQuantity !== 0)
        isAllValueAdded = false;
    });
    if (!isAllValueAdded)
      return notyf.error("current does not match full qunatity");
    dispatch(sendReport(itemReport));
    return notyf.success("report has been sent");
  };

  return (
    <div>
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
          <TableBody ref={tableBodyEl}>
            {rows.map((row, i) => (
              <Item
                itemDetails={row}
                index={i}
                key={row.name}
                setItemReport={setItemReport}
                itemReport={itemReport}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        style={{
          display: "flex",
          marginTop: "1rem",
          justifyContent: "center",
        }}
      >
        <Button
          color="success"
          size="small"
          variant="contained"
          onClick={() => sendReportData()}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default EquipListTable;
