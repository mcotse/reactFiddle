import React from "react";


export default class DynamicContent extends React.Component {


  //handle content changes
  handleChange(e){
    const content = e.target.value;
    this.props.changeContent(content);
  }

  handleClick(){
    this.props.clearContent();
  }

  render() {
    // if (this.props.content!=null){
    //   console.log("true");
    // }
    // else{
    //   console.log("false")
    // }
    return (

      <div>
        {/*display content state thats being passed in*/}
        <div><h3>{this.props.content}</h3></div>
        <input
          value = {this.props.content}
          onChange={this.handleChange.bind(this)}
          ref = {(ref) => this.TextInput = ref}
        />
        <br></br>
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
