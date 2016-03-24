import React from "react";


export default class DynamicContent extends React.Component {
  handleChange(e){
    const title = e.target.value;
    this.props.changeContent(content);
  }

  render() {
    return (
      <div>
        <a>{this.props.content}</a>
        <input value = {this.props.content} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
