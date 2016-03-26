import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default class Settings extends React.Component {
  render(){
    return(
      <div>
        <Header/>
        <h1>Settings</h1>
        <Footer/>
      </div>
    );
  }
}
