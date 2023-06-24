// React Imports
import React from "react";
import ReactDOM from "react-dom/client";

// App Imports
import { App } from "./App";

// Styles Imports
import "antd/dist/reset.css";
import "@yanglee2421/scss";
import "@/assets/scss/global.scss";

// ** Element
const el = document.querySelector("#root");
if (!el) throw new Error("Invalid Element!");

// ** Root
const root = ReactDOM.createRoot(el);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
