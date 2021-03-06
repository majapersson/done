import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Router from "./Router.js";
import registerServiceWorker from "./registerServiceWorker";
import tasks from "./tasks.json";

ReactDOM.render(<Router tasks={tasks} />, document.getElementById("root"));
registerServiceWorker();
