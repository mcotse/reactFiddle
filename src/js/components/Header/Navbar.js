import React from "react";
import { Link } from "react-router";


export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-default">
          <div class="containter-fluid">
            <div clas="navbar-header">
              <Link to="/" class="navbar-brand">ReactFiddle</Link>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
              <ul class="nav navbar-nav">
                <li><Link to="about">About</Link></li>
                <li><Link to="App">App</Link></li>
                <li><Link to="Settings">Settings</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        {/*}<Link to="about" type="button" class="btn btn-default">About</Link>
        <Link to="app" type="button" class="btn btn-primary">App</Link>
        <Link to="settings" type="button" class="btn btn-success">Settings</Link>*/}
      </div>
    );
  }
}
