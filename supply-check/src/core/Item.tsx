import React, { useRef, useState } from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";

const Item = function ({
  itemDetails,
  index,
  setItemReport,
  itemReport,
}: {
  itemDetails: EquipmentItem;
  index: number;
  setItemReport: (value: EquipmentItem[]) => void;
  itemReport: EquipmentItem[];
}) {
  const [currentVal, setCurrentVal] = useState<number>(
    itemDetails.missingQuantity
  );
  const inputValue = useRef<HTMLInputElement>(null);

  const changeInput = (current: number) => {
    setCurrentVal(current);
    const updatedDetails = [...itemReport];
    updatedDetails[index] = {
      ...itemDetails,
      missingQuantity: itemDetails.fullQuantity - current,
    };
    setItemReport([...updatedDetails]);
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
          onChange={(e) => changeInput(Number(e.target.value))}
          type="number"
          min="0"
          max={itemDetails.fullQuantity.toString()}
        />
      </TableCell>
      <TableCell align="right">
        {itemDetails.fullQuantity - currentVal}
      </TableCell>
    </TableRow>
  );
};

export default Item;
