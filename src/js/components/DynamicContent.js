import React from "react";


export default class DynamicContent extends React.Component {
  //handle content changes
  handleChange(e){
    const content = e.target.value;
    this.props.changeContent(content);
  }

  handleClear(){
    this.props.clearContent();
    
  }

  render() {
    return (
      <div>
        {/*display content state thats being passed in*/}
        <h3>{this.props.content}</h3>
        <input onChange={this.handleChange.bind(this)} id="input"/>
        <br></br>
        <button onClick={this.handleClear.bind(this)} class="btn btn-xs btn-danger">Clear</button>
        </div>
    );
  }
}
