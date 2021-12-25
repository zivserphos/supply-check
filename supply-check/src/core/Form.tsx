/* eslint-disable max-len */
/* eslint-disable no-throw-literal */
import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import { Notyf } from "notyf";
import { addItem } from "../state/equpListReducer/equip-actions";

const notyf = new Notyf();

const Form = function () {
  const itemNameEl = useRef<HTMLInputElement>(null);
  const fullQuantityEl = useRef<HTMLInputElement>(null);
  const currentQuantityEl = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const formInputValues = (): {
    itemName: string;
    fullQuantity: number;
    currentQuantity: number;
  } => {
    const itemName = itemNameEl.current?.value || "";
    const fullQuantity = Number(fullQuantityEl.current?.value);
    const currentQuantity = Number(currentQuantityEl.current?.value);
    return { itemName, fullQuantity, currentQuantity };
  };

  const validInputs = (
    itemName: string,
    fullQuantity: number,
    currentQuantity: number
  ): { item: EquipmentItem } => {
    if (!itemName) {
      throw "item name is missing";
    }
    if (!fullQuantity || !currentQuantity || fullQuantity < currentQuantity) {
      throw "please provide a valid number";
    }
    return {
      item: {
        name: itemName,
        fullQuantity,
        missingQuantity: fullQuantity - currentQuantity,
      },
    };
  };

  const addNewItem = () => {
    try {
      const { itemName, fullQuantity, currentQuantity } = formInputValues();
      const { item } = validInputs(itemName, fullQuantity, currentQuantity);
      dispatch(addItem(item));
    } catch (err) {
      notyf.error(err as string);
    }
  };
  return (
    <div>
      <form>
        <h5>Add Item:</h5>
        <h6>Item&#39;s Name</h6>
        <input
          ref={itemNameEl}
          className="form-control"
          type="text"
          aria-label="default input example"
        />
        <h6>Full Quantity</h6>
        <input
          ref={fullQuantityEl}
          type="number"
          className="form-control"
          aria-label="default input example"
        />
        <h6>Current Quantity</h6>
        <input
          ref={currentQuantityEl}
          type="number"
          className="form-control"
          aria-label="default input example"
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button onClick={() => addNewItem()}> add item</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
