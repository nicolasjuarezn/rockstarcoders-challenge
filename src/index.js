import React from "react";
import ReactDOM from "react-dom";
import "./index.styles.css";
import { AppRoutes } from "./AppRoutes.component";

ReactDOM.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>,
  document.getElementById("root")
);
