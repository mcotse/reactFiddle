import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./pages/Layout";
import About from "./pages/About";
import App from "./pages/App";
import Settings from "./pages/Settings";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component = {Layout}>
      <IndexRoute component={About}></IndexRoute>
      <Route path="app" name="app" component={App}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
    </Route>
  </Router>,
app);
