import React, { useRef } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { useSelector } from "react-redux";

const Item = function ({
  itemDetails,
  index,
  setItemReport,
  itemReport,
}: {
  itemDetails: EquipmentItem;
  index: number;
  setItemReport: (value: MissingItem[]) => void;
  itemReport: MissingItem[];
}) {
  const inputValue = useRef<HTMLInputElement>(null);
  const { missingItems } = useSelector(
    (equipstate: CombineState) => equipstate.equipmentReducer
  );
  const changeInput = () => {
    const updatedDetails = [...itemReport];
    const value = Number(inputValue.current?.value);
    updatedDetails[index] = { name: itemDetails.name, missingQuantity: NaN };
    if (value && value >= 0 && value <= itemDetails.fullQuantity) {
      updatedDetails[index].missingQuantity =
        itemDetails.fullQuantity - Number(inputValue.current?.value);
    }
    setItemReport(updatedDetails);
  };
  return (
    <TableRow
      key={itemDetails.name}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      style={{ backgroundColor: index % 2 === 0 ? "" : "gainsboro" }}
    >
      <TableCell component="th" scope="row">
        {index + 1}
      </TableCell>
      <TableCell align="right">{itemDetails.name}</TableCell>
      <TableCell align="right">{itemDetails.fullQuantity}</TableCell>
      <TableCell align="right">
        <input
          ref={inputValue}
          onChange={() => changeInput()}
          type="number"
          min="0"
          max={itemDetails.fullQuantity.toString()}
        />
      </TableCell>
      <TableCell align="right">{missingItems[index].missingQuantity}</TableCell>
    </TableRow>
  );
};

export default Item;
