import React, { Component } from 'react';
import '../css/Layout.css';
import { Link } from 'react-router-dom';

class Layout extends Component {
  render() {
    return (
      <div class="layout">
        Layout
        <br /><br />
        <Link to="first"><button>First</button></Link>
        <br /><br />
        <Link to="second"><button>Second</button></Link>
        <br /><br />
        <Link to="third"><button>Third</button></Link>
        <br /><br />
      </div>  
    );
  }
}

export default Layout;
