import React from "react";


export default class DynamicContent extends React.Component {


  constructor(){
    super();
    this.state = {
      content: "Type something below!"
    };
  }
  //handle content changes
  handleChange(e){
    const content = e.target.value;
    this.props.changeContent(content);
  }

  handleClick(){
    this.props.clearContent();
    this.TextInput.value ="";

  }

  //change the content state
  changeContent(content){
    this.setState({content});
  }
  //clear the content state
  clearContent(){
    this.setState({content: ""});
  }

  render() {
    return (
      <div>
        {/*display content state thats being passed in*/}
        <div><h3>{this.props.content}</h3></div>
        <input
          defaultValue = "Change Me"
          // value = {this.props.content}
          onChange={this.handleChange.bind(this)}
          ref = {(ref) => this.TextInput = ref}
        />
        <br/>
        <input
          class="btn btn-xs btn-danger"
          type="button"
          value="Clear"
          onClick={this.handleClick.bind(this)}
        />
      </div>
    );
  }
}
