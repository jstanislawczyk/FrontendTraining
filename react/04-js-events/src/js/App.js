import React, { Component } from 'react';
import '../css/App.css';

import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: "Welcome",
      content: "Basic content"
    };
  }

  changeContent(content) {
    this.setState({content});
  }

  render() {
    return (
      <div>
        <Header title={this.state.title} />
        <Content changeContent={this.changeContent.bind(this)} content={this.state.content}/>
        <Footer />
      </div>  
    );
  }
}

export default App;
