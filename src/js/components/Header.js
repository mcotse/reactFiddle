import React from "react";

import Title from "./Header/Title";
import Menu from "./Header/Menu"
export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Title/>
        <Menu/><br></br>
      </div>
    );
  }
}
