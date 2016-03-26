import React from "react";
import { Link } from "react-router";


export default class Title extends React.Component {
  render() {
    return (
      <div>
        <button type="button" class="btn btn-default">About</button>
        <button type="button" class="btn btn-primary">App</button>
        <button type="button" class="btn btn-success">Settings</button>
      </div>
    );
  }
}
