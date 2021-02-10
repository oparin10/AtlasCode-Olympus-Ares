import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux";

ReactDOM.render(
  <React.StrictMode>
    <React.Fragment>
      <Provider store={store}>
        <App />
      </Provider>
    </React.Fragment>
  </React.StrictMode>,
  document.getElementById("root")
);
