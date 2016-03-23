import React from "react";


export defailt class Layout extends React.Component {
  constructor(){
    super();
    this.name = "Matthew";
  }

  render() {
    return (
      <h1>My name is {this.name}!</h1>
    )
  }
}
