import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Modal from "./Modal";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <Modal></Modal>
  </React.StrictMode>
);
