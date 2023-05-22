import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Provider from "./context/TodoContext";
import AuthProvider from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <Provider>
        <App />
      </Provider>
    </AuthProvider>
  </BrowserRouter>
);
