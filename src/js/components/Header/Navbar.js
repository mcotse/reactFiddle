import React from "react";
import { IndexLink, Link } from "react-router";


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
    //class will have "active" when path name is active
    const aboutClass = location.pathname === "/" ? "active" : "";
    const appClass = location.pathname.match(/^\/app/) ? "active" : "";
    const archivesClass = location.pathname.match(/^\/archives/) ? "active" : "";
    const settingsClass = location.pathname.match(/^\/settings/) ? "active" : "";
    const navClass = collapsed ? "collapse" : "";

    return (
      <div>
        <nav class="navbar navbar-default" role="navigation">
          <div class="container-fluid">
            <div class="navbar-header">
              {/*inverse current state.collapse*/}
              <button type="button" class="navbar-toggle collapsed" onClick={this.toggleCollapse.bind(this)}>
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
              <a class="navbar-brand" href="#">ReactFiddle</a>
              </div>

            <div class={"navbar-collapse " + navClass} id="navbar">
              <ul class="nav navbar-nav">
                <li class={aboutClass}>
                  <IndexLink to="/" onClick={this.toggleCollapse.bind(this)}>About</IndexLink>
                </li>
                <li class={appClass}>
                  <Link to="app" onClick={this.toggleCollapse.bind(this)}>App</Link>
                </li>
                <li class={archivesClass}>
                  <Link to="archives" onClick={this.toggleCollapse.bind(this)}>Archives</Link>
                </li>
                <li class={settingsClass}>
                  <Link to="settings" onClick={this.toggleCollapse.bind(this)}>Settings</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
