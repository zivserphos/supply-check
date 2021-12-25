/* eslint-disable array-callback-return */
import React, { useRef, useState } from "react";
import "../styles.css";
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import Item from "./Item";
import { sendReport } from "../state/equpListReducer/equip-actions";

const StyledTableHead = styled(TableHead)(() => ({
  fontSize: "600",
  backgroundColor: "red",
}));

const EquipListTable = function () {
  const { equipmentList: equipment } = useSelector((state: CombineState) => ({
    ...state.equipmentReducer,
  }));
  const [itemReport, setItemReport] = useState<EquipmentItem[]>([]);
  const [allUpdated, setAllUpdated] = useState(true);
  const tableBodyEl = useRef(null);
  const rows = [...equipment];
  const dispatch = useDispatch();
  const notyf = new Notyf();

  const sendReportData = (): NotyfNotification => {
    const report = [...itemReport];
    if (report.length !== equipment.length)
      return notyf.error("please fill all item's quantity");
    dispatch(sendReport([...report]));
    setAllUpdated(true);
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
                setAllUpdated={setAllUpdated}
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

        {!allUpdated ? (
          <div style={{ color: "red", marginLeft: "1rem" }}>
            <FontAwesomeIcon icon={faExclamationTriangle} />
            (submit to update)
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default EquipListTable;
