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
    <Route path="/" component = {Layout}></Route>
  </Router>,
app);
