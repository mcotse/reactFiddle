import React from "react";
import { Link } from "react-router";


import Header from "../components/Header"
import Footer from "../components/Footer"

export default class Layout extends React.Component {
  //declare default state

  render() {
    const containerStyle = {
      marginTop:"-40px",
      marginBottom: "80px"
    };
    const { location } = this.props;
    return (
      <div id="wrap">
        <Header location={location}/>
        <div class="container" style={containerStyle}>
          <div class="row">
            <div class="col-lg-12">

              {this.props.children}

            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}
