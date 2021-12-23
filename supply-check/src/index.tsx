import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import { store } from "./app/store";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
