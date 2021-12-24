import React from "react";
import { useSelector } from "react-redux";
import EquipListTable from "./core/EquipList";
import Form from "./core/Form";

const App = function () {
  console.log(useSelector((state) => state));
  return (
    <div className="App">
      <EquipListTable />
      <Form />
    </div>
  );
};

export default App;
