/* eslint-disable max-len */
/* eslint-disable no-throw-literal */
import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Notyf } from "notyf";
import { addItem } from "../state/equpListReducer/equip-actions";

const notyf = new Notyf();

const Form = function () {
  const itemNameEl = useRef<HTMLInputElement>(null);
  const fullQuantityEl = useRef<HTMLInputElement>(null);
  const currentQuantityEl = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  // const state = useSelector((_state) => _state);

  const formInputValues = (): string[] => {
    const itemName = itemNameEl.current?.value;
    const fullQuantity = fullQuantityEl.current?.value;
    const currentQuantity = currentQuantityEl.current?.value;
    return [itemName || "", fullQuantity || "", currentQuantity || ""];
  };

  const validInputs = (
    itemName: string,
    fullQuantity: string,
    currentQuantity: string
  ): validNewItem => {
    if (!itemName) {
      throw "item name is missing";
    }
    const num1 = Number(fullQuantity);
    const num2 = Number(currentQuantity);
    if (
      !Number(fullQuantity) ||
      !Number(currentQuantity) ||
      num1 <= 0 ||
      num2 < 0 ||
      num1 < num2
    ) {
      throw "please provide a valid number";
    }
    return {
      itemName,
      fullQuantity: Number(fullQuantity),
      currentQuantity: Number(currentQuantity),
    };
  };

  // eslint-disable-next-line consistent-return
  const addNewItem = () => {
    try {
      const [itemName, fullQuantity, currentQuantity] = formInputValues();
      const obj = validInputs(itemName, fullQuantity, currentQuantity);
      dispatch(addItem(obj));
    } catch (err) {
      notyf.error(err as string);
    }
  };
  return (
    <div>
      <form>
        <h4>Add Item:</h4>
        <h5>Item&#39;s Name</h5>
        <input
          ref={itemNameEl}
          className="form-control"
          type="text"
          aria-label="default input example"
        />
        <h5>Full Quantity</h5>
        <input
          ref={fullQuantityEl}
          className="form-control"
          type="text"
          aria-label="default input example"
        />
        <h5>Current Quantity</h5>
        <input
          ref={currentQuantityEl}
          className="form-control"
          type="text"
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
