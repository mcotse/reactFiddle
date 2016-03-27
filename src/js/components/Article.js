import React from "react";


export default class extends React.Component {
  render() {
    const { title } = this.props;

    return (
      <div class="col-md-4">
        <h3>{title}</h3>
        <p>testing testing</p>
        <a class="btn btn-default" href="#">More Info</a>
      </div>
    );
  }
}
