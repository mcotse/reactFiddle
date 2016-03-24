import React from "react";


export default class DynamicContent extends React.Component {
  handleChange(e){
    const title = e.target.value;
    this.props.changeContent(content);
  }

  render() {
    return (
      <div>
        <h2>{this.props.content}</h2>
      </div>
    );
  }
}
