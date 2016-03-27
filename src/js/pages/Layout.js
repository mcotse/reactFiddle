import React from "react";
import { Link } from "react-router";


import Header from "../components/Header"
import Footer from "../components/Footer"

export default class Layout extends React.Component {
  //declare default state

  render() {
    const { location } = this.props;
    return (
      <div id="wrap">
        <Header location={location}/>
        <div class="container">
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
