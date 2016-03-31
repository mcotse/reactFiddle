import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from "./pages/Layout";
import About from "./pages/About";
import App from "./pages/App";
import Settings from "./pages/Settings";
import Archives from "./pages/Archives";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component = {Layout}>
      <IndexRoute component={About}></IndexRoute>
      <Route path="app" name="app" component={App}></Route>
      <Route path="settings" name="settings" component={Settings}></Route>
      <Route path="archives(/:article)" name="archives" component={Archives}></Route>
    </Route>
  </Router>,
app);
