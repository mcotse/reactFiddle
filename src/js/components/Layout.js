import React from "react";


import Header from "./Header"
import DynamicContent from "./DynamicContent"
import Footer from "./Footer"

export default class Layout extends React.Component {
  constructor(){
    super();
    this.state = {
      content: "I will change when you type below",
    };
  }

  changeContent(content){
    this.setState({content});
  }
  render() {
    return (
      <div>
        <Header/>
        <DynamicContent changeContent={this.changeContent.bind(this)} content = {this.state.content}/>
        <Footer />
      </div>
    );
  }
}
