import React from "react";


export default class App extends React.Component {


  constructor(){
    super();
    this.state = {
      content: "Type something below!"
    };
  }
  //handle content changes
  handleChange(e){
    const content = e.target.value;
    this.setState({content});
  }

  handleClick(){
    this.setState({content: ""});
    this.TextInput.value ="";

  }
  //
  // //change the content state
  // changeContent(content){
  //   this.setState({content});
  // }
  // //clear the content state
  // clearContent(){
  //   this.setState({content: ""});
  // }

  render() {
    return (
      <div>
        {/*display content state thats being passed in*/}
        <div><h3>{this.state.content}</h3></div>
        <input
          defaultValue = "Change Me"
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
