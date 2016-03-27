import React from "react";


export default class Footer extends React.Component {
  render() {
    const footerStyle = {
      position: "absolute",
      bottom: "0",
      width: "100%",
      height: "60px",
      backgroundColor: "#f5f5f5"
    };
    const muted = {
      margin: "20px 0"
    };
    const grey = {
      color: "#666666"
    }
    return (
      <div id="footer" style={footerStyle}>
        <div class="container">
          {/*<a href="https://github.com/mcotse" class="fa fa-lg fa-github"></a><i> </i>
          <a href="http://matthewtse.xyz" class="fa fa-lg fa-globe"></a>*/}
          <p class="muted credit" style={muted}><a href="https://github.com/mcotse" class="fa fa-lg fa-github" style={grey}></a> Matthew Tse 2016 </p>
        </div>
      </div>
    );
  }
}
