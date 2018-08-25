import React, { Component } from 'react';
import "../css/header.css";

class Header extends Component {
  render() {

    return (
      <header>{this.props.title}</header>
    );
  }
}

export default Header;