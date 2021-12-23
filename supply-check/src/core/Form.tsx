import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";

const Form = function () {
  const itemNameEl = useRef<HTMLInputElement>(null);
  const fullQuantityEL = useRef<HTMLInputElement>(null);
  const currentQuantityEL = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();
  const state = useSelector((_state) => _state);
  console.log(state);
  // const addItem = () => {

  // };
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
          ref={fullQuantityEL}
          className="form-control"
          type="text"
          aria-label="default input example"
        />
        <h5>Current Quantity</h5>
        <input
          ref={currentQuantityEL}
          className="form-control"
          type="text"
          aria-label="default input example"
        />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button> add item</Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
