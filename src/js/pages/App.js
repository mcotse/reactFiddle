import React from "react";
import Header from "../components/Header.js"
import Footer from "../components/Footer.js"

export default class App extends React.Component {
  render(){
    return(
      <div>
        <Header/>
        <h1>App</h1>
        <Footer/>
      </div>
    );
  }
}
