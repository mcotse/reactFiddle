import React from "react";


import Header from "./Header"
import Footer from "./Footer"

export default class Layout extends React.Component {
  //declare default state

  render() {
    return (
      <div class = "text-center">
        <Header/>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
