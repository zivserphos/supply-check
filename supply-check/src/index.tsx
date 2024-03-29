import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import store from "./state/store";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
