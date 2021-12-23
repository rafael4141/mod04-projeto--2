import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

axios.defaults.baseURL = "https://streaming-api-1.herokuapp.com";
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
