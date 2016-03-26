import React from "react";


import Header from "./Header"
import DynamicContent from "./DynamicContent"
import Footer from "./Footer"

export default class Layout extends React.Component {
  //declare default state

  render() {
    return (
      <div class = "text-center">
        <Header/>
        {/*pass in changeContent function to DynamicContent component*/}
        {/*<DynamicContent
          changeContent={this.changeContent.bind(this)}
          clearContent={this.clearContent.bind(this)}
          content = {this.state.content}
        />*/}
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
