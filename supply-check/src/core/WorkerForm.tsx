/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FormEventHandler, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import addWorker from "../state/userReducer/user-actions";

const WorkerForm = function () {
  const [name, setName] = useState("");
  const [workPlace, setWorkPlace] = useState("");
  const [date, setDate] = useState("");

  const dispatch = useDispatch();

  function handleSubmit() {
    if (name !== "" && workPlace !== "" && date !== null) {
      const worker: WorkerInfo = {
        name,
        workPlace,
      };
      console.log(worker, date);
      dispatch(addWorker(worker, date));
    }
  }

  return (
    <Form className="d-flex flex-column justify-content-center">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Full name</Form.Label>
        <Form.Control
          defaultValue={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="Enter name"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicWorkplace">
        <Form.Label>Work place</Form.Label>
        <Form.Control
          defaultValue={workPlace}
          onChange={(e) => setWorkPlace(e.target.value)}
          type="text"
          name="workPlace"
          placeholder="Enter work place"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label>Date</Form.Label>
        <Form.Control
          defaultValue={date}
          type="Date"
          name="date"
          onChange={(e) => setDate(e.target.value)}
        />
      </Form.Group>
      <Button
        onClick={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        variant="warning"
        type="submit"
      >
        Submit
      </Button>
    </Form>
  );
};

export default WorkerForm;
