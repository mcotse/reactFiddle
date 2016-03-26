import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, IndexRoute, hashHistory} from "react-router"

import Layout from "./components/Layout";
import About from "./pages/About";
import App from "./pages/App";
import Settings from "./pages/Settings";


const app = document.getElementById('app');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component = {Layout}>
      <IndexRoute component={About}></IndexRoute>
      <Route path="about" component ={About}></Route>
      <Route path="app" component ={App}></Route>
      <Route path="settings" component ={Settings}></Route>
    </Route>
  </Router>,
app);
