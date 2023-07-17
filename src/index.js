import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import LinksContextProvider from "./Context/LinksContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LinksContextProvider>
      <App />
    </LinksContextProvider>
  </React.StrictMode>
);
