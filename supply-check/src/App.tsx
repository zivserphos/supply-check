import React from "react";
import { useSelector } from "react-redux";
import EquipListTable from "./core/EquipList";
import Form from "./core/Form";
import WorkerForm from "./core/WorkerForm";

const App = function () {
  const workerState = useSelector((state: CombineState) => state.workerReducer);
  return (
    <div className="App">
      {workerState.worker ? (
        <>
          <EquipListTable />
          <Form />
        </>
      ) : (
        <WorkerForm />
      )}
    </div>
  );
};

export default App;
