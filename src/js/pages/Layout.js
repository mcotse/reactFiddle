import React from "react";
import { Link } from "react-router";


import Header from "../components/Header"
import Footer from "../components/Footer"

export default class Layout extends React.Component {
  //declare default state

  render() {
    const { location } = this.props;
    return (
      <div class = "text-center" id="wrap">
        <Header location={location}/>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
