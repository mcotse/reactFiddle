import React from "react";


export default class Title extends React.Component {
  render() {
    return (
      <div>
        <button type="button" class="btn btn-default">Featured</button>
        <button type="button" class="btn btn-primary">Archives</button>
        <button type="button" class="btn btn-success">Settings</button>
      </div>
    );
  }
}
