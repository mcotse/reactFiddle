import React from "react";
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

export default class About extends React.Component {
  render(){
    return(
      <div>
        <Header/>
        <h1>About</h1>
        <Footer/>
      </div>
    );
  }
}
