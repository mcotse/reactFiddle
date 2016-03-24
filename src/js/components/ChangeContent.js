import React from "react";

import Title from "./Header/Title";
import Menu from "./Header/Menu"
export default class ChangeContent extends React.Component {
  handleChange(e){
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render() {
    return (
      <div>
        <Title title={this.props.title}/>
        <Menu/>
        <input value = {this.props.title} onChange={this.handleChange.bind(this)}/>
      </div>
    );
  }
}
