import React from "react";
import { Link } from "react-router";


export default class Navbar extends React.Component {
  constructor() {
    super()
    this.state = {
      collapsed:true,
    };
  }

  toggleCollapse() {
    const collapsed = !this.state.collapsed;
    this.setState({collapsed});
  }

  render() {
    const { location } = this.props;
    const { collapsed } = this.state;
    const featuredClass = location.pathname === "/" ? "active" : "";
    const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";


    return (
      <div>
        <nav class="navbar navbar-default">
          <div class="container-fluid">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">ReactFiddle</a>
            </div>

            <div class="collapse navbar-collapse" id="navbar">
              <ul class="nav navbar-nav">
                <li><Link activeClassName="active" to="about">About</Link></li>
                <li><Link activeClassName="active" to="App">App</Link></li>
                <li><Link activeClassName="active" to="Settings">Settings</Link></li>
              </ul>

            </div>
          </div>
        </nav>
        {/*}<Link to="about" type="button" class="btn btn-default">About</Link>
        <Link to="app" type="button" class="btn btn-primary">App</Link>
        <Link to="settings" type="button" class="btn btn-success">Settings</Link>*/}
      </div>
    );
  }
}
