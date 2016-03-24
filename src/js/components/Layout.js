import React from "react";


import Header from "./Header"
import DynamicContent from "./DynamicContent"
import Footer from "./Footer"

export default class Layout extends React.Component {
  //declare default state
  constructor(){
    super();
    this.state = {
      content: "I will change when you type below",
    };
  }
  //change the content state
  changeContent(content){
    this.setState({content});
  }
  //clear the content state
  clearContent(){
    this.setState({
      content:"",
    })
  }
  render() {
    return (
      <div class = "text-center">
        <Header/>
        {/*pass in changeContent function to DynamicContent component*/}
        <DynamicContent changeContent={this.changeContent.bind(this)} content = {this.state.content}/>
        <Footer />
      </div>
    );
  }
}
