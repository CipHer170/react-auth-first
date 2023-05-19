import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Provider from "./context/TodoContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider>
      <App />
    </Provider>
  </BrowserRouter>
);
