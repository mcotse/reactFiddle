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
        {/*display content state thats being passed in*/}
        <div>{this.props.content}</div>
        <input value = {this.props.content} onChange={this.handleChange.bind(this)}/>
        <br></br>
        <button class="btn btn-xs btn-danger">Clear</button>
      </div>
    );
  }
}
