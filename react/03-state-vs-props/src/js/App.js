import React, { Component } from 'react';
import '../css/App.css';

import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: "Welcome"
    };
  }

  render() {
    setTimeout(() => {
      this.setState({title: "Welcome React"});
    }, 2500);

    return (
      
      <div>
        <Header title={this.state.title} />
        <Header name={"Custom title"} title={"Other title"} />
        <Content />
        <Footer />
      </div>  
    );
  }
}

export default App;
