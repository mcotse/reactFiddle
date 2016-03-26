import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
