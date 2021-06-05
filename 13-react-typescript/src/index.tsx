import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import TodosContexProvider from "./store/todos-context";

ReactDOM.render(
  <TodosContexProvider>
    <App />
  </TodosContexProvider>,
  document.getElementById("root")
);
