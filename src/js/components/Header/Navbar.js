import React from "react";
import { Link } from "react-router";


export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-default navbar-static-top">
          <div class="containter">
            <div clas="navbar-header">
              Hello
            </div>
          </div>
        </nav>
        <Link to="about" type="button" class="btn btn-default">About</Link>
        <Link to="app" type="button" class="btn btn-primary">App</Link>
        <Link to="settings" type="button" class="btn btn-success">Settings</Link>
      </div>
    );
  }
}
