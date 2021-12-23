import React from "react";
import Button from "react-bootstrap/Button";

const Form = function form() {
  return (
    <div>
      <h4>Add Item:</h4>
      <h5>Item&#39;s Name</h5>
      <input
        className="form-control"
        type="text"
        aria-label="default input example"
      />
      <h5>Full Quantity</h5>
      <input
        className="form-control"
        type="text"
        aria-label="default input example"
      />
      <h5>Current Quantity</h5>
      <input
        className="form-control"
        type="text"
        aria-label="default input example"
      />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button> add item</Button>
      </div>
    </div>
  );
};

export default Form;
