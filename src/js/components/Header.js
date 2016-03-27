import React from "react";

import Navbar from "./Header/Navbar"
export default class Header extends React.Component {
  render() {
    const { location } = this.props;
    return (
      <div>
        <Navbar location={location}/><br/>
      </div>
    );
  }
}
