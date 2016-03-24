import React from "react";


export default class DynamicContent extends React.Component {
  //handle content changes
  handleChange(e){
    const content = e.target.value;
    this.props.changeContent(content);
  }

  render() {
    return (
      <div>
        <div>{this.props.content}</div>
        <input value = {this.props.content} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
