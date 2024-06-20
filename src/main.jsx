import React from "react";
import ReactDOM from "react-dom/client";
import Modal from "react-modal";
import "modern-normalize";

import "./index.css";
import App from "./components/App/App";

Modal.setAppElement("#root");

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
