import React from "react";


export default class Title extends React.Component {
  render() {
    return (
      <div>
        <button type="button" class="btn btn-primary">Featured</button>
        <button type="button" class="btn btn-success">Archives</button>
        <button type="button" class="btn btn-danger">Settings</button>
      </div>
    );
  }
}
