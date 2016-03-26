import React from "react";
import { Link } from "react-router";


export default class Title extends React.Component {
  render() {
    return (
      <div>
        <Link to="about" type="button" class="btn btn-default">About</Link>
        <Link to="app" type="button" class="btn btn-primary">App</Link>
        <Link to="settings" type="button" class="btn btn-success">Settings</Link>
      </div>
    );
  }
}
