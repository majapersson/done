import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";
import registerServiceWorker from "./registerServiceWorker";
import tasks from "./tasks.json";

ReactDOM.render(<App tasks={tasks} />, document.getElementById("root"));
registerServiceWorker();
