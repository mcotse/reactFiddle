import React from "react";
import { Link } from "react-router";


export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <div class="navbar navbar-default" role="navigation">
          <div class="containter">
            <div clas="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <Link to="/" class="navbar-brand">ReactFiddle</Link>
            </div>
            <div id="navbar" class="collapse navbar-collapse" aria-expanded ="false">
              <ul class="nav navbar-nav">
                <li><Link to="about">About</Link></li>
                <li><Link to="App">App</Link></li>
                <li><Link to="Settings">Settings</Link></li>
              </ul>
            </div>
          </div>
        </div>
        {/*}<Link to="about" type="button" class="btn btn-default">About</Link>
        <Link to="app" type="button" class="btn btn-primary">App</Link>
        <Link to="settings" type="button" class="btn btn-success">Settings</Link>*/}
      </div>
    );
  }
}
