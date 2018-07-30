import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App.js";

const Router = ({ tasks }) => (
  <BrowserRouter>
    <Switch>
      <Route path="/" render={props => <App {...props} tasks={tasks} />} />
    </Switch>
  </BrowserRouter>
);

export default Router;
