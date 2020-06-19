import React from "react";
import ReactDOM from "react-dom";
import Routes from "./components/routes";
import { Router } from "react-router-dom";
import createHistory from "history/createBrowserHistory";

const history = createHistory();

ReactDOM.render(
  <Router history={history}>
    <Routes />
  </Router>,
  document.querySelector("#root")
);
